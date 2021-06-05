import { UnitBasicInfo } from '../UnitBasicInfo';
import UnitLv, { UnitLvMode, UnitLvValue } from './UnitLv';
import UnitParameterEnhancementLv from './UnitParameterEnhancementLv';
import { EnhancementStatusEffect } from './StatusEffect';

type StateParams = {
  lv?: UnitLv,
  parameters?: UnitParameterEnhancementLv
}

class UnitEnhancementStatus {

  readonly unit: UnitBasicInfo;
  readonly #lv: UnitLv;
  readonly #enhancements: UnitParameterEnhancementLv;

  readonly remainPoints: number;

  constructor(
    unit: UnitBasicInfo,
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

  private get hasRemainPoints(): boolean {
    return this.remainPoints > 0;
  }

  private updateState({ lv, parameters }: StateParams): UnitEnhancementStatus {
    if (
      lv && lv === this.#lv ||
      parameters && parameters === this.#enhancements
    ) {
      return this;
    }

    return new UnitEnhancementStatus(
      this.unit,
      lv ?? this.#lv,
      parameters ?? this.#enhancements
    );
  }

  get lv(): UnitLvValue {
    return this.#lv.value;
  }

  setUnitLv(lvValue: UnitLvValue): UnitEnhancementStatus {
    return this.updateState({ lv: this.#lv.setLv(lvValue) });
  }

  get lvMode(): UnitLvMode {
    return this.#lv.mode;
  }

  toggleLvMode(): UnitEnhancementStatus {
    return this.updateState({ lv: this.#lv.toggleMode() });
  }

  get usedPoints(): number {
    return this.#enhancements.points;
  }

  resetParameterPoints(): UnitEnhancementStatus {
    return this.updateState({ parameters: this.#enhancements.resetPoints() });
  }

  get statusEffects(): EnhancementStatusEffect {
    return this.#enhancements.statusEffects;
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

  upHpLv(): UnitEnhancementStatus {
    if (this.enableUpHpLv) {
      return this.updateState({ parameters: this.#enhancements.upHpLv() });
    }
    return this;
  }

  downHpLv(): UnitEnhancementStatus {
    if (this.enableDownHpLv) {
      return this.updateState({ parameters: this.#enhancements.downHpLv() });
    }
    return this;
  }

  upAtkLv(): UnitEnhancementStatus {
    if (this.enableUpAtkLv) {
      return this.updateState({ parameters: this.#enhancements.upAtkLv() });
    }
    return this;
  }

  downAtkLv(): UnitEnhancementStatus {
    if (this.enableDownAtkLv) {
      return this.updateState({ parameters: this.#enhancements.downAtkLv() });
    }
    return this;
  }

  upDefLv(): UnitEnhancementStatus {
    if (this.enableUpDefLv) {
      return this.updateState({ parameters: this.#enhancements.upDefLv() });
    }
    return this;
  }

  downDefLv(): UnitEnhancementStatus {
    if (this.enableDownDefLv) {
      return this.updateState({ parameters: this.#enhancements.downDefLv() });
    }
    return this;
  }

  upAccLv(): UnitEnhancementStatus {
    if (this.enableUpAccLv) {
      return this.updateState({ parameters: this.#enhancements.upAccLv() });
    }
    return this;
  }

  downAccLv(): UnitEnhancementStatus {
    if (this.enableDownAccLv) {
      return this.updateState({ parameters: this.#enhancements.downAccLv() });
    }
    return this;
  }

  upEvaLv(): UnitEnhancementStatus {
    if (this.enableUpEvaLv) {
      return this.updateState({ parameters: this.#enhancements.upEvaLv() });
    }
    return this;
  }

  downEvaLv(): UnitEnhancementStatus {
    if (this.enableDownEvaLv) {
      return this.updateState({ parameters: this.#enhancements.downEvaLv() });
    }
    return this;
  }

  upCriLv(): UnitEnhancementStatus {
    if (this.enableUpCriLv) {
      return this.updateState({ parameters: this.#enhancements.upCriLv() });
    }
    return this;
  }

  downCriLv(): UnitEnhancementStatus {
    if (this.enableDownCriLv) {
      return this.updateState({ parameters: this.#enhancements.downCriLv() });
    }
    return this;
  }
}

export default UnitEnhancementStatus;
