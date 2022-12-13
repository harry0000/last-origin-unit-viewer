import { constSelector, selectorFamily, useRecoilValue } from 'recoil';

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

const chipEquipment = constSelector<ReadonlyArray<Chip>>(Object.values(equipmentData).filter(isChipEquipment));
const osEquipment   = constSelector<ReadonlyArray<Os>>(Object.values(equipmentData).filter(isOsEquipment));
const gearEquipment = constSelector<ReadonlyArray<Gear>>(Object.values(equipmentData).filter(isGearEquipment));

const availableChipEquipmentState = selectorFamily<ReadonlyArray<Chip>, [unit: UnitNumber, slot: 'chip1' | 'chip2']>({
  key: 'availableChipEquipmentState',
  get: ([unit, slot]) => ({ get }) => {
    const rank = get(selectedEquipmentRankState(slot));
    return get(chipEquipment).filter(pickEquipment(unit, rank));
  }
});

const availableOsEquipmentState = selectorFamily<ReadonlyArray<Os>, UnitNumber>({
  key: 'availableOsEquipmentState',
  get: (unit) => ({ get }) => {
    const rank = get(selectedEquipmentRankState('os'));
    return get(osEquipment).filter(pickEquipment(unit, rank));
  }
});

const availableGearEquipmentState = selectorFamily<ReadonlyArray<Gear>, UnitNumber>({
  key: 'availableGearEquipmentState',
  get: (unit) => ({ get }) => {
    const rank = get(selectedEquipmentRankState('gear'));
    return get(gearEquipment).filter(pickEquipment(unit, rank));
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
