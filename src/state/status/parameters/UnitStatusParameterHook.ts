import { useRecoilValue } from 'recoil';

import { DamageAttribute } from '../../../domain/skill/UnitSkillData';

import { EnhanceableStatus } from './UnitLvStatusState';
import {
  selectedUnitAccState,
  selectedUnitAtkState,
  selectedUnitCriState,
  selectedUnitDefState,
  selectedUnitElectricResistState,
  selectedUnitEvaState,
  selectedUnitFireResistState,
  selectedUnitHpState,
  selectedUnitIceResistState,
  selectedUnitSpdState,
  unitStatusEffectsSummary
} from './UnitStatusParameterState';
import { useSelectedUnit } from '../../selector/UnitSelectorHook';

import { AffectableStatus } from '../../../component/status/parameters/StatusEffectsView';
import {
  UnitStatusEffectValue,
  buildUnitStatusEffectsSummaryViewModel
} from '../../../component/status/parameters/StatusEffectsSummaryViewModel';
import {
  appendPercentage,
  formatUnitSpdValue,
  formatMilliPercentage,
  formatMilliValue,
  formatResistPercentage
} from '../../../component/status/parameters/UnitStatusParameterFormatter';

export function useStatusParameter(status: EnhanceableStatus | 'spd'): string {
  const selected = useSelectedUnit()?.no;
  switch (status) {
  case 'hp':  return `${useRecoilValue(selectedUnitHpState(selected)).value}`;
  case 'atk': return formatMilliValue(useRecoilValue(selectedUnitAtkState(selected)));
  case 'def': return formatMilliValue(useRecoilValue(selectedUnitDefState(selected)));
  case 'acc': return formatMilliPercentage(useRecoilValue(selectedUnitAccState(selected)));
  case 'eva': return formatMilliPercentage(useRecoilValue(selectedUnitEvaState(selected)));
  case 'cri': return formatMilliPercentage(useRecoilValue(selectedUnitCriState(selected)));
  case 'spd': return formatUnitSpdValue(useRecoilValue(selectedUnitSpdState(selected)));
  }
}

export function useAttributeResistParameter(attribute: DamageAttribute): string {
  const selected = useSelectedUnit()?.no;
  const value = (() => {
    switch (attribute) {
    case DamageAttribute.Fire:     return useRecoilValue(selectedUnitFireResistState(selected));
    case DamageAttribute.Ice:      return useRecoilValue(selectedUnitIceResistState(selected));
    case DamageAttribute.Electric: return useRecoilValue(selectedUnitElectricResistState(selected));
    }
  })();

  return appendPercentage(formatResistPercentage(value));
}

export function useStatusEffectsSummary(parameter: AffectableStatus): UnitStatusEffectValue {
  const selected = useSelectedUnit()?.no;
  const summary = useRecoilValue(unitStatusEffectsSummary(parameter, selected));

  return buildUnitStatusEffectsSummaryViewModel(parameter, summary ?? 0);
}
