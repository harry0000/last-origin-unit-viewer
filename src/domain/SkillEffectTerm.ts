export const SkillEffectTerm = {
  Immediate: 'immediate',
  Infinite: 'infinite',
  ForRounds: 'for_rounds'
} as const;
export type SkillEffectTerm = typeof SkillEffectTerm[keyof typeof SkillEffectTerm]

export type SkillEffectTermRoundsValue = 1 | 2 | 3 | 5 | 10 | 99 | 999
