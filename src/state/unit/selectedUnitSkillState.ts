import { DefaultValue, selector } from 'recoil';

import { UnitSkill } from '../../domain/UnitSkill';

import { unitSkillState } from '../skill/unitSkillState';
import { unitSelectorStoreState } from './unitSelectorStoreState';

export const selectedUnitSkillState = selector<UnitSkill | undefined>({
  key: 'selectedUnitSkillState',
  get: ({ get }) => {
    const selector = get(unitSelectorStoreState);

    return selector.selectedUnit && get(unitSkillState(selector.selectedUnit));
  },
  set: ({ set }, newValue) => {
    if (newValue && !(newValue instanceof DefaultValue)) {
      set(unitSkillState(newValue.unit), newValue);
    }
  }
});
