import {
  AccEnhancementStatusEffect,
  AtkEnhancementStatusEffect,
  CriEnhancementStatusEffect,
  DefEnhancementStatusEffect,
  EvaEnhancementStatusEffect,
  HpEnhancementStatusEffect
} from './StatusEffect';

type UpdateParams = {
  hpLv: number,
  hpStatusEffect: HpEnhancementStatusEffect
} | {
  atkLv: number,
  atkStatusEffect: AtkEnhancementStatusEffect
} | {
  defLv: number,
  defStatusEffect: DefEnhancementStatusEffect
} | {
  accLv: number,
  accStatusEffect: AccEnhancementStatusEffect
} | {
  evaLv: number,
  evaStatusEffect: EvaEnhancementStatusEffect
} | {
  criLv: number,
  criStatusEffect: CriEnhancementStatusEffect
}

const MinEnhancementLv = 0;
const MaxEnhancementLv = 300;

function validLv(lv: number): boolean {
  return MinEnhancementLv <= lv && lv <= MaxEnhancementLv;
}

function canUpLv(lv: number): boolean {
  return lv < MaxEnhancementLv;
}

function canDownLv(lv: number): boolean {
  return lv > MinEnhancementLv;
}

function hpEnhancementEffect(lv: number): HpEnhancementStatusEffect {
  return lv ? { hp_up: { value: lv * 8 } } : {};
}

function atkEnhancementEffect(lv: number): AtkEnhancementStatusEffect {
  return lv ? { atk_up: { milliValue: lv * 1500 } } : {};
}

function defEnhancementEffect(lv: number): DefEnhancementStatusEffect {
  return lv ? { def_up: { milliValue: lv * 1250 } } : {};
}

function accEnhancementEffect(lv: number): AccEnhancementStatusEffect {
  return lv ? { acc_up: { milliPercentage: lv * 1500 } } : {};
}

function evaEnhancementEffect(lv: number): EvaEnhancementStatusEffect {
  return lv ? { eva_up: { milliPercentage: lv * 400 } } : {};
}

function criEnhancementEffect(lv: number): CriEnhancementStatusEffect {
  return lv ? { cri_up: { milliPercentage: lv * 400 } } : {};
}

class UnitParameterEnhancementLv {

  readonly hpLv: number;
  readonly atkLv: number;
  readonly defLv: number;
  readonly accLv: number;
  readonly evaLv: number;
  readonly criLv: number;

  readonly hpStatusEffect: HpEnhancementStatusEffect;
  readonly atkStatusEffect: AtkEnhancementStatusEffect;
  readonly defStatusEffect: DefEnhancementStatusEffect;
  readonly accStatusEffect: AccEnhancementStatusEffect;
  readonly evaStatusEffect: EvaEnhancementStatusEffect;
  readonly criStatusEffect: CriEnhancementStatusEffect;

  constructor(
    hpLv?: number,
    atkLv?: number,
    defLv?: number,
    accLv?: number,
    evaLv?: number,
    criLv?: number,
    hpStatusEffect?: HpEnhancementStatusEffect,
    atkStatusEffect?: AtkEnhancementStatusEffect,
    defStatusEffect?: DefEnhancementStatusEffect,
    accStatusEffect?: AccEnhancementStatusEffect,
    evaStatusEffect?: EvaEnhancementStatusEffect,
    criStatusEffect?: CriEnhancementStatusEffect
  ) {
    this.hpLv = hpLv ?? 0;
    this.atkLv = atkLv ?? 0;
    this.defLv = defLv ?? 0;
    this.accLv = accLv ?? 0;
    this.evaLv = evaLv ?? 0;
    this.criLv = criLv ?? 0;

    this.hpStatusEffect = hpStatusEffect ?? {};
    this.atkStatusEffect = atkStatusEffect ?? {};
    this.defStatusEffect = defStatusEffect ?? {};
    this.accStatusEffect = accStatusEffect ?? {};
    this.evaStatusEffect = evaStatusEffect ?? {};
    this.criStatusEffect = criStatusEffect ?? {};
  }

  #updateParameterLv(params: UpdateParams): UnitParameterEnhancementLv {
    return new UnitParameterEnhancementLv(
      'hpLv' in params ? params.hpLv : this.hpLv,
      'atkLv' in params ? params.atkLv : this.atkLv,
      'defLv' in params ? params.defLv : this.defLv,
      'accLv' in params ? params.accLv : this.accLv,
      'evaLv' in params ? params.evaLv : this.evaLv,
      'criLv' in params ? params.criLv : this.criLv,
      'hpStatusEffect' in params ? params.hpStatusEffect : this.hpStatusEffect,
      'atkStatusEffect' in params ? params.atkStatusEffect : this.atkStatusEffect,
      'defStatusEffect' in params ? params.defStatusEffect : this.defStatusEffect,
      'accStatusEffect' in params ? params.accStatusEffect : this.accStatusEffect,
      'evaStatusEffect' in params ? params.evaStatusEffect : this.evaStatusEffect,
      'criStatusEffect' in params ? params.criStatusEffect : this.criStatusEffect
    );
  }

  get points(): number {
    return this.hpLv + this.atkLv + this.defLv + this.accLv + this.evaLv + this.criLv;
  }

  resetPoints(): UnitParameterEnhancementLv {
    return new UnitParameterEnhancementLv();
  }

  get enableUpHpLv(): boolean { return canUpLv(this.hpLv); }
  get enableDownHpLv(): boolean { return canDownLv(this.hpLv); }

  upHpLv(): UnitParameterEnhancementLv {
    if (this.enableUpHpLv) {
      const hpLv = this.hpLv + 1;
      return this.#updateParameterLv({ hpLv, hpStatusEffect: hpEnhancementEffect(hpLv) });
    }
    return this;
  }

  downHpLv(): UnitParameterEnhancementLv {
    if (this.enableDownHpLv) {
      const hpLv = this.hpLv - 1;
      return this.#updateParameterLv({ hpLv, hpStatusEffect: hpEnhancementEffect(hpLv) });
    }
    return this;
  }

  setHpLv(hpLv: number): UnitParameterEnhancementLv {
    return validLv(hpLv) ?
      this.#updateParameterLv({ hpLv, hpStatusEffect: hpEnhancementEffect(hpLv) }) :
      this;
  }

  get enableUpAtkLv(): boolean { return canUpLv(this.atkLv); }
  get enableDownAtkLv(): boolean { return canDownLv(this.atkLv); }

  upAtkLv(): UnitParameterEnhancementLv {
    if (this.enableUpAtkLv) {
      const atkLv = this.atkLv + 1;
      return this.#updateParameterLv({ atkLv, atkStatusEffect: atkEnhancementEffect(atkLv) });
    }
    return this;
  }

  downAtkLv(): UnitParameterEnhancementLv {
    if (this.enableDownAtkLv) {
      const atkLv = this.atkLv - 1;
      return this.#updateParameterLv({ atkLv, atkStatusEffect: atkEnhancementEffect(atkLv) });
    }
    return this;
  }

  setAtkLv(atkLv: number): UnitParameterEnhancementLv {
    return validLv(atkLv) ?
      this.#updateParameterLv({ atkLv, atkStatusEffect: atkEnhancementEffect(atkLv) }) :
      this;
  }

  get enableUpDefLv(): boolean { return canUpLv(this.defLv); }
  get enableDownDefLv(): boolean { return canDownLv(this.defLv); }

  upDefLv(): UnitParameterEnhancementLv {
    if (this.enableUpDefLv) {
      const defLv = this.defLv + 1;
      return this.#updateParameterLv({ defLv, defStatusEffect: defEnhancementEffect(defLv) });
    }
    return this;
  }

  downDefLv(): UnitParameterEnhancementLv {
    if (this.enableDownDefLv) {
      const defLv = this.defLv - 1;
      return this.#updateParameterLv({ defLv, defStatusEffect: defEnhancementEffect(defLv) });
    }
    return this;
  }

  setDefLv(defLv: number): UnitParameterEnhancementLv {
    return validLv(defLv) ?
      this.#updateParameterLv({ defLv, defStatusEffect: defEnhancementEffect(defLv) }) :
      this;
  }

  get enableUpAccLv(): boolean { return canUpLv(this.accLv); }
  get enableDownAccLv(): boolean { return canDownLv(this.accLv); }

  upAccLv(): UnitParameterEnhancementLv {
    if (this.enableUpAccLv) {
      const accLv = this.accLv + 1;
      return this.#updateParameterLv({ accLv, accStatusEffect: accEnhancementEffect(accLv) });
    }
    return this;
  }

  downAccLv(): UnitParameterEnhancementLv {
    if (this.enableDownAccLv) {
      const accLv = this.accLv - 1;
      return this.#updateParameterLv({ accLv, accStatusEffect: accEnhancementEffect(accLv) });
    }
    return this;
  }

  setAccLv(accLv: number): UnitParameterEnhancementLv {
    return validLv(accLv) ?
      this.#updateParameterLv({ accLv, accStatusEffect: accEnhancementEffect(accLv) }) :
      this;
  }

  get enableUpEvaLv(): boolean { return canUpLv(this.evaLv); }
  get enableDownEvaLv(): boolean { return canDownLv(this.evaLv); }

  upEvaLv(): UnitParameterEnhancementLv {
    if (this.enableUpEvaLv) {
      const evaLv = this.evaLv + 1;
      return this.#updateParameterLv({ evaLv, evaStatusEffect: evaEnhancementEffect(evaLv) });
    }
    return this;
  }

  downEvaLv(): UnitParameterEnhancementLv {
    if (this.enableDownEvaLv) {
      const evaLv = this.evaLv - 1;
      return this.#updateParameterLv({ evaLv, evaStatusEffect: evaEnhancementEffect(evaLv) });
    }
    return this;
  }

  setEvaLv(evaLv: number): UnitParameterEnhancementLv {
    return validLv(evaLv) ?
      this.#updateParameterLv({ evaLv, evaStatusEffect: evaEnhancementEffect(evaLv) }) :
      this;
  }

  get enableUpCriLv(): boolean { return canUpLv(this.criLv); }
  get enableDownCriLv(): boolean { return canDownLv(this.criLv); }

  upCriLv(): UnitParameterEnhancementLv {
    if (this.enableUpCriLv) {
      const criLv = this.criLv + 1;
      return this.#updateParameterLv({ criLv, criStatusEffect: criEnhancementEffect(criLv) });
    }
    return this;
  }

  downCriLv(): UnitParameterEnhancementLv {
    if (this.enableDownCriLv) {
      const criLv = this.criLv - 1;
      return this.#updateParameterLv({ criLv, criStatusEffect: criEnhancementEffect(criLv) });
    }
    return this;
  }

  setCriLv(criLv: number): UnitParameterEnhancementLv {
    return validLv(criLv) ?
      this.#updateParameterLv({ criLv, criStatusEffect: criEnhancementEffect(criLv) }) :
      this;
  }
}

export default UnitParameterEnhancementLv;
