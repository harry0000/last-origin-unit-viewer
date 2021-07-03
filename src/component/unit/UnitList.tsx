/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import { useRecoilValue } from 'recoil';

import { filteredUnitsState } from '../../state/selector/unitSelectorState';

import UnitCard from './UnitCard';

import './UnitList.css';

const UnitList: React.FC<{ className?: string }> = ({ className }) => {
  const units = useRecoilValue(filteredUnitsState);

  return (
    <div
      className={`${className ?? ''} unit-list`}
    >
      <div className="unit-grid">
        {units.map(unit => (<UnitCard key={unit.no} unit={unit} />))}
      </div>
    </div>
  );
};

export default UnitList;
