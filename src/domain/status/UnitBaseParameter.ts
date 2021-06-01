import { IntegerValue, MicroValue, MilliPercentageValue, MilliValue } from '../ValueUnit';
import { UnitLvValue } from './UnitLv';
import { UnitNumber } from '../UnitBasicInfo';

import { unitStatusData } from '../../data/unitStatusData';

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

  constructor(no: UnitNumber, lv: UnitLvValue) {
    this.hp = calculateIntegerParam(unitStatusData[no].hp, lv);
    this.atk = calculateMilliValueParam(unitStatusData[no].atk, lv);
    this.def = calculateMilliValueParam(unitStatusData[no].def, lv);

    this.acc = unitStatusData[no].acc;
    this.eva = unitStatusData[no].eva;
    this.cri = unitStatusData[no].cri;
    this.spd = unitStatusData[no].spd;

    this.fireResist     = unitStatusData[no].fireResist;
    this.iceResist      = unitStatusData[no].iceResist;
    this.electricResist = unitStatusData[no].electricResist;
  }

}

export default UnitBaseParameter;
