import { Effect } from '../Effect';
import { EffectActivationState } from '../EffectActivationState';
import { EffectTrigger } from '../EffectTrigger';
import { GridState } from '../skill/SkillEffectActivationCondition';
import { IntegerValue, MicroValue, MilliPercentageValue } from '../ValueUnit';
import { SkillEffectTag } from '../skill/SkillEffectTag';
import { UnitKind } from '../UnitBasicInfo';
import { EffectAdditionData, EquipmentDataValue, EquipmentRank } from './EquipmentData';

export type NoValueEffectKey = typeof Effect[
  'RangeDownActive1' |
  'RangeUpActive2' |
  'ActionCountUp' |
  'MinimizeDamage' |
  'AllDebuffRemoval' |
  'ColumnProtect' |
  'RowProtect' |
  'ReAttack' |
  'IgnoreBarrierDr' |
  'IgnoreProtect' |
  'Reconnaissance' |
  'Marked' |
  'Stunned'
]
export type IntegerValueEffectKey = typeof Effect[
  'FixedDamageOverTime' |
  'Barrier'
]
export type MilliPercentageEffectKey = typeof Effect[
  'DamageMultiplierUp' |
  'AdditionalFireDamage' |
  'AdditionalIceDamage' |
  'AdditionalElectricDamage' |
  'FixedDamage' |
  'LightTypeDamageUp' |
  'HeavyTypeDamageUp' |
  'FlyingTypeDamageUp' |
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
  'Counterattack'
]
export type MicroValueEffectKey = typeof Effect.ApUp

export type EquipmentEffectKey =
  NoValueEffectKey |
  IntegerValueEffectKey |
  MilliPercentageEffectKey |
  MicroValueEffectKey |
  typeof Effect[
    'DamageMultiplierUpByStatus' |
    'RangeUp' |
    'RangeDown' |
    'BattleContinuation' |
    'BuffRemoval' |
    'DebuffRemoval' |
    'PreventsEffect' |
    'ActivationRatePercentageUp'
  ]

type EquipmentEffectRateValue =
  EffectAdditionData extends { rate?: infer R } ?
    R extends { milliPercentage: EquipmentDataValue<typeof EquipmentRank.SS, number> } ?
      MilliPercentageValue :
      R :
    never
type EquipmentEffectTimesValue =
  EffectAdditionData extends { times?: EquipmentDataValue<typeof EquipmentRank.SS, infer T> } ? T : never

export type EquipmentEffectAddition =
  Omit<EffectAdditionData, 'rate' | 'times'> &
  Readonly<{ rate?: EquipmentEffectRateValue }> &
  Readonly<{ times?: EquipmentEffectTimesValue }>

export type EquipmentEffectValue = Readonly<{
  [E in EquipmentEffectKey]?:
    E extends NoValueEffectKey ?
      EquipmentEffectAddition :
    E extends typeof Effect.DamageMultiplierUpByStatus ?
      Readonly<{ status: 'def' }> & MilliPercentageValue & EquipmentEffectAddition :
    E extends typeof Effect['BuffRemoval' | 'DebuffRemoval'] ?
      Readonly<{ effect: Effect } | { effects: ReadonlyArray<Effect> }> & EquipmentEffectAddition :
    E extends typeof Effect.PreventsEffect ?
      Readonly<{ effect: Effect }> & EquipmentEffectAddition :
    E extends typeof Effect.ActivationRatePercentageUp ?
      Readonly<{ effect: Effect, tag: SkillEffectTag }> & MilliPercentageValue & EquipmentEffectAddition :
    E extends typeof Effect['RangeUp' | 'RangeDown']?
      IntegerValue<1 | 2> & EquipmentEffectAddition :
    E extends typeof Effect.BattleContinuation ?
      IntegerValue & EquipmentEffectAddition |
      MilliPercentageValue & EquipmentEffectAddition :
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
  condition: EquipmentEffectActivationCondition,
  details: EquipmentEffectValue
}>

export type EffectDetailsAsSkill = Readonly<{
  condition: EquipmentEffectActivationCondition,
  details: {
    self: EquipmentEffectValue,
    target?: EquipmentEffectValue
  }
}>
