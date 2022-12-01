import { Squad, TenKeyPosition } from './Squad';
import { UnitNumber } from '../UnitBasicInfo';
import { MicroValue } from '../ValueUnit';
import { partition } from '../../util/array';

type SquadUnitApValue = {
  unit: UnitNumber,
  position: TenKeyPosition,
  ap: MicroValue
}

const PositionPriority: { [K in TenKeyPosition]: number } = {
  9: 9,
  6: 8,
  3: 7,
  8: 6,
  5: 5,
  2: 4,
  7: 3,
  4: 2,
  1: 1
};

function descendingOrder(a: SquadUnitApValue, b: SquadUnitApValue): number {
  return b.ap.microValue - a.ap.microValue || PositionPriority[b.position] - PositionPriority[a.position];
}

const ReadyToActionApMicroValue = 10_000_000 as const;

export type ReadyToAction = boolean

export function readyToAction(ap: MicroValue): ReadyToAction {
  return ap.microValue >= ReadyToActionApMicroValue;
}

export class SquadUnitActionOrder {

  readonly readyToActionUnits: ReadonlyArray<SquadUnitApValue>;
  readonly notReadyToActionUnits: ReadonlyArray<SquadUnitApValue>;

  constructor(
    squad: Squad,
    apRepository: (unit: UnitNumber) => MicroValue | undefined
  ) {
    const units = squad.units.map(({ unit: { no }, position }) => ({
      unit: no, position, ap: apRepository(no) ?? { microValue: 0 }
    })).sort(descendingOrder);

    const [ready, notReady] = partition(units, ({ ap }) => readyToAction(ap));
    this.readyToActionUnits = ready;
    this.notReadyToActionUnits = notReady;
  }

}
