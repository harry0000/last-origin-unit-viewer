/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import { Dropdown } from 'react-bootstrap';

import './dropdown.css';

export const DropdownPlaceholder: React.FC = () => {
  return (
    <Dropdown className="unit-state">
      <div className="placeholder" />
    </Dropdown>
  );
};
