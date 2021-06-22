import { TFunction } from 'i18next';
import { useRecoilValue } from 'recoil';
import { useTranslation } from 'react-i18next';

import { selectedUnitLvStatusState } from '../../state/status/unitLvStatusState';
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
import { selectedUnitStatusParameterState } from '../../state/status/unitStatusParameterState';

import { EffectedParameter, StatusEffectPopoverRowProps } from '../../component/status/StatusEffectsView';

import { ChipEquipment, GearEquipment, OsEquipment } from '../../domain/status/UnitEquipment';
import { CoreLinkBonus, FullLinkBonus } from '../../domain/UnitCoreLinkBonusData';
import { StatusEffect } from '../../domain/status/StatusEffect';
import UnitLvStatus from '../../domain/status/UnitLvStatus';
import { UnitStatusParameter } from '../../domain/status/UnitStatusParameter';
import { calcMicroValue, calcMilliPercentageValue, calcMilliValue } from '../../domain/ValueUnit';

export function useStatusEffects(parameter: EffectedParameter): ReadonlyArray<StatusEffectPopoverRowProps> {
  const { t } = useTranslation();
  const status = useRecoilValue(selectedUnitLvStatusState);
  const chip1  = useRecoilValue(selectedUnitChip1EquipmentState);
  const chip2  = useRecoilValue(selectedUnitChip2EquipmentState);
  const os     = useRecoilValue(selectedUnitOsEquipmentState);
  const gear   = useRecoilValue(selectedUnitGearEquipmentState);

  const chip1Effect = useRecoilValue(selectedUnitChip1EquipmentStatusEffectState);
  const chip2Effect = useRecoilValue(selectedUnitChip2EquipmentStatusEffectState);
  const osEffect    = useRecoilValue(selectedUnitOsEquipmentStatusEffectState);
  const gearEffect  = useRecoilValue(selectedUnitGearEquipmentStatusEffectState);

  const unitParameter = useRecoilValue(selectedUnitStatusParameterState);
  const coreLinkEffects = useRecoilValue(selectedUnitCoreLinkBonusEffectsState);
  const fullLinkEffects = useRecoilValue(selectedUnitFullLinkBonusEffectState);

  return [
    ...enhancementEffects(parameter, status, t),
    ...equipmentEffects(parameter, chip1Effect, chip1?.chip1, 'chip1', t),
    ...equipmentEffects(parameter, chip2Effect, chip2?.chip2, 'chip2', t),
    ...equipmentEffects(parameter, osEffect,    os?.os,       'os',    t),
    ...equipmentEffects(parameter, gearEffect,  gear?.gear,   'gear',  t),
    ...coreLinkBonusEffects(parameter, coreLinkEffects, unitParameter, t),
    ...fullLinkBonusEffects(parameter, fullLinkEffects, unitParameter, t)
  ];
}

function enhancementEffects(
  parameter: EffectedParameter,
  status: UnitLvStatus | undefined,
  t: TFunction
): ReadonlyArray<StatusEffectPopoverRowProps> {
  if (!status) {
    return [];
  }

  let props: { effected: string, value: number } | undefined;
  switch (parameter) {
  case 'hp':
    if (status.statusEffects.hp_up) {
      props = {
        effected: t('status.effected.enhancement', { lv: status.hpLv }),
        value: status.statusEffects.hp_up.value
      };
    }
    break;
  case 'atk':
    if (status.statusEffects.atk_up) {
      props = {
        effected: t('status.effected.enhancement', { lv: status.atkLv }),
        value: calcMilliValue(status.statusEffects.atk_up)
      };
    }
    break;
  case 'def':
    if (status.statusEffects.def_up) {
      props = {
        effected: t('status.effected.enhancement', { lv: status.defLv }),
        value: calcMilliValue(status.statusEffects.def_up)
      };
    }
    break;
  case 'acc':
    if (status.statusEffects.acc_up) {
      props = {
        effected: t('status.effected.enhancement', { lv: status.accLv }),
        value: calcMilliPercentageValue(status.statusEffects.acc_up)
      };
    }
    break;
  case 'eva':
    if (status.statusEffects.eva_up) {
      props = {
        effected: t('status.effected.enhancement', { lv: status.evaLv }),
        value: calcMilliPercentageValue(status.statusEffects.eva_up)
      };
    }
    break;
  case 'cri':
    if (status.statusEffects.cri_up) {
      props = {
        effected: t('status.effected.enhancement', { lv: status.criLv }),
        value: calcMilliPercentageValue(status.statusEffects.cri_up)
      };
    }
    break;
  case 'spd':
  case 'fireResist':
  case 'iceResist':
  case 'electricResist':
    break;
  }

  if (props) {
    return [{
      key: 'enhancement',
      ...props
    }];
  } else {
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
  bonus: CoreLinkBonus | undefined,
  statusParameter: UnitStatusParameter | undefined,
  t: TFunction
): ReadonlyArray<StatusEffectPopoverRowProps> {
  if (!bonus || !statusParameter) {
    return [];
  }

  let props: { effected: string, value: number } | undefined;
  switch (parameter) {
  case 'hp':
    if (bonus.hp_up.milliPercentage !== 0) {
      props = {
        effected: t('status.effected.core_link_multiplier_bonus', { value: calcMilliPercentageValue(bonus.hp_up) }),
        value: statusParameter.hpCoreLinkBonus.value
      };
    }
    break;
  case 'atk':
    if (bonus.atk_up.milliPercentage !== 0) {
      props = {
        effected: t('status.effected.core_link_multiplier_bonus', { value: calcMilliPercentageValue(bonus.atk_up) }),
        value: calcMilliValue(statusParameter.atkCoreLinkBonus)
      };
    }
    break;
  case 'def':
    if ('def_up' in bonus && bonus.def_up.milliPercentage !== 0) {
      props = {
        effected: t('status.effected.core_link_multiplier_bonus', { value: calcMilliPercentageValue(bonus.def_up) }),
        value: calcMilliValue(statusParameter.defCoreLinkBonus)
      };
    }
    break;
  case 'acc':
    if ('acc_up' in bonus && bonus.acc_up.milliPercentage !== 0) {
      props = {
        effected: t('status.effected.core_link_bonus'),
        value: calcMilliPercentageValue(bonus.acc_up)
      };
    }
    break;
  case 'eva':
    if ('eva_up' in bonus && bonus.eva_up.milliPercentage !== 0) {
      props = {
        effected: t('status.effected.core_link_bonus'),
        value: calcMilliPercentageValue(bonus.eva_up)
      };
    }
    break;
  case 'cri':
    if ('cri_up' in bonus && bonus.cri_up.milliPercentage !== 0) {
      props = {
        effected: t('status.effected.core_link_bonus'),
        value: calcMilliPercentageValue(bonus.cri_up)
      };
    }
    break;
  case 'spd':
    if ('spd_up' in bonus && bonus.spd_up.microValue !== 0) {
      props = {
        effected: t('status.effected.full_link_bonus'),
        value: calcMicroValue(bonus.spd_up)
      };
    }
    break;
  case 'fireResist':
  case 'iceResist':
  case 'electricResist':
    break;
  }

  if (props) {
    return [{
      key: 'core_link_bonus',
      ...props
    }];
  } else {
    return [];
  }
}

function fullLinkBonusEffects(
  parameter: EffectedParameter,
  bonus: FullLinkBonus | undefined,
  statusParameter: UnitStatusParameter | undefined,
  t: TFunction
): ReadonlyArray<StatusEffectPopoverRowProps> {
  if (!bonus || !statusParameter) {
    return [];
  }

  let props: { effected: string, value: number } | undefined;
  switch (parameter) {
  case 'hp':
    if ('hp_up' in bonus) {
      props = {
        effected: t('status.effected.full_link_multiplier_bonus', { value: calcMilliPercentageValue(bonus.hp_up) }),
        value: statusParameter.hpFullLinkBonus.value
      };
    }
    break;
  case 'acc':
    if ('acc_up' in bonus) {
      props = {
        effected: t('status.effected.full_link_bonus'),
        value: calcMilliPercentageValue(bonus.acc_up)
      };
    }
    break;
  case 'eva':
    if ('eva_up' in bonus) {
      props = {
        effected: t('status.effected.full_link_bonus'),
        value: calcMilliPercentageValue(bonus.eva_up)
      };
    }
    break;
  case 'cri':
    if ('cri_up' in bonus) {
      props = {
        effected: t('status.effected.full_link_bonus'),
        value: calcMilliPercentageValue(bonus.cri_up)
      };
    }
    break;
  case 'spd':
    if ('spd_up' in bonus) {
      props = {
        effected: t('status.effected.full_link_bonus'),
        value: calcMicroValue(bonus.spd_up)
      };
    }
    break;
  case 'atk':
  case 'def':
  case 'fireResist':
  case 'iceResist':
  case 'electricResist':
    break;
  }

  if (props) {
    return [{
      key: 'full_link_bonus',
      ...props
    }];
  } else {
    return [];
  }
}
