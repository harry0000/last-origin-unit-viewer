/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { ReactElement } from 'react';
import { nanoid } from 'nanoid';
import { useTranslation } from 'react-i18next';

import { Effect } from '../../../domain/Effect';

import EffectIcon from './EffectIcon';
import { Image, OverlayTrigger, Popover, Tooltip } from 'react-bootstrap';
import { SquadUnitElectricResist, SquadUnitFireResist, SquadUnitIceResist } from './AttributeResist';
import { SquadUnitApEffectsPopoverView, SquadUnitStatusEffectsView } from './StatusEffectsView';
import { SquadUnitApplyingEffectViewModel } from './SquadUnitStatusEffectsViewModel';
import UnitStatusIcon from './UnitStatusIcon';
import { appendPercentage } from './UnitStatusParameterFormatter';

import { EnhanceableStatus } from '../../../state/status/parameters/UnitLvStatusState';
import {
  useSquadUnitApplyingEffects,
  useSquadUnitStatusValue,
  useSquadUnitApValue,
  useSquadUnitDamagedState,
  useSquadUnitHpValues
} from '../../../state/status/parameters/SquadUnitStatusParameterHook';

import './StatusParameter.css';
import './SquadUnitStatusParameter.css';

const StatusIconOverlay: React.FC<{ status: EnhanceableStatus | 'spd', children: ReactElement }> = ({ status, children }) => {
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

const StatusValueView: React.FC<{ status: Exclude<EnhanceableStatus, 'hp'> | 'spd' }> = ({ status }) => {
  const value = useSquadUnitStatusValue(status);
  const percentage = status === 'cri' || status === 'acc' || status === 'eva';

  return (<div>{percentage ? appendPercentage(value) : value}</div>);
};

const StatusParameterCol: React.FC<{ status: Exclude<EnhanceableStatus, 'hp'> | 'spd' }> = ({ status }) => {
  return (
    <div className="status-parameter-col">
      <StatusIconOverlay status={status}>
        <UnitStatusIcon height={24} width={24} status={status} />
      </StatusIconOverlay>
      <div className="status-parameter-body">
        <div className="status-parameter-value">
          <StatusValueView status={status} />
          <SquadUnitStatusEffectsView className="effects" parameter={status} />
        </div>
      </div>
    </div>
  );
};

const HpParameter: React.FC = () => {
  const [current, max] = useSquadUnitHpValues();

  return (<div className="hp-value">{current}&nbsp;/&nbsp;{max}</div>);
};

const HpBar: React.FC = () => {
  const damaged = useSquadUnitDamagedState();

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
  const apValue = useSquadUnitApValue();

  return (
    <div className="status-parameter-col">
      <span className="ap-label">AP</span>
      <div className="status-parameter-body">
        <div className="status-parameter-value ap-value">
          <SquadUnitApEffectsPopoverView>
            <span>{apValue}</span>
          </SquadUnitApEffectsPopoverView>
        </div>
      </div>
    </div>
  );
};

const EffectLabel: React.FC<{ effect: SquadUnitApplyingEffectViewModel }> = ({ effect: { label: { type, key } } }) => {
  const { t } = useTranslation();
  const label =
    type === 'tag' ? t('effect:with_tag_quotes', { value: t(key) }) : t(key);

  return (<div className="effect-label">{label}{t('effect:tag_separator')}</div>);
};

const EffectDetails: React.FC<{ effect: SquadUnitApplyingEffectViewModel }> = ({ effect: { description: { key, options }, additions } }) => {
  const { t } = useTranslation();
  const translateEffects = (): string => {
    return 'effect' in options && options.effect ?
      t(`effect:effect.name.${options.effect}`) :
      'effects' in options && options.effects ?
        options.effects.map(e => t(`effect:effect.name.${e}`)).join(t('effect:separator')) :
        '';
  };
  const translateAddition = (addition: SquadUnitApplyingEffectViewModel['additions'][number]): string  => {
    switch (addition.type) {
    case 'rate':
      return t(`status.effect.rate.${addition.key}`, addition.options);
    case 'times':
      return t('effect:times', { count: addition.value });
    case 'cannot_be_dispelled':
      return t('effect:cannot_be_dispelled');
    default: {
      const _exhaustiveCheck: never = addition;
      return _exhaustiveCheck;
    }
    }
  };

  return (
    <div className="effect-value">
      {
        key === Effect.PreventsEffect ?
          t(`effect:effect.description.${key}`, { ...options, effects: translateEffects() }) :
          t(`effect:effect.description.${key}`, options)
      }
      {
        additions.length > 0 ?
          ` (${additions.map(translateAddition).join(t('effect:separator'))})` :
          null
      }
    </div>
  );
};

const EffectTerm: React.FC<{ effect: SquadUnitApplyingEffectViewModel }> = ({ effect: { term } }) => {
  const { t } = useTranslation();

  return (<div className="effect-term">{term ? t(term.key, term.options) : ''}</div>);
};

const EffectSource: React.FC<{ effect: SquadUnitApplyingEffectViewModel }> = ({ effect: { type, affected } }) => {
  const { t } = useTranslation();
  const isAllySkill = affected.type === 'ally';
  const source = t(affected.source.key, affected.source.options);
  const [src, originalWidth] =
    isAllySkill ?
      [`${process.env.PUBLIC_URL}/icon/placeholder_core_link.webp`, '64w'] :
      [`${process.env.PUBLIC_URL}/icon/placeholder_${affected.type}.webp`, '96w'];

  const popover = (
    <Popover id="popover-effect-source" className="skill-effect-details">
      <Popover.Content>
        <div className="skill-effect-details-body">
          <div>{source}</div>
          {isAllySkill ?
            (<div>
              {t(
                'status.effect.source.skill',
                {
                  type: t(`skill.type.${affected.skill.type}`),
                  name: t(affected.skill.name),
                  lv: affected.skill.lv
                }
              )}
            </div>) :
            null}
          <div className="skill-effect-type">{t(`skill.effect.type.${type}`)}</div>
        </div>
      </Popover.Content>
    </Popover>
  );

  return (
    <div className="effect-source">
      <OverlayTrigger
        placement="bottom"
        overlay={popover}
      >
        <Image
          width={20}
          height={20}
          rounded
          draggable="false"
          alt={source}
          src={src}
          srcSet={`${src} ${originalWidth}`}
        />
      </OverlayTrigger>
    </div>
  );
};

const EffectRow: React.FC<{ effect: SquadUnitApplyingEffectViewModel }> = ({ effect }) => {
  return (
    <div className="effect-row-in-squad">
      <EffectIcon height={24} width={24} effect={effect.effect} />
      <EffectLabel effect={effect} />
      <EffectDetails effect={effect} />
      <EffectTerm effect={effect} />
      <EffectSource effect={effect} />
    </div>
  );
};

const EffectList: React.FC = () => {
  const effects = useSquadUnitApplyingEffects();

  return (
    <div className="effect-list-in-squad">
      {effects.map(e => (<EffectRow key={nanoid()} effect={e} />))}
    </div>
  );
};

const SquadUnitStatusParameter: React.FC = () => {
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
        <SquadUnitFireResist />
        <SquadUnitIceResist />
        <SquadUnitElectricResist />
      </div>
      <EffectList />
    </div>
  );
};

export default SquadUnitStatusParameter;
