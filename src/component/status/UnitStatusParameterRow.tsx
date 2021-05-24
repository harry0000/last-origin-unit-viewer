/** @jsxRuntime classic */
/** @jsx jsx */
import { CSSObject, Theme, jsx } from '@emotion/react';
import { Interpolation } from '@emotion/serialize';
import React from 'react';
import { SetterOrUpdater } from 'recoil';
import { useTranslation } from 'react-i18next';

import { Col, Image, OverlayTrigger, Popover, Row } from 'react-bootstrap';
import UnitStatusParameterButton from './UnitStatusParameterButton';

import { AccEffect, AtkEffect, CriEffect, DefEffect, EvaEffect, HpEffect } from '../../domain/status/UnitStatusEffect';
import UnitStatus from '../../domain/status/UnitStatus';
import { calcMilliPercentageValue, calcMilliValue, calcValue } from '../../domain/EffectValue';

const parameterCol: CSSObject = {
  fontSize: '1.2em',
  fontWeight: 'bold',
  textAlign: 'right'
};
const pointsCol: CSSObject = {
  fontWeight: 'bold',
  textAlign: 'right'
};

const effectValueColor = {
  positive: { color: '#3c3' },
  negative: { color: '#c33' }
} as const;

type Parameter = 'hp' | 'atk' | 'def' | 'acc' | 'eva' | 'cri' | 'spd'

const StatusIcon: React.FC<{ status: Parameter }> = ({ status }) => {
  return (
    <Image
      rounded
      height={24}
      width={24}
      alt={status}
      src={`${process.env.PUBLIC_URL}/icon/status_${status}.webp`}
    />
  );
};

const StatusParameterLabel: React.FC<{ parameter: Parameter }> = ({ parameter }) => {
  const { t } = useTranslation();

  return (
    <div css={{ display: 'flex', alignItems: 'center' }}>
      <div css={{ marginRight: 5 }}><StatusIcon status={parameter}/></div>
      <div css={{ fontSize: '0.9em' }}><span>{t(`status.${parameter}`)}</span></div>
    </div>
  );
};

type StatusEffects = ReadonlyArray<HpEffect | AtkEffect | DefEffect | AccEffect | EvaEffect | CriEffect>
type StatusParameterValues = {
  value: number,
  base: number,
  effectsValue: number,
  effects: StatusEffects
}

function buildValues(parameter: Exclude<Parameter, 'spd'>, status?: UnitStatus): StatusParameterValues {
  if (!status) {
    return {
      value: 0,
      base: 0,
      effectsValue: 0,
      effects: []
    };
  }

  switch (parameter) {
  case 'hp':
    return {
      value: status.hp,
      base: status.baseParameters.hp.value,
      effectsValue: status.effects.hpValue.value,
      effects: status.effects.hpEffects
    };
  case 'atk':
    return {
      value: status.atk,
      base: calcMilliValue(status.baseParameters.atk),
      effectsValue: calcMilliValue(status.effects.atkValue),
      effects: status.effects.atkEffects
    };
  case 'def':
    return {
      value: status.def,
      base: calcMilliValue(status.baseParameters.def),
      effectsValue: calcMilliValue(status.effects.defValue),
      effects: status.effects.defEffects
    };
  case 'acc':
    return {
      value: status.acc,
      base: calcMilliPercentageValue(status.baseParameters.acc),
      effectsValue: calcMilliPercentageValue(status.effects.accValue),
      effects: status.effects.accEffects
    };
  case 'eva':
    return {
      value: status.eva,
      base: calcMilliPercentageValue(status.baseParameters.eva),
      effectsValue: calcMilliPercentageValue(status.effects.evaValue),
      effects: status.effects.evaEffects
    };
  case 'cri':
    return {
      value: status.cri,
      base: calcMilliPercentageValue(status.baseParameters.cri),
      effectsValue: calcMilliPercentageValue(status.effects.criValue),
      effects: status.effects.criEffects
    };
  }
}

const StatusParameterValueView: React.FC<{
  css?: Interpolation<Theme>,
  parameter: Parameter,
  value: number
}> = ({ parameter, value, ...others }) => {
  const display = (() => {
    switch (parameter) {
    case 'hp':
      return `${value}`;
    case 'atk':
    case 'def':
      return `${value.toFixed(2)}`;
    case 'acc':
    case 'eva':
    case 'cri':
      return `${value.toFixed(2)} %`;
    case 'spd':
      return `${value.toFixed(3)}`;
    }
  })();

  return (<span {...others}>{display}</span>);
};

const StatusEffectValueView: React.FC<{
  css?: Interpolation<Theme>,
  parameter: Parameter,
  value: number
}> = ({ parameter, value, ...others }) => {
  const [sign, color] =
    value === 0 ?
      ['+', undefined] :
      value > 0 ?
        ['+', effectValueColor.positive] :
        ['-', effectValueColor.negative];
  const display = (() => {
    switch (parameter) {
    case 'hp':
      return `${sign} ${Math.abs(value)}`;
    case 'atk':
    case 'def':
      return `${sign} ${Math.abs(value).toFixed(2)}`;
    case 'acc':
    case 'eva':
    case 'cri':
      return `${sign} ${Math.abs(value).toFixed(2)} %`;
    case 'spd':
      return `${sign} ${Math.abs(value).toFixed(3)}`;
    }
  })();

  return (<span {...others} css={color}>{display}</span>);
};

const StatusEffectsView: React.FC<{
  parameter: Parameter,
  values: StatusParameterValues
}> = ({ parameter, values }) => {
  const { t } = useTranslation();

  const EffectsView = () => {
    if (values.effects.length > 0) {
      const { effectsValue } = values;
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
              {values.effects.map(e => {
                return (
                  <div
                    key={JSON.stringify(e)}
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
                      {t(`status.effected.${e.effectedBy.name}`, { value: e.effectedBy.value })}
                    </div>
                    <div css={{ width: 120, textAlign: 'right' }}>
                      <StatusEffectValueView parameter={parameter} value={calcValue(e)} />
                    </div>
                  </div>
                );
              })}
            </div>
          </Popover.Content>
        </Popover>
      );

      return (
        <OverlayTrigger
          placement='bottom'
          overlay={popover}
        >
          <span>
            <StatusEffectValueView
              css={{ textDecoration: 'underline' }}
              parameter={parameter}
              value={effectsValue}
            />
          </span>
        </OverlayTrigger>
      );
    } else {
      return (<StatusEffectValueView parameter={parameter} value={0} />);
    }
  };

  return (
    <div css={{
      display: 'flex',
      justifyContent: 'flex-end',
      width: 110,
      marginLeft: 'auto'
    }}>
      <div css={{ marginRight: 'auto' }}>(</div>
      <div css={{ marginLeft: 'auto' }}>
        <EffectsView />
      </div>
      <div>&nbsp;)</div>
    </div>
  );
};

const UnitStatusParameterRow: React.FC<{
  css?: Interpolation<Theme>,
  parameter: Exclude<Parameter, 'spd'>,
  values: StatusParameterValues,
  lv?: number,
  upDisabled: boolean,
  downDisabled: boolean,
  onUpClicked: () => void,
  onDownClicked: () => void
}> = ({
  parameter,
  values,
  lv,
  upDisabled,
  downDisabled,
  onUpClicked,
  onDownClicked,
  ...others
}) => {
  const { t } = useTranslation();

  return (
    <Row {...others} css={{ alignItems: 'center' }}>
      <Col
        xs={{ span: 4, order: 1 }}
        sm={{ span: 3, order: 1 }}
        css={{ padding: 0 }}
      >
        <StatusParameterLabel parameter={parameter}/>
      </Col>
      <Col
        xs={{ span: 4, order: 2 }}
        sm={{ span: 2, order: 2 }}
        css={parameterCol}
      >
        <StatusParameterValueView parameter={parameter} value={values.value} />
      </Col>
      <Col
        xs={{ offset: 3, span: 5, order: 4 }}
        sm={{ offset: 0, span: 2, order: 3 }}
        css={{ ...parameterCol, fontSize: '0.9em', color: '#888' }}
      >
        <StatusEffectsView
          parameter={parameter}
          values={values}
        />
      </Col>
      <Col
        xs={{ span: 4, order: 3 }}
        sm={{ span: 2, order: 4 }}
        css={{ ...pointsCol, paddingRight: 0 }}
      >
        <span>{t('lv')}</span>
        <span css={{ display: 'inline-block', width: '2em', textAlign: 'right' }}>{lv ?? 0}</span>
      </Col>
      <Col
        xs={{ span: 'auto', order: 5 }}
        css={{ marginLeft: 'auto', padding: 0 }}
      >
        <div
          css={{
            textAlign: 'right',
            '& > .btn': {
              lineHeight: 0.5,
              fontWeight: 'bold',
              '@media (max-width: 480px)': { width: 40 },
              '@media (min-width: 480px)': { width: 50 }
            },
            '& > .btn:first-of-type': {
              marginRight: 15
            }
          }}
        >
          <UnitStatusParameterButton disabled={downDisabled} onClick={onDownClicked}><span>-</span></UnitStatusParameterButton>
          <UnitStatusParameterButton disabled={upDisabled} onClick={onUpClicked}><span>+</span></UnitStatusParameterButton>
        </div>
      </Col>
    </Row>
  );
};

export const SpdParameterRow: React.FC<{
  css?: Interpolation<Theme>,
  status?: UnitStatus
}> = ({ status, ...others }) => {
  return (
    <Row {...others}>
      <Col xs={4} sm={3} css={{ padding: 0 }}>
        <StatusParameterLabel parameter='spd' />
      </Col>
      <Col xs={4} sm={2} css={parameterCol}>
        <StatusParameterValueView parameter='spd' value={status?.spdValue ?? 0} />
      </Col>
    </Row>
  );
};

export const HpParameterRow: React.FC<{
  css?: Interpolation<Theme>,
  status?: UnitStatus,
  setStatus: SetterOrUpdater<UnitStatus | undefined>
}> = ({ status, setStatus, ...others }) => {
  return (
    <UnitStatusParameterRow
      {...others}
      parameter="hp"
      values={buildValues('hp', status)}
      lv={status?.hpLv}
      upDisabled={!status?.enableUpHpLv}
      downDisabled={!status?.enableDownHpLv}
      onUpClicked={() => { setStatus(s => s?.upHpLv()); }}
      onDownClicked={() => { setStatus(s => s?.downHpLv()); }}
    />
  );
};

export const AtkParameterRow: React.FC<{
  css?: Interpolation<Theme>,
  status?: UnitStatus,
  setStatus: SetterOrUpdater<UnitStatus | undefined>
}> = ({ status, setStatus, ...others }) => {
  return (
    <UnitStatusParameterRow
      {...others}
      parameter="atk"
      values={buildValues('atk', status)}
      lv={status?.atkLv}
      upDisabled={!status?.enableUpAtkLv}
      downDisabled={!status?.enableDownAtkLv}
      onUpClicked={() => { setStatus(s => s?.upAtkLv()); }}
      onDownClicked={() => { setStatus(s => s?.downAtkLv()); }}
    />
  );
};

export const DefParameterRow: React.FC<{
  css?: Interpolation<Theme>,
  status?: UnitStatus,
  setStatus: SetterOrUpdater<UnitStatus | undefined>
}> = ({ status, setStatus, ...others }) => {
  return (
    <UnitStatusParameterRow
      {...others}
      parameter="def"
      values={buildValues('def', status)}
      lv={status?.defLv}
      upDisabled={!status?.enableUpDefLv}
      downDisabled={!status?.enableDownDefLv}
      onUpClicked={() => { setStatus(s => s?.upDefLv()); }}
      onDownClicked={() => { setStatus(s => s?.downDefLv()); }}
    />
  );
};

export const AccParameterRow: React.FC<{
  css?: Interpolation<Theme>,
  status?: UnitStatus,
  setStatus: SetterOrUpdater<UnitStatus | undefined>
}> = ({ status, setStatus, ...others }) => {
  return (
    <UnitStatusParameterRow
      {...others}
      parameter="acc"
      values={buildValues('acc', status)}
      lv={status?.accLv}
      upDisabled={!status?.enableUpAccLv}
      downDisabled={!status?.enableDownAccLv}
      onUpClicked={() => { setStatus(s => s?.upAccLv()); }}
      onDownClicked={() => { setStatus(s => s?.downAccLv()); }}
    />
  );
};

export const EvaParameterRow: React.FC<{
  css?: Interpolation<Theme>,
  status?: UnitStatus,
  setStatus: SetterOrUpdater<UnitStatus | undefined>
}> = ({ status, setStatus, ...others }) => {
  return (
    <UnitStatusParameterRow
      {...others}
      parameter="eva"
      values={buildValues('eva', status)}
      lv={status?.evaLv}
      upDisabled={!status?.enableUpEvaLv}
      downDisabled={!status?.enableDownEvaLv}
      onUpClicked={() => { setStatus(s => s?.upEvaLv()); }}
      onDownClicked={() => { setStatus(s => s?.downEvaLv()); }}
    />
  );
};

export const CriParameterRow: React.FC<{
  css?: Interpolation<Theme>,
  status?: UnitStatus,
  setStatus: SetterOrUpdater<UnitStatus | undefined>
}> = ({ status, setStatus, ...others }) => {
  return (
    <UnitStatusParameterRow
      {...others}
      parameter="cri"
      values={buildValues('cri', status)}
      lv={status?.criLv}
      upDisabled={!status?.enableUpCriLv}
      downDisabled={!status?.enableDownCriLv}
      onUpClicked={() => { setStatus(s => s?.upCriLv()); }}
      onDownClicked={() => { setStatus(s => s?.downCriLv()); }}
    />
  );
};
