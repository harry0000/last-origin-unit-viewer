/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { Suspense } from 'react';

import { DropdownPlaceholder } from '../DropdownPlaceholder';
import UnitStatusHeading from '../UnitStatusHeading';

import { useSelectedUnit } from '../../../state/selector/UnitSelectorHook';

const FullLinkBonusDropdown = React.lazy(() => import('./FullLinkBonusDropdown'));

const FullLinkBonusSelector: React.FC = () => {
  const selected = useSelectedUnit();

  return selected ?
    (<Suspense fallback={<DropdownPlaceholder />}><FullLinkBonusDropdown unit={selected} /></Suspense>) :
    (<DropdownPlaceholder />);
};

const FullLinkIcon = (
  <div
    css={{
      display: 'flex',
      alignContent: 'center',
      justifyContent: 'center',
      border: '2px solid #fff',
      borderRadius: 3,
      width: 20,
      height: 20,
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
      lineHeight: 1,
      userSelect: 'none'
    }}
    aria-hidden="true"
  >
    B
  </div>
);

const UnitFullLinkView: React.FC = () => {
  return (
    <div>
      <UnitStatusHeading
        icon={FullLinkIcon}
        headingKey="heading.full_link_bonus"
      />
      <FullLinkBonusSelector />
    </div>
  );
};

export default UnitFullLinkView;
