export const EffectTrigger = {
  StartWave: 'start_wave',
  EndWave: 'end_wave',
  StartRound: 'start_round',
  Idle: 'idle',
  Idle2Times: 'idle_2_times',
  Kill: 'kill',
  BeKilled: 'be_killed',
  AllyKilled: 'ally_killed',
  EnemyKilled: 'enemy_killed',
  UseAnyActive: 'use_any_active',
  UseThisActive: 'use_this_active',
  Attack: 'attack',
  Attacked: 'attacked',
  BeAttacked: 'be_attacked',
  Hit: 'hit',
  HitAnyActive: 'hit_any_active',
  HitVitalSpot: 'hit_vital_spot',
  BeHit: 'be_hit',
  BeHitFireActive: 'be_hit_fire_active',
  BeHitIceActive: 'be_hit_ice_active',
  BeHitElectricActive: 'be_hit_electric_active',
  TakeDamage: 'take_damage',
  Evade: 'evade',
  Critical: 'critical',
  Revive: 'revive',
  Moved: 'moved'
} as const;
export type EffectTrigger = typeof EffectTrigger[keyof typeof EffectTrigger]
