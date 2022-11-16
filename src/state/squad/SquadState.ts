import { atom, atomFamily, selector, CallbackInterface, RecoilValueReadOnly } from 'recoil';
import deepEqual from 'fast-deep-equal';

import { Squad, TenKeyPosition } from '../../domain/squad/Squad';
import { UnitBasicInfo, UnitType } from '../../domain/UnitBasicInfo';

import { getFromSnapshot, getValue, ValueOrUpdater } from '../../util/recoil';
import { typedEntries } from '../../util/object';

const TenKeyPositions: ReadonlyArray<TenKeyPosition> = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const _squad = atom<Squad>({ key: 'SquadState_squad', default: new Squad() });
const _units = atom<Squad['units']>({ key: 'SquadState_units', default: [] });
const _assigned = atomFamily<UnitBasicInfo | undefined, TenKeyPosition>({ key: 'SquadState_assigned', default: undefined });
const _unitTypeCount = atomFamily<number, UnitType>({ key: 'SquadState_unitTypeCount', default: 0 });

function _update(valueOrUpdater: ValueOrUpdater<Squad>): (cbi: CallbackInterface) => void {
  return (cbi) => {
    const set = cbi.set;
    const get = getFromSnapshot(cbi.snapshot);
    const prevValue = get(_squad);
    const nextValue = getValue(valueOrUpdater, () => prevValue);

    const prevUnits = get(_units);
    const nextUnits = nextValue.units;
    if (!deepEqual(prevUnits, nextUnits)) {
      set(_units, nextUnits);
    }

    TenKeyPositions.forEach(position => {
      set(_assigned(position), nextValue.unit(position));
    });

    typedEntries(nextValue.unitTypeCount).forEach(([type, count]) => {
      set(_unitTypeCount(type), count);
    });

    set(_squad, nextValue);
  };
}

export const squadUnitsState = selector<Squad['units']>({
  key: 'squadUnitsState',
  get: ({ get }) => get(_squad).units
});

export const assignedUnitState = (position: TenKeyPosition): RecoilValueReadOnly<UnitBasicInfo | undefined> =>
  _assigned(position);

export const squadUnitTypeCountState = (type: UnitType): RecoilValueReadOnly<number> =>
  _unitTypeCount(type);

export const assignUnit = (position: TenKeyPosition) => (cbi: CallbackInterface) => (unit: UnitBasicInfo): void => {
  _update(s => s.assignUnit(unit, position))(cbi);
};

export const canAssignUnit = (position: TenKeyPosition) => ({ snapshot }: CallbackInterface) => (unit: UnitBasicInfo): boolean => {
  return snapshot.getLoadable(_squad).getValue().canAssignUnit(unit, position);
};

export const removeUnit = (cbi: CallbackInterface) => (unit: UnitBasicInfo): void => {
  _update(s => s.removeUnit(unit))(cbi);
};

export const getSquadUnitCount = ({ snapshot }: CallbackInterface) => (): Squad['unitCount'] => {
  return snapshot.getLoadable(_squad).getValue().unitCount;
};

export const squadResolver: RecoilValueReadOnly<Squad> = _squad;

export const restoreSquad = (cbi: CallbackInterface) => (squad: Squad): void => {
  _update(squad)(cbi);
};
