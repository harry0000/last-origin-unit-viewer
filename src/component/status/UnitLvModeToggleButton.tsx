/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useTranslation } from 'react-i18next';

import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import RoundedToggleButton from '../common/RoundedToggleButton';

import { UnitLvMode } from '../../domain/status/UnitLv';

import { toggleUnitLvMode, selectedUnitLvModeState } from '../../state/status/unitLvStatusState';

const UnitLvModeToggleButton: React.FC = () => {
  const { t } = useTranslation();

  const lvMode = useRecoilValue(selectedUnitLvModeState);
  const toggle = useSetRecoilState(toggleUnitLvMode);

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
        disabled={!lvMode}
        selected={lvMode === UnitLvMode.Auto}
        onChange={() => toggle()}
      >
        {t('status.lv_mode.label')}
      </RoundedToggleButton>
    </OverlayTrigger>
  );
};

export default UnitLvModeToggleButton;
