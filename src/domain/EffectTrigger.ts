export const EffectTrigger = {
  StartWave: 'start_wave',
  EndWave: 'end_wave',
  StartRound: 'start_round',
  Idle: 'idle',
  Kill: 'kill',
  BeKilled: 'be_killed',
  AllyKilled: 'ally_killed',
  EnemyKilled: 'enemy_killed',
  UseAnyActive: 'use_any_active',
  UseThisActive: 'use_this_active',
  UseActive1: 'use_active_1',
  UseActive2: 'use_active_2',
  Attack: 'attack',
  Attacked: 'attacked',
  BeAttacked: 'be_attacked',
  FollowUpAttack: 'follow_up_attack',
  CooperativeAttack: 'cooperative_attack',
  ReAttack: 're_attack',
  Hit: 'hit',
  HitFireActive: 'hit_fire_active',
  HitAnyActive: 'hit_any_active',
  HitActive1: 'hit_active_1',
  HitActive2: 'hit_active_2',
  HitVitalSpot: 'hit_vital_spot',
  Missed: 'missed',
  BeHit: 'be_hit',
  BeHitPhysicalActive: 'be_hit_physical_active',
  BeHitFireActive: 'be_hit_fire_active',
  BeHitIceActive: 'be_hit_ice_active',
  BeHitElectricActive: 'be_hit_electric_active',
  Evade: 'evade',
  Critical: 'critical',
  Counter: 'counter',
  Revive: 'revive',
  Move: 'move',
  SeizeOpportunity: 'seize_opportunity'
} as const;
export type EffectTrigger = typeof EffectTrigger[keyof typeof EffectTrigger]
