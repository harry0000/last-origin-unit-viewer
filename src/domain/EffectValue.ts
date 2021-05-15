import { Effect } from './Effect';

export type NoValueEffectKey =
  typeof Effect[
    'MinimizeDamage' |
    'NullifyDamage' |
    'AllBuffRemoval' |
    'AllDebuffRemoval' |
    'ColumnProtect' |
    'RowProtect' |
    'TargetProtect' |
    'FollowUpAttack' |
    'IgnoreBarrierDr' |
    'IgnoreDr' |
    'IgnoreProtect' |
    'Reconnaissance' |
    'Marked' |
    'Provoked' |
    'Immovable' |
    'Silenced' |
    'Stunned' |
    'RefundAp' |
    'AttackCritical' |
    'CounterattackCritical' |
    'DeployDefensiveWall' |
    'AMG11Construction' |
    'DeployRabbitDField' |
    'SummonHologramTiger'
    ]

export type PushPullEffectKey = typeof Effect['Pull' | 'Push']
export type RangeUpDownEffectKey = typeof Effect['RangeUp' | 'RangeDown']
export type IntegerValueEffectKey =
  typeof Effect[
    'HpUp' |
    'FixedDamageOverTime' |
    'FixedFireDamageOverTime' |
    'FixedIceDamageOverTime' |
    'FixedElectricDamageOverTime' |
    'Barrier' |
    'BattleContinuation'
    ]
export type MicroValueEffectKey = typeof Effect['ApUp' | 'ApDown' | 'SetAp']
export type MilliPercentageEffectKey =
  Exclude<
    Effect,
    NoValueEffectKey |
    PushPullEffectKey |
    RangeUpDownEffectKey |
    IntegerValueEffectKey |
    MicroValueEffectKey |
    typeof Effect[
      'EffectRemoval' |
      'PreventsEffect' |
      'ActivationRatePercentageUp' |
      'TagStack' |
      'TagUnstack' |
      'TagRelease' |
      'FormChange' |
      'FormRelease'
      ]
    >

export type IntegerValue<T extends number = number> = { value: T }
export type MilliValue                              = { milliValue: number }
export type MicroValue                              = { microValue: number }
export type MilliPercentageValue                    = { milliPercentage: number }

export type ValueUnit = keyof IntegerValue | keyof MilliValue | keyof MicroValue | keyof MilliPercentageValue
type ValueTypes = IntegerValue | MilliValue | MicroValue | MilliPercentageValue

export function calculateValue(value: ValueTypes): number {
  if ('milliValue' in value) {
    return value.milliValue / 1000;
  } else if ('milliPercentage' in value) {
    return value.milliPercentage / 1000;
  } else if ('microValue' in value) {
    return value.microValue / 1_000_000;
  }

  return value.value;
}
