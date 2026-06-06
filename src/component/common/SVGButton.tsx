/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';

import { Button } from 'react-bootstrap';
import { Variant } from 'react-bootstrap/types';
import PropTypes from 'prop-types';

import './SVGButton.css';

type SVGButtonProps = {
  svg: PropTypes.ReactElementLike,
  variant?: Variant,
  fluidSvg?: boolean,
  disabled?: boolean,
  onClick?: React.MouseEventHandler<HTMLElement>
}

const SVGButton = React.forwardRef<HTMLButtonElement, SVGButtonProps>(({ variant, fluidSvg, disabled, svg, onClick, ...rest }, ref) => {
  return (
    <Button
      {...rest}
      ref={ref}
      className={`svg-btn${fluidSvg ? ' fluid' : ''}`}
      variant={variant ?? 'primary'}
      disabled={disabled}
      onClick={onClick}
    >
      {svg}
    </Button>
  );
});

export default SVGButton;
