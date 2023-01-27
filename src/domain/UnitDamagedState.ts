import { UnitNumber } from './UnitBasicInfo';
import { IntegerValue, multiplyValue } from './ValueUnit';

export const DamagedState = {
  NoDamaged: 'no_damaged',
  ModeratelyDamaged: 'moderately_damaged',
  HeavilyDamaged: 'heavily_damaged'
} as const;
export type DamagedState = typeof DamagedState[keyof typeof DamagedState]

class UnitDamagedState {

  readonly unit: UnitNumber;
  readonly damaged: DamagedState;

  constructor(
    unit: UnitNumber,
    damaged?: DamagedState
  ) {
    this.unit = unit;
    this.damaged = damaged ?? DamagedState.NoDamaged;
  }

  get currentHpRate(): 1 | 25 | 100 {
    switch (this.damaged) {
    case DamagedState.NoDamaged:
      return 100;
    case DamagedState.ModeratelyDamaged:
      return 25;
    case DamagedState.HeavilyDamaged:
      return 1;
    }
  }

  currentHpValue(maxHpValue: IntegerValue): IntegerValue {
    switch (this.damaged) {
    case DamagedState.NoDamaged:
    case DamagedState.ModeratelyDamaged:
      return multiplyValue(maxHpValue, { milliPercentage: this.currentHpRate * 1_000 });
    case DamagedState.HeavilyDamaged:
      return { value: 1 };
    }
  }

  setDamagedState(damaged: DamagedState): UnitDamagedState {
    return this.damaged !== damaged ?
      new UnitDamagedState(this.unit, damaged) :
      this;
  }
}

export default UnitDamagedState;
