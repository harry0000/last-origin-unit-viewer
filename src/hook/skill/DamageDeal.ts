import { useRecoilValue } from 'recoil';

import { DamageDeal } from '../../domain/skill/UnitSkills';
import { SkillAreaType } from '../../domain/skill/SkillAreaOfEffect';
import { SkillType } from '../../component/skill/UnitSkillList';

import { selectedUnitActive1SkillState, selectedUnitActive2SkillState } from '../../state/skill/unitSkillState';

export function useDamageDeal(
  skillType: SkillType
): [damage_deal: DamageDeal, area: SkillAreaType] | [damage_deal: undefined, area: undefined] {
  switch (skillType) {
  case 'active1': {
    const as = useRecoilValue(selectedUnitActive1SkillState);
    return as && as.damage_deal ?
      [as.damage_deal, as.area] :
      [undefined, undefined];
  }
  case 'active2': {
    const as = useRecoilValue(selectedUnitActive2SkillState);
    return as && as.damage_deal ?
      [as.damage_deal, as.area] :
      [undefined, undefined];
  }
  default:
    return [undefined, undefined];
  }
}
