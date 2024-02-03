/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { Image } from 'react-bootstrap';

import { UnitNumber } from '../../domain/UnitBasicInfo';

import { buildNumberFormatter } from '../status/parameters/UnitStatusParameterFormatter';
import { useSquadUnitActionOrder } from '../../state/status/parameters/SquadUnitStatusParameterHook';

import './ActionOrderView.css';

const apPlaceHolder = buildNumberFormatter({ minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(0);

const UnitIcon: React.FC<{ unit: UnitNumber }> =  React.memo(({ unit }) => {
  const { t } = useTranslation();

  return (
    <div className="unit">
      <Image
        rounded
        draggable="false"
        width={48}
        height={48}
        alt={t('unit:display', { number: unit })}
        src={`${import.meta.env.BASE_URL}unit_icon/${unit}.webp`}
      />
    </div>
  );
});

const UnitIconPlaceHolder: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="unit">
      <Image
        rounded
        draggable="false"
        width={24}
        height={24}
        alt={t('squad.empty_unit')}
        src={`${import.meta.env.BASE_URL}icon/placeholder_core_link.webp`}
      />
    </div>
  );
};

const UnitApValue: React.FC<{ ap: string }> = ({ ap }) => {
  return (<div className="ap-value">{ap}</div>);
};

const ActionOrderView: React.FC = () => {
  const [readyToActionUnits, notReadyToActionUnits] = useSquadUnitActionOrder();
  const existsReadyToAction = readyToActionUnits.length > 0;

  return (
    <div className="action-order-container">
      <div className="unit-row">
        {
          existsReadyToAction ?
            readyToActionUnits.map(({ unit }) => (<UnitIcon key={unit} unit={unit} />)) :
            (<UnitIconPlaceHolder />)
        }
        <div className="divider" />
        {notReadyToActionUnits.map(({ unit }) => (<UnitIcon key={unit} unit={unit} />))}
      </div>
      <div className="ap-row">
        {
          existsReadyToAction ?
            readyToActionUnits.map(({ unit, ap }) => (<UnitApValue key={`${unit}_${ap}`} ap={ap} />)) :
            (<UnitApValue ap={apPlaceHolder} />)
        }
        <div className="divider" />
        {notReadyToActionUnits.map(({ unit, ap }) => (<UnitApValue key={`${unit}_${ap}`} ap={ap} />))}
      </div>
    </div>
  );
};

export default ActionOrderView;
