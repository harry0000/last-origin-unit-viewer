import {
  Chip,
  ChipEquipmentRank,
  EquipmentEnhancementLevel,
  Gear,
  GearEquipmentRank,
  Os,
  OsEquipmentRank
} from '../domain/equipment/EquipmentData';
import { CoreLinkUnit } from '../domain/UnitCoreLink';
import { DamagedState } from '../domain/UnitDamagedState';
import { FullLinkBonusIndex } from '../domain/UnitCoreLinkBonusData';
import { SkillLv } from '../domain/skill/UnitSkillLvValue';
import { SkillType } from '../domain/skill/SkillType';
import { TenKeyPosition } from '../domain/squad/Squad';
import { UnitLvValue } from '../domain/status/UnitLv';
import { UnitNumber, UnitRank } from '../domain/UnitBasicInfo';

export const UnitDamagedJsonValue = {
  [DamagedState.NoDamaged]: 0,
  [DamagedState.ModeratelyDamaged]: 1,
  [DamagedState.HeavilyDamaged]: 2
} as const satisfies Record<DamagedState, number>;
export type UnitDamagedJsonValue = typeof UnitDamagedJsonValue[keyof typeof UnitDamagedJsonValue]

export type UnitInfoJsonStructure = readonly [no: UnitNumber, rank: UnitRank, vow: 0 | 1, damaged?: UnitDamagedJsonValue]

export type UnitEnhancementJsonStructure = readonly [
  lv: UnitLvValue,
  hp_lv: number,
  atk_lv: number,
  def_lv: number,
  acc_lv: number,
  eva_lv: number,
  cri_lv: number
]

export type ChipEquipmentJsonStructure = readonly [id: Chip['id'], rank: ChipEquipmentRank, enhanceLv: EquipmentEnhancementLevel]
export type OsEquipmentJsonStructure   = readonly [id: Os['id'],   rank: OsEquipmentRank,   enhanceLv: EquipmentEnhancementLevel]
export type GearEquipmentJsonStructure = readonly [id: Gear['id'], rank: GearEquipmentRank, enhanceLv: EquipmentEnhancementLevel]

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

export const PrimaryActiveSkillJsonValue = {
  [SkillType.Active1]: 1,
  [SkillType.Active2]: 2
} as const;
export type PrimaryActiveSkillJsonValue = typeof PrimaryActiveSkillJsonValue[keyof typeof PrimaryActiveSkillJsonValue]

export type UnitSkillJsonStructure = readonly [
  active1_lv: SkillLv,
  active2_lv: SkillLv,
  passive1_lv: SkillLv | 0,
  passive2_lv: SkillLv | 0,
  passive3_lv: SkillLv | 0,
  primary?: PrimaryActiveSkillJsonValue
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
  1, 2, 3,
  4, 5, 6,
  7, 8, 9
] as const satisfies ReadonlyArray<TenKeyPosition>;

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
  return Array.isArray(arg) && (
    arg.length === 3 && typeof arg[0] === 'number' && typeof arg[1] === 'string' && typeof arg[2] === 'number' ||
    arg.length === 4 && typeof arg[0] === 'number' && typeof arg[1] === 'string' && typeof arg[2] === 'number' && typeof arg[3] === 'number'
  );
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
  return Array.isArray(arg) && (arg.length === 5 || arg.length === 6) && arg.every(v => typeof v === 'number');
}
