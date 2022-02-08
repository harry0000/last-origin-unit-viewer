export const ActiveSkillEffective = {
  NextRound: 'next_round'
} as const;
export type ActiveSkillEffective = typeof ActiveSkillEffective[keyof typeof ActiveSkillEffective]

export const PassiveSkillEffective = {
  OnlyThisAttack: 'only_this_attack'
} as const;
export type PassiveSkillEffective = typeof PassiveSkillEffective[keyof typeof PassiveSkillEffective]
