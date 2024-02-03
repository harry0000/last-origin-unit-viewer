/** @jsx jsx */
import { jsx } from '@emotion/react';
import { CSSPropertiesWithMultiValues } from '@emotion/serialize/dist/declarations/types';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { ActiveSkillAreaOfEffectCondition } from '../../domain/selector/ActiveSkillAreaOfEffectCondition';
import { ActiveSkillCondition } from '../../domain/selector/ActiveSkillCondition';
import {
  CoreLinkBonusCondition,
  FullLinkBonusCondition
} from '../../domain/selector/CoreLinkBonusCondition';
import {
  DefensiveSkillEffectCondition,
  OffensiveSkillEffectCondition,
  OtherSkillEffectCondition,
  SkillEffectCondition,
  StatusSkillEffectCondition
} from '../../domain/selector/SkillEffectCondition';
import { RankUpCondition } from '../../domain/selector/RankUpCondition';

import { Accordion } from 'react-bootstrap';
import {
  ActiveSkillAreaConditionBadge,
  ActiveSkillConditionBadges,
  ConditionEmptyBadges,
  CoreLinkBonusConditionBadge,
  FullLinkBonusConditionBadge,
  RankUpConditionBadge,
  SkillEffectConditionBadges
} from './UnitSelectorDetailConditionBadge';
import UnitDetailConditionSelectorButton from './UnitDetailConditionSelectorButton';
import UnitDetailConditionSelectorRadioButton from './UnitDetailConditionSelectorRadioButton';

import {
  useActiveSkillAreaConditionSelector,
  useActiveSkillConditionSelector,
  useCoreLinkBonusConditionSelector,
  useFullLinkBonusConditionSelector,
  useRankUpConditionSelector,
  useSkillEffectConditionSelector
} from '../../state/selector/UnitSelectorHook';

import { ifTruthy } from '../../util/react';

import './UnitDetailConditionSelector.css';

const collapseBackground: CSSPropertiesWithMultiValues = {
  background:
    [
      'linear-gradient(135deg, transparent 5.5em, #0a101e 5.5em, #0a101e 5.9em, transparent 5.9em),',
      'linear-gradient(135deg, transparent 1em, #ffcc00 1em, #ffcc00 5.5em, transparent 5.5em),',
      'linear-gradient(45deg,  transparent 4em, #e0e0e0 4em, #e0e0e0 6.5em, transparent 6.5em)',
      'no-repeat'
    ].join(' ')
};

const expandBackground: CSSPropertiesWithMultiValues = {
  background:
    [
      'linear-gradient(45deg,  transparent 5.5em, #0a101e 5.5em, #0a101e 5.9em, transparent 5.9em),',
      'linear-gradient(45deg,  transparent 1em, #ffcc00 1em, #ffcc00 5.5em, transparent 5.5em),',
      'linear-gradient(135deg, transparent 4em, #e0e0e0 4em, #e0e0e0 6.5em, transparent 6.5em)',
      'no-repeat'
    ].join(' ')
};

const ActiveSkillConditionSelector: React.FC<{ condition: ActiveSkillCondition }> = ({ condition }) => {
  const { t } = useTranslation();
  const [selected, toggle] = useActiveSkillConditionSelector(condition);

  return (
    <UnitDetailConditionSelectorButton
      className="unit-condition-selector"
      selected={selected}
      onSelect={toggle}
    >
      {t(`form.active_skill_conditions.${condition}`)}
    </UnitDetailConditionSelectorButton>
  );
};

const ActiveSkillAreaConditionSelector: React.FC<{ condition: ActiveSkillAreaOfEffectCondition | undefined }> = ({ condition }) => {
  const { t } = useTranslation();
  const [selected, select] = useActiveSkillAreaConditionSelector(condition);

  return (
    <UnitDetailConditionSelectorRadioButton
      className="unit-condition-selector"
      selected={selected}
      onSelect={select}
    >
      {condition ?
        t(`form.active_skill_area_conditions.${condition}`) :
        t('form.core_link_bonus_conditions.empty')
      }
    </UnitDetailConditionSelectorRadioButton>
  );
};

const SkillEffectConditionSelector: React.FC<{ condition: SkillEffectCondition }> = ({ condition }) => {
  const { t } = useTranslation();
  const [selected, toggle] = useSkillEffectConditionSelector(condition);

  return (
    <UnitDetailConditionSelectorButton
      className="unit-condition-selector"
      selected={selected}
      onSelect={toggle}
    >
      {t(`form.skill_effect_conditions.${condition}`)}
    </UnitDetailConditionSelectorButton>
  );
};

const CoreLinkBonusConditionSelector: React.FC<{ condition: CoreLinkBonusCondition | undefined }> = ({ condition }) => {
  const { t } = useTranslation();
  const [selected, select] = useCoreLinkBonusConditionSelector(condition);

  return (
    <UnitDetailConditionSelectorRadioButton
      className="unit-condition-selector"
      selected={selected}
      onSelect={select}
    >
      {condition ?
        t(`form.core_link_bonus_conditions.${condition}`) :
        t('form.core_link_bonus_conditions.empty')
      }
    </UnitDetailConditionSelectorRadioButton>
  );
};

const FullLinkBonusConditionSelector: React.FC<{ condition: FullLinkBonusCondition | undefined }> = ({ condition }) => {
  const { t } = useTranslation();
  const [selected, select] = useFullLinkBonusConditionSelector(condition);

  return (
    <UnitDetailConditionSelectorRadioButton
      className="unit-condition-selector"
      selected={selected}
      onSelect={select}
    >
      {condition ?
        t(`form.full_link_bonus_conditions.${condition}`) :
        t('form.full_link_bonus_conditions.empty')
      }
    </UnitDetailConditionSelectorRadioButton>
  );
};

const RankUpConditionSelector: React.FC<{ condition: RankUpCondition | undefined }> = ({ condition }) => {
  const { t } = useTranslation();
  const [selected, select] = useRankUpConditionSelector(condition);

  return (
    <UnitDetailConditionSelectorRadioButton
      className="unit-condition-selector"
      selected={selected}
      onSelect={select}
    >
      {condition ?
        t(`form.rank_up_conditions.${condition}`) :
        t('form.rank_up_conditions.empty')
      }
    </UnitDetailConditionSelectorRadioButton>
  );
};

const UnitDetailConditionsSelector: React.FC = () => {
  const { t } = useTranslation();
  const [collapsed, setCollapsed] = useState(true);

  return (
    <Accordion onSelect={() => setCollapsed(prev => !prev)}>
      <Accordion.Toggle as={'div'} eventKey="0">
        <div
          css={{
            color: 'black',
            fontSize: '0.8em',
            fontWeight: 'bold',
            paddingLeft: '1.9em',
            margin: '3px 0',
            cursor: 'pointer',
            userSelect: 'none',
            ...(collapsed ? expandBackground : collapseBackground)
          }}
        >
          {t('form.unit_detail_condition')}
        </div>
        <div
          css={{
            borderTop: '#ccc solid 2px',
            cursor: 'pointer'
          }}
        >
          {ifTruthy(
            collapsed,
            (<React.Fragment>
              <ConditionEmptyBadges />
              <ActiveSkillConditionBadges />
              <ActiveSkillAreaConditionBadge />
              <SkillEffectConditionBadges />
              <CoreLinkBonusConditionBadge />
              <FullLinkBonusConditionBadge />
              <RankUpConditionBadge />
            </React.Fragment>)
          )}
        </div>
      </Accordion.Toggle>
      <Accordion.Collapse eventKey="0">
        <React.Fragment>
          <section>
            <div className="unit-detail-condition-header">{t('filter.active_skill')}</div>
            {Object.values(ActiveSkillCondition).map(condition => (
              <ActiveSkillConditionSelector key={condition} condition={condition} />
            ))}
          </section>
          <section>
            <div className="unit-detail-condition-header">{t('filter.active_skill_area')}</div>
            {[undefined, ...Object.values(ActiveSkillAreaOfEffectCondition)].map(condition => (
              <ActiveSkillAreaConditionSelector key={`${condition}`} condition={condition} />
            ))}
          </section>
          <section>
            <div className="unit-detail-condition-header">{t('filter.status_skill_effect')}</div>
            {Object.values(StatusSkillEffectCondition).map(condition => (
              <SkillEffectConditionSelector key={condition} condition={condition} />
            ))}
          </section>
          <section>
            <div className="unit-detail-condition-header">{t('filter.offensive_skill_effect')}</div>
            {Object.values(OffensiveSkillEffectCondition).map(condition => (
              <SkillEffectConditionSelector key={condition} condition={condition} />
            ))}
          </section>
          <section>
            <div className="unit-detail-condition-header">{t('filter.defensive_skill_effect')}</div>
            {Object.values(DefensiveSkillEffectCondition).map(condition => (
              <SkillEffectConditionSelector key={condition} condition={condition} />
            ))}
          </section>
          <section>
            <div className="unit-detail-condition-header">{t('filter.other_skill_effect')}</div>
            {Object.values(OtherSkillEffectCondition).map(condition => (
              <SkillEffectConditionSelector key={condition} condition={condition} />
            ))}
          </section>
          <section>
            <div className="unit-detail-condition-header">{t('filter.core_link_bonus')}</div>
            {[undefined, ...Object.values(CoreLinkBonusCondition)].map(condition => (
              <CoreLinkBonusConditionSelector key={`${condition}`} condition={condition} />
            ))}
          </section>
          <section>
            <div className="unit-detail-condition-header">{t('filter.full_link_bonus')}</div>
            {[undefined, ...Object.values(FullLinkBonusCondition)].map(condition => (
              <FullLinkBonusConditionSelector key={`${condition}`} condition={condition} />
            ))}
          </section>
          <section>
            <div className="unit-detail-condition-header">{t('filter.rank_up')}</div>
            {[undefined, ...Object.values(RankUpCondition)].map(condition => (
              <RankUpConditionSelector key={`${condition}`} condition={condition} />
            ))}
          </section>
        </React.Fragment>
      </Accordion.Collapse>
    </Accordion>
  );
};

export default UnitDetailConditionsSelector;
