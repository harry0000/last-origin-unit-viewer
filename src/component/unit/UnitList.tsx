/** @jsxRuntime classic */
/** @jsx jsx */
import { CSSObject, Theme, jsx } from '@emotion/react';
import { Interpolation } from '@emotion/serialize';
import React from 'react';
import { useRecoilValue } from 'recoil';

import { filteredUnitsState } from '../../state/selector/unitSelectorState';

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

const UnitList: React.FC<{ className?: string, css?: Interpolation<Theme> }> = (props) => {
  const units = useRecoilValue(filteredUnitsState);

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
        {units.map(unit => {
          return (
            <UnitCard key={unit.no} unit={unit} />
          );
        })}
      </div>
    </div>
  );
};

export default UnitList;
