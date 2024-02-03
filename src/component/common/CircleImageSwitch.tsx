/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { useState } from 'react';
import { Image } from 'react-bootstrap';

import './CircleImageSwitch.css';

const CircleImageSwitch: React.FC<{
  id: string,
  src: string,
  height: number,
  width: number,
  alt: string,
  disabled?: boolean,
  selected?: boolean,
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}> = ({ id, src, height, width, alt, disabled, selected, onChange, ...rest }) => {
  const [active, setActive] = useState(selected);
  const [focus, setFocus] = useState(false);

  const [prevDisabled, setPrevDisabled] = useState(disabled);
  if (disabled != prevDisabled) {
    setPrevDisabled(disabled);
    if (disabled) {
      setActive(false);
      setFocus(false);
    }
  }

  return (
    <div className="circle-image-check" {...rest}>
      <input
        type="checkbox"
        id={id}
        className="sr-only circle-image-check-input"
        checked={selected}
        disabled={disabled}
        onChange={e => {
          setActive(e.target.checked);
          onChange?.call(undefined, e);
        }}
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
};

export default CircleImageSwitch;
