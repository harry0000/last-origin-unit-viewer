import { useRecoilValue } from 'recoil';

import { SkillType } from '../../component/skill/UnitSkillList';
import { AreaOfEffectCell, AreaOfEffectCells } from '../../component/skill/AreaOfEffectCellType';

import { selectedUnitSkillState } from '../../state/skill/unitSkillState';

export function useSkillArea(skillType: SkillType): AreaOfEffectCell | undefined {
  const skill = useRecoilValue(selectedUnitSkillState);
  if (!skill) {
    return undefined;
  }

  switch (skillType) {
  case 'active1': return AreaOfEffectCells[skill.active1Skill.area];
  case 'active2': return AreaOfEffectCells[skill.active2Skill.area];
  case 'passive1': return skill.passive1Skill && AreaOfEffectCells[skill.passive1Skill.area];
  case 'passive2': return skill.passive2Skill && AreaOfEffectCells[skill.passive2Skill.area];
  case 'passive3': return skill.passive3Skill && AreaOfEffectCells[skill.passive3Skill.area];
  }
}
