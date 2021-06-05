import { atomFamily } from 'recoil';
import { UnitBasicInfo } from '../../domain/UnitBasicInfo';
import { buildUnit, UnitSkill } from '../../domain/UnitSkill';

export const unitSkillState = atomFamily<UnitSkill, UnitBasicInfo>({
  key: 'unitSkillState',
  default: (unit) => buildUnit(unit)
});
