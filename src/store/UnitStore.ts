import { UnitBasicInfo, UnitNumber } from '../domain/UnitBasicInfo';
import { buildUnit, Unit } from '../domain/Unit';

class UnitStore {

  static initialState(): UnitStore {
    return new UnitStore(new Map());
  }

  readonly #units: Map<UnitNumber, Unit>;

  private constructor(units: Map<UnitNumber, Unit>) {
    this.#units = units;
  }

  private addUnit(unitBasicInfo: UnitBasicInfo): Unit {
    const unit = buildUnit(unitBasicInfo);
    this.#units.set(unitBasicInfo.no, unit);
    return unit;
  }

  getUnit(unitBasicInfo: UnitBasicInfo): Unit {
    return this.#units.get(unitBasicInfo.no) ?? this.addUnit(unitBasicInfo);
  }

  setUnit(unit: Unit): UnitStore {
    if (this.#units.has(unit.unitNumber)) {
      return new UnitStore(this.#units.set(unit.unitNumber, unit));
    } else {
      return this;
    }
  }
}

export default UnitStore;
