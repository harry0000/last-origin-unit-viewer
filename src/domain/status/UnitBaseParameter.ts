import { IntegerValue, MicroValue, MilliPercentageValue, MilliValue } from '../ValueUnit';
import { UnitLvValue } from './UnitLv';
import { UnitBasicInfo } from '../UnitBasicInfo';

import { unitStatusData } from '../../data/unitStatusData';
import { ParameterPerLevel } from './UnitStatusData';

function calculateAddition(_1: number, _90: number, lv: UnitLvValue): number {
  return ((_90 - _1) / 89) * (lv - 1);
}

function calculateIntegerParam(data: { 1: IntegerValue, 90: IntegerValue }, lv: UnitLvValue): IntegerValue {
  const base = data[1].value;
  return {
    value: base + Math.round(calculateAddition(base, data[90].value, lv))
  };
}

function calculateMilliValueParam(data: { 1: MilliValue, 90: MilliValue }, lv: UnitLvValue): MilliValue {
  const base = data[1].milliValue;
  const addition = calculateAddition(base, data[90].milliValue, lv);
  return {
    milliValue: base + (Math.round(addition / 1000) * 1000)
  };
}

class UnitBaseParameter {

  readonly #hp: ParameterPerLevel<keyof IntegerValue>;
  readonly #atk: ParameterPerLevel<keyof MilliValue>;
  readonly #def: ParameterPerLevel<keyof MilliValue>;
  readonly acc: MilliPercentageValue;
  readonly eva: MilliPercentageValue;
  readonly cri: MilliPercentageValue;
  readonly spd: MicroValue;

  readonly fireResist: MilliPercentageValue;
  readonly iceResist: MilliPercentageValue;
  readonly electricResist: MilliPercentageValue;

  constructor(unit: UnitBasicInfo) {
    const data = unitStatusData[unit.no];
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
