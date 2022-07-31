/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { Tab, Tabs } from 'react-bootstrap';
import UnitStatusParameterInOrca from './UnitStatusParameterInOrca';
import UnitStatusParameterInSquad from './UnitStatusParameterInSquad';

import './UnitStatusParameter.css';

const UnitStatusParameter: React.FC = () => {
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
        title="オルカ内での戦闘員詳細"
      >
        <UnitStatusParameterInOrca />
      </Tab>
      <Tab
        tabClassName="unit-status-parameter-details"
        eventKey="in_squad"
        title="分隊内での戦闘員詳細"
      >
        <UnitStatusParameterInSquad />
      </Tab>
    </Tabs>
  );
};

export default UnitStatusParameter;
