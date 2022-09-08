import { atom, CallbackInterface, RecoilValueReadOnly, selector, selectorFamily } from 'recoil';

import { Squad, TenKeyPosition } from '../../domain/squad/Squad';
import { UnitBasicInfo, UnitType } from '../../domain/UnitBasicInfo';

class SquadState {
  readonly #squad = atom<Squad>({ key: 'squadState_squad', default: new Squad() });

  readonly squadUnitsState = selector<Squad['units']>({
    key: 'squadUnitsState',
    get: ({ get }) => get(this.#squad).units
  });

  readonly assignedUnitState = selectorFamily<UnitBasicInfo | undefined, TenKeyPosition>({
    key: 'assignedUnitState',
    get: (position) => ({ get }) => get(this.#squad).unit(position)
  });

  readonly squadUnitTypeCountState = selector<Readonly<Record<UnitType, number>>>({
    key: 'squadUnitTypeCountState',
    get: ({ get }) => get(this.#squad).unitTypeCount
  });

  readonly assignUnit = (position: TenKeyPosition) => ({ set }: CallbackInterface) => (unit: UnitBasicInfo): void => {
    set(this.#squad, s => s.assignUnit(unit, position));
  };

  readonly canAssignUnit = (position: TenKeyPosition) => ({ snapshot }: CallbackInterface) => (unit: UnitBasicInfo): boolean => {
    return snapshot.getLoadable(this.#squad).getValue().canAssignUnit(unit, position);
  };

  readonly removeUnit = ({ set }: CallbackInterface) => (unit: UnitBasicInfo): void => {
    set(this.#squad, s => s.removeUnit(unit));
  };

  readonly getSquadUnitCount = ({ snapshot }: CallbackInterface) => (): Squad['unitCount'] => {
    return snapshot.getLoadable(this.#squad).getValue().unitCount;
  };

  readonly squadResolver: RecoilValueReadOnly<Squad> = this.#squad;

  readonly restoreSquad = ({ set }: CallbackInterface) => (squad: Squad): void => {
    set(this.#squad, squad);
  }
}

export const squadState: SquadState = new SquadState();
