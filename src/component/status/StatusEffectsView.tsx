/** @jsxRuntime classic */
/** @jsx jsx */
import { Theme, jsx } from '@emotion/react';
import { Interpolation } from '@emotion/serialize';
import React, { ReactNode } from 'react';

import { OverlayTrigger, Popover } from 'react-bootstrap';
import PopoverListContent from '../common/PopoverListContent';
import { effectValueColor } from '../common/effectValueColor';
import {
  formatMicroValue,
  formatMilliPercentage,
  formatMilliValue,
  formatResistPercentage
} from './UnitStatusParameterFormatter';

import { useStatusEffects } from '../../hook/status/StatusEffects';
import { useStatusEffectsSummary } from '../../hook/status/StatusEffectsSummary';

export type EffectedParameter = 'hp' | 'atk' | 'def' | 'acc' | 'eva' | 'cri' | 'spd' | 'fireResist' | 'iceResist' | 'electricResist'

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

const StatusEffectSummaryView: React.FC<{
  css?: Interpolation<Theme>,
  parameter: EffectedParameter
}> = ({ parameter, ...others }) => {
  const summary = useStatusEffectsSummary(parameter);

  return (
    <StatusEffectValueView {...others}  parameter={parameter} value={summary} />
  );
};

export type StatusEffectPopoverRowProps = {
  key: string,
  effected: string,
  value: number
}

const StatusEffectsPopoverView: React.FC<{
  parameter: EffectedParameter,
  effects: ReadonlyArray<StatusEffectPopoverRowProps>,
  children: ReactNode
}> = ({ parameter, effects, children }) => {
  const popover = (
    <Popover id="popover-unit-status-effects" css={{ maxWidth: 'none' }}>
      <PopoverListContent>
        {effects.map(({ key, effected, value }) => (
          <PopoverListContent.Row key={key} css={{ display: 'flex' }}>
            <div css={{ flexShrink: 0 }}>
              {effected}
            </div>
            <div css={{ width: 120, textAlign: 'right', marginLeft: 'auto' }}>
              <StatusEffectValueView parameter={parameter} value={value} />
            </div>
          </PopoverListContent.Row>
        ))}
      </PopoverListContent>
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
  const effects = useStatusEffects(parameter);

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
            (<StatusEffectsPopoverView parameter={parameter} effects={effects}>
              <StatusEffectSummaryView
                css={{ textDecoration: 'underline' }}
                parameter={parameter}
              />
            </StatusEffectsPopoverView>) :
            (<StatusEffectSummaryView parameter={parameter} />)
        }
      </div>
      <div>&nbsp;)</div>
    </div>
  );
};

export default StatusEffectsView;
