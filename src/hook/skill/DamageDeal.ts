import { useRecoilValue } from 'recoil';

import { DamageDeal } from '../../domain/UnitSkills';
import { SkillAreaType } from '../../domain/SkillAreaOfEffect';
import { SkillType } from '../../component/skill/UnitSkillList';

import { selectedUnitSkillState } from '../../state/skill/unitSkillState';

export function useDamageDeal(
  skillType: SkillType
): [show: true, damage_deal: DamageDeal, area: SkillAreaType] | [show: false, damage_deal: undefined, area: undefined] {
  const skill = useRecoilValue(selectedUnitSkillState);

  switch (skillType) {
  case 'active1':
    return skill && skill.active1Skill.damage_deal ?
      [true, skill.active1Skill.damage_deal, skill.active1Skill.area] :
      [false, undefined, undefined];
  case 'active2':
    return skill && skill.active2Skill.damage_deal ?
      [true, skill.active2Skill.damage_deal, skill.active2Skill.area] :
      [false, undefined, undefined];
  default:
    return [false, undefined, undefined];
  }
}
