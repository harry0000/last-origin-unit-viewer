export const SkillEffective = {
  NextWave: 'next_wave',
  NextRound: 'next_round',
  NextActive: 'next_active',
  OnlyThisAttack: 'only_this_attack',
  UntilBeHit: 'until_be_hit'
} as const;
export type SkillEffective = typeof SkillEffective[keyof typeof SkillEffective]
