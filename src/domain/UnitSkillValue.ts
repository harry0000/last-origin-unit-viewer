import { SkillLv } from './UnitSkillLvValue';
import { SkillApCostValue, SkillRangeValue } from './UnitSkillData';
import { SkillAreaType } from './SkillAreaOfEffect';

// TODO: implement this file (or delete this file)
interface UnitSkillEffectValue {
  effects(): ReadonlyArray<number>
}

interface UnitSkillValue {

  name(): string;
  skillLv(): SkillLv;
  apCost(): SkillApCostValue;
  range(): SkillRangeValue;
  area(): SkillAreaType;
  effects(): UnitSkillEffectValue;
}

export default UnitSkillValue;
