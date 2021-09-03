import { constSelector, selectorFamily, useRecoilValue } from 'recoil';

import {
  Chip,
  EquipmentData,
  EquipmentType,
  Gear,
  matchExclusive,
  Os
} from '../../domain/equipment/EquipmentData';
import { UnitBasicInfo, UnitNumber } from '../../domain/UnitBasicInfo';

import { equipmentData } from '../../data/equipmentData';

import { EquipmentSlot } from './unitEquipmentState';

function filterEquipment(unit: UnitNumber) {
  return function<T extends EquipmentData>(equipment: T) {
    return matchExclusive(unit, equipment);
  };
}

const chipEquipment = constSelector<ReadonlyArray<Chip>>(
  Object.values(equipmentData).filter(e => e.type === EquipmentType.Chip) as ReadonlyArray<Chip>
);

const osEquipment = constSelector<ReadonlyArray<Os>>(
  Object.values(equipmentData).filter(e => e.type === EquipmentType.Os) as ReadonlyArray<Os>
);

const gearEquipment = constSelector<ReadonlyArray<Gear>>(
  Object.values(equipmentData).filter(e => e.type === EquipmentType.Gear) as ReadonlyArray<Gear>
);

const availableChipEquipmentState = selectorFamily<ReadonlyArray<Chip>, UnitNumber>({
  key: 'availableChipEquipmentState',
  get: (unit) => ({ get }) => get(chipEquipment).filter(filterEquipment(unit))
});

const availableOsEquipmentState = selectorFamily<ReadonlyArray<Os>, UnitNumber>({
  key: 'availableOsEquipmentState',
  get: (unit) => ({ get }) => get(osEquipment).filter(filterEquipment(unit))
});

const availableGearEquipmentState = selectorFamily<ReadonlyArray<Gear>, UnitNumber>({
  key: 'availableGearEquipmentState',
  get: (unit) => ({ get }) => get(gearEquipment).filter(filterEquipment(unit))
});

export function useAvailableEquipment(unit: UnitBasicInfo, slot: 'chip1' | 'chip2'): ReadonlyArray<Chip>
export function useAvailableEquipment(unit: UnitBasicInfo, slot: 'os'): ReadonlyArray<Os>
export function useAvailableEquipment(unit: UnitBasicInfo, slot: 'gear'): ReadonlyArray<Gear>
export function useAvailableEquipment(unit: UnitBasicInfo, slot: EquipmentSlot): ReadonlyArray<Chip | Os | Gear> {
  switch (slot) {
  case 'chip1':
  case 'chip2':
    return useRecoilValue(availableChipEquipmentState(unit.no));
  case 'os':
    return useRecoilValue(availableOsEquipmentState(unit.no));
  case 'gear':
    return useRecoilValue(availableGearEquipmentState(unit.no));
  }
}
