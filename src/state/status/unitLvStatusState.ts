import { atomFamily, DefaultValue, selector } from 'recoil';

import { UnitBasicInfo } from '../../domain/UnitBasicInfo';
import UnitLvStatus from '../../domain/status/UnitLvStatus';
import { UnitLvValue } from '../../domain/status/UnitLv';
import { selectedUnitBasicInfoState } from '../selector/unitSelectorState';

export const unitLvStatusState = atomFamily<UnitLvStatus, UnitBasicInfo>({
  key: 'unitLvStatusState',
  default: (unit) => new UnitLvStatus(unit)
});

export const unitLvState = atomFamily<UnitLvValue, UnitBasicInfo>({
  key: 'unitLvState',
  default: 1
});

export const selectedUnitLvStatusState = selector<UnitLvStatus | undefined>({
  key: 'selectedUnitLvStatusState',
  get: ({ get }) => {
    const selected = get(selectedUnitBasicInfoState);
    return selected && get(unitLvStatusState(selected));
  },
  set: ({ set }, newValue) => {
    if (newValue && !(newValue instanceof DefaultValue)) {
      set(unitLvStatusState(newValue.unit), newValue);
      set(unitLvState(newValue.unit), newValue.lv);
    }
  }
});
