/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { Nav, Tab } from 'react-bootstrap';
import UnitStatusParameterTabPane from './UnitStatusParameterTabPane';

import './UnitStatusParameterContainer.css';

const SquadUnitStatusParameterTabPane = React.lazy(() => import('./SquadUnitStatusParameterTabPane'));

const UnitStatusParameterContainer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Tab.Container
      id="unit-status-parameter-details-tabs"
      defaultActiveKey="in_orca"
    >
      <Nav variant="tabs" className="unit-status-parameter-details">
        <Nav.Item>
          <Nav.Link eventKey="in_orca">
            {t('form.unit_status_tab.in_orca')}
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="in_squad">
            {t('form.unit_status_tab.in_squad')}
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Tab.Content>
        <UnitStatusParameterTabPane eventKey="in_orca" />
        <React.Suspense fallback={null}>
          <SquadUnitStatusParameterTabPane eventKey="in_squad" />
        </React.Suspense>
      </Tab.Content>
    </Tab.Container>
  );
};

export default UnitStatusParameterContainer;
