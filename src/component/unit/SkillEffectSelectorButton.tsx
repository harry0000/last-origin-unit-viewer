/** @jsxRuntime classic */
/** @jsx jsx */
import { Theme, jsx } from '@emotion/react';
import { Interpolation } from '@emotion/serialize';
import React, { ReactNode } from 'react';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';
import { CheckboxChecked, CheckboxUnchecked } from '../icon/FluentIcons';
import SVGIcon from '../icon/SVGIcon';

import './SkillEffectSelectorButton.css';

const SkillEffectSelectorButton: React.FC<{
  css?: Interpolation<Theme>,
  selected: boolean,
  onChange?: React.ChangeEventHandler<HTMLInputElement>,
  children: ReactNode
}> = (props) => {
  const { selected, onChange, children, ...others } = props;

  return (
    <ButtonGroup {...others} toggle>
      <ToggleButton
        type='checkbox'
        variant="skill-effect"
        value={1}
        checked={selected}
        onChange={onChange}>
        <React.Fragment>
          <SVGIcon
            css={{
              height: 20,
              width: 20,
              marginRight: 5
            }}
          >
            {selected ? <CheckboxChecked fill="#000" /> : <CheckboxUnchecked />}
          </SVGIcon>
          {children}
        </React.Fragment>
      </ToggleButton>
    </ButtonGroup>
  );
};

export default SkillEffectSelectorButton;
