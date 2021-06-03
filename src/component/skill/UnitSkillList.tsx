/** @jsxRuntime classic */
/** @jsx jsx */
import { Theme, jsx } from '@emotion/react';
import { Interpolation } from '@emotion/serialize';
import React, { ReactNode } from 'react';
import { Nav, Tab } from 'react-bootstrap';
import { useRecoilState } from 'recoil';

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

import { selectedUnitSkillState } from '../../state/unit/selectedUnitSkillState';
import { unitSkillTabState } from '../../state/ui/unitSkillTabState';

import './SkillNavTab.css';

export const SkillTabType = {
  Active1: 'active1',
  Active2: 'active2',
  Passive1: 'passive1',
  Passive2: 'passive2',
  Passive3: 'passive3'
} as const;
export type SkillTabType = typeof SkillTabType[keyof typeof SkillTabType]

const SkillNavItem: React.FC<{ eventKey: SkillTabType, disabled: boolean, children: ReactNode }> = ({ eventKey, disabled, children }) => {
  const className = eventKey.startsWith('active') ? 'active-skill' : 'passive-skill';

  return (
    <Nav.Item>
      <Nav.Link className={className} eventKey={eventKey} disabled={disabled}>
        <span
          css={{
            display: 'inline-block',
            '@media (max-width: 480px)': {
              width: 32
            },
            '@media (min-width: 480px)': {
              width: 50
            }
          }}
        >
          {children}
        </span>
      </Nav.Link>
    </Nav.Item>
  );
};

const UnitSkillList: React.FC<{ className?: string, css?: Interpolation<Theme> }> = (props) => {
  const [activeTab, setActiveTab] = useRecoilState(unitSkillTabState);
  const [unit, setUnit] = useRecoilState(selectedUnitSkillState);

  const enableActives  = !!unit;
  const enablePassive1 = unit && unit.passive1Skill;
  const enablePassive2 = unit && unit.passive2Skill;
  const enablePassive3 = unit && unit.passive3Skill;

  return (
    <div {...props}>
      <Tab.Container
        id="unit-skill-viewer"
        activeKey={activeTab}
        onSelect={eventKey => { setActiveTab(eventKey ?? undefined); }}
      >
        <Nav variant="tabs" className={`skill ${activeTab ? activeTab.startsWith('active') ? 'active-skill' : 'passive-skill' : ''}`}>
          <SkillNavItem eventKey="active1" disabled={!enableActives}>
            {enableActives ? (<ActiveSkillIcon number={1} />) : (<DisableActiveSkillIcon />)}
          </SkillNavItem>
          <SkillNavItem eventKey="active2" disabled={!enableActives}>
            {enableActives ? (<ActiveSkillIcon number={2} />) : (<DisableActiveSkillIcon />)}
          </SkillNavItem>
          <SkillNavItem eventKey="passive1" disabled={!enablePassive1}>
            {enablePassive1 ? (<PassiveSkillIcon number={1} />) : (<DisablePassiveSkillIcon />)}
          </SkillNavItem>
          <SkillNavItem eventKey="passive2" disabled={!enablePassive2}>
            {enablePassive2 ? (<PassiveSkillIcon number={2} />) : (<DisablePassiveSkillIcon />)}
          </SkillNavItem>
          <SkillNavItem eventKey="passive3" disabled={!enablePassive3}>
            {enablePassive3 ? (<PassiveSkillIcon number={3} />) : (<DisablePassiveSkillIcon />)}
          </SkillNavItem>
        </Nav>
        <Tab.Content>
          <Active1SkillPane unit={unit} onSkillLvChange={lv => { setUnit(unit => unit?.changeActive1SkillLv(lv)); }} />
          <Active2SkillPane unit={unit} onSkillLvChange={lv => { setUnit(unit => unit?.changeActive2SkillLv(lv)); }} />
          <Passive1SkillPane unit={unit} onSkillLvChange={lv => { setUnit(unit => unit?.changePassive1SkillLv(lv)); }}  />
          <Passive2SkillPane unit={unit} onSkillLvChange={lv => { setUnit(unit => unit?.changePassive2SkillLv(lv)); }}  />
          <Passive3SkillPane unit={unit} onSkillLvChange={lv => { setUnit(unit => unit?.changePassive3SkillLv(lv)); }}  />
        </Tab.Content>
      </Tab.Container>
    </div>
  );
};

export default UnitSkillList;
