import { useRecoilValue } from 'recoil';

import { DamageAttribute } from '../../../domain/skill/UnitSkillData';
import { UnitBasicInfo } from '../../../domain/UnitBasicInfo';
import { calcMicroValue, calcMilliPercentageValue, calcMilliValue } from '../../../domain/ValueUnit';

import { EnhanceableStatus } from './UnitLvStatusState';
import { useSelectedUnit } from '../../selector/UnitSelectorHook';

import { EffectedParameter } from '../../../component/status/parameters/StatusEffectsView';
import { unitStatusParameterState } from './UnitStatusParameterState';

const {
  unitHpStatusParameterState,
  unitAtkStatusParameterState,
  unitDefStatusParameterState,
  unitAccStatusParameterState,
  unitEvaStatusParameterState,
  unitCriStatusParameterState,
  unitSpdStatusParameterState,
  unitFireResistStatusParameterState,
  unitIceResistStatusParameterState,
  unitElectricResistStatusParameterState,
  selectedUnitParameterAsText,
  selectedUnitResistParameterAsText
} = unitStatusParameterState;

export function useStatusParameter(status: EnhanceableStatus | 'spd'): string {
  const selected = useSelectedUnit()?.no;
  return useRecoilValue(selectedUnitParameterAsText(status, selected));
}

export function useSelectedUnitAttributeResistParameter(attribute: DamageAttribute): string {
  const selected = useSelectedUnit()?.no;
  return useRecoilValue(selectedUnitResistParameterAsText(attribute, selected));
}

export function useStatusEffectsSummary(parameter: EffectedParameter, { no }: UnitBasicInfo): number {
  switch (parameter) {
  case 'hp': return useRecoilValue(unitHpStatusParameterState(no)).hpEffectValue.value;
  case 'atk': return calcMilliValue(useRecoilValue(unitAtkStatusParameterState(no)).atkEffectValue);
  case 'def': return calcMilliValue(useRecoilValue(unitDefStatusParameterState(no)).defEffectValue);
  case 'acc': return calcMilliPercentageValue(useRecoilValue(unitAccStatusParameterState(no)).accEffectValue);
  case 'eva': return calcMilliPercentageValue(useRecoilValue(unitEvaStatusParameterState(no)).evaEffectValue);
  case 'cri': return calcMilliPercentageValue(useRecoilValue(unitCriStatusParameterState(no)).criEffectValue);
  case 'spd': return calcMicroValue(useRecoilValue(unitSpdStatusParameterState(no)).spdEffectValue);
  case 'fireResist':     return calcMilliPercentageValue(useRecoilValue(unitFireResistStatusParameterState(no)).resistEffectValue);
  case 'iceResist':      return calcMilliPercentageValue(useRecoilValue(unitIceResistStatusParameterState(no)).resistEffectValue);
  case 'electricResist': return calcMilliPercentageValue(useRecoilValue(unitElectricResistStatusParameterState(no)).resistEffectValue);
  }
}
