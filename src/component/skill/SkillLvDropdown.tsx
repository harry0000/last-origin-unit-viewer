/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Theme } from '@emotion/react';
import React, { MouseEventHandler, ReactNode } from 'react';
import { ChevronUpDown } from '../icon/FluentIcons';
import { Dropdown } from 'react-bootstrap';

import { SkillLv } from '../../domain/UnitSkillLvValue';
import { Interpolation } from '@emotion/serialize';

import './SkillLvDropdown.css';

const SkillLvEventKey: { [key: string]: SkillLv } = {
  '1': 1,
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9,
  '10': 10
};

const SkillLvDropdown: React.FC<{
  css?: Interpolation<Theme>,
  lv: SkillLv,
  onChange: (lv: SkillLv, event: React.SyntheticEvent<unknown>) => void
}> = (props) => {
  const { lv, onChange, ...others } = props;

  const SkillLvCustomToggle =
    React.forwardRef<HTMLAnchorElement, { onClick: MouseEventHandler<HTMLAnchorElement>, children: ReactNode }>(
      (
        { onClick, children },
        ref
      ) => (
        <a
          href=""
          ref={ref}
          onClick={(e) => {
            e.preventDefault();
            onClick(e);
          }}
        >
          {children}&nbsp;<ChevronUpDown />
        </a>
      )
    );

  return (
    <div {...others}>
      <Dropdown
        className="skill-lv"
        onSelect={(eventKey, event) => {
          const lv = eventKey && SkillLvEventKey[eventKey];
          if (lv) { onChange(lv, event); }
        }}
      >
        <Dropdown.Toggle as={SkillLvCustomToggle} id="skill-lv-custom-dropdown">
          {lv}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item eventKey="10" active={lv === 10}>10</Dropdown.Item>
          <Dropdown.Item eventKey="9"  active={lv === 9} >9</Dropdown.Item>
          <Dropdown.Item eventKey="8"  active={lv === 8} >8</Dropdown.Item>
          <Dropdown.Item eventKey="7"  active={lv === 7} >7</Dropdown.Item>
          <Dropdown.Item eventKey="6"  active={lv === 6} >6</Dropdown.Item>
          <Dropdown.Item eventKey="5"  active={lv === 5} >5</Dropdown.Item>
          <Dropdown.Item eventKey="4"  active={lv === 4} >4</Dropdown.Item>
          <Dropdown.Item eventKey="3"  active={lv === 3} >3</Dropdown.Item>
          <Dropdown.Item eventKey="2"  active={lv === 2} >2</Dropdown.Item>
          <Dropdown.Item eventKey="1"  active={lv === 1} >1</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default SkillLvDropdown;
