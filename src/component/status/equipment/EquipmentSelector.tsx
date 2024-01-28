/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { MouseEventHandler, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

import { Badge, Dropdown, Image } from 'react-bootstrap';
import EquipmentItemView from './EquipmentItemView';
import EquipmentPlaceholder from './EquipmentPlaceholder';
import EquipmentRankToggleButton from './EquipmentRankToggleButton';
import RoundedToggleButton from '../../common/RoundedToggleButton';
import SlotUnavailableOverlay from '../SlotUnavailableOverlay';

import {
  Chip,
  ChipEquipmentRanks,
  EquipmentEnhancementLevel,
  EquipmentId,
  EquipmentType,
  Gear,
  GearEquipmentRanks,
  Os,
  OsEquipmentRanks
} from '../../../domain/equipment/EquipmentData';
import { ChipEquipment, GearEquipment, OsEquipment } from '../../../domain/equipment/UnitEquipment';
import { UnitBasicInfo, UnitNumber } from '../../../domain/UnitBasicInfo';

import { EquipmentSlot } from '../../../state/equipment/UnitEquipmentState';
import {
  useEquipmentAvailable,
  useEquipmentEffects,
  useEquipmentEffectsAsSkill,
  useEquipmentEnhanceLvSelector,
  useEquipmentRank,
  useEquipmentStatusEffects,
  useUnitEquipment
} from '../../../state/equipment/UnitEquipmentHook';
import {
  TranslatedEquipmentEffect,
  TranslatedEquipmentEffectAsSkill,
  isTranslatedEquipmentEffectAsSkillDetails
} from '../../../state/equipment/EquipmentEffectsTranslator';
import { useAvailableEquipment } from '../../../state/equipment/availableEquipment';
import { useSelectedUnit } from '../../../state/selector/UnitSelectorHook';

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

type CurrentEquipment<S extends EquipmentSlot> =
  S extends 'chip1' | 'chip2' ? ChipEquipment :
  S extends 'os' ? OsEquipment :
  S extends 'gear' ? GearEquipment :
    never

type Props<S extends EquipmentSlot> = {
  unit: UnitBasicInfo,
  id: string,
  slot: S,
  type: SlotEquipmentType<S>,
  value?: CurrentEquipment<S>,
  items: ReadonlyArray<SlotEquipment<S>>,
  onSelect: (equipment: SlotEquipment<S> | undefined) => void
}

const EffectTypeHeader: React.FC<{ children: string }> = ({ children }) => {
  return (<div className="header">{children}</div>);
};

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

const EquipmentRankSelector: React.FC<{ slot: EquipmentSlot }> = ({ slot }) => {
  const rankToggleButtons = () => {
    switch (slot) {
    case 'chip1':
    case 'chip2':
      return ChipEquipmentRanks.map(rank => (
        <EquipmentRankToggleButton key={rank} slot={slot} rank={rank} />
      ));
    case 'os':
      return OsEquipmentRanks.map(rank => (
        <EquipmentRankToggleButton key={rank} slot={slot} rank={rank} />
      ));
    case 'gear':
      return GearEquipmentRanks.map(rank => (
        <EquipmentRankToggleButton key={rank} slot={slot} rank={rank} />
      ));
    }
  };

  return (
    <div className="equipment-rank">
      {rankToggleButtons()}
    </div>
  );
};

const EquipmentStatusEffects: React.FC<{ slot: EquipmentSlot, equipment: EquipmentId }> = ({ slot, equipment }) => {
  const { t } = useTranslation();
  const effects = useEquipmentStatusEffects(slot, equipment);

  return (
    <div className="status-effects">
      <EffectTypeHeader>{t('status.equipment_status_effect')}</EffectTypeHeader>
      <div className="details">{effects}</div>
    </div>
  );
};

const EffectDetailList: React.FC<{
  effects: ReadonlyArray<TranslatedEquipmentEffect> | ReadonlyArray<TranslatedEquipmentEffectAsSkill>
}> = ({ effects }) => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      {effects.map(e => {
        const { condition, details } = e;
        return (
          <div key={JSON.stringify(e)}>
            {ifNonNullable(condition, cond => (<div className="condition">{cond}</div>))}
            {
              isTranslatedEquipmentEffectAsSkillDetails(details) ?
                (<React.Fragment>
                  {ifNonNullable(
                    'self' in details ? details.self : undefined,
                    self => (
                      <React.Fragment>
                        <Badge variant="light">{t('effect:effect.target.self')}</Badge>
                        <EffectDetailRows details={self} />
                      </React.Fragment>
                    )
                  )}
                  {ifNonNullable(
                    'target' in details ? details.target : undefined,
                    target => (
                      <React.Fragment>
                        <Badge variant="light">{t('effect:effect.target.target')}</Badge>
                        <EffectDetailRows details={target} />
                      </React.Fragment>
                    )
                  )}
                </React.Fragment>) :
                (<EffectDetailRows details={details} />)
            }
          </div>
        );
      })}
    </React.Fragment>
  );
};

const EffectDetailRows: React.FC<{
  details: TranslatedEquipmentEffect['details']
}> = ({ details }) => {
  return (
    <React.Fragment>
      {details.map(({ detail, term }) => (
        <div key={detail} className="detail">
          <div>{detail}</div>
          {ifNonNullable(term, v => (
            <div className="term"><span css={{ color: '#aaa', fontSize: '0.9em' }}>{v}</span></div>
          ))}
        </div>
      ))}
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
        <EffectTypeHeader>{t('status.equipment_effect')}</EffectTypeHeader>
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
        <EffectTypeHeader>{t('status.equipment_effect_as_skill')}</EffectTypeHeader>
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
}> = ({ slot, eventKey, active, label, src, ...rest }) => {
  return (
    <Dropdown.Item
      {...rest}
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
}> = ({ active, type, ...rest }) => {
  const { t } = useTranslation();
  const label = t('status.remove_equipment');

  return (
    <Dropdown.Item
      {...rest}
      className="equipment remove"
      active={active}
    >
      <div className="icon">
        <Image
          draggable="false"
          height={48}
          width={48}
          alt={label}
          src={`${import.meta.env.BASE_URL}icon/placeholder_${type}.webp`}
        />
      </div>
      <div className="details">{label}</div>
    </Dropdown.Item>
  );
};

const EquipmentSelectorMenu = <T extends EquipmentSlot>(
  { unit, slot, type, value, items, ...rest }: Omit<Props<T>, 'id' | 'onSelect'>
): ReturnType<React.FC<Omit<Props<T>, 'id' | 'onSelect'>>> => {
  const { t } = useTranslation();
  const rank = useEquipmentRank(slot);

  return (
    <Dropdown.Menu {...rest} className="equipment">
      <EquipmentEnhancementLvSelector slot={slot} unit={unit.no} />
      <EquipmentRankSelector slot={slot} />
      <div className="equipment-list">
        <RemoveEquipmentItem type={type} active={!value?.id} />
        {items.map(item => (
          <EquipmentItem
            key={item.id}
            slot={slot}
            eventKey={item.id}
            active={item.id === value?.id && rank === value?.rank}
            label={t(`equipment:${item.id}`)}
            src={`${import.meta.env.BASE_URL}equip_icon/${item.type}_${item.id}_${rank}.webp`}
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
