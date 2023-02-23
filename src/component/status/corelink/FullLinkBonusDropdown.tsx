/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { MouseEventHandler, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

import { Dropdown } from 'react-bootstrap';

import { UnitBasicInfo } from '../../../domain/UnitBasicInfo';
import { FullLinkBonus } from '../../../domain/UnitCoreLinkBonusData';
import { calcMicroValue, calcMilliPercentageValue } from '../../../domain/ValueUnit';

import { useAvailableFullLinkBonus, useFullLinkBonus } from '../../../state/corelink/UnitCoreLinkHook';

import { ifTruthy } from '../../../util/react';

import '../dropdown.css';

const FullLinkBonusLabel: React.FC<{ bonus: FullLinkBonus | undefined }> = ({ bonus }) => {
  const { t } = useTranslation();

  let label: string;
  if (!bonus) {
    label = '\u00A0';
  } else if ('sortie_cost' in bonus) {
    label = t('form.full_link_bonus.sortie_cost', { value: calcMilliPercentageValue(bonus.sortie_cost) });
  } else if ('damage_multiplier' in bonus) {
    label = t('form.full_link_bonus.damage_multiplier', { value: calcMilliPercentageValue(bonus.damage_multiplier) });
  } else if ('buff_debuff_lv_up' in bonus) {
    label = t('form.full_link_bonus.buff_debuff_lv_up', { value: bonus.buff_debuff_lv_up.value });
  } else if ('hp_up' in bonus) {
    label = t('form.full_link_bonus.hp_up', { value: calcMilliPercentageValue(bonus.hp_up) });
  } else if ('def_up' in bonus) {
    label = t('form.full_link_bonus.def_up', { value: calcMilliPercentageValue(bonus.def_up) });
  } else if ('acc_up' in bonus) {
    label = t('form.full_link_bonus.acc_up', { value: calcMilliPercentageValue(bonus.acc_up) });
  } else if ('eva_up' in bonus) {
    label = t('form.full_link_bonus.eva_up', { value: calcMilliPercentageValue(bonus.eva_up) });
  } else if ('cri_up' in bonus) {
    label = t('form.full_link_bonus.cri_up', { value: calcMilliPercentageValue(bonus.cri_up) });
  } else if ('spd_up' in bonus) {
    label = t('form.full_link_bonus.spd_up', { value: calcMicroValue(bonus.spd_up) });
  } else {
    label = t('form.full_link_bonus.range_up', { value: bonus.range_up.value });
  }

  return (<span>{label}</span>);
};

const UnselectBonusItem: React.FC<{ active: boolean }> = ({ active }) => {
  return (<Dropdown.Item active={active}>&nbsp;</Dropdown.Item>);
};

const FullLinkBonusItem: React.FC<{
  bonus: FullLinkBonus,
  eventKey: number,
  active: boolean
}> = ({ bonus, eventKey, active }) => {
  return (
    <Dropdown.Item eventKey={eventKey} active={active}>
      <FullLinkBonusLabel bonus={bonus}/>
    </Dropdown.Item>
  );
};

const FullLinkBonusToggle = React.forwardRef<
  HTMLAnchorElement,
  {
    id: string,
    onClick: MouseEventHandler<HTMLAnchorElement>,
    available: boolean,
    children: ReactNode
  }
>(({ id, onClick, available, children }, ref) => (
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
    {ifTruthy(!available, (<span className="unavailable" />))}
  </a>
));

const FullLinkBonusDropdown: React.FC<{ unit: UnitBasicInfo }> = ({ unit }) => {
  const items = useAvailableFullLinkBonus(unit);
  const [selectedBonus, selectBonus, available] = useFullLinkBonus(unit);

  return (
    <Dropdown
      className="unit-state"
      onSelect={eventKey => {
        selectBonus(eventKey ? items[+eventKey] : undefined);
      }}
    >
      <Dropdown.Toggle as={FullLinkBonusToggle} id="full-link-bonus-dropdown" available={available}>
        <FullLinkBonusLabel bonus={selectedBonus}/>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <UnselectBonusItem active={!selectedBonus}/>
        {items.map((bonus, i) => (
          <FullLinkBonusItem
            key={JSON.stringify(bonus)}
            bonus={bonus}
            eventKey={i}
            active={bonus === selectedBonus}
          />
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default FullLinkBonusDropdown;
