/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { useState } from 'react';
import { Image } from 'react-bootstrap';

import './CircleImageSwitch.css';

const CircleImageSwitch = React.forwardRef<HTMLDivElement, {
  id: string,
  src: string,
  height: number,
  width: number,
  alt: string,
  disabled?: boolean,
  selected?: boolean,
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}>(({ id, src, height, width, alt, disabled, selected, onChange, ...rest }, ref) => {
  const [focus, setFocus] = useState(false);
  const active = selected && !disabled;

  const [prevDisabled, setPrevDisabled] = useState(disabled);
  if (disabled != prevDisabled) {
    setPrevDisabled(disabled);
    if (disabled) {
      setFocus(false);
    }
  }

  return (
    <div className="circle-image-check" {...rest} ref={ref}>
      <input
        type="checkbox"
        id={id}
        className="visually-hidden circle-image-check-input"
        checked={selected}
        disabled={disabled}
        onChange={onChange}
        onFocus={() => { setFocus(true); }}
        onBlur={() => { setFocus(false); }}
      />
      <label
        htmlFor={id}
        className={`circle-image-check-label${disabled ? ' disabled' : ''}${focus ? ' focus' : ''}${active ? ' active' : ''}`}
      >
        <Image
          draggable="false"
          alt={alt}
          src={src}
          height={height}
          width={width}
        />
      </label>
    </div>
  );
});

export default CircleImageSwitch;
