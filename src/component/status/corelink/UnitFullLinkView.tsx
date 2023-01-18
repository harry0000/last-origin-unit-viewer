/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';

import { DropdownPlaceholder } from '../DropdownPlaceholder';
import { useSelectedUnit } from '../../../state/selector/UnitSelectorHook';

const FullLinkBonusDropdown = React.lazy(() => import('./FullLinkBonusDropdown'));

const FullLinkBonusSelector: React.FC = () => {
  const selected = useSelectedUnit();

  return selected ?
    (<Suspense fallback={<DropdownPlaceholder />}><FullLinkBonusDropdown unit={selected} /></Suspense>) :
    (<DropdownPlaceholder />);
};

const UnitFullLinkView: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div css={{ color: '#ccc', fontSize: '0.9em', marginBottom: 8 }}>
        <span>{t('heading.full_link_bonus')}</span>
      </div>
      <div>
        <FullLinkBonusSelector />
      </div>
    </div>
  );
};

export default UnitFullLinkView;
