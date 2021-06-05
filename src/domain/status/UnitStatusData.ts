import { UnitNumber } from '../UnitBasicInfo';
import { IntegerValue, MicroValue, MilliPercentageValue, MilliValue, ValueUnit } from '../ValueUnit';

export type ParameterPerLevel<T extends Exclude<ValueUnit, 'microValue' | 'milliPercentage'>> = {
  1: { [key in T]: number },
  90: { [key in T]: number }
}

type GrowParameter = Readonly<{
  hp: ParameterPerLevel<keyof IntegerValue>,
  atk: ParameterPerLevel<keyof MilliValue>,
  def: ParameterPerLevel<keyof MilliValue>
}>

type FixedParameter = Readonly<{
  acc: MilliPercentageValue
  eva: MilliPercentageValue,
  cri: MilliPercentageValue,
  spd: MicroValue,
  fireResist: MilliPercentageValue,
  iceResist: MilliPercentageValue,
  electricResist: MilliPercentageValue
}>

export type UnitStatusData = { [key in UnitNumber]: GrowParameter & FixedParameter }
