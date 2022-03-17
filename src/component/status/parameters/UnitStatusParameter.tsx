/** @jsxRuntime classic */
/** @jsx jsx */
import { CSSObject, jsx } from '@emotion/react';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import {
  AccParameterRow,
  AtkParameterRow,
  CriParameterRow,
  DefParameterRow,
  EvaParameterRow,
  HpParameterRow,
  SpdParameterRow
} from './UnitStatusParameterRow';
import { ArrowReset } from '../../icon/FluentIcons';
import { Col, Container, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import { ElectricResist, FireResist, IceResist } from './AttributeResist';
import NumberValueDropdown from '../../common/NumberValueDropdown';
import SVGButton from '../../common/SVGButton';
import UnitLvModeToggleButton from '../UnitLvModeToggleButton';

import { UnitLvMode, UnitLvValue } from '../../../domain/status/UnitLv';
import { UnitNumber } from '../../../domain/UnitBasicInfo';

import { useRemainPoints, useUnitLv, useUsedPointReset } from '../../../state/status/parameters/unitLvStatusState';
import { useSelectedUnit } from '../../../state/selector/unitSelectorState';

const unitLvStyle: CSSObject = {
  fontSize: '1.4em',
  width: 115,
  flexShrink: 0
};

const remainPointsStyle: CSSObject = {
  color: '#000',
  fontWeight: 'bold',
  border: '5px solid #fc0',
  borderRadius: 7,
  backgroundColor: '#ffa',
  width: 110,
  marginLeft: 'auto'
};

const resetPointsStyle: CSSObject = {
  marginLeft: 10
};

const divider: CSSObject = {
  borderTop: '2px dashed #444'
};

const bottomDivider: CSSObject = {
  borderBottom: '2px dashed #444'
};

const rowPadding: CSSObject = {
  padding: '10px 0'
};

const rowPaddingWithDivider = {
  ...divider,
  ...rowPadding
};

const unitLvItems = [...Array(100)].map((v, i) => 100 - i) as ReadonlyArray<UnitLvValue>;

const UnitLvView: React.FC = () => {
  const selected = useSelectedUnit();

  const View: React.FC<{ unit: UnitNumber }> = ({ unit }) => {
    const [lvMode, lv, setLv] = useUnitLv(unit);
    return (
      lvMode === UnitLvMode.Manual ?
        (<NumberValueDropdown
          css={{ display: 'inline-block' }}
          id="unit-lv-dropdown"
          items={unitLvItems}
          value={lv ? lv : 1}
          onChange={(lv) => { setLv(lv); }}
        />) :
        (<span>{lv}</span>)
    );
  };

  return selected ? (
    <View unit={selected.no} />
  ) : (
    <span>0</span>
  );
};

const RemainPointsView: React.FC = () => {
  const selected = useSelectedUnit();

  const View: React.FC<{ unit: UnitNumber }> = ({ unit }) => {
    const remainPoints = useRemainPoints(unit);
    return (<React.Fragment>{remainPoints}</React.Fragment>);
  };

  return selected ? (
    <View unit={selected.no} />
  ) : (
    <React.Fragment>0</React.Fragment>
  );
};

const ResetPointsButton: React.FC = () => {
  const { t } = useTranslation();
  const selected = useSelectedUnit();

  const Button: React.FC<{ unit: UnitNumber }> = ({ unit }) => {
    const [disabled, reset] = useUsedPointReset(unit);

    const [show, setShow] = useState(false);
    useEffect(() => { setShow(false); }, [disabled]);

    return (
      <OverlayTrigger
        placement="auto"
        show={show}
        onToggle={nextShow => setShow(nextShow)}
        overlay={<Tooltip id='tooltip-reset-status-parameter-points'>{t('status.reset_points')}</Tooltip>}
      >
        <SVGButton
          aria-label="Reset points"
          variant="danger"
          svg={<ArrowReset />}
          disabled={disabled}
          onClick={reset}
        />
      </OverlayTrigger>
    );
  };

  return selected ? (
    <Button unit={selected.no} />
  ) : (
    <SVGButton
      aria-label="Reset points"
      variant="danger"
      svg={<ArrowReset />}
      disabled={true}
    />
  );
};

const LvContainer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <div css={{ display: 'flex' }}>
        <div css={unitLvStyle}>
          <span css={{ marginRight: 5 }}>{t('lv')}</span>
          <UnitLvView />
        </div>
        <div css={remainPointsStyle}>
          <div css={{ display: 'inline-block', width: '50%', textAlign: 'right' }}><RemainPointsView /></div>
          <div css={{ display: 'inline-block', width: '50%', textAlign: 'left', fontSize: '0.8em' }}>&nbsp;{t('status.remain_points')}</div>
        </div>
        <div css={resetPointsStyle}>
          <ResetPointsButton />
        </div>
      </div>
      <UnitLvModeToggleButton />
    </React.Fragment>
  );
};

const UnitStatusParameter: React.FC = () => {
  return (
    <div css={{ color: '#ccc' }}>
      <LvContainer />
      <Container fluid css={{ marginTop: 10 }}>
        <HpParameterRow css={rowPadding} />
        <AtkParameterRow css={rowPaddingWithDivider} />
        <DefParameterRow css={rowPaddingWithDivider} />
        <AccParameterRow css={rowPaddingWithDivider} />
        <EvaParameterRow css={rowPaddingWithDivider} />
        <CriParameterRow css={rowPaddingWithDivider} />
        <SpdParameterRow css={rowPaddingWithDivider} />
        <Row css={{ ...rowPaddingWithDivider, ...bottomDivider, justifyContent: 'space-around' }}>
          <Col xs="auto" css={{ padding: 0 }}><FireResist /></Col>
          <Col xs="auto" css={{ padding: 0 }}><IceResist /></Col>
          <Col xs="auto" css={{ padding: 0 }}><ElectricResist /></Col>
        </Row>
      </Container>
    </div>
  );
};

export default UnitStatusParameter;
