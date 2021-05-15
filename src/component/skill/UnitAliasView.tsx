/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { OverlayTrigger, Tooltip } from 'react-bootstrap';

import { UnitAlias, unitNumbersForAlias } from '../../domain/UnitAlias';
import { UnitNumber } from '../../domain/UnitBasicInfo';

const UnitAliasView: React.FC<{
  unitAlias: UnitAlias,
  selfUnitNumber: UnitNumber
}> = ({ unitAlias, selfUnitNumber }) => {
  const { t } = useTranslation();
  const toolTip = (
    <Tooltip id='tooltip-unit-alias'>
      {[...unitNumbersForAlias[unitAlias]]
        .filter(n => n !== selfUnitNumber)
        .map(n => (<div key={n} css={{ textAlign: 'left' }}>{t('unit:display', { number: n })}</div>))}
    </Tooltip>
  );

  return (
    <OverlayTrigger
      placement='auto'
      overlay={toolTip}
    >
      <span css={{ cursor: 'help', textDecoration: 'underline' }}>
        {t(`effect:unit.${unitAlias}`)}
      </span>
    </OverlayTrigger>
  );
};

export default UnitAliasView;
