/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { ReactNode } from 'react';
import { Interpolation } from '@emotion/serialize';
import { Theme } from '@emotion/react';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';

import './RoundedToggleButton.css';

const RoundedToggleButton: React.FC<{
  css?: Interpolation<Theme>,
  disabled?: boolean,
  selected: boolean,
  onChange?: React.ChangeEventHandler<HTMLInputElement>,
  children: ReactNode
}> = (props) => {
  const { disabled, selected, onChange, children, ...others } = props;

  return (
    <ButtonGroup {...others} toggle>
      <ToggleButton
        type='checkbox'
        variant="toggle"
        value={1}
        disabled={disabled}
        checked={selected}
        onChange={onChange}>
        {children}
      </ToggleButton>
    </ButtonGroup>
  );
};

export default RoundedToggleButton;
