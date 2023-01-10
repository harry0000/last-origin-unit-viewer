/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

import { Badge } from 'react-bootstrap';

import {
  useConditionEmptyBadge,
  useSelectedActiveSkillAreaCondition,
  useSelectedActiveSkillConditions,
  useSelectedCoreLinkBonusCondition,
  useSelectedFullLinkBonusCondition,
  useSelectedRankUpCondition,
  useSelectedSkillEffectConditions
} from '../../state/selector/UnitSelectorHook';

import { ifNonNullable, ifTruthy } from '../../util/react';

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

const ConditionEmptyBadges: React.FC = () => {
  const { t } = useTranslation();
  const show = useConditionEmptyBadge();

  return ifTruthy(
    show,
    <UnitSelectorDetailConditionBadge>{t('filter.badge.empty')}</UnitSelectorDetailConditionBadge>
  );
};

const ActiveSkillConditionBadges: React.FC = () => {
  const { t } = useTranslation();
  const conditions = useSelectedActiveSkillConditions();

  return (
    <React.Fragment>
      {conditions.map(condition => (
        <UnitSelectorDetailConditionBadge key={condition}>
          {t('filter.badge.active_skill', { condition })}
        </UnitSelectorDetailConditionBadge>
      ))}
    </React.Fragment>
  );
};

const ActiveSkillAreaConditionBadge: React.FC = () => {
  const { t } = useTranslation();
  const areaCondition = useSelectedActiveSkillAreaCondition();

  return ifNonNullable(
    areaCondition,
    condition => (
      <UnitSelectorDetailConditionBadge>
        {t('filter.badge.active_skill_area', { condition })}
      </UnitSelectorDetailConditionBadge>
    )
  );
};

const SkillEffectConditionBadges: React.FC = () => {
  const { t } = useTranslation();
  const conditions = useSelectedSkillEffectConditions();

  return (
    <React.Fragment>
      {conditions.map(condition => (
        <UnitSelectorDetailConditionBadge key={condition}>
          {t('filter.badge.skill_effect', { condition })}
        </UnitSelectorDetailConditionBadge>
      ))}
    </React.Fragment>
  );
};

const CoreLinkBonusConditionBadge: React.FC = () => {
  const { t } = useTranslation();
  const coreLinkBonusCondition = useSelectedCoreLinkBonusCondition();

  return ifNonNullable(
    coreLinkBonusCondition,
    condition => (
      <UnitSelectorDetailConditionBadge>
        {t('filter.badge.core_link_bonus', { condition })}
      </UnitSelectorDetailConditionBadge>
    )
  );
};

const FullLinkBonusConditionBadge: React.FC = () => {
  const { t } = useTranslation();
  const fullLinkBonusCondition = useSelectedFullLinkBonusCondition();

  return ifNonNullable(
    fullLinkBonusCondition,
    condition => (
      <UnitSelectorDetailConditionBadge>
        {t('filter.badge.full_link_bonus', { condition })}
      </UnitSelectorDetailConditionBadge>
    )
  );
};

const RankUpConditionBadge: React.FC = () => {
  const { t } = useTranslation();
  const rankUpCondition = useSelectedRankUpCondition();

  return ifNonNullable(
    rankUpCondition,
    condition => (
      <UnitSelectorDetailConditionBadge>
        {t('filter.badge.rank_up', { condition })}
      </UnitSelectorDetailConditionBadge>
    )
  );
};

export {
  ActiveSkillAreaConditionBadge,
  ActiveSkillConditionBadges,
  ConditionEmptyBadges,
  SkillEffectConditionBadges,
  CoreLinkBonusConditionBadge,
  FullLinkBonusConditionBadge,
  RankUpConditionBadge
};
