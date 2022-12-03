import { Effect } from '../Effect';
import {
  IntegerValueEffectKey,
  MicroValueEffectKey,
  MilliPercentageEffectKey,
  MilliValueEffectKey,
  MultipleMilliPercentageEffectKey,
  NoValueEffectKey,
  PushPullEffectKey,
  RangeUpDownEffectKey
} from './SkillEffect';
import { IntegerValue, ValueUnit } from '../ValueUnit';
import { PassiveSkillEffective } from './SkillEffective';
import {
  SelfSkillEffectActivationCondition,
  SkillEffectActivationTrigger,
  TargetSkillEffectActivationCondition
} from './SkillEffectActivationCondition';
import { SkillEffectActivationRate } from './SkillEffectActivationRate';
import { Conditions, SkillEffectKey } from './UnitSkills';
import { SkillEffectScaleFactor } from './SkillEffectScaleFactor';
import { SkillEffectTag, SkillEffectTagStackValue } from './SkillEffectTag';
import { SkillEffectTarget } from './SkillEffectTarget';
import { SkillEffectTerm, SkillEffectTermRoundsValue } from './SkillEffectTerm';
import { SkillEffectTimesValue } from './SkillEffectTimesValue';
import { UnitForms } from '../UnitFormValue';
import { UnitNumber } from '../UnitBasicInfo';

import { isRecord } from '../../util/object';

type EffectValue<T extends ValueUnit> =
  {
    readonly [key in T]: number
  }

type EffectDataValue<T extends ValueUnit> =
  {
    readonly base: { readonly [key in T]: number },
    readonly per_lv_up: { readonly [key in T]: number }
  } |
  EffectValue<T>

export function isEffectDataValue<T extends ValueUnit>(unit: T, arg: EffectDataValue<T> | unknown): arg is EffectDataValue<T> {
  return isRecord(arg) && (
    'base' in arg && isRecord(arg.base) && typeof arg.base[unit] === 'number' ||
    typeof arg[unit] === 'number'
  );
}

type SkillEffectAddition = Readonly<{
  tag?: SkillEffectTag,
  max_stack?: SkillEffectTagStackValue,
  term?:
    typeof SkillEffectTerm['Immediate' | 'Infinite'] |
    {
      readonly [SkillEffectTerm.ForRounds]:
        SkillEffectTermRoundsValue |
        {
          readonly 1: Exclude<SkillEffectTermRoundsValue, 10 | 99 | 999>
          readonly 10: Exclude<SkillEffectTermRoundsValue, 1 | 10 | 99 | 999>
        }
    },
  rate?:
    SkillEffectActivationRate |
    EffectDataValue<'milliPercentage'>,
  times?:
    SkillEffectTimesValue |
    { readonly [key in 1 | 5]: SkillEffectTimesValue } |
    { readonly [key in 1 | 10]: SkillEffectTimesValue } |
    { readonly [key in 1 | 5 | 10]: SkillEffectTimesValue },
  cannot_be_dispelled?: true,
  enabledLv?: 10
}>

type ValueWithAddition<T extends ValueUnit> =
  EffectDataValue<T> & SkillEffectAddition

type TagStackEffectDataValue = { tag: SkillEffectTag } & Omit<SkillEffectAddition, 'tag'>

export type SkillEffectDataValue = Readonly<{
  [E in SkillEffectKey]?:
    E extends NoValueEffectKey ?
      SkillEffectAddition :
    E extends typeof Effect.CooperativeAttack ?
      { unit: UnitNumber, active: 1 | 2 } & SkillEffectAddition :
    E extends PushPullEffectKey ?
      IntegerValue<1 | 2> & SkillEffectAddition :
    E extends RangeUpDownEffectKey ?
      (
        IntegerValue<1 | 2 | 3> |
        { value: { 1: 1, 10:  2 } }
      ) & SkillEffectAddition :
    E extends typeof Effect.BattleContinuation ?
      ValueWithAddition<'value'> |
      ValueWithAddition<'milliPercentage'> |
      Readonly<{ value: { 1: 1, 5: 2, 10:  3 } }> & SkillEffectAddition :
    E extends IntegerValueEffectKey ?
      ValueWithAddition<'value'> :
    E extends MilliValueEffectKey ?
      ValueWithAddition<'milliValue'> :
    E extends MicroValueEffectKey ?
      ValueWithAddition<'microValue'> :
    E extends typeof Effect['BuffRemoval' | 'DebuffRemoval' | 'PreventsEffect'] ?
      ({
        effect: Effect
      } | {
        effects: ReadonlyArray<Effect>
      }) & SkillEffectAddition :
    E extends typeof Effect.ActivationRatePercentageUp ?
      { effect: Effect } & ValueWithAddition<'milliPercentage'> :
    E extends typeof Effect.AbsolutelyActivated ?
      {
        tag: SkillEffectTag,
        effect: Effect
      } & Omit<SkillEffectAddition, 'tag'> :
    E extends typeof Effect.TagStack ?
      TagStackEffectDataValue :
    E extends typeof Effect.TagRelease ?
      TagStackEffectDataValue |
      ReadonlyArray<TagStackEffectDataValue> :
    E extends typeof Effect.TagUnstack ?
      {
        tag: SkillEffectTag,
        value: 1
      } & Omit<SkillEffectAddition, 'tag'> :
    E extends typeof Effect['FormChange' | 'FormRelease'] ?
      { form: UnitForms } & SkillEffectAddition :
    E extends typeof Effect['AtkValueUpByUnitValue'] ?
      ValueWithAddition<'milliPercentage'> & { unit: 90 } :
    E extends typeof Effect['DamageMultiplierUpByStatus'] ?
      ValueWithAddition<'milliPercentage'> & { status: 'eva' } :
    E extends MultipleMilliPercentageEffectKey ?
      ValueWithAddition<'milliPercentage'> |
      ReadonlyArray<ValueWithAddition<'milliPercentage'>> :
    E extends Exclude<MilliPercentageEffectKey, MultipleMilliPercentageEffectKey> ?
      ValueWithAddition<'milliPercentage'> :
      never
}>

export type AroundSkillEffectDataValue = Readonly<{
  [Effect.FixedDamage]: ValueWithAddition<'milliPercentage'>
} & {
  [Effect.DefDown]?: ValueWithAddition<'milliPercentage'>,
}>

type SelfSkillEffect = Readonly<{
  conditions?: Conditions<SelfSkillEffectActivationCondition>,
  effective?: PassiveSkillEffective,
  scale_factor?: SkillEffectScaleFactor,
  details: { readonly self: SkillEffectDataValue }
}>

type TargetSkillEffect = Readonly<{
  conditions?: Conditions<TargetSkillEffectActivationCondition>,
  effective?: PassiveSkillEffective,
  scale_factor?: SkillEffectScaleFactor,
  target: SkillEffectTarget,
  details: {
    readonly self?: SkillEffectDataValue,
    readonly target?: SkillEffectDataValue,
  }
}>

type AroundSkillEffect = Readonly<{
  conditions: readonly [SkillEffectActivationTrigger],
  details: { readonly around: AroundSkillEffectDataValue }
}>

export function isSelfSkillEffectData(arg: SkillEffectData): arg is SelfSkillEffect {
  return !isTargetSkillEffectData(arg) && !isAroundSkillEffectData(arg);
}

export function isTargetSkillEffectData(arg: SkillEffectData): arg is TargetSkillEffect {
  return 'target' in arg;
}

export function isAroundSkillEffectData(arg: SkillEffectData): arg is AroundSkillEffect {
  return 'around' in arg.details;
}

export type SkillEffectData = SelfSkillEffect | TargetSkillEffect | AroundSkillEffect

export type SkillEffects = Readonly<{
  effects: ReadonlyArray<SkillEffectData>
}>

export type SkillEffectsAsEquipmentEffect = Readonly<{
  equipment_effects: ReadonlyArray<SkillEffectData>
}>
