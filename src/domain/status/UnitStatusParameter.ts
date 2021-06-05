import {
  calcMicroValues,
  calcMilliPercentageValues,
  calcMilliValues
} from '../ValueUnit';

import UnitBaseParameter from './UnitBaseParameter';
import UnitStatusEffectSummary from './UnitStatusEffectSummary';
import UnitEnhancementStatus from './UnitEnhancementStatus';

export class UnitStatusParameter {

  readonly #baseParameter: UnitBaseParameter;
  readonly #effects: UnitStatusEffectSummary;

  readonly #hp: number;
  readonly #atk: number;
  readonly #def: number;
  readonly #acc: number;
  readonly #eva: number;
  readonly #cri: number;
  readonly #spd: number;

  constructor(
    unitEnhancement: UnitEnhancementStatus,
    baseParameter: UnitBaseParameter,
    effects: UnitStatusEffectSummary
  ) {
    const unitLv = unitEnhancement.lv;

    this.#baseParameter = baseParameter;
    this.#effects = effects;

    this.#hp = this.#baseParameter.hp(unitLv).value + this.#effects.hp.value;
    this.#atk = calcMilliValues(this.#baseParameter.atk(unitLv), this.#effects.atk);
    this.#def = calcMilliValues(this.#baseParameter.def(unitLv), this.#effects.def);
    this.#acc = calcMilliPercentageValues(this.#baseParameter.acc, this.#effects.acc);
    this.#eva = calcMilliPercentageValues(this.#baseParameter.eva, this.#effects.eva);
    this.#cri = calcMilliPercentageValues(this.#baseParameter.cri, this.#effects.cri);
    this.#spd = calcMicroValues(this.#baseParameter.spd, this.#effects.spd);
  }

  get hp(): number {
    return this.#hp;
  }

  get atk(): number {
    return this.#atk;
  }

  get def(): number {
    return this.#def;
  }

  get acc(): number {
    return this.#acc;
  }

  get eva(): number {
    return this.#eva;
  }

  get cri(): number {
    return this.#cri;
  }

  get spd(): number {
    return this.#spd;
  }

  get fireResist(): number {
    return calcMilliPercentageValues(this.#baseParameter.fireResist, this.#effects.fireResist);
  }

  get iceResist(): number {
    return calcMilliPercentageValues(this.#baseParameter.iceResist, this.#effects.iceResist);
  }

  get electricResist(): number {
    return calcMilliPercentageValues(this.#baseParameter.electricResist, this.#effects.electricResist);
  }
}
