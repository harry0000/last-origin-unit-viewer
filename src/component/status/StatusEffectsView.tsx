/** @jsxRuntime classic */
/** @jsx jsx */
import { Theme, jsx } from '@emotion/react';
import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { Interpolation } from '@emotion/serialize';
import React, { ReactNode } from 'react';
import { TFunction } from 'i18next';
import { useRecoilValue } from 'recoil';
import { useTranslation } from 'react-i18next';

import { OverlayTrigger, Popover } from 'react-bootstrap';

import { ChipEquipment, GearEquipment, OsEquipment } from '../../domain/status/UnitEquipment';
import { StatusEffect } from '../../domain/status/StatusEffect';
import UnitEnhancementStatus from '../../domain/status/UnitEnhancementStatus';
import {
  formatMicroValue,
  formatMilliPercentage,
  formatMilliValue,
  formatResistPercentage
} from './UnitStatusParameterFormatter';
import UnitStatusEffectSummary from '../../domain/status/UnitStatusEffectSummary';
import { calcMicroValue, calcMilliPercentageValue, calcMilliValue } from '../../domain/ValueUnit';

import {
  selectedUnitChip1EquipmentState,
  selectedUnitChip2EquipmentState,
  selectedUnitGearEquipmentState,
  selectedUnitOsEquipmentState
} from '../../state/equipment/unitEquipmentState';
import { selectedUnitEnhancementStatusState } from '../../state/status/unitEnhancementStatusState';
import { selectedUnitStatusEffectSummaryState } from '../../state/status/unitStatusEffectState';
import {
  selectedUnitChip1EquipmentStatusEffectState,
  selectedUnitChip2EquipmentStatusEffectState,
  selectedUnitGearEquipmentStatusEffectState,
  selectedUnitOsEquipmentStatusEffectState
} from '../../state/equipment/unitEquipmentStatusEffectState';

type EffectedParameter = 'hp' | 'atk' | 'def' | 'acc' | 'eva' | 'cri' | 'spd' | 'fireResist' | 'iceResist' | 'electricResist'

function useStatusEffects(parameter: EffectedParameter, t: TFunction) {
  const status = useRecoilValue(selectedUnitEnhancementStatusState);
  const chip1 = useRecoilValue(selectedUnitChip1EquipmentState);
  const chip2 = useRecoilValue(selectedUnitChip2EquipmentState);
  const os    = useRecoilValue(selectedUnitOsEquipmentState);
  const gear  = useRecoilValue(selectedUnitGearEquipmentState);

  const chip1Effect = useRecoilValue(selectedUnitChip1EquipmentStatusEffectState);
  const chip2Effect = useRecoilValue(selectedUnitChip2EquipmentStatusEffectState);
  const osEffect    = useRecoilValue(selectedUnitOsEquipmentStatusEffectState);
  const gearEffect  = useRecoilValue(selectedUnitGearEquipmentStatusEffectState);

  return  [
    ...enhancementEffects(parameter, status, t),
    ...equipmentEffects(parameter, chip1Effect, chip1?.chip1, 'chip1', t),
    ...equipmentEffects(parameter, chip2Effect, chip2?.chip2, 'chip2', t),
    ...equipmentEffects(parameter, osEffect,    os?.os,       'os',    t),
    ...equipmentEffects(parameter, gearEffect,  gear?.gear,   'gear',  t)
  ];
}

function getEffectValue(parameter: EffectedParameter, effects?: UnitStatusEffectSummary): number {
  if (!effects) {
    return 0;
  }

  switch (parameter) {
  case 'hp':
    return effects.hp.value;
  case 'atk':
    return calcMilliValue(effects.atk);
  case 'def':
    return calcMilliValue(effects.def);
  case 'acc':
    return calcMilliPercentageValue(effects.acc);
  case 'eva':
    return calcMilliPercentageValue(effects.eva);
  case 'cri':
    return calcMilliPercentageValue(effects.cri);
  case 'spd':
    return calcMicroValue(effects.spd);
  case 'fireResist':
    return calcMilliPercentageValue(effects.fireResist);
  case 'iceResist':
    return calcMilliPercentageValue(effects.iceResist);
  case 'electricResist':
    return calcMilliPercentageValue(effects.electricResist);
  }
}

const effectValueColor = {
  positive: { color: '#3c3' },
  negative: { color: '#c33' }
} as const;

const StatusEffectValueView: React.FC<{
  css?: Interpolation<Theme>,
  parameter: EffectedParameter,
  value: number
}> = ({ parameter, value, ...others }) => {
  const [sign, color] =
    value === 0 ? ['+', undefined] as const :
      value > 0 ?
        ['+', effectValueColor.positive] :
        ['-', effectValueColor.negative];
  const formatted = (() => {
    switch (parameter) {
    case 'hp':
      return Math.abs(value) + '';
    case 'atk':
    case 'def':
      return formatMilliValue(Math.abs(value));
    case 'acc':
    case 'eva':
    case 'cri':
      return formatMilliPercentage(Math.abs(value));
    case 'spd':
      return formatMicroValue(Math.abs(value));
    case 'fireResist':
    case 'iceResist':
    case 'electricResist':
      return formatResistPercentage(Math.abs(value));
    }
  })();

  return (<span {...others} css={color}>{`${sign}\u00A0${formatted}`}</span>);
};

const StatusEffectSumamryValueView: React.FC<{
  css?: Interpolation<Theme>,
  parameter: EffectedParameter
}> = ({ parameter, ...others }) => {
  const summary = useRecoilValue(selectedUnitStatusEffectSummaryState);
  const value = getEffectValue(parameter, summary);
  return (
    <StatusEffectValueView {...others}  parameter={parameter} value={value} />
  );
};

const enhancementEffects = (
  parameter: EffectedParameter,
  status: UnitEnhancementStatus | undefined,
  t: TFunction
): Array<EmotionJSX.Element> => {
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
    return [(
      <StatusEffectPopoverRow key="enhancement" effected={props.effected} value={props.value} parameter={parameter} />
    )];
  } else {
    return [];
  }
};

const equipmentEffects = (
  parameter: EffectedParameter,
  effects: StatusEffect | undefined,
  equipment: ChipEquipment | OsEquipment | GearEquipment | undefined,
  slot: 'chip1' | 'chip2' | 'os' | 'gear',
  t: TFunction
): Array<EmotionJSX.Element> => {
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
    return [(
      <StatusEffectPopoverRow
        key={`equipment-${slot}`}
        parameter={parameter}
        effected={t('status.effected.equipment', { id: equipment.equipped.id, lv: equipment.enhanceLv })}
        value={value}
      />
    )];
  } else {
    return [];
  }
};

const StatusEffectPopoverRow: React.FC<{
  key: string,
  effected: string,
  parameter: EffectedParameter,
  value: number
}> = ({ key, effected, parameter, value }) => {
  return (
    <div
      key={key}
      css={{
        display: 'flex',
        color: '#ccc',
        fontSize: '0.9em',
        fontWeight: 'bold',
        backgroundColor: '#0a101e',
        borderRadius: 3,
        padding: '3px 8px'
      }}
    >
      <div css={{ flexShrink: 0 }}>
        {effected}
      </div>
      <div css={{ width: 120, textAlign: 'right', marginLeft: 'auto' }}>
        <StatusEffectValueView parameter={parameter} value={value} />
      </div>
    </div>
  );
};

const StatusEffectsPopoverView: React.FC<{
  effects: Array<EmotionJSX.Element>,
  children: ReactNode
}> = ({ effects, children }) => {
  const popover = (
    <Popover id="popover-unit-status-effects" css={{ maxWidth: 'none' }}>
      <Popover.Content css={{ padding: 2 }}>
        <div css={{
          display: 'flex',
          flexDirection: 'column',
          borderRadius: 3,
          '& > div:not(:first-of-type)': {
            marginTop: 2
          }
        }}>
          {effects}
        </div>
      </Popover.Content>
    </Popover>
  );

  return (
    <OverlayTrigger
      placement='bottom'
      overlay={popover}
    >
      <span>{children}</span>
    </OverlayTrigger>
  );
};

const StatusEffectsView: React.FC<{
  css?: Interpolation<Theme>,
  parameter: EffectedParameter
}> = ({ parameter, ...others }) => {
  const { t } = useTranslation();
  const effects = useStatusEffects(parameter, t);

  return (
    <div
      { ...others }
      css={{
        display: 'flex',
        justifyContent: 'flex-end'
      }}
    >
      <div css={{ marginRight: 'auto' }}>(&nbsp;</div>
      <div css={{ marginLeft: 'auto' }}>
        {
          effects.length > 0 ?
            (<StatusEffectsPopoverView effects={effects}>
              <StatusEffectSumamryValueView
                css={{ textDecoration: 'underline' }}
                parameter={parameter}
              />
            </StatusEffectsPopoverView>) :
            (<StatusEffectSumamryValueView parameter={parameter} />)
        }
      </div>
      <div>&nbsp;)</div>
    </div>
  );
};

export default StatusEffectsView;
