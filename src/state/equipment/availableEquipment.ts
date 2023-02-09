import { selectorFamily, useRecoilValue } from 'recoil';

import {
  availableRank,
  Chip,
  EquipmentData,
  EquipmentRank,
  Gear,
  isChipEquipment,
  isGearEquipment,
  isOsEquipment,
  matchExclusive,
  Os
} from '../../domain/equipment/EquipmentData';
import { UnitBasicInfo, UnitNumber } from '../../domain/UnitBasicInfo';

import { equipmentData } from '../../data/equipmentData';

import { EquipmentSlot, selectedEquipmentRankState } from './UnitEquipmentState';

function pickEquipment(unit: UnitNumber, rank: EquipmentRank) {
  return function<T extends EquipmentData>(equipment: T) {
    return matchExclusive(unit, equipment) && availableRank(equipment, rank);
  };
}

const chipEquipment = Object.values(equipmentData).filter(isChipEquipment);
const osEquipment   = Object.values(equipmentData).filter(isOsEquipment);
const gearEquipment = Object.values(equipmentData).filter(isGearEquipment);

const availableChipEquipmentState = selectorFamily<ReadonlyArray<Chip>, [unit: UnitNumber, slot: 'chip1' | 'chip2']>({
  key: 'availableChipEquipmentState',
  get: ([unit, slot]) => ({ get }) => {
    const rank = get(selectedEquipmentRankState(slot));
    return chipEquipment.filter(pickEquipment(unit, rank));
  }
});

const availableOsEquipmentState = selectorFamily<ReadonlyArray<Os>, UnitNumber>({
  key: 'availableOsEquipmentState',
  get: (unit) => ({ get }) => {
    const rank = get(selectedEquipmentRankState('os'));
    return osEquipment.filter(pickEquipment(unit, rank));
  }
});

const availableGearEquipmentState = selectorFamily<ReadonlyArray<Gear>, UnitNumber>({
  key: 'availableGearEquipmentState',
  get: (unit) => ({ get }) => {
    const rank = get(selectedEquipmentRankState('gear'));
    return gearEquipment.filter(pickEquipment(unit, rank));
  }
});

export function useAvailableEquipment(unit: UnitBasicInfo, slot: 'chip1' | 'chip2'): ReadonlyArray<Chip>
export function useAvailableEquipment(unit: UnitBasicInfo, slot: 'os'): ReadonlyArray<Os>
export function useAvailableEquipment(unit: UnitBasicInfo, slot: 'gear'): ReadonlyArray<Gear>
export function useAvailableEquipment(unit: UnitBasicInfo, slot: EquipmentSlot): ReadonlyArray<Chip | Os | Gear> {
  switch (slot) {
  case 'chip1':
  case 'chip2':
    return useRecoilValue(availableChipEquipmentState([unit.no, slot]));
  case 'os':
    return useRecoilValue(availableOsEquipmentState(unit.no));
  case 'gear':
    return useRecoilValue(availableGearEquipmentState(unit.no));
  }
}
