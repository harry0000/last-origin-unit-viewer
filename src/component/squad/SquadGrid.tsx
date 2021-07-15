/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';

import { Image } from 'react-bootstrap';

import { TenKeyPosition } from '../../domain/squad/Squad';
import { UnitBasicInfo } from '../../domain/UnitBasicInfo';

import { useUnit } from '../../state/selector/unitSelectorState';
import { useIgnoreSquadUnitDrop, useSquad, useSquadUnitDrag } from '../../state/squad/squadState';

export const UnitTile: React.FC<{
  unit: UnitBasicInfo,
  isHoveringUnit: boolean
}> = ({ unit, isHoveringUnit }) => {
  const [isDragging, dragRef] = useSquadUnitDrag(unit);
  const [unitName, selected, selectUnit] = useUnit(unit);

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
        cursor: isDragging ? 'grabbing' : 'pointer',
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
        src={`${process.env.PUBLIC_URL}/unit_icon/${unit.no}.webp`}
      />
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
        width: 86,
        height: 86,
        borderRadius: 8,
        border: `3px solid rgba(${rgb}, 0.5)`,
        background: `radial-gradient(rgba(${rgb}, 0.2), rgba(${rgb}, 0.7))`,
        '&:before, &:after': {
          content: '" "',
          position: 'absolute',
          top: 36,
          left: 22,
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
          top: 0,
          left: 10,
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
  const [assignedUnit, canAssignUnit, isHoveringUnit, dropRef] = useSquad(position);

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
