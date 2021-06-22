import { selector, selectorFamily } from 'recoil';
import { StatusEffect } from '../../domain/status/StatusEffect';
import { UnitBasicInfo } from '../../domain/UnitBasicInfo';

import {
  unitChip1EquipmentState,
  unitChip2EquipmentState,
  unitGearEquipmentState,
  unitOsEquipmentState
} from './unitEquipmentState';
import { unitLvState } from '../status/unitLvStatusState';
import { selectedUnitBasicInfoState } from '../selector/unitSelectorState';

export const unitChip1EquipmentStatusEffectState = selectorFamily<StatusEffect, UnitBasicInfo>({
  key: 'unitChip1EquipmentStatusEffectState',
  get: (unit) => ({ get }) => {
    const unitLv = get(unitLvState(unit));
    return get(unitChip1EquipmentState(unit)).chip1StatusEffects(unitLv);
  }
});

export const unitChip2EquipmentStatusEffectState = selectorFamily<StatusEffect, UnitBasicInfo>({
  key: 'unitChip2EquipmentStatusEffectState',
  get: (unit) => ({ get }) => {
    const unitLv = get(unitLvState(unit));
    return get(unitChip2EquipmentState(unit)).chip2StatusEffects(unitLv);
  }
});

export const unitOsEquipmentStatusEffectState = selectorFamily<StatusEffect, UnitBasicInfo>({
  key: 'unitOsEquipmentStatusEffectState',
  get: (unit) => ({ get }) => {
    const unitLv = get(unitLvState(unit));
    return get(unitOsEquipmentState(unit)).osStatusEffects(unitLv);
  }
});

export const unitGearEquipmentStatusEffectState = selectorFamily<StatusEffect, UnitBasicInfo>({
  key: 'unitGearEquipmentStatusEffectState',
  get: (unit) => ({ get }) => {
    const unitLv = get(unitLvState(unit));
    return get(unitGearEquipmentState(unit)).gearStatusEffects(unitLv);
  }
});

export const selectedUnitChip1EquipmentStatusEffectState = selector<StatusEffect | undefined>({
  key: 'selectedUnitChip1EquipmentStatusEffectState',
  get: ({ get }) => {
    const selected = get(selectedUnitBasicInfoState);
    return selected && get(unitChip1EquipmentStatusEffectState(selected));
  }
});

export const selectedUnitChip2EquipmentStatusEffectState = selector<StatusEffect | undefined>({
  key: 'selectedUnitChip2EquipmentStatusEffectState',
  get: ({ get }) => {
    const selected = get(selectedUnitBasicInfoState);
    return selected && get(unitChip2EquipmentStatusEffectState(selected));
  }
});

export const selectedUnitOsEquipmentStatusEffectState = selector<StatusEffect | undefined>({
  key: 'selectedUnitOsEquipmentStatusEffectState',
  get: ({ get }) => {
    const selected = get(selectedUnitBasicInfoState);
    return selected && get(unitOsEquipmentStatusEffectState(selected));
  }
});

export const selectedUnitGearEquipmentStatusEffectState = selector<StatusEffect | undefined>({
  key: 'selectedUnitGearEquipmentStatusEffectState',
  get: ({ get }) => {
    const selected = get(selectedUnitBasicInfoState);
    return selected && get(unitGearEquipmentStatusEffectState(selected));
  }
});
