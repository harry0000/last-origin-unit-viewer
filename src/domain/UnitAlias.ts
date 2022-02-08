import { UnitNumber } from './UnitBasicInfo';

export const UnitAlias = {
  ElectricActive: 'electric_active',
  ArtilleryTypeActive: 'artillery_type_active',
  Squad21: 'squad_21',
  CompanionSeries: 'companion_series',
  SteelLine: 'steel_line',
  SistersOfValhalla: 'sisters_of_valhalla',
  AngerOfHorde: 'anger_of_horde',
  DoomBringer: 'doom_bringer',
  AACannonier: 'aa_cannonier',
  ArmoredMaiden: 'armored_maiden',
  MongooseTeam: 'mongoose_team',
  Horizon: 'horizon',
  TomosFriends: 'tomos_friends',
  CityGuard: 'city_guard',
  MagicalGirl: 'magical_girl',
  KouheiChurch: 'kouhei_church',
  SpartanSeries: 'spartan_series'
} as const;
export type UnitAlias = typeof UnitAlias[keyof typeof UnitAlias]

export const unitNumbersForAlias: { [key in UnitAlias]: ReadonlySet<UnitNumber> } = {
  [UnitAlias.ElectricActive]: new Set([6, 11, 75, 84, 113, 115, 132, 139, 174, 179, 201, 221, 231, 235]),
  [UnitAlias.ArtilleryTypeActive]: new Set([22, 51, 202]),
  [UnitAlias.Squad21]: new Set([2, 3, 85, 92, 118, 121, 187]),
  [UnitAlias.CompanionSeries]: new Set([16, 17, 18, 19, 183]),
  [UnitAlias.SteelLine]: new Set([21, 22, 23, 24, 25, 26, 27, 28, 29]),
  [UnitAlias.SistersOfValhalla]: new Set([31, 32, 33, 34, 35, 36, 37, 177]),
  [UnitAlias.AngerOfHorde]: new Set([41, 42, 43, 44, 192, 194]),
  [UnitAlias.DoomBringer]: new Set([51, 52, 53, 54, 55, 56, 182]),
  [UnitAlias.AACannonier]: new Set([60, 67, 68, 69, 70]),
  [UnitAlias.ArmoredMaiden]: new Set([61, 62, 65, 66]),
  [UnitAlias.MongooseTeam]: new Set([80, 81, 82, 83, 84]),
  [UnitAlias.Horizon]: new Set([85, 87, 88, 89, 90]),
  [UnitAlias.TomosFriends]: new Set([25, 43, 81, 125]),
  [UnitAlias.CityGuard]: new Set([111, 112, 113, 114, 115, 179, 184]),
  [UnitAlias.MagicalGirl]: new Set([123, 127]),
  [UnitAlias.KouheiChurch]: new Set([126, 138, 139]),
  [UnitAlias.SpartanSeries]: new Set([215, 216, 217])
} as const;

export function isUnitAlias(arg: string): arg is UnitAlias {
  return Object.keys(unitNumbersForAlias).some(alias => alias === arg);
}
