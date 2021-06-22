/** @jsxRuntime classic */
/** @jsx jsx */
import { CSSObject, jsx } from '@emotion/react';
import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
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
import { ArrowReset } from '../icon/FluentIcons';
import { Button, Col, Container, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import { ElectricResist, FireResist, IceResist } from './AttributeResist';
import NumberValueDropdown from '../common/NumberValueDropdown';
import SVGIcon from '../icon/SVGIcon';
import UnitLvModeToggleButton from './UnitLvModeToggleButton';

import { UnitLvValue } from '../../domain/status/UnitLv';

import { selectedUnitLvStatusState } from '../../state/status/unitLvStatusState';

const unitLvStyle: CSSObject = {
  fontSize: '1.4em',
  width: 115,
  flexShrink: 0
};

const remainPointsStyle: CSSObject = {
  color: '#000',
  fontWeight: 'bold',
  border: '5px solid #fc0',
  borderRadius: 8,
  backgroundColor: '#ff8',
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

const ResetPointsButton: React.FC<{ disabled: boolean, onClick: () => void }> = ({ disabled, onClick }) => {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);

  useEffect(() => { setShow(false); }, [disabled]);

  return (
    <OverlayTrigger
      placement="auto"
      show={show}
      onToggle={nextShow => setShow(nextShow)}
      overlay={<Tooltip id='tooltip-reset-status-parameter-points'>{t('status.reset_points')}</Tooltip>}
    >
      <Button
        variant="danger"
        aria-label="Reset points"
        css={{ lineHeight: '1.2' }}
        disabled={disabled}
        onClick={onClick}
      >
        <SVGIcon
          css={{
            height: 20,
            width: 20
          }}
        >
          <ArrowReset />
        </SVGIcon>
      </Button>
    </OverlayTrigger>
  );
};

const LvContainer: React.FC = () => {
  const { t } = useTranslation();
  const [status, setStatus] = useRecoilState(selectedUnitLvStatusState);

  return (
    <React.Fragment>
      <div css={{ display: 'flex' }}>
        <div css={unitLvStyle}>
          <span css={{ marginRight: 5 }}>{t('lv')}</span>
          {status?.lvMode === 'manual' ?
            (<NumberValueDropdown
              css={{ display: 'inline-block' }}
              id="unit-lv-dropdown"
              items={unitLvItems}
              value={status.lv}
              onChange={(lv) => { setStatus(s => s?.setUnitLv(lv)); }}
            />) :
            (<span>{status?.lv ?? 0}</span>)}
        </div>
        <div css={remainPointsStyle}>
          <div css={{ display: 'inline-block', width: '50%', textAlign: 'right' }}>{status ? status.remainPoints : 0}</div>
          <div css={{ display: 'inline-block', width: '50%', textAlign: 'left', fontSize: '0.8em' }}>&nbsp;{t('status.remain_points')}</div>
        </div>
        <div css={resetPointsStyle}>
          <ResetPointsButton
            disabled={!status || status.usedPoints === 0}
            onClick={() => { setStatus(s => s?.resetParameterPoints()); }}
          />
        </div>
      </div>
      <UnitLvModeToggleButton disabled={!status} lvMode={status?.lvMode} onChange={() => { setStatus(s => s?.toggleLvMode()); }} />
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
