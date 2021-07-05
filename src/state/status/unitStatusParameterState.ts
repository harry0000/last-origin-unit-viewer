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
import { UnitNumber } from '../../domain/UnitBasicInfo';

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
      get(fullLinkBonusEffectState(unit))
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
      get(coreLinkBonusEffectsState(unit))
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
      get(coreLinkBonusEffectsState(unit))
    );
  }
});

export const unitAccStatusParameterState = selectorFamily<UnitAccStatusParameter, UnitNumber>({
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
      get(fullLinkBonusEffectState(unit))
    );
  }
});

export const unitEvaStatusParameterState = selectorFamily<UnitEvaStatusParameter, UnitNumber>({
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
      get(fullLinkBonusEffectState(unit))
    );
  }
});

export const unitCriStatusParameterState = selectorFamily<UnitCriStatusParameter, UnitNumber>({
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
      get(fullLinkBonusEffectState(unit))
    );
  }
});

export const unitSpdStatusParameterState = selectorFamily<UnitSpdStatusParameter, UnitNumber>({
  key: 'unitSpdStatusParameterState',
  get: (unit) => ({ get }) => {
    return new UnitSpdStatusParameter(
      get(unitBaseSpdState(unit)),
      get(unitChip1EquipmentStatusEffectsState(unit)),
      get(unitChip2EquipmentStatusEffectsState(unit)),
      get(unitOsEquipmentStatusEffectsState(unit)),
      get(unitGearEquipmentStatusEffectsState(unit)),
      get(coreLinkBonusEffectsState(unit)),
      get(fullLinkBonusEffectState(unit))
    );
  }
});

export const unitFireResistStatusParameterState = selectorFamily<UnitFireResistStatusParameter, UnitNumber>({
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

export const unitIceResistStatusParameterState = selectorFamily<UnitIceResistStatusParameter, UnitNumber>({
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

export const unitElectricResistStatusParameterState = selectorFamily<UnitElectricResistStatusParameter, UnitNumber>({
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
