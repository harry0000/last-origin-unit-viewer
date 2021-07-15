/** @jsxRuntime classic */
/** @jsx jsx */
import { Theme, jsx } from '@emotion/react';
import { Interpolation } from '@emotion/serialize';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { CheckboxChecked, CheckboxUnchecked } from '../icon/FluentIcons';
import RoundedToggleButton from '../common/RoundedToggleButton';
import SVGIcon from '../icon/SVGIcon';

import { SkillEffectSelectorCondition } from '../../domain/selector/SkillEffectSelectorCondition';

import { useSkillEffectSelector } from '../../state/selector/unitSelectorState';

const SkillEffectSelectorButton: React.FC<{
  css?: Interpolation<Theme>,
  effect: SkillEffectSelectorCondition
}> = ({ effect, ...others }) => {
  const { t } = useTranslation();
  const [selected, toggle] = useSkillEffectSelector(effect);

  return (
    <RoundedToggleButton
      {...others}
      selected={selected}
      onChange={() => toggle()}
    >
      <SVGIcon
        css={{
          height: 20,
          width: 20,
          marginRight: 5
        }}
      >
        {selected ? <CheckboxChecked fill="#000" /> : <CheckboxUnchecked />}
      </SVGIcon>
      <span>{t(`form.skill.${effect}`)}</span>
    </RoundedToggleButton>
  );
};

export default SkillEffectSelectorButton;
