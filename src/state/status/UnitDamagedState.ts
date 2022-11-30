import {
  atomFamily,
  CallbackInterface,
  RecoilValueReadOnly,
  selectorFamily
} from 'recoil';

import DamagedState from '../../domain/UnitDamagedState';
import { UnitNumber } from '../../domain/UnitBasicInfo';

import { updateUnitDamagedState } from './parameters/UnitStatusParameterState';

import { getFromSnapshot } from '../../util/recoil';

const _damagedState = atomFamily<DamagedState, UnitNumber>({
  key: 'UnitDamagedState_damagedState',
  default: (unit) => new DamagedState(unit)
});

export const damagedState = selectorFamily<boolean, UnitNumber>({
  key: 'damagedState',
  get: (unit) => ({ get }) => get(_damagedState(unit)).isDamaged
});

export const toggleDamagedState = (unit: UnitNumber) => (cbi: CallbackInterface) => (): void => {
  const { set, snapshot } = cbi;
  const nextValue = getFromSnapshot(snapshot)(_damagedState(unit)).toggleDamagedState();

  set(_damagedState(unit), nextValue);
  updateUnitDamagedState(nextValue)(cbi);
};

export const unitDamagedStateResolver = (unit: UnitNumber): RecoilValueReadOnly<DamagedState> =>
  _damagedState(unit);

export const restoreUnitDamagedState = (cbi: CallbackInterface) => (states: ReadonlyArray<DamagedState>): void => {
  const { set } = cbi;
  states.forEach(s => {
    set(_damagedState(s.unit), s);
    updateUnitDamagedState(s)(cbi);
  });
};
