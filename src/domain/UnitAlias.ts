import { UnitNumber } from './UnitBasicInfo';

export const UnitAlias = {
  ElectricActive: 'electric_active',
  ArtilleryTypeActive: 'artillery_type_active',
  Squad21: 'squad_21',
  CompanionSeries: 'companion_series',
  SteelLine: 'steel_line',
  MongooseTeam: 'mongoose_team',
  Horizon: 'horizon',
  SpartanSeries: 'spartan_series',
  Pest: 'pest'
} as const;
export type UnitAlias = typeof UnitAlias[keyof typeof UnitAlias]

export const unitNumbersForAlias: { [key in UnitAlias]: ReadonlySet<UnitNumber> } = {
  [UnitAlias.ElectricActive]: new Set([6, 11, 75, 84, 113, 115, 132, 201, 221]),
  [UnitAlias.ArtilleryTypeActive]: new Set([22, 51, 202]),
  [UnitAlias.Squad21]: new Set([2, 3, 85, 92, 118, 121]),
  [UnitAlias.CompanionSeries]: new Set([16, 17, 18, 19, 183]),
  [UnitAlias.SteelLine]: new Set([21, 22, 23, 24, 25, 26, 27, 28, 29]),
  [UnitAlias.MongooseTeam]: new Set([80, 81, 82, 83, 84]),
  [UnitAlias.Horizon]: new Set([85, 87, 88, 89, 90]),
  [UnitAlias.SpartanSeries]: new Set([215, 216, 217]),
  [UnitAlias.Pest]: new Set([12, 16])
} as const;
