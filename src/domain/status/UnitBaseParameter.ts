import { IntegerValue, MicroValue, MilliPercentageValue, MilliValue } from '../ValueUnit';
import { ParameterPerLevel } from './UnitStatusData';
import { UnitLvValue } from './UnitLv';
import { UnitNumber } from '../UnitBasicInfo';

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

class UnitBaseParameter {

  readonly #hp: IntegerValueParameterPerLevel;
  readonly #atk: MilliValueParameterPerLevel;
  readonly #def: MilliValueParameterPerLevel;
  readonly acc: MilliPercentageValue;
  readonly eva: MilliPercentageValue;
  readonly cri: MilliPercentageValue;
  readonly spd: MicroValue;

  readonly fireResist: MilliPercentageValue;
  readonly iceResist: MilliPercentageValue;
  readonly electricResist: MilliPercentageValue;

  constructor(unit: UnitNumber) {
    const data = unitStatusData[unit];
    this.#hp = data.hp;
    this.#atk = data.atk;
    this.#def = data.def;

    this.acc = data.acc;
    this.eva = data.eva;
    this.cri = data.cri;
    this.spd = data.spd;

    this.fireResist     = data.fireResist;
    this.iceResist      = data.iceResist;
    this.electricResist = data.electricResist;
  }

  hp(lv: UnitLvValue): IntegerValue {
    return calculateParam('value', this.#hp, lv);
  }

  atk(lv: UnitLvValue): MilliValue {
    return calculateParam('milliValue', this.#atk, lv);
  }

  def(lv: UnitLvValue): MilliValue {
    return calculateParam('milliValue', this.#def, lv);
  }
}

export default UnitBaseParameter;
