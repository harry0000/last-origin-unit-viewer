import { Effect } from '../Effect';
import {
  EquipmentEffectOnly,
  IntegerValueEffectKey,
  MicroValueEffectKey,
  MilliPercentageEffectKey,
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
  TargetSkillEffectActivationCondition,
  UnitAliasAndRole,
  UnitAliasAndType,
  UnitAliasExceptUnit,
  UnitTypeAndRole
} from './SkillEffectActivationCondition';
import { SkillEffectActivationRate } from './SkillEffectActivationRate';
import { SkillEffectScaleFactor } from './SkillEffectScaleFactor';
import { SkillEffectTag, SkillEffectTagStackValue } from './SkillEffectTag';
import { SkillEffectTerm, SkillEffectTermRoundsValue } from './SkillEffectTerm';
import { SkillEffectTimesValue } from './SkillEffectTimesValue';
import { UnitAlias } from '../UnitAlias';
import { UnitForms } from '../UnitFormValue';
import { UnitKind, UnitNumber, UnitRole, UnitType } from '../UnitBasicInfo';

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
  [E in Exclude<Effect, EquipmentEffectOnly>]?:
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
    E extends IntegerValueEffectKey ?
      ValueWithAddition<'value'> :
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
    E extends typeof Effect.TagStack ?
      TagStackEffectDataValue :
    E extends typeof Effect.TagRelease ?
      TagStackEffectDataValue |
      ReadonlyArray<TagStackEffectDataValue> :
    E extends typeof Effect.TagUnstack ?
      {
        tag: SkillEffectTag,
        effect?: Effect,
        value: number
      } & Omit<SkillEffectAddition, 'tag'> :
    E extends typeof Effect['FormChange' | 'FormRelease'] ?
      { form: UnitForms } & SkillEffectAddition :
    E extends MultipleMilliPercentageEffectKey ?
      ValueWithAddition<'milliPercentage'> |
      ReadonlyArray<ValueWithAddition<'milliPercentage'>> :
    E extends Exclude<MilliPercentageEffectKey, MultipleMilliPercentageEffectKey> ?
      ValueWithAddition<'milliPercentage'> :
      never
}>

export const SkillEffectTargetKind = {
  Ally: 'ally',
  AllyGrid: 'ally_grid', // for summon skill effects
  Enemy: 'enemy'
} as const;
export type SkillEffectTargetKind = typeof SkillEffectTargetKind[keyof typeof SkillEffectTargetKind]

export type SkillEffectTarget = Readonly<{
  kind: typeof SkillEffectTargetKind.Ally,
  conditions?: ReadonlyArray<
    UnitKind | UnitType | UnitRole | UnitTypeAndRole | UnitAliasAndType | UnitAliasAndRole | UnitNumber | UnitAlias | UnitAliasExceptUnit
  >
} | {
  kind: typeof SkillEffectTargetKind.Enemy,
  conditions?: ReadonlyArray<UnitType | UnitRole>
} | {
  kind: typeof SkillEffectTargetKind.AllyGrid
}>

export type AroundSkillEffectDataValue = Readonly<{
  [Effect.FixedDamage]?: ValueWithAddition<'milliPercentage'>
}>

type SelfSkillEffect = Readonly<{
  conditions?:
    readonly [SelfSkillEffectActivationCondition] |
    readonly [SelfSkillEffectActivationCondition, SelfSkillEffectActivationCondition],
  effective?: PassiveSkillEffective,
  scale_factor?: SkillEffectScaleFactor,
  details: { readonly self: SkillEffectDataValue }
}>

type TargetSkillEffect = Readonly<{
  conditions?:
    readonly [TargetSkillEffectActivationCondition] |
    readonly [TargetSkillEffectActivationCondition, TargetSkillEffectActivationCondition],
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
