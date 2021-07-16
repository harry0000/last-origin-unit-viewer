/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';

import { Button } from 'react-bootstrap';
import { Variant } from 'react-bootstrap/types';
import PropTypes from 'prop-types';

import './SVGButton.css';

const SVGButton: React.FC<{
  svg: PropTypes.ReactElementLike,
  variant?: Variant,
  fluidSvg?: boolean,
  disabled?: boolean,
  onClick?: React.MouseEventHandler<HTMLElement>
}> = ({ variant, fluidSvg, disabled, svg, onClick, ...others }) => {
  return (
    <Button
      {...others}
      className={`svg-btn${fluidSvg ? ' fluid' : ''}`}
      variant={variant ?? 'primary'}
      disabled={disabled}
      onClick={onClick}
    >
      {svg}
    </Button>
  );
};

export default SVGButton;
