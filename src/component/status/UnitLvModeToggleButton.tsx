/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import RoundedToggleButton from '../common/RoundedToggleButton';

import { UnitLvMode } from '../../domain/status/UnitLv';
import { UnitNumber } from '../../domain/UnitBasicInfo';

import { useSelectedUnit } from '../../state/selector/unitSelectorState';
import { useUnitLvMode } from '../../state/status/parameters/UnitLvStatusHook';

const style = {
  '& > .btn.btn-toggle': {
    lineHeight: '0.7'
  }
} as const;

const UnitLvModeToggleButton: React.FC = () => {
  const { t } = useTranslation();
  const selected = useSelectedUnit();
  const ToggleButton = ({ disabled, selected, toggle, ...rest }: { disabled?: boolean, selected: boolean, toggle?: () => void }) => (
    <RoundedToggleButton
      {...rest}
      css={style}
      disabled={disabled}
      selected={selected}
      onChange={toggle}
    >
      {t('status.lv_mode.label')}
    </RoundedToggleButton>
  );

  const LvModeToggleButton: React.FC<{ unit: UnitNumber }> = ({ unit }) => {
    const [lvMode, toggle] = useUnitLvMode(unit);

    return (
      <OverlayTrigger
        placement='auto'
        overlay={<Tooltip id='tooltip-unit-lv-mode'>{t('status.lv_mode.annotation')}</Tooltip>}
      >
        <ToggleButton selected={lvMode === UnitLvMode.Auto} toggle={toggle} />
      </OverlayTrigger>
    );
  };

  return selected ?
    (<LvModeToggleButton unit={selected.no} />) :
    (<ToggleButton disabled={true} selected={false} />);
};

export default UnitLvModeToggleButton;
