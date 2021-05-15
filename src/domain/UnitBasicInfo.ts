import { unitBasicData } from '../data/unitBasicData';

export const UnitKind = {
  Bioroid: 'bioroid',
  AGS: 'ags'
} as const;
export type UnitKind = typeof UnitKind[keyof typeof UnitKind]

export const UnitRank = {
  SS: 'ss',
  S: 's',
  A: 'a',
  B: 'b',
} as const;
export type UnitRank = typeof UnitRank[keyof typeof UnitRank]

const UnitRankWeight: { [key in UnitRank]: number } = {
  ss: 4,
  s: 3,
  a: 2,
  b: 1
};

export const UnitRankComparator: {
  [key in UnitRank]: {
    greaterThan(rank: UnitRank): boolean,
    lessThan(rank: UnitRank): boolean
  }
} = {
  ss: {
    greaterThan(rank: UnitRank): boolean { return UnitRankWeight.ss > UnitRankWeight[rank]; },
    lessThan(rank: UnitRank): boolean { return UnitRankWeight.ss < UnitRankWeight[rank]; }
  },
  s: {
    greaterThan(rank: UnitRank): boolean { return UnitRankWeight.s > UnitRankWeight[rank]; },
    lessThan(rank: UnitRank): boolean { return UnitRankWeight.s < UnitRankWeight[rank]; }
  },
  a: {
    greaterThan(rank: UnitRank): boolean { return UnitRankWeight.a > UnitRankWeight[rank]; },
    lessThan(rank: UnitRank): boolean { return UnitRankWeight.a < UnitRankWeight[rank]; }
  },
  b: {
    greaterThan(rank: UnitRank): boolean { return UnitRankWeight.b > UnitRankWeight[rank]; },
    lessThan(rank: UnitRank): boolean { return UnitRankWeight.b < UnitRankWeight[rank]; }
  }
};

export const UnitType = {
  Light: 'light',
  Heavy: 'heavy',
  Flying: 'flying'
} as const;
export type UnitType = typeof UnitType[keyof typeof UnitType]

export const UnitRole = {
  Attacker: 'attacker',
  Defender: 'defender',
  Supporter: 'supporter'
} as const;
export type UnitRole = typeof UnitRole[keyof typeof UnitRole]

export type UnitNumber = keyof typeof unitBasicData
export type UnitBasicInfo = typeof unitBasicData[UnitNumber]

export type UnitBasicData = typeof unitBasicData & { readonly [key in UnitNumber]: UnitBasicInfo }
