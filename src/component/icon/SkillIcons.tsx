import React from 'react';
import { nanoid } from 'nanoid';

import { ActiveSkillType, PassiveSkillType, extractNo } from '../../domain/skill/SkillType';

import { ifNonNullable } from '../../util/react';

const ActiveSkillIcon: React.FC<{ skillType?: ActiveSkillType }> = ({ skillType }) => {
  const suffix = nanoid();
  const gradientId = `ActiveSkillIconGradient_${suffix}`;

  return (
    <svg viewBox="0 0 116 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={gradientId} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%"   stopColor="#ffcc00" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#ffcc00" stopOpacity="0" />
        </linearGradient>
        <style>
          {'.svg-text { user-select: none; }'}
        </style>
      </defs>

      <path
        d="M2.5 50.5 26.5 2.5 89.5 2.5 113.5 50.5 89.5 98.5 26.5 98.5Z"
        stroke="#ffcc00" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"
        fill={`url(#${gradientId})`} fillRule="evenodd" />

      {ifNonNullable(skillType, v => (<text x="42" y="70" fontSize="60" stroke="none" fill="#ffcc00" className="svg-text">{extractNo(v)}</text>))}
    </svg>
  );
};

const DisableActiveSkillIcon: React.FC = () => (
  <svg viewBox="0 0 116 100" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M2.5 50.5 26.5 2.5 89.5 2.5 113.5 50.5 89.5 98.5 26.5 98.5Z"
      stroke="#ffcc00" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"
      fill="none" fillRule="evenodd" />

    <rect x="18" y="42" width="80" height="16" fill="#ccc" />
  </svg>
);

const PassiveSkillIcon: React.FC<{ skillType?: PassiveSkillType }> = ({ skillType }) => {
  const suffix = nanoid();
  const gradientId = `PassiveSkillIconGradient_${suffix}`;

  return (
    <svg viewBox="0 0 116 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={gradientId} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%"   stopColor="#32b7fb" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#32b7fb" stopOpacity="0" />
        </linearGradient>
        <style>
          {'.svg-text { user-select: none; }'}
        </style>
      </defs>

      <path
        d="M2.5 50.5 26.5 2.5 89.5 2.5 113.5 50.5 89.5 98.5 26.5 98.5Z"
        stroke="#32b7fb" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"
        fill={`url(#${gradientId})`} fillRule="evenodd" />

      {ifNonNullable(skillType, v => (<text x="42" y="70" fontSize="60" stroke="none" fill="#32b7fb" className="svg-text">{extractNo(v)}</text>))}
    </svg>
  );
};

const DisablePassiveSkillIcon: React.FC = () => (
  <svg viewBox="0 0 116 100" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M2.5 50.5 26.5 2.5 89.5 2.5 113.5 50.5 89.5 98.5 26.5 98.5Z"
      stroke="#32b7fb" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"
      fill="none" fillRule="evenodd" />

    <rect x="18" y="42" width="80" height="16" fill="#ccc" />
  </svg>
);

export {
  ActiveSkillIcon,
  DisableActiveSkillIcon,
  PassiveSkillIcon,
  DisablePassiveSkillIcon
};
