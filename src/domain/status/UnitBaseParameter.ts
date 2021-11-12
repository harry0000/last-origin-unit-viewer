import { IntegerValue, MicroValue, MilliPercentageValue, MilliValue } from '../ValueUnit';
import { ParameterPerLevel } from './UnitStatusData';
import { UnitLvValue } from './UnitLv';
import { UnitNumber } from '../UnitBasicInfo';

import { unitStatusData } from '../../data/unitStatusData';

type IntegerValueParameterPerLevel = ParameterPerLevel<keyof IntegerValue>
type MilliValueParameterPerLevel = ParameterPerLevel<keyof MilliValue>

function calculateIntegerParam(data: IntegerValueParameterPerLevel, lv: UnitLvValue): IntegerValue {
  const base = data[1].value;
  const perLv = '90' in data ? (data[90].value - base) / 89 : (data[100].value - base) / 99;
  return {
    value: base + Math.round(perLv * (lv - 1))
  };
}

function calculateMilliValueParam(data: MilliValueParameterPerLevel, lv: UnitLvValue): MilliValue {
  const base = data[1].milliValue;
  const perLv = '90' in data ? (data[90].milliValue - base) / 89 : (data[100].milliValue - base) / 99;
  return {
    milliValue: base + Math.round(perLv * (lv - 1))
  };
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
    return calculateIntegerParam(this.#hp, lv);
  }

  atk(lv: UnitLvValue): MilliValue {
    return calculateMilliValueParam(this.#atk, lv);
  }

  def(lv: UnitLvValue): MilliValue {
    return calculateMilliValueParam(this.#def, lv);
  }
}

export default UnitBaseParameter;
