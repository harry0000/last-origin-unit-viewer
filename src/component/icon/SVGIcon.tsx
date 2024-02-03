/** @jsx jsx */
import { Theme, jsx } from '@emotion/react';
import { Interpolation } from '@emotion/serialize';
import React, { ReactNode } from 'react';

const SVGIcon: React.FC<{ css?: Interpolation<Theme>, className?: string, children: ReactNode }> = ({ children, ...rest }) => {
  return (
    <span
      css={{
        display: 'inline-block',
        '& > svg': { verticalAlign: 'text-top' }
      }}
      {...rest}
    >
      {children}
    </span>
  );
};

export default SVGIcon;
