import { atom, atomFamily, selector } from 'recoil';
import { UnitBasicInfo } from '../../domain/UnitBasicInfo';
import UnitSelectorStore from '../../store/UnitSelectorStore';
import { unitSkillTabState } from '../ui/unitSkillTabState';

export const unitSelectedState = atomFamily<boolean, UnitBasicInfo>({
  key: 'unitSelectedState',
  default: false
});

const unitSelectorStoreAtomState = atom({
  key: 'unitSelectorStoreState',
  default: UnitSelectorStore.initialState()
});

export const unitSelectorStoreState = selector<UnitSelectorStore>({
  key: 'unitSelectorState',
  get: ({ get }) => {
    return get(unitSelectorStoreAtomState);
  },
  set: ({ get, set }, newValue) => {
    if (newValue instanceof UnitSelectorStore) {
      const prev = get(unitSelectorStoreAtomState).selectedUnit;
      const next = newValue.selectedUnit;
      if (prev !== next) {
        if (prev) {
          set(unitSelectedState(prev), false);
        }
        if (next) {
          set(unitSelectedState(next), true);
        }
      }

      set(unitSelectorStoreAtomState, newValue);
      set(unitSkillTabState, newValue.selectedUnit ? 'active1' : undefined);
    }
  }
});

export const selectedUnitBasicInfoState = selector<UnitBasicInfo | undefined>({
  key: 'selectedUnitBasicInfoState',
  get: ({ get }) => {
    return get(unitSelectorStoreState).selectedUnit;
  }
});
