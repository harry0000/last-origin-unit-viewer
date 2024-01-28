/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { Image } from 'react-bootstrap';
import UnitRankIcon from '../common/UnitRankIcon';

import { BioroidUnitNumber, UnitBasicInfo, UnitKind, UnitRank } from '../../domain/UnitBasicInfo';
import { DamagedState } from '../../domain/UnitDamagedState';
import { TenKeyPosition } from '../../domain/squad/Squad';

import { useAffectionBonus } from '../../state/status/UnitAffectionHook';
import { useIgnoreSquadUnitDrop, useSquadGrid, useSquadUnitDrag } from '../../state/squad/SquadHook';
import { useSquadUnit } from '../../state/selector/UnitSelectorHook';
import { useUnitDamagedState } from '../../state/status/UnitDamagedHook';

import { ifTruthy } from '../../util/react';

import './SquadGrid.css';

const DamagedOverlay: React.FC<{ unit: UnitBasicInfo }> = ({ unit }) => {
  const { t } = useTranslation();
  const [damagedState] = useUnitDamagedState(unit);

  switch (damagedState) {
  case DamagedState.NoDamaged:
    return null;
  case DamagedState.ModeratelyDamaged:
    return (
      <Image
        className="moderately-damaged-icon"
        draggable="false"
        height={24}
        width={24}
        alt={t('damaged_state.moderately_damaged')}
        src={`${import.meta.env.BASE_URL}icon/need_repair.webp`}
      />
    );
  case DamagedState.HeavilyDamaged:
    return (
      <div className="heavily-damaged-text">
        {t('damaged_state.heavily_damaged')}
      </div>
    );
  }
};

const AffectionOverlay: React.FC<{ unit: UnitBasicInfo }> = ({ unit }) => {
  const AffectionIcon = ({ unit }: { unit: BioroidUnitNumber }) => {
    const { t } = useTranslation();
    const [affection] = useAffectionBonus(unit);

    return (
      ifTruthy(
        affection,
        (<Image
          css={{
            position: 'absolute',
            left: 0,
            bottom: 0,
            filter: 'drop-shadow(-1px -1px 1px rgba(255, 204, 0, 0.8)) drop-shadow(2px 1px 1px rgba(255, 204, 0, 0.8))'
          }}
          draggable="false"
          height={24}
          width={24}
          alt={t('affection_state')}
          src={`${import.meta.env.BASE_URL}icon/wedding_ring.webp`}
        />)
      )
    );
  };

  return unit.kind === UnitKind.Bioroid ?
    (<AffectionIcon unit={unit.no} />) :
    null;
};

export const UnitTile: React.FC<{
  unit: UnitBasicInfo,
  isHoveringUnit: boolean
}> = ({ unit, isHoveringUnit }) => {
  const dragRef = useSquadUnitDrag(unit);
  const [unitName, rank, iconSrc, selected, selectUnit] = useSquadUnit(unit);

  const borderColor = isHoveringUnit ?
    'rgba(255, 255, 136, 0.9)' :
    selected ?
      'rgba(0, 255, 239, 0.9)' :
      'rgba(255, 255, 255, 0.5)';

  return (
    <div
      css={{
        position: 'relative',
        borderRadius: 8,
        border: `3px solid ${borderColor}`,
        userSelect: 'none',
        cursor: 'pointer'
      }}
      onClick={selectUnit}
      ref={dragRef}
    >
      <Image
        rounded
        draggable="false"
        height={80}
        width={80}
        alt={unitName}
        src={iconSrc}
      />
      <UnitRankIcon
        css={{
          position: 'absolute',
          top: -4,
          left: -4
        }}
        height={rank === UnitRank.SS ? 36 : 32}
        width={rank === UnitRank.SS ? 40 : 32}
        rank={rank}
        role={unit.role}
      />
      <AffectionOverlay unit={unit} />
      <DamagedOverlay unit={unit} />
    </div>
  );
};

const EmptyTile: React.FC<{
  position: TenKeyPosition,
  isHoveringUnit: boolean,
  canAssignUnit: boolean
}> = ({ position, isHoveringUnit, canAssignUnit }) => {
  const rgb = isHoveringUnit ?
    canAssignUnit ?
      '255, 255, 136' :
      '255, 102, 102' :
    '255, 255, 255';

  return (
    <div
      css={{
        position: 'relative',
        width: 86,
        height: 86,
        borderRadius: 8,
        border: `3px solid rgba(${rgb}, 0.5)`,
        background: `radial-gradient(rgba(${rgb}, 0.2), rgba(${rgb}, 0.7))`,
        '&:before, &:after': {
          content: '" "',
          position: 'absolute',
          top: 33,
          left: 19,
          height: 14,
          width: 42,
          backgroundColor: `rgb(${rgb})`
        },
        '&:after': { transform: 'rotate(90deg)' }
      }}
      draggable="false"
    >
      <div
        css={{
          position: 'absolute',
          top: -5,
          left: 5,
          color: '#000',
          fontSize: '1.3em',
          fontWeight: 'bold',
          userSelect: 'none'
        }}
      >
        {position}
      </div>
    </div>
  );
};

const SquadGridTile: React.FC<{ position: TenKeyPosition }> = ({ position }) => {
  const [assignedUnit, canAssignUnit, isHoveringUnit, dropRef] = useSquadGrid(position);

  return (
    <td
      css={{
        border: '5px solid transparent',
        position: 'relative'
      }}
    >
      <div ref={dropRef}>
        {
          assignedUnit ?
            (<UnitTile unit={assignedUnit} isHoveringUnit={isHoveringUnit} />) :
            (<EmptyTile position={position} isHoveringUnit={isHoveringUnit} canAssignUnit={canAssignUnit} />)
        }
      </div>
    </td>
  );
};

const SquadGrid: React.FC = () => {
  const dropRef = useIgnoreSquadUnitDrop();

  return (
    <table
      css={{ borderCollapse: 'collapse' }}
      cellSpacing="5"
      ref={dropRef}
    >
      <tbody>
        <tr>
          <SquadGridTile position={7} />
          <SquadGridTile position={8} />
          <SquadGridTile position={9} />
        </tr>
        <tr>
          <SquadGridTile position={4} />
          <SquadGridTile position={5} />
          <SquadGridTile position={6} />
        </tr>
        <tr>
          <SquadGridTile position={1} />
          <SquadGridTile position={2} />
          <SquadGridTile position={3} />
        </tr>
      </tbody>
    </table>
  );
};

export default SquadGrid;
