import { useRecoilValue } from 'recoil';

import { DamageAttribute } from '../../../domain/skill/UnitSkillData';
import { UnitBasicInfo } from '../../../domain/UnitBasicInfo';
import { calcMicroValue, calcMilliPercentageValue, calcMilliValue } from '../../../domain/ValueUnit';

import { EnhanceableStatus } from './UnitLvStatusState';
import {
  accEffectValue,
  atkEffectValue,
  criEffectValue,
  defEffectValue,
  electricResistEffectValue,
  evaEffectValue,
  fireResistEffectValue,
  hpEffectValue,
  iceResistEffectValue,
  selectedUnitAcc,
  selectedUnitAtk,
  selectedUnitCri,
  selectedUnitDef,
  selectedUnitElectricResist,
  selectedUnitEva,
  selectedUnitFireResist,
  selectedUnitHp,
  selectedUnitIceResist,
  selectedUnitSpd,
  spdEffectValue
} from './UnitStatusParameterState';
import { useSelectedUnit } from '../../selector/UnitSelectorHook';

import { EffectedParameter } from '../../../component/status/parameters/StatusEffectsView';
import {
  appendPercentage,
  formatMicroValue,
  formatMilliPercentage,
  formatMilliValue,
  formatResistPercentage
} from '../../../component/status/parameters/UnitStatusParameterFormatter';

export function useStatusParameter(status: EnhanceableStatus | 'spd'): string {
  const selected = useSelectedUnit()?.no;
  switch (status) {
  case 'hp':  return `${useRecoilValue(selectedUnitHp(selected)).value}`;
  case 'atk': return formatMilliValue(useRecoilValue(selectedUnitAtk(selected)));
  case 'def': return formatMilliValue(useRecoilValue(selectedUnitDef(selected)));
  case 'acc': return formatMilliPercentage(useRecoilValue(selectedUnitAcc(selected)));
  case 'eva': return formatMilliPercentage(useRecoilValue(selectedUnitEva(selected)));
  case 'cri': return formatMilliPercentage(useRecoilValue(selectedUnitCri(selected)));
  case 'spd': return formatMicroValue(useRecoilValue(selectedUnitSpd(selected)));
  }
}

export function useSelectedUnitAttributeResistParameter(attribute: DamageAttribute): string {
  const selected = useSelectedUnit()?.no;
  const value = (() => {
    switch (attribute) {
    case DamageAttribute.Fire:     return useRecoilValue(selectedUnitFireResist(selected));
    case DamageAttribute.Ice:      return useRecoilValue(selectedUnitIceResist(selected));
    case DamageAttribute.Electric: return useRecoilValue(selectedUnitElectricResist(selected));
    }
  })();

  return appendPercentage(formatResistPercentage(value));
}

export function useStatusEffectsSummary(parameter: EffectedParameter, { no }: UnitBasicInfo): number {
  switch (parameter) {
  case 'hp': return useRecoilValue(hpEffectValue(no)).value;
  case 'atk': return calcMilliValue(useRecoilValue(atkEffectValue(no)));
  case 'def': return calcMilliValue(useRecoilValue(defEffectValue(no)));
  case 'acc': return calcMilliPercentageValue(useRecoilValue(accEffectValue(no)));
  case 'eva': return calcMilliPercentageValue(useRecoilValue(evaEffectValue(no)));
  case 'cri': return calcMilliPercentageValue(useRecoilValue(criEffectValue(no)));
  case 'spd': return calcMicroValue(useRecoilValue(spdEffectValue(no)));
  case 'fireResist':     return calcMilliPercentageValue(useRecoilValue(fireResistEffectValue(no)));
  case 'iceResist':      return calcMilliPercentageValue(useRecoilValue(iceResistEffectValue(no)));
  case 'electricResist': return calcMilliPercentageValue(useRecoilValue(electricResistEffectValue(no)));
  }
}
