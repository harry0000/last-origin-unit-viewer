import { Sequence } from '../../util/type';
import UnitParameterEnhancementLv from './UnitParameterEnhancementLv';

export type UnitLvValue = Sequence<100>
export type UnitLvMode = 'auto' | 'manual'

class UnitLv {

  readonly value: UnitLvValue;
  readonly mode: UnitLvMode;

  constructor(value?: UnitLvValue, mode?: UnitLvMode) {
    this.value = value ?? 1;
    this.mode = mode ?? 'auto';
  }

  setLv(value: UnitLvValue): UnitLv {
    if (this.mode === 'auto') {
      return this;
    } else {
      return new UnitLv(value, this.mode);
    }
  }

  adjustLv(enhancements: UnitParameterEnhancementLv): UnitLv {
    if (this.mode === 'auto') {
      const newLv = Math.max(1, Math.ceil(enhancements.points / 3)) as UnitLvValue;
      return new UnitLv(newLv, this.mode);
    }
    return this;
  }

  toggleMode(): UnitLv {
    return new UnitLv(
      this.value,
      this.mode === 'auto' ? 'manual' : 'auto'
    );
  }

  get points(): number {
    return (this.mode === 'auto' ? 100 : this.value) * 3;
  }
}

export default UnitLv;
