/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { ReactNode } from 'react';

import { CheckboxChecked, CheckboxUnchecked } from '../icon/FluentIcons';
import RoundedToggleButton from '../common/RoundedToggleButton';
import SVGIcon from '../icon/SVGIcon';

const UnitDetailConditionSelectorButton: React.FC<{
  className?: string,
  children: ReactNode,
  selected: boolean,
  onSelect: () => void
}> = ({ children, selected, onSelect, ...rest }) => {
  return (
    <RoundedToggleButton
      {...rest}
      selected={selected}
      onChange={onSelect}
    >
      <SVGIcon
        css={{
          height: 20,
          width: 20,
          marginRight: 5
        }}
      >
        {selected ? <CheckboxChecked fill="#000" /> : <CheckboxUnchecked />}
      </SVGIcon>
      <span>{children}</span>
    </RoundedToggleButton>
  );
};

export default UnitDetailConditionSelectorButton;
