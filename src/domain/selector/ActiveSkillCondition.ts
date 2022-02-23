import { DamageAttribute, UnitSkillData } from '../skill/UnitSkillData';
import { SkillAreaType } from '../skill/SkillAreaOfEffect';
import { UnitNumber } from '../UnitBasicInfo';

import { extractAllActiveSkills } from './SkillDataExtractor';

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
        as.damage_deal?.attribute === DamageAttribute.Fire ||
        as.effects.some(e => 'self' in e.details && !!e.details.self?.additional_fire_damage)
      );
    case ActiveSkillCondition.IceActive:
      return actives.some(as =>
        as.damage_deal?.attribute === DamageAttribute.Ice ||
        as.effects.some(e => 'self' in e.details && !!e.details.self?.additional_ice_damage)
      );
    case ActiveSkillCondition.ElectricActive:
      return actives.some(as =>
        as.damage_deal?.attribute === DamageAttribute.Electric ||
        as.effects.some(e => 'self' in e.details && !!e.details.self?.additional_electric_damage)
      );
    case ActiveSkillCondition.IgnoreProtect:
      return actives.some(as => as.effects.some(e => 'self' in e.details && !!e.details.self?.ignore_protect));
    case ActiveSkillCondition.AreaOfEffect:
      return actives.some(as => !!as.damage_deal && as.area !== SkillAreaType.Single);
    }
  });
}
