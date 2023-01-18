/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { Fragment, Suspense } from 'react';
import { useTranslation } from 'react-i18next';

import '../UnitSlot.css';

const EquipmentSelector = React.lazy(() => import('./EquipmentSelector'));

const UnitEquipmentView: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="slot-container">
      <div className="label"><span>{t('heading.equipment')}</span></div>
      <div className="slot-row">
        <div className="slot-cell"><Suspense fallback={Fragment}><EquipmentSelector slot="chip1" /></Suspense></div>
        <div className="slot-cell"><Suspense fallback={Fragment}><EquipmentSelector slot="chip2" /></Suspense></div>
        <div className="slot-cell"><Suspense fallback={Fragment}><EquipmentSelector slot="os" /></Suspense></div>
        <div className="slot-cell"><Suspense fallback={Fragment}><EquipmentSelector slot="gear" /></Suspense></div>
      </div>
    </div>
  );
};

export default UnitEquipmentView;
