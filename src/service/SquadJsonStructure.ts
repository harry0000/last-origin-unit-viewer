import { Chip, EquipmentEnhancementLevel, EquipmentRank, Gear, Os } from '../domain/EquipmentData';
import { CoreLinkUnit } from '../domain/UnitCoreLink';
import { FullLinkBonusIndex } from '../domain/UnitCoreLinkBonusData';
import { SkillLv } from '../domain/skill/UnitSkillLvValue';
import { TenKeyPosition } from '../domain/squad/Squad';
import { UnitLvValue } from '../domain/status/UnitLv';
import { UnitNumber, UnitRank } from '../domain/UnitBasicInfo';

export type UnitInfoJsonStructure = readonly [no: UnitNumber, rank: UnitRank, vow: 0 | 1]

export type UnitEnhancementJsonStructure = readonly [
  lv: UnitLvValue,
  hp_lv: number,
  atk_lv: number,
  def_lv: number,
  acc_lv: number,
  eva_lv: number,
  cri_lv: number
]

export type ChipEquipmentJsonStructure = readonly [id: Chip['id'], rank: EquipmentRank, enhanceLv: EquipmentEnhancementLevel]
export type OsEquipmentJsonStructure   = readonly [id: Os['id'],   rank: EquipmentRank, enhanceLv: EquipmentEnhancementLevel]
export type GearEquipmentJsonStructure = readonly [id: Gear['id'], rank: EquipmentRank, enhanceLv: EquipmentEnhancementLevel]

export type UnitEquipmentJsonStructure = readonly [
  chip1: ChipEquipmentJsonStructure | [],
  chip2: ChipEquipmentJsonStructure | [],
  os: OsEquipmentJsonStructure | [],
  gear: GearEquipmentJsonStructure | []
]

export type UnitCoreLinkJsonStructure = readonly [
  link_slot1: CoreLinkUnit['rate'] | 0,
  link_slot2: CoreLinkUnit['rate'] | 0,
  link_slot3: CoreLinkUnit['rate'] | 0,
  link_slot4: CoreLinkUnit['rate'] | 0,
  link_slot5: CoreLinkUnit['rate'] | 0,
  full_link_bonus: FullLinkBonusIndex | -1
]

export type UnitSkillJsonStructure = readonly [
  active1_lv: SkillLv,
  active2_lv: SkillLv,
  passive1_lv: SkillLv | 0,
  passive2_lv: SkillLv | 0,
  passive3_lv: SkillLv | 0
]

export type UnitJsonStructure = readonly [
  UnitInfoJsonStructure,
  UnitEnhancementJsonStructure,
  UnitEquipmentJsonStructure,
  UnitCoreLinkJsonStructure,
  UnitSkillJsonStructure
]

export type SquadJsonStructure = readonly [
  readonly [
      UnitJsonStructure | [], UnitJsonStructure | [], UnitJsonStructure | [],
      UnitJsonStructure | [], UnitJsonStructure | [], UnitJsonStructure | [],
      UnitJsonStructure | [], UnitJsonStructure | [], UnitJsonStructure | []
  ]
]

export const positions = [
  1 as TenKeyPosition, 2 as TenKeyPosition, 3 as TenKeyPosition,
  4 as TenKeyPosition, 5 as TenKeyPosition, 6 as TenKeyPosition,
  7 as TenKeyPosition, 8 as TenKeyPosition, 9 as TenKeyPosition
] as const;

export function isSquadJsonStructure(arg: unknown): arg is SquadJsonStructure {
  return Array.isArray(arg) && arg.length === 1 && isSquadUnitsStructure(arg[0]);
}

function isSquadUnitsStructure(arg: unknown): arg is SquadJsonStructure[0] {
  if (!Array.isArray(arg) || arg.length !== positions.length) {
    return false;
  }

  return arg.every(unit => isUnitStructure(unit));
}

function isUnitStructure(arg: unknown): arg is UnitJsonStructure {
  return Array.isArray(arg) && (
    arg.length === 0 ||
    arg.length === 5 &&
    isUnitInfoStructure(arg[0]) &&
    isUnitEnhancementStructure(arg[1]) &&
    isUnitEquipmentStructure(arg[2]) &&
    isUnitCoreLinkStructure(arg[3]) &&
    isUnitSkillStructure(arg[4])
  );
}

function isUnitInfoStructure(arg: unknown): arg is UnitInfoJsonStructure {
  return Array.isArray(arg) && arg.length === 3 && typeof arg[0] === 'number' && typeof arg[1] === 'string' && typeof arg[2] === 'number';
}

function isUnitEnhancementStructure(arg: unknown): arg is UnitEnhancementJsonStructure {
  return Array.isArray(arg) && arg.length === 7 && arg.every(v => typeof v === 'number');
}

function isUnitEquipmentStructure(arg: unknown): arg is UnitEquipmentJsonStructure {
  return Array.isArray(arg) && arg.length === 4 && arg.every(v =>
    Array.isArray(v) && (
      v.length === 0 ||
      v.length === 3 && typeof v[0] === 'string' && typeof v[1] === 'string' && typeof v[2] === 'number'
    )
  );
}

function isUnitCoreLinkStructure(arg: unknown): arg is UnitCoreLinkJsonStructure {
  return Array.isArray(arg) && arg.length === 6 && arg.every(v => typeof v === 'number');
}

function isUnitSkillStructure(arg: unknown): arg is UnitSkillJsonStructure {
  return Array.isArray(arg) && arg.length === 5 && arg.every(v => typeof v === 'number');
}
