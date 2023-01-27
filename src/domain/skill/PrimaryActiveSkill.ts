import { ActiveSkillType, SkillType } from './SkillType';
import { UnitNumber } from '../UnitBasicInfo';

class PrimaryActiveSkill {
  readonly unit: UnitNumber;
  readonly primary: ActiveSkillType;

  constructor(unit: UnitNumber, primary: ActiveSkillType = SkillType.Active1) {
    this.unit = unit;
    this.primary = primary;
  }

  setPrimary(skill: ActiveSkillType): PrimaryActiveSkill {
    return this.primary !== skill ?
      new PrimaryActiveSkill(this.unit, skill) :
      this;
  }
}

export default PrimaryActiveSkill;
