/** @jsxRuntime classic */
/** @jsx jsx */
import { Theme, jsx } from '@emotion/react';
import { Interpolation } from '@emotion/serialize';
import React, { CSSProperties, MouseEventHandler, ReactNode } from 'react';
import { Dropdown } from 'react-bootstrap';

import './NumberValueDropdown.css';

type Props<T extends number> = {
  css?: Interpolation<Theme>,
  id: string,
  items: ReadonlyArray<T>,
  value: T,
  onChange: (nextValue: T, event: React.SyntheticEvent<unknown>) => void
}

const NumberValueDropdown = <T extends number>(
  { id, items, value, onChange, ...rest }: Props<T>
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
    <div {...rest}>
      <Dropdown
        className="numeric"
        onSelect={(eventKey, event) => {
          const nextValue = eventKey ? +eventKey as T : undefined;
          if (nextValue) { onChange(nextValue, event); }
        }}
      >
        <Dropdown.Toggle as={NumberValueToggle} id={id}>
          {value}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {items.map(i => (
            <Dropdown.Item key={i} eventKey={i} active={value === i}>{i}</Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default NumberValueDropdown;
