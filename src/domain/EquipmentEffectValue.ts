import { EquipmentRank } from './EquipmentData';
import { IntegerValue, MicroValue, MilliPercentageValue, MilliValue } from './ValueUnit';

export type EquipmentValue = number | { [EquipmentRank.SS]: number }

export type IntegerEquipmentValue         = { value: EquipmentValue }
export type MilliEquipmentValue           = { milliValue: EquipmentValue }
export type MicroEquipmentValue           = { microValue: EquipmentValue }
export type MilliPercentageEquipmentValue = { milliPercentage: EquipmentValue }

function getEquipmentValue(value: EquipmentValue): number {
  return typeof value === 'number' ? value : value[EquipmentRank.SS];
}

export function toIntegerValue(value: IntegerEquipmentValue): IntegerValue {
  return { value: getEquipmentValue(value.value) };
}

export function toMilliValue(value: MilliEquipmentValue): MilliValue {
  return { milliValue: getEquipmentValue(value.milliValue) };
}

export function toMicroValue(value: MicroEquipmentValue): MicroValue {
  return { microValue: getEquipmentValue(value.microValue) };
}

export function toMilliPercentageValue(value: MilliPercentageEquipmentValue): MilliPercentageValue {
  return { milliPercentage: getEquipmentValue(value.milliPercentage) };
}
