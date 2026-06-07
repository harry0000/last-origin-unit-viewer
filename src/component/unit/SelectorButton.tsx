/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { ReactNode, useId } from 'react';

import './SelectorButton.css';

/**
 * @see {@link https://github.com/react-bootstrap/react-bootstrap/issues/6719}
 */
const SelectorButton: React.FC<{ selected: boolean, onChange?: React.ChangeEventHandler<HTMLInputElement>, children: ReactNode }> = ({
  selected,
  onChange,
  children
}) => {
  const id = useId();
  return (
    <div
      role="group"
      className="btn-group"
      css={{
        display: 'inline-block',
        '@media (max-width: 480px)': {
          width: 80
        },
        '@media (min-width: 480px)': {
          width: 100
        }
      }}
    >
      <input
        id={id}
        type="checkbox"
        className="btn-check"
        checked={selected}
        onChange={onChange}
        autoComplete="off"
      />
      <label
        htmlFor={id}
        className="btn btn-selector"
      >
        {children}
      </label>
    </div>
  );
};

export default SelectorButton;
