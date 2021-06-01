/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { MouseEventHandler, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

import { Dropdown, Image } from 'react-bootstrap';
import EquipmentItemView from './EquipmentItemView';
import EquipmentPlaceholder from './EquipmentPlaceholder';
import SlotUnavailableOverlay from './SlotUnavailableOverlay';

import {
  Chip,
  EquipmentData,
  EquipmentId,
  EquipmentType,
  Gear,
  Os
} from '../../domain/EquipmentData';
import { ChipEquipment, GearEquipment, OsEquipment } from '../../domain/status/UnitEquipment';
import { UnitLvValue } from '../../domain/status/UnitLv';

import './EquipmentSelector.css';

type Props<T extends EquipmentData> = {
  id: string,
  value?:
    T extends Chip ? ChipEquipment :
    T extends Os ? OsEquipment :
    T extends Gear ? GearEquipment :
      never,
  type:
    T extends Chip ? typeof EquipmentType.Chip :
    T extends Os ? typeof EquipmentType.Os :
    T extends Gear ? typeof EquipmentType.Gear :
      never,
  items: ReadonlyArray<T>,
  onSelect: (equipment: T | undefined) => void,
  available: boolean,
  availableLv: UnitLvValue
}

const EquipmentSelectorMenuItem: React.FC<{
  eventKey?: EquipmentId,
  active: boolean,
  label: string,
  src: string
}> = ({ eventKey, active, label, src, ...others }) => {
  return (
    <Dropdown.Item
      {...others}
      className="equipment-menu-item"
      eventKey={eventKey}
      active={active}
    >
      <Image
        height={48}
        width={48}
        alt={label}
        src={src}
      />
      <span className="label">{label}</span>
    </Dropdown.Item>
  );
};

function EquipmentSelectorMenu<T extends EquipmentData>(
  props: Omit<Props<T>, 'id' | 'onSelect' | 'available' | 'availableLv'>
): ReturnType<React.FC<Omit<Props<T>, 'id' | 'onSelect' | 'available' | 'availableLv'>>> {
  const { t } = useTranslation();
  const { value, type, items, ...others } = props;

  return (
    <Dropdown.Menu {...others} className="equipment-menu">
      <div className="equipment-menu-grid">
        <EquipmentSelectorMenuItem
          active={!value?.equipped.id}
          label={t('status.remove_equipment')}
          src={`${process.env.PUBLIC_URL}/icon/placeholder_${type}.webp`}
        />
        {items.map(item => (
          <EquipmentSelectorMenuItem
            key={item.id}
            eventKey={item.id}
            active={item.id === value?.equipped.id}
            label={t(`equipment:${item.id}`)}
            src={`${process.env.PUBLIC_URL}/equip_icon/${item.type}_${item.id}_ss.webp`}
          />
        ))}
      </div>
    </Dropdown.Menu>
  );
}

function EquipmentSelector<T extends EquipmentData>(props: Props<T>): ReturnType<React.FC<Props<T>>> {
  const { id, value, type, items, onSelect, available, availableLv } = props;

  const EquipmentToggle =
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
      className="slot equipment"
      onSelect={(eventKey) => {
        if (eventKey) {
          const item = items.find((item: T) => item.id === eventKey);
          if (item) {
            onSelect(item);
          }
        } else {
          onSelect(undefined);
        }
      }}
    >
      <Dropdown.Toggle as={EquipmentToggle} id={id}>
        <span className="equipment-toggle-view">
          {value ?
            (<EquipmentItemView
              equipmentId={value.equipped.id}
              equipmentType={type}
              equipmentRank={value.rank}
              enhancementLv={value.enhanceLv}
            />) :
            <EquipmentPlaceholder type={type}/>}
          <SlotUnavailableOverlay show={!available} availableLv={availableLv}/>
        </span>
      </Dropdown.Toggle>
      <EquipmentSelectorMenu value={value} type={type} items={items} />
    </Dropdown>
  );
}

export default EquipmentSelector;