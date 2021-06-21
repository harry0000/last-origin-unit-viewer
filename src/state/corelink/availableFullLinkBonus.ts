import { selector } from 'recoil';
import { UnitCoreLinkBonusData } from '../../domain/UnitCoreLinkBonusData';
import { UnitNumber } from '../../domain/UnitBasicInfo';
import { selectedUnitBasicInfoState } from '../selector/unitSelectorState';
import { unitCoreLinkBonusData } from '../../data/unitCoreLinkBonusData';

export const availableFullLinkBonus = selector<UnitCoreLinkBonusData[UnitNumber]['full_link_bonus'] | []>({
  key: 'availableFullLinkBonus',
  get: ({ get }) => {
    const selected = get(selectedUnitBasicInfoState);
    return selected ? unitCoreLinkBonusData[selected.no].full_link_bonus : [];
  }
});
