/** @jsxRuntime classic */
/** @jsx jsx */
import { CSSObject, Theme, jsx } from '@emotion/react';
import { Interpolation } from '@emotion/serialize';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { Col, Image, Row } from 'react-bootstrap';
import StatusEffectsView from './StatusEffectsView';
import UnitStatusParameterButton from './UnitStatusParameterButton';

import {
  useStatusParameter,
  useStatusParameterControl,
  useStatusParameterEnhancedLv
} from '../../hook/status/StatusParameter';

export type EnhanceableParameterType = 'hp' | 'atk' | 'def' | 'acc' | 'eva' | 'cri'

const parameterCol: CSSObject = {
  fontSize: '1.2em',
  fontWeight: 'bold',
  textAlign: 'right'
};
const pointsCol: CSSObject = {
  fontWeight: 'bold',
  textAlign: 'right'
};

const StatusIcon: React.FC<{ status: EnhanceableParameterType | 'spd' }> = ({ status }) => {
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

const StatusParameterNameLabel: React.FC<{ parameter: EnhanceableParameterType | 'spd' }> = React.memo(({ parameter }) => {
  const { t } = useTranslation();

  return (
    <div css={{ display: 'flex', alignItems: 'center' }}>
      <div css={{ marginRight: 5 }}><StatusIcon status={parameter}/></div>
      <div css={{ fontSize: '0.9em' }}><span>{t(`status.${parameter}`)}</span></div>
    </div>
  );
});

const StatusParameterValueView: React.FC<{ parameter: EnhanceableParameterType | 'spd' }> = React.memo(({ parameter }) => {
  const value = useStatusParameter(parameter);

  return (<span>{value}</span>);
});

const StatusParameterEnhancementLvView: React.FC<{ parameter: EnhanceableParameterType }> = ({ parameter }) => {
  const { t } = useTranslation();
  const enhancedLv = useStatusParameterEnhancedLv(parameter);

  return (
    <React.Fragment>
      <span>{t('lv')}</span>
      <span css={{ display: 'inline-block', width: '2em', textAlign: 'right' }}>{enhancedLv}</span>
    </React.Fragment>
  );
};

const StatusParameterControlButtons: React.FC<{ parameter: EnhanceableParameterType }> = ({ parameter }) => {
  const [incrementDisabled, decrementDisabled, increment, decrement] = useStatusParameterControl(parameter);

  return (
    <React.Fragment>
      <UnitStatusParameterButton disabled={decrementDisabled} onClick={decrement}><span>-</span></UnitStatusParameterButton>
      <UnitStatusParameterButton disabled={incrementDisabled} onClick={increment}><span>+</span></UnitStatusParameterButton>
    </React.Fragment>
  );
};

const EnhanceableStatusParameterRow: React.FC<{
  css?: Interpolation<Theme>,
  parameter: EnhanceableParameterType
}> = ({ parameter, ...others }) => {

  return (
    <Row {...others} css={{ alignItems: 'center' }}>
      <Col
        xs={{ span: 4, order: 1 }}
        sm={{ span: 3, order: 1 }}
        css={{ padding: 0 }}
      >
        <StatusParameterNameLabel parameter={parameter} />
      </Col>
      <Col
        xs={{ span: 4, order: 2 }}
        sm={{ span: 2, order: 2 }}
        css={{ ...parameterCol, paddingLeft: 0 }}
      >
        <StatusParameterValueView parameter={parameter} />
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
        <StatusParameterEnhancementLvView parameter={parameter} />
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
          <StatusParameterControlButtons parameter={parameter} />
        </div>
      </Col>
    </Row>
  );
};

export const SpdParameterRow: React.FC<{ css?: Interpolation<Theme> }> = (props) => {
  return (
    <Row {...props}>
      <Col
        xs={{ span: 4, order: 1 }}
        sm={{ span: 3, order: 1 }}
        css={{ padding: 0 }}
      >
        <StatusParameterNameLabel parameter="spd" />
      </Col>
      <Col
        xs={{ span: 4, order: 2 }}
        sm={{ span: 2, order: 2 }}
        css={{ ...parameterCol, paddingLeft: 0 }}
      >
        <StatusParameterValueView parameter="spd" />
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
  return (<EnhanceableStatusParameterRow {...props} parameter="hp" />);
};

export const AtkParameterRow: React.FC<{ css?: Interpolation<Theme> }> = (props) => {
  return (<EnhanceableStatusParameterRow {...props} parameter="atk" />);
};

export const DefParameterRow: React.FC<{ css?: Interpolation<Theme> }> = (props) => {
  return (<EnhanceableStatusParameterRow {...props} parameter="def" />);
};

export const AccParameterRow: React.FC<{ css?: Interpolation<Theme> }> = (props) => {
  return (<EnhanceableStatusParameterRow {...props} parameter="acc" />);
};

export const EvaParameterRow: React.FC<{ css?: Interpolation<Theme> }> = (props) => {
  return (<EnhanceableStatusParameterRow {...props} parameter="eva" />);
};

export const CriParameterRow: React.FC<{ css?: Interpolation<Theme> }> = (props) => {
  return (<EnhanceableStatusParameterRow {...props} parameter="cri" />);
};
