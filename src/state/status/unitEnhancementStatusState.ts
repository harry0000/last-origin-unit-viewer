import { atomFamily, DefaultValue, selector } from 'recoil';

import { UnitBasicInfo } from '../../domain/UnitBasicInfo';
import UnitEnhancementStatus from '../../domain/status/UnitEnhancementStatus';
import { UnitLvValue } from '../../domain/status/UnitLv';
import { selectedUnitBasicInfoState } from '../selector/unitSelectorState';

export const unitEnhancementStatusState = atomFamily<UnitEnhancementStatus, UnitBasicInfo>({
  key: 'unitEnhancementStatusState',
  default: (unit) => new UnitEnhancementStatus(unit)
});

export const unitLvState = atomFamily<UnitLvValue, UnitBasicInfo>({
  key: 'unitLvState',
  default: 1
});

export const selectedUnitEnhancementStatusState = selector<UnitEnhancementStatus | undefined>({
  key: 'selectedUnitEnhancementStatusState',
  get: ({ get }) => {
    const selected = get(selectedUnitBasicInfoState);
    return selected && get(unitEnhancementStatusState(selected));
  },
  set: ({ set }, newValue) => {
    if (newValue && !(newValue instanceof DefaultValue)) {
      set(unitEnhancementStatusState(newValue.unit), newValue);
      set(unitLvState(newValue.unit), newValue.lv);
    }
  }
});
