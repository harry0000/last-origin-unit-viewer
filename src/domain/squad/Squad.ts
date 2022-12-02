import { UnitBasicInfo, UnitNumber, UnitType } from '../UnitBasicInfo';

import { notFalsy, Sequence } from '../../util/type';

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

const positions = [7, 8, 9, 4, 5, 6, 1, 2, 3] as const;
const positionToIndex = Object.fromEntries(positions.map((p, i) => [p, i])) as { [key in TenKeyPosition]: IndexInSquad };

export class Squad {

  readonly #units: SquadUnits;

  constructor(units?: SquadUnits) {
    this.#units = units ?? EmptySquadUnits;
  }

  get units(): ReadonlyArray<{ position: TenKeyPosition, unit: UnitBasicInfo }> {
    return this.#units.flatMap((unit, i) => unit ? { unit, position: positions[i] } : []);
  }

  get unitCount(): UnitCountsInSquad {
    return this.#units.filter(notFalsy).length as UnitCountsInSquad;
  }

  get unitTypeCount(): Readonly<Record<UnitType, number>> {
    return this.#units.reduce((acc, unit) => {
      if (!unit) {
        return acc;
      }

      switch (unit.type) {
      case UnitType.Light:  ++acc.light;  break;
      case UnitType.Flying: ++acc.flying; break;
      case UnitType.Heavy:  ++acc.heavy;  break;
      }
      return acc;
    },
    { light: 0, flying: 0, heavy: 0 });
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
    return this.#units[positionToIndex[position]];
  }

  canAssignUnit(unit: UnitBasicInfo, position: TenKeyPosition): boolean {
    return this.#findUnit(unit) !== -1 || this.#canAssignUnit(unit, positionToIndex[position]);
  }

  #canAssignUnit(unit: UnitBasicInfo | undefined, index: IndexInSquad): boolean {
    return !unit || !this.#isOvercapacity || !!this.#units[index];
  }

  assignUnit(unit: UnitBasicInfo, position: TenKeyPosition): Squad {
    const targetIndex = positionToIndex[position];
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

  existsUnit(unit: UnitNumber): boolean {
    return this.#units.some(u => u?.no === unit);
  }
}
