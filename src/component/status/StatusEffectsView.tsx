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

import { selectedUnitStatusState } from '../../state/status/selectedUnitStatusState';

import { ChipEquipment, GearEquipment, OsEquipment } from '../../domain/status/UnitEquipment';
import { StatusEffect } from '../../domain/status/StatusEffect';
import UnitStatus from '../../domain/status/UnitStatus';
import { calcMicroValue, calcMilliPercentageValue, calcMilliValue } from '../../domain/ValueUnit';
import {
  formatMicroValue,
  formatMilliPercentage,
  formatMilliValue,
  formatResistPercentage
} from './UnitStatusParameterFormatter';

type EffectedParameter = 'hp' | 'atk' | 'def' | 'acc' | 'eva' | 'cri' | 'spd' | 'fireResist' | 'iceResist' | 'electricResist'

function getEffectValue(parameter: EffectedParameter, status?: UnitStatus): number {
  if (!status) {
    return 0;
  }

  switch (parameter) {
  case 'hp':
    return status.effects.hpValue.value;
  case 'atk':
    return calcMilliValue(status.effects.atkValue);
  case 'def':
    return calcMilliValue(status.effects.defValue);
  case 'acc':
    return calcMilliPercentageValue(status.effects.accValue);
  case 'eva':
    return calcMilliPercentageValue(status.effects.evaValue);
  case 'cri':
    return calcMilliPercentageValue(status.effects.criValue);
  case 'spd':
    return calcMicroValue(status.effects.spdValue);
  case 'fireResist':
    return calcMilliPercentageValue(status.effects.fireResistValue);
  case 'iceResist':
    return calcMilliPercentageValue(status.effects.iceResistValue);
  case 'electricResist':
    return calcMilliPercentageValue(status.effects.electricResistValue);
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

const enhancementEffects = (
  parameter: EffectedParameter,
  status: UnitStatus | undefined,
  t: TFunction
): Array<EmotionJSX.Element> => {
  if (!status) {
    return [];
  }

  let props: { effected: string, value: number } | undefined;
  switch (parameter) {
  case 'hp':
    if (status.effects.enhancement.hp_up) {
      props = {
        effected: t('status.effected.enhancement', { lv: status.hpLv }),
        value: status.effects.enhancement.hp_up.value
      };
    }
    break;
  case 'atk':
    if (status.effects.enhancement.atk_up) {
      props = {
        effected: t('status.effected.enhancement', { lv: status.atkLv }),
        value: calcMilliValue(status.effects.enhancement.atk_up)
      };
    }
    break;
  case 'def':
    if (status.effects.enhancement.def_up) {
      props = {
        effected: t('status.effected.enhancement', { lv: status.defLv }),
        value: calcMilliValue(status.effects.enhancement.def_up)
      };
    }
    break;
  case 'acc':
    if (status.effects.enhancement.acc_up) {
      props = {
        effected: t('status.effected.enhancement', { lv: status.accLv }),
        value: calcMilliPercentageValue(status.effects.enhancement.acc_up)
      };
    }
    break;
  case 'eva':
    if (status.effects.enhancement.eva_up) {
      props = {
        effected: t('status.effected.enhancement', { lv: status.evaLv }),
        value: calcMilliPercentageValue(status.effects.enhancement.eva_up)
      };
    }
    break;
  case 'cri':
    if (status.effects.enhancement.cri_up) {
      props = {
        effected: t('status.effected.enhancement', { lv: status.criLv }),
        value: calcMilliPercentageValue(status.effects.enhancement.cri_up)
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
  const status = useRecoilValue(selectedUnitStatusState);
  const effectValue = getEffectValue(parameter, status);
  const effects = [
    ...enhancementEffects(parameter, status, t),
    ...equipmentEffects(parameter, status?.effects.chip1, status?.chip1, 'chip1', t),
    ...equipmentEffects(parameter, status?.effects.chip2, status?.chip2, 'chip2', t),
    ...equipmentEffects(parameter, status?.effects.os,    status?.os,    'os',    t),
    ...equipmentEffects(parameter, status?.effects.gear,  status?.gear,  'gear',  t)
  ];

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
              <StatusEffectValueView
                css={{ textDecoration: 'underline' }}
                parameter={parameter}
                value={effectValue}
              />
            </StatusEffectsPopoverView>) :
            (<StatusEffectValueView parameter={parameter} value={effectValue} />)
        }
      </div>
      <div>&nbsp;)</div>
    </div>
  );
};

export default StatusEffectsView;
