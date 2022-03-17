/** @jsxRuntime classic */
/** @jsx jsx */
import { Theme, jsx } from '@emotion/react';
import { Interpolation } from '@emotion/serialize';
import React, { useEffect, useRef, useState } from 'react';
import { Button } from 'react-bootstrap';
import { ButtonVariant } from 'react-bootstrap/types';

function useLazyInterval(callback: () => void, lazy: number, interval: number | undefined): void {
  const savedCallback = useRef<() => void>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    let intervalId: ReturnType<typeof setInterval> | undefined;

    function tick() {
      savedCallback.current?.call(undefined);
    }
    function cleatTimers() {
      if (timeoutId) clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    }

    if (interval) {
      tick();
      timeoutId = setTimeout(() => { intervalId = setInterval(tick, interval); }, lazy);
    }

    return cleatTimers;
  }, [lazy, interval]);
}

const AutoFireButton: React.FC<{
  css?: Interpolation<Theme>,
  variant: ButtonVariant,
  disabled?: boolean,
  onClick: () => void
}> = ({ disabled, onClick, children, ...others }) => {
  const [isMouseDown, setMouseDown] = useState(false);

  useEffect(() => { setMouseDown(false); }, [disabled]);

  useLazyInterval(
    () => { onClick(); },
    750,
    disabled !== true && isMouseDown ? 20 : undefined
  );

  return (
    <Button
      {...others}
      disabled={disabled}
      onMouseDown={() => setMouseDown(true)}
      onMouseUp={() => setMouseDown(false)}
      onMouseLeave={() => setMouseDown(false)}
      onTouchStart={() => setMouseDown(true)}
      onTouchEnd={(e) => {
        // HACK: to prevent firing onMouseDown event
        // https://github.com/facebook/react/issues/9809#issuecomment-395607117
        e.preventDefault();
        setMouseDown(false);
      }}
      onTouchCancel={() => setMouseDown(false)}
    >
      {children}
    </Button>
  );
};

export default AutoFireButton;
