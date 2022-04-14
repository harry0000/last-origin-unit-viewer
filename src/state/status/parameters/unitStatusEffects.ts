import { TFunction } from 'i18next';
import { useRecoilValue } from 'recoil';
import { useTranslation } from 'react-i18next';

import { coreLinkBonusEffectsState, fullLinkBonusEffectState } from '../../corelink/unitCoreLinkState';
import {
  unitAccEnhancementStatusEffectState,
  unitAtkEnhancementStatusEffectState,
  unitCriEnhancementStatusEffectState,
  unitDefEnhancementStatusEffectState,
  unitEvaEnhancementStatusEffectState,
  unitHpEnhancementStatusEffectState,
  useStatusEnhancedLv
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
} from '../../equipment/unitEquipmentState';

import { EffectedParameter, StatusEffectPopoverRowProps } from '../../../component/status/parameters/StatusEffectsView';

import { ChipEquipment, GearEquipment, OsEquipment } from '../../../domain/equipment/UnitEquipment';
import { StatusEffect } from '../../../domain/status/StatusEffect';
import { UnitBasicInfo, UnitNumber } from '../../../domain/UnitBasicInfo';
import { calcMicroValue, calcMilliPercentageValue, calcMilliValue } from '../../../domain/ValueUnit';

export function useStatusEffects(unit: UnitBasicInfo, parameter: EffectedParameter): ReadonlyArray<StatusEffectPopoverRowProps> {
  const unitNumber = unit.no;
  const { t } = useTranslation();
  const [chip1, chip1Effect] = useChip1EquipmentEffect(unit);
  const [chip2, chip2Effect] = useChip2EquipmentEffect(unit);
  const [os,    osEffect]    = useOsEquipmentEffect(unit);
  const [gear,  gearEffect]  = useGearEquipmentEffect(unit);

  return [
    ...enhancementEffects(unitNumber, parameter, t),
    ...equipmentEffects(parameter, chip1Effect, chip1, 'chip1', t),
    ...equipmentEffects(parameter, chip2Effect, chip2, 'chip2', t),
    ...equipmentEffects(parameter, osEffect,    os,    'os',    t),
    ...equipmentEffects(parameter, gearEffect,  gear,  'gear',  t),
    ...coreLinkBonusEffects(unitNumber, parameter, t),
    ...fullLinkBonusEffects(unitNumber, parameter, t)
  ];
}

function enhancementEffects(
  unit: UnitNumber,
  parameter: EffectedParameter,
  t: TFunction
): ReadonlyArray<StatusEffectPopoverRowProps> {
  switch (parameter) {
  case 'hp': {
    const lv = useStatusEnhancedLv(parameter, unit);
    const value = useRecoilValue(unitHpEnhancementStatusEffectState(unit)).hp_up?.value;
    return lv && value ?
      [{
        key: 'enhancement',
        affected: t('status.affected.enhancement', { lv }),
        value
      }] :
      [];
  }
  case 'atk': {
    const lv = useStatusEnhancedLv(parameter, unit);
    const value = useRecoilValue(unitAtkEnhancementStatusEffectState(unit)).atk_up;
    return lv && value ?
      [{
        key: 'enhancement',
        affected: t('status.affected.enhancement', { lv }),
        value: calcMilliValue(value)
      }] :
      [];
  }
  case 'def': {
    const lv = useStatusEnhancedLv(parameter, unit);
    const value = useRecoilValue(unitDefEnhancementStatusEffectState(unit)).def_up;
    return lv && value ?
      [{
        key: 'enhancement',
        affected: t('status.affected.enhancement', { lv }),
        value: calcMilliValue(value)
      }] :
      [];
  }
  case 'acc': {
    const lv = useStatusEnhancedLv(parameter, unit);
    const value = useRecoilValue(unitAccEnhancementStatusEffectState(unit)).acc_up;
    return lv && value ?
      [{
        key: 'enhancement',
        affected: t('status.affected.enhancement', { lv }),
        value: calcMilliPercentageValue(value)
      }] :
      [];
  }
  case 'eva': {
    const lv = useStatusEnhancedLv(parameter, unit);
    const value = useRecoilValue(unitEvaEnhancementStatusEffectState(unit)).eva_up;
    return lv && value ?
      [{
        key: 'enhancement',
        affected: t('status.affected.enhancement', { lv }),
        value: calcMilliPercentageValue(value)
      }] :
      [];
  }
  case 'cri': {
    const lv = useStatusEnhancedLv(parameter, unit);
    const value = useRecoilValue(unitCriEnhancementStatusEffectState(unit)).cri_up;
    return lv && value ?
      [{
        key: 'enhancement',
        affected: t('status.affected.enhancement', { lv }),
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
    if (effects.hp_up) {
      value = effects.hp_up.value;
    } else if (effects.hp_down) {
      value = -effects.hp_down.value;
    }
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
      affected: t('status.affected.equipment', { id: equipment.id, lv: equipment.enhanceLv }),
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
    return bonus && 'hp_up' in bonus && value ?
      [{
        key: 'core_link_bonus',
        affected: t('status.affected.core_link_multiplier_bonus', { value: calcMilliPercentageValue(bonus.hp_up) }),
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
        affected: t('status.affected.core_link_multiplier_bonus', { value: calcMilliPercentageValue(bonus.atk_up) }),
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
        affected: t('status.affected.core_link_multiplier_bonus', { value: calcMilliPercentageValue(bonus.def_up) }),
        value: calcMilliValue(value)
      }] :
      [];
  }
  case 'acc': {
    const bonus = useRecoilValue(coreLinkBonusEffectsState(unit));
    return bonus && 'acc_up' in bonus && bonus.acc_up.milliPercentage ?
      [{
        key: 'core_link_bonus',
        affected: t('status.affected.core_link_bonus'),
        value: calcMilliPercentageValue(bonus.acc_up)
      }] :
      [];
  }
  case 'eva': {
    const bonus = useRecoilValue(coreLinkBonusEffectsState(unit));
    return bonus && 'eva_up' in bonus && bonus.eva_up.milliPercentage ?
      [{
        key: 'core_link_bonus',
        affected: t('status.affected.core_link_bonus'),
        value: calcMilliPercentageValue(bonus.eva_up)
      }] :
      [];
  }
  case 'cri': {
    const bonus = useRecoilValue(coreLinkBonusEffectsState(unit));
    return bonus && 'cri_up' in bonus && bonus.cri_up.milliPercentage ?
      [{
        key: 'core_link_bonus',
        affected: t('status.affected.core_link_bonus'),
        value: calcMilliPercentageValue(bonus.cri_up)
      }] :
      [];
  }
  case 'spd': {
    const bonus = useRecoilValue(coreLinkBonusEffectsState(unit));
    return bonus && 'spd_up' in bonus && bonus.spd_up.microValue ?
      [{
        key: 'core_link_bonus',
        affected: t('status.affected.full_link_bonus'),
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
        affected: t('status.affected.full_link_multiplier_bonus', { value: calcMilliPercentageValue(bonus.hp_up) }),
        value
      }] :
      [];
  }
  case 'acc': {
    const bonus = useRecoilValue(fullLinkBonusEffectState(unit));
    return bonus && 'acc_up' in bonus ?
      [{
        key: 'full_link_bonus',
        affected: t('status.affected.full_link_bonus'),
        value: calcMilliPercentageValue(bonus.acc_up)
      }] :
      [];
  }
  case 'eva': {
    const bonus = useRecoilValue(fullLinkBonusEffectState(unit));
    return bonus && 'eva_up' in bonus ?
      [{
        key: 'full_link_bonus',
        affected: t('status.affected.full_link_bonus'),
        value: calcMilliPercentageValue(bonus.eva_up)
      }] :
      [];
  }
  case 'cri': {
    const bonus = useRecoilValue(fullLinkBonusEffectState(unit));
    return bonus && 'cri_up' in bonus ?
      [{
        key: 'full_link_bonus',
        affected: t('status.affected.full_link_bonus'),
        value: calcMilliPercentageValue(bonus.cri_up)
      }] :
      [];
  }
  case 'spd': {
    const bonus = useRecoilValue(fullLinkBonusEffectState(unit));
    return bonus && 'spd_up' in bonus ?
      [{
        key: 'full_link_bonus',
        affected: t('status.affected.full_link_bonus'),
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
