/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { ReactElement } from 'react';
import { TFunction } from 'i18next';
import { useTranslation } from 'react-i18next';

import EffectIcon from './EffectIcon';
import { ElectricResist, FireResist, IceResist } from './AttributeResist';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import StatusEffectsView from './StatusEffectsView';
import UnitStatusIcon from './UnitStatusIcon';
import { appendPercentage } from './UnitStatusParameterFormatter';

import {
  AffectedStatus,
  useUnitAffectedEffects,
  useAffectedStatusValue,
  useApValue,
  useUnitDamagedState,
  useHpValuesInSquad
} from '../../../state/status/parameters/unitStatusParameterInSquadState';

import { BattleEffect } from '../../../domain/BattleEffect';
import { calcMicroValue, calcMilliPercentageValue } from '../../../domain/ValueUnit';
import { extractNo, extractType } from '../../../domain/skill/SkillType';
import { hasFormChangeUnitNumber } from '../../../domain/UnitFormValue';

import './StatusParameter.css';
import './UnitStatusParameterInSquad.css';

const StatusIconOverlay: React.FC<{ status: AffectedStatus | 'hp', children: ReactElement }> = ({ status, children }) => {
  const { t } = useTranslation();

  return (
    <OverlayTrigger
      placement="top"
      overlay={<Tooltip id={`tooltip-${status}-status-in-squad`}>{t(`status.${status}`)}</Tooltip>}
    >
      {children}
    </OverlayTrigger>
  );
};

const StatusValueView: React.FC<{ status: AffectedStatus }> = ({ status }) => {
  const value = useAffectedStatusValue(status);
  const percentage = status === 'cri' || status === 'acc' || status === 'eva';

  return (<div>{percentage ? appendPercentage(value) : value}</div>);
};

const StatusParameterCol: React.FC<{ status: AffectedStatus }> = ({ status }) => {
  return (
    <div className="status-parameter-col">
      <StatusIconOverlay status={status}>
        <UnitStatusIcon height={24} width={24} status={status} />
      </StatusIconOverlay>
      <div className="status-parameter-body">
        <div className="status-parameter-value">
          <StatusValueView status={status} />
          <StatusEffectsView className="effects" parameter={status} />
        </div>
      </div>
    </div>
  );
};

const HpParameter: React.FC = () => {
  const [current, max] = useHpValuesInSquad();

  return (<div className="hp-value">{current}&nbsp;/&nbsp;{max}</div>);
};

const HpBar: React.FC = () => {
  const damaged = useUnitDamagedState();

  return damaged === undefined ?
    (<div className="hp-bar nope" />) :
    damaged ?
      (<div className="hp-bar damaged" />) :
      (<div className="hp-bar" />);
};

const HpCol: React.FC = () => {
  return (
    <div className="status-parameter-col">
      <StatusIconOverlay status="hp">
        <UnitStatusIcon height={24} width={24} status="hp" />
      </StatusIconOverlay>
      <div className="status-parameter-body">
        <HpParameter />
        <HpBar />
      </div>
    </div>
  );
};

const ApCol: React.FC = () => {
  const apValue = useApValue();

  return (
    <div className="status-parameter-col">
      <span className="ap-label">AP</span>
      <div className="status-parameter-body">
        <div className="status-parameter-value ap-value">
          {apValue}
        </div>
      </div>
    </div>
  );
};

function getSkillName(
  affectedBy: Extract<BattleEffect['affected_by'], { type: 'ally' }>,
  t: TFunction
): string {
  const form = hasFormChangeUnitNumber(affectedBy) ? affectedBy.form : undefined;
  const defaultKey = `skill:name.${affectedBy.no}.${extractType(affectedBy.skillType)}.${extractNo(affectedBy.skillType)}`;

  return form ?
    t([`${defaultKey}.${form}`, defaultKey]) :
    t(defaultKey);
}

const EffectLabel: React.FC<{ effect: BattleEffect }> = ({ effect }) => {
  const { t } = useTranslation();
  const label =
    'tag' in effect.value ?
      t(`effect:tag.${effect.value.tag}`) :
      effect.affected_by.type === 'equipment' ?
        t(`equipment:${effect.affected_by.id}`) :
        getSkillName(effect.affected_by, t);

  return (<div className="effect-label">{label}{t('effect:tag_separator')}</div>);
};

const EffectDetails: React.FC<{ effect: BattleEffect }> = ({ effect }) => {
  const { t } = useTranslation();
  const value =
    'milliPercentage' in effect.value ?
      calcMilliPercentageValue(effect.value) :
      'microValue' in effect.value ?
        calcMicroValue(effect.value) :
        undefined;

  return (
    <div className="effect-value">
      {t(`effect:effect.description.${effect.effect}`, { value, ...effect.value })}
    </div>
  );
};

const EffectRow: React.FC<{ effect: BattleEffect }> = ({ effect }) => {
  // TODO: Add term & times & affected_by popup
  return (
    <div className="effect-row-in-squad">
      <EffectIcon height={24} width={24} effect={effect.effect} />
      <EffectLabel effect={effect} />
      <EffectDetails effect={effect} />
    </div>
  );
};

const EffectList: React.FC = () => {
  const effects: ReadonlyArray<BattleEffect> = useUnitAffectedEffects();

  return (
    <div className="effect-list-in-squad">
      {effects.map(e => (<EffectRow key={JSON.stringify(e)} effect={e} />))}
    </div>
  );
};

const UnitStatusParameterInSquad: React.FC = () => {
  return (
    <div className="status-parameter-container">
      <div className="status-parameter-row">
        <HpCol />
        <ApCol />
      </div>
      <div className="status-parameter-row">
        <StatusParameterCol status="atk" />
        <StatusParameterCol status="cri" />
      </div>
      <div className="status-parameter-row">
        <StatusParameterCol status="def" />
        <StatusParameterCol status="acc" />
      </div>
      <div className="status-parameter-row">
        <StatusParameterCol status="spd" />
        <StatusParameterCol status="eva" />
      </div>
      <div className="attribute-resist-row">
        <FireResist />
        <IceResist />
        <ElectricResist />
      </div>
      <EffectList />
    </div>
  );
};

export default UnitStatusParameterInSquad;
