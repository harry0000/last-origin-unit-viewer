import { useRecoilCallback, useRecoilValue } from 'recoil';

import { BioroidUnitNumber } from '../../domain/UnitBasicInfo';
import { unitAffectionState } from './UnitAffectionState';

export function useAffectionBonus(bioroid: BioroidUnitNumber): [bonusEnabled: boolean, toggleEnableBonus: () => void] {
  return [
    useRecoilValue(unitAffectionState.affectionEnabledState(bioroid)),
    useRecoilCallback(unitAffectionState.toggleAffectionEnabled(bioroid))
  ];
}
