import { SkillEffectTag } from './SkillEffectTag';
import { UnitAlias } from '../UnitAlias';
import { UnitKind, UnitType } from '../UnitBasicInfo';

export type SkillEffectScaleFactorType = 'proportion' | 'inverse_proportion'

export type SkillEffectScaleFactor =
  {
    per_stack: {
      tag: SkillEffectTag
    }
  } |
  {
    per_units_in_squad: {
      unit:
        'ally' |
        UnitKind |
        typeof UnitType.Light |
        typeof UnitAlias[
          'BioroidUnder145cmTall' |
          'ElectricActive' |
          'SteelLine' |
          'SistersOfValhalla' |
          'AngerOfHorde' |
          'MongooseTeam' |
          'TomosFriends' |
          'CityGuard' |
          'KouheiChurch'
        ],
      except?: 'self'
    }
  } | {
    per_enemies: {
      type: SkillEffectScaleFactorType,
      unit: 'enemy' | UnitType
    }
  }
