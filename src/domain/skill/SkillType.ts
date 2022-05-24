export const SkillType = {
  Active1: 'active1',
  Active2: 'active2',
  Passive1: 'passive1',
  Passive2: 'passive2',
  Passive3: 'passive3'
} as const;
export type SkillType = typeof SkillType[keyof typeof SkillType]
