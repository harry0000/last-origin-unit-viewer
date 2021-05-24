/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';

import UnitList from './unit/UnitList';
import Header from './header/Header';
import UnitSelector from './unit/UnitSelector';
import UnitSkillList from './skill/UnitSkillList';
import UnitStatus from './status/UnitStatus';

import './MainContainer.css';

const MainContainer: React.FC = () => {
  return (
    <React.Fragment>
      <Header />
      <main className='main'>
        <UnitSelector className='main-content' />
        <UnitList className='main-content' />
        <UnitStatus className='main-content' />
        <UnitSkillList className='main-content' />
      </main>
    </React.Fragment>
  );
};

export default MainContainer;
