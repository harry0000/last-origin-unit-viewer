/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { useTranslation } from 'react-i18next';

import { Badge } from 'react-bootstrap';

import { SkillEffectSelectorCondition } from '../../domain/selector/SkillEffectSelectorCondition';
import { skillEffectSelectorState } from '../../state/selector/unitSelectorState';

import { ifTruthy } from '../../util/react';

import './SkillEffectBadge.css';

const SkillEffectBadge: React.FC<{ effect: SkillEffectSelectorCondition }> = ({ effect }) => {
  const { t } = useTranslation();
  const selected = useRecoilValue(skillEffectSelectorState(effect));

  return ifTruthy(
    selected,
    (<Badge
      pill
      variant="skill-effect"
      css={{
        margin: '0 2px',
        userSelect: 'none'
      }}
    >
      {t(`form.skill.${effect}`)}
    </Badge>)
  );
};

export default SkillEffectBadge;
