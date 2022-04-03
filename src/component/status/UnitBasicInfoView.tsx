/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

import UnitRankView from './UnitRankView';

import { UnitBasicInfo } from '../../domain/UnitBasicInfo';
import { UnitCost } from '../../domain/status/UnitCost';
import { useSelectedUnit } from '../../state/selector/unitSelectorState';
import { useUnitCost } from '../../state/status/parameters/unitLvStatusState';

import { ifNonNullable, ifTruthy } from '../../util/react';

import './UnitBasicInfoView.css';

const UnitCostView: React.FC<{ unit: UnitBasicInfo }> = ({ unit }) => {
  const { part, nutrient, power } = useUnitCost(unit);
  const CostView = ({ type, value }: { type: keyof UnitCost, value: number }) => {
    const { t } = useTranslation();
    return (
      <span>
        <span
          className={`cost-icon ${type}`}
          css={{ backgroundImage: `url(${process.env.PUBLIC_URL}/icon/cost_${type}.webp)` }}
        >
          <span className="sr-only">{t(`unit.type.${type}`)}</span>
        </span>
        <span className="cost-value">{value}</span>
      </span>
    );
  };

  return (
    <span className="unit-cost">
      <CostView type="part" value={part} />
      <CostView type="nutrient" value={nutrient} />
      <CostView type="power" value={power} />
    </span>
  );
};

const UnitInfoView: React.FC = () => {
  const { t } = useTranslation();
  const unit = useSelectedUnit();
  const name = unit ? t(`unit:name.${unit.no}`) : '';
  const type = unit ? t(`common:unit.type.${unit.type}`) : '';
  const role = unit ? t(`common:unit.role.${unit.role}`) : '';

  return (
    <React.Fragment>
      <div className="unit-name" title={name}>
        {name ? name : (<React.Fragment>&nbsp;</React.Fragment>)}
      </div>
      <div className="unit-sub-info">
        <span>{type}</span><span className="spacer" /><span>{role}</span>
        {ifTruthy(!!unit, (<span className="divider" />))}
        {ifNonNullable(unit, v => (<UnitCostView unit={v} />))}
      </div>
    </React.Fragment>
  );
};

const UnitBasicInfoView: React.FC = () => {
  return (
    <div className="unit-basic-info-view">
      <div>
        <UnitRankView />
      </div>
      <div className="unit-info">
        <UnitInfoView />
      </div>
    </div>
  );
};

export default UnitBasicInfoView;
