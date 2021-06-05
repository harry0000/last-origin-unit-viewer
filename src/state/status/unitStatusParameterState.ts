import { selector, selectorFamily } from 'recoil';
import { UnitBasicInfo } from '../../domain/UnitBasicInfo';
import { UnitStatusParameter } from '../../domain/status/UnitStatusParameter';

import { selectedUnitBasicInfoState } from '../unit/unitSelectorStoreState';
import { unitBaseParameterState } from './unitBaseParameterState';
import { unitEnhancementStatusState } from './unitEnhancementStatusState';
import { unitUnitStatusEffectSummaryState } from './unitStatusEffectState';

const unitStatusParameterState = selectorFamily<UnitStatusParameter, UnitBasicInfo>({
  key: 'unitStatusParameterState',
  get: (unit) => ({ get }) => {

    return new UnitStatusParameter(
      get(unitEnhancementStatusState(unit)),
      get(unitBaseParameterState(unit)),
      get(unitUnitStatusEffectSummaryState(unit))
    );
  }
});

export const selectedUnitStatusParameterState = selector<UnitStatusParameter | undefined>({
  key: 'selectedUnitStatusParameterState',
  get: ({ get }) => {
    const selected = get(selectedUnitBasicInfoState);
    if (!selected) {
      return undefined;
    }

    return get(unitStatusParameterState(selected));
  }
});
