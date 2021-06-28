import {
  AccEnhancementStatusEffect,
  AtkEnhancementStatusEffect,
  CriEnhancementStatusEffect,
  DefEnhancementStatusEffect,
  EvaEnhancementStatusEffect,
  HpEnhancementStatusEffect,
  IntegerValueStatusEffectKey,
  MicroValueStatusEffectKey,
  MilliPercentageStatusEffectKey,
  MilliValueStatusEffectKey,
  StatusEffect,
  StatusEffectKey
} from './StatusEffect';
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

export class UnitHpStatusParameter {

  readonly hp: IntegerValue;
  readonly hpEffectValue: IntegerValue;
  readonly hpCoreLinkBonus: IntegerValue;
  readonly hpFullLinkBonus: IntegerValue;

  constructor(
    baseHp: IntegerValue,
    hpEnhancement: HpEnhancementStatusEffect,
    chip1: StatusEffect,
    chip2: StatusEffect,
    os: StatusEffect,
    gear: StatusEffect,
    coreLinkBonus: CoreLinkBonus | Record<string, never>,
    fullLinkBonus: FullLinkBonus | undefined
  ) {
    const _fullLinkBonus: FullLinkBonus | Record<string, never> = fullLinkBonus ?? {};

    const hpAddition  = sumValues(...pickValues(Effect.HpUp)(hpEnhancement, chip1, chip2, os, gear));
    const hp = sumValues(baseHp, hpAddition);

    this.hpCoreLinkBonus = 'hp_up' in coreLinkBonus ? multiplyValue(hp, coreLinkBonus.hp_up) : { value: 0 };
    this.hpFullLinkBonus = 'hp_up' in _fullLinkBonus ? multiplyValue(hp, _fullLinkBonus.hp_up) : { value: 0 };

    this.hpEffectValue = sumValues(hpAddition, this.hpCoreLinkBonus, this.hpFullLinkBonus);

    this.hp = sumValues(hp, this.hpCoreLinkBonus, this.hpFullLinkBonus);
  }
}

export class UnitAtkStatusParameter {

  readonly atk: MilliValue;
  readonly atkEffectValue: MilliValue;
  readonly atkCoreLinkBonus: MilliValue;

  constructor(
    baseAtk: MilliValue,
    atkEnhancement: AtkEnhancementStatusEffect,
    chip1: StatusEffect,
    chip2: StatusEffect,
    os: StatusEffect,
    gear: StatusEffect,
    coreLinkBonus: CoreLinkBonus | Record<string, never>
  ) {
    const atkAddition = sumMilliValues(...pickValues(Effect.AtkUp, Effect.AtkDown)(atkEnhancement, chip1, chip2, os, gear));
    const atk = sumMilliValues(baseAtk, atkAddition);

    this.atkCoreLinkBonus = 'atk_up' in coreLinkBonus ? multiplyMilliValue(atk, coreLinkBonus.atk_up) : { milliValue: 0 };
    this.atkEffectValue = sumMilliValues(atkAddition, this.atkCoreLinkBonus);

    this.atk = sumMilliValues(atk, this.atkCoreLinkBonus);
  }
}

export class UnitDefStatusParameter {

  readonly def: MilliValue;
  readonly defEffectValue: MilliValue;
  readonly defCoreLinkBonus: MilliValue;

  constructor(
    baseDef: MilliValue,
    defEnhancement: DefEnhancementStatusEffect,
    chip1: StatusEffect,
    chip2: StatusEffect,
    os: StatusEffect,
    gear: StatusEffect,
    coreLinkBonus: CoreLinkBonus | Record<string, never>
  ) {
    const defAddition = sumMilliValues(...pickValues(Effect.DefUp, Effect.DefDown)(defEnhancement, chip1, chip2, os, gear));
    const def = sumMilliValues(baseDef, defAddition);

    this.defCoreLinkBonus = 'def_up' in coreLinkBonus ? multiplyMilliValue(def, coreLinkBonus.def_up) : { milliValue: 0 };
    this.defEffectValue = sumMilliValues(defAddition, this.defCoreLinkBonus);

    this.def = sumMilliValues(def, this.defCoreLinkBonus);
  }
}

export class UnitAccStatusParameter {

  readonly acc: MilliPercentageValue;
  readonly accEffectValue: MilliPercentageValue;

  constructor(
    baseAcc: MilliPercentageValue,
    accEnhancement: AccEnhancementStatusEffect,
    chip1: StatusEffect,
    chip2: StatusEffect,
    os: StatusEffect,
    gear: StatusEffect,
    coreLinkBonus: CoreLinkBonus | Record<string, never>,
    fullLinkBonus: FullLinkBonus | undefined
  ) {
    const _fullLinkBonus: FullLinkBonus | Record<string, never> = fullLinkBonus ?? {};

    this.accEffectValue = sumMilliPercentageValues(
      ...pickValues(Effect.AccUp, Effect.AccDown)(accEnhancement, chip1, chip2, os, gear),
      ...('acc_up' in coreLinkBonus ? [coreLinkBonus.acc_up] : []),
      ...('acc_up' in _fullLinkBonus ? [_fullLinkBonus.acc_up] : [])
    );

    this.acc = sumMilliPercentageValues(baseAcc, this.accEffectValue);
  }
}

export class UnitEvaStatusParameter {

  readonly eva: MilliPercentageValue;
  readonly evaEffectValue: MilliPercentageValue;

  constructor(
    baseEva: MilliPercentageValue,
    evaEnhancement: EvaEnhancementStatusEffect,
    chip1: StatusEffect,
    chip2: StatusEffect,
    os: StatusEffect,
    gear: StatusEffect,
    coreLinkBonus: CoreLinkBonus | Record<string, never>,
    fullLinkBonus: FullLinkBonus | undefined
  ) {
    const _fullLinkBonus: FullLinkBonus | Record<string, never> = fullLinkBonus ?? {};

    this.evaEffectValue = sumMilliPercentageValues(
      ...pickValues(Effect.EvaUp, Effect.EvaDown)(evaEnhancement, chip1, chip2, os, gear),
      ...('eva_up' in coreLinkBonus ? [coreLinkBonus.eva_up] : []),
      ...('eva_up' in _fullLinkBonus ? [_fullLinkBonus.eva_up] : [])
    );
    this.eva = sumMilliPercentageValues(baseEva, this.evaEffectValue);
  }
}

export class UnitCriStatusParameter {

  readonly cri: MilliPercentageValue;
  readonly criEffectValue: MilliPercentageValue;

  constructor(
    baseCri: MilliPercentageValue,
    criEnhancement: CriEnhancementStatusEffect,
    chip1: StatusEffect,
    chip2: StatusEffect,
    os: StatusEffect,
    gear: StatusEffect,
    coreLinkBonus: CoreLinkBonus | Record<string, never>,
    fullLinkBonus: FullLinkBonus | undefined
  ) {
    const _fullLinkBonus: FullLinkBonus | Record<string, never> = fullLinkBonus ?? {};

    this.criEffectValue = sumMilliPercentageValues(
      ...pickValues(Effect.CriUp, Effect.CriDown)(criEnhancement, chip1, chip2, os, gear),
      ...('cri_up' in coreLinkBonus ? [coreLinkBonus.cri_up] : []),
      ...('cri_up' in _fullLinkBonus ? [_fullLinkBonus.cri_up] : [])
    );
    this.cri = sumMilliPercentageValues(baseCri, this.criEffectValue);
  }
}

export class UnitSpdStatusParameter {

  readonly spd: MicroValue;
  readonly spdEffectValue: MicroValue;

  constructor(
    baseSpd: MicroValue,
    chip1: StatusEffect,
    chip2: StatusEffect,
    os: StatusEffect,
    gear: StatusEffect,
    coreLinkBonus: CoreLinkBonus | Record<string, never>,
    fullLinkBonus: FullLinkBonus | undefined
  ) {
    const _fullLinkBonus: FullLinkBonus | Record<string, never> = fullLinkBonus ?? {};

    this.spdEffectValue = sumMicroValues(
      ...pickValues(Effect.SpdUp, Effect.SpdDown)(chip1, chip2, os, gear),
      ...('spd_up' in coreLinkBonus ? [coreLinkBonus.spd_up] : []),
      ...('spd_up' in _fullLinkBonus ? [_fullLinkBonus.spd_up] : [])
    );
    this.spd = sumMicroValues(baseSpd, this.spdEffectValue);
  }
}

abstract class UnitAttributeResistStatusParameter {

  readonly resist: MilliPercentageValue;
  readonly resistEffectValue: MilliPercentageValue;

  protected constructor(
    statusEffectKeys: MilliPercentageStatusEffectKey[],
    baseResist: MilliPercentageValue,
    chip1: StatusEffect,
    chip2: StatusEffect,
    os: StatusEffect,
    gear: StatusEffect
  ) {
    this.resistEffectValue = sumMilliPercentageValues(...pickValues(...statusEffectKeys)(chip1, chip2, os, gear));
    this.resist = sumMilliPercentageValues(baseResist, this.resistEffectValue);
  }
}

export class UnitFireResistStatusParameter extends UnitAttributeResistStatusParameter {
  constructor(
    baseFireResist: MilliPercentageValue,
    chip1: StatusEffect,
    chip2: StatusEffect,
    os: StatusEffect,
    gear: StatusEffect
  ) {
    super([Effect.FireResistUp, Effect.FireResistDown], baseFireResist, chip1, chip2, os, gear);
  }
}

export class UnitIceResistStatusParameter extends UnitAttributeResistStatusParameter {
  constructor(
    baseIceResist: MilliPercentageValue,
    chip1: StatusEffect,
    chip2: StatusEffect,
    os: StatusEffect,
    gear: StatusEffect
  ) {
    super([Effect.IceResistUp, Effect.IceResistDown], baseIceResist, chip1, chip2, os, gear);
  }
}

export class UnitElectricResistStatusParameter extends UnitAttributeResistStatusParameter {
  constructor(
    baseElectricResist: MilliPercentageValue,
    chip1: StatusEffect,
    chip2: StatusEffect,
    os: StatusEffect,
    gear: StatusEffect
  ) {
    super([Effect.ElectricResistUp, Effect.ElectricResistDown], baseElectricResist, chip1, chip2, os, gear);
  }
}
