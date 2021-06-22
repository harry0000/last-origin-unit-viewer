import { selector, selectorFamily } from 'recoil';
import { UnitBasicInfo } from '../../domain/UnitBasicInfo';
import { UnitStatusParameter } from '../../domain/status/UnitStatusParameter';

import { coreLinkBonusEffectsState, fullLinkBonusEffectState } from '../corelink/unitCoreLinkState';
import { selectedUnitBasicInfoState } from '../selector/unitSelectorState';
import { unitBaseParameterState } from './unitBaseParameterState';
import {
  unitChip1EquipmentStatusEffectState,
  unitChip2EquipmentStatusEffectState,
  unitGearEquipmentStatusEffectState,
  unitOsEquipmentStatusEffectState
} from '../equipment/unitEquipmentStatusEffectState';
import { unitLvStatusState } from './unitLvStatusState';

const unitStatusParameterState = selectorFamily<UnitStatusParameter, UnitBasicInfo>({
  key: 'unitStatusParameterState',
  get: (unit) => ({ get }) => {
    return new UnitStatusParameter(
      get(unitLvStatusState(unit)),
      get(unitBaseParameterState(unit)),
      get(unitChip1EquipmentStatusEffectState(unit)),
      get(unitChip2EquipmentStatusEffectState(unit)),
      get(unitOsEquipmentStatusEffectState(unit)),
      get(unitGearEquipmentStatusEffectState(unit)),
      get(coreLinkBonusEffectsState(unit)),
      get(fullLinkBonusEffectState(unit))
    );
  }
});

export const selectedUnitStatusParameterState = selector<UnitStatusParameter | undefined>({
  key: 'selectedUnitStatusParameterState',
  get: ({ get }) => {
    const selected = get(selectedUnitBasicInfoState);
    return selected && get(unitStatusParameterState(selected));
  }
});
