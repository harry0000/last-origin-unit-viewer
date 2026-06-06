/** @jsx jsx */
import { Theme, jsx } from '@emotion/react';
import { Interpolation } from '@emotion/serialize';
import React, { ReactNode } from 'react';

type SVGIconProps = { css?: Interpolation<Theme>, className?: string, children: ReactNode }

const SVGIcon = React.forwardRef<HTMLSpanElement, SVGIconProps>(({ children, ...rest }, ref) => {
  return (
    <span
      ref={ref}
      css={{
        display: 'inline-block',
        '& > svg': { verticalAlign: 'text-top' }
      }}
      {...rest}
    >
      {children}
    </span>
  );
});

export default SVGIcon;
