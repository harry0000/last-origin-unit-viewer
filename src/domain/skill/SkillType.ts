import { UnitRank, UnitRankComparator } from '../UnitBasicInfo';

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

export function isActiveSkillType(arg: SkillType): arg is ActiveSkillType {
  return arg.startsWith('a');
}

export function isPassiveSkillType(arg: SkillType): arg is PassiveSkillType {
  return arg.startsWith('p');
}

export function availablePassiveSkill(skillType: PassiveSkillType, rank: UnitRank): boolean {
  switch (skillType) {
  case SkillType.Passive1: return UnitRankComparator[rank].greaterThan(UnitRank.B);
  case SkillType.Passive2: return UnitRankComparator[rank].greaterThan(UnitRank.A);
  case SkillType.Passive3: return UnitRankComparator[rank].greaterThan(UnitRank.S);
  }
}

// TODO: move to i18n utils or somewhere
export function extractType(skillType: SkillType): 'active' | 'passive' {
  return skillType.slice(0, -1) as ReturnType<typeof extractType>;
}

export function extractNo(skillType: ActiveSkillType): '1' | '2';
export function extractNo(skillType: PassiveSkillType): '1' | '2' | '3';
export function extractNo(skillType: SkillType): '1' | '2' | '3';
export function extractNo(skillType: SkillType): '1' | '2' | '3' {
  return skillType.slice(-1) as ReturnType<typeof extractNo>;
}
