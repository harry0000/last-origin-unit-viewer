import {
  positions,
  SquadJsonStructure,
  UnitCoreLinkJsonStructure,
  UnitEnhancementJsonStructure,
  UnitEquipmentJsonStructure,
  UnitInfoJsonStructure,
  UnitJsonStructure,
  UnitSkillJsonStructure
} from './SquadJsonStructure';

import { Squad } from '../domain/squad/Squad';
import { UnitBasicInfo, UnitNumber } from '../domain/UnitBasicInfo';
import {
  UnitChip1Equipment,
  UnitChip2Equipment,
  UnitGearEquipment,
  UnitOsEquipment
} from '../domain/status/UnitEquipment';
import UnitCoreLink from '../domain/UnitCoreLink';
import UnitLvStatus from '../domain/status/UnitLvStatus';
import { UnitLvValue } from '../domain/status/UnitLv';
import { UnitSkill } from '../domain/skill/UnitSkill';

function convertUnit(
  unit: UnitBasicInfo,
  unitLvStatus: UnitLvStatus,
  chip1: UnitChip1Equipment,
  chip2: UnitChip2Equipment,
  os: UnitOsEquipment,
  gear: UnitGearEquipment,
  coreLink: UnitCoreLink,
  skill: UnitSkill
): SquadJsonStructure[0][number] {
  // FIXME: implement rank up
  // FIXME: implement vow
  const info: UnitInfoJsonStructure = [unit.no, unit.rank, 0];
  const enhancement = convertUnitEnhancement(unitLvStatus);

  return [
    info,
    enhancement,
    convertEquipment(enhancement[0], chip1, chip2, os, gear),
    convertCoreLink(enhancement[0], coreLink),
    convertSkill(skill)
  ];
}

function convertUnitEnhancement(unitLvStatus: UnitLvStatus): UnitEnhancementJsonStructure {
  return [
    unitLvStatus.lv,
    unitLvStatus.hpLv,
    unitLvStatus.atkLv,
    unitLvStatus.defLv,
    unitLvStatus.accLv,
    unitLvStatus.evaLv,
    unitLvStatus.criLv
  ];
}

function convertEquipment(
  lv: UnitLvValue,
  chip1: UnitChip1Equipment,
  chip2: UnitChip2Equipment,
  os: UnitOsEquipment,
  gear: UnitGearEquipment
): UnitEquipmentJsonStructure {
  return [
    chip1.isChip1Available(lv) && chip1.chip1 ? [chip1.chip1.equipped.id, chip1.chip1.rank, chip1.chip1.enhanceLv] : [],
    chip2.isChip2Available(lv) && chip2.chip2 ? [chip2.chip2.equipped.id, chip2.chip2.rank, chip2.chip2.enhanceLv] : [],
    os.isOsAvailable(lv)       && os.os       ? [os.os.equipped.id, os.os.rank, os.os.enhanceLv] : [],
    gear.isGearAvailable(lv)   && gear.gear   ? [gear.gear.equipped.id, gear.gear.rank, gear.gear.enhanceLv] : []
  ];
}

function convertCoreLink(lv: UnitLvValue, unitCoreLink: UnitCoreLink): UnitCoreLinkJsonStructure {
  return [
    unitCoreLink.isSlot1Available(lv) && unitCoreLink.slot1 ? unitCoreLink.slot1.rate : 0,
    unitCoreLink.isSlot2Available(lv) && unitCoreLink.slot2 ? unitCoreLink.slot2.rate : 0,
    unitCoreLink.isSlot3Available(lv) && unitCoreLink.slot3 ? unitCoreLink.slot3.rate : 0,
    unitCoreLink.isSlot4Available(lv) && unitCoreLink.slot4 ? unitCoreLink.slot4.rate : 0,
    unitCoreLink.isSlot5Available(lv) && unitCoreLink.slot5 ? unitCoreLink.slot5.rate : 0,
    unitCoreLink.isFullLinkBonusAvailable(lv) ? unitCoreLink.selectedFullLinkBonusIndex : -1
  ];
}

function convertSkill(unitSkill: UnitSkill): UnitSkillJsonStructure {
  return [
    unitSkill.skillLv.active1Lv,
    unitSkill.skillLv.active2Lv,
    unitSkill.skillLv.passive1Lv ?? 0,
    unitSkill.skillLv.passive2Lv ?? 0,
    unitSkill.skillLv.passive3Lv ?? 0
  ];
}

export function convertToJsonObject(
  squad: Squad,
  lvStatus: (unit: UnitNumber) => UnitLvStatus,
  chip1: (unit: UnitNumber) => UnitChip1Equipment,
  chip2: (unit: UnitNumber) => UnitChip2Equipment,
  os: (unit: UnitNumber) => UnitOsEquipment,
  gear: (unit: UnitNumber) => UnitGearEquipment,
  coreLink: (unit: UnitNumber) => UnitCoreLink,
  skill: (unit: UnitBasicInfo) => UnitSkill
): SquadJsonStructure | undefined {
  if (squad.unitCount === 0) {
    return undefined;
  }

  // Now only one squad is converted.
  const squad1: Array<UnitJsonStructure | []> = [];

  positions.forEach(pos => {
    const unit = squad.unit(pos);
    squad1.push(
      unit ?
        convertUnit(
          unit,
          lvStatus(unit.no),
          chip1(unit.no),
          chip2(unit.no),
          os(unit.no),
          gear(unit.no),
          coreLink(unit.no),
          skill(unit)
        ) :
        []
    );
  });

  return [squad1] as unknown as SquadJsonStructure;
}
