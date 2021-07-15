/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './header/Header';
import SquadRestore from './squad/SquadRestore';
import SquadView from './squad/SquadView';
import ToastNotifier from './common/ToastNotifier';
import UnitList from './unit/UnitList';
import UnitSelector from './unit/UnitSelector';
import UnitSkillList from './skill/UnitSkillList';
import UnitStatus from './status/UnitStatus';

import { useRemoveSquadUnitDrop } from '../state/squad/squadState';

import './MainContainer.css';
import UnitDragPreview from './squad/UnitDragPreview';

const MainContainer: React.FC = () => {
  const dropRef = useRemoveSquadUnitDrop();

  return (
    <React.Fragment>
      <Router><SquadRestore /></Router>
      <Header />
      <main
        className='main'
        ref={dropRef}
      >
        <UnitSelector className='main-content' />
        <UnitList className='main-content' />
        <SquadView className='main-content' />
        <UnitStatus className='main-content' />
        <UnitSkillList className='main-content' />
      </main>
      <UnitDragPreview />
      <ToastNotifier />
    </React.Fragment>
  );
};

export default MainContainer;
