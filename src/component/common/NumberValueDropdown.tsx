/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { CSSProperties, MouseEventHandler, ReactNode } from 'react';
import { Dropdown } from 'react-bootstrap';

import './NumberValueDropdown.css';

type Props<T extends number> = {
  id: string,
  items: ReadonlyArray<T>,
  value?: T,
  onChange?: (nextValue: T, event: React.SyntheticEvent<unknown>) => void,
  disabled?: boolean
}

const NumberValueDropdown = <T extends number>(
  { id, items, value, onChange, disabled }: Props<T>
): ReturnType<React.FC<Props<T>>> => {
  const NumberValueToggle =
    React.forwardRef<HTMLAnchorElement, {
      onClick: MouseEventHandler<HTMLAnchorElement>,
      children: ReactNode,
      id: string,
      style: CSSProperties,
      className: string
    }>((
      { onClick, children, id, style, className },
      ref
    ) => (
      <a
        href=""
        ref={ref}
        id={id}
        style={style}
        className={className}
        onClick={(e) => {
          e.preventDefault();
          onClick(e);
        }}
      >
        <span>{children}</span>
      </a>
    ));

  return (
    <Dropdown
      className="numeric"
      onSelect={(eventKey, event) => {
        const nextValue = eventKey ? +eventKey as T : undefined;
        if (nextValue && onChange) { onChange(nextValue, event); }
      }}
    >
      <Dropdown.Toggle as={NumberValueToggle} id={id} disabled={disabled}>
        {value ?? '　'}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {items.map(i => (
          <Dropdown.Item key={i} eventKey={i} active={value === i}>{i}</Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default NumberValueDropdown;
