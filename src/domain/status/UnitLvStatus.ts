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

  setManualLvMode(): UnitLvStatus {
    return this.#updateState({ lv: this.#lv.setManualLvMode() });
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

  #canSetEnhanceLv(prev: number, next: number): boolean {
    const diff = prev - next;
    return  diff <= this.remainPoints;
  }

  setHpLv(hpLv: number): UnitLvStatus {
    return this.#canSetEnhanceLv(this.hpLv, hpLv) ?
      this.#updateState({ parameters: this.#enhancements.setHpLv(hpLv) }) :
      this;
  }

  upHpLv(): UnitLvStatus {
    return this.enableUpHpLv ?
      this.#updateState({ parameters: this.#enhancements.upHpLv() }) :
      this;
  }

  downHpLv(): UnitLvStatus {
    return this.enableDownHpLv ?
      this.#updateState({ parameters: this.#enhancements.downHpLv() }) :
      this;
  }

  setAtkLv(atkLv: number): UnitLvStatus {
    return this.#canSetEnhanceLv(this.atkLv, atkLv) ?
      this.#updateState({ parameters: this.#enhancements.setAtkLv(atkLv) }) :
      this;
  }

  upAtkLv(): UnitLvStatus {
    return this.enableUpAtkLv ?
      this.#updateState({ parameters: this.#enhancements.upAtkLv() }) :
      this;
  }

  downAtkLv(): UnitLvStatus {
    return this.enableDownAtkLv ?
      this.#updateState({ parameters: this.#enhancements.downAtkLv() }) :
      this;
  }

  setDefLv(defLv: number): UnitLvStatus {
    return this.#canSetEnhanceLv(this.defLv, defLv) ?
      this.#updateState({ parameters: this.#enhancements.setDefLv(defLv) }) :
      this;
  }

  upDefLv(): UnitLvStatus {
    return this.enableUpDefLv ?
      this.#updateState({ parameters: this.#enhancements.upDefLv() }) :
      this;
  }

  downDefLv(): UnitLvStatus {
    return this.enableDownDefLv ?
      this.#updateState({ parameters: this.#enhancements.downDefLv() }) :
      this;
  }

  setAccLv(accLv: number): UnitLvStatus {
    return this.#canSetEnhanceLv(this.accLv, accLv) ?
      this.#updateState({ parameters: this.#enhancements.setAccLv(accLv) }) :
      this;
  }

  upAccLv(): UnitLvStatus {
    return this.enableUpAccLv ?
      this.#updateState({ parameters: this.#enhancements.upAccLv() }) :
      this;
  }

  downAccLv(): UnitLvStatus {
    return this.enableDownAccLv ?
      this.#updateState({ parameters: this.#enhancements.downAccLv() }) :
      this;
  }

  setEvaLv(evaLv: number): UnitLvStatus {
    return this.#canSetEnhanceLv(this.evaLv, evaLv) ?
      this.#updateState({ parameters: this.#enhancements.setEvaLv(evaLv) }) :
      this;
  }

  upEvaLv(): UnitLvStatus {
    return this.enableUpEvaLv ?
      this.#updateState({ parameters: this.#enhancements.upEvaLv() }) :
      this;
  }

  downEvaLv(): UnitLvStatus {
    return this.enableDownEvaLv ?
      this.#updateState({ parameters: this.#enhancements.downEvaLv() }) :
      this;
  }

  setCriLv(criLv: number): UnitLvStatus {
    return this.#canSetEnhanceLv(this.criLv, criLv) ?
      this.#updateState({ parameters: this.#enhancements.setCriLv(criLv) }) :
      this;
  }

  upCriLv(): UnitLvStatus {
    return this.enableUpCriLv ?
      this.#updateState({ parameters: this.#enhancements.upCriLv() }) :
      this;
  }

  downCriLv(): UnitLvStatus {
    return this.enableDownCriLv ?
      this.#updateState({ parameters: this.#enhancements.downCriLv() }) :
      this;
  }
}

export default UnitLvStatus;
