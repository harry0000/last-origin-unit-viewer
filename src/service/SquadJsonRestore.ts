import {
  ChipEquipmentJsonStructure,
  GearEquipmentJsonStructure,
  isSquadJsonStructure,
  OsEquipmentJsonStructure,
  positions,
  UnitCoreLinkJsonStructure,
  UnitEnhancementJsonStructure,
  UnitSkillJsonStructure
} from './SquadJsonStructure';

import { Squad } from '../domain/squad/Squad';
import { UnitBasicInfo, UnitNumber } from '../domain/UnitBasicInfo';
import { UnitChip1Equipment, UnitChip2Equipment, UnitGearEquipment, UnitOsEquipment } from '../domain/status/UnitEquipment';
import UnitCoreLink, { CoreLinkUnit } from '../domain/UnitCoreLink';
import UnitLvStatus from '../domain/status/UnitLvStatus';
import { buildUnitSkill, UnitSkill } from '../domain/skill/UnitSkill';

import { unitBasicData } from '../data/unitBasicData';
import { equipmentData } from '../data/equipmentData';
import { unitCoreLinkBonusData } from '../data/unitCoreLinkBonusData';

type RestoredSquad = {
  squad: Squad,
  lvStatus: ReadonlyArray<UnitLvStatus>,
  chip1Equipment: ReadonlyArray<UnitChip1Equipment>,
  chip2Equipment: ReadonlyArray<UnitChip2Equipment>,
  osEquipment: ReadonlyArray<UnitOsEquipment>,
  gearEquipment: ReadonlyArray<UnitGearEquipment>,
  coreLink: ReadonlyArray<UnitCoreLink>,
  skill: ReadonlyArray<UnitSkill>
}

function restoreUnitLvStatus(unit: UnitNumber, [lv, hp, atk, def, acc, eva, cri]: UnitEnhancementJsonStructure): UnitLvStatus | undefined {
  const unitLv =
    new UnitLvStatus(unit)
      .setManualLvMode()
      .setUnitLv(lv)
      .setHpLv(hp)
      .setAtkLv(atk)
      .setDefLv(def)
      .setAccLv(acc)
      .setEvaLv(eva)
      .setCriLv(cri);

  return (
    unitLv.lv === lv &&
    unitLv.hpLv === hp &&
    unitLv.atkLv === atk &&
    unitLv.defLv === def &&
    unitLv.accLv === acc &&
    unitLv.evaLv === eva &&
    unitLv.criLv === cri ?
      unitLv :
      undefined
  );
}

function restoreChip1(unit: UnitNumber, json: ChipEquipmentJsonStructure | []): UnitChip1Equipment | undefined {
  if (json.length === 0) {
    return new UnitChip1Equipment(unit);
  }

  const [id, rank, lv] = json;
  const chip1 = new UnitChip1Equipment(unit).equipChip1(equipmentData[id]);

  return (
    chip1.chip1?.equipped.id === id &&
    chip1.chip1?.rank === rank &&
    chip1.chip1?.enhanceLv === lv ?
      chip1 :
      undefined
  );
}

function restoreChip2(unit: UnitNumber, json: ChipEquipmentJsonStructure | []): UnitChip2Equipment | undefined {
  if (json.length === 0) {
    return new UnitChip2Equipment(unit);
  }

  const [id, rank, lv] = json;
  const chip2 = new UnitChip2Equipment(unit).equipChip2(equipmentData[id]);

  return (
    chip2.chip2?.equipped.id === id &&
    chip2.chip2?.rank === rank &&
    chip2.chip2?.enhanceLv === lv ?
      chip2 :
      undefined
  );
}

function restoreOs(unit: UnitNumber, json: OsEquipmentJsonStructure | []): UnitOsEquipment | undefined {
  if (json.length === 0) {
    return new UnitOsEquipment(unit);
  }

  const [id, rank, lv] = json;
  const os = new UnitOsEquipment(unit).equipOs(equipmentData[id]);

  return (
    os.os?.equipped.id === id &&
    os.os?.rank === rank &&
    os.os?.enhanceLv === lv ?
      os :
      undefined
  );
}

function restoreGear(unit: UnitNumber, json: GearEquipmentJsonStructure | []): UnitGearEquipment | undefined {
  if (json.length === 0) {
    return new UnitGearEquipment(unit);
  }

  const [id, rank, lv] = json;
  const gear = new UnitGearEquipment(unit).equipGear(equipmentData[id]);

  return (
    gear.gear?.equipped.id === id &&
    gear.gear?.rank === rank &&
    gear.gear?.enhanceLv === lv ?
      gear :
      undefined
  );
}

function restoreCoreLink(unit: UnitNumber, [slot1, slot2, slot3, slot4, slot5, fullLink]: UnitCoreLinkJsonStructure): UnitCoreLink | undefined {
  let coreLink = new UnitCoreLink(unit);

  function getUnit(rate: CoreLinkUnit['rate']): CoreLinkUnit {
    switch (rate) {
    case 100: return coreLink.fitUnit;
    case 75: return coreLink.rankSSFitUnit;
    case 60: return coreLink.rankSFitUnit;
    case 45: return coreLink.rankAFitUnit;
    }
  }

  if (slot1) { coreLink = coreLink.linkSlot1(getUnit(slot1)); }
  if (slot2) { coreLink = coreLink.linkSlot2(getUnit(slot2)); }
  if (slot3) { coreLink = coreLink.linkSlot3(getUnit(slot3)); }
  if (slot4) { coreLink = coreLink.linkSlot4(getUnit(slot4)); }
  if (slot5) { coreLink = coreLink.linkSlot5(getUnit(slot5)); }

  if (fullLink !== -1) {
    coreLink = coreLink.selectFullLinkBonus(unitCoreLinkBonusData[unit].full_link_bonus[fullLink]);
  }

  return (
    (coreLink.slot1?.rate ?? 0) === slot1 &&
    (coreLink.slot2?.rate ?? 0) === slot2 &&
    (coreLink.slot3?.rate ?? 0) === slot3 &&
    (coreLink.slot4?.rate ?? 0) === slot4 &&
    (coreLink.slot5?.rate ?? 0) === slot5 &&
    coreLink.selectedFullLinkBonusIndex === fullLink ?
      coreLink :
      undefined
  );
}

function restoreSkill(unit: UnitBasicInfo, [as1, as2, ps1, ps2, ps3]: UnitSkillJsonStructure): UnitSkill | undefined {
  let skill = buildUnitSkill(unit)
    .changeActive1SkillLv(as1)
    .changeActive2SkillLv(as2);

  if (ps1) { skill = skill.changePassive1SkillLv(ps1); }
  if (ps2) { skill = skill.changePassive2SkillLv(ps2); }
  if (ps3) { skill = skill.changePassive3SkillLv(ps3); }

  return (
    skill.skillLv.active1Lv === as1 &&
    skill.skillLv.active2Lv === as2 &&
    (!ps1 || skill.skillLv.passive1Lv === ps1) &&
    (!ps2 || skill.skillLv.passive2Lv === ps2) &&
    (!ps3 || skill.skillLv.passive3Lv === ps3) ?
      skill :
      undefined
  );
}

export function restoreFromJsonObject(json: unknown): RestoredSquad | undefined {
  if (!isSquadJsonStructure(json)) {
    return undefined;
  }

  let squad = new Squad();
  const lvStatus: Array<UnitLvStatus> = [];
  const chip1Equipment: Array<UnitChip1Equipment> = [];
  const chip2Equipment: Array<UnitChip2Equipment> = [];
  const osEquipment: Array<UnitOsEquipment> = [];
  const gearEquipment: Array<UnitGearEquipment> = [];
  const coreLink: Array<UnitCoreLink> = [];
  const skill: Array<UnitSkill> = [];

  const squadUnits = json[0];
  for (let i = 0; i < positions.length; i++) {
    const unitJson = squadUnits[i];
    if (unitJson.length === 0) {
      continue;
    }

    // FIXME: check rank up & vow
    const [unitNo, rank] = unitJson[0];
    const unit = unitBasicData[unitNo];
    if (!unit || unit.rank !== rank) {
      return undefined;
    }

    const lv = restoreUnitLvStatus(unitNo, unitJson[1]);
    const chip1 = restoreChip1(unitNo, unitJson[2][0]);
    const chip2 = restoreChip2(unitNo, unitJson[2][1]);
    const os = restoreOs(unitNo, unitJson[2][2]);
    const gear = restoreGear(unitNo, unitJson[2][3]);
    const unitCoreLink = restoreCoreLink(unitNo, unitJson[3]);
    const unitSkill = restoreSkill(unit, unitJson[4]);
    if (!lv || !chip1 || !chip2 || !os || !gear || !unitCoreLink || !unitSkill) {
      return undefined;
    }

    squad = squad.assignUnit(unit, positions[i]);
    lvStatus.push(lv);
    chip1Equipment.push(chip1);
    chip2Equipment.push(chip2);
    osEquipment.push(os);
    gearEquipment.push(gear);
    coreLink.push(unitCoreLink);
    skill.push(unitSkill);
  }

  return { squad, lvStatus, chip1Equipment, chip2Equipment, osEquipment, gearEquipment, coreLink, skill };
}
