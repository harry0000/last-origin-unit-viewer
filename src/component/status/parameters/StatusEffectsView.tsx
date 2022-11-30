/** @jsxRuntime classic */
/** @jsx jsx */
import { Theme, jsx } from '@emotion/react';
import { Interpolation } from '@emotion/serialize';
import React, { ReactNode } from 'react';
import { nanoid } from 'nanoid';
import { useTranslation } from 'react-i18next';

import { OverlayTrigger, Popover } from 'react-bootstrap';
import PopoverListContent from '../../common/PopoverListContent';
import { SquadUnitApEffectsViewModel, SquadUnitStatusEffectDetails } from './SquadUnitStatusEffectsViewModel';
import {
  UnitStatusEffectValue,
  buildUnitStatusEffectValueViewModel
} from './StatusEffectsSummaryViewModel';
import { effectValueColor } from '../../common/effectValueColor';

import { UnitBasicInfo } from '../../../domain/UnitBasicInfo';

import { useSelectedUnit } from '../../../state/selector/UnitSelectorHook';
import {
  useSquadUnitApEffects,
  useSquadUnitStatusEffects,
  useSquadUnitStatusEffectsSummary
} from '../../../state/status/parameters/SquadUnitStatusParameterHook';
import { useStatusEffects } from '../../../state/status/parameters/UnitStatusEffectsHook';
import { useStatusEffectsSummary } from '../../../state/status/parameters/UnitStatusParameterHook';

import { ifNonNullable, ifTruthy } from '../../../util/react';

export type AffectableStatus = 'hp' | 'atk' | 'def' | 'acc' | 'eva' | 'cri' | 'spd' | 'fireResist' | 'iceResist' | 'electricResist'

const StatusEffectValueView: React.FC<{
  viewModel: UnitStatusEffectValue
}> = ({ viewModel, ...rest }) => {
  return (
    <span {...rest} css={viewModel.colorStyle}>
      {`${viewModel.sign}\u00A0${viewModel.value}`}
    </span>
  );
};

const UnitStatusEffectSummaryView: React.FC<{
  parameter: AffectableStatus
}> = ({ parameter, ...rest }) => {
  const viewModel = useStatusEffectsSummary(parameter);

  return (<StatusEffectValueView viewModel={viewModel} {...rest} />);
};

const SquadUnitStatusEffectSummaryView: React.FC<{
  parameter: Exclude<AffectableStatus, 'hp'>
}> = ({ parameter, ...rest }) => {
  const viewModel = useSquadUnitStatusEffectsSummary(parameter);

  return (<StatusEffectValueView viewModel={viewModel} {...rest} />);
};

const EffectsPopoverRowLabel: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (<div css={{ flexShrink: 0 }}>{children}</div>);
};

const EffectsPopoverRowValue: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (<div css={{ width: 120, textAlign: 'right', marginLeft: 'auto' }}>{children}</div>);
};

export type StatusEffectPopoverRowProps = {
  key: string,
  affected: string,
  value: number
}

const UnitStatusEffectsPopoverView: React.FC<{
  parameter: AffectableStatus,
  children: ReactNode
}> = ({ parameter, children }) => {
  const selected = useSelectedUnit();
  const EffectsOverlay = ({ unit, children }: { unit: UnitBasicInfo, children: ReactNode }) => {
    const effects = useStatusEffects(unit, parameter);
    if (effects.length === 0) {
      return (<span>{children}</span>);
    }

    const popover = (
      <Popover id={`popover-unit-${parameter}-status-effects`} css={{ maxWidth: 'none' }}>
        <PopoverListContent>
          {effects.map(({ key, affected, value }) => (
            <PopoverListContent.Row key={key}>
              <EffectsPopoverRowLabel>
                {affected}
              </EffectsPopoverRowLabel>
              <EffectsPopoverRowValue>
                <StatusEffectValueView viewModel={buildUnitStatusEffectValueViewModel(parameter, value)} />
              </EffectsPopoverRowValue>
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
        <span css={{ '& > *': { textDecoration: 'underline' } }}>{children}</span>
      </OverlayTrigger>
    );
  };

  return selected ?
    (<EffectsOverlay unit={selected}>{children}</EffectsOverlay>) :
    (<span>{children}</span>);
};

const SquadUnitStatusEffectPopoverRow: React.FC<SquadUnitStatusEffectDetails> = ({ source: { type, key }, scaled, effect }) => {
  const { t } = useTranslation();
  const label =
    type === 'tag' ? t('effect:with_tag_quotes', { value: t(key) }) : t(key);

  return (
    <PopoverListContent.Row>
      <EffectsPopoverRowLabel>
        {`${label}${scaled ? ` (${t('status.effect.scaled.' + scaled.key, scaled.options)})` : ''}`}
      </EffectsPopoverRowLabel>
      <EffectsPopoverRowValue>
        <StatusEffectValueView viewModel={effect} />
      </EffectsPopoverRowValue>
    </PopoverListContent.Row>
  );
};

const SquadUnitStatusEffectsPopoverView: React.FC<{
  parameter: Exclude<AffectableStatus, 'hp'>,
  children: ReactNode
}> = ({ parameter, children }) => {
  const { t } = useTranslation();
  const effects = useSquadUnitStatusEffects(parameter);

  const EffectsOverlay = ({ children }: { children: ReactNode }) => {
    const popover = (
      <Popover id={`popover-squad-unit-${parameter}-status-effects`} css={{ maxWidth: 'none' }}>
        <PopoverListContent>
          {effects.reteEffects.map(e => (<SquadUnitStatusEffectPopoverRow key={nanoid()} {...e} />))}
          {ifNonNullable(effects.rateEffectSummary, ({ summary, value }) => (
            <PopoverListContent.Row css={{ backgroundColor: '#333' }}>
              <EffectsPopoverRowLabel>
                {t('status.affected.rate_summary', { summary })}
              </EffectsPopoverRowLabel>
              <EffectsPopoverRowValue>
                <StatusEffectValueView viewModel={value} />
              </EffectsPopoverRowValue>
            </PopoverListContent.Row>
          ))}
          {effects.valueUpEffects.map(e => (<SquadUnitStatusEffectPopoverRow key={nanoid()} {...e} />))}
          {effects.valueUpByUnitEffects.map(e => (<SquadUnitStatusEffectPopoverRow key={nanoid()} {...e} />))}
        </PopoverListContent>
      </Popover>
    );

    return (
      <OverlayTrigger
        placement='bottom'
        overlay={popover}
      >
        <span css={{ '& > *': { textDecoration: 'underline' } }}>{children}</span>
      </OverlayTrigger>
    );
  };

  return effects.hasEffects ?
    (<EffectsOverlay>{children}</EffectsOverlay>) :
    (<span>{children}</span>);
};

const StatusEffectsViewContainer: React.FC<{
  css?: Interpolation<Theme>,
  className?: string,
  children: ReactNode
}> = ({ children, ...rest }) => {
  return (
    <div
      {...rest}
      css={{
        display: 'flex',
        justifyContent: 'flex-end'
      }}
    >
      <div css={{ marginRight: 'auto' }}>(&nbsp;</div>
      <div css={{ marginLeft: 'auto' }}>
        {children}
      </div>
      <div>&nbsp;)</div>
    </div>
  );
};

export const UnitStatusEffectsView: React.FC<{
  css?: Interpolation<Theme>,
  className?: string,
  parameter: AffectableStatus
}> = ({ parameter, ...rest }) => {
  return (
    <StatusEffectsViewContainer {...rest}>
      <UnitStatusEffectsPopoverView parameter={parameter}>
        <UnitStatusEffectSummaryView parameter={parameter} />
      </UnitStatusEffectsPopoverView>
    </StatusEffectsViewContainer>
  );
};

export const SquadUnitStatusEffectsView: React.FC<{
  css?: Interpolation<Theme>,
  className?: string,
  parameter: Exclude<AffectableStatus, 'hp'>
}> = ({ parameter, ...rest }) => {
  return (
    <StatusEffectsViewContainer {...rest}>
      <SquadUnitStatusEffectsPopoverView parameter={parameter}>
        <SquadUnitStatusEffectSummaryView parameter={parameter} />
      </SquadUnitStatusEffectsPopoverView>
    </StatusEffectsViewContainer>
  );
};

export const SquadUnitApEffectsPopoverView: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { t } = useTranslation();
  const viewModel = useSquadUnitApEffects();

  const EffectsOverlay = ({ apEffects, initialAp, apTickCount, spdSummary, children }: SquadUnitApEffectsViewModel & { children: ReactNode }) => {
    const popover = (
      <Popover id={'popover-squad-unit-ap-status-effects'} css={{ maxWidth: 'none' }}>
        <PopoverListContent>
          {apEffects.map(e => (<SquadUnitStatusEffectPopoverRow key={nanoid()} {...e} />))}
          {ifTruthy(apEffects.length > 0, (
            <PopoverListContent.Row css={{ backgroundColor: '#333' }}>
              <EffectsPopoverRowLabel>
                {t('status.affected.initial_ap')}
              </EffectsPopoverRowLabel>
              <EffectsPopoverRowValue>
                <span css={effectValueColor.positive}>{`+\u00A0${initialAp}`}</span>
              </EffectsPopoverRowValue>
            </PopoverListContent.Row>
          ))}
          <PopoverListContent.Row>
            <EffectsPopoverRowLabel>
              {t('status.affected.spd', { apTickCount })}
            </EffectsPopoverRowLabel>
            <EffectsPopoverRowValue>
              <span css={effectValueColor.positive}>{`+\u00A0${spdSummary}`}</span>
            </EffectsPopoverRowValue>
          </PopoverListContent.Row>
        </PopoverListContent>
      </Popover>
    );

    return (
      <OverlayTrigger
        placement='bottom'
        overlay={popover}
      >
        <span css={{ '& > *': { textDecoration: 'underline' } }}>{children}</span>
      </OverlayTrigger>
    );
  };

  return viewModel ?
    (<EffectsOverlay {...viewModel}>{children}</EffectsOverlay>) :
    (<React.Fragment>{children}</React.Fragment>);
};
