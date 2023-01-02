/** @jsxRuntime classic */
/** @jsx jsx */
import { CSSObject, jsx } from '@emotion/react';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { ArrowReset } from '../../icon/FluentIcons';
import NumberValueDropdown from '../../common/NumberValueDropdown';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import SVGButton from '../../common/SVGButton';
import UnitLvModeToggleButton from '../UnitLvModeToggleButton';

import { UnitNumber } from '../../../domain/UnitBasicInfo';
import { UnitLvMode, UnitLvValue, UnitMaxLvValue } from '../../../domain/status/UnitLv';

import { useRemainPoints, useUnitLv, useUsedPointReset } from '../../../state/status/parameters/UnitLvStatusHook';
import { useSelectedUnit } from '../../../state/selector/UnitSelectorHook';

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

const unitLvItems = [...Array(UnitMaxLvValue)].map((v, i) => UnitMaxLvValue - i) as ReadonlyArray<UnitLvValue>;

const UnitLvValueView: React.FC = () => {
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
          onChange={(lv) => {
            setLv(lv);
          }}
        />) :
        (<span>{lv}</span>)
    );
  };

  return selected ? (
    <View unit={selected.no}/>
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

    return (
      <OverlayTrigger
        placement="auto"
        show={show && !disabled}
        onToggle={nextShow => setShow(nextShow && !disabled)}
        overlay={<Tooltip id="tooltip-reset-status-parameter-points">{t('status.reset_points')}</Tooltip>}
      >
        <SVGButton
          aria-label="Reset points"
          variant="danger"
          svg={<ArrowReset />}
          disabled={disabled}
          onClick={() => {
            reset();
            setShow(false);
          }}
        />
      </OverlayTrigger>
    );
  };

  return selected ? (
    <Button unit={selected.no}/>
  ) : (
    <SVGButton
      aria-label="Reset points"
      variant="danger"
      svg={<ArrowReset />}
      disabled={true}
    />
  );
};

const UnitLvView: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div css={{ color: '#ccc' }}>
      <div css={{ display: 'flex', alignItems: 'center' }}>
        <div css={unitLvStyle}>
          <span css={{ marginRight: 5 }}>{t('lv')}</span>
          <UnitLvValueView />
        </div>
        <div css={remainPointsStyle}>
          <div css={{
            display: 'inline-block',
            width: '50%',
            textAlign: 'right'
          }}>
            <RemainPointsView />
          </div>
          <div css={{
            display: 'inline-block',
            width: '50%',
            textAlign: 'left',
            fontSize: '0.8em'
          }}>&nbsp;{t('status.remain_points')}</div>
        </div>
        <div css={resetPointsStyle}>
          <ResetPointsButton />
        </div>
      </div>
      <div css={{ paddingLeft: 2 }}>
        <UnitLvModeToggleButton />
      </div>
    </div>
  );
};

export default UnitLvView;
