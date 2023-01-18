import { useRecoilCallback, useRecoilValue } from 'recoil';

import { DamagedState } from '../../domain/UnitDamagedState';
import { UnitBasicInfo } from '../../domain/UnitBasicInfo';
import { damagedState, setDamagedState } from './UnitDamagedState';

export function useUnitDamagedState(
  { no }: UnitBasicInfo
): [damagedState: DamagedState, setDamagedState: (damaged: DamagedState) => void] {
  return [
    useRecoilValue(damagedState(no)),
    useRecoilCallback(setDamagedState(no))
  ];
}
