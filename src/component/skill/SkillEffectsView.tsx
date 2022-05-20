/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';

import SkillEffectConditionView from './SkillEffectConditionView';
import SkillEffectDetailsView from './SkillEffectDetailsView';

import { SkillAreaType } from '../../domain/skill/SkillAreaOfEffect';
import { SkillEffect } from '../../domain/skill/UnitSkills';
import { SkillType } from '../../domain/skill/SkillType';
import { UnitBasicInfo, UnitNumber } from '../../domain/UnitBasicInfo';

import { useSkillEffects } from '../../state/skill/unitSkillState';

import { ifNonNullable } from '../../util/react';

const SkillEffectView: React.FC<{ effect: SkillEffect, unitNumber: UnitNumber, area: SkillAreaType }> = ({ effect, unitNumber, area }) => {
  const self   = 'self'   in effect.details ? effect.details.self   : undefined;
  const target = 'target' in effect.details ? effect.details.target : undefined;
  const around = 'around' in effect.details ? effect.details.around : undefined;

  return (
    <div
      css={{
        border: '1px solid rgba(255, 255, 255, 0.3)',
        borderRadius: 5,
        marginTop: 10,
        padding: 5,
        '& > .skill-effect-details': {
          marginTop: 10
        }
      }}
    >
      <SkillEffectConditionView effect={effect} unitNumber={unitNumber} />
      {ifNonNullable(self  , v => (<SkillEffectDetailsView className='skill-effect-details' target='self' details={v} area={area} />))}
      {ifNonNullable(target, v => (<SkillEffectDetailsView className='skill-effect-details' target='target' details={v} area={area} />))}
      {ifNonNullable(around, v => (<SkillEffectDetailsView className='skill-effect-details' target='around' details={v} area={area} />))}
    </div>
  );
};

const SkillEffectsView: React.FC<{ skillType: SkillType, unit: UnitBasicInfo }> = ({ skillType, unit }) => {
  const values = useSkillEffects(skillType, unit);

  return (
    ifNonNullable(
      values,
      ([effects, area, unitNumber]) => (
        <div css={{ color: '#ccc', fontSize: '0.8em' }}>
          {effects.map(effect => (<SkillEffectView key={JSON.stringify(effect)} effect={effect} unitNumber={unitNumber} area={area} />))}
        </div>
      )
    )
  );
};

export default SkillEffectsView;
