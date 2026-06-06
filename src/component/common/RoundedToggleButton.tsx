/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { ReactNode, useId } from 'react';
import { Interpolation } from '@emotion/serialize';
import { Theme } from '@emotion/react';

import './RoundedToggleButton.css';

type RoundedToggleButtonProps = {
  css?: Interpolation<Theme>,
  className?: string,
  disabled?: boolean,
  selected: boolean,
  onChange?: React.ChangeEventHandler<HTMLInputElement>,
  children: ReactNode
}

/**
 * @see {@link https://github.com/react-bootstrap/react-bootstrap/issues/6719}
 */
const RoundedToggleButton = React.forwardRef<HTMLDivElement, RoundedToggleButtonProps>((props, ref) => {
  const { className, disabled, selected, onChange, children, ...rest } = props;
  const id = useId();

  return (
    <div
      {...rest}
      ref={ref}
      role="group"
      className={className ? `btn-group ${className}` : 'btn-group'}
    >
      <input
        id={id}
        type="checkbox"
        className="btn-check"
        checked={selected}
        disabled={disabled}
        onChange={onChange}
        autoComplete="off"
      />
      <label
        htmlFor={id}
        className={`btn btn-toggle${disabled ? ' disabled' : ''}`}
      >
        {children}
      </label>
    </div>
  );
});

export default RoundedToggleButton;
