/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

import { Badge } from 'react-bootstrap';

import {
  useSelectedActiveSkillConditions,
  useSelectedCoreLinkBonusCondition,
  useSelectedFullLinkBonusCondition,
  useSelectedRankUpCondition,
  useSelectedSkillEffectConditions
} from '../../state/selector/unitSelectorState';

import { ifNonNullable } from '../../util/react';

import './UnitSelectorDetailConditionBadge.css';

const UnitSelectorDetailConditionBadge: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Badge
      pill
      variant="detail-condition"
      css={{
        margin: '0 2px',
        userSelect: 'none'
      }}
    >
      {children}
    </Badge>
  );
};

const ActiveSkillConditionBadges: React.FC = () => {
  const { t } = useTranslation();
  const conditions = useSelectedActiveSkillConditions();

  return (
    <React.Fragment>
      {conditions.map(cond => (
        <UnitSelectorDetailConditionBadge key={cond}>
          {t(`form.active_skill_conditions.${cond}`)}
        </UnitSelectorDetailConditionBadge>
      ))}
    </React.Fragment>
  );
};

const SkillEffectConditionBadges: React.FC = () => {
  const { t } = useTranslation();
  const conditions = useSelectedSkillEffectConditions();

  return (
    <React.Fragment>
      {conditions.map(cond => (
        <UnitSelectorDetailConditionBadge key={cond}>
          {t(`form.skill_effect_conditions.${cond}`)}
        </UnitSelectorDetailConditionBadge>
      ))}
    </React.Fragment>
  );
};

const CoreLinkBonusConditionBadge: React.FC = () => {
  const { t } = useTranslation();
  const condition = useSelectedCoreLinkBonusCondition();

  return ifNonNullable(
    condition,
    cond => (
      <UnitSelectorDetailConditionBadge>
        {t('status.core_link_bonus')}&nbsp;:&nbsp;{t(`form.core_link_bonus_conditions.${cond}`)}
      </UnitSelectorDetailConditionBadge>
    )
  );
};

const FullLinkBonusConditionBadge: React.FC = () => {
  const { t } = useTranslation();
  const condition = useSelectedFullLinkBonusCondition();

  return ifNonNullable(
    condition,
    cond => (
      <UnitSelectorDetailConditionBadge>
        {t('status.full_link_bonus')}&nbsp;:&nbsp;{t(`form.full_link_bonus_conditions.${cond}`)}
      </UnitSelectorDetailConditionBadge>
    )
  );
};

const RankUpConditionBadge: React.FC = () => {
  const { t } = useTranslation();
  const condition = useSelectedRankUpCondition();

  return ifNonNullable(
    condition,
    cond => (
      <UnitSelectorDetailConditionBadge>
        {t(`form.rank_up_conditions.${cond}`)}
      </UnitSelectorDetailConditionBadge>
    )
  );
};

export {
  ActiveSkillConditionBadges,
  SkillEffectConditionBadges,
  CoreLinkBonusConditionBadge,
  FullLinkBonusConditionBadge,
  RankUpConditionBadge
};
