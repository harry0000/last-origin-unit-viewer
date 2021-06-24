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

const MaxEnhancementLv = 300;

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

  updateParameterLv(params: UpdateParams): UnitParameterEnhancementLv {
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

  get enableUpHpLv(): boolean {
    return this.hpLv < MaxEnhancementLv;
  }

  get enableDownHpLv(): boolean {
    return this.hpLv > 0;
  }

  upHpLv(): UnitParameterEnhancementLv {
    if (this.enableUpHpLv) {
      const hpLv = this.hpLv + 1;
      return this.updateParameterLv({ hpLv, hpStatusEffect: hpEnhancementEffect(hpLv) });
    }
    return this;
  }

  downHpLv(): UnitParameterEnhancementLv {
    if (this.enableDownHpLv) {
      const hpLv = this.hpLv - 1;
      return this.updateParameterLv({ hpLv, hpStatusEffect: hpEnhancementEffect(hpLv) });
    }
    return this;
  }

  get enableUpAtkLv(): boolean {
    return this.atkLv < MaxEnhancementLv;
  }

  get enableDownAtkLv(): boolean {
    return this.atkLv > 0;
  }

  upAtkLv(): UnitParameterEnhancementLv {
    if (this.enableUpAtkLv) {
      const atkLv = this.atkLv + 1;
      return this.updateParameterLv({ atkLv, atkStatusEffect: atkEnhancementEffect(atkLv) });
    }
    return this;
  }

  downAtkLv(): UnitParameterEnhancementLv {
    if (this.enableDownAtkLv) {
      const atkLv = this.atkLv - 1;
      return this.updateParameterLv({ atkLv, atkStatusEffect: atkEnhancementEffect(atkLv) });
    }
    return this;
  }

  get enableUpDefLv(): boolean {
    return this.defLv < MaxEnhancementLv;
  }

  get enableDownDefLv(): boolean {
    return this.defLv > 0;
  }

  upDefLv(): UnitParameterEnhancementLv {
    if (this.enableUpDefLv) {
      const defLv = this.defLv + 1;
      return this.updateParameterLv({ defLv, defStatusEffect: defEnhancementEffect(defLv) });
    }
    return this;
  }

  downDefLv(): UnitParameterEnhancementLv {
    if (this.enableDownDefLv) {
      const defLv = this.defLv - 1;
      return this.updateParameterLv({ defLv, defStatusEffect: defEnhancementEffect(defLv) });
    }
    return this;
  }

  get enableUpAccLv(): boolean {
    return this.accLv < MaxEnhancementLv;
  }

  get enableDownAccLv(): boolean {
    return this.accLv > 0;
  }

  upAccLv(): UnitParameterEnhancementLv {
    if (this.enableUpAccLv) {
      const accLv = this.accLv + 1;
      return this.updateParameterLv({ accLv, accStatusEffect: accEnhancementEffect(accLv) });
    }
    return this;
  }

  downAccLv(): UnitParameterEnhancementLv {
    if (this.enableDownAccLv) {
      const accLv = this.accLv - 1;
      return this.updateParameterLv({ accLv, accStatusEffect: accEnhancementEffect(accLv) });
    }
    return this;
  }

  get enableUpEvaLv(): boolean {
    return this.evaLv < MaxEnhancementLv;
  }

  get enableDownEvaLv(): boolean {
    return this.evaLv > 0;
  }

  upEvaLv(): UnitParameterEnhancementLv {
    if (this.enableUpEvaLv) {
      const evaLv = this.evaLv + 1;
      return this.updateParameterLv({ evaLv, evaStatusEffect: evaEnhancementEffect(evaLv) });
    }
    return this;
  }

  downEvaLv(): UnitParameterEnhancementLv {
    if (this.enableDownEvaLv) {
      const evaLv = this.evaLv - 1;
      return this.updateParameterLv({ evaLv, evaStatusEffect: evaEnhancementEffect(evaLv) });
    }
    return this;
  }

  get enableUpCriLv(): boolean {
    return this.criLv < MaxEnhancementLv;
  }

  get enableDownCriLv(): boolean {
    return this.criLv > 0;
  }

  upCriLv(): UnitParameterEnhancementLv {
    if (this.enableUpCriLv) {
      const criLv = this.criLv + 1;
      return this.updateParameterLv({ criLv, criStatusEffect: criEnhancementEffect(criLv) });
    }
    return this;
  }

  downCriLv(): UnitParameterEnhancementLv {
    if (this.enableDownCriLv) {
      const criLv = this.criLv - 1;
      return this.updateParameterLv({ criLv, criStatusEffect: criEnhancementEffect(criLv) });
    }
    return this;
  }
}

export default UnitParameterEnhancementLv;
