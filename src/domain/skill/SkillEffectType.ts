export const SkillEffectType = {
  Buff: 'buff',
  DeBuff: 'debuff',
  General: 'general'
} as const;
export type SkillEffectType = typeof SkillEffectType[keyof typeof SkillEffectType]
