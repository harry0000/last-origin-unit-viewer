/** @jsxRuntime classic */
/** @jsx jsx */
import { CSSObject, Theme, jsx } from '@emotion/react';
import React, { ReactNode } from 'react';
import { Interpolation } from '@emotion/serialize';
import { useTranslation } from 'react-i18next';

import AreaOfEffectGrid from './AreaOfEffectGrid';
import { Badge, Col, Container, Row, Tab } from 'react-bootstrap';
import DamageDealView from './DamageDealView';
import EffectsAsEquipmentDescriptionView from './EffectsAsEquipmentDescriptionView';
import NumberValueDropdown from '../common/NumberValueDropdown';
import SkillEffectsView from './SkillEffectsView';

import { SkillLv } from '../../domain/skill/UnitSkillLvValue';
import { SkillType } from '../../domain/skill/SkillType';
import { UnitBasicInfo } from '../../domain/UnitBasicInfo';

import {
  useFormChangeSkillBadge,
  useRankUpSkillBadge,
  useSkillCost,
  useSkillLvState,
  useSkillName,
  useSkillRange
} from '../../state/skill/unitSkillState';
import { useSelectedUnit } from '../../state/selector/unitSelectorState';

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
const skillBadgeStyle: CSSObject = {
  fontSize: '1.2em',
  '& > .badge': {
    whiteSpace: 'normal'
  }
};

const NestedContainer: React.FC<{ css?: Interpolation<Theme>, children: ReactNode }> = ({ children, ...rest }) => (
  <Container
    {...rest}
    fluid
    css={{ padding: 0 }}
  >
    {children}
  </Container>
);

const SkillNameView: React.FC<{ skillType: SkillType, unit: UnitBasicInfo }> = ({ skillType, unit }) => {
  const name = useSkillName(skillType, unit);

  return (
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
  );
};

const SkillCostView: React.FC<{ skillType: SkillType, unit: UnitBasicInfo }> = ({ skillType, unit }) => {
  const cost = useSkillCost(skillType, unit);

  return (<span css={{ ...skillValueFontSizeStyle, color: '#0af' }}>{cost}</span>);
};

const SkillRangeView: React.FC<{ skillType: SkillType, unit: UnitBasicInfo }> = ({ skillType, unit }) => {
  const range = useSkillRange(skillType, unit);

  return (<span css={{ ...skillValueFontSizeStyle, color: '#cc0' }}>{range}</span>);
};

const RankUpSkillBadge: React.FC<{ skillType: SkillType, unit: UnitBasicInfo }> = ({ skillType, unit }) => {
  const { t } = useTranslation();
  const isRankUpSkill = useRankUpSkillBadge(skillType, unit);

  return (
    ifTruthy(
      isRankUpSkill,
      (<div css={skillBadgeStyle}><Badge variant="rank-up-skill">{t('skill.rank_up')}</Badge></div>)
    )
  );
};

const FormChangeSkillBadge: React.FC<{ skillType: SkillType, unit: UnitBasicInfo }> = ({ skillType, unit }) => {
  const { t } = useTranslation();
  const form = useFormChangeSkillBadge(skillType, unit);

  return (
    ifNonNullable(
      form,
      v => (<div css={skillBadgeStyle}><Badge variant="secondary">{t(`effect:form.${v}`)}</Badge></div>)
    )
  );
};

const skillLvItems = [...Array(10)].map((v, i) => 10 - i) as ReadonlyArray<SkillLv>;

const SkillLvDropdown: React.FC<{ skillType: SkillType, unit: UnitBasicInfo }> = ({ skillType, unit }) => {
  const { t } = useTranslation();
  const [skillLv, setSkillLv] = useSkillLvState(skillType, unit);

  return (
    <div css={{
      display: 'flex',
      userSelect: 'none'
    }}>
      <span css={{ marginRight: 5 }}>{t('lv')}</span>
      <NumberValueDropdown
        css={{ flexShrink: 0 }}
        id="skill-lv-dropdown"
        items={skillLvItems}
        value={skillLv}
        onChange={setSkillLv}
      />
    </div>
  );
};

const SkillPane: React.FC<{ eventKey: SkillType }> = ({ eventKey }) => {
  const { t } = useTranslation();
  const selectedUnit = useSelectedUnit();

  return (
    <Tab.Pane eventKey={eventKey}>
      {ifNonNullable(
        selectedUnit,
        unit => (
          <Container
            fluid
            css={{ paddingTop: 5 }}
          >
            <Row css={{ fontSize: '1.4em', color: '#eee' }}>
              <Col xs={8} sm={9}>
                <SkillNameView skillType={eventKey} unit={unit} />
              </Col>
              <Col xs={4} sm={3}>
                <SkillLvDropdown skillType={eventKey} unit={unit} />
              </Col>
            </Row>
            <Row>
              <Col xs={{ order: 'last', span: 12 }} sm={{ order: 'first', span: 9 }}>
                <DamageDealView skillType={eventKey} unit={unit} />
                <EffectsAsEquipmentDescriptionView skillType={eventKey} unit={unit} />
                <SkillEffectsView skillType={eventKey} unit={unit} />
              </Col>
              <Col xs={{ order: 'first', span: 12 }} sm={{ order: 'last', span: 3 }}>
                <NestedContainer css={{ userSelect: 'none' }}>
                  <Row>
                    <Col xs={8} sm={12}>
                      <NestedContainer>
                        <Row css={{ '& > div': { marginTop: 5 } }}>
                          <Col xs={{ order: 1, span: 12 }} sm={{ order: 2, span: 12 }}>
                            <span css={skillLabelStyle}>{t('skill.ap')}</span>
                            <SkillCostView skillType={eventKey} unit={unit} />
                          </Col>
                          <Col xs={{ order: 2, span: 12 }} sm={{ order: 3, span: 12 }}>
                            <span css={skillLabelStyle}>{t('skill.range')}</span>
                            <SkillRangeView skillType={eventKey} unit={unit} />
                          </Col>
                          <Col xs={{ order: 3, span: 12 }} sm={{ order: 1, span: 12 }}>
                            <FormChangeSkillBadge skillType={eventKey} unit={unit} />
                            <RankUpSkillBadge skillType={eventKey} unit={unit} />
                          </Col>
                        </Row>
                      </NestedContainer>
                    </Col>
                    <Col xs={4} sm={12} css={{ '& > div': { marginTop: 5 } }}>
                      <div>
                        <span css={{ color: '#ccc' }}>{t('skill.area')}</span>
                      </div>
                      <AreaOfEffectGrid css={{ width: 100 }} skillType={eventKey} unit={unit} />
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

export default SkillPane;
