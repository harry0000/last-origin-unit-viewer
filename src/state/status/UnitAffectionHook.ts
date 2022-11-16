import { useRecoilCallback, useRecoilValue } from 'recoil';

import { BioroidUnitNumber } from '../../domain/UnitBasicInfo';
import { affectionEnabledState, toggleAffectionEnabled } from './UnitAffectionState';

export function useAffectionBonus(bioroid: BioroidUnitNumber): [bonusEnabled: boolean, toggleEnableBonus: () => void] {
  return [
    useRecoilValue(affectionEnabledState(bioroid)),
    useRecoilCallback(toggleAffectionEnabled(bioroid))
  ];
}
