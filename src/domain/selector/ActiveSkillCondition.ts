import { DamageAttribute, UnitSkillData } from '../skill/UnitSkillData';
import { Effect } from '../Effect';
import { SkillEffectDataValue } from '../skill/SkillEffectData';
import { UnitNumber } from '../UnitBasicInfo';

import { extractAllActiveSkills, extractEffectsData } from './SkillDataExtractor';

export const ActiveSkillCondition = {
  FireActive: 'fire_active',
  IceActive: 'ice_active',
  ElectricActive: 'electric_active',
  IgnoreProtect: 'ignore_protect'
} as const;
export type ActiveSkillCondition = typeof ActiveSkillCondition[keyof typeof ActiveSkillCondition]

function hasImmediateTerm(effect: SkillEffectDataValue[typeof Effect.IgnoreProtect]): boolean {
  return !!effect && (!effect.term || effect.term === 'immediate');
}

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
        extractEffectsData(as).some(({ details }) =>
          'self' in details && !!details.self?.additional_fire_damage ||
          'target' in details && !!details.target?.adaptive_fire_attack
        )
      );
    case ActiveSkillCondition.IceActive:
      return actives.some(as =>
        'damage_deal' in as && as.damage_deal?.attribute === DamageAttribute.Ice ||
        extractEffectsData(as).some(({ details }) => 'self' in details && !!details.self?.additional_ice_damage)
      );
    case ActiveSkillCondition.ElectricActive:
      return actives.some(as =>
        'damage_deal' in as && as.damage_deal?.attribute === DamageAttribute.Electric ||
        extractEffectsData(as).some(({ details }) =>
          'self' in details && !!details.self?.additional_electric_damage ||
          'target' in details && !!details.target?.adaptive_electric_attack
        )
      );
    case ActiveSkillCondition.IgnoreProtect:
      return actives.some(as =>
        extractEffectsData(as).some(e => 'self' in e.details && hasImmediateTerm(e.details.self?.ignore_protect))
      );
    }
  });
}
