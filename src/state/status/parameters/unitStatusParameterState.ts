import { selectorFamily, useRecoilValue } from 'recoil';

import { DamageAttribute } from '../../../domain/skill/UnitSkillData';
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
} from '../../../domain/status/UnitStatusParameter';
import { UnitBasicInfo, UnitNumber } from '../../../domain/UnitBasicInfo';
import { calcMicroValue, calcMilliPercentageValue, calcMilliValue } from '../../../domain/ValueUnit';

import { coreLinkBonusEffectsState, fullLinkBonusEffectState } from '../../corelink/unitCoreLinkState';
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
} from '../../equipment/unitEquipmentState';
import { useSelectedUnit } from '../../selector/unitSelectorState';

import { EffectedParameter } from '../../../component/status/parameters/StatusEffectsView';
import {
  appendPercentage,
  formatMicroValue,
  formatMilliPercentage,
  formatMilliValue,
  formatResistPercentage
} from '../../../component/status/parameters/UnitStatusParameterFormatter';

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

const selectedUnitStatusParameter = selectorFamily<string, [status: EnhanceableStatus | 'spd', selected: UnitNumber | undefined]>({
  key: 'selectedUnitStatusParameter',
  get: ([status, selected]) => ({ get }) => {
    switch (status) {
    case 'hp':  return `${selected ? get(unitHpStatusParameterState(selected)).hp.value : 0}`;
    case 'atk': return formatMilliValue(selected && get(unitAtkStatusParameterState(selected)).atk);
    case 'def': return formatMilliValue(selected && get(unitDefStatusParameterState(selected)).def);
    case 'acc': return formatMilliPercentage(selected && get(unitAccStatusParameterState(selected)).acc);
    case 'eva': return formatMilliPercentage(selected && get(unitEvaStatusParameterState(selected)).eva);
    case 'cri': return formatMilliPercentage(selected && get(unitCriStatusParameterState(selected)).cri);
    case 'spd': return formatMicroValue(selected && get(unitSpdStatusParameterState(selected)).spd);
    }
  }
});

const selectedUnitResistStatusParameter = selectorFamily<string, [attribute: DamageAttribute, selected: UnitNumber | undefined]>({
  key: 'selectedUnitResistStatusParameter',
  get: ([attribute, selected]) => ({ get }) => {
    const value = (() => {
      switch (attribute) {
      case DamageAttribute.Fire:     return selected && get(unitFireResistStatusParameterState(selected)).resist;
      case DamageAttribute.Ice:      return selected && get(unitIceResistStatusParameterState(selected)).resist;
      case DamageAttribute.Electric: return selected && get(unitElectricResistStatusParameterState(selected)).resist;
      }
    })();

    return appendPercentage(formatResistPercentage(value));
  }
});

export function useStatusParameter(status: EnhanceableStatus | 'spd'): string {
  const selected = useSelectedUnit()?.no;
  return useRecoilValue(selectedUnitStatusParameter([status, selected]));
}

export function useSelectedUnitAttributeResistParameter(attribute: DamageAttribute): string {
  const selected = useSelectedUnit()?.no;
  return useRecoilValue(selectedUnitResistStatusParameter([attribute, selected]));
}

export function useStatusEffectsSummary(parameter: EffectedParameter, unit: UnitBasicInfo): number {
  switch (parameter) {
  case 'hp': return useRecoilValue(unitHpStatusParameterState(unit.no)).hpEffectValue.value;
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
