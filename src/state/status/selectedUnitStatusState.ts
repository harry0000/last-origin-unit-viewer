import { DefaultValue, selector } from 'recoil';

import UnitStatus from '../../domain/status/UnitStatus';

import { unitSelectorStoreState } from '../unit/unitSelectorStoreState';
import { unitStatusState } from './unitStatusState';

export const selectedUnitStatusState = selector<UnitStatus | undefined>({
  key: 'selectedUnitStatusState',
  get: ({ get }) => {
    const selector = get(unitSelectorStoreState);

    return selector.selectedUnit && get(unitStatusState(selector.selectedUnit));
  },
  set: ({ set }, newValue) => {
    if (newValue && !(newValue instanceof DefaultValue)) {
      set(unitStatusState(newValue.unit), newValue);
    }
  }
});
