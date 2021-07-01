import { equipmentData } from '../data/equipmentData';
import { Sequence } from '../util/type';
import { UnitNumber, UnitRole, UnitType } from './UnitBasicInfo';
import {
  IntegerValueEffectKey,
  MicroValueEffectKey,
  MilliPercentageEffectKey,
  MilliValueEffectKey,
  StatusEffectKey
} from './EquipmentEffect';
import {
  IntegerEquipmentValue,
  MicroEquipmentValue,
  MilliEquipmentValue,
  MilliPercentageEquipmentValue
} from './EquipmentEffectValue';
import { unitBasicData } from '../data/unitBasicData';

export const EquipmentType = {
  Chip: 'chip',
  Os: 'os',
  Gear: 'gear'
} as const;
export type EquipmentType = typeof EquipmentType[keyof typeof EquipmentType]

export const EquipmentRank = {
  SS: 'ss',
  S: 's',
  A: 'a',
  B: 'b'
} as const;
export type EquipmentRank = typeof EquipmentRank[keyof typeof EquipmentRank]

export type EquipmentEnhancementLevel = 0 | Sequence<10>

export type EquipmentExclusive = {
  exclusive: {
    unit: UnitNumber
  } | {
    type: UnitType
  } | {
    role: UnitRole
  } | {
    type: UnitType,
    role: UnitRole
  }
}

export type StatusEffectData = {
  [K in StatusEffectKey]?:
    K extends IntegerValueEffectKey ? IntegerEquipmentValue :
    K extends MilliValueEffectKey ? MilliEquipmentValue :
    K extends MicroValueEffectKey ? MicroEquipmentValue :
    K extends MilliPercentageEffectKey ? MilliPercentageEquipmentValue :
    never
}

export type EquipmentId = keyof typeof equipmentData
export type EquipmentData = typeof equipmentData[EquipmentId]

type EquipmentTypeFilter<T extends EquipmentType, E = EquipmentData> = E extends { type: T } ? E : never

export type Chip = EquipmentTypeFilter<typeof EquipmentType.Chip>
export type Os   = EquipmentTypeFilter<typeof EquipmentType.Os>
export type Gear = EquipmentTypeFilter<typeof EquipmentType.Gear>

export type ChipId = EquipmentTypeFilter<typeof EquipmentType.Chip>['id']
export type OsId   = EquipmentTypeFilter<typeof EquipmentType.Os>['id']
export type GearId = EquipmentTypeFilter<typeof EquipmentType.Gear>['id']

export function matchExclusive(unit: UnitNumber, equipment: EquipmentData): boolean {
  if (!('exclusive' in equipment)) {
    return true;
  }

  const exclusive = equipment.exclusive;
  if ('unit' in exclusive) {
    return unit === exclusive.unit;
  } else if ('type' in exclusive && 'role' in exclusive) {
    const { type, role } = unitBasicData[unit];
    return type === exclusive.type && role === exclusive.role;
  } else if ('type' in exclusive) {
    return unitBasicData[unit].type === exclusive.type;
  } else {
    return unitBasicData[unit].role === exclusive.role;
  }
}
