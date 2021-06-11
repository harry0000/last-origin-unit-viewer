/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';

import SkillEffectConditionView from './SkillEffectConditionView';
import SkillEffectDetailsView from './SkillEffectDetailsView';
import { SkillType } from './UnitSkillList';

import { SkillAreaType } from '../../domain/SkillAreaOfEffect';
import { SkillEffect } from '../../domain/UnitSkills';
import { UnitNumber } from '../../domain/UnitBasicInfo';
import { useSkillEffects } from '../../hook/skill/SkillEffects';

import { ifNonNullable } from '../../util/react';

const SkillEffectView: React.FC<{ effect: SkillEffect, unitNumber: UnitNumber, area: SkillAreaType }> = ({ effect, unitNumber, area }) => {
  return (
    <div
      css={{
        border: '1px solid rgba(255, 255, 255, 0.3)',
        borderRadius: 5,
        marginTop: 10,
        padding: 5,
        '& > .skill-effect-details:not(:first-of-type)': {
          marginTop: 10
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

const SkillEffectsView: React.FC<{ skillType: SkillType }> = ({ skillType }) => {
  const values = useSkillEffects(skillType);

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
