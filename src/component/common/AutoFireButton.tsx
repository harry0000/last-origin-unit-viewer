/** @jsx jsx */
import { Theme, jsx } from '@emotion/react';
import { Interpolation } from '@emotion/serialize';
import React, { ReactNode, useEffect, useState } from 'react';

import { Button } from 'react-bootstrap';
import { ButtonVariant } from 'react-bootstrap/types';

function useDelayedInterval(callback: () => void, delay: number, interval: number, isRunning: boolean): void {
  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    let intervalId: ReturnType<typeof setInterval> | undefined;

    function cleatTimers() {
      if (timeoutId) clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    }

    if (isRunning) {
      callback();
      timeoutId = setTimeout(() => { intervalId = setInterval(callback, interval); }, delay);
    }

    return cleatTimers;
  }, [callback, delay, interval, isRunning]);
}

const AutoFireButton: React.FC<{
  css?: Interpolation<Theme>,
  variant: ButtonVariant,
  disabled: boolean,
  onClick: () => void,
  children: ReactNode
}> = ({ disabled, onClick, children, ...rest }) => {
  const [prevDisabled, setPrevDisabled] = useState(disabled);
  const [isMouseDown, setIsMouseDown] = useState(false);

  if (disabled != prevDisabled) {
    setPrevDisabled(disabled);
    setIsMouseDown(false);
  }

  useDelayedInterval(
    onClick,
    750,
    20,
    !disabled && isMouseDown
  );

  return (
    <Button
      {...rest}
      disabled={disabled}
      onMouseDown={() => setIsMouseDown(true)}
      onMouseUp={() => setIsMouseDown(false)}
      onMouseLeave={() => setIsMouseDown(false)}
      onTouchStart={() => setIsMouseDown(true)}
      onTouchEnd={(e) => {
        // HACK: to prevent firing onMouseDown event
        // https://github.com/facebook/react/issues/9809#issuecomment-395607117
        e.preventDefault();
        setIsMouseDown(false);
      }}
      onTouchCancel={() => setIsMouseDown(false)}
    >
      {children}
    </Button>
  );
};

export default AutoFireButton;
