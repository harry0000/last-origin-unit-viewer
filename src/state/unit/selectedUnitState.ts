import { DefaultValue, selector } from 'recoil';

import { Unit } from '../../domain/Unit';

import { unitState } from './unitState';
import { unitSelectorStoreState } from './unitSelectorStoreState';

export const selectedUnitState = selector<Unit | undefined>({
  key: 'selectedUnitState',
  get: ({ get }) => {
    const selector = get(unitSelectorStoreState);

    return selector.selectedUnit && get(unitState(selector.selectedUnit));
  },
  set: ({ set }, newValue) => {
    if (newValue && !(newValue instanceof DefaultValue)) {
      set(unitState(newValue.basicInfo), newValue);
    }
  }
});
