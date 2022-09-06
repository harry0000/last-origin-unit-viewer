import {
  atomFamily,
  CallbackInterface,
  RecoilValueReadOnly,
  selectorFamily
} from 'recoil';

import { default as DamagedState } from '../../domain/UnitDamagedState';
import { UnitNumber } from '../../domain/UnitBasicInfo';

class UnitDamagedState {
  readonly #damagedState = atomFamily<DamagedState, UnitNumber>({
    key: 'unitDamagedState_damagedState',
    default: (unit) => new DamagedState(unit)
  });

  readonly damagedState = selectorFamily<boolean, UnitNumber>({
    key: 'damagedState',
    get: (unit) => ({ get }) => get(this.#damagedState(unit)).isDamaged
  });

  readonly toggleDamagedState = (unit: UnitNumber) => ({ set }: CallbackInterface) => (): void => {
    set(this.#damagedState(unit), s => s.toggleDamagedState());
  }

  readonly unitDamagedStateResolver = (unit: UnitNumber): RecoilValueReadOnly<DamagedState> =>
    this.#damagedState(unit);

  readonly restoreUnitDamagedState = ({ set }: CallbackInterface) => (states: ReadonlyArray<DamagedState>): void => {
    states.forEach(s => set(this.#damagedState(s.unit), s));
  }
}

export const unitDamagedState: UnitDamagedState = new UnitDamagedState();
