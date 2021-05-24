import { UnitNumber } from '../UnitBasicInfo';
import { IntegerValue, MicroValue, MilliPercentageValue, ValueUnit } from '../EffectValue';

type ParameterPerLevel<T extends Exclude<ValueUnit, 'microValue' | 'milliPercentage'>> = {
  1: { [key in T]: number },
  90: { [key in T]: number }
}

type GrowParameter = Readonly<{
  hp: ParameterPerLevel<'value'>,
  atk: ParameterPerLevel<'milliValue'>,
  def: ParameterPerLevel<'milliValue'>
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
