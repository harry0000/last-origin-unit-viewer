import { EquipmentRank } from './EquipmentData';

export type EquipmentValue = number | { [EquipmentRank.SS]: number }

export type IntegerEquipmentValue         = { value: EquipmentValue }
export type MilliEquipmentValue           = { milliValue: EquipmentValue }
export type MicroEquipmentValue           = { microValue: EquipmentValue }
export type MilliPercentageEquipmentValue = { milliPercentage: EquipmentValue }
