import { Sequence } from '../../util/type';
import UnitParameterEnhancementLv from './UnitParameterEnhancementLv';

export const UnitMaxLvValue = 120 as const;
export type UnitLvValue = Sequence<typeof UnitMaxLvValue>
export const UnitLvMode = {
  Auto: 'auto',
  Manual: 'manual'
} as const;
export type UnitLvMode = typeof UnitLvMode[keyof typeof UnitLvMode]

class UnitLv {

  static initialState = {
    value: 100,
    mode: UnitLvMode.Manual,
    points: 300
  } as const;

  readonly value: UnitLvValue;
  readonly mode: UnitLvMode;

  constructor(value?: UnitLvValue, mode?: UnitLvMode) {
    this.value = value ?? UnitLv.initialState.value;
    this.mode = mode ?? UnitLv.initialState.mode;
  }

  setLv(value: UnitLvValue): UnitLv {
    if (this.mode === UnitLvMode.Auto || value === this.value) {
      return this;
    } else {
      return new UnitLv(value, this.mode);
    }
  }

  adjustLv(enhancements: UnitParameterEnhancementLv): UnitLv {
    if (this.mode === UnitLvMode.Auto) {
      const newLv = Math.max(1, Math.ceil(enhancements.points / 3)) as UnitLvValue;
      return new UnitLv(newLv, this.mode);
    }
    return this;
  }

  toggleMode(): UnitLv {
    return new UnitLv(
      this.value,
      this.mode === UnitLvMode.Auto ? UnitLvMode.Manual : UnitLvMode.Auto
    );
  }

  setManualLvMode(): UnitLv {
    return this.mode === UnitLvMode.Auto ? this.toggleMode() : this;
  }

  get points(): number {
    return (this.mode === UnitLvMode.Auto ? UnitMaxLvValue : this.value) * 3;
  }
}

export default UnitLv;
