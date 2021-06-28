import { useRecoilValue, useSetRecoilState } from 'recoil';

import {
  selectedUnitAccStatusParameterState,
  selectedUnitAtkStatusParameterState,
  selectedUnitCriStatusParameterState,
  selectedUnitDefStatusParameterState,
  selectedUnitEvaStatusParameterState,
  selectedUnitHpStatusParameterState,
  selectedUnitSpdStatusParameterState
} from '../../state/status/selectedUnitStatusParameterState';
import {
  decrementUnitStatusLv,
  incrementUnitStatusLv,
  selectedUnitStatusCanDecrementState,
  selectedUnitStatusCanIncrementState,
  selectedUnitStatusEnhancementLvState
} from '../../state/status/unitLvStatusState';

import { EnhanceableParameterType } from '../../component/status/UnitStatusParameterRow';
import {
  formatMicroValue,
  formatMilliPercentage,
  formatMilliValue
} from '../../component/status/UnitStatusParameterFormatter';

export function useStatusParameter(parameter: EnhanceableParameterType | 'spd'): string {
  switch (parameter) {
  case 'hp':  return `${useRecoilValue(selectedUnitHpStatusParameterState)?.hp.value ?? '0'}`;
  case 'atk': return formatMilliValue(useRecoilValue(selectedUnitAtkStatusParameterState)?.atk);
  case 'def': return formatMilliValue(useRecoilValue(selectedUnitDefStatusParameterState)?.def);
  case 'acc': return formatMilliPercentage(useRecoilValue(selectedUnitAccStatusParameterState)?.acc);
  case 'eva': return formatMilliPercentage(useRecoilValue(selectedUnitEvaStatusParameterState)?.eva);
  case 'cri': return formatMilliPercentage(useRecoilValue(selectedUnitCriStatusParameterState)?.cri);
  case 'spd': return formatMicroValue(useRecoilValue(selectedUnitSpdStatusParameterState)?.spd);
  }
}

export function useStatusParameterEnhancedLv(parameter: EnhanceableParameterType): number {
  return useRecoilValue(selectedUnitStatusEnhancementLvState(parameter)) ?? 0;
}

export function useStatusParameterControl(
  parameter: EnhanceableParameterType
): [incrementDisabled: boolean, decrementDisabled: boolean, increment: () => void, decrement: () => void] {
  const incrementDisabled = !useRecoilValue(selectedUnitStatusCanIncrementState(parameter));
  const decrementDisabled = !useRecoilValue(selectedUnitStatusCanDecrementState(parameter));
  const increment = useSetRecoilState(incrementUnitStatusLv(parameter));
  const decrement = useSetRecoilState(decrementUnitStatusLv(parameter));

  return [
    incrementDisabled,
    decrementDisabled,
    () => { increment(); },
    () => { decrement(); }
  ];
}
