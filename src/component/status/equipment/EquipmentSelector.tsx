/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { MouseEventHandler, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

import { Badge, Dropdown, Image } from 'react-bootstrap';
import EquipmentItemView from './EquipmentItemView';
import EquipmentPlaceholder from './EquipmentPlaceholder';
import RoundedToggleButton from '../../common/RoundedToggleButton';
import SlotUnavailableOverlay from '../SlotUnavailableOverlay';

import { Chip, EquipmentEnhancementLevel, EquipmentId, EquipmentType, Gear, Os } from '../../../domain/equipment/EquipmentData';
import { ChipEquipment, GearEquipment, OsEquipment } from '../../../domain/equipment/UnitEquipment';
import { UnitBasicInfo, UnitNumber } from '../../../domain/UnitBasicInfo';

import {
  EquipmentSlot,
  useEquipmentAvailable,
  useEquipmentEffects,
  useEquipmentEffectsAsSkill,
  useEquipmentEnhanceLvSelector,
  useEquipmentStatusEffects,
  useUnitEquipment
} from '../../../state/equipment/unitEquipmentState';
import { TranslatedEquipmentEffect } from '../../../state/equipment/EquipmentEffectsTranslator';
import { useAvailableEquipment } from '../../../state/equipment/availableEquipment';
import { useSelectedUnit } from '../../../state/selector/unitSelectorState';

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

const EquipmentEnhancementLvSelector: React.FC<{ slot: EquipmentSlot, unit: UnitNumber }> = ({ slot, unit }) => {
  const SelectorButton = ({ enhanceLv }: { enhanceLv: EquipmentEnhancementLevel }) => {
    const [selected, select] = useEquipmentEnhanceLvSelector(slot, unit, enhanceLv);

    return (<RoundedToggleButton selected={selected} onChange={select}>+&nbsp;{enhanceLv}</RoundedToggleButton>);
  };

  return (
    <div className="equipment-enhancement">
      {([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as const).map(n => (
        <SelectorButton key={n} enhanceLv={n} />
      ))}
    </div>
  );
};

const EquipmentStatusEffects: React.FC<{ slot: EquipmentSlot, equipment: EquipmentId }> = ({ slot, equipment }) => {
  const { t } = useTranslation();
  const effects = useEquipmentStatusEffects(slot, equipment);

  return (
    <div className="status-effects">
      <div><Badge pill variant="light">{t('status.equipment_status_effect')}</Badge></div>
      <div className="details">{effects}</div>
    </div>
  );
};

const EffectDetailList: React.FC<{ effects: ReadonlyArray<TranslatedEquipmentEffect> }> = ({ effects }) => {
  return (
    <React.Fragment>
      {effects.map(e => {
        const { condition, details } = e;
        return (
          <div key={JSON.stringify(e)}>
            {ifNonNullable(condition, cond => (<div className="condition">{cond}</div>))}
            {details.map(({ detail, term }) => {
              return (
                <div key={detail} className="detail">
                  <div>{detail}</div>
                  {ifNonNullable(term, v => (
                    <div className="term"><span css={{ color: '#aaa', fontSize: '0.9em' }}>{v}</span></div>
                  ))}
                </div>
              );
            })}
          </div>
        );
      })}
    </React.Fragment>
  );
};

const EquipmentEffects: React.FC<{ slot: EquipmentSlot, equipment: EquipmentId }> = ({ slot, equipment }) => {
  const { t } = useTranslation();
  const effects = useEquipmentEffects(slot, equipment);

  return ifNonNullable(
    effects,
    e => (
      <div className="effects">
        <div><Badge pill variant="light">{t('status.equipment_effect')}</Badge></div>
        <EffectDetailList effects={e} />
      </div>
    )
  );
};

const EquipmentEffectsAsSkill: React.FC<{ slot: EquipmentSlot, equipment: EquipmentId }> = ({ slot, equipment }) => {
  const { t } = useTranslation();
  const effects = useEquipmentEffectsAsSkill(slot, equipment);

  return ifNonNullable(
    effects,
    e => (
      <div className="effects">
        <div><Badge pill variant="light">{t('status.equipment_effect_as_skill')}</Badge></div>
        <EffectDetailList effects={e} />
      </div>
    )
  );
};

const EquipmentItem: React.FC<{
  slot: EquipmentSlot,
  eventKey: EquipmentId,
  active: boolean,
  label: string,
  src: string
}> = ({ slot, eventKey, active, label, src, ...others }) => {
  return (
    <Dropdown.Item
      {...others}
      className="equipment"
      eventKey={eventKey}
      active={active}
    >
      <div className="icon">
        <Image
          draggable="false"
          height={48}
          width={48}
          alt={label}
          src={src}
        />
        <span className="label">{label}</span>
      </div>
      <div className="details">
        <EquipmentStatusEffects slot={slot} equipment={eventKey} />
        <EquipmentEffects slot={slot} equipment={eventKey} />
        <EquipmentEffectsAsSkill slot={slot} equipment={eventKey} />
      </div>
    </Dropdown.Item>
  );
};

const RemoveEquipmentItem: React.FC<{
  active: boolean,
  type: SlotEquipmentType<EquipmentSlot>
}> = ({ active, type, ...others }) => {
  const { t } = useTranslation();
  const label = t('status.remove_equipment');

  return (
    <Dropdown.Item
      {...others}
      className="equipment remove"
      active={active}
    >
      <div className="icon">
        <Image
          draggable="false"
          height={48}
          width={48}
          alt={label}
          src={`${process.env.PUBLIC_URL}/icon/placeholder_${type}.webp`}
        />
      </div>
      <div className="details">{label}</div>
    </Dropdown.Item>
  );
};

const EquipmentSelectorMenu = <T extends EquipmentSlot>(
  { unit, slot, type, value, items, ...others }: Omit<Props<T>, 'id' | 'onSelect'>
): ReturnType<React.FC<Omit<Props<T>, 'id' | 'onSelect'>>> => {
  const { t } = useTranslation();

  return (
    <Dropdown.Menu {...others} className="equipment">
      <EquipmentEnhancementLvSelector slot={slot} unit={unit.no} />
      <div className="equipment-list">
        <RemoveEquipmentItem type={type} active={!value?.id} />
        {items.map(item => (
          <EquipmentItem
            key={item.id}
            slot={slot}
            eventKey={item.id}
            active={item.id === value?.id}
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
              equipmentId={value.id}
              equipmentType={type}
              equipmentRank={value.rank}
              enhancementLv={value.enhanceLv}
            />) :
            <EquipmentPlaceholder type={type} />}
          <EquipmentSlotUnavailableOverlay unit={unit} slot={slot} />
        </span>
      </Dropdown.Toggle>
      <EquipmentSelectorMenu unit={unit} slot={slot} type={type} value={value} items={items} />
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
  const selected = useSelectedUnit();

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
