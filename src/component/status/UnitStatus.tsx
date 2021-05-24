/** @jsxRuntime classic */
/** @jsx jsx */
import { Theme, jsx } from '@emotion/react';
import { Interpolation } from '@emotion/serialize';
import React from 'react';

import { UnitBasicInfoView } from './UnitBasicInfoView';
import { UnitFormSelector } from './UnitFormSelector';

import UnitStatusParameter from './UnitStatusParameter';

const UnitStatus: React.FC<{ className?: string, css?: Interpolation<Theme> }> = (props) => {
  return (
    <div {...props} css={{ userSelect: 'none' }}>
      <UnitBasicInfoView />
      <UnitStatusParameter />
      <UnitFormSelector css={{ marginTop: 10 }} />
    </div>
  );
};

export default UnitStatus;
