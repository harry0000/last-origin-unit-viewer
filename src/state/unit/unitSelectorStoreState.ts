import { atom, selector } from 'recoil';
import { UnitBasicInfo } from '../../domain/UnitBasicInfo';
import UnitSelectorStore from '../../store/UnitSelectorStore';
import { unitSkillTabState } from '../ui/unitSkillTabState';

const unitSelectorStoreAtomState = atom({
  key: 'unitSelectorStoreState',
  default: UnitSelectorStore.initialState()
});

export const unitSelectorStoreState = selector<UnitSelectorStore>({
  key: 'unitSelectorState',
  get: ({ get }) => {
    return get(unitSelectorStoreAtomState);
  },
  set: ({ set }, newValue) => {
    set(unitSelectorStoreAtomState, newValue);
    if (newValue instanceof UnitSelectorStore) {
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
