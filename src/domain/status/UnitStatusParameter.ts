import { CoreLinkBonus, FullLinkBonus } from '../UnitCoreLinkBonusData';
import { Effect } from '../Effect';
import {
  IntegerValue,
  MicroValue,
  MilliPercentageValue,
  MilliValue,
  multiplyMilliValue,
  multiplyValue,
  sumMicroValues,
  sumMilliPercentageValues,
  sumMilliValues,
  sumValues,
  ValueTypes
} from '../ValueUnit';
import {
  IntegerValueStatusEffectKey,
  MicroValueStatusEffectKey,
  MilliPercentageStatusEffectKey,
  MilliValueStatusEffectKey,
  StatusEffect,
  StatusEffectKey
} from './StatusEffect';
import UnitBaseParameter from './UnitBaseParameter';
import UnitEnhancementStatus from './UnitEnhancementStatus';

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

function pickValues(...keys: IntegerValueStatusEffectKey[]): (...effects: StatusEffect[]) => IntegerValue[]
function pickValues(...keys: MilliValueStatusEffectKey[]): (...effects: StatusEffect[]) => MilliValue[]
function pickValues(...keys: MicroValueStatusEffectKey[]): (...effects: StatusEffect[]) => MicroValue[]
function pickValues(...keys: MilliPercentageStatusEffectKey[]): (...effects: StatusEffect[]) => MilliPercentageValue[]
// eslint-disable-next-line
function pickValues(...keys: StatusEffectKey[]): (...effects: StatusEffect[]) => any[] {
  return function (...effects: StatusEffect[]) {
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

export class UnitStatusParameter {

  readonly #baseParameter: UnitBaseParameter;

  readonly hp: IntegerValue;
  readonly atk: MilliValue;
  readonly def: MilliValue;

  readonly acc: MilliPercentageValue;
  readonly eva: MilliPercentageValue;
  readonly cri: MilliPercentageValue;

  readonly spd: MicroValue;

  readonly fireResist: MilliPercentageValue;
  readonly iceResist: MilliPercentageValue;
  readonly electricResist: MilliPercentageValue;

  readonly hpEffectValue: IntegerValue;
  readonly atkEffectValue: MilliValue;
  readonly defEffectValue: MilliValue;

  readonly accEffectValue: MilliPercentageValue;
  readonly evaEffectValue: MilliPercentageValue;
  readonly criEffectValue: MilliPercentageValue;
  readonly spdEffectValue: MicroValue;
  readonly fireResistEffectValue: MilliPercentageValue;
  readonly iceResistEffectValue: MilliPercentageValue;
  readonly electricResistEffectValue: MilliPercentageValue;

  readonly hpCoreLinkBonus: IntegerValue;
  readonly hpFullLinkBonus: IntegerValue;
  readonly atkCoreLinkBonus: MilliValue;
  readonly defCoreLinkBonus: MilliValue;

  constructor(
    unitEnhancement: UnitEnhancementStatus,
    baseParameter: UnitBaseParameter,
    chip1: StatusEffect,
    chip2: StatusEffect,
    os: StatusEffect,
    gear: StatusEffect,
    coreLinkBonus: CoreLinkBonus | Record<string, never>,
    fullLinkBonus: FullLinkBonus | undefined
  ) {
    const unitLv = unitEnhancement.lv;
    const enhancement = unitEnhancement.statusEffects;
    this.#baseParameter = baseParameter;

    const _fullLinkBonus: FullLinkBonus | Record<string, never> = fullLinkBonus ?? {};

    this.accEffectValue = sumMilliPercentageValues(
      ...pickValues(Effect.AccUp, Effect.AccDown)(enhancement, chip1, chip2, os, gear),
      ...('acc_up' in coreLinkBonus ? [coreLinkBonus.acc_up] : []),
      ...('acc_up' in _fullLinkBonus ? [_fullLinkBonus.acc_up] : [])
    );
    this.evaEffectValue = sumMilliPercentageValues(
      ...pickValues(Effect.EvaUp, Effect.EvaDown)(enhancement, chip1, chip2, os, gear),
      ...('eva_up' in coreLinkBonus ? [coreLinkBonus.eva_up] : []),
      ...('eva_up' in _fullLinkBonus ? [_fullLinkBonus.eva_up] : [])
    );
    this.criEffectValue = sumMilliPercentageValues(
      ...pickValues(Effect.CriUp, Effect.CriDown)(enhancement, chip1, chip2, os, gear),
      ...('cri_up' in coreLinkBonus ? [coreLinkBonus.cri_up] : []),
      ...('cri_up' in _fullLinkBonus ? [_fullLinkBonus.cri_up] : [])
    );

    this.spdEffectValue = sumMicroValues(
      ...pickValues(Effect.SpdUp, Effect.SpdDown)(chip1, chip2, os, gear),
      ...('spd_up' in coreLinkBonus ? [coreLinkBonus.spd_up] : []),
      ...('spd_up' in _fullLinkBonus ? [_fullLinkBonus.spd_up] : [])
    );
    this.fireResistEffectValue     = sumMilliPercentageValues(...pickValues(Effect.FireResistUp, Effect.FireResistDown)(chip1, chip2, os, gear));
    this.iceResistEffectValue      = sumMilliPercentageValues(...pickValues(Effect.IceResistUp, Effect.IceResistDown)(chip1, chip2, os, gear));
    this.electricResistEffectValue = sumMilliPercentageValues(...pickValues(Effect.ElectricResistUp, Effect.ElectricResistDown)(chip1, chip2, os, gear));

    const hpAddition  = sumValues(...pickValues(Effect.HpUp)(enhancement, chip1, chip2, os, gear));
    const atkAddition = sumMilliValues(...pickValues(Effect.AtkUp, Effect.AtkDown)(enhancement, chip1, chip2, os, gear));
    const defAddition = sumMilliValues(...pickValues(Effect.DefUp, Effect.DefDown)(enhancement, chip1, chip2, os, gear));

    const hp = sumValues(this.#baseParameter.hp(unitLv), hpAddition);
    const atk = sumMilliValues(this.#baseParameter.atk(unitLv), atkAddition);
    const def = sumMilliValues(this.#baseParameter.def(unitLv), defAddition);

    this.hpCoreLinkBonus = 'hp_up' in coreLinkBonus ? multiplyValue(hp, coreLinkBonus.hp_up) : { value: 0 };
    this.hpFullLinkBonus = 'hp_up' in _fullLinkBonus ? multiplyValue(hp, _fullLinkBonus.hp_up) : { value: 0 };

    this.atkCoreLinkBonus = 'atk_up' in coreLinkBonus ? multiplyMilliValue(atk, coreLinkBonus.atk_up) : { milliValue: 0 };
    this.defCoreLinkBonus = 'def_up' in coreLinkBonus ? multiplyMilliValue(def, coreLinkBonus.def_up) : { milliValue: 0 };

    this.hpEffectValue = sumValues(hpAddition, this.hpCoreLinkBonus, this.hpFullLinkBonus);
    this.atkEffectValue = sumMilliValues(atkAddition, this.atkCoreLinkBonus);
    this.defEffectValue = sumMilliValues(defAddition, this.defCoreLinkBonus);

    this.hp = sumValues(hp, this.hpCoreLinkBonus, this.hpFullLinkBonus);
    this.atk = sumMilliValues(atk, this.atkCoreLinkBonus);
    this.def = sumMilliValues(def, this.defCoreLinkBonus);

    this.acc = sumMilliPercentageValues(this.#baseParameter.acc, this.accEffectValue);
    this.eva = sumMilliPercentageValues(this.#baseParameter.eva, this.evaEffectValue);
    this.cri = sumMilliPercentageValues(this.#baseParameter.cri, this.criEffectValue);

    this.spd = sumMicroValues(this.#baseParameter.spd, this.spdEffectValue);

    this.fireResist     = sumMilliPercentageValues(this.#baseParameter.fireResist, this.fireResistEffectValue);
    this.iceResist      = sumMilliPercentageValues(this.#baseParameter.iceResist, this.iceResistEffectValue);
    this.electricResist = sumMilliPercentageValues(this.#baseParameter.electricResist, this.electricResistEffectValue);
  }
}
