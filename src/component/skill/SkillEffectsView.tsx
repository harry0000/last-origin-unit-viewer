/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';

import SkillEffectConditionView from './SkillEffectConditionView';
import SkillEffectDetailsView from './SkillEffectDetailsView';

import { SkillAreaType } from '../../domain/SkillAreaOfEffect';
import { SkillEffect } from '../../domain/UnitSkill';
import { UnitNumber } from '../../domain/UnitBasicInfo';
import { ifNonNullable } from '../../util/react';

const SkillEffectView: React.FC<{ effect: SkillEffect, unitNumber: UnitNumber, area: SkillAreaType }> = ({ effect, unitNumber, area }) => {
  return (
    <div
      css={{
        border: '1px solid rgba(255, 255, 255, 0.3)',
        borderRadius: 5,
        marginTop: 10,
        padding: 5,
        '& > .skill-effect-details': {
          marginTop: 10
        },
        '& > .skill-effect-details:first-of-type': {
          marginTop: 0
        }
      }}
    >
      <SkillEffectConditionView {...effect} unitNumber={unitNumber} />
      {ifNonNullable(effect.details.self, self => (<SkillEffectDetailsView className='skill-effect-details' target='self' details={self} area={area} />))}
      {ifNonNullable(effect.details.target, target => (<SkillEffectDetailsView className='skill-effect-details' target='target' details={target} area={area} />))}
      {ifNonNullable(effect.details.around, around => (<SkillEffectDetailsView className='skill-effect-details' target='around' details={around} area={area} />))}
    </div>
  );
};

const SkillEffectsView: React.FC<{ effects: ReadonlyArray<SkillEffect>, unitNumber: UnitNumber, area: SkillAreaType }> = ({ effects, unitNumber, area }) => {
  return (
    <div css={{ color: '#ccc', fontSize: '0.8em' }}>
      {effects.map(effect => (<SkillEffectView key={JSON.stringify(effect)} effect={effect} unitNumber={unitNumber} area={area} />))}
    </div>
  );
};

export default SkillEffectsView;
