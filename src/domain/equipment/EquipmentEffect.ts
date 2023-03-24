import { Effect } from '../Effect';
import { EffectActivationState } from '../EffectActivationState';
import { EffectAdditionData, EquipmentDataValue, EquipmentRank } from './EquipmentData';
import { EffectTrigger } from '../EffectTrigger';
import { GridState } from '../skill/SkillEffectActivationCondition';
import { IntegerValue, MicroValue, MilliPercentageValue } from '../ValueUnit';
import { SkillEffectTag } from '../skill/SkillEffectTag';
import { UnitKind } from '../UnitBasicInfo';

export type NoValueEffectKey = typeof Effect[
  'RangeDownActive1' |
  'ActionCountUp' |
  'LimitActionCount' |
  'MinimizeDamage' |
  'AllDebuffRemoval' |
  'ColumnProtect' |
  'RowProtect' |
  'ReAttack' |
  'IgnoreBarrierDr' |
  'IgnoreProtect' |
  'Reconnaissance' |
  'Marked' |
  'Immovable' |
  'Silenced' |
  'Stunned'
]
export type IntegerValueEffectKey = typeof Effect[
  'FixedDamageOverTime' |
  'RangeUpActive2' |
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
  'MinimumIceResistUp' |
  'StatusResistUp' |
  'ExpUp' |
  'DefensePenetration' |
  'DamageTakenIncreased' |
  'DamageReductionUp' |
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
    R extends { milliPercentage: EquipmentDataValue<EquipmentRank, number> } ?
      MilliPercentageValue :
      R :
    never
type EquipmentEffectTimesValue =
  EffectAdditionData extends { times?: EquipmentDataValue<EquipmentRank, infer T> } ? T : never

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
    E extends typeof Effect['BuffRemoval' | 'DebuffRemoval' | 'PreventsEffect'] ?
      Readonly<{ effect: Effect } | { effects: ReadonlyArray<Effect> }> & EquipmentEffectAddition :
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

export type EquipmentEffectActivationState = Readonly<{
  [EffectActivationState.Grid]?: typeof GridState.BackLine,
  [EffectActivationState.HpGreaterOrEqual]?: 25 | 100,
  [EffectActivationState.Affected]?: typeof Effect['Reconnaissance' | 'Barrier'],
  [EffectActivationState.Tagged]?: 'wet',
  [EffectActivationState.Unit]?: UnitKind,
  [EffectActivationState.StatusLessThanSelf]?: { status: 'def' },
}>

type EquipmentEffectActivationTrigger = Readonly<{
  trigger: typeof EffectTrigger.StartRound,
  round?: { at: 1 } | 'odd' | 'even'
}> | Readonly<{
  trigger: typeof EffectTrigger.HitActive2,
  unit: 205
}> | Readonly<{
  trigger: Exclude<EffectTrigger, typeof EffectTrigger['StartRound' | 'HitActive2']>
}>

export type EquipmentEffectActivationCondition =
  EquipmentEffectActivationTrigger &
  Readonly<{ state?: EquipmentEffectActivationState }>

export type EffectDetails = Readonly<{
  condition: EquipmentEffectActivationCondition,
  target?: { kind: 'enemy' },
  details: EquipmentEffectValue
}>

export type EffectDetailsAsSkill = Readonly<{
  condition: EquipmentEffectActivationCondition,
  details: {
    self: EquipmentEffectValue,
    target?: EquipmentEffectValue
  }
}>

export type EquipmentEffect = Readonly<Partial<{
  equipment_effects: ReadonlyArray<EffectDetails>,
  effects: ReadonlyArray<EffectDetailsAsSkill>
}>>

export const emptyEquipmentEffect: EquipmentEffect = {};
