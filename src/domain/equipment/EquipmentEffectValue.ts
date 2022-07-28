import { EquipmentRank } from './EquipmentData';
import { IntegerValue, MicroValue, MilliPercentageValue, MilliValue, ValueUnit } from '../ValueUnit';

type EquipmentEffectDataValue<U extends ValueUnit, R extends EquipmentRank> =
  Record<U, number | Record<R, number>>

function getEquipmentValue<R extends EquipmentRank>(
  rank: R,
  value: number | Record<R, number>
): number {
  return typeof value === 'number' ? value : value[rank];
}

export function toIntegerValue<
  R extends EquipmentRank,
  V extends EquipmentEffectDataValue<'value', R>
>(rank: R, value: V): IntegerValue {
  return { value: getEquipmentValue(rank, value.value) };
}

export function toMilliValue<
  R extends EquipmentRank,
  V extends EquipmentEffectDataValue<'milliValue', R>
>(rank: R, value: V): MilliValue {
  return { milliValue: getEquipmentValue(rank, value.milliValue) };
}

export function toMicroValue<
  R extends EquipmentRank,
  V extends EquipmentEffectDataValue<'microValue', R>
>(rank: R, value: V): MicroValue {
  return { microValue: getEquipmentValue(rank, value.microValue) };
}

export function toMilliPercentageValue<
  R extends EquipmentRank,
  V extends EquipmentEffectDataValue<'milliPercentage', R>
>(rank: R, value: V): MilliPercentageValue {
  return { milliPercentage: getEquipmentValue(rank, value.milliPercentage) };
}
