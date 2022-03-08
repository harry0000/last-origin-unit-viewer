/** @jsxRuntime classic */
/** @jsx jsx */
import { Theme, jsx } from '@emotion/react';
import { Interpolation } from '@emotion/serialize';
import React from 'react';

import AffectionBonusSelector from './AffectionBonusSelector';
import DamagedStateSelector from './DamagedStateSelector';
import UnitCoreLinkView from './corelink/UnitCoreLinkView';
import UnitEquipmentView from './equipment/UnitEquipmentView';
import UnitFullLinkView from './corelink/UnitFullLinkView';
import UnitStatusParameterView from './UnitStatusParameter';

const UnitStatus: React.FC<{ css?: Interpolation<Theme> }> = (props) => {
  return (
    <div
      {...props}
      css={{
        userSelect: 'none',
        overflowY: 'hidden',
        '& > *:not(:first-of-type)': {
          marginTop: 15
        }
      }}
    >
      <UnitStatusParameterView />
      <UnitEquipmentView />
      <UnitCoreLinkView />
      <UnitFullLinkView />
      <div css={{ '& > *:not(:first-of-type)': { marginTop: 10 } }}>
        <AffectionBonusSelector />
        <DamagedStateSelector />
      </div>
    </div>
  );
};

export default UnitStatus;
