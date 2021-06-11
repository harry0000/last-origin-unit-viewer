import { SkillEffectTag } from './SkillEffectTag';
import { UnitAlias } from '../UnitAlias';

export type SkillEffectScaleFactor =
  {
    per_stack: {
      tag: SkillEffectTag
    }
  } |
  {
    num_of_units: 'ally' | typeof UnitAlias.ElectricActive
  }
