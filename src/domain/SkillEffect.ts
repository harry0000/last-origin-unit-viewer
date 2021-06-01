import { Effect } from './Effect';

export type EquipmentEffectOnly = typeof Effect['HpUp']
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
    EquipmentEffectOnly |
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