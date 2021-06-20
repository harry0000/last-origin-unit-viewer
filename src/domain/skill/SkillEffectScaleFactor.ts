import { SkillEffectTag } from './SkillEffectTag';
import { UnitAlias } from '../UnitAlias';
import { UnitKind } from '../UnitBasicInfo';

export type SkillEffectScaleFactor =
  {
    per_stack: {
      tag: SkillEffectTag
    }
  } |
  {
    num_of_units: 'ally' | UnitKind | typeof UnitAlias.ElectricActive
  }
