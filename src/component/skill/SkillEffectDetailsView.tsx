/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { Badge } from 'react-bootstrap';
import { SkillEffectDetailsEntry, translateSkillEffectDetails } from './SkillEffectsTranslator';

import { AroundSkillEffectValue, SkillEffect, SkillEffectValue } from '../../domain/skill/UnitSkills';
import { SkillAreaType } from '../../domain/skill/SkillAreaOfEffect';

import { ifNonNullable } from '../../util/react';

const EffectDetailRow: React.FC<{
  tag?: string,
  detail: string,
  term?: string
}> = ({ tag, detail, term }) => {
  const { t } = useTranslation();

  return (
    <div
      css={{
        display: 'flex',
        fontWeight: 'bold',
        borderRadius: 3,
        backgroundColor: '#1c3042',
        padding: '3px 8px',
        marginTop: 5
      }}
    >
      <div>
        {ifNonNullable(tag, v => (<span>{v}{t('effect:tag_separator')}</span>))}
        <span>{detail}</span>
      </div>
      <div
        css={{
          marginLeft: 'auto',
          textAlign: 'right',
          flexShrink: 0
        }}>
        {ifNonNullable(term, v => (<span css={{ marginLeft: 10, color: '#aaa', fontSize: '0.9em' }}>{v}</span>))}
      </div>
    </div>
  );
};

const EffectDetail: React.FC<{
  entry: SkillEffectDetailsEntry
}> = ({ entry }) => {
  const { t } = useTranslation();
  const details = translateSkillEffectDetails(entry, t);

  return 'length' in details ?
    (<React.Fragment>
      {details.map(detail => (<EffectDetailRow key={JSON.stringify(detail)} {...detail} />))}
    </React.Fragment>) :
    (<EffectDetailRow {...details} />);
};

const SkillEffectDetailsView: React.FC<{
  className?: string,
  target: `${keyof SkillEffect['details']}`,
  details: NonNullable<SkillEffectValue | AroundSkillEffectValue>,
  area: SkillAreaType
}> = ({ className, target, details, area }) => {
  const { t } = useTranslation();
  const targetKey =
    target === 'target' ?
      area === 'single' ? 'single' : 'area' :
      target;

  return (
    <div className={className}>
      <div><Badge variant="light">{t(`effect:effect.target.${targetKey}`)}</Badge></div>
      {Object.entries(details).map(entry => (<EffectDetail key={entry[0]} entry={entry as SkillEffectDetailsEntry}/>))}
    </div>
  );
};

export default SkillEffectDetailsView;
