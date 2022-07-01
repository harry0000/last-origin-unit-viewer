import { Effect } from '../Effect';

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
    'Barrier' |
    'BattleContinuation'
  ]
export type MilliValueEffectKey = typeof Effect['AtkValueUp' | 'DefValueUp']
export type MicroValueEffectKey = typeof Effect['ApUp' | 'ApDown' | 'SetAp']
export type MilliPercentageEffectDependsOnStatusKey = typeof Effect['DamageMultiplierUpByStatusProportion']
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
      'TagStack' |
      'TagUnstack' |
      'TagRelease' |
      'FormChange' |
      'FormRelease'
    ]
  >

export type MultipleMilliPercentageEffectKey = typeof Effect['DefDown' | 'AccDown' | 'CriDown' | 'EvaUp' | 'StatusResistUp']
