/** @jsxRuntime classic */
/** @jsx jsx */
import { Theme, jsx } from '@emotion/react';
import { Interpolation } from '@emotion/serialize';
import React, { ReactNode } from 'react';
import { CheckboxChecked, CheckboxUnchecked } from '../icon/FluentIcons';
import RoundedToggleButton from '../common/RoundedToggleButton';
import SVGIcon from '../icon/SVGIcon';

const SkillEffectSelectorButton: React.FC<{
  css?: Interpolation<Theme>,
  selected: boolean,
  onChange?: React.ChangeEventHandler<HTMLInputElement>,
  children: ReactNode
}> = (props) => {
  const { selected, onChange, children, ...others } = props;

  return (
    <RoundedToggleButton
      {...others}
      selected={selected}
      onChange={onChange}
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
      {children}
    </RoundedToggleButton>
  );
};

export default SkillEffectSelectorButton;
