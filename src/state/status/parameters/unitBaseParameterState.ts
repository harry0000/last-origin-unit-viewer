import { atomFamily, selectorFamily } from 'recoil';

import { IntegerValue, MicroValue, MilliPercentageValue, MilliValue } from '../../../domain/ValueUnit';
import UnitBaseParameter from '../../../domain/status/UnitBaseParameter';
import { UnitNumber } from '../../../domain/UnitBasicInfo';

import { unitLvState } from './unitLvStatusState';

const unitBaseParameterState = atomFamily<UnitBaseParameter, UnitNumber>({
  key: 'unitBaseParameterState',
  default: (unit) => new UnitBaseParameter(unit)
});

export const unitBaseHpState = selectorFamily<IntegerValue, UnitNumber>({
  key: 'unitBaseHpState',
  get: (unit) => ({ get }) => get(unitBaseParameterState(unit)).hp(get(unitLvState(unit)))
});

export const unitBaseAtkState = selectorFamily<MilliValue, UnitNumber>({
  key: 'unitBaseAtkState',
  get: (unit) => ({ get }) => get(unitBaseParameterState(unit)).atk(get(unitLvState(unit)))
});

export const unitBaseDefState = selectorFamily<MilliValue, UnitNumber>({
  key: 'unitBaseDefState',
  get: (unit) => ({ get }) => get(unitBaseParameterState(unit)).def(get(unitLvState(unit)))
});

export const unitBaseAccState = selectorFamily<MilliPercentageValue, UnitNumber>({
  key: 'unitBaseAccState',
  get: (unit) => ({ get }) => get(unitBaseParameterState(unit)).acc
});

export const unitBaseEvaState = selectorFamily<MilliPercentageValue, UnitNumber>({
  key: 'unitBaseEvaState',
  get: (unit) => ({ get }) => get(unitBaseParameterState(unit)).eva
});

export const unitBaseCriState = selectorFamily<MilliPercentageValue, UnitNumber>({
  key: 'unitBaseCriState',
  get: (unit) => ({ get }) => get(unitBaseParameterState(unit)).cri
});

export const unitBaseSpdState = selectorFamily<MicroValue, UnitNumber>({
  key: 'unitBaseSpdState',
  get: (unit) => ({ get }) => get(unitBaseParameterState(unit)).spd
});

export const unitBaseFireResistState = selectorFamily<MilliPercentageValue, UnitNumber>({
  key: 'unitBaseFireResistState',
  get: (unit) => ({ get }) => get(unitBaseParameterState(unit)).fireResist
});

export const unitBaseIceResistState = selectorFamily<MilliPercentageValue, UnitNumber>({
  key: 'unitBaseIceResistState',
  get: (unit) => ({ get }) => get(unitBaseParameterState(unit)).iceResist
});

export const unitBaseElectricResistState = selectorFamily<MilliPercentageValue, UnitNumber>({
  key: 'unitBaseElectricResistState',
  get: (unit) => ({ get }) => get(unitBaseParameterState(unit)).electricResist
});
