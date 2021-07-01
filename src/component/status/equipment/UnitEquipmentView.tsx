/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

import EquipmentSelector from './EquipmentSelector';

import '../UnitStatusSlot.css';

const UnitEquipmentView: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="slot-container">
      <div className="label"><span>{t('status.equipment')}</span></div>
      <div className="slot-row">
        <div className="slot-cell"><EquipmentSelector slot="chip1" /></div>
        <div className="slot-cell"><EquipmentSelector slot="chip2" /></div>
        <div className="slot-cell"><EquipmentSelector slot="os" /></div>
        <div className="slot-cell"><EquipmentSelector slot="gear" /></div>
      </div>
    </div>
  );
};

export default UnitEquipmentView;
