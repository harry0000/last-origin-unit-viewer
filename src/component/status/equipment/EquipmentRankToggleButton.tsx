/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { ButtonGroup, ToggleButton } from 'react-bootstrap';
import { EquipmentRank } from '../../../domain/equipment/EquipmentData';
import { useOsEquipmentRankSelector } from '../../../state/equipment/unitEquipmentState';

import './EquipmentRankToggleButton.css';

// TODO: now only support OS equipment rank
const EquipmentRankToggleButton: React.FC<{
  rank: EquipmentRank
}> = ({ rank }) => {
  const { t } = useTranslation();
  const [selected, select] = useOsEquipmentRankSelector(rank);

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
