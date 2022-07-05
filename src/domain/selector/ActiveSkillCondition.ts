import { DamageAttribute, UnitSkillData } from '../skill/UnitSkillData';
import { SkillAreaType } from '../skill/SkillAreaOfEffect';
import { UnitNumber } from '../UnitBasicInfo';

import { extractAllActiveSkills, extractEffectsData } from './SkillDataExtractor';

export const ActiveSkillCondition = {
  FireActive: 'fire_active',
  IceActive: 'ice_active',
  ElectricActive: 'electric_active',
  IgnoreProtect: 'ignore_protect',
  AreaOfEffect: 'area_of_effect'
} as const;
export type ActiveSkillCondition = typeof ActiveSkillCondition[keyof typeof ActiveSkillCondition]

export function matchActiveSkillConditions(
  skill: UnitSkillData[UnitNumber],
  conditions: ReadonlySet<ActiveSkillCondition>
): boolean {
  if (conditions.size === 0) {
    return true;
  }

  const actives = extractAllActiveSkills(skill);

  return [...conditions.values()].every(condition => {
    switch (condition) {
    case ActiveSkillCondition.FireActive:
      return actives.some(as =>
        'damage_deal' in as && as.damage_deal?.attribute === DamageAttribute.Fire ||
        extractEffectsData(as).some(e => 'self' in e.details && !!e.details.self?.additional_fire_damage)
      );
    case ActiveSkillCondition.IceActive:
      return actives.some(as =>
        'damage_deal' in as && as.damage_deal?.attribute === DamageAttribute.Ice ||
        extractEffectsData(as).some(e => 'self' in e.details && !!e.details.self?.additional_ice_damage)
      );
    case ActiveSkillCondition.ElectricActive:
      return actives.some(as =>
        'damage_deal' in as && as.damage_deal?.attribute === DamageAttribute.Electric ||
        extractEffectsData(as).some(e => 'self' in e.details && !!e.details.self?.additional_electric_damage)
      );
    case ActiveSkillCondition.IgnoreProtect:
      return actives.some(as =>
        extractEffectsData(as).some(e => 'self' in e.details && !!e.details.self?.ignore_protect)
      );
    case ActiveSkillCondition.AreaOfEffect:
      return actives.some(as => 'damage_deal' in as && as.area !== SkillAreaType.Single);
    }
  });
}
