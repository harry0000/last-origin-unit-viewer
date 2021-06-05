import { IntegerValue, MilliPercentageValue, MilliValue } from '../ValueUnit';
import { EnhancementStatusEffect } from './StatusEffect';

type ParameterLv = {
  hpLv?: number,
  atkLv?: number,
  defLv?: number,
  accLv?: number,
  evaLv?: number,
  criLv?: number
}

const MaxEnhancementLv = 300;

class UnitParameterEnhancementLv {

  readonly hpLv: number;
  readonly atkLv: number;
  readonly defLv: number;
  readonly accLv: number;
  readonly evaLv: number;
  readonly criLv: number;

  constructor(
    hpLv?: number,
    atkLv?: number,
    defLv?: number,
    accLv?: number,
    evaLv?: number,
    criLv?: number
  ) {
    this.hpLv = hpLv ?? 0;
    this.atkLv = atkLv ?? 0;
    this.defLv = defLv ?? 0;
    this.accLv = accLv ?? 0;
    this.evaLv = evaLv ?? 0;
    this.criLv = criLv ?? 0;
  }

  updateParameterLv({ hpLv, atkLv, defLv, accLv, evaLv, criLv }: ParameterLv): UnitParameterEnhancementLv {
    return new UnitParameterEnhancementLv(
      hpLv ?? this.hpLv,
      atkLv ?? this.atkLv,
      defLv ?? this.defLv,
      accLv ?? this.accLv,
      evaLv ?? this.evaLv,
      criLv ?? this.criLv
    );
  }

  get points(): number {
    return this.hpLv + this.atkLv + this.defLv + this.accLv + this.evaLv + this.criLv;
  }

  resetPoints(): UnitParameterEnhancementLv {
    return this.updateParameterLv({
      hpLv: 0,
      atkLv: 0,
      defLv: 0,
      accLv: 0,
      evaLv: 0,
      criLv: 0
    });
  }

  get statusEffects(): EnhancementStatusEffect {
    const hp  = this.hpLv > 0  ? { hp_up: this.hpEnhancedValue } : {};
    const atk = this.atkLv > 0 ? { atk_up: this.atkEnhancedValue } : {};
    const def = this.defLv > 0 ? { def_up: this.defEnhancedValue } : {};
    const acc = this.accLv > 0 ? { acc_up: this.accEnhancedValue } : {};
    const eva = this.evaLv > 0 ? { eva_up: this.evaEnhancedValue } : {};
    const cri = this.criLv > 0 ? { cri_up: this.criEnhancedValue } : {};

    return Object.assign({}, hp, atk, def, acc, eva, cri);
  }

  get hpEnhancedValue(): IntegerValue {
    return { value: this.hpLv * 8 };
  }

  get enableUpHpLv(): boolean {
    return this.hpLv < MaxEnhancementLv;
  }

  get enableDownHpLv(): boolean {
    return this.hpLv > 0;
  }

  upHpLv(): UnitParameterEnhancementLv {
    if (this.enableUpHpLv) {
      return this.updateParameterLv({ hpLv: this.hpLv + 1 });
    }
    return this;
  }

  downHpLv(): UnitParameterEnhancementLv {
    if (this.enableDownHpLv) {
      return this.updateParameterLv({ hpLv: this.hpLv - 1 });
    }
    return this;
  }

  get atkEnhancedValue(): MilliValue {
    return { milliValue: this.atkLv * 1500 };
  }

  get enableUpAtkLv(): boolean {
    return this.atkLv < MaxEnhancementLv;
  }

  get enableDownAtkLv(): boolean {
    return this.atkLv > 0;
  }

  upAtkLv(): UnitParameterEnhancementLv {
    if (this.enableUpAtkLv) {
      return this.updateParameterLv({ atkLv: this.atkLv + 1 });
    }
    return this;
  }

  downAtkLv(): UnitParameterEnhancementLv {
    if (this.enableDownAtkLv) {
      return this.updateParameterLv({ atkLv: this.atkLv - 1 });
    }
    return this;
  }

  get defEnhancedValue(): MilliValue {
    return { milliValue: this.defLv * 1250 };
  }

  get enableUpDefLv(): boolean {
    return this.defLv < MaxEnhancementLv;
  }

  get enableDownDefLv(): boolean {
    return this.defLv > 0;
  }

  upDefLv(): UnitParameterEnhancementLv {
    if (this.enableUpDefLv) {
      return this.updateParameterLv({ defLv: this.defLv + 1 });
    }
    return this;
  }

  downDefLv(): UnitParameterEnhancementLv {
    if (this.enableDownDefLv) {
      return this.updateParameterLv({ defLv: this.defLv - 1 });
    }
    return this;
  }

  get accEnhancedValue(): MilliPercentageValue {
    return { milliPercentage: this.accLv * 1500 };
  }

  get enableUpAccLv(): boolean {
    return this.accLv < MaxEnhancementLv;
  }

  get enableDownAccLv(): boolean {
    return this.accLv > 0;
  }

  upAccLv(): UnitParameterEnhancementLv {
    if (this.enableUpAccLv) {
      return this.updateParameterLv({ accLv: this.accLv + 1 });
    }
    return this;
  }

  downAccLv(): UnitParameterEnhancementLv {
    if (this.enableDownAccLv) {
      return this.updateParameterLv({ accLv: this.accLv - 1 });
    }
    return this;
  }

  get evaEnhancedValue(): MilliPercentageValue {
    return { milliPercentage: this.evaLv * 400 };
  }

  get enableUpEvaLv(): boolean {
    return this.evaLv < MaxEnhancementLv;
  }

  get enableDownEvaLv(): boolean {
    return this.evaLv > 0;
  }

  upEvaLv(): UnitParameterEnhancementLv {
    if (this.enableUpEvaLv) {
      return this.updateParameterLv({ evaLv: this.evaLv + 1 });
    }
    return this;
  }

  downEvaLv(): UnitParameterEnhancementLv {
    if (this.enableDownEvaLv) {
      return this.updateParameterLv({ evaLv: this.evaLv - 1 });
    }
    return this;
  }

  get criEnhancedValue(): MilliPercentageValue {
    return { milliPercentage: this.criLv * 400 };
  }

  get enableUpCriLv(): boolean {
    return this.criLv < MaxEnhancementLv;
  }

  get enableDownCriLv(): boolean {
    return this.criLv > 0;
  }

  upCriLv(): UnitParameterEnhancementLv {
    if (this.enableUpCriLv) {
      return this.updateParameterLv({ criLv: this.criLv + 1 });
    }
    return this;
  }

  downCriLv(): UnitParameterEnhancementLv {
    if (this.enableDownCriLv) {
      return this.updateParameterLv({ criLv: this.criLv - 1 });
    }
    return this;
  }
}

export default UnitParameterEnhancementLv;
