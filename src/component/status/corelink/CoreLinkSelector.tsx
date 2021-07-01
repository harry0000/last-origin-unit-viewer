/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { MouseEventHandler, ReactNode } from 'react';
import { useRecoilValue } from 'recoil';
import { useTranslation } from 'react-i18next';

import { Dropdown, Image } from 'react-bootstrap';
import CoreLinkPlaceholder from './CoreLinkPlaceholder';
import SlotUnavailableOverlay from '../SlotUnavailableOverlay';

import CoreLinkUnitView from './CoreLinkUnitView';
import { CoreLinkUnit } from '../../../domain/UnitCoreLink';
import { UnitBasicInfo } from '../../../domain/UnitBasicInfo';

import { CoreLinkSlot, useAvailableCoreLinkUnit, useUnitCoreLink } from '../../../state/corelink/unitCoreLinkState';
import { selectedUnitBasicInfoState } from '../../../state/selector/unitSelectorState';

import { ifNonNullable } from '../../../util/react';

import './CoreLinkSelector.css';

const CoreLinkUnitItem: React.FC<{
  eventKey?: string,
  active: boolean,
  unit: CoreLinkUnit
}> = ({ eventKey, active, unit, ...others }) => {
  const { t } = useTranslation();

  return (
    <Dropdown.Item
      {...others}
      className="core-link"
      eventKey={eventKey}
      active={active}
    >
      {'unit' in unit ?
        (<Image
          className="unit"
          height={48}
          width={48}
          alt={t(`unit:name.${unit.unit}`)}
          src={`${process.env.PUBLIC_URL}/unit_icon/${unit.unit}.webp`}
        />) :
        (<span className="partial-fit-unit">
          <Image
            className="basic-info-icon"
            height={32}
            width={32}
            alt={`${t(`unit.rank.${unit.rank}`)} ${t(`unit.type.${unit.type}`)} ${t(`unit.role.${unit.role}`)}`}
            src={`${process.env.PUBLIC_URL}/icon/${unit.rank}_${unit.role}.webp`}
          />
          <span className="unit-type">
            {t(`unit.type.${unit.type}`)}
          </span>
        </span>)}
      <span className="label">+&nbsp;{unit.rate}&nbsp;%</span>
    </Dropdown.Item>
  );
};

const UnlinkItem: React.FC<{ active: boolean }> = ({  active }) => {
  const { t } = useTranslation();
  const label = t('status.unlink');

  return (
    <Dropdown.Item
      className="core-link"
      active={active}
    >
      <Image
        className="unit"
        height={48}
        width={48}
        alt={label}
        src={`${process.env.PUBLIC_URL}/icon/placeholder_core_link.webp`}
      />
      <span className="label">{label}</span>
    </Dropdown.Item>
  );
};

const CoreLinkSelectorMenu: React.FC<{
  value: CoreLinkUnit | undefined,
  items: ReadonlyArray<CoreLinkUnit>
}> = ({ value, items }) => {


  return (
    <Dropdown.Menu className="core-link">
      <div className="core-link-unit-list">
        <UnlinkItem active={!value} />
        {items.map((item, index) => (
          <CoreLinkUnitItem
            key={JSON.stringify(item)}
            eventKey={index + ''}
            active={item.rate === value?.rate}
            unit={item}
          />
        ))}
      </div>
    </Dropdown.Menu>
  );
};

const CoreLinkToggle = React.forwardRef<
  HTMLAnchorElement,
  {
    onClick: MouseEventHandler<HTMLAnchorElement>,
    id: string,
    children: ReactNode
  }
>(({ onClick, id, children }, ref) => (
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
  </a>
));

const CoreLinkDropdown: React.FC<{ unit: UnitBasicInfo, slot: CoreLinkSlot }> = ({ unit, slot }) => {
  const items = useAvailableCoreLinkUnit(unit);
  const [linkedUnit, linkSlot, available, availableLv] = useUnitCoreLink(unit, slot);

  return (
    <Dropdown
      className="slot core-link"
      onSelect={(eventKey) => {
        linkSlot(eventKey ? items[+eventKey] : undefined);
      }}
    >
      <Dropdown.Toggle as={CoreLinkToggle} id={`core-link-${slot}-dropdown`}>
        <span className="core-link-toggle-view">
          {linkedUnit ?
            (<CoreLinkUnitView linkedUnit={linkedUnit} />) :
            (<CoreLinkPlaceholder slot={slot} />)
          }
          <SlotUnavailableOverlay show={!available} availableLv={availableLv}/>
        </span>
      </Dropdown.Toggle>
      <CoreLinkSelectorMenu value={linkedUnit} items={items} />
    </Dropdown>
  );
};

const CoreLinkSelector: React.FC<{ slot: CoreLinkSlot }> = ({ slot }) => {
  const selected = useRecoilValue(selectedUnitBasicInfoState);

  return ifNonNullable(
    selected,
    unit => (<CoreLinkDropdown unit={unit} slot={slot} />)
  );
};

export default CoreLinkSelector;
