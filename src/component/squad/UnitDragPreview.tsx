/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';

import UnitCard from '../unit/UnitCard';
import { UnitTile } from './SquadGrid';

import { ItemType, useUnitDragPreview } from '../../state/squad/squadState';

const UnitDragPreview: React.FC = () => {
  const props = useUnitDragPreview();

  if (!props.display) {
    return null;
  }

  const { itemType, item, style } = props;
  return (
    <div style={style}>
      {
        itemType === ItemType.UnitCard ?
          (<UnitCard unit={item} />) :
          (<UnitTile unit={item} isHoveringUnit={false} />)
      }
    </div>
  );
};

export default UnitDragPreview;
