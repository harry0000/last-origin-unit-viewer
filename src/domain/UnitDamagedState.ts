import { UnitNumber } from './UnitBasicInfo';
import { IntegerValue, multiplyValue } from './ValueUnit';

class UnitDamagedState {

  readonly unit: UnitNumber;
  readonly isDamaged: boolean;

  constructor(
    unit: UnitNumber,
    isDamaged?: boolean
  ) {
    this.unit = unit;
    this.isDamaged = isDamaged ?? false;
  }

  get currentHpRate(): 25 | 100 {
    return this.isDamaged ? 25 : 100;
  }

  currentHpValue(maxHpValue: IntegerValue): IntegerValue {
    return multiplyValue(maxHpValue, { milliPercentage: this.currentHpRate * 1_000 });
  }

  toggleDamagedState(): UnitDamagedState {
    return new UnitDamagedState(this.unit, !this.isDamaged);
  }

  changeToDamagedState(): UnitDamagedState {
    return this.isDamaged ?
      this :
      this.toggleDamagedState();
  }
}

export default UnitDamagedState;
