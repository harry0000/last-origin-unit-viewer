/** @jsxRuntime classic */
/** @jsx jsx */
import { Theme, jsx } from '@emotion/react';
import { Interpolation } from '@emotion/serialize';
import React from 'react';

import AffectionBonusSelector from './AffectionBonusSelector';
import DamagedStateView from './DamagedStateView';
import UnitCoreLinkView from './corelink/UnitCoreLinkView';
import UnitEquipmentView from './equipment/UnitEquipmentView';
import UnitFullLinkView from './corelink/UnitFullLinkView';
import UnitLvView from './parameters/UnitLvView';
import UnitSkillView from './UnitSkillView';
import UnitStatusParameterContainer from './parameters/UnitStatusParameterContainer';
import UnitStatusParametersForm from './parameters/UnitStatusParametersForm';

const UnitStatus: React.FC<{ css?: Interpolation<Theme> }> = (props) => {
  return (
    <div
      {...props}
      css={{
        userSelect: 'none',
        overflowY: 'hidden',
        padding: 5,
        '& > *:not(:first-of-type)': {
          marginTop: 10
        }
      }}
    >
      <UnitStatusParameterContainer />
      <UnitLvView />
      <UnitStatusParametersForm />
      <UnitSkillView />
      <UnitEquipmentView />
      <UnitCoreLinkView />
      <UnitFullLinkView />
      <DamagedStateView />
      <AffectionBonusSelector />
    </div>
  );
};

export default UnitStatus;
