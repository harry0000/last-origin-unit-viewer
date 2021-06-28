import { UnitNumber } from '../UnitBasicInfo';
import UnitLv, { UnitLvMode, UnitLvValue } from './UnitLv';
import UnitParameterEnhancementLv from './UnitParameterEnhancementLv';
import {
  AccEnhancementStatusEffect,
  AtkEnhancementStatusEffect,
  CriEnhancementStatusEffect,
  DefEnhancementStatusEffect,
  EvaEnhancementStatusEffect,
  HpEnhancementStatusEffect
} from './StatusEffect';

type StateParams = {
  lv?: UnitLv,
  parameters?: UnitParameterEnhancementLv
}

class UnitLvStatus {

  readonly unit: UnitNumber;
  readonly #lv: UnitLv;
  readonly #enhancements: UnitParameterEnhancementLv;

  readonly remainPoints: number;

  constructor(
    unit: UnitNumber,
    lv?: UnitLv,
    enhancements?: UnitParameterEnhancementLv
  ) {
    this.unit = unit;

    const l = lv ?? new UnitLv();
    const e = enhancements ?? new UnitParameterEnhancementLv();

    this.#lv = l.adjustLv(e);

    if (this.#lv.points < e.points) {
      this.#enhancements = e.resetPoints();
    } else {
      this.#enhancements = e;
    }

    this.remainPoints = this.#lv.points - this.#enhancements.points;
  }

  get #hasRemainPoints(): boolean {
    return this.remainPoints > 0;
  }

  #updateState({ lv, parameters }: StateParams): UnitLvStatus {
    if (
      lv && lv === this.#lv ||
      parameters && parameters === this.#enhancements
    ) {
      return this;
    }

    return new UnitLvStatus(
      this.unit,
      lv ?? this.#lv,
      parameters ?? this.#enhancements
    );
  }

  get lv(): UnitLvValue {
    return this.#lv.value;
  }

  setUnitLv(lvValue: UnitLvValue): UnitLvStatus {
    return this.#updateState({ lv: this.#lv.setLv(lvValue) });
  }

  get lvMode(): UnitLvMode {
    return this.#lv.mode;
  }

  toggleLvMode(): UnitLvStatus {
    return this.#updateState({ lv: this.#lv.toggleMode() });
  }

  get usedPoints(): number {
    return this.#enhancements.points;
  }

  resetParameterPoints(): UnitLvStatus {
    return this.#updateState({ parameters: this.#enhancements.resetPoints() });
  }

  get hpStatusEffect(): HpEnhancementStatusEffect { return this.#enhancements.hpStatusEffect; }
  get atkStatusEffect(): AtkEnhancementStatusEffect { return this.#enhancements.atkStatusEffect; }
  get defStatusEffect(): DefEnhancementStatusEffect { return this.#enhancements.defStatusEffect; }
  get accStatusEffect(): AccEnhancementStatusEffect { return this.#enhancements.accStatusEffect; }
  get evaStatusEffect(): EvaEnhancementStatusEffect { return this.#enhancements.evaStatusEffect; }
  get criStatusEffect(): CriEnhancementStatusEffect { return this.#enhancements.criStatusEffect; }

  get hpLv(): number { return this.#enhancements.hpLv; }
  get atkLv(): number { return this.#enhancements.atkLv; }
  get defLv(): number { return this.#enhancements.defLv; }
  get accLv(): number { return this.#enhancements.accLv; }
  get evaLv(): number { return this.#enhancements.evaLv; }
  get criLv(): number { return this.#enhancements.criLv; }

  get enableUpHpLv(): boolean { return this.#hasRemainPoints && this.#enhancements.enableUpHpLv; }
  get enableDownHpLv(): boolean { return this.#enhancements.enableDownHpLv; }

  get enableUpAtkLv(): boolean { return this.#hasRemainPoints && this.#enhancements.enableUpAtkLv; }
  get enableDownAtkLv(): boolean { return this.#enhancements.enableDownAtkLv; }

  get enableUpDefLv(): boolean { return this.#hasRemainPoints && this.#enhancements.enableUpDefLv; }
  get enableDownDefLv(): boolean { return this.#enhancements.enableDownDefLv; }

  get enableUpAccLv(): boolean { return this.#hasRemainPoints && this.#enhancements.enableUpAccLv; }
  get enableDownAccLv(): boolean { return this.#enhancements.enableDownAccLv; }

  get enableUpEvaLv(): boolean { return this.#hasRemainPoints && this.#enhancements.enableUpEvaLv; }
  get enableDownEvaLv(): boolean { return this.#enhancements.enableDownEvaLv; }

  get enableUpCriLv(): boolean { return this.#hasRemainPoints && this.#enhancements.enableUpCriLv; }
  get enableDownCriLv(): boolean { return this.#enhancements.enableDownCriLv; }

  upHpLv(): UnitLvStatus {
    if (this.enableUpHpLv) {
      return this.#updateState({ parameters: this.#enhancements.upHpLv() });
    }
    return this;
  }

  downHpLv(): UnitLvStatus {
    if (this.enableDownHpLv) {
      return this.#updateState({ parameters: this.#enhancements.downHpLv() });
    }
    return this;
  }

  upAtkLv(): UnitLvStatus {
    if (this.enableUpAtkLv) {
      return this.#updateState({ parameters: this.#enhancements.upAtkLv() });
    }
    return this;
  }

  downAtkLv(): UnitLvStatus {
    if (this.enableDownAtkLv) {
      return this.#updateState({ parameters: this.#enhancements.downAtkLv() });
    }
    return this;
  }

  upDefLv(): UnitLvStatus {
    if (this.enableUpDefLv) {
      return this.#updateState({ parameters: this.#enhancements.upDefLv() });
    }
    return this;
  }

  downDefLv(): UnitLvStatus {
    if (this.enableDownDefLv) {
      return this.#updateState({ parameters: this.#enhancements.downDefLv() });
    }
    return this;
  }

  upAccLv(): UnitLvStatus {
    if (this.enableUpAccLv) {
      return this.#updateState({ parameters: this.#enhancements.upAccLv() });
    }
    return this;
  }

  downAccLv(): UnitLvStatus {
    if (this.enableDownAccLv) {
      return this.#updateState({ parameters: this.#enhancements.downAccLv() });
    }
    return this;
  }

  upEvaLv(): UnitLvStatus {
    if (this.enableUpEvaLv) {
      return this.#updateState({ parameters: this.#enhancements.upEvaLv() });
    }
    return this;
  }

  downEvaLv(): UnitLvStatus {
    if (this.enableDownEvaLv) {
      return this.#updateState({ parameters: this.#enhancements.downEvaLv() });
    }
    return this;
  }

  upCriLv(): UnitLvStatus {
    if (this.enableUpCriLv) {
      return this.#updateState({ parameters: this.#enhancements.upCriLv() });
    }
    return this;
  }

  downCriLv(): UnitLvStatus {
    if (this.enableDownCriLv) {
      return this.#updateState({ parameters: this.#enhancements.downCriLv() });
    }
    return this;
  }
}

export default UnitLvStatus;
