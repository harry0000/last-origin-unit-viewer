/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { MouseEventHandler, ReactNode } from 'react';
import { useRecoilValue } from 'recoil';
import { useTranslation } from 'react-i18next';

import { Dropdown, Image } from 'react-bootstrap';
import EquipmentItemView from './EquipmentItemView';
import EquipmentPlaceholder from './EquipmentPlaceholder';
import SlotUnavailableOverlay from '../SlotUnavailableOverlay';

import { Chip, EquipmentId, EquipmentType, Gear, Os } from '../../../domain/EquipmentData';
import { ChipEquipment, GearEquipment, OsEquipment } from '../../../domain/status/UnitEquipment';
import { UnitBasicInfo } from '../../../domain/UnitBasicInfo';

import { EquipmentSlot, useEquipmentAvailable, useUnitEquipment } from '../../../state/equipment/unitEquipmentState';
import { selectedUnitBasicInfoState } from '../../../state/selector/unitSelectorState';
import { useAvailableEquipment } from '../../../state/equipment/availableEquipment';

import { ifNonNullable } from '../../../util/react';

import './EquipmentSelector.css';

type SlotEquipment<S extends EquipmentSlot> =
  S extends 'chip1' | 'chip2' ? Chip :
  S extends 'os' ? Os :
  S extends 'gear' ? Gear :
    never

type SlotEquipmentType<S extends EquipmentSlot> =
  S extends 'chip1' | 'chip2' ? typeof EquipmentType.Chip :
  S extends 'os' ? typeof EquipmentType.Os :
  S extends 'gear' ? typeof EquipmentType.Gear :
    never

type Props<S extends EquipmentSlot> = {
  unit: UnitBasicInfo,
  id: string,
  slot: S,
  type: SlotEquipmentType<S>,
  value?:
    S extends 'chip1' | 'chip2' ? ChipEquipment :
    S extends 'os' ? OsEquipment :
    S extends 'gear' ? GearEquipment :
      never,
  items: ReadonlyArray<SlotEquipment<S>>,
  onSelect: (equipment: SlotEquipment<S> | undefined) => void
}

const EquipmentItem: React.FC<{
  eventKey?: EquipmentId,
  active: boolean,
  label: string,
  src: string
}> = ({ eventKey, active, label, src, ...others }) => {
  return (
    <Dropdown.Item
      {...others}
      className="equipment"
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

const RemoveEquipmentItem: React.FC<{
  active: boolean,
  type: SlotEquipmentType<EquipmentSlot>
}> = ({ active, type, ...others }) => {
  const { t } = useTranslation();

  return (
    <EquipmentItem
      {...others}
      active={active}
      label={t('status.remove_equipment')}
      src={`${process.env.PUBLIC_URL}/icon/placeholder_${type}.webp`}
    />
  );
};

const EquipmentSelectorMenu = <T extends EquipmentSlot>(
  { type, value, items, ...others }: Pick<Props<T>, 'type' | 'value' | 'items'>
): ReturnType<React.FC<Pick<Props<T>, 'type' | 'value' | 'items'>>> => {
  const { t } = useTranslation();

  return (
    <Dropdown.Menu {...others} className="equipment">
      <div className="equipment-menu-grid">
        <RemoveEquipmentItem type={type} active={!value?.equipped.id} />
        {items.map(item => (
          <EquipmentItem
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
};

const EquipmentSlotUnavailableOverlay: React.FC<{ unit: UnitBasicInfo, slot: EquipmentSlot }> = ({ unit, slot }) => {
  const [available, availableLv] = useEquipmentAvailable(unit, slot);
  return (<SlotUnavailableOverlay show={!available} availableLv={availableLv} />);
};

const EquipmentToggle = React.forwardRef<
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

const EquipmentDropdown = <T extends EquipmentSlot>(
  { id, unit, slot, type, value, onSelect, items }: Props<T>
): ReturnType<React.FC<Props<T>>> => {
  return (
    <Dropdown
      className="slot equipment"
      onSelect={(eventKey) => {
        if (eventKey) {
          const item = items.find((item: SlotEquipment<T>) => item.id === eventKey);
          item && onSelect(item);
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
            <EquipmentPlaceholder type={type} />}
          <EquipmentSlotUnavailableOverlay unit={unit} slot={slot} />
        </span>
      </Dropdown.Toggle>
      <EquipmentSelectorMenu type={type} value={value} items={items} />
    </Dropdown>
  );
};

const Chip1EquipmentDropdown: React.FC<{ unit: UnitBasicInfo }> = ({ unit }) => {
  const items = useAvailableEquipment(unit, 'chip1');
  const [type, equipment, equip] = useUnitEquipment(unit, 'chip1');
  return (
    <EquipmentDropdown
      id="chip1-equipment-dropdown"
      unit={unit}
      slot="chip1"
      type={type}
      value={equipment}
      onSelect={equip}
      items={items}
    />
  );
};

const Chip2EquipmentDropdown: React.FC<{ unit: UnitBasicInfo }> = ({ unit }) => {
  const items = useAvailableEquipment(unit, 'chip2');
  const [type, equipment, equip] = useUnitEquipment(unit, 'chip2');
  return (
    <EquipmentDropdown
      id="chip2-equipment-dropdown"
      unit={unit}
      slot="chip2"
      type={type}
      value={equipment}
      onSelect={equip}
      items={items}
    />
  );
};

const OsEquipmentDropdown: React.FC<{ unit: UnitBasicInfo }> = ({ unit }) => {
  const items = useAvailableEquipment(unit, 'os');
  const [type, equipment, equip] = useUnitEquipment(unit, 'os');
  return (
    <EquipmentDropdown
      id="os-equipment-dropdown"
      unit={unit}
      slot="os"
      type={type}
      value={equipment}
      onSelect={equip}
      items={items}
    />
  );
};

const GearEquipmentDropdown: React.FC<{ unit: UnitBasicInfo }> = ({ unit }) => {
  const items = useAvailableEquipment(unit, 'gear');
  const [type, equipment, equip] = useUnitEquipment(unit, 'gear');
  return (
    <EquipmentDropdown
      id="gear-equipment-dropdown"
      unit={unit}
      slot="gear"
      type={type}
      value={equipment}
      onSelect={equip}
      items={items}
    />
  );
};

const EquipmentSelector: React.FC<{ slot: EquipmentSlot }> = ({ slot }) => {
  const selected = useRecoilValue(selectedUnitBasicInfoState);

  return ifNonNullable(
    selected,
    unit => {
      switch (slot) {
      case 'chip1': return (<Chip1EquipmentDropdown unit={unit} />);
      case 'chip2': return (<Chip2EquipmentDropdown unit={unit} />);
      case 'os':    return (<OsEquipmentDropdown unit={unit} />);
      case 'gear':  return (<GearEquipmentDropdown unit={unit} />);
      }
    }
  );
};

export default EquipmentSelector;
