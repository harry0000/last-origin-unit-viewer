import {
  atomFamily,
  CallbackInterface,
  RecoilValueReadOnly,
  selectorFamily
} from 'recoil';

import DamagedState from '../../domain/UnitDamagedState';
import { UnitNumber } from '../../domain/UnitBasicInfo';

const _damagedState = atomFamily<DamagedState, UnitNumber>({
  key: 'UnitDamagedState_damagedState',
  default: (unit) => new DamagedState(unit)
});

export const damagedState = selectorFamily<boolean, UnitNumber>({
  key: 'damagedState',
  get: (unit) => ({ get }) => get(_damagedState(unit)).isDamaged
});

export const toggleDamagedState = (unit: UnitNumber) => ({ set }: CallbackInterface) => (): void => {
  set(_damagedState(unit), s => s.toggleDamagedState());
};

export const unitDamagedStateResolver = (unit: UnitNumber): RecoilValueReadOnly<DamagedState> =>
  _damagedState(unit);

export const restoreUnitDamagedState = ({ set }: CallbackInterface) => (states: ReadonlyArray<DamagedState>): void => {
  states.forEach(s => set(_damagedState(s.unit), s));
};
