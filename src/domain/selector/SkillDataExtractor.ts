import {
  ActiveSkillData,
  ActiveSkillDataAsEquipmentEffect,
  PassiveSkillData,
  PassiveSkillDataAsEquipmentEffect,
  UnitSkillData
} from '../skill/UnitSkillData';
import { FormChangeUnits } from '../UnitFormValue';
import { SkillAreaType } from '../skill/SkillAreaOfEffect';
import { SkillEffectsAsEquipmentEffect } from '../skill/SkillEffectData';
import { UnitNumber } from '../UnitBasicInfo';

export function extractAllActiveSkills(skill: UnitSkillData[UnitNumber]): ReadonlyArray<ActiveSkillData | ActiveSkillDataAsEquipmentEffect> {
  switch (skill.no) {
  case FormChangeUnits.Alexandra:
  case FormChangeUnits.BloodyPanther:
  case FormChangeUnits.Nashorn:
  case FormChangeUnits.Phantom:
  case FormChangeUnits.Bulgasari:
  case FormChangeUnits.InvincibleDragon:
  case FormChangeUnits.Siren:
  case FormChangeUnits.Olivia:
  case FormChangeUnits.Spartoia:
  case FormChangeUnits.MightyR:
  case FormChangeUnits.Ullr:
  case FormChangeUnits.JangHwa:
  case FormChangeUnits.Fortress:
  case FormChangeUnits.Peregrinus:
    return [...skill.active.flatMap(as => Object.values(as))];
  case FormChangeUnits.Rampart:
    return [...Object.values(skill.active[0]), skill.active[1]];
  case FormChangeUnits.Emily:
  case FormChangeUnits.Pinto:
    return [skill.active[0], ...Object.values(skill.active[1])];
  default:
    return skill.active;
  }
}

export function extractAllPassiveSkills(skill: UnitSkillData[UnitNumber]): ReadonlyArray<PassiveSkillData | PassiveSkillDataAsEquipmentEffect> {
  switch (skill.no) {
  case FormChangeUnits.Alexandra:
  case FormChangeUnits.Peregrinus:
    return [
      ...Object.values(skill.passive[0]),
      skill.passive[1],
      skill.passive[2]
    ];
  case FormChangeUnits.Siren:
  case FormChangeUnits.Ullr:
    return [
      skill.passive[0],
      ...Object.values(skill.passive[1]),
      skill.passive[2]
    ];
  case FormChangeUnits.Leona:
    return [
      ...Object.values(skill.passive[0]),
      ...Object.values(skill.passive[1]),
      skill.passive[2]
    ];
  case FormChangeUnits.BloodyPanther:
  case FormChangeUnits.Fortress:
    return [
      ...Object.values(skill.passive[0]),
      skill.passive[1],
      ...Object.values(skill.passive[2])
    ];
  case FormChangeUnits.Spartoia:
    return [
      skill.passive[0],
      ...Object.values(skill.passive[1]),
      ...Object.values(skill.passive[2])
    ];
  case FormChangeUnits.Phantom:
  case FormChangeUnits.MightyR:
    return skill.passive.flatMap(ps => Object.values(ps));
  case FormChangeUnits.Nashorn:
  case FormChangeUnits.Emily:
  case FormChangeUnits.InvincibleDragon:
  case FormChangeUnits.Olivia:
  case FormChangeUnits.Rampart:
  case FormChangeUnits.JangHwa:
    return skill.passive;
  default:
    return skill.passive;
  }
}

export function extractSkillAreaOfEffect(
  skill: ActiveSkillData | ActiveSkillDataAsEquipmentEffect | PassiveSkillData | PassiveSkillDataAsEquipmentEffect
): SkillAreaType {
  return typeof skill.area === 'string' ?
    skill.area :
    '10' in skill.area ?
      skill.area[10] :
      skill.area[5];
}

function isSkillEffectsDataAsEquipmentEffect<
  T extends ActiveSkillData | ActiveSkillDataAsEquipmentEffect | PassiveSkillData | PassiveSkillDataAsEquipmentEffect
>(arg: T): arg is Extract<T, SkillEffectsAsEquipmentEffect> {
  return 'equipment_effects' in arg;
}

export function extractEffectsData(
  data: ActiveSkillData | ActiveSkillDataAsEquipmentEffect | PassiveSkillData | PassiveSkillDataAsEquipmentEffect
): ActiveSkillData['effects'] | ActiveSkillDataAsEquipmentEffect['equipment_effects'] | PassiveSkillData['effects'] | PassiveSkillDataAsEquipmentEffect['equipment_effects'] {
  return isSkillEffectsDataAsEquipmentEffect(data) ? data.equipment_effects : data.effects;
}
