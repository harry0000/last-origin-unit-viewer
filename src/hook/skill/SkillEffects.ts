import { useRecoilValue } from 'recoil';

import { SkillAreaType } from '../../domain/skill/SkillAreaOfEffect';
import { SkillEffect } from '../../domain/skill/UnitSkills';
import { SkillType } from '../../component/skill/UnitSkillList';
import { UnitNumber } from '../../domain/UnitBasicInfo';

import { selectedUnitBasicInfoState } from '../../state/unit/unitSelectorStoreState';
import {
  unitActive1SkillState,
  unitActive2SkillState,
  unitPassive1SkillState,
  unitPassive2SkillState,
  unitPassive3SkillState
} from '../../state/skill/unitSkillState';

export function useSkillEffects(skillType: SkillType): [effects: ReadonlyArray<SkillEffect>, area: SkillAreaType, unitNumber: UnitNumber] | undefined {
  const unit = useRecoilValue(selectedUnitBasicInfoState);
  switch (skillType) {
  case 'active1': {
    const skill = unit && useRecoilValue(unitActive1SkillState(unit));
    return unit && skill && [skill.effects, skill.area, unit.no];
  }
  case 'active2': {
    const skill = unit && useRecoilValue(unitActive2SkillState(unit));
    return unit && skill && [skill.effects, skill.area, unit.no];
  }
  case 'passive1': {
    const skill = unit && useRecoilValue(unitPassive1SkillState(unit));
    return unit && skill && (
      'effects' in skill ?
        [skill.effects, skill.area, unit.no] :
        [skill.equipment_effects, skill.area, unit.no]
    );
  }
  case 'passive2': {
    const skill = unit && useRecoilValue(unitPassive2SkillState(unit));
    return unit && skill && [skill.effects, skill.area, unit.no];
  }
  case 'passive3': {
    const skill = unit && useRecoilValue(unitPassive3SkillState(unit));
    return unit && skill && [skill.effects, skill.area, unit.no];
  }
  }
}
