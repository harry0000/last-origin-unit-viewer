import { TFunction } from 'i18next';
import { useRecoilValue } from 'recoil';
import { useTranslation } from 'react-i18next';

import {
  selectedUnitChip1EquipmentState,
  selectedUnitChip2EquipmentState,
  selectedUnitGearEquipmentState,
  selectedUnitOsEquipmentState
} from '../../state/equipment/unitEquipmentState';
import {
  selectedUnitChip1EquipmentStatusEffectState,
  selectedUnitChip2EquipmentStatusEffectState,
  selectedUnitGearEquipmentStatusEffectState,
  selectedUnitOsEquipmentStatusEffectState
} from '../../state/equipment/unitEquipmentStatusEffectState';
import {
  selectedUnitCoreLinkBonusEffectsState,
  selectedUnitFullLinkBonusEffectState
} from '../../state/corelink/unitCoreLinkState';
import {
  selectedUnitAccEnhancementStatusEffectState,
  selectedUnitAtkEnhancementStatusEffectState,
  selectedUnitCriEnhancementStatusEffectState,
  selectedUnitDefEnhancementStatusEffectState,
  selectedUnitEvaEnhancementStatusEffectState,
  selectedUnitHpEnhancementStatusEffectState,
  selectedUnitStatusEnhancementLvState
} from '../../state/status/unitLvStatusState';
import {
  selectedUnitAtkStatusParameterState,
  selectedUnitDefStatusParameterState,
  selectedUnitHpStatusParameterState
} from '../../state/status/selectedUnitStatusParameterState';

import { EffectedParameter, StatusEffectPopoverRowProps } from '../../component/status/StatusEffectsView';

import { ChipEquipment, GearEquipment, OsEquipment } from '../../domain/status/UnitEquipment';
import { StatusEffect } from '../../domain/status/StatusEffect';
import { calcMicroValue, calcMilliPercentageValue, calcMilliValue } from '../../domain/ValueUnit';

export function useStatusEffects(parameter: EffectedParameter): ReadonlyArray<StatusEffectPopoverRowProps> {
  const { t } = useTranslation();

  const chip1  = useRecoilValue(selectedUnitChip1EquipmentState);
  const chip2  = useRecoilValue(selectedUnitChip2EquipmentState);
  const os     = useRecoilValue(selectedUnitOsEquipmentState);
  const gear   = useRecoilValue(selectedUnitGearEquipmentState);

  const chip1Effect = useRecoilValue(selectedUnitChip1EquipmentStatusEffectState);
  const chip2Effect = useRecoilValue(selectedUnitChip2EquipmentStatusEffectState);
  const osEffect    = useRecoilValue(selectedUnitOsEquipmentStatusEffectState);
  const gearEffect  = useRecoilValue(selectedUnitGearEquipmentStatusEffectState);

  return [
    ...enhancementEffects(parameter, t),
    ...equipmentEffects(parameter, chip1Effect, chip1?.chip1, 'chip1', t),
    ...equipmentEffects(parameter, chip2Effect, chip2?.chip2, 'chip2', t),
    ...equipmentEffects(parameter, osEffect,    os?.os,       'os',    t),
    ...equipmentEffects(parameter, gearEffect,  gear?.gear,   'gear',  t),
    ...coreLinkBonusEffects(parameter, t),
    ...fullLinkBonusEffects(parameter, t)
  ];
}

function enhancementEffects(
  parameter: EffectedParameter,
  t: TFunction
): ReadonlyArray<StatusEffectPopoverRowProps> {
  switch (parameter) {
  case 'hp': {
    const lv = useRecoilValue(selectedUnitStatusEnhancementLvState(parameter));
    const value = useRecoilValue(selectedUnitHpEnhancementStatusEffectState)?.hp_up?.value;
    return lv && value ?
      [{
        key: 'enhancement',
        effected: t('status.effected.enhancement', { lv }),
        value
      }] :
      [];
  }
  case 'atk': {
    const lv = useRecoilValue(selectedUnitStatusEnhancementLvState(parameter));
    const value = useRecoilValue(selectedUnitAtkEnhancementStatusEffectState)?.atk_up;
    return lv && value ?
      [{
        key: 'enhancement',
        effected: t('status.effected.enhancement', { lv }),
        value: calcMilliValue(value)
      }] :
      [];
  }
  case 'def': {
    const lv = useRecoilValue(selectedUnitStatusEnhancementLvState(parameter));
    const value = useRecoilValue(selectedUnitDefEnhancementStatusEffectState)?.def_up;
    return lv && value ?
      [{
        key: 'enhancement',
        effected: t('status.effected.enhancement', { lv }),
        value: calcMilliValue(value)
      }] :
      [];
  }
  case 'acc': {
    const lv = useRecoilValue(selectedUnitStatusEnhancementLvState(parameter));
    const value = useRecoilValue(selectedUnitAccEnhancementStatusEffectState)?.acc_up;
    return lv && value ?
      [{
        key: 'enhancement',
        effected: t('status.effected.enhancement', { lv }),
        value: calcMilliPercentageValue(value)
      }] :
      [];
  }
  case 'eva': {
    const lv = useRecoilValue(selectedUnitStatusEnhancementLvState(parameter));
    const value = useRecoilValue(selectedUnitEvaEnhancementStatusEffectState)?.eva_up;
    return lv && value ?
      [{
        key: 'enhancement',
        effected: t('status.effected.enhancement', { lv }),
        value: calcMilliPercentageValue(value)
      }] :
      [];
  }
  case 'cri': {
    const lv = useRecoilValue(selectedUnitStatusEnhancementLvState(parameter));
    const value = useRecoilValue(selectedUnitCriEnhancementStatusEffectState)?.cri_up;
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
      effected: t('status.effected.equipment', { id: equipment.equipped.id, lv: equipment.enhanceLv }),
      value
    }];
  } else {
    return [];
  }
}

function coreLinkBonusEffects(
  parameter: EffectedParameter,
  t: TFunction
): ReadonlyArray<StatusEffectPopoverRowProps> {
  switch (parameter) {
  case 'hp': {
    const bonus = useRecoilValue(selectedUnitCoreLinkBonusEffectsState);
    const value = useRecoilValue(selectedUnitHpStatusParameterState)?.hpCoreLinkBonus.value;
    return bonus && value ?
      [{
        key: 'core_link_bonus',
        effected: t('status.effected.core_link_multiplier_bonus', { value: calcMilliPercentageValue(bonus.hp_up) }),
        value
      }] :
      [];
  }
  case 'atk': {
    const bonus = useRecoilValue(selectedUnitCoreLinkBonusEffectsState);
    const value = useRecoilValue(selectedUnitAtkStatusParameterState)?.atkCoreLinkBonus;
    return bonus && value?.milliValue ?
      [{
        key: 'core_link_bonus',
        effected: t('status.effected.core_link_multiplier_bonus', { value: calcMilliPercentageValue(bonus.atk_up) }),
        value: calcMilliValue(value)
      }] :
      [];
  }
  case 'def': {
    const bonus = useRecoilValue(selectedUnitCoreLinkBonusEffectsState);
    const value = useRecoilValue(selectedUnitDefStatusParameterState)?.defCoreLinkBonus;
    return bonus && 'def_up' in bonus && value?.milliValue ?
      [{
        key: 'core_link_bonus',
        effected: t('status.effected.core_link_multiplier_bonus', { value: calcMilliPercentageValue(bonus.def_up) }),
        value: calcMilliValue(value)
      }] :
      [];
  }
  case 'acc': {
    const bonus = useRecoilValue(selectedUnitCoreLinkBonusEffectsState);
    return bonus && 'acc_up' in bonus && bonus.acc_up.milliPercentage ?
      [{
        key: 'core_link_bonus',
        effected: t('status.effected.core_link_bonus'),
        value: calcMilliPercentageValue(bonus.acc_up)
      }] :
      [];
  }
  case 'eva': {
    const bonus = useRecoilValue(selectedUnitCoreLinkBonusEffectsState);
    return bonus && 'eva_up' in bonus && bonus.eva_up.milliPercentage ?
      [{
        key: 'core_link_bonus',
        effected: t('status.effected.core_link_bonus'),
        value: calcMilliPercentageValue(bonus.eva_up)
      }] :
      [];
  }
  case 'cri': {
    const bonus = useRecoilValue(selectedUnitCoreLinkBonusEffectsState);
    return bonus && 'cri_up' in bonus && bonus.cri_up.milliPercentage ?
      [{
        key: 'core_link_bonus',
        effected: t('status.effected.core_link_bonus'),
        value: calcMilliPercentageValue(bonus.cri_up)
      }] :
      [];
  }
  case 'spd': {
    const bonus = useRecoilValue(selectedUnitCoreLinkBonusEffectsState);
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
  parameter: EffectedParameter,
  t: TFunction
): ReadonlyArray<StatusEffectPopoverRowProps> {
  switch (parameter) {
  case 'hp': {
    const bonus = useRecoilValue(selectedUnitFullLinkBonusEffectState);
    const value = useRecoilValue(selectedUnitHpStatusParameterState)?.hpFullLinkBonus?.value ?? 0;
    return bonus && 'hp_up' in bonus ?
      [{
        key: 'full_link_bonus',
        effected: t('status.effected.full_link_multiplier_bonus', { value: calcMilliPercentageValue(bonus.hp_up) }),
        value
      }] :
      [];
  }
  case 'acc': {
    const bonus = useRecoilValue(selectedUnitFullLinkBonusEffectState);
    return bonus && 'acc_up' in bonus ?
      [{
        key: 'full_link_bonus',
        effected: t('status.effected.full_link_bonus'),
        value: calcMilliPercentageValue(bonus.acc_up)
      }] :
      [];
  }
  case 'eva': {
    const bonus = useRecoilValue(selectedUnitFullLinkBonusEffectState);
    return bonus && 'eva_up' in bonus ?
      [{
        key: 'full_link_bonus',
        effected: t('status.effected.full_link_bonus'),
        value: calcMilliPercentageValue(bonus.eva_up)
      }] :
      [];
  }
  case 'cri': {
    const bonus = useRecoilValue(selectedUnitFullLinkBonusEffectState);
    return bonus && 'cri_up' in bonus ?
      [{
        key: 'full_link_bonus',
        effected: t('status.effected.full_link_bonus'),
        value: calcMilliPercentageValue(bonus.cri_up)
      }] :
      [];
  }
  case 'spd': {
    const bonus = useRecoilValue(selectedUnitFullLinkBonusEffectState);
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
