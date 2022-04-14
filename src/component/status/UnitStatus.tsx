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
import UnitLvView from './parameters/UnitLvView';
import UnitStatusParameter from './parameters/UnitStatusParameter';
import UnitStatusParametersForm from './parameters/UnitStatusParametersForm';

const UnitStatus: React.FC<{ css?: Interpolation<Theme> }> = (props) => {
  return (
    <div
      {...props}
      css={{
        userSelect: 'none',
        overflowY: 'hidden',
        padding: '0 5px 5px',
        '& > *:not(:first-of-type)': {
          marginTop: 10
        }
      }}
    >
      <UnitStatusParameter />
      <UnitLvView />
      <UnitStatusParametersForm />
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
