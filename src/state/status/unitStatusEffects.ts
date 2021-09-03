import { TFunction } from 'i18next';
import { useRecoilValue } from 'recoil';
import { useTranslation } from 'react-i18next';

import { coreLinkBonusEffectsState, fullLinkBonusEffectState } from '../corelink/unitCoreLinkState';
import {
  unitAccEnhancementStatusEffectState,
  unitAtkEnhancementStatusEffectState,
  unitCriEnhancementStatusEffectState,
  unitDefEnhancementStatusEffectState,
  unitEvaEnhancementStatusEffectState,
  unitHpEnhancementStatusEffectState, useRankUpBonusEffect,
  useStatusParameterEnhancedLv
} from './unitLvStatusState';
import {
  unitAtkStatusParameterState,
  unitDefStatusParameterState,
  unitHpStatusParameterState
} from './unitStatusParameterState';
import {
  useChip1EquipmentEffect,
  useChip2EquipmentEffect,
  useGearEquipmentEffect,
  useOsEquipmentEffect
} from '../equipment/unitEquipmentState';

import { EffectedParameter, StatusEffectPopoverRowProps } from '../../component/status/StatusEffectsView';

import { ChipEquipment, GearEquipment, OsEquipment } from '../../domain/equipment/UnitEquipment';
import { StatusEffect } from '../../domain/status/StatusEffect';
import { UnitBasicInfo, UnitNumber } from '../../domain/UnitBasicInfo';
import { UnitRankUpBonus } from '../../domain/status/UnitRankUpBonusData';
import { calcMicroValue, calcMilliPercentageValue, calcMilliValue } from '../../domain/ValueUnit';

export function useStatusEffects(unit: UnitBasicInfo, parameter: EffectedParameter): ReadonlyArray<StatusEffectPopoverRowProps> {
  const unitNumber = unit.no;
  const { t } = useTranslation();
  const rankUpEffect         = useRankUpBonusEffect(unitNumber);
  const [chip1, chip1Effect] = useChip1EquipmentEffect(unit);
  const [chip2, chip2Effect] = useChip2EquipmentEffect(unit);
  const [os,    osEffect]    = useOsEquipmentEffect(unit);
  const [gear,  gearEffect]  = useGearEquipmentEffect(unit);

  return [
    ...rankUpBonusEffects(parameter, rankUpEffect, t),
    ...enhancementEffects(unitNumber, parameter, t),
    ...equipmentEffects(parameter, chip1Effect, chip1, 'chip1', t),
    ...equipmentEffects(parameter, chip2Effect, chip2, 'chip2', t),
    ...equipmentEffects(parameter, osEffect,    os,    'os',    t),
    ...equipmentEffects(parameter, gearEffect,  gear,  'gear',  t),
    ...coreLinkBonusEffects(unitNumber, parameter, t),
    ...fullLinkBonusEffects(unitNumber, parameter, t)
  ];
}

function rankUpBonusEffects(
  parameter: EffectedParameter,
  bonuses: UnitRankUpBonus | undefined,
  t: TFunction
): ReadonlyArray<StatusEffectPopoverRowProps> {
  if (!bonuses) {
    return [];
  }

  switch (parameter) {
  case 'hp':
    return Object
      .entries(bonuses)
      .map(([rank, bonus]) => ({
        key: `rank_up_${rank}`,
        effected: t('status.effected.rank_up', { rank }),
        value: bonus.hp_up.value
      }));
  case 'atk':
    return Object
      .entries(bonuses)
      .map(([rank, bonus]) => ({
        key: `rank_up_${rank}`,
        effected: t('status.effected.rank_up', { rank }),
        value: calcMilliValue(bonus.atk_up)
      }));
  case 'def':
    return Object
      .entries(bonuses)
      .flatMap(([rank, bonus]) =>
        bonus.def_up ?
          {
            key: `rank_up_${rank}`,
            effected: t('status.effected.rank_up', { rank }),
            value: calcMilliValue(bonus.def_up)
          } :
          []
      );
  case 'acc':
    return Object
      .entries(bonuses)
      .flatMap(([rank, bonus]) =>
        bonus.acc_up ?
          {
            key: `rank_up_${rank}`,
            effected: t('status.effected.rank_up', { rank }),
            value: calcMilliPercentageValue(bonus.acc_up)
          } :
          []
      );
  case 'eva':
    return Object
      .entries(bonuses)
      .flatMap(([rank, bonus]) =>
        bonus.eva_up ?
          {
            key: `rank_up_${rank}`,
            effected: t('status.effected.rank_up', { rank }),
            value: calcMilliPercentageValue(bonus.eva_up)
          } :
          []
      );
  case 'cri':
    return Object
      .entries(bonuses)
      .flatMap(([rank, bonus]) =>
        bonus.cri_up ?
          {
            key: `rank_up_${rank}`,
            effected: t('status.effected.rank_up', { rank }),
            value: calcMilliPercentageValue(bonus.cri_up)
          } :
          []
      );
  case 'spd':
    return Object
      .entries(bonuses)
      .flatMap(([rank, bonus]) =>
        bonus.spd_up ?
          {
            key: `rank_up_${rank}`,
            effected: t('status.effected.rank_up', { rank }),
            value: calcMicroValue(bonus.spd_up)
          } :
          []
      );
  case 'fireResist':
  case 'iceResist':
  case 'electricResist':
    return [];
  }
}

function enhancementEffects(
  unit: UnitNumber,
  parameter: EffectedParameter,
  t: TFunction
): ReadonlyArray<StatusEffectPopoverRowProps> {
  switch (parameter) {
  case 'hp': {
    const lv = useStatusParameterEnhancedLv(parameter, unit);
    const value = useRecoilValue(unitHpEnhancementStatusEffectState(unit)).hp_up?.value;
    return lv && value ?
      [{
        key: 'enhancement',
        effected: t('status.effected.enhancement', { lv }),
        value
      }] :
      [];
  }
  case 'atk': {
    const lv = useStatusParameterEnhancedLv(parameter, unit);
    const value = useRecoilValue(unitAtkEnhancementStatusEffectState(unit)).atk_up;
    return lv && value ?
      [{
        key: 'enhancement',
        effected: t('status.effected.enhancement', { lv }),
        value: calcMilliValue(value)
      }] :
      [];
  }
  case 'def': {
    const lv = useStatusParameterEnhancedLv(parameter, unit);
    const value = useRecoilValue(unitDefEnhancementStatusEffectState(unit)).def_up;
    return lv && value ?
      [{
        key: 'enhancement',
        effected: t('status.effected.enhancement', { lv }),
        value: calcMilliValue(value)
      }] :
      [];
  }
  case 'acc': {
    const lv = useStatusParameterEnhancedLv(parameter, unit);
    const value = useRecoilValue(unitAccEnhancementStatusEffectState(unit)).acc_up;
    return lv && value ?
      [{
        key: 'enhancement',
        effected: t('status.effected.enhancement', { lv }),
        value: calcMilliPercentageValue(value)
      }] :
      [];
  }
  case 'eva': {
    const lv = useStatusParameterEnhancedLv(parameter, unit);
    const value = useRecoilValue(unitEvaEnhancementStatusEffectState(unit)).eva_up;
    return lv && value ?
      [{
        key: 'enhancement',
        effected: t('status.effected.enhancement', { lv }),
        value: calcMilliPercentageValue(value)
      }] :
      [];
  }
  case 'cri': {
    const lv = useStatusParameterEnhancedLv(parameter, unit);
    const value = useRecoilValue(unitCriEnhancementStatusEffectState(unit)).cri_up;
    return lv && value ?
      [{
        key: 'enhancement',
        effected: t('status.effected.enhancement', { lv }),
        value: calcMilliPercentageValue(value)
      }] :
      [];
  }
  case 'spd':
  case 'fireResist':
  case 'iceResist':
  case 'electricResist':
    return [];
  }
}

function equipmentEffects(
  parameter: EffectedParameter,
  effects: StatusEffect | undefined,
  equipment: ChipEquipment | OsEquipment | GearEquipment | undefined,
  slot: 'chip1' | 'chip2' | 'os' | 'gear',
  t: TFunction
): ReadonlyArray<StatusEffectPopoverRowProps> {
  if (!effects || !equipment) {
    return [];
  }

  let value: number | undefined;
  switch (parameter) {
  case 'hp':
    value = effects.hp_up?.value ?? undefined;
    break;
  case 'atk':
    if (effects.atk_up) {
      value = calcMilliValue(effects.atk_up);
    } else if (effects.atk_down) {
      value = -calcMilliValue(effects.atk_down);
    }
    break;
  case 'def':
    if (effects.def_up) {
      value = calcMilliValue(effects.def_up);
    } else if (effects.def_down) {
      value = -calcMilliValue(effects.def_down);
    }
    break;
  case 'acc':
    if (effects.acc_up) {
      value = calcMilliPercentageValue(effects.acc_up);
    } else if (effects.acc_down) {
      value = -calcMilliPercentageValue(effects.acc_down);
    }
    break;
  case 'eva':
    if (effects.eva_up) {
      value = calcMilliPercentageValue(effects.eva_up);
    } else if (effects.eva_down) {
      value = -calcMilliPercentageValue(effects.eva_down);
    }
    break;
  case 'cri':
    if (effects.cri_up) {
      value = calcMilliPercentageValue(effects.cri_up);
    } else if (effects.cri_down) {
      value = -calcMilliPercentageValue(effects.cri_down);
    }
    break;
  case 'spd':
    if (effects.spd_up) {
      value = calcMicroValue(effects.spd_up);
    } else if (effects.spd_down) {
      value = -calcMicroValue(effects.spd_down);
    }
    break;
  case 'fireResist':
    if (effects.fire_resist_up) {
      value = calcMilliPercentageValue(effects.fire_resist_up);
    } else if (effects.fire_resist_down) {
      value = -calcMilliPercentageValue(effects.fire_resist_down);
    }
    break;
  case 'iceResist':
    if (effects.ice_resist_up) {
      value = calcMilliPercentageValue(effects.ice_resist_up);
    } else if (effects.ice_resist_down) {
      value = -calcMilliPercentageValue(effects.ice_resist_down);
    }
    break;
  case 'electricResist':
    if (effects.electric_resist_up) {
      value = calcMilliPercentageValue(effects.electric_resist_up);
    } else if (effects.electric_resist_down) {
      value = -calcMilliPercentageValue(effects.electric_resist_down);
    }
    break;
  }

  if (value) {
    return [{
      key: `equipment-${slot}`,
      effected: t('status.effected.equipment', { id: equipment.id, lv: equipment.enhanceLv }),
      value
    }];
  } else {
    return [];
  }
}

function coreLinkBonusEffects(
  unit: UnitNumber,
  parameter: EffectedParameter,
  t: TFunction
): ReadonlyArray<StatusEffectPopoverRowProps> {
  switch (parameter) {
  case 'hp': {
    const bonus = useRecoilValue(coreLinkBonusEffectsState(unit));
    const value = useRecoilValue(unitHpStatusParameterState(unit))?.hpCoreLinkBonus.value;
    return bonus && value ?
      [{
        key: 'core_link_bonus',
        effected: t('status.effected.core_link_multiplier_bonus', { value: calcMilliPercentageValue(bonus.hp_up) }),
        value
      }] :
      [];
  }
  case 'atk': {
    const bonus = useRecoilValue(coreLinkBonusEffectsState(unit));
    const value = useRecoilValue(unitAtkStatusParameterState(unit))?.atkCoreLinkBonus;
    return bonus && value?.milliValue ?
      [{
        key: 'core_link_bonus',
        effected: t('status.effected.core_link_multiplier_bonus', { value: calcMilliPercentageValue(bonus.atk_up) }),
        value: calcMilliValue(value)
      }] :
      [];
  }
  case 'def': {
    const bonus = useRecoilValue(coreLinkBonusEffectsState(unit));
    const value = useRecoilValue(unitDefStatusParameterState(unit))?.defCoreLinkBonus;
    return bonus && 'def_up' in bonus && value?.milliValue ?
      [{
        key: 'core_link_bonus',
        effected: t('status.effected.core_link_multiplier_bonus', { value: calcMilliPercentageValue(bonus.def_up) }),
        value: calcMilliValue(value)
      }] :
      [];
  }
  case 'acc': {
    const bonus = useRecoilValue(coreLinkBonusEffectsState(unit));
    return bonus && 'acc_up' in bonus && bonus.acc_up.milliPercentage ?
      [{
        key: 'core_link_bonus',
        effected: t('status.effected.core_link_bonus'),
        value: calcMilliPercentageValue(bonus.acc_up)
      }] :
      [];
  }
  case 'eva': {
    const bonus = useRecoilValue(coreLinkBonusEffectsState(unit));
    return bonus && 'eva_up' in bonus && bonus.eva_up.milliPercentage ?
      [{
        key: 'core_link_bonus',
        effected: t('status.effected.core_link_bonus'),
        value: calcMilliPercentageValue(bonus.eva_up)
      }] :
      [];
  }
  case 'cri': {
    const bonus = useRecoilValue(coreLinkBonusEffectsState(unit));
    return bonus && 'cri_up' in bonus && bonus.cri_up.milliPercentage ?
      [{
        key: 'core_link_bonus',
        effected: t('status.effected.core_link_bonus'),
        value: calcMilliPercentageValue(bonus.cri_up)
      }] :
      [];
  }
  case 'spd': {
    const bonus = useRecoilValue(coreLinkBonusEffectsState(unit));
    return bonus && 'spd_up' in bonus && bonus.spd_up.microValue ?
      [{
        key: 'core_link_bonus',
        effected: t('status.effected.full_link_bonus'),
        value: calcMicroValue(bonus.spd_up)
      }] :
      [];
  }
  case 'fireResist':
  case 'iceResist':
  case 'electricResist':
    return [];
  }
}

function fullLinkBonusEffects(
  unit: UnitNumber,
  parameter: EffectedParameter,
  t: TFunction
): ReadonlyArray<StatusEffectPopoverRowProps> {
  switch (parameter) {
  case 'hp': {
    const bonus = useRecoilValue(fullLinkBonusEffectState(unit));
    const value = useRecoilValue(unitHpStatusParameterState(unit))?.hpFullLinkBonus?.value ?? 0;
    return bonus && 'hp_up' in bonus ?
      [{
        key: 'full_link_bonus',
        effected: t('status.effected.full_link_multiplier_bonus', { value: calcMilliPercentageValue(bonus.hp_up) }),
        value
      }] :
      [];
  }
  case 'acc': {
    const bonus = useRecoilValue(fullLinkBonusEffectState(unit));
    return bonus && 'acc_up' in bonus ?
      [{
        key: 'full_link_bonus',
        effected: t('status.effected.full_link_bonus'),
        value: calcMilliPercentageValue(bonus.acc_up)
      }] :
      [];
  }
  case 'eva': {
    const bonus = useRecoilValue(fullLinkBonusEffectState(unit));
    return bonus && 'eva_up' in bonus ?
      [{
        key: 'full_link_bonus',
        effected: t('status.effected.full_link_bonus'),
        value: calcMilliPercentageValue(bonus.eva_up)
      }] :
      [];
  }
  case 'cri': {
    const bonus = useRecoilValue(fullLinkBonusEffectState(unit));
    return bonus && 'cri_up' in bonus ?
      [{
        key: 'full_link_bonus',
        effected: t('status.effected.full_link_bonus'),
        value: calcMilliPercentageValue(bonus.cri_up)
      }] :
      [];
  }
  case 'spd': {
    const bonus = useRecoilValue(fullLinkBonusEffectState(unit));
    return bonus && 'spd_up' in bonus ?
      [{
        key: 'full_link_bonus',
        effected: t('status.effected.full_link_bonus'),
        value: calcMicroValue(bonus.spd_up)
      }] :
      [];
  }
  case 'atk':
  case 'def':
  case 'fireResist':
  case 'iceResist':
  case 'electricResist':
    return [];
  }
}
