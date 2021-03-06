import { Effect } from '../Effect';

export type EquipmentEffectOnly =
  typeof Effect[
    'HpUp' |
    'HpDown' |
    'RangeDownActive1' |
    'RangeUpActive2'
  ]
export type NoValueEffectKey =
  typeof Effect[
    'ActionCountUp' |
    'ActionCountDown' |
    'MinimizeDamage' |
    'NullifyDamage' |
    'AllBuffBlocking' |
    'AllBuffRemoval' |
    'AllDebuffRemoval' |
    'ColumnProtect' |
    'RowProtect' |
    'TargetProtect' |
    'ReAttack' |
    'FollowUpAttack' |
    'IgnoreBarrierDr' |
    'IgnoreProtect' |
    'IgnoreProtectDeactivate' |
    'Reconnaissance' |
    'Marked' |
    'Provoked' |
    'Immovable' |
    'Silenced' |
    'Stunned' |
    'RefundAp' |
    'AttackHit' |
    'AttackCritical' |
    'IgnoreDef' |
    'AMG11Construction' |
    'DeployRabbitDField' |
    'SummonHologramTiger' |
    'GoldenFactoryConstruction'
  ]
export type PushPullEffectKey = typeof Effect['Pull' | 'Push']
export type RangeUpDownEffectKey = typeof Effect['RangeUp' | 'RangeDown']
export type IntegerValueEffectKey =
  typeof Effect[
    'FixedDamageOverTime' |
    'FixedFireDamageOverTime' |
    'FixedIceDamageOverTime' |
    'FixedElectricDamageOverTime' |
    'Barrier'
  ]
export type MilliValueEffectKey = typeof Effect['AtkValueUp' | 'DefValueUp']
export type MicroValueEffectKey = typeof Effect['ApUp' | 'ApDown' | 'SetAp']
export type MilliPercentageEffectDependsOnStatusKey = typeof Effect['DamageMultiplierUpByStatus']
export type MilliPercentageEffectKey =
  Exclude<
    Effect,
    EquipmentEffectOnly |
    NoValueEffectKey |
    PushPullEffectKey |
    RangeUpDownEffectKey |
    IntegerValueEffectKey |
    MilliValueEffectKey |
    MicroValueEffectKey |
    MilliPercentageEffectDependsOnStatusKey |
    typeof Effect[
      'CooperativeAttack' |
      'EffectRemoval' |
      'PreventsEffect' |
      'ActivationRatePercentageUp' |
      'AbsolutelyActivated' |
      'BattleContinuation' |
      'TagStack' |
      'TagUnstack' |
      'TagRelease' |
      'FormChange' |
      'FormRelease'
    ]
  >

export type MultipleMilliPercentageEffectKey = typeof Effect['DefDown' | 'AccDown' | 'CriDown' | 'EvaUp' | 'StatusResistUp']
