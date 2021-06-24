import { selector } from 'recoil';

import {
  UnitAccStatusParameter,
  UnitAtkStatusParameter,
  UnitCriStatusParameter,
  UnitDefStatusParameter,
  UnitElectricResistStatusParameter,
  UnitEvaStatusParameter,
  UnitFireResistStatusParameter,
  UnitHpStatusParameter,
  UnitIceResistStatusParameter,
  UnitSpdStatusParameter
} from '../../domain/status/UnitStatusParameter';

import { selectedUnitBasicInfoState } from '../selector/unitSelectorState';
import {
  unitAccStatusParameterState,
  unitAtkStatusParameterState,
  unitCriStatusParameterState,
  unitDefStatusParameterState,
  unitElectricResistStatusParameterState,
  unitEvaStatusParameterState,
  unitFireResistStatusParameterState,
  unitHpStatusParameterState,
  unitIceResistStatusParameterState,
  unitSpdStatusParameterState
} from './unitStatusParameterState';

export const selectedUnitHpStatusParameterState = selector<UnitHpStatusParameter | undefined>({
  key: 'selectedUnitHpStatusParameterState',
  get: ({ get }) => {
    const selected = get(selectedUnitBasicInfoState);
    return selected && get(unitHpStatusParameterState(selected));
  }
});

export const selectedUnitAtkStatusParameterState = selector<UnitAtkStatusParameter | undefined>({
  key: 'selectedUnitAtkStatusParameterState',
  get: ({ get }) => {
    const selected = get(selectedUnitBasicInfoState);
    return selected && get(unitAtkStatusParameterState(selected));
  }
});

export const selectedUnitDefStatusParameterState = selector<UnitDefStatusParameter | undefined>({
  key: 'selectedUnitDefStatusParameterState',
  get: ({ get }) => {
    const selected = get(selectedUnitBasicInfoState);
    return selected && get(unitDefStatusParameterState(selected));
  }
});

export const selectedUnitAccStatusParameterState = selector<UnitAccStatusParameter | undefined>({
  key: 'selectedUnitAccStatusParameterState',
  get: ({ get }) => {
    const selected = get(selectedUnitBasicInfoState);
    return selected && get(unitAccStatusParameterState(selected));
  }
});

export const selectedUnitEvaStatusParameterState = selector<UnitEvaStatusParameter | undefined>({
  key: 'selectedUnitEvaStatusParameterState',
  get: ({ get }) => {
    const selected = get(selectedUnitBasicInfoState);
    return selected && get(unitEvaStatusParameterState(selected));
  }
});

export const selectedUnitCriStatusParameterState = selector<UnitCriStatusParameter | undefined>({
  key: 'selectedUnitCriStatusParameterState',
  get: ({ get }) => {
    const selected = get(selectedUnitBasicInfoState);
    return selected && get(unitCriStatusParameterState(selected));
  }
});

export const selectedUnitSpdStatusParameterState = selector<UnitSpdStatusParameter | undefined>({
  key: 'selectedUnitSpdStatusParameterState',
  get: ({ get }) => {
    const selected = get(selectedUnitBasicInfoState);
    return selected && get(unitSpdStatusParameterState(selected));
  }
});

export const selectedUnitFireResistStatusParameterState = selector<UnitFireResistStatusParameter | undefined>({
  key: 'selectedUnitFireResistStatusParameterState',
  get: ({ get }) => {
    const selected = get(selectedUnitBasicInfoState);
    return selected && get(unitFireResistStatusParameterState(selected));
  }
});

export const selectedUnitIceResistStatusParameterState = selector<UnitIceResistStatusParameter | undefined>({
  key: 'selectedUnitIceResistStatusParameterState',
  get: ({ get }) => {
    const selected = get(selectedUnitBasicInfoState);
    return selected && get(unitIceResistStatusParameterState(selected));
  }
});

export const selectedUnitElectricResistStatusParameterState = selector<UnitElectricResistStatusParameter | undefined>({
  key: 'selectedUnitElectricResistStatusParameterState',
  get: ({ get }) => {
    const selected = get(selectedUnitBasicInfoState);
    return selected && get(unitElectricResistStatusParameterState(selected));
  }
});
