import { useRecoilState, useRecoilValue } from 'recoil';
import { selectedUnitEnhancementStatusState } from '../../state/status/unitEnhancementStatusState';
import { selectedUnitStatusParameterState } from '../../state/status/unitStatusParameterState';

import { EnhanceableParameterType } from '../../component/status/UnitStatusParameterRow';
import {
  formatMicroValue,
  formatMilliPercentage,
  formatMilliValue
} from '../../component/status/UnitStatusParameterFormatter';

export function useStatusParameter(parameter: EnhanceableParameterType | 'spd'): string {
  const status = useRecoilValue(selectedUnitStatusParameterState);
  switch (parameter) {
  case 'hp':  return `${status?.hp.value ?? '0'}`;
  case 'atk': return formatMilliValue(status?.atk);
  case 'def': return formatMilliValue(status?.def);
  case 'acc': return formatMilliPercentage(status?.acc);
  case 'eva': return formatMilliPercentage(status?.eva);
  case 'cri': return formatMilliPercentage(status?.cri);
  case 'spd': return formatMicroValue(status?.spd);
  }
}

export function useStatusParameterEnhancedLv(parameter: EnhanceableParameterType): number | undefined {
  const enhancement = useRecoilValue(selectedUnitEnhancementStatusState);
  switch (parameter) {
  case 'hp':  return enhancement?.hpLv;
  case 'atk': return enhancement?.atkLv;
  case 'def': return enhancement?.defLv;
  case 'acc': return enhancement?.accLv;
  case 'eva': return enhancement?.evaLv;
  case 'cri': return enhancement?.criLv;
  }
}

export function useStatusParameterControl(
  parameter: EnhanceableParameterType
): [upDisabled: boolean, downDisabled: boolean, increment: () => void, decrement: () => void] {
  const [status, setter] = useRecoilState(selectedUnitEnhancementStatusState);

  switch (parameter) {
  case 'hp': return [!status?.enableUpHpLv, !status?.enableDownHpLv, () => setter(s => s?.upHpLv()), () => setter(s => s?.downHpLv())];
  case 'atk': return [!status?.enableUpAtkLv, !status?.enableDownAtkLv, () => setter(s => s?.upAtkLv()), () => setter(s => s?.downAtkLv())];
  case 'def': return [!status?.enableUpDefLv, !status?.enableDownDefLv, () => setter(s => s?.upDefLv()), () => setter(s => s?.downDefLv())];
  case 'acc': return [!status?.enableUpAccLv, !status?.enableDownAccLv, () => setter(s => s?.upAccLv()), () => setter(s => s?.downAccLv())];
  case 'eva': return [!status?.enableUpEvaLv, !status?.enableDownEvaLv, () => setter(s => s?.upEvaLv()), () => setter(s => s?.downEvaLv())];
  case 'cri': return [!status?.enableUpCriLv, !status?.enableDownCriLv, () => setter(s => s?.upCriLv()), () => setter(s => s?.downCriLv())];
  }
}
