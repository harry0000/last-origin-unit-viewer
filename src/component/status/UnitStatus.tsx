/** @jsxRuntime classic */
/** @jsx jsx */
import { Theme, jsx } from '@emotion/react';
import { Interpolation } from '@emotion/serialize';
import React from 'react';

import AffectionBonusSelector from './AffectionBonusSelector';
import DamagedStateSelector from './DamagedStateSelector';
import UnitBasicInfoView from './UnitBasicInfoView';
import UnitCoreLinkView from './corelink/UnitCoreLinkView';
import UnitEquipmentView from './equipment/UnitEquipmentView';
import UnitFormSelector from './UnitFormSelector';
import UnitFullLinkView from './corelink/UnitFullLinkView';
import UnitStatusParameterView from './UnitStatusParameter';

const UnitStatus: React.FC<{ className?: string, css?: Interpolation<Theme> }> = (props) => {
  return (
    <div
      {...props}
      css={{
        userSelect: 'none',
        overflowY: 'hidden',
        padding: '0 10px 10px',
        '& > *:not(:first-of-type)': {
          marginTop: 15
        }
      }}
    >
      <UnitBasicInfoView />
      <UnitStatusParameterView />
      <UnitEquipmentView />
      <UnitCoreLinkView />
      <UnitFullLinkView />
      <div css={{ '& > *:not(:first-of-type)': { marginTop: 10 } }}>
        <AffectionBonusSelector />
        <DamagedStateSelector />
        <UnitFormSelector />
      </div>
    </div>
  );
};

export default UnitStatus;
