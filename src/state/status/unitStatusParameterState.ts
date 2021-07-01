import { selectorFamily } from 'recoil';

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
import { UnitBasicInfo } from '../../domain/UnitBasicInfo';

import { coreLinkBonusEffectsState, fullLinkBonusEffectState } from '../corelink/unitCoreLinkState';
import {
  unitAccEnhancementStatusEffectState,
  unitAtkEnhancementStatusEffectState,
  unitCriEnhancementStatusEffectState,
  unitDefEnhancementStatusEffectState,
  unitEvaEnhancementStatusEffectState,
  unitHpEnhancementStatusEffectState
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

export const unitHpStatusParameterState = selectorFamily<UnitHpStatusParameter, UnitBasicInfo>({
  key: 'unitHpStatusParameterState',
  get: (unit) => ({ get }) => {
    return new UnitHpStatusParameter(
      get(unitBaseHpState(unit.no)),
      get(unitHpEnhancementStatusEffectState(unit.no)),
      get(unitChip1EquipmentStatusEffectsState(unit)),
      get(unitChip2EquipmentStatusEffectsState(unit)),
      get(unitOsEquipmentStatusEffectsState(unit)),
      get(unitGearEquipmentStatusEffectsState(unit)),
      get(coreLinkBonusEffectsState(unit.no)),
      get(fullLinkBonusEffectState(unit.no))
    );
  }
});

export const unitAtkStatusParameterState = selectorFamily<UnitAtkStatusParameter, UnitBasicInfo>({
  key: 'unitAtkStatusParameterState',
  get: (unit) => ({ get }) => {
    return new UnitAtkStatusParameter(
      get(unitBaseAtkState(unit.no)),
      get(unitAtkEnhancementStatusEffectState(unit.no)),
      get(unitChip1EquipmentStatusEffectsState(unit)),
      get(unitChip2EquipmentStatusEffectsState(unit)),
      get(unitOsEquipmentStatusEffectsState(unit)),
      get(unitGearEquipmentStatusEffectsState(unit)),
      get(coreLinkBonusEffectsState(unit.no))
    );
  }
});

export const unitDefStatusParameterState = selectorFamily<UnitDefStatusParameter, UnitBasicInfo>({
  key: 'unitDefStatusParameterState',
  get: (unit) => ({ get }) => {
    return new UnitDefStatusParameter(
      get(unitBaseDefState(unit.no)),
      get(unitDefEnhancementStatusEffectState(unit.no)),
      get(unitChip1EquipmentStatusEffectsState(unit)),
      get(unitChip2EquipmentStatusEffectsState(unit)),
      get(unitOsEquipmentStatusEffectsState(unit)),
      get(unitGearEquipmentStatusEffectsState(unit)),
      get(coreLinkBonusEffectsState(unit.no))
    );
  }
});

export const unitAccStatusParameterState = selectorFamily<UnitAccStatusParameter, UnitBasicInfo>({
  key: 'unitAccStatusParameterState',
  get: (unit) => ({ get }) => {
    return new UnitAccStatusParameter(
      get(unitBaseAccState(unit.no)),
      get(unitAccEnhancementStatusEffectState(unit.no)),
      get(unitChip1EquipmentStatusEffectsState(unit)),
      get(unitChip2EquipmentStatusEffectsState(unit)),
      get(unitOsEquipmentStatusEffectsState(unit)),
      get(unitGearEquipmentStatusEffectsState(unit)),
      get(coreLinkBonusEffectsState(unit.no)),
      get(fullLinkBonusEffectState(unit.no))
    );
  }
});

export const unitEvaStatusParameterState = selectorFamily<UnitEvaStatusParameter, UnitBasicInfo>({
  key: 'unitEvaStatusParameterState',
  get: (unit) => ({ get }) => {
    return new UnitEvaStatusParameter(
      get(unitBaseEvaState(unit.no)),
      get(unitEvaEnhancementStatusEffectState(unit.no)),
      get(unitChip1EquipmentStatusEffectsState(unit)),
      get(unitChip2EquipmentStatusEffectsState(unit)),
      get(unitOsEquipmentStatusEffectsState(unit)),
      get(unitGearEquipmentStatusEffectsState(unit)),
      get(coreLinkBonusEffectsState(unit.no)),
      get(fullLinkBonusEffectState(unit.no))
    );
  }
});

export const unitCriStatusParameterState = selectorFamily<UnitCriStatusParameter, UnitBasicInfo>({
  key: 'unitCriStatusParameterState',
  get: (unit) => ({ get }) => {
    return new UnitCriStatusParameter(
      get(unitBaseCriState(unit.no)),
      get(unitCriEnhancementStatusEffectState(unit.no)),
      get(unitChip1EquipmentStatusEffectsState(unit)),
      get(unitChip2EquipmentStatusEffectsState(unit)),
      get(unitOsEquipmentStatusEffectsState(unit)),
      get(unitGearEquipmentStatusEffectsState(unit)),
      get(coreLinkBonusEffectsState(unit.no)),
      get(fullLinkBonusEffectState(unit.no))
    );
  }
});

export const unitSpdStatusParameterState = selectorFamily<UnitSpdStatusParameter, UnitBasicInfo>({
  key: 'unitSpdStatusParameterState',
  get: (unit) => ({ get }) => {
    return new UnitSpdStatusParameter(
      get(unitBaseSpdState(unit.no)),
      get(unitChip1EquipmentStatusEffectsState(unit)),
      get(unitChip2EquipmentStatusEffectsState(unit)),
      get(unitOsEquipmentStatusEffectsState(unit)),
      get(unitGearEquipmentStatusEffectsState(unit)),
      get(coreLinkBonusEffectsState(unit.no)),
      get(fullLinkBonusEffectState(unit.no))
    );
  }
});

export const unitFireResistStatusParameterState = selectorFamily<UnitFireResistStatusParameter, UnitBasicInfo>({
  key: 'unitFireResistStatusParameterState',
  get: (unit) => ({ get }) => {
    return new UnitFireResistStatusParameter(
      get(unitBaseFireResistState(unit.no)),
      get(unitChip1EquipmentStatusEffectsState(unit)),
      get(unitChip2EquipmentStatusEffectsState(unit)),
      get(unitOsEquipmentStatusEffectsState(unit)),
      get(unitGearEquipmentStatusEffectsState(unit))
    );
  }
});

export const unitIceResistStatusParameterState = selectorFamily<UnitIceResistStatusParameter, UnitBasicInfo>({
  key: 'unitIceResistStatusParameterState',
  get: (unit) => ({ get }) => {
    return new UnitIceResistStatusParameter(
      get(unitBaseIceResistState(unit.no)),
      get(unitChip1EquipmentStatusEffectsState(unit)),
      get(unitChip2EquipmentStatusEffectsState(unit)),
      get(unitOsEquipmentStatusEffectsState(unit)),
      get(unitGearEquipmentStatusEffectsState(unit))
    );
  }
});

export const unitElectricResistStatusParameterState = selectorFamily<UnitElectricResistStatusParameter, UnitBasicInfo>({
  key: 'unitElectricResistStatusParameterState',
  get: (unit) => ({ get }) => {
    return new UnitElectricResistStatusParameter(
      get(unitBaseElectricResistState(unit.no)),
      get(unitChip1EquipmentStatusEffectsState(unit)),
      get(unitChip2EquipmentStatusEffectsState(unit)),
      get(unitOsEquipmentStatusEffectsState(unit)),
      get(unitGearEquipmentStatusEffectsState(unit))
    );
  }
});
