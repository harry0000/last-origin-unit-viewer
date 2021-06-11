/** @jsxRuntime classic */
/** @jsx jsx */
import { Theme, jsx } from '@emotion/react';
import { Interpolation } from '@emotion/serialize';
import React, { ReactNode } from 'react';
import { Nav, Tab } from 'react-bootstrap';
import { useRecoilState, useRecoilValue } from 'recoil';

import {
  Active1SkillPane,
  Active2SkillPane,
  Passive1SkillPane,
  Passive2SkillPane,
  Passive3SkillPane
} from './UnitSkillPane';
import {
  ActiveSkillIcon,
  DisableActiveSkillIcon,
  DisablePassiveSkillIcon,
  PassiveSkillIcon
} from '../icon/SkillIcons';

import { selectedUnitSkillState } from '../../state/skill/unitSkillState';
import { unitSkillTabState } from '../../state/ui/unitSkillTabState';

import './SkillNavTab.css';

export const SkillType = {
  Active1: 'active1',
  Active2: 'active2',
  Passive1: 'passive1',
  Passive2: 'passive2',
  Passive3: 'passive3'
} as const;
export type SkillType = typeof SkillType[keyof typeof SkillType]

const SkillNavItem: React.FC<{ eventKey: SkillType, disabled: boolean, children: ReactNode }> = ({ eventKey, disabled, children }) => {
  const className = eventKey.startsWith('active') ? 'active-skill' : 'passive-skill';

  return (
    <Nav.Item>
      <Nav.Link className={className} eventKey={eventKey} disabled={disabled}>
        <span
          css={{
            display: 'inline-block',
            '@media (max-width: 480px)': { width: 32 },
            '@media (min-width: 480px)': { width: 50 }
          }}
        >
          {children}
        </span>
      </Nav.Link>
    </Nav.Item>
  );
};

const Active1SkillNavItem: React.FC = () => {
  const skill = useRecoilValue(selectedUnitSkillState);

  return (
    <SkillNavItem eventKey="active1" disabled={!skill}>
      {skill ? (<ActiveSkillIcon number={1} />) : (<DisableActiveSkillIcon />)}
    </SkillNavItem>
  );
};

const Active2SkillNavItem: React.FC = () => {
  const skill = useRecoilValue(selectedUnitSkillState);

  return (
    <SkillNavItem eventKey="active2" disabled={!skill}>
      {skill ? (<ActiveSkillIcon number={2} />) : (<DisableActiveSkillIcon />)}
    </SkillNavItem>
  );
};

const Passive1SkillNavItem: React.FC = () => {
  const skill = useRecoilValue(selectedUnitSkillState);
  const enable = skill && skill.passive1Skill;

  return (
    <SkillNavItem eventKey="passive1" disabled={!enable}>
      {enable ? (<PassiveSkillIcon number={1} />) : (<DisablePassiveSkillIcon />)}
    </SkillNavItem>
  );
};

const Passive2SkillNavItem: React.FC = () => {
  const skill = useRecoilValue(selectedUnitSkillState);
  const enable = skill && skill.passive2Skill;

  return (
    <SkillNavItem eventKey="passive2" disabled={!enable}>
      {enable ? (<PassiveSkillIcon number={2} />) : (<DisablePassiveSkillIcon />)}
    </SkillNavItem>
  );
};

const Passive3SkillNavItem: React.FC = () => {
  const skill = useRecoilValue(selectedUnitSkillState);
  const enable = skill && skill.passive3Skill;

  return (
    <SkillNavItem eventKey="passive3" disabled={!enable}>
      {enable ? (<PassiveSkillIcon number={3} />) : (<DisablePassiveSkillIcon />)}
    </SkillNavItem>
  );
};

const UnitSkillList: React.FC<{ className?: string, css?: Interpolation<Theme> }> = (props) => {
  const [activeTab, setActiveTab] = useRecoilState(unitSkillTabState);

  return (
    <div {...props}>
      <Tab.Container
        id="unit-skill-viewer"
        activeKey={activeTab}
        onSelect={eventKey => { setActiveTab(eventKey ?? undefined); }}
      >
        <Nav variant="tabs" className={`skill ${activeTab ? activeTab.startsWith('active') ? 'active-skill' : 'passive-skill' : ''}`}>
          <Active1SkillNavItem />
          <Active2SkillNavItem />
          <Passive1SkillNavItem />
          <Passive2SkillNavItem />
          <Passive3SkillNavItem />
        </Nav>
        <Tab.Content>
          <Active1SkillPane />
          <Active2SkillPane />
          <Passive1SkillPane />
          <Passive2SkillPane />
          <Passive3SkillPane />
        </Tab.Content>
      </Tab.Container>
    </div>
  );
};

export default UnitSkillList;
