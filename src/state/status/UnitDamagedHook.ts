import { useRecoilCallback, useRecoilValue } from 'recoil';

import { UnitBasicInfo } from '../../domain/UnitBasicInfo';
import { unitDamagedState } from './UnitDamagedState';

export function useUnitDamagedState({ no }: UnitBasicInfo): [damaged: boolean, toggleDamagedState: () => void] {
  return [
    useRecoilValue(unitDamagedState.damagedState(no)),
    useRecoilCallback(unitDamagedState.toggleDamagedState(no))
  ];
}
