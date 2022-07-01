import { SkillEffectTag } from './SkillEffectTag';
import { UnitAlias } from '../UnitAlias';
import { UnitKind, UnitRole, UnitType } from '../UnitBasicInfo';

export type VariationType = 'proportional' | 'inversely_proportional'

export type SkillEffectScaleFactor =
  {
    per_stack: {
      tag: SkillEffectTag
    }
  } | {
    per_units: {
      type: 'all'
    }
  } | {
    per_units: {
      type: 'squad',
      unit?:
        UnitKind |
        typeof UnitType.Light |
        typeof UnitRole.Supporter |
        typeof UnitAlias[
          'BioroidUnder145cmTall' |
          'ElectricActive' |
          'SteelLine' |
          'SistersOfValhalla' |
          'AngerOfHorde' |
          'MongooseTeam' |
          'Horizon' |
          'TomosFriends' |
          'CityGuard' |
          'KouheiChurch'
        ],
      except?: 'self'
    }
  } | {
    per_units: {
      type: 'enemy',
      variation: VariationType,
      unit?: UnitType
    }
  }
