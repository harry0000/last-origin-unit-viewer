export const SkillType = {
  Active1: 'active1',
  Active2: 'active2',
  Passive1: 'passive1',
  Passive2: 'passive2',
  Passive3: 'passive3'
} as const;
export type SkillType = typeof SkillType[keyof typeof SkillType]

export type ActiveSkillType<T extends SkillType = SkillType> = T extends `active${number}` ? T : never
export type PassiveSkillType<T extends SkillType = SkillType> = T extends `passive${number}` ? T : never

// TODO: move to i18n utils or somewhere
export function extractType(skillType: SkillType): 'active' | 'passive' {
  return skillType.slice(0, -1) as ReturnType<typeof extractType>;
}

export function extractNo(skillType: SkillType): '1' | '2' | '3' {
  return skillType.slice(-1) as ReturnType<typeof extractNo>;
}
