import { atomFamily, DefaultValue, selector } from 'recoil';
import { UnitBasicInfo } from '../../domain/UnitBasicInfo';
import { buildUnit, UnitSkill } from '../../domain/UnitSkill';
import { unitSelectorStoreState } from '../unit/unitSelectorStoreState';

export const unitSkillState = atomFamily<UnitSkill, UnitBasicInfo>({
  key: 'unitSkillState',
  default: (unit) => buildUnit(unit)
});

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
