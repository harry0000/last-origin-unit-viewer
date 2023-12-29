import { AffectedSkillEffect } from './SkillEffectActivationCondition';
import { SkillAreaType } from './SkillAreaOfEffect';
import { SkillEffectTag } from './SkillEffectTag';
import { UnitAlias, isUnitAlias } from '../UnitAlias';
import { UnitKind, UnitRole, UnitType } from '../UnitBasicInfo';

export const VariationType = {
  Proportional: 'proportional',
  InverselyProportional: 'inversely_proportional'
} as const;
export type VariationType = typeof VariationType[keyof typeof VariationType]

type AlvisSkillEffectScaleFactor = readonly [
  typeof UnitAlias.BioroidUnder145cmTall,
  typeof UnitAlias.SistersOfValhalla
]

export function isAlvisSkillEffectScaleFactor(arg: ReadonlyArray<string>): arg is AlvisSkillEffectScaleFactor {
  return arg.every(isUnitAlias);
}

export type SkillEffectScaleFactor =
  {
    per_stack: {
      tag: SkillEffectTag,
      effect?: AffectedSkillEffect
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
        UnitType |
        UnitRole |
        typeof UnitAlias[
          'BioroidUnder145cmTall' |
          'SteelLine' |
          'SteelLineOfficerRanks' |
          'SteelLineExcludingOfficerRanks' |
          'SistersOfValhalla' |
          'AngerOfHorde' |
          'MongooseTeam' |
          'Horizon' |
          'TomosFriends' |
          'OrbitalWatcher' |
          'CityGuard' |
          'KouheiChurch' |
          'Elven'
        ] |
        AlvisSkillEffectScaleFactor |
        typeof SkillAreaType.CrossAdjacent,
      except?: 'self'
    }
  } | {
    per_units: {
      type: 'enemy',
      variation: VariationType,
      unit?: UnitType
    }
  }

export function getVariationType(factor: SkillEffectScaleFactor): VariationType {
  return 'per_units' in factor && factor.per_units.type === 'enemy' ?
    factor.per_units.variation :
    VariationType.Proportional;
}
