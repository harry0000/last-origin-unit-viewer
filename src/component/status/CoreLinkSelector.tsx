/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { MouseEventHandler, ReactNode } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useTranslation } from 'react-i18next';

import { Dropdown, Image } from 'react-bootstrap';
import CoreLinkPlaceholder from './CoreLinkPlaceholder';
import { CoreLinkSlot } from './UnitCoreLinkView';
import SlotUnavailableOverlay from './SlotUnavailableOverlay';

import CoreLinkUnitView from './CoreLinkUnitView';
import UnitCoreLink, { CoreLinkSlotAvailableLv, CoreLinkUnit } from '../../domain/UnitCoreLink';

import { coreLinkSlotAvailable, selectedUnitCoreLinkState } from '../../state/corelink/unitCoreLinkState';
import { availableCoreLinkUnit } from '../../state/corelink/availableCoreLinkUnit';

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

function useCoreLinkValue(slot: CoreLinkSlot): [
  linkedUnit: CoreLinkUnit | undefined,
  linkSlot: (unit: CoreLinkUnit | undefined) => void,
  available: boolean,
  availableLv: CoreLinkSlotAvailableLv
] {
  const [coreLink, setCoreLink] = useRecoilState(selectedUnitCoreLinkState);
  const available = useRecoilValue(coreLinkSlotAvailable(slot));
  const linkSlot = (() => {
    switch (slot) {
    case 'slot1':
      return (unit: CoreLinkUnit | undefined) => { setCoreLink(s => unit ? s?.linkSlot1(unit) : s?.unlinkSlot1()); };
    case 'slot2':
      return (unit: CoreLinkUnit | undefined) => { setCoreLink(s => unit ? s?.linkSlot2(unit) : s?.unlinkSlot2()); };
    case 'slot3':
      return (unit: CoreLinkUnit | undefined) => { setCoreLink(s => unit ? s?.linkSlot3(unit) : s?.unlinkSlot3()); };
    case 'slot4':
      return (unit: CoreLinkUnit | undefined) => { setCoreLink(s => unit ? s?.linkSlot4(unit) : s?.unlinkSlot4()); };
    case 'slot5':
      return (unit: CoreLinkUnit | undefined) => { setCoreLink(s => unit ? s?.linkSlot5(unit) : s?.unlinkSlot5()); };
    }
  })();

  switch (slot) {
  case 'slot1':
    return [coreLink?.slot1, linkSlot, available, UnitCoreLink.slot1AvailableLv];
  case 'slot2':
    return [coreLink?.slot2, linkSlot, available, UnitCoreLink.slot2AvailableLv];
  case 'slot3':
    return [coreLink?.slot3, linkSlot, available, UnitCoreLink.slot3AvailableLv];
  case 'slot4':
    return [coreLink?.slot4, linkSlot, available, UnitCoreLink.slot4AvailableLv];
  case 'slot5':
    return [coreLink?.slot5, linkSlot, available, UnitCoreLink.slot5AvailableLv];
  }
}

const CoreLinkSelector: React.FC<{ slot: CoreLinkSlot }> = ({ slot }) => {
  const items = useRecoilValue(availableCoreLinkUnit);
  const [linkedUnit, linkSlot, available, availableLv] = useCoreLinkValue(slot);

  const CoreLinkToggle =
      React.forwardRef<HTMLAnchorElement, {
        onClick: MouseEventHandler<HTMLAnchorElement>,
        id: string,
        children: ReactNode
      }>((
        { onClick, id, children },
        ref
      ) => (
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

export default CoreLinkSelector;
