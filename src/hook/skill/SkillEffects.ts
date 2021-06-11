import { useRecoilValue } from 'recoil';

import { SkillAreaType } from '../../domain/skill/SkillAreaOfEffect';
import { SkillEffect } from '../../domain/skill/UnitSkills';
import { SkillType } from '../../component/skill/UnitSkillList';
import { UnitNumber } from '../../domain/UnitBasicInfo';

import { selectedUnitSkillState } from '../../state/skill/unitSkillState';

export function useSkillEffects(skillType: SkillType): [effects: ReadonlyArray<SkillEffect>, area: SkillAreaType, unitNumber: UnitNumber] | undefined {
  const skill = useRecoilValue(selectedUnitSkillState);

  switch (skillType) {
  case 'active1':
    return skill && [skill.active1Skill.effects, skill.active1Skill.area, skill.unit.no];
  case 'active2':
    return skill && [skill.active2Skill.effects, skill.active2Skill.area, skill.unit.no];
  case 'passive1':
    return skill && skill.passive1Skill && (
      'effects' in skill.passive1Skill ?
        [skill.passive1Skill.effects, skill.passive1Skill.area, skill.unit.no] :
        [skill.passive1Skill.equipment_effects, skill.passive1Skill.area, skill.unit.no]
    );
  case 'passive2':
    return skill && skill.passive2Skill && [skill.passive2Skill.effects, skill.passive2Skill.area, skill.unit.no];
  case 'passive3':
    return skill && skill.passive3Skill && [skill.passive3Skill.effects, skill.passive3Skill.area, skill.unit.no];
  }
}
