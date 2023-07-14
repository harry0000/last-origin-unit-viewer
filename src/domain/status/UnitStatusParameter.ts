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
  ZeroIntegerValue,
  ZeroMilliValue,
  multiplyMilliValue,
  multiplyValue,
  reverseSign,
  sumMicroValues,
  sumMilliPercentageValues,
  sumMilliValues,
  sumValues
} from '../ValueUnit';
import { ParameterPerLevel } from './UnitStatusData';
import { UnitLvValue } from './UnitLv';
import { UnitNumber } from '../UnitBasicInfo';
import { UnitRankUpBonus } from './UnitRankUpBonusData';

import { unitStatusData } from '../../data/unitStatusData';

type IntegerValueParameterPerLevel = ParameterPerLevel<keyof IntegerValue>
type MilliValueParameterPerLevel = ParameterPerLevel<keyof MilliValue>

function calculateParam(...args: [unit: keyof IntegerValue, data: IntegerValueParameterPerLevel, lv: UnitLvValue]): IntegerValue
function calculateParam(...args: [unit: keyof MilliValue,   data: MilliValueParameterPerLevel,   lv: UnitLvValue]): MilliValue
function calculateParam(
  ...args:
    [unit: keyof IntegerValue, data: IntegerValueParameterPerLevel, lv: UnitLvValue] |
    [unit: keyof MilliValue,   data: MilliValueParameterPerLevel,   lv: UnitLvValue]
): IntegerValue | MilliValue {
  const isInteger = args[0] === 'value';
  const [, , lv] = args;

  const base = isInteger ? args[1][1].value : args[1][1].milliValue;
  const perLv = '90' in args[1] ?
    ((isInteger ? args[1][90].value  : args[1][90].milliValue)  - base) / 89 :
    ((isInteger ? args[1][100].value : args[1][100].milliValue) - base) / 99;

  const calculated = base + Math.round(perLv * (lv - 1));
  return isInteger ? { value: calculated } : { milliValue: calculated };
}

export function calculateUnitBaseHp(unit: UnitNumber, lv: UnitLvValue): IntegerValue {
  return calculateParam('value', unitStatusData[unit].hp, lv);
}

export function calculateUnitBaseAtk(unit: UnitNumber, lv: UnitLvValue): MilliValue {
  return calculateParam('milliValue', unitStatusData[unit].atk, lv);
}

export function calculateUnitBaseDef(unit: UnitNumber, lv: UnitLvValue): MilliValue {
  return calculateParam('milliValue', unitStatusData[unit].def, lv);
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
          case Effect.HpDown:
          case Effect.AtkDown:
          case Effect.DefDown:
          case Effect.AccDown:
          case Effect.EvaDown:
          case Effect.CriDown:
          case Effect.SpdDown:
          case Effect.FireResistDown:
          case Effect.IceResistDown:
          case Effect.ElectricResistDown:
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
    unit: UnitNumber,
    lv: UnitLvValue,
    hpEnhancement: HpEnhancementStatusEffect,
    chip1: StatusEffect,
    chip2: StatusEffect,
    os: StatusEffect,
    gear: StatusEffect,
    coreLinkBonus: CoreLinkBonus | Record<string, never>,
    fullLinkBonus: FullLinkBonus | undefined,
    rankUpBonus: UnitRankUpBonus | undefined
  ) {
    const _fullLinkBonus: FullLinkBonus | Record<string, never> = fullLinkBonus ?? {};

    const baseHp             = calculateUnitBaseHp(unit, lv);
    const rankUpBonusSummary = sumValues(...pickValues(Effect.HpUp)(...Object.values(rankUpBonus ?? {})));
    const hpAddition         = sumValues(...pickValues(Effect.HpUp, Effect.HpDown)(hpEnhancement, chip1, chip2, os, gear));
    const hp                 = sumValues(baseHp, rankUpBonusSummary, hpAddition);

    this.hpCoreLinkBonus = Effect.HpUp in coreLinkBonus ? multiplyValue(hp, coreLinkBonus.hp_up) : ZeroIntegerValue;
    this.hpFullLinkBonus = Effect.HpUp in _fullLinkBonus ? multiplyValue(hp, _fullLinkBonus.hp_up) : ZeroIntegerValue;

    this.hpEffectValue = sumValues(hpAddition, this.hpCoreLinkBonus, this.hpFullLinkBonus);

    this.hp = sumValues(hp, this.hpCoreLinkBonus, this.hpFullLinkBonus);
  }
}

export class UnitAtkStatusParameter {

  readonly atk: MilliValue;
  readonly atkEffectValue: MilliValue;
  readonly atkCoreLinkBonus: MilliValue;
  readonly atkFullLinkBonus: MilliValue;

  constructor(
    unit: UnitNumber,
    lv: UnitLvValue,
    atkEnhancement: AtkEnhancementStatusEffect,
    chip1: StatusEffect,
    chip2: StatusEffect,
    os: StatusEffect,
    gear: StatusEffect,
    coreLinkBonus: CoreLinkBonus | Record<string, never>,
    fullLinkBonus: FullLinkBonus | undefined,
    rankUpBonus: UnitRankUpBonus | undefined
  ) {
    const _fullLinkBonus: FullLinkBonus | Record<string, never> = fullLinkBonus ?? {};

    const baseAtk            = calculateUnitBaseAtk(unit, lv);
    const rankUpBonusSummary = sumMilliValues(...pickValues(Effect.AtkUp)(...Object.values(rankUpBonus ?? {})));
    const atkAddition        = sumMilliValues(...pickValues(Effect.AtkUp, Effect.AtkDown)(atkEnhancement, chip1, chip2, os, gear));
    const atk                = sumMilliValues(baseAtk, rankUpBonusSummary, atkAddition);

    this.atkCoreLinkBonus = Effect.AtkUp in coreLinkBonus ? multiplyMilliValue(atk, coreLinkBonus.atk_up) : ZeroMilliValue;
    this.atkFullLinkBonus = Effect.AtkUp in _fullLinkBonus ? multiplyMilliValue(atk, _fullLinkBonus.atk_up) : ZeroMilliValue;

    this.atkEffectValue = sumMilliValues(atkAddition, this.atkCoreLinkBonus, this.atkFullLinkBonus);

    this.atk = sumMilliValues(atk, this.atkCoreLinkBonus, this.atkFullLinkBonus);
  }
}

export class UnitDefStatusParameter {

  readonly def: MilliValue;
  readonly defEffectValue: MilliValue;
  readonly defCoreLinkBonus: MilliValue;
  readonly defFullLinkBonus: MilliValue;

  constructor(
    unit: UnitNumber,
    lv: UnitLvValue,
    defEnhancement: DefEnhancementStatusEffect,
    chip1: StatusEffect,
    chip2: StatusEffect,
    os: StatusEffect,
    gear: StatusEffect,
    coreLinkBonus: CoreLinkBonus | Record<string, never>,
    fullLinkBonus: FullLinkBonus | undefined,
    rankUpBonus: UnitRankUpBonus | undefined
  ) {
    const _fullLinkBonus: FullLinkBonus | Record<string, never> = fullLinkBonus ?? {};

    const baseDef            = calculateUnitBaseDef(unit, lv);
    const rankUpBonusSummary = sumMilliValues(...pickValues(Effect.DefUp)(...Object.values(rankUpBonus ?? {})));
    const defAddition        = sumMilliValues(...pickValues(Effect.DefUp, Effect.DefDown)(defEnhancement, chip1, chip2, os, gear));
    const def                = sumMilliValues(baseDef, rankUpBonusSummary, defAddition);

    this.defCoreLinkBonus = Effect.DefUp in coreLinkBonus ? multiplyMilliValue(def, coreLinkBonus.def_up) : ZeroMilliValue;
    this.defFullLinkBonus = Effect.DefUp in _fullLinkBonus ? multiplyMilliValue(def, _fullLinkBonus.def_up) : ZeroMilliValue;

    this.defEffectValue = sumMilliValues(defAddition, this.defCoreLinkBonus, this.defFullLinkBonus);

    this.def = sumMilliValues(def, this.defCoreLinkBonus, this.defFullLinkBonus);
  }
}

export class UnitAccStatusParameter {

  readonly acc: MilliPercentageValue;
  readonly accEffectValue: MilliPercentageValue;

  constructor(
    unit: UnitNumber,
    accEnhancement: AccEnhancementStatusEffect,
    chip1: StatusEffect,
    chip2: StatusEffect,
    os: StatusEffect,
    gear: StatusEffect,
    coreLinkBonus: CoreLinkBonus | Record<string, never>,
    fullLinkBonus: FullLinkBonus | undefined,
    rankUpBonus: UnitRankUpBonus | undefined
  ) {
    const _fullLinkBonus: FullLinkBonus | Record<string, never> = fullLinkBonus ?? {};
    const rankUpBonusSummary = sumMilliPercentageValues(...pickValues(Effect.AccUp)(...Object.values(rankUpBonus ?? {})));

    this.accEffectValue = sumMilliPercentageValues(
      ...pickValues(Effect.AccUp, Effect.AccDown)(accEnhancement, chip1, chip2, os, gear),
      ...(Effect.AccUp in coreLinkBonus ? [coreLinkBonus.acc_up] : []),
      ...(Effect.AccUp in _fullLinkBonus ? [_fullLinkBonus.acc_up] : [])
    );

    this.acc = sumMilliPercentageValues(unitStatusData[unit].acc, rankUpBonusSummary, this.accEffectValue);
  }
}

export class UnitEvaStatusParameter {

  readonly eva: MilliPercentageValue;
  readonly evaEffectValue: MilliPercentageValue;

  constructor(
    unit: UnitNumber,
    evaEnhancement: EvaEnhancementStatusEffect,
    chip1: StatusEffect,
    chip2: StatusEffect,
    os: StatusEffect,
    gear: StatusEffect,
    coreLinkBonus: CoreLinkBonus | Record<string, never>,
    fullLinkBonus: FullLinkBonus | undefined,
    rankUpBonus: UnitRankUpBonus | undefined
  ) {
    const _fullLinkBonus: FullLinkBonus | Record<string, never> = fullLinkBonus ?? {};
    const rankUpBonusSummary = sumMilliPercentageValues(...pickValues(Effect.EvaUp)(...Object.values(rankUpBonus ?? {})));

    this.evaEffectValue = sumMilliPercentageValues(
      ...pickValues(Effect.EvaUp, Effect.EvaDown)(evaEnhancement, chip1, chip2, os, gear),
      ...(Effect.EvaUp in coreLinkBonus ? [coreLinkBonus.eva_up] : []),
      ...(Effect.EvaUp in _fullLinkBonus ? [_fullLinkBonus.eva_up] : [])
    );
    this.eva = sumMilliPercentageValues(unitStatusData[unit].eva, rankUpBonusSummary, this.evaEffectValue);
  }
}

export class UnitCriStatusParameter {

  readonly cri: MilliPercentageValue;
  readonly criEffectValue: MilliPercentageValue;

  constructor(
    unit: UnitNumber,
    criEnhancement: CriEnhancementStatusEffect,
    chip1: StatusEffect,
    chip2: StatusEffect,
    os: StatusEffect,
    gear: StatusEffect,
    coreLinkBonus: CoreLinkBonus | Record<string, never>,
    fullLinkBonus: FullLinkBonus | undefined,
    rankUpBonus: UnitRankUpBonus | undefined
  ) {
    const _fullLinkBonus: FullLinkBonus | Record<string, never> = fullLinkBonus ?? {};
    const rankUpBonusSummary = sumMilliPercentageValues(...pickValues(Effect.CriUp)(...Object.values(rankUpBonus ?? {})));

    this.criEffectValue = sumMilliPercentageValues(
      ...pickValues(Effect.CriUp, Effect.CriDown)(criEnhancement, chip1, chip2, os, gear),
      ...(Effect.CriUp in coreLinkBonus ? [coreLinkBonus.cri_up] : []),
      ...(Effect.CriUp in _fullLinkBonus ? [_fullLinkBonus.cri_up] : [])
    );
    this.cri = sumMilliPercentageValues(unitStatusData[unit].cri, rankUpBonusSummary, this.criEffectValue);
  }
}

export class UnitSpdStatusParameter {

  readonly spd: MicroValue;
  readonly spdEffectValue: MicroValue;

  constructor(
    unit: UnitNumber,
    chip1: StatusEffect,
    chip2: StatusEffect,
    os: StatusEffect,
    gear: StatusEffect,
    coreLinkBonus: CoreLinkBonus | Record<string, never>,
    fullLinkBonus: FullLinkBonus | undefined,
    rankUpBonus: UnitRankUpBonus | undefined
  ) {
    const _fullLinkBonus: FullLinkBonus | Record<string, never> = fullLinkBonus ?? {};
    const rankUpBonusSummary = sumMicroValues(...pickValues(Effect.SpdUp)(...Object.values(rankUpBonus ?? {})));

    this.spdEffectValue = sumMicroValues(
      ...pickValues(Effect.SpdUp, Effect.SpdDown)(chip1, chip2, os, gear),
      ...(Effect.SpdUp in coreLinkBonus ? [coreLinkBonus.spd_up] : []),
      ...(Effect.SpdUp in _fullLinkBonus ? [_fullLinkBonus.spd_up] : [])
    );
    this.spd = sumMicroValues(unitStatusData[unit].spd, rankUpBonusSummary, this.spdEffectValue);
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
    gear: StatusEffect,
    rankUpBonus: UnitRankUpBonus | undefined
  ) {
    const rankUpBonusSummary = sumMilliPercentageValues(...pickValues(...statusEffectKeys)(...Object.values(rankUpBonus ?? {})));
    this.resistEffectValue = sumMilliPercentageValues(...pickValues(...statusEffectKeys)(chip1, chip2, os, gear));
    this.resist = sumMilliPercentageValues(baseResist, rankUpBonusSummary, this.resistEffectValue);
  }
}

export class UnitFireResistStatusParameter extends UnitAttributeResistStatusParameter {
  constructor(unit: UnitNumber, chip1: StatusEffect, chip2: StatusEffect, os: StatusEffect, gear: StatusEffect, rankUpBonus: UnitRankUpBonus | undefined) {
    super([Effect.FireResistUp, Effect.FireResistDown], unitStatusData[unit].fireResist, chip1, chip2, os, gear, rankUpBonus);
  }
}

export class UnitIceResistStatusParameter extends UnitAttributeResistStatusParameter {
  constructor(unit: UnitNumber, chip1: StatusEffect, chip2: StatusEffect, os: StatusEffect, gear: StatusEffect, rankUpBonus: UnitRankUpBonus | undefined) {
    super([Effect.IceResistUp, Effect.IceResistDown], unitStatusData[unit].iceResist, chip1, chip2, os, gear, rankUpBonus);
  }
}

export class UnitElectricResistStatusParameter extends UnitAttributeResistStatusParameter {
  constructor(unit: UnitNumber, chip1: StatusEffect, chip2: StatusEffect, os: StatusEffect, gear: StatusEffect, rankUpBonus: UnitRankUpBonus | undefined) {
    super([Effect.ElectricResistUp, Effect.ElectricResistDown], unitStatusData[unit].electricResist, chip1, chip2, os, gear, rankUpBonus);
  }
}
