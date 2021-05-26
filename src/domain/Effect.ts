export const Effect = {
  AdditionalDamage: 'additional_damage',
  Enmity: 'enmity',
  Merciless: 'merciless',
  AdditionalFireDamage: 'additional_fire_damage',
  AdditionalIceDamage: 'additional_ice_damage',
  AdditionalElectricDamage: 'additional_electric_damage',
  FireResistUp: 'fire_resist_up',
  FireResistDown: 'fire_resist_down',
  IceResistUp: 'ice_resist_up',
  IceResistDown: 'ice_resist_down',
  ElectricResistUp: 'electric_resist_up',
  ElectricResistDown: 'electric_resist_down',
  FixedDamage: 'fixed_damage',
  DamageOverTime: 'damage_over_time',
  FixedDamageOverTime: 'fixed_damage_over_time',
  FixedFireDamageOverTime: 'fixed_fire_damage_over_time',
  FixedIceDamageOverTime: 'fixed_ice_damage_over_time',
  FixedElectricDamageOverTime: 'fixed_electric_damage_over_time',
  AntiLightType: 'anti_light_type',
  AntiHeavyType: 'anti_heavy_type',
  AntiFlyingType: 'anti_flying_type',
  HpUp: 'hp_up',
  AtkUp: 'atk_up',
  AtkDown: 'atk_down',
  DefUp: 'def_up',
  DefDown: 'def_down',
  AccUp: 'acc_up',
  AccDown: 'acc_down',
  EvaUp: 'eva_up',
  EvaDown: 'eva_down',
  CriUp: 'cri_up',
  CriDown: 'cri_down',
  SpdUp: 'spd_up',
  SpdDown: 'spd_down',
  ApUp: 'ap_up',
  ApDown: 'ap_down',
  SetAp: 'set_ap',
  StatusResistUp: 'status_resist_up',
  StatusResistDown: 'status_resist_down',
  ExpUp: 'exp_up',
  RangeUp: 'range_up',
  RangeDown: 'range_down',
  DefensePenetration: 'defense_penetration',
  DamageTakenIncreased: 'damage_taken_increased',
  DamageReduction: 'damage_reduction',
  MinimizeDamage: 'minimize_damage',
  NullifyDamage: 'nullify_damage',
  Barrier: 'barrier',
  BattleContinuation: 'battle_continuation',
  FormChange: 'form_change',
  FormRelease: 'form_release',
  TagStack: 'tag_stack',
  TagUnstack: 'tag_unstack',
  TagRelease: 'tag_release',
  AllBuffRemoval: 'all_buff_removal',
  AllDebuffRemoval: 'all_debuff_removal',
  EffectRemoval: 'effect_removal',
  PreventsEffect: 'prevents_effect',
  ActivationRatePercentageUp: 'activation_rate_percentage_up',
  ColumnProtect: 'column_protect',
  RowProtect: 'row_protect',
  TargetProtect: 'target_protect',
  FollowUpAttack: 'follow_up_attack',
  Counterattack: 'counterattack',
  IgnoreBarrierDr: 'ignore_barrier_dr',
  IgnoreDr: 'ignore_dr',
  IgnoreProtect: 'ignore_protect',
  Pull: 'pull',
  Push: 'push',
  Reconnaissance: 'reconnaissance',
  Marked: 'marked',
  Provoked: 'provoked',
  Immovable: 'immovable',
  Silenced: 'silenced',
  Stunned: 'stunned',
  RefundAp: 'refund_ap',
  AttackCritical: 'attack_critical',
  CounterattackCritical: 'counterattack_critical',
  DeployDefensiveWall: 'deploy_defensive_wall',
  AMG11Construction: 'amg_11_construction',
  DeployRabbitDField: 'deploy_rabbit_d_field',
  SummonHologramTiger: 'summon_hologram_tiger'
} as const;
export type Effect = typeof Effect[keyof typeof Effect]

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
