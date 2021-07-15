import { Sequence } from '../../util/type';
import { UnitBasicInfo } from '../UnitBasicInfo';

type SquadGrid<T> = readonly [
  T, T, T,
  T, T, T,
  T, T, T
]
type SquadUnits = SquadGrid<UnitBasicInfo | undefined>

export type TenKeyPosition = Sequence<SquadUnits['length']>
type IndexInSquad = Exclude<Partial<SquadUnits>['length'], SquadUnits['length']>

const EmptySquadUnits: SquadUnits = [
  undefined, undefined, undefined,
  undefined, undefined, undefined,
  undefined, undefined, undefined
];

const MaxUnitsInSquad = 5;
type UnitCountsInSquad = 0 | Sequence<typeof MaxUnitsInSquad>

function positionToIndex(position: TenKeyPosition): IndexInSquad {
  switch (position) {
  case 7: return 0;
  case 8: return 1;
  case 9: return 2;
  case 4: return 3;
  case 5: return 4;
  case 6: return 5;
  case 1: return 6;
  case 2: return 7;
  case 3: return 8;
  }
}

export class Squad {

  readonly #units: SquadUnits;

  constructor(units?: SquadUnits) {
    this.#units = units ?? EmptySquadUnits;
  }

  get unitCount(): UnitCountsInSquad {
    return this.#units.filter(u => !!u).length as UnitCountsInSquad;
  }

  get #isOvercapacity(): boolean {
    return this.unitCount >= MaxUnitsInSquad;
  }

  #findUnit(unit: UnitBasicInfo): IndexInSquad | -1 {
    return this.#units.findIndex(u => u === unit) as IndexInSquad | -1;
  }

  #assignUnitToIndex(unit: UnitBasicInfo | undefined, index: IndexInSquad): Squad {
    if (unit === this.#units[index] || !this.#canAssignUnit(unit, index)) {
      return this;
    }

    return new Squad(this.#units.slice(0, index).concat(unit, this.#units.slice(index + 1)) as unknown as SquadUnits);
  }

  #swapUnit(
    unit1: UnitBasicInfo | undefined,
    unit1Index: IndexInSquad,
    unit2: UnitBasicInfo | undefined,
    unit2Index: IndexInSquad
  ): Squad {
    const newUnits = this.#units.slice();
    newUnits[unit1Index] = unit2;
    newUnits[unit2Index] = unit1;
    return new Squad(newUnits as unknown as SquadUnits);
  }

  unit(position: TenKeyPosition): UnitBasicInfo | undefined {
    return this.#units[positionToIndex(position)];
  }

  canAssignUnit(unit: UnitBasicInfo, position: TenKeyPosition): boolean {
    return this.#findUnit(unit) !== -1 || this.#canAssignUnit(unit, positionToIndex(position));
  }

  #canAssignUnit(unit: UnitBasicInfo | undefined, index: IndexInSquad): boolean {
    return !unit || !this.#isOvercapacity || !!this.#units[index];
  }

  assignUnit(unit: UnitBasicInfo, position: TenKeyPosition): Squad {
    const targetIndex = positionToIndex(position);
    const unitIndex = this.#findUnit(unit);
    const currentUnit = this.#units[targetIndex];

    if (currentUnit === unit) {
      return this;
    } else if (unitIndex === -1) {
      return this.#assignUnitToIndex(unit, targetIndex);
    } else {
      return this.#swapUnit(unit, unitIndex, currentUnit, targetIndex);
    }
  }

  removeUnit(unit: UnitBasicInfo): Squad {
    const index = this.#findUnit(unit);
    return index !== -1 ?
      this.#assignUnitToIndex(undefined, index) :
      this;
  }
}
