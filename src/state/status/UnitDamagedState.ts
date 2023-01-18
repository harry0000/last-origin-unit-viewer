import { atomFamily, CallbackInterface, RecoilValueReadOnly } from 'recoil';

import UnitDamagedState, { DamagedState } from '../../domain/UnitDamagedState';
import { UnitNumber } from '../../domain/UnitBasicInfo';

import { updateUnitDamagedState } from './parameters/UnitStatusParameterState';

import { getFromSnapshot, getValue, ValueOrUpdater } from '../../util/recoil';

const _unitDamagedState = atomFamily<UnitDamagedState, UnitNumber>({
  key: 'UnitDamagedState_unitDamagedState',
  default: (unit) => new UnitDamagedState(unit)
});

const _damagedState = atomFamily<DamagedState, UnitNumber>({
  key: 'UnitDamagedState_damagedState',
  default: DamagedState.NoDamaged
});

function _update(unit: UnitNumber, valueOrUpdater: ValueOrUpdater<UnitDamagedState>): (cbi: CallbackInterface) => void {
  return (cbi) => {
    const set = cbi.set;
    const get = getFromSnapshot(cbi.snapshot);
    const prevValue = get(_unitDamagedState(unit));
    const nextValue = getValue(valueOrUpdater, () => prevValue);

    set(_unitDamagedState(unit), nextValue);
    set(_damagedState(unit), nextValue.damaged);

    if (prevValue !== nextValue) {
      updateUnitDamagedState(nextValue)(cbi);
    }
  };
}

export const damagedState: (unit: UnitNumber) => RecoilValueReadOnly<DamagedState> = _damagedState;

export const setDamagedState = (unit: UnitNumber) => (cbi: CallbackInterface) => (damaged: DamagedState): void => {
  _update(unit, s => s.setDamagedState(damaged))(cbi);
};

export const unitDamagedStateResolver = (unit: UnitNumber): RecoilValueReadOnly<UnitDamagedState> =>
  _unitDamagedState(unit);

export const restoreUnitDamagedState = (cbi: CallbackInterface) => (states: ReadonlyArray<UnitDamagedState>): void => {
  states.forEach(s => { _update(s.unit, s)(cbi); });
};
