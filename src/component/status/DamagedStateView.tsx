/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { MouseEventHandler, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

import { DamagedState } from '../../domain/UnitDamagedState';
import { UnitBasicInfo } from '../../domain/UnitBasicInfo';

import { Dropdown } from 'react-bootstrap';
import { DropdownPlaceholder } from './DropdownPlaceholder';
import UnitStatusHeading from './UnitStatusHeading';

import { useSelectedUnit } from '../../state/selector/UnitSelectorHook';
import { useUnitDamagedState } from '../../state/status/UnitDamagedHook';

import './dropdown.css';

const damagedStateItems = Object.values(DamagedState);
const damagedStateSet = new Set<string>(damagedStateItems);

function isDamagedState(arg: string | null): arg is DamagedState {
  return !!arg && damagedStateSet.has(arg);
}

const DamagedStateLabel: React.FC<{ state: DamagedState, }> = React.memo(({ state }) => {
  const { t } = useTranslation();

  return (<span>{t(`form.damaged_state.${state}`)}</span>);
});

const DamagedStateItem: React.FC<{
  state: DamagedState,
  active: boolean
}> = ({ state, active }) => {
  return (
    <Dropdown.Item eventKey={state} active={active}>
      <DamagedStateLabel state={state} />
    </Dropdown.Item>
  );
};

const DamagedStateToggle = React.forwardRef<
  HTMLAnchorElement,
  {
    id: string,
    onClick: MouseEventHandler<HTMLAnchorElement>,
    children: ReactNode
  }
>(({ id, onClick, children }, ref) => (
  <a
    href=""
    ref={ref}
    id={id}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
    <span className="toggle" />
  </a>
));

const DamagedStateDropdown: React.FC<{ unit: UnitBasicInfo }> = ({ unit }) => {
  const [selectedDamagedState, setDamagedState] = useUnitDamagedState(unit);

  return (
    <Dropdown
      className="unit-state"
      onSelect={eventKey => {
        isDamagedState(eventKey) && setDamagedState(eventKey);
      }}
    >
      <Dropdown.Toggle as={DamagedStateToggle} id="damaged-state-dropdown">
        <DamagedStateLabel state={selectedDamagedState} />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {damagedStateItems.map(damagedState => (
          <DamagedStateItem
            key={damagedState}
            state={damagedState}
            active={damagedState === selectedDamagedState}
          />
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

const DamagedStateSelector: React.FC = () => {
  const selected = useSelectedUnit();

  return selected ?
    (<DamagedStateDropdown unit={selected} />) :
    (<DropdownPlaceholder />);
};

const DamagedStateView: React.FC = () => {
  return (
    <div>
      <UnitStatusHeading
        iconSrc={`${import.meta.env.BASE_URL}icon/damaged.webp`}
        headingKey="heading.damaged_state"
      />
      <DamagedStateSelector />
    </div>
  );
};

export default DamagedStateView;
