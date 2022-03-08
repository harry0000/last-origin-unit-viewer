/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { Nav, Tab } from 'react-bootstrap';
import UnitStatus from '../status/UnitStatus';
import UnitSkillList from '../skill/UnitSkillList';

import './UnitDetailView.css';

const UnitDetailTabEvent = {
  Status: 'status',
  Skill: 'skill'
} as const;
type UnitDetailTabEvent = typeof UnitDetailTabEvent[keyof typeof UnitDetailTabEvent]

const UnitDetailTabItem: React.FC<{
  eventKey: UnitDetailTabEvent
}> = ({ eventKey }) => {
  const { t } = useTranslation();

  return (
    <Nav.Item
      className="unit-detail-tab-item"
    >
      <Nav.Link
        className="unit-detail-tab-link"
        eventKey={eventKey}
      >
        {t(`form.unit_detail_tab.${eventKey}`)}
      </Nav.Link>
    </Nav.Item>
  );
};

const UnitDetailView: React.FC<{ className: string }> = ({ className }) => {
  return (
    <div className={className}>
      <Tab.Container
        id="unit-detail-view-tab-container"
        defaultActiveKey={UnitDetailTabEvent.Status}
      >
        <Nav
          variant="pills"
          className="unit-detail-view-tab"
        >
          <UnitDetailTabItem eventKey="status" />
          <UnitDetailTabItem eventKey="skill" />
        </Nav>
        <Tab.Content className="unit-detail">
          <Tab.Pane eventKey="status"><UnitStatus /></Tab.Pane>
          <Tab.Pane eventKey="skill"><UnitSkillList /></Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
  );
};

export default UnitDetailView;
