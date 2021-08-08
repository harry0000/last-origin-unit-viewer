import { SkillEffectTag } from './SkillEffectTag';
import { UnitAlias } from '../UnitAlias';
import { UnitKind, UnitType } from '../UnitBasicInfo';

export type SkillEffectScaleFactor =
  {
    per_stack: {
      tag: SkillEffectTag
    }
  } |
  {
    num_of_units:
      'ally' |
      UnitKind |
      typeof UnitType.Light |
      typeof UnitAlias['ElectricActive' | 'SteelLine' | 'AngerOfHorde' | 'MongooseTeam' | 'TomosFriends' | 'CityGuard']
  }
