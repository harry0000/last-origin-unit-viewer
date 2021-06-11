import { useRecoilValue } from 'recoil';

import { EffectedParameter } from '../../component/status/StatusEffectsView';

import { selectedUnitStatusParameterState } from '../../state/status/unitStatusParameterState';

import { calcMicroValue, calcMilliPercentageValue, calcMilliValue } from '../../domain/ValueUnit';

export function useStatusEffectsSummary(parameter: EffectedParameter): number {
  const status = useRecoilValue(selectedUnitStatusParameterState);
  if (!status) {
    return 0;
  }

  switch (parameter) {
  case 'hp':             return status.hpEffectValue.value;
  case 'atk':            return calcMilliValue(status.atkEffectValue);
  case 'def':            return calcMilliValue(status.defEffectValue);
  case 'acc':            return calcMilliPercentageValue(status.accEffectValue);
  case 'eva':            return calcMilliPercentageValue(status.evaEffectValue);
  case 'cri':            return calcMilliPercentageValue(status.criEffectValue);
  case 'spd':            return calcMicroValue(status.spdEffectValue);
  case 'fireResist':     return calcMilliPercentageValue(status.fireResistEffectValue);
  case 'iceResist':      return calcMilliPercentageValue(status.iceResistEffectValue);
  case 'electricResist': return calcMilliPercentageValue(status.electricResistEffectValue);
  }
}
