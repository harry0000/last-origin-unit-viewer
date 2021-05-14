/** @jsxRuntime classic */
/** @jsx jsx */
import { Theme, jsx } from '@emotion/react';
import { Interpolation } from '@emotion/serialize';
import React from 'react';
import { useRecoilValue } from 'recoil';

import { UnitBasicInfoView } from './UnitBasicInfoView';
import { UnitFormSelector } from './UnitFormSelector';

import { selectedUnitState } from '../../state/unit/selectedUnitState';

const UnitStatus: React.FC<{ className?: string, css?: Interpolation<Theme> }> = (props) => {
  const unit = useRecoilValue(selectedUnitState);

  return (
    <div {...props}>
      <UnitBasicInfoView unit={unit?.basicInfo} />
      <div css={{ padding: '5px 0 5px 90px' }}>
        <UnitFormSelector />
      </div>
    </div>
  );
};

export default UnitStatus;
