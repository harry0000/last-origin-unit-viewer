/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { ReactNode } from 'react';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';

import './SelectorButton.css';

const SelectorButton: React.FC<{ selected: boolean, onChange?: React.ChangeEventHandler<HTMLInputElement>, children: ReactNode }> = ({
  selected,
  onChange,
  children
}) => (
  <ButtonGroup
    css={{
      display: 'inline-block',
      '@media (max-width: 480px)': {
        width: 80
      },
      '@media (min-width: 480px)': {
        width: 100
      }
    }}
    toggle
  >
    <ToggleButton
      type='checkbox'
      variant='selector'
      checked={selected}
      value={1}
      onChange={onChange}>
      {children}
    </ToggleButton>
  </ButtonGroup>
);

export default SelectorButton;
