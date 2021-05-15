import { UnitNumber } from './UnitBasicInfo';

export const UnitAlias = {
  Pest: 'pest',
  ElectricActive: 'electric_active',
  MongooseTeam: 'mongoose_team',
  CompanionSeries: 'companion_series',
  SpartanSeries: 'spartan_series'
} as const;
export type UnitAlias = typeof UnitAlias[keyof typeof UnitAlias]

export const unitNumbersForAlias: { [key in UnitAlias]: ReadonlySet<UnitNumber> } = {
  [UnitAlias.Pest]: new Set([12, 16]),
  [UnitAlias.ElectricActive]: new Set([6, 11, 75, 84, 113, 115, 132, 201, 221]),
  [UnitAlias.MongooseTeam]: new Set([80, 81, 82, 83, 84]),
  [UnitAlias.CompanionSeries]: new Set([16, 17, 18, 19, 183]),
  [UnitAlias.SpartanSeries]: new Set([215, 216, 217])
} as const;
