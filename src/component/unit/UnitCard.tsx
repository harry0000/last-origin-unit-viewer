/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';

import { Image, OverlayTrigger, Tooltip } from 'react-bootstrap';
import UnitRankIcon from '../common/UnitRankIcon';

import type { UnitBasicInfo, UnitRole } from '../../domain/UnitBasicInfo';
import { UnitRank } from '../../domain/UnitBasicInfo';

import { useUnit } from '../../state/selector/UnitSelectorHook';
import { useUnitDrag } from '../../state/squad/SquadHook';

import './UnitCard.css';

const Badge: React.FC<{ rank: UnitRank, role: UnitRole }> = React.memo(({ rank, role }) => {
  const isRankSS = rank === UnitRank.SS;
  const [height, width] = isRankSS ? [36, 40] : [32, 32];

  return (
    <UnitRankIcon
      className={isRankSS ? 'unit-badge ss' : 'unit-badge'}
      height={height}
      width={width}
      rank={rank}
      role={role}
    />
  );
});

const UnitCard: React.FC<{ unit: UnitBasicInfo }> = React.memo(({ unit }) => {
  const [unitName, selected, selectUnit] = useUnit(unit);
  const dragRef = useUnitDrag(unit);

  return (
    <OverlayTrigger
      placement='auto'
      overlay={<Tooltip id='tooltip-unit-number-and-name'>{unitName}</Tooltip>}
    >
      <div
        className={selected ? 'unit-card selected' : 'unit-card'}
        onClick={() => selectUnit()}
        ref={dragRef}
      >
        <Image
          rounded
          loading="lazy"
          draggable="false"
          height={80}
          width={80}
          alt={unitName}
          src={`${process.env.PUBLIC_URL}/unit_icon/${unit.no}.webp`}
        />
        <Badge rank={unit.rank} role={unit.role} />
      </div>
    </OverlayTrigger>
  );
});

export default UnitCard;
