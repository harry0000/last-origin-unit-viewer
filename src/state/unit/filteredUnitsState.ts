import { selector } from 'recoil';

import { unitSelectorStoreState } from './unitSelectorStoreState';

import { unitBasicData } from '../../data/unitBasicData';
import { unitSkillData } from '../../data/unitSkillData';

export const filteredUnitsState = selector({
  key: 'filteredUnitsState',
  get: ({ get }) => {
    const store = get(unitSelectorStoreState);

    return store.selectUnits(unitBasicData, unitSkillData);
  }
});
