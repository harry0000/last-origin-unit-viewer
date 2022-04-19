import {
  ActiveSkillData,
  PassiveSkillData,
  PassiveSkillDataAsEquipmentEffect,
  UnitSkillData,
  isPassiveSkillData
} from '../skill/UnitSkillData';
import { Effect } from '../Effect';
import { EffectActivationState } from '../EffectActivationState';
import { SkillEffectData, SkillEffectDataValue } from '../skill/SkillEffectData';
import { SkillEffectTag } from '../skill/SkillEffectTag';
import { UnitNumber } from '../UnitBasicInfo';

import { extractAllActiveSkills, extractAllPassiveSkills } from './SkillDataExtractor';

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
  StatusResistUp: 'status_resist_up',
  StatusResistDown: 'status_resist_down',
  RangeUp: 'range_up',
  RangeDown: 'range_down',
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
  DamageReduction: 'damage_reduction',
  MinimizeOrNullifyDamage: 'minimize_or_nullify_damage',
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
  RemoveBuffDebuff: 'remove_buff_debuff'
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

function checkAllSkillEffectDetails(
  actives: ReadonlyArray<ActiveSkillData>,
  passives: ReadonlyArray<PassiveSkillData | PassiveSkillDataAsEquipmentEffect>,
  f: (effect: SkillEffectDataValue) => boolean
): boolean {
  return (
    actives.some(as => as.effects.some(e =>
      'self'   in e.details && e.details.self   && f(e.details.self) ||
      'target' in e.details && e.details.target && f(e.details.target) ||
      'around' in e.details && e.details.around && f(e.details.around)
    )) ||
    passives.some(ps => (isPassiveSkillData(ps) ? ps.effects : ps.equipment_effects).some(e =>
      'self'   in e.details && e.details.self   && f(e.details.self) ||
      'target' in e.details && e.details.target && f(e.details.target) ||
      'around' in e.details && e.details.around && f(e.details.around)
    ))
  );
}

function checkActiveSkillEffect(
  actives: ReadonlyArray<ActiveSkillData>,
  f: (effect: SkillEffectData) => boolean
): boolean {
  return actives.some(as => as.effects.some(f));
}

function checkAllSkillEffect(
  actives: ReadonlyArray<ActiveSkillData>,
  passives: ReadonlyArray<PassiveSkillData | PassiveSkillDataAsEquipmentEffect>,
  f: (effect: SkillEffectData) => boolean
): boolean {
  return (
    checkActiveSkillEffect(actives, f) ||
    passives.some(ps => (isPassiveSkillData(ps) ? ps.effects : ps.equipment_effects).some(f))
  );
}

// function checkTargetEffectedState(skillEffect: SkillEffectData, f: (e: Effect) => boolean): boolean {
//   return skillEffect.conditions ?
//     skillEffect.conditions.some(cond => {
//       return (
//         'state' in cond &&
//         'target' in cond.state &&
//         cond.state.target.some(s => {
//           const effect = s[EffectActivationState.Effected];
//           return !!effect && f(effect);
//         })
//       );
//     }) :
//     false;
// }

function checkSelfEffectedState(skillEffect: SkillEffectData, f: (e: Effect) => boolean): boolean {
  return skillEffect.conditions ?
    skillEffect.conditions.some(cond => {
      return (
        'state' in cond &&
        'self' in cond.state &&
        cond.state.self.some(s => {
          const effect = s[EffectActivationState.Effected];
          return !!effect && f(effect);
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
    // TODO: check effect target ally or enemy
    switch (condition) {
    case StatusSkillEffectCondition.AtkUp:
      return checkAllSkillEffectDetails(actives, passives, e => !!e.atk_up);
    case StatusSkillEffectCondition.AtkDown:
      return checkAllSkillEffect(actives, passives, e => 'target' in e.details && !!e.details.target?.atk_down);
    case StatusSkillEffectCondition.AccUp:
      return checkAllSkillEffectDetails(actives, passives, e => !!e.acc_up);
    case StatusSkillEffectCondition.AccDown:
      return checkAllSkillEffect(actives, passives, e => 'target' in e.details && !!e.details.target?.acc_down);
    case StatusSkillEffectCondition.CriUp:
      return checkAllSkillEffectDetails(actives, passives, e => !!e.cri_up);
    case StatusSkillEffectCondition.CriDown:
      return checkAllSkillEffect(actives, passives, e => 'target' in e.details && !!e.details.target?.cri_down);
    case StatusSkillEffectCondition.DefUp:
      return checkAllSkillEffectDetails(actives, passives, e => !!e.def_up);
    case StatusSkillEffectCondition.DefDown:
      return checkAllSkillEffect(actives, passives, e => 'target' in e.details && !!e.details.target?.def_down);
    case StatusSkillEffectCondition.EvaUp:
      return checkAllSkillEffectDetails(actives, passives, e => !!e.eva_up);
    case StatusSkillEffectCondition.EvaDown:
      return checkAllSkillEffect(actives, passives, e => 'target' in e.details && !!e.details.target?.eva_down);
    case StatusSkillEffectCondition.SpdUp:
      return checkAllSkillEffectDetails(actives, passives, e => !!e.spd_up);
    case StatusSkillEffectCondition.SpdDown:
      return checkAllSkillEffect(actives, passives, e => 'target' in e.details && !!e.details.target?.spd_down);
    case StatusSkillEffectCondition.ApUp:
      return checkAllSkillEffect(
        actives,
        passives,
        e =>
          'self'   in e.details && !!e.details.self?.ap_up ||
          'target' in e.details && (!!e.details.target?.ap_up || !!e.details.target?.set_ap && 'base' in e.details.target.set_ap)
      );
    case StatusSkillEffectCondition.ApDown:
      return checkAllSkillEffect(actives, passives, e => 'target' in e.details && !!e.details.target?.ap_down);
    case StatusSkillEffectCondition.AttributeResistUp:
      return checkAllSkillEffectDetails(actives, passives, e => !!e.fire_resist_up || !!e.ice_resist_up || !!e.electric_resist_up);
    case StatusSkillEffectCondition.AttributeResistDown:
      return checkAllSkillEffect(
        actives,
        passives,
        e =>
          'target' in e.details &&
          (!!e.details.target?.fire_resist_down || !!e.details.target?.ice_resist_down || !!e.details.target?.electric_resist_down)
      );
    case StatusSkillEffectCondition.StatusResistUp:
      return checkAllSkillEffectDetails(actives, passives, e => !!e.status_resist_up);
    case StatusSkillEffectCondition.StatusResistDown:
      return checkAllSkillEffect(actives, passives, e => 'target' in e.details && !!e.details.target?.status_resist_down);
    case StatusSkillEffectCondition.RangeUp:
      return checkAllSkillEffectDetails(actives, passives, e => !!e.range_up);
    case StatusSkillEffectCondition.RangeDown:
      return checkAllSkillEffectDetails(actives, passives, e => !!e.range_down);
    case OffensiveSkillEffectCondition.AttackAssist:
      return checkAllSkillEffectDetails(actives, passives, e => !!e.follow_up_attack || !!e.re_attack);
    case OffensiveSkillEffectCondition.CooperativeAttack:
      return checkActiveSkillEffect(actives, e => 'self' in e.details && !!e.details.self?.cooperative_attack);
    case OffensiveSkillEffectCondition.DefensePenetration:
      return checkAllSkillEffectDetails(actives, passives, e => !!e.defense_penetration);
    case OffensiveSkillEffectCondition.IgnoreBarrierDR:
      return checkAllSkillEffectDetails(actives, passives, e => !!e.ignore_barrier_dr);
    case OffensiveSkillEffectCondition.AntiLightUnitType:
      return checkAllSkillEffectDetails(actives, passives, e => !!e?.anti_light_type);
    case OffensiveSkillEffectCondition.AntiFlyingUnitType:
      return checkAllSkillEffectDetails(actives, passives, e => !!e?.anti_flying_type);
    case OffensiveSkillEffectCondition.AntiHeavyUnitType:
      return checkAllSkillEffectDetails(actives, passives, e => !!e?.anti_heavy_type);
    case OffensiveSkillEffectCondition.DamageTakenIncrease:
      return checkAllSkillEffect(actives, passives, e => 'target' in e.details && !!e.details.target?.damage_taken_increased);
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
    case DefensiveSkillEffectCondition.DamageReduction:
      return checkAllSkillEffectDetails(actives, passives, e => !!e.damage_reduction);
    case DefensiveSkillEffectCondition.MinimizeOrNullifyDamage:
      return checkAllSkillEffectDetails(actives, passives, e => !!e.minimize_damage || !!e.nullify_damage);
    case DefensiveSkillEffectCondition.BattleContinuation:
      return checkAllSkillEffectDetails(actives, passives, e => !!e.battle_continuation || !!e.battle_continuation_with_hp_rate);
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
      return checkAllSkillEffect(actives, passives, e => 'target' in e.details && !!e.details.target?.immovable);
    case OtherSkillEffectCondition.Silenced:
      return checkAllSkillEffect(actives, passives, e => 'target' in e.details && !!e.details.target?.silenced);
    case OtherSkillEffectCondition.Stunned:
      return checkAllSkillEffect(actives, passives, e => 'target' in e.details && !!e.details.target?.stunned);
    case OtherSkillEffectCondition.PushPull:
      return checkActiveSkillEffect(actives, e => 'target' in e.details && (!!e.details.target?.push || !!e.details.target?.pull));
    case OtherSkillEffectCondition.WetCorrosionOverloaded:
      return checkAllSkillEffectDetails(actives, passives, e => hasAbnormalConditionTags(e));
    case OtherSkillEffectCondition.RemoveBuffDebuff:
      return checkAllSkillEffectDetails(actives, passives, e => !!e.effect_removal || !!e.prevents_effect || !!e.all_buff_removal || !!e.all_debuff_removal);
    default: {
      const _exhaustiveCheck: never = condition;
      return _exhaustiveCheck;
    }
    }
  });
}
