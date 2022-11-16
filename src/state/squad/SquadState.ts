import { atom, CallbackInterface, RecoilValueReadOnly, selector, selectorFamily } from 'recoil';

import { Squad, TenKeyPosition } from '../../domain/squad/Squad';
import { UnitBasicInfo, UnitType } from '../../domain/UnitBasicInfo';

const _squad = atom<Squad>({ key: 'SquadState_squad', default: new Squad() });

export const squadUnitsState = selector<Squad['units']>({
  key: 'squadUnitsState',
  get: ({ get }) => get(_squad).units
});

export const assignedUnitState = selectorFamily<UnitBasicInfo | undefined, TenKeyPosition>({
  key: 'assignedUnitState',
  get: (position) => ({ get }) => get(_squad).unit(position)
});

export const squadUnitTypeCountState = selector<Readonly<Record<UnitType, number>>>({
  key: 'squadUnitTypeCountState',
  get: ({ get }) => get(_squad).unitTypeCount
});

export const assignUnit = (position: TenKeyPosition) => ({ set }: CallbackInterface) => (unit: UnitBasicInfo): void => {
  set(_squad, s => s.assignUnit(unit, position));
};

export const canAssignUnit = (position: TenKeyPosition) => ({ snapshot }: CallbackInterface) => (unit: UnitBasicInfo): boolean => {
  return snapshot.getLoadable(_squad).getValue().canAssignUnit(unit, position);
};

export const removeUnit = ({ set }: CallbackInterface) => (unit: UnitBasicInfo): void => {
  set(_squad, s => s.removeUnit(unit));
};

export const getSquadUnitCount = ({ snapshot }: CallbackInterface) => (): Squad['unitCount'] => {
  return snapshot.getLoadable(_squad).getValue().unitCount;
};

export const squadResolver: RecoilValueReadOnly<Squad> = _squad;

export const restoreSquad = ({ set }: CallbackInterface) => (squad: Squad): void => {
  set(_squad, squad);
};
