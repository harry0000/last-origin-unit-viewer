/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './header/Header';
import SquadRestore from './squad/SquadRestore';
import SquadView from './squad/SquadView';
import ToastNotifier from './common/ToastNotifier';
import UnitDetailView from './unit/UnitDetailView';
import UnitDragPreview from './squad/UnitDragPreview';
import UnitList from './unit/UnitList';
import UnitSelector from './unit/UnitSelector';

import { useRemoveSquadUnitDrop } from '../state/squad/SquadHook';

import './MainContainer.css';

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
        <div className="main-content"><UnitSelector /></div>
        <div className="main-content"><UnitList /></div>
        <div className="main-content"><SquadView /></div>
        <div className="main-content"><UnitDetailView /></div>
      </main>
      <UnitDragPreview />
      <ToastNotifier />
    </React.Fragment>
  );
};

export default MainContainer;
