/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';

import { Dropdown } from 'react-bootstrap';

import { useSelectedUnit } from '../../../state/selector/UnitSelectorHook';

import './FullLinkBonusDropdown.css';

const FullLinkBonusDropdown = React.lazy(() => import('./FullLinkBonusDropdown'));

const DropdownPlaceholder: React.FC = () => (<Dropdown className="full-link-bonus"><div className="placeholder" /></Dropdown>);

const FullLinkBonusSelector: React.FC = () => {
  const selected = useSelectedUnit();

  return (
    <div className="selector full-link-bonus">
      {
        selected ?
          (<Suspense fallback={<DropdownPlaceholder />}><FullLinkBonusDropdown unit={selected} /></Suspense>) :
          (<DropdownPlaceholder />)
      }
    </div>
  );
};

const UnitFullLinkView: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div css={{ color: '#ccc', fontSize: '0.9em', marginBottom: 8 }}>
        <span>{t('status.full_link_bonus')}</span>
      </div>
      <div>
        <FullLinkBonusSelector />
      </div>
    </div>
  );
};

export default UnitFullLinkView;
