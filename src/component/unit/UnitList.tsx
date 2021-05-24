/** @jsxRuntime classic */
/** @jsx jsx */
import { CSSObject, jsx, Theme } from '@emotion/react';
import { Interpolation } from '@emotion/serialize';
import React from 'react';
import { useRecoilValue } from 'recoil';

import { filteredUnitsState } from '../../state/unit/filteredUnitsState';

import UnitCard from './UnitCard';

const customScrollBar: CSSObject = {
  scrollbarColor: '#ffcc00 #514E55',
  scrollbarWidth: 'thin',
  '&::-webkit-scrollbar': {
    width: 10
  },
  '&::-webkit-scrollbar-track': {
    background: '#514E55',
    border: 'none',
    borderRadius: 10,
    boxShadow: 'inset 0 0 2px #888'
  },
  '&::-webkit-scrollbar-thumb': {
    background: '#ffcc00',
    borderRadius: 10,
    boxShadow: 'none'
  }
};

const UnitCards: React.FC = () => {
  const units = useRecoilValue(filteredUnitsState);

  return (
    <React.Fragment>
      {units.map(unit => {
        return (
          <UnitCard key={unit.no} unit={unit} />
        );
      })}
    </React.Fragment>
  );
};

const UnitList: React.FC<{ className?: string, css?: Interpolation<Theme> }> = (props) => {
  return (
    <div
      {...props}
      css={{
        height: 335,
        padding: '10px 5px 5px',
        overflowY: 'scroll',
        ...customScrollBar
      }}
    >
      <div
        css={{
          display: 'grid',
          gridGap: 10,
          gridTemplateColumns: 'repeat(auto-fill, 100px)',
          gridTemplateRows: 'repeat(auto-fill, 100px)',
          justifyContent: 'space-evenly'
        }}
      >
        <UnitCards />
      </div>
    </div>
  );
};

export default UnitList;
