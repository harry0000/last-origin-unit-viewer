/** @jsx jsx */
import { Theme, jsx } from '@emotion/react';
import { Interpolation } from '@emotion/serialize';
import React, { ReactNode } from 'react';

import {
  ActiveSkillIcon,
  DisableActiveSkillIcon,
  DisablePassiveSkillIcon,
  PassiveSkillIcon
} from '../icon/SkillIcons';
import { Nav, Tab } from 'react-bootstrap';
import SkillPane from './SkillPane';
import UnitFormSelector from './UnitFormSelector';

import { SkillType } from '../../domain/skill/SkillType';

import {
  useActive1SkillNav,
  useActive2SkillNav,
  usePassive1SkillNav,
  usePassive2SkillNav,
  usePassive3SkillNav
} from '../../state/skill/UnitSkillHook';
import { useSkillTab } from '../../state/ui/UnitSkillTabState';

import './SkillNavTab.css';

const SkillNavItem: React.FC<{
  eventKey: SkillType,
  active: boolean,
  disabled: boolean,
  children: ReactNode
}> = ({ eventKey, active, disabled, children }) => {
  const className = eventKey.startsWith('active') ? 'active-skill' : 'passive-skill';

  return (
    <Nav.Item>
      <Nav.Link className={className} eventKey={eventKey} active={active} disabled={disabled}>
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
  const [eventKey, active, enable] = useActive1SkillNav();

  return (
    <SkillNavItem eventKey={eventKey} active={active} disabled={!enable}>
      {enable ? (<ActiveSkillIcon skillType={SkillType.Active1} />) : (<DisableActiveSkillIcon />)}
      <span className="sr-only">Active skill 1</span>
    </SkillNavItem>
  );
};

const Active2SkillNavItem: React.FC = () => {
  const [eventKey, active, enable] = useActive2SkillNav();

  return (
    <SkillNavItem eventKey={eventKey} active={active} disabled={!enable}>
      {enable ? (<ActiveSkillIcon skillType={SkillType.Active2} />) : (<DisableActiveSkillIcon />)}
      <span className="sr-only">Active skill 2</span>
    </SkillNavItem>
  );
};

const Passive1SkillNavItem: React.FC = () => {
  const [eventKey, active, enable] = usePassive1SkillNav();

  return (
    <SkillNavItem eventKey={eventKey} active={active} disabled={!enable}>
      {enable ? (<PassiveSkillIcon skillType={SkillType.Passive1} />) : (<DisablePassiveSkillIcon />)}
      <span className="sr-only">Passive skill 1</span>
    </SkillNavItem>
  );
};

const Passive2SkillNavItem: React.FC = () => {
  const [eventKey, active, enable] = usePassive2SkillNav();

  return (
    <SkillNavItem eventKey={eventKey} active={active} disabled={!enable}>
      {enable ? (<PassiveSkillIcon skillType={SkillType.Passive2} />) : (<DisablePassiveSkillIcon />)}
      <span className="sr-only">Passive skill 2</span>
    </SkillNavItem>
  );
};

const Passive3SkillNavItem: React.FC = () => {
  const [eventKey, active, enable] = usePassive3SkillNav();

  return (
    <SkillNavItem eventKey={eventKey} active={active} disabled={!enable}>
      {enable ? (<PassiveSkillIcon skillType={SkillType.Passive3} />) : (<DisablePassiveSkillIcon />)}
      <span className="sr-only">Passive skill 3</span>
    </SkillNavItem>
  );
};

const UnitSkillList: React.FC<{ css?: Interpolation<Theme> }> = (props) => {
  const [activeTab, setActiveTab] = useSkillTab();

  return (
    <div {...props}>
      <UnitFormSelector />
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
        <Tab.Content css={{ minHeight: 300 }}>
          <SkillPane eventKey="active1" />
          <SkillPane eventKey="active2" />
          <SkillPane eventKey="passive1" />
          <SkillPane eventKey="passive2" />
          <SkillPane eventKey="passive3" />
        </Tab.Content>
      </Tab.Container>
    </div>
  );
};

export default UnitSkillList;
