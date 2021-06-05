import { atomFamily, DefaultValue, selector } from 'recoil';
import UnitEnhancementStatus from '../../domain/status/UnitEnhancementStatus';
import { UnitBasicInfo } from '../../domain/UnitBasicInfo';
import { unitSelectorStoreState } from '../unit/unitSelectorStoreState';

export const unitEnhancementStatusState = atomFamily<UnitEnhancementStatus, UnitBasicInfo>({
  key: 'unitEnhancementStatusState',
  default: (unit) => new UnitEnhancementStatus(unit)
});

export const selectedUnitEnhancementStatusState = selector<UnitEnhancementStatus | undefined>({
  key: 'selectedUnitEnhancementStatusState',
  get: ({ get }) => {
    const selector = get(unitSelectorStoreState);

    return selector.selectedUnit && get(unitEnhancementStatusState(selector.selectedUnit));
  },
  set: ({ set }, newValue) => {
    if (newValue && !(newValue instanceof DefaultValue)) {
      set(unitEnhancementStatusState(newValue.unit), newValue);
    }
  }
});
