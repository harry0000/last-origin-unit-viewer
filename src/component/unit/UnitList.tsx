/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';

import { useFilteredUnitList } from '../../state/selector/UnitSelectorHook';

import UnitCard from './UnitCard';

import './UnitList.css';

const UnitList: React.FC = () => {
  const units = useFilteredUnitList();

  return (
    <div className="unit-list-view">
      <div className="unit-list">
        <div className="unit-grid">
          {units.map(unit => (<UnitCard key={unit.no} unit={unit} />))}
        </div>
      </div>
    </div>
  );
};

export default UnitList;
