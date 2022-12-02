/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { Tab, Tabs } from 'react-bootstrap';
import SquadUnitStatusParameter from './SquadUnitStatusParameter';
import UnitStatusParameter from './UnitStatusParameter';

import './UnitStatusParameterContainer.css';

const UnitStatusParameterContainer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Tabs
      id="unit-status-parameter-details-tabs"
      className="unit-status-parameter-details"
      defaultActiveKey="in_orca"
    >
      <Tab
        tabClassName="unit-status-parameter-details"
        eventKey="in_orca"
        title={t('form.unit_status_tab.in_orca')}
      >
        <UnitStatusParameter />
      </Tab>
      <Tab
        tabClassName="unit-status-parameter-details"
        eventKey="in_squad"
        title={t('form.unit_status_tab.in_squad')}
      >
        <SquadUnitStatusParameter />
      </Tab>
    </Tabs>
  );
};

export default UnitStatusParameterContainer;
