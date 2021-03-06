/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { Image } from 'react-bootstrap';

import { TenKeyPosition } from '../../domain/squad/Squad';
import { UnitBasicInfo, UnitRank } from '../../domain/UnitBasicInfo';

import { useIgnoreSquadUnitDrop, useSquadGrid, useSquadUnitDrag } from '../../state/squad/squadState';
import { useSquadUnit } from '../../state/selector/unitSelectorState';
import { useUnitDamagedState } from '../../state/status/unitDamagedState';
import { ifTruthy } from '../../util/react';
import UnitRankIcon from '../common/UnitRankIcon';

export const UnitTile: React.FC<{
  unit: UnitBasicInfo,
  isHoveringUnit: boolean
}> = ({ unit, isHoveringUnit }) => {
  const { t } = useTranslation();
  const dragRef = useSquadUnitDrag(unit);
  const [damaged] = useUnitDamagedState(unit);
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
        userSelect: 'none'
      }}
      onClick={() => selectUnit(unit)}
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
      {ifTruthy(
        damaged,
        (<Image
          css={{
            position: 'absolute',
            right: 0,
            bottom: 0
          }}
          draggable="false"
          height={32}
          width={32}
          alt={t('damaged_state')}
          src={`${process.env.PUBLIC_URL}/icon/need_repair.webp`}
        />)
      )}
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
