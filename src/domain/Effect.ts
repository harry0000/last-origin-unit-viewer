export const Effect = {
  DamageMultiplierUp: 'damage_multiplier_up',
  DamageMultiplierDown: 'damage_multiplier_down',
  DamageMultiplierUpByStatus: 'damage_multiplier_up_by_status',
  AdditionalDamage: 'additional_damage',
  AdditionalDamageFocusing: 'additional_damage_focusing',
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
  FixedDamageOverTime: 'fixed_damage_over_time',
  FixedFireDamageOverTime: 'fixed_fire_damage_over_time',
  FixedIceDamageOverTime: 'fixed_ice_damage_over_time',
  FixedElectricDamageOverTime: 'fixed_electric_damage_over_time',
  AntiLightType: 'anti_light_type',
  AntiHeavyType: 'anti_heavy_type',
  AntiFlyingType: 'anti_flying_type',
  AtkValueUp: 'atk_value_up',
  DefValueUp: 'def_value_up',
  AtkValueUpBySelfValue: 'atk_value_up_by_self_value',
  HpUp: 'hp_up',
  HpDown: 'hp_down',
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
  RangeDownActive1: 'range_down_active_1',
  RangeUpActive2: 'range_up_active_2',
  ActionCountUp: 'action_count_up',
  DefensePenetration: 'defense_penetration',
  DefensePenetrationResistUpBySelfHpRate: 'defense_penetration_resist_up_by_self_hp_rate',
  DamageTakenIncreased: 'damage_taken_increased',
  DamageReduction: 'damage_reduction',
  MinimizeDamage: 'minimize_damage',
  NullifyDamage: 'nullify_damage',
  AreaDamageDispersion: 'area_damage_dispersion',
  Barrier: 'barrier',
  BattleContinuation: 'battle_continuation',
  FormChange: 'form_change',
  FormRelease: 'form_release',
  TagStack: 'tag_stack',
  TagUnstack: 'tag_unstack',
  TagRelease: 'tag_release',
  AllBuffBlocking: 'all_buff_blocking',
  AllBuffRemoval: 'all_buff_removal',
  AllDebuffRemoval: 'all_debuff_removal',
  EffectRemoval: 'effect_removal',
  AllBuffRemovalResistUp: 'all_buff_removal_resist_up',
  PreventsEffect: 'prevents_effect',
  ActivationRatePercentageUp: 'activation_rate_percentage_up',
  AbsolutelyActivated: 'absolutely_activated',
  ColumnProtect: 'column_protect',
  RowProtect: 'row_protect',
  TargetProtect: 'target_protect',
  ReAttack: 're_attack',
  FollowUpAttack: 'follow_up_attack',
  CooperativeAttack: 'cooperative_attack',
  Counterattack: 'counterattack',
  IgnoreBarrierDr: 'ignore_barrier_dr',
  IgnoreProtect: 'ignore_protect',
  IgnoreProtectDeactivate: 'ignore_protect_deactivate',
  Pull: 'pull',
  Push: 'push',
  Reconnaissance: 'reconnaissance',
  Marked: 'marked',
  Provoked: 'provoked',
  Immovable: 'immovable',
  Silenced: 'silenced',
  Stunned: 'stunned',
  RefundAp: 'refund_ap',
  AttackHit: 'attack_hit',
  AttackCritical: 'attack_critical',
  IgnoreDef: 'ignore_def',
  AMG11Construction: 'amg_11_construction',
  DeployRabbitDField: 'deploy_rabbit_d_field',
  SummonHologramTiger: 'summon_hologram_tiger',
  GoldenFactoryConstruction: 'golden_factory_construction'
} as const;
export type Effect = typeof Effect[keyof typeof Effect]

