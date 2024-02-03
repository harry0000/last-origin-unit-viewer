/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { ButtonGroup, ToggleButton } from 'react-bootstrap';

import { EquipmentSlotRank } from '../../../state/equipment/UnitEquipmentState';
import { useEquipmentRankSelector } from '../../../state/equipment/UnitEquipmentHook';

import './EquipmentRankToggleButton.css';

type EquipmentRankToggleButtonProps =
  { slot: 'chip1', rank: EquipmentSlotRank<'chip1'> } |
  { slot: 'chip2', rank: EquipmentSlotRank<'chip2'> } |
  { slot: 'os',    rank: EquipmentSlotRank<'os'> } |
  { slot: 'gear',  rank: EquipmentSlotRank<'gear'> }

const EquipmentRankToggleButton: React.FC<EquipmentRankToggleButtonProps> = ({ slot, rank }) => {
  const { t } = useTranslation();
  const [selected, select] = useEquipmentRankSelector(slot, rank);

  return (
    <ButtonGroup toggle>
      <ToggleButton
        type='checkbox'
        variant="equipment-rank"
        className={rank}
        value={1}
        checked={selected}
        onChange={select}
      >
        {t(`equipment.rank.${rank}`)}
      </ToggleButton>
    </ButtonGroup>
  );
};

export default EquipmentRankToggleButton;
