/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import { VirtuosoGrid } from 'react-virtuoso';

import { useFilteredUnitList } from '../../state/selector/UnitSelectorHook';

import UnitCard from './UnitCard';

import './UnitList.css';

const UnitList: React.FC = () => {
  const units = useFilteredUnitList();

  return (
    <div className="unit-list-view">
      <VirtuosoGrid
        style={{
          height: 280,
          overflowY: 'scroll'
        }}
        className="unit-list"
        listClassName="unit-grid"
        data={units}
        computeItemKey={(_, { no }) => no}
        itemContent={(_, unit) => (<UnitCard unit={unit} />)}
      />
    </div>
  );
};

export default UnitList;
