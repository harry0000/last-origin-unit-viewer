/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { OverlayTrigger, Popover } from 'react-bootstrap';

import { UnitAlias, unitNumbersForAlias } from '../../domain/UnitAlias';
import { UnitNumber } from '../../domain/UnitBasicInfo';

// TODO: Move to excepting logic from view.
const UnitAliasView: React.FC<{
  unitAlias: UnitAlias,
  exceptUnit?: UnitNumber
}> = ({ unitAlias, exceptUnit }) => {
  const { t } = useTranslation();
  const popover = (
    <Popover id="popover-unit-alias" css={{ opacity: '0.9' }}>
      <Popover.Content>
        {[...unitNumbersForAlias[unitAlias]]
          .filter(n => n !== exceptUnit)
          .map(n => (<div key={n} css={{ textAlign: 'left' }}>{t('unit:display', { number: n })}</div>))}
      </Popover.Content>
    </Popover>
  );

  return (
    <OverlayTrigger
      placement='auto'
      overlay={popover}
    >
      <span css={{ cursor: 'help', textDecoration: 'underline' }}>
        {t(`effect:unit.${unitAlias}`)}
      </span>
    </OverlayTrigger>
  );
};

export default UnitAliasView;
