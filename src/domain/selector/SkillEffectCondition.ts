import {
  ActiveSkillData,
  ActiveSkillDataAsEquipmentEffect,
  PassiveSkillData,
  PassiveSkillDataAsEquipmentEffect,
  UnitSkillData
} from '../skill/UnitSkillData';
import { Effect } from '../Effect';
import { SkillEffectData, SkillEffectDataValue } from '../skill/SkillEffectData';
import { SkillEffectTag } from '../skill/SkillEffectTag';
import { UnitNumber } from '../UnitBasicInfo';

import { extractAllActiveSkills, extractAllPassiveSkills, extractEffectsData } from './SkillDataExtractor';
import { isReadonlyArray } from '../../util/type';

export const StatusSkillEffectCondition = {
  AtkUp: 'atk_up',
  AtkDown: 'atk_down',
  AccUp: 'acc_up',
  AccDown: 'acc_down',
  CriUp: 'cri_up',
  CriDown: 'cri_down',
  DefUp: 'def_up',
  DefDown: 'def_down',
  EvaUp: 'eva_up',
  EvaDown: 'eva_down',
  SpdUp: 'spd_up',
  SpdDown: 'spd_down',
  ApUp: 'ap_up',
  ApDown: 'ap_down',
  AttributeResistUp: 'attribute_resist_up',
  AttributeResistDown: 'attribute_resist_down',
  MinimumAttributeResistUp: 'minimum_attribute_resist_up',
  StatusResistUp: 'status_resist_up',
  StatusResistDown: 'status_resist_down',
  RangeUp: 'range_up',
  RangeDown: 'range_down',
  DamageMultiplierUp: 'damage_multiplier_up',
  DamageMultiplierDown: 'damage_multiplier_down'
} as const;
export type StatusSkillEffectCondition = typeof StatusSkillEffectCondition[keyof typeof StatusSkillEffectCondition]

export const OffensiveSkillEffectCondition = {
  AttackAssist: 'attack_assist',
  CooperativeAttack: 'cooperative_attack',
  DefensePenetration: 'defense_penetration',
  IgnoreBarrierDR: 'ignore_barrier_dr',
  AntiLightUnitType: 'anti_light_unit_type',
  AntiFlyingUnitType: 'anti_flying_unit_type',
  AntiHeavyUnitType: 'anti_heavy_unit_type',
  DamageTakenIncrease: 'damage_taken_increase',
  Counterattack: 'counterattack',
  EnmityMerciless: 'enmity_merciless'
} as const;
export type OffensiveSkillEffectCondition = typeof OffensiveSkillEffectCondition[keyof typeof OffensiveSkillEffectCondition]

export const DefensiveSkillEffectCondition = {
  RowProtect: 'row_protect',
  ColumnProtect: 'column_protect',
  TargetProtect: 'target_protect',
  Barrier: 'barrier',
  DamageReductionUp: 'damage_reduction_up',
  MinimizeOrNullifyDamage: 'minimize_or_nullify_damage',
  DefensePenetrationResist: 'defense_penetration_resist',
  BattleContinuation: 'battle_continuation'
} as const;
export type DefensiveSkillEffectCondition = typeof DefensiveSkillEffectCondition[keyof typeof DefensiveSkillEffectCondition]

export const OtherSkillEffectCondition = {
  Reconnaissance: 'reconnaissance',
  Marked: 'marked',
  Provoked: 'provoked',
  Immovable: 'immovable',
  Silenced: 'silenced',
  Stunned: 'stunned',
  PushPull: 'push_pull',
  WetCorrosionOverloaded: 'wet_corrosion_overloaded',
  IgnoreProtectActivate: 'ignore_protect_activate',
  IgnoreProtectDeactivate: 'ignore_protect_deactivate',
  RemoveBuff: 'remove_buff',
  RemoveDebuff: 'remove_debuff',
  RemoveBuffResistUp: 'remove_buff_resist_up',
  PreventsDebuff: 'prevents_debuff',
  AllBuffBlocking: 'all_buff_blocking',
  ExpUp: 'exp_up',
  ActionCountUp: 'action_count_up'
} as const;
export type OtherSkillEffectCondition = typeof OtherSkillEffectCondition[keyof typeof OtherSkillEffectCondition]

export type SkillEffectCondition =
  StatusSkillEffectCondition |
  OffensiveSkillEffectCondition |
  DefensiveSkillEffectCondition |
  OtherSkillEffectCondition

const dotConditionTags: ReadonlySet<SkillEffectTag> =
  new Set([
    'corrosion',
    'overloaded'
  ]);

function hasAbnormalConditionTags(details: SkillEffectDataValue): boolean {
  return (
    !!details.fixed_damage_over_time?.tag && dotConditionTags.has(details.fixed_damage_over_time.tag) ||
    details.electric_resist_down?.tag === 'wet'
  );
}

function isNotImmediateTerm(effect: SkillEffectDataValue[typeof Effect.IgnoreProtect]): boolean {
  return !!effect && !!effect.term && (typeof effect.term !== 'string' || effect.term !== 'immediate');
}

function checkAllSkillEffectDetails(
  actives: ReadonlyArray<ActiveSkillData | ActiveSkillDataAsEquipmentEffect>,
  passives: ReadonlyArray<PassiveSkillData | PassiveSkillDataAsEquipmentEffect>,
  f: (effect: SkillEffectDataValue) => boolean
): boolean {
  return (
    actives.some(as => extractEffectsData(as).some(e =>
      'self'   in e.details && e.details.self   && f(e.details.self) ||
      'target' in e.details && e.details.target && f(e.details.target) ||
      'around' in e.details && e.details.around && f(e.details.around)
    )) ||
    passives.some(ps => extractEffectsData(ps).some(e =>
      'self'   in e.details && e.details.self   && f(e.details.self) ||
      'target' in e.details && e.details.target && f(e.details.target) ||
      'around' in e.details && e.details.around && f(e.details.around)
    ))
  );
}

function checkActiveSkillEffect(
  actives: ReadonlyArray<ActiveSkillData | ActiveSkillDataAsEquipmentEffect>,
  f: (effect: SkillEffectData) => boolean
): boolean {
  return actives.some(as => extractEffectsData(as).some(f));
}

function checkAllSkillEffect(
  actives: ReadonlyArray<ActiveSkillData | ActiveSkillDataAsEquipmentEffect>,
  passives: ReadonlyArray<PassiveSkillData | PassiveSkillDataAsEquipmentEffect>,
  f: (effect: SkillEffectData) => boolean
): boolean {
  return (
    checkActiveSkillEffect(actives, f) ||
    passives.some(ps => extractEffectsData(ps).some(f))
  );
}

function checkAllEnemyTargetSkillEffect(
  actives: ReadonlyArray<ActiveSkillData | ActiveSkillDataAsEquipmentEffect>,
  passives: ReadonlyArray<PassiveSkillData | PassiveSkillDataAsEquipmentEffect>,
  f: (effect: SkillEffectDataValue) => boolean
): boolean {
  function isEnemyTarget(arg: SkillEffectData): arg is { target: { kind: 'enemy' }, details: { target: SkillEffectDataValue } } {
    return 'target' in arg && arg.target.kind === 'enemy' && !!arg.details.target;
  }

  return (
    checkActiveSkillEffect(actives, e => isEnemyTarget(e) && f(e.details.target)) ||
    passives.some(ps => extractEffectsData(ps).some(e => isEnemyTarget(e) && f(e.details.target)))
  );
}

function checkSelfEffectedState(skillEffect: SkillEffectData, f: (e: Effect) => boolean): boolean {
  return skillEffect.conditions ?
    skillEffect.conditions.some(cond => {
      return (
        'state' in cond &&
        'self' in cond.state &&
        cond.state.self.some(s => {
          return 'affected' in s && s.affected && (isReadonlyArray(s.affected) ? s.affected.some(f) : f(s.affected));
        })
      );
    }) :
    false;
}

export function matchSkillConditions(
  skill: UnitSkillData[UnitNumber],
  conditions: ReadonlySet<SkillEffectCondition>
): boolean {
  if (conditions.size === 0) {
    return true;
  }

  const actives  = extractAllActiveSkills(skill);
  const passives = extractAllPassiveSkills(skill);

  return [...conditions.values()].every(condition => {
    switch (condition) {
    case StatusSkillEffectCondition.AtkUp:
      return checkAllSkillEffectDetails(actives, passives, e =>
        !!e.atk_up || !!e.atk_value_up || !!e.atk_value_up_by_unit_value
      );
    case StatusSkillEffectCondition.AtkDown:
      return checkAllEnemyTargetSkillEffect(actives, passives, e => !!e.atk_down);
    case StatusSkillEffectCondition.AccUp:
      return checkAllSkillEffectDetails(actives, passives, e => !!e.acc_up);
    case StatusSkillEffectCondition.AccDown:
      return checkAllEnemyTargetSkillEffect(actives, passives, e => !!e.acc_down);
    case StatusSkillEffectCondition.CriUp:
      return checkAllSkillEffectDetails(actives, passives, e => !!e.cri_up);
    case StatusSkillEffectCondition.CriDown:
      return checkAllEnemyTargetSkillEffect(actives, passives, e => !!e.cri_down);
    case StatusSkillEffectCondition.DefUp:
      return checkAllSkillEffectDetails(actives, passives, e => !!e.def_up || !!e.def_value_up);
    case StatusSkillEffectCondition.DefDown:
      return checkAllEnemyTargetSkillEffect(actives, passives, e => !!e.def_down);
    case StatusSkillEffectCondition.EvaUp:
      return checkAllSkillEffectDetails(actives, passives, e => !!e.eva_up);
    case StatusSkillEffectCondition.EvaDown:
      return checkAllEnemyTargetSkillEffect(actives, passives, e => !!e.eva_down);
    case StatusSkillEffectCondition.SpdUp:
      return checkAllSkillEffectDetails(actives, passives, e => !!e.spd_up);
    case StatusSkillEffectCondition.SpdDown:
      return checkAllEnemyTargetSkillEffect(actives, passives, e => !!e.spd_down);
    case StatusSkillEffectCondition.ApUp:
      return checkAllSkillEffect(
        actives,
        passives,
        e =>
          'self'   in e.details && !!e.details.self?.ap_up ||
          'target' in e.details && (!!e.details.target?.ap_up || !!e.details.target?.set_ap && 'base' in e.details.target.set_ap)
      );
    case StatusSkillEffectCondition.ApDown:
      return checkAllEnemyTargetSkillEffect(actives, passives, e => !!e.ap_down);
    case StatusSkillEffectCondition.AttributeResistUp:
      return checkAllSkillEffectDetails(
        actives,
        passives,
        e => !!e.fire_resist_up || !!e.ice_resist_up || !!e.electric_resist_up
      );
    case StatusSkillEffectCondition.AttributeResistDown:
      return checkAllEnemyTargetSkillEffect(
        actives,
        passives,
        e => !!e.fire_resist_down || !!e.ice_resist_down || !!e.electric_resist_down
      );
    case StatusSkillEffectCondition.MinimumAttributeResistUp:
      return checkAllSkillEffectDetails(
        actives,
        passives,
        e => !!e.minimum_fire_resist_up || !!e.minimum_ice_resist_up || !!e.minimum_electric_resist_up
      );
    case StatusSkillEffectCondition.StatusResistUp:
      return checkAllSkillEffectDetails(actives, passives, e => !!e.status_resist_up);
    case StatusSkillEffectCondition.StatusResistDown:
      return checkAllSkillEffect(actives, passives, e => 'target' in e.details && !!e.details.target?.status_resist_down);
    case StatusSkillEffectCondition.RangeUp:
      return checkAllSkillEffectDetails(actives, passives, e => !!e.range_up);
    case StatusSkillEffectCondition.RangeDown:
      return checkAllSkillEffectDetails(actives, passives, e => !!e.range_down);
    case StatusSkillEffectCondition.DamageMultiplierUp:
      return checkAllSkillEffectDetails(actives, passives, e => !!e.damage_multiplier_up || !!e.damage_multiplier_up_by_status);
    case StatusSkillEffectCondition.DamageMultiplierDown:
      return checkAllEnemyTargetSkillEffect(actives, passives, e => !!e.damage_multiplier_down);
    case OffensiveSkillEffectCondition.AttackAssist:
      return checkAllSkillEffectDetails(actives, passives, e => !!e.follow_up_attack || !!e.re_attack);
    case OffensiveSkillEffectCondition.CooperativeAttack:
      return checkActiveSkillEffect(actives, e => 'self' in e.details && !!e.details.self?.cooperative_attack);
    case OffensiveSkillEffectCondition.DefensePenetration:
      return checkAllSkillEffectDetails(actives, passives, e => !!e.defense_penetration || !!e.ignore_def);
    case OffensiveSkillEffectCondition.IgnoreBarrierDR:
      return checkAllSkillEffectDetails(actives, passives, e => !!e.ignore_barrier_dr);
    case OffensiveSkillEffectCondition.AntiLightUnitType:
      return checkAllSkillEffectDetails(actives, passives, e => !!e?.light_type_damage_up);
    case OffensiveSkillEffectCondition.AntiFlyingUnitType:
      return checkAllSkillEffectDetails(actives, passives, e => !!e?.flying_type_damage_up);
    case OffensiveSkillEffectCondition.AntiHeavyUnitType:
      return checkAllSkillEffectDetails(actives, passives, e => !!e?.heavy_type_damage_up);
    case OffensiveSkillEffectCondition.DamageTakenIncrease:
      return checkAllEnemyTargetSkillEffect(actives, passives, e => !!e.damage_taken_increased || !!e.damage_reduction_down);
    case OffensiveSkillEffectCondition.Counterattack:
      return checkAllSkillEffectDetails(actives, passives, e => !!e.counterattack);
    case OffensiveSkillEffectCondition.EnmityMerciless:
      return checkAllSkillEffect(actives, passives, e => 'self' in e.details && (!!e.details.self?.enmity || !!e.details.self?.merciless));
    case DefensiveSkillEffectCondition.RowProtect:
      return checkAllSkillEffectDetails(actives, passives, e => !!e.row_protect);
    case DefensiveSkillEffectCondition.ColumnProtect:
      return checkAllSkillEffectDetails(actives, passives, e => !!e.column_protect);
    case DefensiveSkillEffectCondition.TargetProtect:
      return checkAllSkillEffect(actives, passives, e => 'target' in e.details && !!e.details.target?.target_protect);
    case DefensiveSkillEffectCondition.Barrier:
      return checkAllSkillEffectDetails(actives, passives, e => !!e.barrier);
    case DefensiveSkillEffectCondition.DamageReductionUp:
      return checkAllSkillEffectDetails(actives, passives, e => !!e.damage_reduction_up);
    case DefensiveSkillEffectCondition.MinimizeOrNullifyDamage:
      return checkAllSkillEffectDetails(actives, passives, e => !!e.minimize_damage || !!e.nullify_damage);
    case DefensiveSkillEffectCondition.DefensePenetrationResist:
      return checkAllSkillEffectDetails(actives, passives, e => !!e.defense_penetration_resist_up_by_self_hp_rate);
    case DefensiveSkillEffectCondition.BattleContinuation:
      return checkAllSkillEffectDetails(actives, passives, e => !!e.battle_continuation);
    case OtherSkillEffectCondition.Reconnaissance:
      return checkAllSkillEffect(
        actives,
        passives,
        e =>
          'self'   in e.details && !!e.details.self?.reconnaissance ||
          'target' in e.details && !!e.details.target?.reconnaissance ||
          checkSelfEffectedState(e, e => e === Effect.Reconnaissance)
      );
    case OtherSkillEffectCondition.Marked:
      return checkAllSkillEffectDetails(actives, passives, e => !!e.marked);
    case OtherSkillEffectCondition.Provoked:
      return checkAllSkillEffect(actives, passives, e => 'target' in e.details && !!e.details.target?.provoked);
    case OtherSkillEffectCondition.Immovable:
      return checkAllEnemyTargetSkillEffect(actives, passives, e => !!e.immovable);
    case OtherSkillEffectCondition.Silenced:
      return checkAllSkillEffect(actives, passives, e => 'target' in e.details && !!e.details.target?.silenced);
    case OtherSkillEffectCondition.Stunned:
      return checkAllEnemyTargetSkillEffect(actives, passives, e => !!e.stunned);
    case OtherSkillEffectCondition.PushPull:
      return checkActiveSkillEffect(actives, e => 'target' in e.details && (!!e.details.target?.push || !!e.details.target?.pull));
    case OtherSkillEffectCondition.WetCorrosionOverloaded:
      return checkAllSkillEffectDetails(actives, passives, e => hasAbnormalConditionTags(e));
    case OtherSkillEffectCondition.IgnoreProtectActivate:
      return checkAllSkillEffectDetails(actives, passives, e => isNotImmediateTerm(e.ignore_protect));
    case OtherSkillEffectCondition.IgnoreProtectDeactivate:
      return checkAllSkillEffectDetails(actives, passives, e => !!e.ignore_protect_deactivate);
    case OtherSkillEffectCondition.RemoveBuff:
      return checkAllEnemyTargetSkillEffect(actives, passives, e => !!e.all_buff_removal || !!e.buff_removal);
    case OtherSkillEffectCondition.RemoveDebuff:
      return checkAllSkillEffectDetails(actives, passives, e => !!e.all_debuff_removal || !!e.debuff_removal);
    case OtherSkillEffectCondition.RemoveBuffResistUp:
      return checkAllSkillEffectDetails(actives, passives, e => !!e.all_buff_removal_resist_up);
    case OtherSkillEffectCondition.PreventsDebuff:
      return checkAllSkillEffectDetails(actives, passives, e => !!e.prevents_effect);
    case OtherSkillEffectCondition.AllBuffBlocking:
      return checkAllSkillEffectDetails(actives, passives, e => !!e.all_buff_blocking);
    case OtherSkillEffectCondition.ExpUp:
      return checkAllSkillEffectDetails(actives, passives, e => !!e.exp_up);
    case OtherSkillEffectCondition.ActionCountUp:
      return checkAllSkillEffectDetails(actives, passives, e => !!e.action_count_up);
    default: {
      const _exhaustiveCheck: never = condition;
      return _exhaustiveCheck;
    }
    }
  });
}
