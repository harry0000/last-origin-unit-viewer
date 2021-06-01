/** @jsxRuntime classic */
/** @jsx jsx */
import { CSSObject, Theme, jsx } from '@emotion/react';
import { Interpolation } from '@emotion/serialize';
import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useTranslation } from 'react-i18next';

import { Col, Image, Row } from 'react-bootstrap';
import StatusEffectsView from './StatusEffectsView';
import UnitStatusParameterButton from './UnitStatusParameterButton';

import { selectedUnitStatusState } from '../../state/unit/selectedUnitStatusState';

import { formatMicroValue, formatMilliPercentage, formatMilliValue } from './UnitStatusParameterFormatter';

const parameterCol: CSSObject = {
  fontSize: '1.2em',
  fontWeight: 'bold',
  textAlign: 'right'
};
const pointsCol: CSSObject = {
  fontWeight: 'bold',
  textAlign: 'right'
};

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

const StatusParameterLabel: React.FC<{ parameter: Parameter }> = React.memo(({ parameter }) => {
  const { t } = useTranslation();

  return (
    <div css={{ display: 'flex', alignItems: 'center' }}>
      <div css={{ marginRight: 5 }}><StatusIcon status={parameter}/></div>
      <div css={{ fontSize: '0.9em' }}><span>{t(`status.${parameter}`)}</span></div>
    </div>
  );
});

const UnitStatusParameterRow: React.FC<{
  css?: Interpolation<Theme>,
  parameter: Exclude<Parameter, 'spd'>,
  value?: string,
  enhancedLv: number | undefined,
  upDisabled: boolean,
  downDisabled: boolean,
  onUpClicked: () => void,
  onDownClicked: () => void
}> = ({
  parameter,
  value,
  enhancedLv,
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
        <StatusParameterLabel parameter={parameter} />
      </Col>
      <Col
        xs={{ span: 4, order: 2 }}
        sm={{ span: 2, order: 2 }}
        css={{ ...parameterCol, paddingLeft: 0 }}
      >
        <span>{value}</span>
      </Col>
      <Col
        xs={{ offset: 3, span: 5, order: 4 }}
        sm={{ offset: 0, span: 2, order: 3 }}
        css={{ ...parameterCol, fontSize: '0.9em', color: '#888' }}
      >
        <StatusEffectsView
          css={{
            width: 110,
            marginLeft: 'auto'
          }}
          parameter={parameter}
        />
      </Col>
      <Col
        xs={{ span: 4, order: 3 }}
        sm={{ span: 2, order: 4 }}
        css={{ ...pointsCol, paddingRight: 0 }}
      >
        <span>{t('lv')}</span>
        <span css={{ display: 'inline-block', width: '2em', textAlign: 'right' }}>{enhancedLv ?? 0}</span>
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

export const SpdParameterRow: React.FC<{ css?: Interpolation<Theme> }> = (props) => {
  const status = useRecoilValue(selectedUnitStatusState);

  return (
    <Row {...props}>
      <Col
        xs={{ span: 4, order: 1 }}
        sm={{ span: 3, order: 1 }}
        css={{ padding: 0 }}
      >
        <StatusParameterLabel parameter="spd" />
      </Col>
      <Col
        xs={{ span: 4, order: 2 }}
        sm={{ span: 2, order: 2 }}
        css={{ ...parameterCol, paddingLeft: 0 }}
      >
        <span>{formatMicroValue(status?.spd)}</span>
      </Col>
      <Col
        xs={{ offset: 3, span: 5, order: 4 }}
        sm={{ offset: 0, span: 2, order: 3 }}
        css={{ ...parameterCol, fontSize: '0.9em', color: '#888' }}
      >
        <StatusEffectsView
          css={{
            width: 110,
            marginLeft: 'auto'
          }}
          parameter="spd"
        />
      </Col>
    </Row>
  );
};

export const HpParameterRow: React.FC<{ css?: Interpolation<Theme> }> = (props) => {
  const [status, setStatus] = useRecoilState(selectedUnitStatusState);

  return (
    <UnitStatusParameterRow
      {...props}
      parameter="hp"
      value={`${status?.hp ?? '0'}`}
      enhancedLv={status?.hpLv}
      upDisabled={!status?.enableUpHpLv}
      downDisabled={!status?.enableDownHpLv}
      onUpClicked={() => { setStatus(s => s?.upHpLv()); }}
      onDownClicked={() => { setStatus(s => s?.downHpLv()); }}
    />
  );
};

export const AtkParameterRow: React.FC<{ css?: Interpolation<Theme> }> = (props) => {
  const [status, setStatus] = useRecoilState(selectedUnitStatusState);

  return (
    <UnitStatusParameterRow
      {...props}
      parameter="atk"
      value={formatMilliValue(status?.atk)}
      enhancedLv={status?.atkLv}
      upDisabled={!status?.enableUpAtkLv}
      downDisabled={!status?.enableDownAtkLv}
      onUpClicked={() => { setStatus(s => s?.upAtkLv()); }}
      onDownClicked={() => { setStatus(s => s?.downAtkLv()); }}
    />
  );
};

export const DefParameterRow: React.FC<{ css?: Interpolation<Theme> }> = (props) => {
  const [status, setStatus] = useRecoilState(selectedUnitStatusState);

  return (
    <UnitStatusParameterRow
      {...props}
      parameter="def"
      value={formatMilliValue(status?.def)}
      enhancedLv={status?.defLv}
      upDisabled={!status?.enableUpDefLv}
      downDisabled={!status?.enableDownDefLv}
      onUpClicked={() => { setStatus(s => s?.upDefLv()); }}
      onDownClicked={() => { setStatus(s => s?.downDefLv()); }}
    />
  );
};

export const AccParameterRow: React.FC<{ css?: Interpolation<Theme> }> = (props) => {
  const [status, setStatus] = useRecoilState(selectedUnitStatusState);

  return (
    <UnitStatusParameterRow
      {...props}
      parameter="acc"
      value={formatMilliPercentage(status?.acc)}
      enhancedLv={status?.accLv}
      upDisabled={!status?.enableUpAccLv}
      downDisabled={!status?.enableDownAccLv}
      onUpClicked={() => { setStatus(s => s?.upAccLv()); }}
      onDownClicked={() => { setStatus(s => s?.downAccLv()); }}
    />
  );
};

export const EvaParameterRow: React.FC<{ css?: Interpolation<Theme> }> = (props) => {
  const [status, setStatus] = useRecoilState(selectedUnitStatusState);

  return (
    <UnitStatusParameterRow
      {...props}
      parameter="eva"
      value={formatMilliPercentage(status?.eva)}
      enhancedLv={status?.evaLv}
      upDisabled={!status?.enableUpEvaLv}
      downDisabled={!status?.enableDownEvaLv}
      onUpClicked={() => { setStatus(s => s?.upEvaLv()); }}
      onDownClicked={() => { setStatus(s => s?.downEvaLv()); }}
    />
  );
};

export const CriParameterRow: React.FC<{ css?: Interpolation<Theme> }> = (props) => {
  const [status, setStatus] = useRecoilState(selectedUnitStatusState);

  return (
    <UnitStatusParameterRow
      {...props}
      parameter="cri"
      value={formatMilliPercentage(status?.cri)}
      enhancedLv={status?.criLv}
      upDisabled={!status?.enableUpCriLv}
      downDisabled={!status?.enableDownCriLv}
      onUpClicked={() => { setStatus(s => s?.upCriLv()); }}
      onDownClicked={() => { setStatus(s => s?.downCriLv()); }}
    />
  );
};
