/** @jsxRuntime classic */
/** @jsx jsx */
import { Theme, jsx } from '@emotion/react';
import { Interpolation } from '@emotion/serialize';
import React, { ReactNode } from 'react';

import { Popover } from 'react-bootstrap';

const PopoverListContentRow: React.FC<{ css?: Interpolation<Theme>, children: ReactNode }> = ({ children, ...rest }) => {
  return (
    <div
      css={{
        display: 'flex',
        color: '#ccc',
        fontSize: '0.9em',
        fontWeight: 'bold',
        backgroundColor: '#0a101e',
        borderRadius: 3,
        padding: '3px 8px'
      }}
      {...rest}
    >
      {children}
    </div>
  );
};

const PopoverListContent: React.FC<{
  children: ReactNode
}> & { Row: typeof PopoverListContentRow } = ({ children }) => {
  return (
    <Popover.Content css={{ padding: 2 }}>
      <div css={{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 3,
        '& > div:not(:first-of-type)': {
          marginTop: 2
        }
      }}>
        {children}
      </div>
    </Popover.Content>
  );
};

PopoverListContent.Row = PopoverListContentRow;

export default PopoverListContent;
