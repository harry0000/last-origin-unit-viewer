import { useRecoilValue } from 'recoil';

import { SkillType } from '../../component/skill/UnitSkillList';
import { AreaOfEffectCell, AreaOfEffectCells } from '../../component/skill/AreaOfEffectCellType';

import {
  selectedUnitActive1SkillState,
  selectedUnitActive2SkillState,
  selectedUnitPassive1SkillState,
  selectedUnitPassive2SkillState,
  selectedUnitPassive3SkillState
} from '../../state/skill/unitSkillState';

export function useSkillArea(skillType: SkillType): AreaOfEffectCell | undefined {
  switch (skillType) {
  case 'active1': {
    const skill = useRecoilValue(selectedUnitActive1SkillState);
    return skill && AreaOfEffectCells[skill.area];
  }
  case 'active2': {
    const skill = useRecoilValue(selectedUnitActive2SkillState);
    return skill && AreaOfEffectCells[skill.area];
  }
  case 'passive1': {
    const skill = useRecoilValue(selectedUnitPassive1SkillState);
    return skill && AreaOfEffectCells[skill.area];
  }
  case 'passive2': {
    const skill = useRecoilValue(selectedUnitPassive2SkillState);
    return skill && AreaOfEffectCells[skill.area];
  }
  case 'passive3': {
    const skill = useRecoilValue(selectedUnitPassive3SkillState);
    return skill && AreaOfEffectCells[skill.area];
  }
  }
}
