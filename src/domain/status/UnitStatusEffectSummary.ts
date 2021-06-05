import { Effect } from '../Effect';
import {
  IntegerValue,
  MicroValue,
  MilliPercentageValue,
  MilliValue,
  sumMicroValues,
  sumMilliPercentageValues,
  sumMilliValues,
  sumValues,
  ValueTypes
} from '../ValueUnit';
import {
  EnhancementStatusEffect,
  IntegerValueStatusEffectKey,
  MicroValueStatusEffectKey,
  MilliPercentageStatusEffectKey,
  MilliValueStatusEffectKey,
  StatusEffect, StatusEffectKey
} from './StatusEffect';

function reverseSign(value: ValueTypes): ValueTypes {
  if ('milliValue' in value) {
    return { milliValue: -value.milliValue };
  } else if ('microValue' in value) {
    return { microValue: -value.microValue };
  } else if ('milliPercentage' in value) {
    return { milliPercentage: -value.milliPercentage };
  }

  return { value: -value.value };
}

function pickValues(...effects: StatusEffect[]): (...keys: IntegerValueStatusEffectKey[]) => IntegerValue[]
function pickValues(...effects: StatusEffect[]): (...keys: MilliValueStatusEffectKey[]) => MilliValue[]
function pickValues(...effects: StatusEffect[]): (...keys: MicroValueStatusEffectKey[]) => MicroValue[]
function pickValues(...effects: StatusEffect[]): (...keys: MilliPercentageStatusEffectKey[]) => MilliPercentageValue[]
// eslint-disable-next-line
function pickValues(...effects: StatusEffect[]): (...keys: StatusEffectKey[]) => any[] {
  return function (...keys: StatusEffectKey[]) {
    const values: unknown[] = [];
    effects.forEach(e => {
      if (!e) return;

      keys.forEach(key => {
        const v = e[key];
        if (v) {
          switch (key) {
          case 'atk_down':
          case 'def_down':
          case 'acc_down':
          case 'eva_down':
          case 'cri_down':
          case 'spd_down':
          case 'fire_resist_down':
          case 'ice_resist_down':
          case 'electric_resist_down':
            values.push(reverseSign(v));
            break;
          default:
            values.push(v);
            break;
          }
        }
      });
    });
    return values;
  };
}

class UnitStatusEffectSummary {

  readonly #enhancement: EnhancementStatusEffect;
  readonly #chip1: StatusEffect;
  readonly #chip2: StatusEffect;
  readonly #os: StatusEffect;
  readonly #gear: StatusEffect;

  constructor(
    enhancement: EnhancementStatusEffect,
    chip1: StatusEffect,
    chip2: StatusEffect,
    os: StatusEffect,
    gear: StatusEffect
  ) {
    this.#enhancement = enhancement;
    this.#chip1 = chip1;
    this.#chip2 = chip2;
    this.#os    = os;
    this.#gear  = gear;
  }

  private pickValues(...keys: IntegerValueStatusEffectKey[]): IntegerValue[]
  private pickValues(...keys: MilliValueStatusEffectKey[]): MilliValue[]
  private pickValues(...keys: MicroValueStatusEffectKey[]): MicroValue[]
  private pickValues(...keys: MilliPercentageStatusEffectKey[]): MilliPercentageValue[]
  // eslint-disable-next-line
  private pickValues(...keys: any[]): any[] {
    return pickValues(this.#enhancement, this.#chip1, this.#chip2, this.#os, this.#gear)(...keys);
  }

  get hp(): IntegerValue {
    return sumValues(...this.pickValues(Effect.HpUp));
  }

  get atk(): MilliValue {
    return sumMilliValues(...this.pickValues(Effect.AtkUp, Effect.AtkDown));
  }

  get def(): MilliValue {
    return sumMilliValues(...this.pickValues(Effect.DefUp, Effect.DefDown));
  }

  get acc(): MilliPercentageValue {
    return sumMilliPercentageValues(...this.pickValues(Effect.AccUp, Effect.AccDown));
  }

  get eva(): MilliPercentageValue {
    return sumMilliPercentageValues(...this.pickValues(Effect.EvaUp, Effect.EvaDown));
  }

  get cri(): MilliPercentageValue {
    return sumMilliPercentageValues(...this.pickValues(Effect.CriUp, Effect.CriDown));
  }

  get spd(): MicroValue {
    return sumMicroValues(...this.pickValues(Effect.SpdUp, Effect.SpdDown));
  }

  get fireResist(): MilliPercentageValue {
    return sumMilliPercentageValues(...this.pickValues(Effect.FireResistUp, Effect.FireResistDown));
  }

  get iceResist(): MilliPercentageValue {
    return sumMilliPercentageValues(...this.pickValues(Effect.IceResistUp, Effect.IceResistDown));
  }

  get electricResist(): MilliPercentageValue {
    return sumMilliPercentageValues(...this.pickValues(Effect.ElectricResistUp, Effect.ElectricResistDown));
  }
}

export default UnitStatusEffectSummary;