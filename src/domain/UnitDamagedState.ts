import { UnitNumber } from './UnitBasicInfo';

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
