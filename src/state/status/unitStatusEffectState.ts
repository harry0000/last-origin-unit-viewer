import { selector, selectorFamily } from 'recoil';
import { UnitBasicInfo } from '../../domain/UnitBasicInfo';
import UnitStatusEffectSummary from '../../domain/status/UnitStatusEffectSummary';

import { selectedUnitBasicInfoState } from '../unit/unitSelectorStoreState';
import { unitEnhancementStatusState } from './unitEnhancementStatusState';
import {
  unitChip1EquipmentStatusEffectState,
  unitChip2EquipmentStatusEffectState,
  unitGearEquipmentStatusEffectState,
  unitOsEquipmentStatusEffectState
} from '../equipment/unitEquipmentStatusEffectState';

export const unitUnitStatusEffectSummaryState = selectorFamily<UnitStatusEffectSummary, UnitBasicInfo>({
  key: 'unitUnitStatusEffectSummaryState',
  get: (unit) => ({ get }) => {
    return new UnitStatusEffectSummary(
      get(unitEnhancementStatusState(unit)).statusEffects,
      get(unitChip1EquipmentStatusEffectState(unit)),
      get(unitChip2EquipmentStatusEffectState(unit)),
      get(unitOsEquipmentStatusEffectState(unit)),
      get(unitGearEquipmentStatusEffectState(unit))
    );
  }
});

export const selectedUnitStatusEffectSummaryState = selector<UnitStatusEffectSummary | undefined>({
  key: 'selectedUnitStatusEffectSummaryState',
  get: ({ get }) => {
    const selected = get(selectedUnitBasicInfoState);
    if (!selected) {
      return undefined;
    }

    return get(unitUnitStatusEffectSummaryState(selected));
  }
});
