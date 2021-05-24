/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import RoundedToggleButton from '../common/RoundedToggleButton';

import { UnitLvMode } from '../../domain/status/UnitLv';

const UnitLvModeToggleButton: React.FC<{
  lvMode?: UnitLvMode,
  disabled: boolean,
  onChange: () => void
}> = ({ lvMode, disabled, onChange }) => {
  const { t } = useTranslation();

  return (
    <OverlayTrigger
      placement='auto'
      overlay={<Tooltip id='tooltip-unit-lv-mode'>{t('status.lv_mode.annotation')}</Tooltip>}
    >
      <RoundedToggleButton
        css={{
          '& > .btn.btn-toggle': {
            lineHeight: '0.7'
          }
        }}
        disabled={disabled}
        selected={lvMode === 'auto'}
        onChange={onChange}
      >
        {t('status.lv_mode.label')}
      </RoundedToggleButton>
    </OverlayTrigger>
  );
};

export default UnitLvModeToggleButton;
