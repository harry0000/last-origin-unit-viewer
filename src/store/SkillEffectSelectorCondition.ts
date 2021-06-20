import {
  ActiveSkillData,
  DamageAttribute,
  PassiveSkillData,
  PassiveSkillDataAsEquipmentEffect,
  UnitSkillData,
  isPassiveSkillData
} from '../domain/skill/UnitSkillData';
import { Effect } from '../domain/Effect';
import { EffectActivationState } from '../domain/EffectActivationState';
import { FormChangeUnits } from '../domain/UnitFormValue';
import { SkillEffectData, SkillEffectDataValue } from '../domain/skill/SkillEffectData';
import { SkillEffectTag } from '../domain/skill/SkillEffectTag';
import { UnitNumber } from '../domain/UnitBasicInfo';

export const SkillEffectSelectorCondition = {
  FireActive: 'fire_active',
  IceActive: 'ice_active',
  ElectricActive: 'electric_active',
  RowColumnProtect: 'row_column_protect',
  TargetProtect: 'target_protect',
  AttackAssist: 'attack_assist',
  AtkCriAccBuff: 'atk_cri_acc_buff',
  AtkCriAccDebuff: 'atk_cri_acc_debuff',
  DefEvaBuff: 'def_eva_buff',
  DefEvaDebuff: 'def_eva_debuff',
  SpdApBuff: 'spd_ap_buff',
  SpdApDebuff: 'spd_ap_debuff',
  DamageReduction: 'damage_reduction',
  IgnoreDefDrBarrierDR: 'ignore_def_dr_barrier_dr',
  AntiUnitType: 'anti_unit_type',
  IgnoreProtect: 'ignore_protect',
  Counterattack: 'counterattack',
  Reconnaissance: 'reconnaissance',
  AttributeResist: 'attribute_resist',
  Range: 'range',
  MarkedProvoked: 'marked_provoked',
  ImmovableSilencedStunned: 'immovable_silenced_stunned',
  WetCorrosionOverloaded: 'wet_corrosion_overloaded',
  RemoveBuffDebuff: 'remove_buff_debuff'
} as const;
export type SkillEffectSelectorCondition = typeof SkillEffectSelectorCondition[keyof typeof SkillEffectSelectorCondition]

const markedProvoked: ReadonlySet<Effect> = new Set([Effect.Marked, Effect.Provoked]);
const immovableSilencedStunned: ReadonlySet<Effect> = new Set([Effect.Immovable, Effect.Silenced, Effect.Stunned]);

function hasMarkedProvokedEffectedState(skillEffect: SkillEffectData): boolean {
  return checkTargetEffectedState(skillEffect, e => markedProvoked.has(e));
}

function hasAbnormalEffectedState(skillEffect: SkillEffectData): boolean {
  return checkTargetEffectedState(skillEffect, e => immovableSilencedStunned.has(e));
}

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
      e.details.self   && f(e.details.self) ||
      e.details.target && f(e.details.target) ||
      e.details.around && f(e.details.around)
    )) ||
    passives.some(ps => (isPassiveSkillData(ps) ? ps.effects : ps.equipment_effects).some(e =>
      e.details.self   && f(e.details.self) ||
      e.details.target && f(e.details.target) ||
      e.details.around && f(e.details.around)
    ))
  );
}

function checkAllSkillEffect(
  actives: ReadonlyArray<ActiveSkillData>,
  passives: ReadonlyArray<PassiveSkillData | PassiveSkillDataAsEquipmentEffect>,
  f: (effect: SkillEffectData) => boolean
): boolean {
  return (
    actives.some(as => as.effects.some(f)) ||
    passives.some(ps => (isPassiveSkillData(ps) ? ps.effects : ps.equipment_effects).some(f))
  );
}

function checkTargetEffectedState(skillEffect: SkillEffectData, f: (e: Effect) => boolean): boolean {
  return skillEffect.conditions ?
    skillEffect.conditions.some(cond => {
      return (
        'state' in cond &&
        'target' in cond.state &&
        cond.state.target.some(s => {
          const effect = s[EffectActivationState.Effected];
          return !!effect && f(effect);
        })
      );
    }) :
    false;
}

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

function getAllActiveSkills(skill: UnitSkillData[UnitNumber]): ReadonlyArray<ActiveSkillData> {
  switch (skill.no) {
  case FormChangeUnits.Alexandra:
    return [...skill.active.flatMap(as => Object.values(as))];
  case FormChangeUnits.BloodyPanther:
    return [...skill.active.flatMap(as => Object.values(as))];
  case FormChangeUnits.Emily:
    return [skill.active[0], ...Object.values(skill.active[1])];
  case FormChangeUnits.Phantom:
    return [...skill.active.flatMap(as => Object.values(as))];
  case FormChangeUnits.InvincibleDragon:
    return [...skill.active.flatMap(as => Object.values(as))];
  case FormChangeUnits.Siren:
    return [...skill.active.flatMap(as => Object.values(as))];
  case FormChangeUnits.Fortress:
    return [...skill.active.flatMap(as => Object.values(as))];
  default:
    return skill.active;
  }
}

function getAllPassiveSkills(skill: UnitSkillData[UnitNumber]): ReadonlyArray<PassiveSkillData | PassiveSkillDataAsEquipmentEffect> {
  switch (skill.no) {
  case FormChangeUnits.Alexandra:
    return [
      ...Object.values(skill.passive[0]),
      skill.passive[1],
      skill.passive[2]
    ];
  case FormChangeUnits.Leona:
    return [
      ...Object.values(skill.passive[0]),
      ...Object.values(skill.passive[1]),
      skill.passive[2]
    ];
  case FormChangeUnits.BloodyPanther:
    return [
      skill.passive[0],
      skill.passive[1],
      ...Object.values(skill.passive[2])
    ];
  case FormChangeUnits.Emily:
    return skill.passive;
  case FormChangeUnits.Phantom:
    return [
      ...Object.values(skill.passive[0]),
      skill.passive[1]
    ];
  case FormChangeUnits.InvincibleDragon:
    return skill.passive;
  case FormChangeUnits.Siren:
    return [
      skill.passive[0],
      ...Object.values(skill.passive[1]),
      skill.passive[2]
    ];
  case FormChangeUnits.Fortress:
    return Object.values(skill.passive[0]);
  default:
    return skill.passive;
  }
}

export function matchSkillConditions(
  skill: UnitSkillData[UnitNumber],
  conditions: ReadonlySet<SkillEffectSelectorCondition>
): boolean {
  if (conditions.size === 0) {
    return true;
  }

  const actives  = getAllActiveSkills(skill);
  const passives = getAllPassiveSkills(skill);

  return [...conditions.values()].every(condition => {
    switch (condition) {
    case SkillEffectSelectorCondition.FireActive:
      return actives.some(as =>
        as.damage_deal?.attribute === DamageAttribute.Fire ||
        as.effects.some(e => !!e.details.self?.additional_fire_damage || !!e.details.target?.fixed_fire_damage_over_time)
      );
    case SkillEffectSelectorCondition.IceActive:
      return actives.some(as =>
        as.damage_deal?.attribute === DamageAttribute.Ice ||
        as.effects.some(e => !!e.details.self?.additional_ice_damage || !!e.details.target?.fixed_ice_damage_over_time)
      );
    case SkillEffectSelectorCondition.ElectricActive:
      return actives.some(as =>
        as.damage_deal?.attribute === DamageAttribute.Electric ||
        as.effects.some(e => !!e.details.self?.additional_electric_damage || !!e.details.target?.fixed_electric_damage_over_time)
      );
    case SkillEffectSelectorCondition.RowColumnProtect:
      return checkAllSkillEffectDetails(actives, passives, e => !!e?.row_protect || !!e?.column_protect);
    case SkillEffectSelectorCondition.TargetProtect:
      return checkAllSkillEffectDetails(actives, passives, e => !!e?.target_protect);
    case SkillEffectSelectorCondition.AttackAssist:
      return checkAllSkillEffectDetails(actives, passives, e => !!e.follow_up_attack);
    case SkillEffectSelectorCondition.AtkCriAccBuff:
      return checkAllSkillEffectDetails(actives, passives, e => !!e.atk_up || !!e.cri_up || !!e.acc_up);
    case SkillEffectSelectorCondition.AtkCriAccDebuff:
      return checkAllSkillEffectDetails(actives, passives, e => !!e.atk_down || !!e.cri_down || !!e.acc_down);
    case SkillEffectSelectorCondition.DefEvaBuff:
      return checkAllSkillEffectDetails(actives, passives, e => !!e.def_up || !!e.eva_up);
    case SkillEffectSelectorCondition.DefEvaDebuff:
      return checkAllSkillEffectDetails(actives, passives, e => !!e.def_down || !!e.eva_down);
    case SkillEffectSelectorCondition.SpdApBuff:
      return checkAllSkillEffectDetails(actives, passives, e => !!e.spd_up || !!e.ap_up || !!e.set_ap);
    case SkillEffectSelectorCondition.SpdApDebuff:
      return checkAllSkillEffectDetails(actives, passives, e => !!e.spd_down || !!e.ap_down);
    case SkillEffectSelectorCondition.DamageReduction:
      return checkAllSkillEffectDetails(actives, passives, e => !!e.damage_reduction || !!e.minimize_damage || !!e.nullify_damage || !!e.barrier);
    case SkillEffectSelectorCondition.IgnoreDefDrBarrierDR:
      return checkAllSkillEffectDetails(actives, passives, e => !!e.defense_penetration || !!e.ignore_dr || !!e.ignore_barrier_dr);
    case SkillEffectSelectorCondition.IgnoreProtect:
      return checkAllSkillEffectDetails(actives, passives, e => !!e.ignore_protect);
    case SkillEffectSelectorCondition.AntiUnitType:
      return checkAllSkillEffectDetails(actives, passives, e => !!e.anti_light_type || !!e.anti_heavy_type || !!e.anti_flying_type);
    case SkillEffectSelectorCondition.Counterattack:
      return checkAllSkillEffectDetails(actives, passives, e => !!e.counterattack);
    case SkillEffectSelectorCondition.Reconnaissance:
      return checkAllSkillEffect(
        actives,
        passives,
        e => !!e.details.self?.reconnaissance || !!e.details.target?.reconnaissance || checkSelfEffectedState(e, e => e === Effect.Reconnaissance)
      );
    case SkillEffectSelectorCondition.AttributeResist:
      return checkAllSkillEffectDetails(actives, passives, e => !!e.fire_resist_up || !!e.ice_resist_up || !!e.electric_resist_up);
    case SkillEffectSelectorCondition.Range:
      return checkAllSkillEffectDetails(actives, passives, e => !!e.range_up || !!e.range_down);
    case SkillEffectSelectorCondition.MarkedProvoked:
      return checkAllSkillEffect(
        actives,
        passives,
        e => !!e.details.self?.marked || !!e.details.self?.provoked || !!e.details.target?.marked || !!e.details.target?.provoked || hasMarkedProvokedEffectedState(e)
      );
    case SkillEffectSelectorCondition.ImmovableSilencedStunned:
      return checkAllSkillEffect(
        actives,
        passives,
        e => !!e.details.target?.immovable || !!e.details.target?.silenced || !!e.details.target?.stunned || hasAbnormalEffectedState(e)
      );
    case SkillEffectSelectorCondition.WetCorrosionOverloaded:
      return checkAllSkillEffectDetails(actives, passives, e => hasAbnormalConditionTags(e));
    case SkillEffectSelectorCondition.RemoveBuffDebuff:
      return checkAllSkillEffectDetails(actives, passives, e => !!e.effect_removal || !!e.prevents_effect || !!e.all_buff_removal || !!e.all_debuff_removal);
    }
  });
}
