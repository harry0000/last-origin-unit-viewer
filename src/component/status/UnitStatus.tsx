/** @jsxRuntime classic */
/** @jsx jsx */
import { Theme, jsx } from '@emotion/react';
import { Interpolation } from '@emotion/serialize';
import React from 'react';
import { useRecoilValue } from 'recoil';

import { UnitBasicInfoView } from './UnitBasicInfoView';
import { UnitFormSelector } from './UnitFormSelector';

import { selectedUnitState } from '../../state/unit/selectedUnitState';
import UnitStatusParameter from './UnitStatusParameter';

const UnitStatus: React.FC<{ className?: string, css?: Interpolation<Theme> }> = (props) => {
  const unit = useRecoilValue(selectedUnitState);

  return (
    <div {...props} css={{ userSelect: 'none' }}>
      <UnitBasicInfoView unit={unit?.basicInfo} />
      <UnitStatusParameter />
      <UnitFormSelector css={{ marginTop: 10 }} />
    </div>
  );
};

export default UnitStatus;
