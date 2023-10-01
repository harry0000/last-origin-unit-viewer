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
export type RangeValueEffectKey = typeof Effect[
  'RangeUp' |
  'RangeDown' |
  'RangeUpActive1' |
  'RangeUpActive2'
]
export type IntegerValueEffectKey = typeof Effect[
  'FixedDamageOverTime' |
  'FixedFireDamageOverTime' |
  'FixedIceDamageOverTime' |
  'FixedElectricDamageOverTime' |
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
  'AllBuffRemovalResistUp' |
  'Counterattack'
]
export type MicroValueEffectKey = typeof Effect.ApUp

export type EquipmentEffectKey =
  NoValueEffectKey |
  RangeValueEffectKey |
  IntegerValueEffectKey |
  MilliPercentageEffectKey |
  MicroValueEffectKey |
  typeof Effect[
    'DamageMultiplierUpByStatus' |
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
    E extends RangeValueEffectKey ?
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
  [EffectActivationState.Tagged]?: 'wet' | 'patron_saint' | 'moon_light_power',
  [EffectActivationState.Unit]?: { kind: UnitKind, except?: 171 } | 171 | 127,
  [EffectActivationState.StatusGreaterThanSelf]?: { status: 'spd' },
  [EffectActivationState.StatusLessThanSelf]?: { status: 'def' }
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

export function extractEquipmentEffectActivationConditionState(
  condition:
    EquipmentEffectActivationCondition |
    EquipmentEffectAsSkillSelfActivationCondition |
    EquipmentEffectAsSkillTargetActivationCondition
): EquipmentEffectActivationState | undefined {
  if (!('state' in condition)) {
    return undefined;
  }

  return condition.state && (
    'self' in condition.state ?
      condition.state.self :
      'target' in condition.state ?
        condition.state.target :
        condition.state
  );
}

export type EquipmentEffectActivationCondition =
  EquipmentEffectActivationTrigger &
  Readonly<{ state?: EquipmentEffectActivationState }>

export type EquipmentEffectAsSkillSelfActivationCondition =
  EquipmentEffectActivationTrigger &
  Readonly<{ state?: { self: EquipmentEffectActivationState } }>

export type EquipmentEffectAsSkillTargetActivationCondition =
  EquipmentEffectActivationTrigger &
  Readonly<{ state?: { target: EquipmentEffectActivationState } }>

export type EffectDetails = Readonly<{
  condition: EquipmentEffectActivationCondition,
  target?: { kind: 'enemy' },
  details: EquipmentEffectValue
}>

export type EffectDetailsAsSkill = Readonly<{
  condition: EquipmentEffectAsSkillSelfActivationCondition,
  details: {
    self: EquipmentEffectValue
  }
} | {
  condition: EquipmentEffectAsSkillSelfActivationCondition,
  target: { kind: 'enemy' },
  details: {
    self: EquipmentEffectValue,
    target: EquipmentEffectValue
  }
} | {
  condition: EquipmentEffectAsSkillTargetActivationCondition,
  target: { kind: 'enemy' },
  details: {
    target: EquipmentEffectValue
  }
}>

export type EquipmentEffect = Readonly<Partial<{
  equipment_effects: ReadonlyArray<EffectDetails>,
  effects: ReadonlyArray<EffectDetailsAsSkill>
}>>

export const emptyEquipmentEffect: EquipmentEffect = {};
