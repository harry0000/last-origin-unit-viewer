import { selectorFamily, useRecoilValue } from 'recoil';

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
import { UnitBasicInfo, UnitNumber } from '../../domain/UnitBasicInfo';

import { coreLinkBonusEffectsState, fullLinkBonusEffectState } from '../corelink/unitCoreLinkState';
import {
  EnhanceableStatus,
  unitAccEnhancementStatusEffectState,
  unitAtkEnhancementStatusEffectState,
  unitCriEnhancementStatusEffectState,
  unitDefEnhancementStatusEffectState,
  unitEvaEnhancementStatusEffectState,
  unitHpEnhancementStatusEffectState,
  unitRankUpBonusEffectState
} from './unitLvStatusState';
import {
  unitBaseAccState,
  unitBaseAtkState,
  unitBaseCriState,
  unitBaseDefState,
  unitBaseElectricResistState,
  unitBaseEvaState,
  unitBaseFireResistState,
  unitBaseHpState,
  unitBaseIceResistState,
  unitBaseSpdState
} from './unitBaseParameterState';
import {
  unitChip1EquipmentStatusEffectsState,
  unitChip2EquipmentStatusEffectsState,
  unitGearEquipmentStatusEffectsState,
  unitOsEquipmentStatusEffectsState
} from '../equipment/unitEquipmentState';

import { EffectedParameter } from '../../component/status/StatusEffectsView';
import { calcMicroValue, calcMilliPercentageValue, calcMilliValue, MilliPercentageValue } from '../../domain/ValueUnit';
import {
  formatMicroValue,
  formatMilliPercentage,
  formatMilliValue
} from '../../component/status/UnitStatusParameterFormatter';

export const unitHpStatusParameterState = selectorFamily<UnitHpStatusParameter, UnitNumber>({
  key: 'unitHpStatusParameterState',
  get: (unit) => ({ get }) => {
    return new UnitHpStatusParameter(
      get(unitBaseHpState(unit)),
      get(unitHpEnhancementStatusEffectState(unit)),
      get(unitChip1EquipmentStatusEffectsState(unit)),
      get(unitChip2EquipmentStatusEffectsState(unit)),
      get(unitOsEquipmentStatusEffectsState(unit)),
      get(unitGearEquipmentStatusEffectsState(unit)),
      get(coreLinkBonusEffectsState(unit)),
      get(fullLinkBonusEffectState(unit)),
      get(unitRankUpBonusEffectState(unit))
    );
  }
});

export const unitAtkStatusParameterState = selectorFamily<UnitAtkStatusParameter, UnitNumber>({
  key: 'unitAtkStatusParameterState',
  get: (unit) => ({ get }) => {
    return new UnitAtkStatusParameter(
      get(unitBaseAtkState(unit)),
      get(unitAtkEnhancementStatusEffectState(unit)),
      get(unitChip1EquipmentStatusEffectsState(unit)),
      get(unitChip2EquipmentStatusEffectsState(unit)),
      get(unitOsEquipmentStatusEffectsState(unit)),
      get(unitGearEquipmentStatusEffectsState(unit)),
      get(coreLinkBonusEffectsState(unit)),
      get(unitRankUpBonusEffectState(unit))
    );
  }
});

export const unitDefStatusParameterState = selectorFamily<UnitDefStatusParameter, UnitNumber>({
  key: 'unitDefStatusParameterState',
  get: (unit) => ({ get }) => {
    return new UnitDefStatusParameter(
      get(unitBaseDefState(unit)),
      get(unitDefEnhancementStatusEffectState(unit)),
      get(unitChip1EquipmentStatusEffectsState(unit)),
      get(unitChip2EquipmentStatusEffectsState(unit)),
      get(unitOsEquipmentStatusEffectsState(unit)),
      get(unitGearEquipmentStatusEffectsState(unit)),
      get(coreLinkBonusEffectsState(unit)),
      get(unitRankUpBonusEffectState(unit))
    );
  }
});

const unitAccStatusParameterState = selectorFamily<UnitAccStatusParameter, UnitNumber>({
  key: 'unitAccStatusParameterState',
  get: (unit) => ({ get }) => {
    return new UnitAccStatusParameter(
      get(unitBaseAccState(unit)),
      get(unitAccEnhancementStatusEffectState(unit)),
      get(unitChip1EquipmentStatusEffectsState(unit)),
      get(unitChip2EquipmentStatusEffectsState(unit)),
      get(unitOsEquipmentStatusEffectsState(unit)),
      get(unitGearEquipmentStatusEffectsState(unit)),
      get(coreLinkBonusEffectsState(unit)),
      get(fullLinkBonusEffectState(unit)),
      get(unitRankUpBonusEffectState(unit))
    );
  }
});

const unitEvaStatusParameterState = selectorFamily<UnitEvaStatusParameter, UnitNumber>({
  key: 'unitEvaStatusParameterState',
  get: (unit) => ({ get }) => {
    return new UnitEvaStatusParameter(
      get(unitBaseEvaState(unit)),
      get(unitEvaEnhancementStatusEffectState(unit)),
      get(unitChip1EquipmentStatusEffectsState(unit)),
      get(unitChip2EquipmentStatusEffectsState(unit)),
      get(unitOsEquipmentStatusEffectsState(unit)),
      get(unitGearEquipmentStatusEffectsState(unit)),
      get(coreLinkBonusEffectsState(unit)),
      get(fullLinkBonusEffectState(unit)),
      get(unitRankUpBonusEffectState(unit))
    );
  }
});

const unitCriStatusParameterState = selectorFamily<UnitCriStatusParameter, UnitNumber>({
  key: 'unitCriStatusParameterState',
  get: (unit) => ({ get }) => {
    return new UnitCriStatusParameter(
      get(unitBaseCriState(unit)),
      get(unitCriEnhancementStatusEffectState(unit)),
      get(unitChip1EquipmentStatusEffectsState(unit)),
      get(unitChip2EquipmentStatusEffectsState(unit)),
      get(unitOsEquipmentStatusEffectsState(unit)),
      get(unitGearEquipmentStatusEffectsState(unit)),
      get(coreLinkBonusEffectsState(unit)),
      get(fullLinkBonusEffectState(unit)),
      get(unitRankUpBonusEffectState(unit))
    );
  }
});

const unitSpdStatusParameterState = selectorFamily<UnitSpdStatusParameter, UnitNumber>({
  key: 'unitSpdStatusParameterState',
  get: (unit) => ({ get }) => {
    return new UnitSpdStatusParameter(
      get(unitBaseSpdState(unit)),
      get(unitChip1EquipmentStatusEffectsState(unit)),
      get(unitChip2EquipmentStatusEffectsState(unit)),
      get(unitOsEquipmentStatusEffectsState(unit)),
      get(unitGearEquipmentStatusEffectsState(unit)),
      get(coreLinkBonusEffectsState(unit)),
      get(fullLinkBonusEffectState(unit)),
      get(unitRankUpBonusEffectState(unit))
    );
  }
});

const unitFireResistStatusParameterState = selectorFamily<UnitFireResistStatusParameter, UnitNumber>({
  key: 'unitFireResistStatusParameterState',
  get: (unit) => ({ get }) => {
    return new UnitFireResistStatusParameter(
      get(unitBaseFireResistState(unit)),
      get(unitChip1EquipmentStatusEffectsState(unit)),
      get(unitChip2EquipmentStatusEffectsState(unit)),
      get(unitOsEquipmentStatusEffectsState(unit)),
      get(unitGearEquipmentStatusEffectsState(unit))
    );
  }
});

const unitIceResistStatusParameterState = selectorFamily<UnitIceResistStatusParameter, UnitNumber>({
  key: 'unitIceResistStatusParameterState',
  get: (unit) => ({ get }) => {
    return new UnitIceResistStatusParameter(
      get(unitBaseIceResistState(unit)),
      get(unitChip1EquipmentStatusEffectsState(unit)),
      get(unitChip2EquipmentStatusEffectsState(unit)),
      get(unitOsEquipmentStatusEffectsState(unit)),
      get(unitGearEquipmentStatusEffectsState(unit))
    );
  }
});

const unitElectricResistStatusParameterState = selectorFamily<UnitElectricResistStatusParameter, UnitNumber>({
  key: 'unitElectricResistStatusParameterState',
  get: (unit) => ({ get }) => {
    return new UnitElectricResistStatusParameter(
      get(unitBaseElectricResistState(unit)),
      get(unitChip1EquipmentStatusEffectsState(unit)),
      get(unitChip2EquipmentStatusEffectsState(unit)),
      get(unitOsEquipmentStatusEffectsState(unit)),
      get(unitGearEquipmentStatusEffectsState(unit))
    );
  }
});

export function useEmptyStatusParameter(parameter: EnhanceableStatus | 'spd'): string {
  switch (parameter) {
  case 'hp':
    return '0';
  case 'atk':
  case 'def':
    return formatMilliValue(undefined);
  case 'acc':
  case 'eva':
  case 'cri':
    return formatMilliPercentage(undefined);
  case 'spd':
    return formatMicroValue(undefined);
  }
}

export function useStatusParameter(parameter: EnhanceableStatus | 'spd', unit: UnitNumber): string {
  switch (parameter) {
  case 'hp':  return `${useRecoilValue(unitHpStatusParameterState(unit)).hp.value}`;
  case 'atk': return formatMilliValue(useRecoilValue(unitAtkStatusParameterState(unit)).atk);
  case 'def': return formatMilliValue(useRecoilValue(unitDefStatusParameterState(unit)).def);
  case 'acc': return formatMilliPercentage(useRecoilValue(unitAccStatusParameterState(unit)).acc);
  case 'eva': return formatMilliPercentage(useRecoilValue(unitEvaStatusParameterState(unit)).eva);
  case 'cri': return formatMilliPercentage(useRecoilValue(unitCriStatusParameterState(unit)).cri);
  case 'spd': return formatMicroValue(useRecoilValue(unitSpdStatusParameterState(unit)).spd);
  }
}

export function useUnitFireResistParameter(unit: UnitNumber): MilliPercentageValue {
  return useRecoilValue(unitFireResistStatusParameterState(unit)).resist;
}

export function useUnitIceResistParameter(unit: UnitNumber): MilliPercentageValue {
  return useRecoilValue(unitIceResistStatusParameterState(unit)).resist;
}

export function useUnitElectricResistParameter(unit: UnitNumber): MilliPercentageValue {
  return useRecoilValue(unitElectricResistStatusParameterState(unit)).resist;
}

export function useStatusEffectsSummary(parameter: EffectedParameter, unit: UnitBasicInfo): number {
  switch (parameter) {
  case 'hp':return useRecoilValue(unitHpStatusParameterState(unit.no)).hpEffectValue.value;
  case 'atk': return calcMilliValue(useRecoilValue(unitAtkStatusParameterState(unit.no)).atkEffectValue);
  case 'def': return calcMilliValue(useRecoilValue(unitDefStatusParameterState(unit.no)).defEffectValue);
  case 'acc': return calcMilliPercentageValue(useRecoilValue(unitAccStatusParameterState(unit.no)).accEffectValue);
  case 'eva': return calcMilliPercentageValue(useRecoilValue(unitEvaStatusParameterState(unit.no)).evaEffectValue);
  case 'cri': return calcMilliPercentageValue(useRecoilValue(unitCriStatusParameterState(unit.no)).criEffectValue);
  case 'spd': return calcMicroValue(useRecoilValue(unitSpdStatusParameterState(unit.no)).spdEffectValue);
  case 'fireResist':     return calcMilliPercentageValue(useRecoilValue(unitFireResistStatusParameterState(unit.no)).resistEffectValue);
  case 'iceResist':      return calcMilliPercentageValue(useRecoilValue(unitIceResistStatusParameterState(unit.no)).resistEffectValue);
  case 'electricResist': return calcMilliPercentageValue(useRecoilValue(unitElectricResistStatusParameterState(unit.no)).resistEffectValue);
  }
}
