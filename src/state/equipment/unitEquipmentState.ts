import { atomFamily, DefaultValue, selector } from 'recoil';
import { UnitBasicInfo } from '../../domain/UnitBasicInfo';
import {
  UnitChip1Equipment,
  UnitChip2Equipment,
  UnitGearEquipment,
  UnitOsEquipment
} from '../../domain/status/UnitEquipment';

import { selectedUnitBasicInfoState } from '../unit/unitSelectorStoreState';
import { unitEnhancementStatusState } from '../status/unitEnhancementStatusState';

export const unitChip1EquipmentState = atomFamily<UnitChip1Equipment, UnitBasicInfo>({
  key: 'unitChip1EquipmentState',
  default: (unit) => new UnitChip1Equipment(unit)
});

export const unitChip2EquipmentState = atomFamily<UnitChip2Equipment, UnitBasicInfo>({
  key: 'unitChip2EquipmentState',
  default: (unit) => new UnitChip2Equipment(unit)
});

export const unitOsEquipmentState = atomFamily<UnitOsEquipment, UnitBasicInfo>({
  key: 'unitOsEquipmentState',
  default: (unit) => new UnitOsEquipment(unit)
});

export const unitGearEquipmentState = atomFamily<UnitGearEquipment, UnitBasicInfo>({
  key: 'unitGearEquipmentState',
  default: (unit) => new UnitGearEquipment(unit)
});

export const selectedUnitChip1EquipmentState = selector<UnitChip1Equipment | undefined>({
  key: 'selectedUnitChip1EquipmentState',
  get: ({ get }) => {
    const selected = get(selectedUnitBasicInfoState);
    return selected ? get(unitChip1EquipmentState(selected)) : undefined;
  },
  set: ({ set }, newValue) => {
    if (newValue && !(newValue instanceof DefaultValue)) {
      set(unitChip1EquipmentState(newValue.unit), newValue);
    }
  }
});

export const selectedUnitChip2EquipmentState = selector<UnitChip2Equipment | undefined>({
  key: 'selectedUnitChip2EquipmentState',
  get: ({ get }) => {
    const selected = get(selectedUnitBasicInfoState);
    return selected ? get(unitChip2EquipmentState(selected)) : undefined;
  },
  set: ({ set }, newValue) => {
    if (newValue && !(newValue instanceof DefaultValue)) {
      set(unitChip2EquipmentState(newValue.unit), newValue);
    }
  }
});

export const selectedUnitOsEquipmentState = selector<UnitOsEquipment | undefined>({
  key: 'selectedUnitOsEquipmentState',
  get: ({ get }) => {
    const selected = get(selectedUnitBasicInfoState);
    return selected ? get(unitOsEquipmentState(selected)) : undefined;
  },
  set: ({ set }, newValue) => {
    if (newValue && !(newValue instanceof DefaultValue)) {
      set(unitOsEquipmentState(newValue.unit), newValue);
    }
  }
});

export const selectedUnitGearEquipmentState = selector<UnitGearEquipment | undefined>({
  key: 'selectedUnitGearEquipmentState',
  get: ({ get }) => {
    const selected = get(selectedUnitBasicInfoState);
    return selected ? get(unitGearEquipmentState(selected)) : undefined;
  },
  set: ({ set }, newValue) => {
    if (newValue && !(newValue instanceof DefaultValue)) {
      set(unitGearEquipmentState(newValue.unit), newValue);
    }
  }
});

export const chip1SlotAvailableState = selector<boolean>({
  key: 'chip1SlotAvailableState',
  get: ({ get }) => {
    const chip1 = get(selectedUnitChip1EquipmentState);
    if (!chip1) {
      return false;
    }

    const unitLv = get(unitEnhancementStatusState(chip1.unit)).lv;
    return chip1.isChip1Available(unitLv);
  }
});

export const chip2SlotAvailableState = selector<boolean>({
  key: 'chip2SlotAvailableState',
  get: ({ get }) => {
    const chip2 = get(selectedUnitChip2EquipmentState);
    if (!chip2) {
      return false;
    }

    const unitLv = get(unitEnhancementStatusState(chip2.unit)).lv;
    return chip2.isChip2Available(unitLv);
  }
});

export const osSlotAvailableState = selector<boolean>({
  key: 'osSlotAvailableState',
  get: ({ get }) => {
    const os = get(selectedUnitOsEquipmentState);
    if (!os) {
      return false;
    }

    const unitLv = get(unitEnhancementStatusState(os.unit)).lv;
    return os.isOsAvailable(unitLv);
  }
});

export const gearSlotAvailableState = selector<boolean>({
  key: 'gearSlotAvailableState',
  get: ({ get }) => {
    const gear = get(selectedUnitGearEquipmentState);
    if (!gear) {
      return false;
    }

    const unitLv = get(unitEnhancementStatusState(gear.unit)).lv;
    return gear.isGearAvailable(unitLv);
  }
});
