import { UnitBasicInfo, UnitNumber } from '../UnitBasicInfo';
import UnitLv, { UnitLvMode, UnitLvValue } from './UnitLv';
import UnitParameterEnhancementLv from './UnitParameterEnhancementLv';
import {
  calcMicroValues,
  calcMilliPercentageValues,
  calcMilliValues
} from '../SkillEffectValue';
import UnitBaseParameter from './UnitBaseParameter';
import UnitStatusEffect from './UnitStatusEffect';

type StateParams = {
  lv?: UnitLv,
  parameters?: UnitParameterEnhancementLv
}

class UnitStatus {

  readonly unit: UnitBasicInfo;
  readonly #lv: UnitLv;
  readonly #enhancements: UnitParameterEnhancementLv;
  readonly baseParameters: UnitBaseParameter;
  readonly effects: UnitStatusEffect;

  readonly remainPoints: number;

  constructor(
    unit: UnitBasicInfo,
    lv?: UnitLv,
    enhancements?: UnitParameterEnhancementLv
  ) {
    const l = lv ?? new UnitLv();
    const e = enhancements ?? new UnitParameterEnhancementLv(unit);

    this.unit = unit;
    this.#lv = l.adjustLv(e);

    if (this.#lv.points < e.points) {
      this.#enhancements = e.resetPoints();
    } else {
      this.#enhancements = e;
    }

    this.remainPoints = this.#lv.points - this.#enhancements.points;
    this.baseParameters = new UnitBaseParameter(this.unit.no, this.#lv.value);
    this.effects = new UnitStatusEffect(this.#enhancements);
  }

  private get hasRemainPoints(): boolean {
    return this.remainPoints > 0;
  }

  private updateState({ lv, parameters }: StateParams): UnitStatus {
    return new UnitStatus(
      this.unit,
      lv ?? this.#lv,
      parameters ?? this.#enhancements
    );
  }

  get unitNumber(): UnitNumber {
    return this.unit.no;
  }

  get lv(): UnitLvValue {
    return this.#lv.value;
  }

  get usedPoints(): number {
    return this.#enhancements.points;
  }

  setUnitLv(lvValue: UnitLvValue): UnitStatus {
    const lv = this.#lv.setLv(lvValue);
    if (lv === this.#lv) {
      return this;
    }
    return this.updateState({ lv });
  }

  get lvMode(): UnitLvMode {
    return this.#lv.mode;
  }

  toggleLvMode(): UnitStatus {
    return this.updateState({ lv: this.#lv.toggleMode() });
  }

  resetParameterPoints(): UnitStatus {
    return this.updateState({ parameters: this.#enhancements.resetPoints() });
  }

  get hp(): number {
    return this.baseParameters.hp.value + this.effects.hpValue.value;
  }

  get atk(): number {
    return calcMilliValues(this.baseParameters.atk, this.effects.atkValue);
  }

  get def(): number {
    return calcMilliValues(this.baseParameters.def, this.effects.defValue);
  }

  get acc(): number {
    return calcMilliPercentageValues(this.baseParameters.acc, this.effects.accValue);
  }

  get eva(): number {
    return calcMilliPercentageValues(this.baseParameters.eva, this.effects.evaValue);
  }

  get cri(): number {
    return calcMilliPercentageValues(this.baseParameters.cri, this.effects.criValue);
  }

  get spdValue(): number {
    return calcMicroValues(this.baseParameters.spd);
  }

  get fireResistValue(): number {
    return calcMilliPercentageValues(this.baseParameters.fireResist);
  }

  get iceResistValue(): number {
    return calcMilliPercentageValues(this.baseParameters.iceResist);
  }

  get electricResistValue(): number {
    return calcMilliPercentageValues(this.baseParameters.electricResist);
  }

  get hpLv(): number { return this.#enhancements.hpLv; }
  get atkLv(): number { return this.#enhancements.atkLv; }
  get defLv(): number { return this.#enhancements.defLv; }
  get accLv(): number { return this.#enhancements.accLv; }
  get evaLv(): number { return this.#enhancements.evaLv; }
  get criLv(): number { return this.#enhancements.criLv; }

  get enableUpHpLv(): boolean { return this.hasRemainPoints && this.#enhancements.enableUpHpLv; }
  get enableDownHpLv(): boolean { return this.#enhancements.enableDownHpLv; }

  get enableUpAtkLv(): boolean { return this.hasRemainPoints && this.#enhancements.enableUpAtkLv; }
  get enableDownAtkLv(): boolean { return this.#enhancements.enableDownAtkLv; }

  get enableUpDefLv(): boolean { return this.hasRemainPoints && this.#enhancements.enableUpDefLv; }
  get enableDownDefLv(): boolean { return this.#enhancements.enableDownDefLv; }

  get enableUpAccLv(): boolean { return this.hasRemainPoints && this.#enhancements.enableUpAccLv; }
  get enableDownAccLv(): boolean { return this.#enhancements.enableDownAccLv; }

  get enableUpEvaLv(): boolean { return this.hasRemainPoints && this.#enhancements.enableUpEvaLv; }
  get enableDownEvaLv(): boolean { return this.#enhancements.enableDownEvaLv; }

  get enableUpCriLv(): boolean { return this.hasRemainPoints && this.#enhancements.enableUpCriLv; }
  get enableDownCriLv(): boolean { return this.#enhancements.enableDownCriLv; }

  upHpLv(): UnitStatus {
    if (this.enableUpHpLv) {
      return this.updateState({ parameters: this.#enhancements.upHpLv() });
    }
    return this;
  }

  downHpLv(): UnitStatus {
    if (this.enableDownHpLv) {
      return this.updateState({ parameters: this.#enhancements.downHpLv() });
    }
    return this;
  }

  upAtkLv(): UnitStatus {
    if (this.enableUpAtkLv) {
      return this.updateState({ parameters: this.#enhancements.upAtkLv() });
    }
    return this;
  }

  downAtkLv(): UnitStatus {
    if (this.enableDownAtkLv) {
      return this.updateState({ parameters: this.#enhancements.downAtkLv() });
    }
    return this;
  }

  upDefLv(): UnitStatus {
    if (this.enableUpDefLv) {
      return this.updateState({ parameters: this.#enhancements.upDefLv() });
    }
    return this;
  }

  downDefLv(): UnitStatus {
    if (this.enableDownDefLv) {
      return this.updateState({ parameters: this.#enhancements.downDefLv() });
    }
    return this;
  }

  upAccLv(): UnitStatus {
    if (this.enableUpAccLv) {
      return this.updateState({ parameters: this.#enhancements.upAccLv() });
    }
    return this;
  }

  downAccLv(): UnitStatus {
    if (this.enableDownAccLv) {
      return this.updateState({ parameters: this.#enhancements.downAccLv() });
    }
    return this;
  }

  upEvaLv(): UnitStatus {
    if (this.enableUpEvaLv) {
      return this.updateState({ parameters: this.#enhancements.upEvaLv() });
    }
    return this;
  }

  downEvaLv(): UnitStatus {
    if (this.enableDownEvaLv) {
      return this.updateState({ parameters: this.#enhancements.downEvaLv() });
    }
    return this;
  }

  upCriLv(): UnitStatus {
    if (this.enableUpCriLv) {
      return this.updateState({ parameters: this.#enhancements.upCriLv() });
    }
    return this;
  }

  downCriLv(): UnitStatus {
    if (this.enableDownCriLv) {
      return this.updateState({ parameters: this.#enhancements.downCriLv() });
    }
    return this;
  }
}

export default UnitStatus;
