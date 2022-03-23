/** @jsxRuntime classic */
/** @jsx jsx */
import { CSSObject, Theme, jsx } from '@emotion/react';
import { Interpolation } from '@emotion/serialize';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { Col, Image, Row } from 'react-bootstrap';
import AutoFireButton from '../../common/AutoFireButton';
import StatusEffectsView from './StatusEffectsView';

import { UnitNumber } from '../../../domain/UnitBasicInfo';

import {
  EnhanceableStatus,
  useStatusParameterDecrement,
  useStatusParameterEnhancedLv,
  useStatusParameterIncrement
} from '../../../state/status/parameters/unitLvStatusState';
import { useSelectedUnit } from '../../../state/selector/unitSelectorState';
import { useEmptyStatusParameter, useStatusParameter } from '../../../state/status/parameters/unitStatusParameterState';

const parameterCol: CSSObject = {
  fontSize: '1.2em',
  fontWeight: 'bold',
  textAlign: 'right'
};
const pointsCol: CSSObject = {
  fontWeight: 'bold',
  textAlign: 'right'
};

const StatusIcon: React.FC<{ status: EnhanceableStatus | 'spd' }> = ({ status }) => {
  return (
    <Image
      rounded
      draggable="false"
      height={24}
      width={24}
      alt={status}
      src={`${process.env.PUBLIC_URL}/icon/status_${status}.webp`}
    />
  );
};

const StatusParameterNameLabel: React.FC<{ parameter: EnhanceableStatus | 'spd' }> = React.memo(({ parameter }) => {
  const { t } = useTranslation();

  return (
    <div css={{ display: 'flex', alignItems: 'center' }}>
      <div css={{ marginRight: 5 }}><StatusIcon status={parameter}/></div>
      <div css={{ fontSize: '0.9em' }}><span>{t(`status.${parameter}`)}</span></div>
    </div>
  );
});

const StatusParameterValueView: React.FC<{ parameter: EnhanceableStatus | 'spd' }> = React.memo(({ parameter }) => {
  const selected = useSelectedUnit();
  const View: React.FC<{ unit: UnitNumber }> = ({ unit }) => {
    const value = useStatusParameter(parameter, unit);
    return (<span>{value}</span>);
  };
  const EmptyView: React.FC = () => {
    const value = useEmptyStatusParameter(parameter);
    return (<span>{value}</span>);
  };

  return selected ?
    (<View unit={selected.no} />) :
    (<EmptyView />);
});

const StatusParameterEnhancementLvView: React.FC<{ parameter: EnhanceableStatus }> = ({ parameter }) => {
  const selected = useSelectedUnit();

  const View: React.FC<{ unit: UnitNumber }> = ({ unit }) => {
    const enhancedLv = useStatusParameterEnhancedLv(parameter, unit);
    return (<React.Fragment>{enhancedLv}</React.Fragment>);
  };

  return selected ?
    (<View unit={selected.no} />) :
    (<React.Fragment>0</React.Fragment>);
};

const StatusParameterDecrementButton: React.FC<{ parameter: EnhanceableStatus }> = ({ parameter }) => {
  const selected = useSelectedUnit();
  const DecrementButton: React.FC<{ unit: UnitNumber }> = ({ unit }) => {
    const [decrementDisabled, decrement] = useStatusParameterDecrement(parameter, unit);
    return (<AutoFireButton variant="secondary" disabled={decrementDisabled} onClick={decrement}><span>-</span></AutoFireButton>);
  };

  return selected ?
    (<DecrementButton unit={selected.no} />) :
    (<AutoFireButton variant="secondary" disabled={true} onClick={() => { return; }}><span>-</span></AutoFireButton>);
};

const StatusParameterIncrementButton: React.FC<{ parameter: EnhanceableStatus }> = ({ parameter }) => {
  const selected = useSelectedUnit();
  const IncrementButton: React.FC<{ unit: UnitNumber }> = ({ unit }) => {
    const [incrementDisabled, increment] = useStatusParameterIncrement(parameter, unit);
    return (<AutoFireButton variant="secondary" disabled={incrementDisabled} onClick={increment}><span>+</span></AutoFireButton>);
  };

  return selected ?
    (<IncrementButton unit={selected.no} />) :
    (<AutoFireButton variant="secondary" disabled={true} onClick={() => { return; }}><span>+</span></AutoFireButton>);
};

const EnhanceableStatusParameterRow: React.FC<{
  css?: Interpolation<Theme>,
  parameter: EnhanceableStatus
}> = ({ parameter, ...rest }) => {
  const { t } = useTranslation();

  return (
    <Row {...rest} css={{ alignItems: 'center' }}>
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
        <span>{t('lv')}</span>
        <span css={{ display: 'inline-block', width: '2em', textAlign: 'right' }}>
          <StatusParameterEnhancementLvView parameter={parameter} />
        </span>
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
          <StatusParameterDecrementButton parameter={parameter} />
          <StatusParameterIncrementButton parameter={parameter} />
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
