/** @jsxRuntime classic */
/** @jsx jsx */
import { CSSObject, Theme, jsx } from '@emotion/react';
import React, { ReactNode } from 'react';
import { Interpolation } from '@emotion/serialize';
import { TFunction } from 'i18next';
import { useTranslation } from 'react-i18next';

import { Badge, Col, Container, Row, Tab } from 'react-bootstrap';

import AreaOfEffectGrid from './AreaOfEffectGrid';
import DamageDealView from './DamageDealView';
import SkillEffectsView from './SkillEffectsView';
import SkillLvDropdown from './SkillLvDropdown';

import { DamageDeal, SkillEffect } from '../../domain/UnitSkill';
import { SkillApCostValue, SkillRangeValue } from '../../domain/UnitSkillData';
import { SkillAreaType } from '../../domain/SkillAreaOfEffect';
import { SkillLv } from '../../domain/UnitSkillLvValue';
import { SkillTabType } from './UnitSkillList';
import { Unit } from '../../domain/Unit';
import { UnitForms } from '../../domain/UnitFormValue';
import { UnitNumber } from '../../domain/UnitBasicInfo';

import { ifNonNullable, ifTruthy } from '../../util/react';

import './RankUpSkillBadge.css';

const skillLabelFontStyle: CSSObject = {
  fontSize: '1.2em',
  color: '#ccc'
};
const skillValueFontSizeStyle: CSSObject = {
  fontSize: '1.2em',
  fontWeight: 'bold'
};
const skillLabelStyle: CSSObject = {
  ...skillLabelFontStyle,
  display: 'inline-block',
  width: '4em'
};

const NestedContainer: React.FC<{ css?: Interpolation<Theme>, children: ReactNode }> = ({ children, ...others }) => (
  <Container
    {...others}
    fluid
    css={{ padding: 0 }}
  >
    {children}
  </Container>
);

type SkillProp = {
  unitNumber: UnitNumber,
  name: string,
  lv: SkillLv,
  damage_deal?: DamageDeal,
  effects: ReadonlyArray<SkillEffect>,
  area: SkillAreaType,
  cost?: SkillApCostValue,
  range?: SkillRangeValue,
  rank_up?: boolean,
  form?: UnitForms
}

type ActiveSkillTabType  = Exclude<SkillTabType, typeof SkillTabType['Passive1' | 'Passive2' | 'Passive3']>
type PassiveSkillTabType = Exclude<SkillTabType, typeof SkillTabType['Active1' | 'Active2']>

function activeSkillProp(
  eventKey: ActiveSkillTabType,
  unit: Unit | undefined,
  t: TFunction
): Omit<SkillProp, 'rank_up'> | undefined {
  if (!unit) {
    return undefined;
  }

  const unitNumber = unit.unitNumber;
  const { no, skill, skillLv } = eventKey === 'active1' ?
    { no: 1, skill: unit.active1Skill, skillLv: unit.skillLv.active1Lv } :
    { no: 2, skill: unit.active2Skill, skillLv: unit.skillLv.active2Lv };
  const form = 'form' in skill ? skill.form : undefined;

  return {
    unitNumber,
    name: form ?
      t('skill:form_active', { no, unit: unitNumber, form }) :
      t('skill:active', { no, unit: unitNumber }),
    lv: skillLv,
    area: skill.area,
    damage_deal: skill.damage_deal,
    effects: skill.effects,
    cost: skill.cost,
    range: skill.range,
    form
  };
}

function passiveSkillProp(
  eventKey: PassiveSkillTabType,
  unit: Unit | undefined,
  t: TFunction
): Omit<SkillProp, 'damage_deal' | 'cost' | 'range'> | undefined {
  if (!unit) {
    return undefined;
  }

  const unitNumber = unit.unitNumber;
  const { no, skill, skillLv } = (() => {
    switch (eventKey) {
    case 'passive1':
      return { no: 1, skill: unit.passive1Skill, skillLv: unit.skillLv.passive1Lv };
    case 'passive2':
      return { no: 2, skill: unit.passive2Skill, skillLv: unit.skillLv.passive2Lv };
    case 'passive3':
      return { no: 3, skill: unit.passive3Skill, skillLv: unit.skillLv.passive3Lv };
    }
  })();
  const form = skill && 'form' in skill ? skill.form : undefined;

  return skill && skillLv && {
    unitNumber,
    name: form ?
      t('skill:form_passive', { no, unit: unitNumber, form }) :
      t('skill:passive', { no, unit: unitNumber }),
    lv: skillLv,
    area: skill.area,
    effects: 'effects' in skill ? skill.effects : skill.equipment_effects,
    form,
    rank_up: skill.rank_up
  };
}

const SkillPane: React.FC<{
  eventKey: SkillTabType,
  skill?: SkillProp,
  onSkillLvChange: (lv: SkillLv) => void
}> = ({ eventKey, skill, onSkillLvChange }) => {
  const { t } = useTranslation();

  return (
    <Tab.Pane eventKey={eventKey}>
      {ifNonNullable(
        skill,
        ({ unitNumber, name, lv, damage_deal, effects, area, cost, range, rank_up, form }) => (
          <Container
            fluid
            css={{
              paddingTop: 5
            }}
          >
            <Row css={{ fontSize: '1.4em', color: '#eee' }}>
              <Col xs={8} sm={9}>
                <div
                  css={{
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap'
                  }}
                  title={name}
                >
                  {name}
                </div>
              </Col>
              <Col xs={4} sm={3}>
                <div css={{
                  display: 'flex',
                  userSelect: 'none'
                }}>
                  <span>{t('skill.lv')}</span>
                  <SkillLvDropdown
                    css={{ marginLeft: 5, marginRight: 'auto', flexShrink: 0 }}
                    lv={lv}
                    onChange={onSkillLvChange}
                  />
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={{ order: 'last', span: 12 }} sm={{ order: 'first', span: 9 }}>
                {ifNonNullable(damage_deal, v => (<DamageDealView damage_deal={v} area={area} />))}
                <SkillEffectsView effects={effects} unitNumber={unitNumber} area={area} />
              </Col>
              <Col xs={{ order: 'first', span: 12 }} sm={{ order: 'last', span: 3 }}>
                <NestedContainer css={{ userSelect: 'none' }}>
                  <Row>
                    <Col xs={8} sm={12}>
                      <NestedContainer>
                        <Row css={{ '& > div': { marginTop: 5 } }}>
                          <Col xs={{ order: 1, span: 12 }} sm={{ order: 2, span: 12 }}>
                            <span css={skillLabelStyle}>{t('skill.ap')}</span>
                            <span css={{ ...skillValueFontSizeStyle, color: '#0af' }}>{cost ?? t('empty')}</span>
                          </Col>
                          <Col xs={{ order: 2, span: 12 }} sm={{ order: 3, span: 12 }}>
                            <span css={skillLabelStyle}>{t('skill.range')}</span>
                            <span css={{ ...skillValueFontSizeStyle, color: '#cc0' }}>{range ?? t('empty')}</span>
                          </Col>
                          {ifTruthy(
                            !!rank_up || !!form,
                            (<Col xs={{ order: 3, span: 12 }} sm={{ order: 1, span: 12 }}>
                              {ifTruthy(!!rank_up, (<div css={{ fontSize: '1.2em' }} ><Badge variant="rank-up-skill">{t('skill.rank_up')}</Badge></div>))}
                              {ifNonNullable(form, v => (<div css={{ fontSize: '1.2em' }} ><Badge variant="secondary">{t(`effect:form.${v}`)}</Badge></div>))}
                            </Col>)
                          )}
                        </Row>
                      </NestedContainer>
                    </Col>
                    <Col xs={4} sm={12} css={{ '& > div': { marginTop: 5 } }}>
                      <div>
                        <span css={{ color: '#ccc' }}>{t('skill.area')}</span>
                      </div>
                      <AreaOfEffectGrid css={{ width: 100 }} area={area} />
                    </Col>
                  </Row>
                </NestedContainer>
              </Col>
            </Row>
          </Container>
        )
      )}
    </Tab.Pane>
  );
};

export const Active1SkillPane: React.FC<{
  unit: Unit | undefined,
  onSkillLvChange: (lv: SkillLv) => void
}> = ({ unit, onSkillLvChange }) => {
  const { t } = useTranslation();
  const eventKey = 'active1';

  return (
    <SkillPane
      eventKey={eventKey}
      onSkillLvChange={onSkillLvChange}
      skill={activeSkillProp(eventKey, unit, t)}
    />
  );
};

export const Active2SkillPane: React.FC<{
  unit: Unit | undefined,
  onSkillLvChange: (lv: SkillLv) => void
}> = ({ unit, onSkillLvChange }) => {
  const { t } = useTranslation();
  const eventKey = 'active2';

  return (
    <SkillPane
      eventKey={eventKey}
      onSkillLvChange={onSkillLvChange}
      skill={activeSkillProp(eventKey, unit, t)}
    />
  );
};

export const Passive1SkillPane: React.FC<{
  unit: Unit | undefined
  onSkillLvChange: (lv: SkillLv) => void
}> = ({ unit, onSkillLvChange }) => {
  const { t } = useTranslation();
  const eventKey = 'passive1';

  return (
    <SkillPane
      eventKey={eventKey}
      onSkillLvChange={onSkillLvChange}
      skill={passiveSkillProp(eventKey, unit, t)}
    />
  );
};

export const Passive2SkillPane: React.FC<{
  unit: Unit | undefined
  onSkillLvChange: (lv: SkillLv) => void
}> = ({ unit, onSkillLvChange }) => {
  const { t } = useTranslation();
  const eventKey = 'passive2';

  return (
    <SkillPane
      eventKey={eventKey}
      onSkillLvChange={onSkillLvChange}
      skill={passiveSkillProp(eventKey, unit, t)}
    />
  );
};

export const Passive3SkillPane: React.FC<{
  unit: Unit | undefined
  onSkillLvChange: (lv: SkillLv) => void
}> = ({ unit, onSkillLvChange }) => {
  const { t } = useTranslation();
  const eventKey = 'passive3';

  return (
    <SkillPane
      eventKey={eventKey}
      onSkillLvChange={onSkillLvChange}
      skill={passiveSkillProp(eventKey, unit, t)}
    />
  );
};
