import { UnitNumber } from './UnitBasicInfo';

export const UnitAlias = {
  BioroidUnder145cmTall: 'bioroid_under_145cm_tall',
  ElectricActive: 'electric_active',
  ArtilleryTypeActive: 'artillery_type_active',
  Squad21: 'squad_21',
  CompanionSeries: 'companion_series',
  SteelLine: 'steel_line',
  SteelLineOfficerRanks: 'steel_line_officer_ranks',
  SteelLineExcludingOfficerRanks: 'steel_line_excluding_officer_ranks',
  SistersOfValhalla: 'sisters_of_valhalla',
  AngerOfHorde: 'anger_of_horde',
  ApplicableForSeizeOpportunity: 'applicable_for_seize_opportunity',
  NotApplicableForSeizeOpportunity: 'not_applicable_for_seize_opportunity',
  DoomBringer: 'doom_bringer',
  AACannonier: 'aa_cannonier',
  ArmoredMaiden: 'armored_maiden',
  ExperimentalUnits: 'experimental_units',
  MongooseTeam: 'mongoose_team',
  Horizon: 'horizon',
  PECSDesigners: 'pecs_designers',
  Kunoichi: 'kunoichi',
  TomosFriends: 'tomos_friends',
  CityGuard: 'city_guard',
  DEntertainment: 'd_entertainment',
  MagicalGirl: 'magical_girl',
  KouheiChurch: 'kouhei_church',
  Elven: 'elven',
  Strikers: 'strikers',
  EmpressHound: 'empress_hound',
  SmartEnjoy: 'smart_enjoy',
  SpartanSeries: 'spartan_series',
  Mermaid: 'mermaid'
} as const;
export type UnitAlias = typeof UnitAlias[keyof typeof UnitAlias]

export const unitNumbersForAlias: { [key in UnitAlias]: ReadonlySet<UnitNumber> } = {
  [UnitAlias.BioroidUnder145cmTall]: new Set([9, 22, 26, 37, 51, 55, 76, 84, 90, 102, 108, 118, 123, 141, 161, 177, 188, 206, 230]),
  [UnitAlias.ElectricActive]: new Set([6, 11, 75, 84, 113, 115, 132, 139, 174, 179, 201, 221, 230, 231, 235]),
  [UnitAlias.ArtilleryTypeActive]: new Set([22, 51, 202]),
  [UnitAlias.Squad21]: new Set([2, 3, 85, 92, 118, 121, 187]),
  [UnitAlias.CompanionSeries]: new Set([16, 17, 18, 19, 183]),
  [UnitAlias.SteelLine]: new Set([21, 22, 23, 24, 25, 26, 27, 28, 29, 30]),
  [UnitAlias.SteelLineOfficerRanks]: new Set([21, 27, 29, 30]),
  [UnitAlias.SteelLineExcludingOfficerRanks]: new Set([22, 23, 24, 25, 26, 28]),
  [UnitAlias.SistersOfValhalla]: new Set([31, 32, 33, 34, 35, 36, 37, 177]),
  [UnitAlias.AngerOfHorde]: new Set([40, 41, 42, 43, 44, 192, 193, 194]),
  [UnitAlias.ApplicableForSeizeOpportunity]: new Set([40, 42, 43, 44, 192, 194]),
  [UnitAlias.NotApplicableForSeizeOpportunity]: new Set([41, 193]),
  [UnitAlias.DoomBringer]: new Set([51, 52, 53, 54, 55, 56, 182]),
  [UnitAlias.AACannonier]: new Set([60, 67, 68, 69, 70]),
  [UnitAlias.ArmoredMaiden]: new Set([61, 62, 65, 66]),
  [UnitAlias.ExperimentalUnits]: new Set([68, 149, 152]),
  [UnitAlias.MongooseTeam]: new Set([80, 81, 82, 83, 84]),
  [UnitAlias.Horizon]: new Set([85, 87, 88, 89, 90]),
  [UnitAlias.PECSDesigners]: new Set([97, 98, 106]),
  [UnitAlias.Kunoichi]: new Set([99, 174, 180]),
  [UnitAlias.TomosFriends]: new Set([25, 43, 81, 125]),
  [UnitAlias.CityGuard]: new Set([111, 112, 113, 114, 115, 179, 184]),
  [UnitAlias.DEntertainment]: new Set([99, 121, 123, 124, 125, 127, 128, 129, 130, 169, 171, 174, 180]),
  [UnitAlias.MagicalGirl]: new Set([123, 127]),
  [UnitAlias.KouheiChurch]: new Set([126, 138, 139, 140, 236]),
  [UnitAlias.Elven]: new Set([133, 135, 176, 212, 238]),
  [UnitAlias.Strikers]: new Set([149, 150, 151, 152]),
  [UnitAlias.EmpressHound]: new Set([154, 155, 156]),
  [UnitAlias.SmartEnjoy]: new Set([205, 206]),
  [UnitAlias.SpartanSeries]: new Set([215, 216, 217]),
  [UnitAlias.Mermaid]: new Set([250, 251, 252, 253])
};

export function isUnitAlias(arg: string): arg is UnitAlias {
  return Object.keys(unitNumbersForAlias).some(alias => alias === arg);
}
