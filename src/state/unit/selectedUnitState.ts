import { DefaultValue, selector } from 'recoil';

import { Unit } from '../../domain/Unit';

import { unitStoreState } from './unitStoreState';
import { unitSelectorStoreState } from './unitSelectorStoreState';

export const selectedUnitState = selector<Unit | undefined>({
  key: 'selectedUnitState',
  get: ({ get }) => {
    const selector = get(unitSelectorStoreState);
    const store    = get(unitStoreState);

    return selector.selectedUnit && store.getUnit(selector.selectedUnit);
  },
  set: ({ get, set }, newValue) => {
    if (newValue && !(newValue instanceof DefaultValue)) {
      set(unitStoreState, get(unitStoreState).setUnit(newValue));
    }
  }
});
