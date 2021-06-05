/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

import SVGIcon from '../icon/SVGIcon';
import { LockClosed } from '../icon/FluentIcons';

import { EquipmentSlotAvailableLv } from '../../domain/status/UnitEquipment';

import { ifTruthy } from '../../util/react';

const SlotUnavailableOverlay: React.FC<{
  show: boolean,
  availableLv: EquipmentSlotAvailableLv
}> = React.memo(({ show, availableLv }) => {
  const { t } = useTranslation();

  return (
    ifTruthy(
      show,
      (<span
        css={{
          display: 'inline-flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.75)'
        }}>
        <SVGIcon css={{ height: 24, width: 24 }}>
          <LockClosed/>
        </SVGIcon>
        <span css={{ color: '#ccc', fontWeight: 'bold' }}>
          {t('lv')}&nbsp;{availableLv}
        </span>
      </span>)
    )
  );
});

export default SlotUnavailableOverlay;
