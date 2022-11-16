import { useRecoilCallback, useRecoilValue } from 'recoil';

import { UnitBasicInfo } from '../../domain/UnitBasicInfo';
import { damagedState, toggleDamagedState } from './UnitDamagedState';

export function useUnitDamagedState({ no }: UnitBasicInfo): [damaged: boolean, toggleDamagedState: () => void] {
  return [
    useRecoilValue(damagedState(no)),
    useRecoilCallback(toggleDamagedState(no))
  ];
}
