import { ActiveSkillEffective, PassiveSkillEffective } from './SkillEffective';
import {
  DamageAttribute,
  SkillApCostValue,
  SkillRangeValue
} from './UnitSkillData';
import { Effect } from '../Effect';
import {
  EquipmentEffectOnly,
  IntegerValueEffectKey,
  MicroValueEffectKey,
  MilliPercentageEffectKey,
  MilliValueEffectKey,
  MultipleMilliPercentageEffectKey,
  NoValueEffectKey,
  PushPullEffectKey,
  RangeUpDownEffectKey
} from './SkillEffect';
import {
  IntegerValue,
  MilliPercentageValue,
  ValueUnit
} from '../ValueUnit';
import {
  SelfSkillEffectActivationCondition,
  SkillEffectActivationTrigger,
  TargetSkillEffectActivationCondition
} from './SkillEffectActivationCondition';
import { SkillAreaType } from './SkillAreaOfEffect';
import { SkillEffectActivationRate } from './SkillEffectActivationRate';
import { SkillEffectScaleFactor } from './SkillEffectScaleFactor';
import { SkillEffectTag, SkillEffectTagStackValue } from './SkillEffectTag';
import { SkillEffectTarget } from './SkillEffectData';
import { SkillEffectTerm, SkillEffectTermRoundsValue } from './SkillEffectTerm';
import { SkillEffectTimesValue } from './SkillEffectTimesValue';
import { UnitForms } from '../UnitFormValue';
import { UnitNumber } from '../UnitBasicInfo';

type SkillEffectAddition = Readonly<{
  tag?: SkillEffectTag,
  max_stack?: SkillEffectTagStackValue,
  term?:
    typeof SkillEffectTerm['Immediate' | 'Infinite'] |
    {
      readonly [SkillEffectTerm.ForRounds]: SkillEffectTermRoundsValue
    },
  rate?: SkillEffectActivationRate | MilliPercentageValue,
  times?: SkillEffectTimesValue,
  cannot_be_dispelled?: true
}>

type ValueWithAddition<T extends ValueUnit> =
  { readonly [key in T]: number } & SkillEffectAddition

type TagStackEffectValue = { tag: SkillEffectTag } & Omit<SkillEffectAddition, 'tag'>

export type SkillEffectValue = Readonly<{
  [E in Exclude<Effect, EquipmentEffectOnly>]?:
    E extends NoValueEffectKey ?
      SkillEffectAddition :
    E extends typeof Effect.CooperativeAttack ?
      { unit: UnitNumber, active: 1 | 2 } & SkillEffectAddition :
    E extends PushPullEffectKey ?
      IntegerValue<1 | 2> & SkillEffectAddition :
    E extends RangeUpDownEffectKey ?
      IntegerValue<1 | 2 | 3> & SkillEffectAddition :
    E extends IntegerValueEffectKey | typeof Effect.BattleContinuation ?
      ValueWithAddition<'value'> :
    E extends MilliValueEffectKey ?
      ValueWithAddition<'milliValue'> :
    E extends MicroValueEffectKey ?
      ValueWithAddition<'microValue'> :
    E extends typeof Effect.EffectRemoval ?
      ({
        effect: Effect
      } | {
        effects: ReadonlyArray<Effect>
      }) & SkillEffectAddition :
    E extends typeof Effect.PreventsEffect ?
      { effect: Effect } & SkillEffectAddition :
    E extends typeof Effect.ActivationRatePercentageUp ?
      { effect: Effect } & ValueWithAddition<'milliPercentage'> :
    E extends typeof Effect.AbsolutelyActivated ?
      {
        tag: SkillEffectTag,
        effect: Effect
      } & Omit<SkillEffectAddition, 'tag'> :
    E extends typeof Effect.TagStack ?
      TagStackEffectValue :
    E extends typeof Effect.TagRelease ?
      TagStackEffectValue |
      ReadonlyArray<TagStackEffectValue> :
    E extends typeof Effect.TagUnstack ?
      {
        tag: SkillEffectTag,
        effect?: Effect,
        value: number
      } & Omit<SkillEffectAddition, 'tag'> :
    E extends typeof Effect['FormChange' | 'FormRelease'] ?
      { form: UnitForms } & SkillEffectAddition :
    E extends typeof Effect['DamageMultiplierUpByStatus'] ?
      ValueWithAddition<'milliPercentage'> & { status: 'eva' } :
    E extends MultipleMilliPercentageEffectKey ?
      ValueWithAddition<'milliPercentage'> |
      ReadonlyArray<ValueWithAddition<'milliPercentage'>> :
    E extends Exclude<MilliPercentageEffectKey, MultipleMilliPercentageEffectKey> ?
      ValueWithAddition<'milliPercentage'> :
      never
}>

export type AroundSkillEffectValue = Readonly<{
  [Effect.FixedDamage]?: ValueWithAddition<'milliPercentage'>
}>

export type SelfSkillEffect = Readonly<{
  conditions?:
    readonly [SelfSkillEffectActivationCondition] |
    readonly [SelfSkillEffectActivationCondition, SelfSkillEffectActivationCondition],
  effective?: PassiveSkillEffective,
  scale_factor?: SkillEffectScaleFactor,
  details: { readonly self: SkillEffectValue }
}>

type TargetSkillEffect = Readonly<{
  conditions?:
    readonly [TargetSkillEffectActivationCondition] |
    readonly [TargetSkillEffectActivationCondition, TargetSkillEffectActivationCondition],
  effective?: PassiveSkillEffective,
  scale_factor?: SkillEffectScaleFactor,
  target: SkillEffectTarget,
  details: {
    readonly self?: SkillEffectValue,
    readonly target?: SkillEffectValue
  }
}>

type AroundSkillEffect = Readonly<{
  conditions: readonly [SkillEffectActivationTrigger],
  details: { readonly around: AroundSkillEffectValue }
}>

export function isSelfSkillEffect(arg: SkillEffect): arg is SelfSkillEffect {
  return !isTargetSkillEffect(arg) && !isAroundSkillEffect(arg);
}

export function isTargetSkillEffect(arg: SkillEffect): arg is TargetSkillEffect {
  return 'target' in arg;
}

export function isAroundSkillEffect(arg: SkillEffect): arg is AroundSkillEffect {
  return 'around' in arg.details;
}

export type SkillEffect = SelfSkillEffect | TargetSkillEffect | AroundSkillEffect

export type DamageDeal = {
  milliPercentage: number,
  attribute?: DamageAttribute,
  effective?: ActiveSkillEffective
}

export type ActiveSkill = Readonly<{
  damage_deal?: DamageDeal,
  cost: SkillApCostValue,
  range: SkillRangeValue,
  area: SkillAreaType,
  effects: ReadonlyArray<SkillEffect>
}>

export type ActiveSkillAsEquipmentEffect = Readonly<{
  cost: SkillApCostValue,
  range: SkillRangeValue,
  area: SkillAreaType,
  equipment_effects: ReadonlyArray<SkillEffect>
}>

export type PassiveSkill = Readonly<{
  area: SkillAreaType,
  effects: ReadonlyArray<SkillEffect>
}>

export type PassiveSkillAsEquipmentEffect = Readonly<{
  area: SkillAreaType,
  equipment_effects: ReadonlyArray<SkillEffect>
}>
