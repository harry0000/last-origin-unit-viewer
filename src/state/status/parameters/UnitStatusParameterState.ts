import { RecoilValueReadOnly, selectorFamily } from 'recoil';

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
import { UnitNumber } from '../../../domain/UnitBasicInfo';

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
import { EnhanceableStatus, unitLvStatusState } from './UnitLvStatusState';
import { unitEquipmentState } from '../../equipment/UnitEquipmentState';
import { unitCoreLinkState } from '../../corelink/UnitCoreLinkState';

import {
  appendPercentage,
  formatMicroValue,
  formatMilliPercentage,
  formatMilliValue,
  formatResistPercentage
} from '../../../component/status/parameters/UnitStatusParameterFormatter';

const {
  hpEnhancementStatusEffectState,
  atkEnhancementStatusEffectState,
  defEnhancementStatusEffectState,
  accEnhancementStatusEffectState,
  evaEnhancementStatusEffectState,
  criEnhancementStatusEffectState,
  rankUpBonusEffectState
} = unitLvStatusState;

const {
  unitEquipmentStatusEffectsState
} = unitEquipmentState;

const {
  coreLinkBonusEffectsState,
  fullLinkBonusEffectState
} = unitCoreLinkState;

class UnitStatusParameterState {
  readonly unitHpStatusParameterState = selectorFamily<UnitHpStatusParameter, UnitNumber>({
    key: 'unitHpStatusParameterState',
    get: (unit) => ({ get }) => {
      return new UnitHpStatusParameter(
        get(unitBaseHpState(unit)),
        get(hpEnhancementStatusEffectState(unit)),
        get(unitEquipmentStatusEffectsState(unit, 'chip1')),
        get(unitEquipmentStatusEffectsState(unit, 'chip2')),
        get(unitEquipmentStatusEffectsState(unit, 'os')),
        get(unitEquipmentStatusEffectsState(unit, 'gear')),
        get(coreLinkBonusEffectsState(unit)),
        get(fullLinkBonusEffectState(unit)),
        get(rankUpBonusEffectState(unit))
      );
    }
  });

  readonly unitAtkStatusParameterState = selectorFamily<UnitAtkStatusParameter, UnitNumber>({
    key: 'unitAtkStatusParameterState',
    get: (unit) => ({ get }) => {
      return new UnitAtkStatusParameter(
        get(unitBaseAtkState(unit)),
        get(atkEnhancementStatusEffectState(unit)),
        get(unitEquipmentStatusEffectsState(unit, 'chip1')),
        get(unitEquipmentStatusEffectsState(unit, 'chip2')),
        get(unitEquipmentStatusEffectsState(unit, 'os')),
        get(unitEquipmentStatusEffectsState(unit, 'gear')),
        get(coreLinkBonusEffectsState(unit)),
        get(rankUpBonusEffectState(unit))
      );
    }
  });

  readonly unitDefStatusParameterState = selectorFamily<UnitDefStatusParameter, UnitNumber>({
    key: 'unitDefStatusParameterState',
    get: (unit) => ({ get }) => {
      return new UnitDefStatusParameter(
        get(unitBaseDefState(unit)),
        get(defEnhancementStatusEffectState(unit)),
        get(unitEquipmentStatusEffectsState(unit, 'chip1')),
        get(unitEquipmentStatusEffectsState(unit, 'chip2')),
        get(unitEquipmentStatusEffectsState(unit, 'os')),
        get(unitEquipmentStatusEffectsState(unit, 'gear')),
        get(coreLinkBonusEffectsState(unit)),
        get(rankUpBonusEffectState(unit))
      );
    }
  });

  readonly unitAccStatusParameterState = selectorFamily<UnitAccStatusParameter, UnitNumber>({
    key: 'unitAccStatusParameterState',
    get: (unit) => ({ get }) => {
      return new UnitAccStatusParameter(
        get(unitBaseAccState(unit)),
        get(accEnhancementStatusEffectState(unit)),
        get(unitEquipmentStatusEffectsState(unit, 'chip1')),
        get(unitEquipmentStatusEffectsState(unit, 'chip2')),
        get(unitEquipmentStatusEffectsState(unit, 'os')),
        get(unitEquipmentStatusEffectsState(unit, 'gear')),
        get(coreLinkBonusEffectsState(unit)),
        get(fullLinkBonusEffectState(unit)),
        get(rankUpBonusEffectState(unit))
      );
    }
  });

  readonly unitEvaStatusParameterState = selectorFamily<UnitEvaStatusParameter, UnitNumber>({
    key: 'unitEvaStatusParameterState',
    get: (unit) => ({ get }) => {
      return new UnitEvaStatusParameter(
        get(unitBaseEvaState(unit)),
        get(evaEnhancementStatusEffectState(unit)),
        get(unitEquipmentStatusEffectsState(unit, 'chip1')),
        get(unitEquipmentStatusEffectsState(unit, 'chip2')),
        get(unitEquipmentStatusEffectsState(unit, 'os')),
        get(unitEquipmentStatusEffectsState(unit, 'gear')),
        get(coreLinkBonusEffectsState(unit)),
        get(fullLinkBonusEffectState(unit)),
        get(rankUpBonusEffectState(unit))
      );
    }
  });

  readonly unitCriStatusParameterState = selectorFamily<UnitCriStatusParameter, UnitNumber>({
    key: 'unitCriStatusParameterState',
    get: (unit) => ({ get }) => {
      return new UnitCriStatusParameter(
        get(unitBaseCriState(unit)),
        get(criEnhancementStatusEffectState(unit)),
        get(unitEquipmentStatusEffectsState(unit, 'chip1')),
        get(unitEquipmentStatusEffectsState(unit, 'chip2')),
        get(unitEquipmentStatusEffectsState(unit, 'os')),
        get(unitEquipmentStatusEffectsState(unit, 'gear')),
        get(coreLinkBonusEffectsState(unit)),
        get(fullLinkBonusEffectState(unit)),
        get(rankUpBonusEffectState(unit))
      );
    }
  });

  readonly unitSpdStatusParameterState = selectorFamily<UnitSpdStatusParameter, UnitNumber>({
    key: 'unitSpdStatusParameterState',
    get: (unit) => ({ get }) => {
      return new UnitSpdStatusParameter(
        get(unitBaseSpdState(unit)),
        get(unitEquipmentStatusEffectsState(unit, 'chip1')),
        get(unitEquipmentStatusEffectsState(unit, 'chip2')),
        get(unitEquipmentStatusEffectsState(unit, 'os')),
        get(unitEquipmentStatusEffectsState(unit, 'gear')),
        get(coreLinkBonusEffectsState(unit)),
        get(fullLinkBonusEffectState(unit)),
        get(rankUpBonusEffectState(unit))
      );
    }
  });

  readonly unitFireResistStatusParameterState = selectorFamily<UnitFireResistStatusParameter, UnitNumber>({
    key: 'unitFireResistStatusParameterState',
    get: (unit) => ({ get }) => {
      return new UnitFireResistStatusParameter(
        get(unitBaseFireResistState(unit)),
        get(unitEquipmentStatusEffectsState(unit, 'chip1')),
        get(unitEquipmentStatusEffectsState(unit, 'chip2')),
        get(unitEquipmentStatusEffectsState(unit, 'os')),
        get(unitEquipmentStatusEffectsState(unit, 'gear'))
      );
    }
  });

  readonly unitIceResistStatusParameterState = selectorFamily<UnitIceResistStatusParameter, UnitNumber>({
    key: 'unitIceResistStatusParameterState',
    get: (unit) => ({ get }) => {
      return new UnitIceResistStatusParameter(
        get(unitBaseIceResistState(unit)),
        get(unitEquipmentStatusEffectsState(unit, 'chip1')),
        get(unitEquipmentStatusEffectsState(unit, 'chip2')),
        get(unitEquipmentStatusEffectsState(unit, 'os')),
        get(unitEquipmentStatusEffectsState(unit, 'gear'))
      );
    }
  });

  readonly unitElectricResistStatusParameterState = selectorFamily<UnitElectricResistStatusParameter, UnitNumber>({
    key: 'unitElectricResistStatusParameterState',
    get: (unit) => ({ get }) => {
      return new UnitElectricResistStatusParameter(
        get(unitBaseElectricResistState(unit)),
        get(unitEquipmentStatusEffectsState(unit, 'chip1')),
        get(unitEquipmentStatusEffectsState(unit, 'chip2')),
        get(unitEquipmentStatusEffectsState(unit, 'os')),
        get(unitEquipmentStatusEffectsState(unit, 'gear'))
      );
    }
  });

  readonly #parameterAsText = selectorFamily<string, { status: EnhanceableStatus | 'spd', selected: UnitNumber | undefined }>({
    key: 'selectedUnitParameterAsText',
    get: ({ status, selected }) => ({ get }) => {
      switch (status) {
      case 'hp':  return `${selected ? get(this.unitHpStatusParameterState(selected)).hp.value : 0}`;
      case 'atk': return formatMilliValue(selected && get(this.unitAtkStatusParameterState(selected)).atk);
      case 'def': return formatMilliValue(selected && get(this.unitDefStatusParameterState(selected)).def);
      case 'acc': return formatMilliPercentage(selected && get(this.unitAccStatusParameterState(selected)).acc);
      case 'eva': return formatMilliPercentage(selected && get(this.unitEvaStatusParameterState(selected)).eva);
      case 'cri': return formatMilliPercentage(selected && get(this.unitCriStatusParameterState(selected)).cri);
      case 'spd': return formatMicroValue(selected && get(this.unitSpdStatusParameterState(selected)).spd);
      }
    }
  });

  readonly #resistParameterAsText = selectorFamily<string, { attribute: DamageAttribute, selected: UnitNumber | undefined }>({
    key: 'selectedUnitResistParameterAsText',
    get: ({ attribute, selected }) => ({ get }) => {
      const value = (() => {
        switch (attribute) {
        case DamageAttribute.Fire:     return selected && get(this.unitFireResistStatusParameterState(selected)).resist;
        case DamageAttribute.Ice:      return selected && get(this.unitIceResistStatusParameterState(selected)).resist;
        case DamageAttribute.Electric: return selected && get(this.unitElectricResistStatusParameterState(selected)).resist;
        }
      })();

      return appendPercentage(formatResistPercentage(value));
    }
  });

  readonly selectedUnitParameterAsText = (status: EnhanceableStatus | 'spd', selected: UnitNumber | undefined): RecoilValueReadOnly<string> =>
    this.#parameterAsText({ status, selected });

  readonly selectedUnitResistParameterAsText = (attribute: DamageAttribute, selected: UnitNumber | undefined): RecoilValueReadOnly<string> =>
    this.#resistParameterAsText({ attribute, selected });
}

export const unitStatusParameterState: UnitStatusParameterState = new UnitStatusParameterState();
