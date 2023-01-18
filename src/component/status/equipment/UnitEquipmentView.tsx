/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { Fragment, Suspense } from 'react';

import UnitStatusHeading from '../UnitStatusHeading';

import '../UnitSlot.css';

const EquipmentSelector = React.lazy(() => import('./EquipmentSelector'));

const UnitEquipmentView: React.FC = () => {
  return (
    <div className="slot-container">
      <UnitStatusHeading
        iconSrc={`${process.env.PUBLIC_URL}/icon/placeholder_gear.webp`}
        headingKey="heading.equipment"
      />
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
