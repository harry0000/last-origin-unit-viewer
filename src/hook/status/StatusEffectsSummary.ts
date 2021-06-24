import { useRecoilValue } from 'recoil';

import { EffectedParameter } from '../../component/status/StatusEffectsView';

import { calcMicroValue, calcMilliPercentageValue, calcMilliValue } from '../../domain/ValueUnit';

import {
  selectedUnitAccStatusParameterState,
  selectedUnitAtkStatusParameterState,
  selectedUnitCriStatusParameterState,
  selectedUnitDefStatusParameterState,
  selectedUnitElectricResistStatusParameterState,
  selectedUnitEvaStatusParameterState,
  selectedUnitFireResistStatusParameterState,
  selectedUnitHpStatusParameterState,
  selectedUnitIceResistStatusParameterState,
  selectedUnitSpdStatusParameterState
} from '../../state/status/selectedUnitStatusParameterState';

export function useStatusEffectsSummary(parameter: EffectedParameter): number {
  switch (parameter) {
  case 'hp':
    return useRecoilValue(selectedUnitHpStatusParameterState)?.hpEffectValue?.value ?? 0;
  case 'atk': {
    const v = useRecoilValue(selectedUnitAtkStatusParameterState)?.atkEffectValue;
    return v ? calcMilliValue(v) : 0;
  }
  case 'def': {
    const v = useRecoilValue(selectedUnitDefStatusParameterState)?.defEffectValue;
    return v ? calcMilliValue(v) : 0;
  }
  case 'acc': {
    const v = useRecoilValue(selectedUnitAccStatusParameterState)?.accEffectValue;
    return v ? calcMilliPercentageValue(v) : 0;
  }
  case 'eva': {
    const v = useRecoilValue(selectedUnitEvaStatusParameterState)?.evaEffectValue;
    return v ? calcMilliPercentageValue(v) : 0;
  }
  case 'cri': {
    const v = useRecoilValue(selectedUnitCriStatusParameterState)?.criEffectValue;
    return v ? calcMilliPercentageValue(v) : 0;
  }
  case 'spd': {
    const v = useRecoilValue(selectedUnitSpdStatusParameterState)?.spdEffectValue;
    return v ? calcMicroValue(v) : 0;
  }
  case 'fireResist': {
    const v = useRecoilValue(selectedUnitFireResistStatusParameterState)?.resistEffectValue;
    return v ? calcMilliPercentageValue(v) : 0;
  }
  case 'iceResist': {
    const v = useRecoilValue(selectedUnitIceResistStatusParameterState)?.resistEffectValue;
    return v ? calcMilliPercentageValue(v) : 0;
  }
  case 'electricResist': {
    const v = useRecoilValue(selectedUnitElectricResistStatusParameterState)?.resistEffectValue;
    return v ? calcMilliPercentageValue(v) : 0;
  }
  }
}
