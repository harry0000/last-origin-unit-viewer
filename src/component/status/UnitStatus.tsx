/** @jsxRuntime classic */
/** @jsx jsx */
import { Theme, jsx } from '@emotion/react';
import { Interpolation } from '@emotion/serialize';
import React from 'react';

import UnitBasicInfoView from './UnitBasicInfoView';
import UnitEquipmentView from './UnitEquipmentView';
import UnitFormSelector from './UnitFormSelector';
import UnitStatusParameterView from './UnitStatusParameter';

const UnitStatus: React.FC<{ className?: string, css?: Interpolation<Theme> }> = (props) => {
  return (
    <div
      {...props}
      css={{
        userSelect: 'none',
        overflowY: 'hidden',
        padding: '0 10px',
        '& > *:not(:first-child)': {
          marginTop: 15
        }
      }}
    >
      <UnitBasicInfoView />
      <UnitStatusParameterView />
      <UnitEquipmentView />
      <UnitFormSelector />
    </div>
  );
};

export default UnitStatus;
