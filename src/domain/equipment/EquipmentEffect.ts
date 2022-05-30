import { Effect } from '../Effect';
import { EffectActivationState } from '../EffectActivationState';
import { EffectTrigger } from '../EffectTrigger';
import { GridState } from '../skill/SkillEffectActivationCondition';
import { IntegerValue, MicroValue, MilliPercentageValue } from '../ValueUnit';
import { SkillEffectTag } from '../skill/SkillEffectTag';
import { UnitKind } from '../UnitBasicInfo';

export type NoValueEffectKey = typeof Effect[
  'MinimizeDamage' |
  'AllDebuffRemoval' |
  'ColumnProtect' |
  'RowProtect' |
  'IgnoreBarrierDr' |
  'Reconnaissance' |
  'Stunned'
]
export type IntegerValueEffectKey = typeof Effect[
  'FixedDamageOverTime' |
  'Barrier' |
  'BattleContinuation'
]
export type MilliPercentageEffectKey = typeof Effect[
  'AdditionalFireDamage' |
  'AdditionalIceDamage' |
  'AdditionalElectricDamage' |
  'FixedDamage' |
  'AntiLightType' |
  'AntiHeavyType' |
  'AntiFlyingType' |
  'AtkUp' |
  'AtkDown' |
  'DefUp' |
  'AccUp' |
  'AccDown' |
  'EvaUp' |
  'CriUp' |
  'SpdUp' |
  'SpdDown' |
  'FireResistUp' |
  'FireResistDown' |
  'IceResistUp' |
  'IceResistDown' |
  'ElectricResistUp' |
  'ElectricResistDown' |
  'StatusResistUp' |
  'ExpUp' |
  'DefensePenetration' |
  'DamageTakenIncreased' |
  'DamageReduction' |
  'BattleContinuationWithHpRate' |
  'Counterattack'
]
export type MicroValueEffectKey = typeof Effect.ApUp

export type EquipmentEffectKey =
  NoValueEffectKey |
  IntegerValueEffectKey |
  MilliPercentageEffectKey |
  MicroValueEffectKey |
  typeof Effect[
  'RangeUp' |
  'RangeDown' |
  'EffectRemoval' |
  'ActivationRatePercentageUp'
]

export type EquipmentEffectAddition = Readonly<
  { max_stack?: 3 } &
  { term?: 'immediate' | 'infinite' | { readonly for_rounds: 1 | 2 | 3 } } &
  { rate?: 'constant' | MilliPercentageValue } &
  { times?: 1 | 2 | 3 | 4 }
>

export type EquipmentEffectValue = Readonly<{
  [E in EquipmentEffectKey]?:
    E extends NoValueEffectKey ?
      EquipmentEffectAddition :
    E extends typeof Effect.EffectRemoval ?
      Readonly<{ effect: Effect } | { effects: ReadonlyArray<Effect> }> & EquipmentEffectAddition :
    E extends typeof Effect.ActivationRatePercentageUp ?
      Readonly<{ effect: Effect, tag: SkillEffectTag }> & MilliPercentageValue & EquipmentEffectAddition :
    E extends typeof Effect['RangeUp' | 'RangeDown']?
      IntegerValue<1 | 2> & EquipmentEffectAddition :
    E extends IntegerValueEffectKey ?
      IntegerValue & EquipmentEffectAddition :
    E extends MicroValueEffectKey?
      MicroValue & EquipmentEffectAddition :
    E extends MilliPercentageEffectKey ?
      MilliPercentageValue & EquipmentEffectAddition :
    never
}>

type ActivationState = Readonly<{
  [EffectActivationState.Grid]?: typeof GridState.BackLine,
  [EffectActivationState.HpGreaterOrEqual]?: 25,
  [EffectActivationState.Affected]?: Effect,
  [EffectActivationState.Tagged]?: SkillEffectTag,
  [EffectActivationState.Unit]?: UnitKind
}>

type EquipmentEffectActivationTrigger = {
  trigger: typeof EffectTrigger.StartRound,
  round?: { at: 1 }
} | {
  trigger: typeof EffectTrigger.HitActive2,
  unit: 205
} | {
  trigger: Exclude<EffectTrigger, typeof EffectTrigger['StartRound' | 'HitActive2']>
}

export type EquipmentEffectActivationCondition = Readonly<EquipmentEffectActivationTrigger & { state?: ActivationState }>

export type EffectDetails = Readonly<{
  condition?: EquipmentEffectActivationCondition,
  details: EquipmentEffectValue
}>

export type EffectDetailsAsSkill = Readonly<{
  condition?: EquipmentEffectActivationCondition,
  details: {
    self: EquipmentEffectValue,
    target?: EquipmentEffectValue
  }
}>
