/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { EquipmentSlotRank } from '../../../state/equipment/UnitEquipmentState';
import { useEquipmentRankSelector } from '../../../state/equipment/UnitEquipmentHook';

import './EquipmentRankToggleButton.css';

type EquipmentRankToggleButtonProps =
  { slot: 'chip1', rank: EquipmentSlotRank<'chip1'> } |
  { slot: 'chip2', rank: EquipmentSlotRank<'chip2'> } |
  { slot: 'os',    rank: EquipmentSlotRank<'os'> } |
  { slot: 'gear',  rank: EquipmentSlotRank<'gear'> }

/**
 * @see {@link https://github.com/react-bootstrap/react-bootstrap/issues/6719}
 */
const EquipmentRankToggleButton: React.FC<EquipmentRankToggleButtonProps> = ({ slot, rank }) => {
  const { t } = useTranslation();
  const [selected, select] = useEquipmentRankSelector(slot, rank);
  const id = `equipment-rank-${slot}-${rank}`;

  return (
    <div role="group" className="btn-group">
      <input
        id={id}
        type="checkbox"
        className="btn-check"
        checked={selected}
        onChange={select}
        autoComplete="off"
      />
      <label
        htmlFor={id}
        className={`btn btn-equipment-rank ${rank}`}
      >
        {t(`equipment.rank.${rank}`)}
      </label>
    </div>
  );
};

export default EquipmentRankToggleButton;
