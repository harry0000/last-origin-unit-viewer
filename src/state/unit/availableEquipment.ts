import { constSelector, selector } from 'recoil';
import {
  Chip,
  EquipmentData,
  EquipmentType,
  Gear,
  matchExclusive,
  Os
} from '../../domain/EquipmentData';
import { UnitBasicInfo } from '../../domain/UnitBasicInfo';

import { selectedUnitBasicInfoState } from './unitSelectorStoreState';

import { equipmentData } from '../../data/equipmentData';

function filterEquipment(unit: UnitBasicInfo) {
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

export const selectedUnitAvailableChipEquipment = selector<ReadonlyArray<Chip>>({
  key: 'selectedUnitAvailableChipEquipment',
  get: ({ get }) => {
    const selected = get(selectedUnitBasicInfoState);
    if (!selected) {
      return [];
    }

    return get(chipEquipment).filter(filterEquipment(selected));
  }
});

export const selectedUnitAvailableOsEquipment = selector<ReadonlyArray<Os>>({
  key: 'selectedUnitAvailableOsEquipment',
  get: ({ get }) => {
    const selected = get(selectedUnitBasicInfoState);
    if (!selected) {
      return [];
    }

    return get(osEquipment).filter(filterEquipment(selected));
  }
});

export const selectedUnitAvailableGearEquipment = selector<ReadonlyArray<Gear>>({
  key: 'selectedUnitAvailableGearEquipment',
  get: ({ get }) => {
    const selected = get(selectedUnitBasicInfoState);
    if (!selected) {
      return [];
    }

    return get(gearEquipment).filter(filterEquipment(selected));
  }
});