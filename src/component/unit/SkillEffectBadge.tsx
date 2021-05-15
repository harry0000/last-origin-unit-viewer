/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Badge } from 'react-bootstrap';

import './SkillEffectBadge.css';
import { SkillEffectSelectorCondition } from '../../store/SkillEffectSelectorCondition';

const SkillEffectBadge: React.FC<{ effect: SkillEffectSelectorCondition }> = ({ effect }) => {
  const { t } = useTranslation();

  return (
    <Badge
      pill
      variant="skill-effect"
      css={{
        margin: '0 2px',
        userSelect: 'none'
      }}
    >
      {t(`form.skill.${effect}`)}
    </Badge>
  );
};

export default SkillEffectBadge;
