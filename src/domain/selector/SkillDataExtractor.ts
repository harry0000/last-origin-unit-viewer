import {
  ActiveSkillData,
  PassiveSkillData,
  PassiveSkillDataAsEquipmentEffect,
  UnitSkillData
} from '../skill/UnitSkillData';
import { FormChangeUnits } from '../UnitFormValue';
import { UnitNumber } from '../UnitBasicInfo';

export function extractAllActiveSkills(skill: UnitSkillData[UnitNumber]): ReadonlyArray<ActiveSkillData> {
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
  case FormChangeUnits.Rampart:
    return [...Object.values(skill.active[0]), skill.active[1]];
  case FormChangeUnits.Fortress:
    return [...skill.active.flatMap(as => Object.values(as))];
  default:
    return skill.active;
  }
}

export function extractAllPassiveSkills(skill: UnitSkillData[UnitNumber]): ReadonlyArray<PassiveSkillData | PassiveSkillDataAsEquipmentEffect> {
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
    return skill.passive.flatMap(ps => Object.values(ps));
  case FormChangeUnits.InvincibleDragon:
    return skill.passive;
  case FormChangeUnits.Siren:
    return [
      skill.passive[0],
      ...Object.values(skill.passive[1]),
      skill.passive[2]
    ];
  case FormChangeUnits.Rampart:
    return skill.passive;
  case FormChangeUnits.Fortress:
    return Object.values(skill.passive[0]);
  default:
    return skill.passive;
  }
}
