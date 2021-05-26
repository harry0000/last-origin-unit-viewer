import { equipmentData } from '../data/equipmentData';
import { Sequence } from '../util/type';

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

export type EnhancementLevel = 0 | Sequence<10>

export type EquipmentId = keyof typeof equipmentData
export type EquipmentData = typeof equipmentData[EquipmentId]
