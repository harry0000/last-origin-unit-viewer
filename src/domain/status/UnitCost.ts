import { UnitRank } from '../UnitBasicInfo';

export type UnitCost = {
  part: number,
  nutrient: number,
  power: number
}

type UnitInitialCost<T extends number> = Readonly<
  UnitCost &
  {
    part: T,
    nutrient: T,
    power: T
  }
>

const UnitCostMap = {
  ss: {
    0:  { 1:  0, 2:  0, 3:  0, 4: 0,  5:  0 },
    5:  { 1:  6, 2:  7, 3:  7, 4: 8,  5:  9 },
    11: { 1: 12, 2: 13, 3: 15, 4: 17, 5: 19 },
    16: { 1: 18, 2: 20, 3: 22, 4: 25, 5: 28 },
    21: { 1: 24, 2: 26, 3: 30, 4: 33, 5: 38 },
    27: { 1: 30, 2: 33, 3: 37, 4: 41, 5: 47 },
    32: { 1: 36, 2: 40, 3: 45, 4: 50, 5: 57 },
    38: { 1: 42, 2: 46, 3: 52, 4: 58, 5: 66 },
    43: { 1: 48, 2: 53, 3: 59, 4: 66, 5: 76 }
  },
  s: {
    0:  { 1:  0, 2:  0, 3:  0, 4:  0, 5:  0 },
    4:  { 1:  5, 2:  5, 3:  6, 4:  7, 5:  8 },
    9:  { 1: 10, 2: 11, 3: 12, 4: 14, 5: 16 },
    13: { 1: 15, 2: 16, 3: 18, 4: 20, 5: 23 },
    18: { 1: 20, 2: 22, 3: 24, 4: 27, 5: 31 },
    22: { 1: 24, 2: 27, 3: 30, 4: 34, 5: 39 },
    26: { 1: 29, 2: 32, 3: 36, 4: 41, 5: 47 },
    31: { 1: 34, 2: 38, 3: 43, 4: 47, 5: 54 },
    44: { 1: 49, 2: 54, 3: 61, 4: 68, 5: 78 }
  },
  a: {
    0:  { 1:  0, 2:  0, 3:  0, 4:  0, 5:  0 },
    3:  { 1:  4, 2:  4, 3:  5, 4:  5, 5:  6 },
    7:  { 1:  7, 2:  8, 3:  9, 4: 10, 5: 12 },
    10: { 1: 11, 2: 12, 3: 14, 4: 15, 5: 17 },
    13: { 1: 15, 2: 16, 3: 18, 4: 20, 5: 23 },
    16: { 1: 18, 2: 20, 3: 23, 4: 25, 5: 29 },
    20: { 1: 22, 2: 24, 3: 27, 4: 30, 5: 35 },
    23: { 1: 25, 2: 28, 3: 32, 4: 35, 5: 40 },
    26: { 1: 29, 2: 32, 3: 36, 4: 40, 5: 46 },
    33: { 1: 36, 2: 40, 3: 45, 4: 50, 5: 58 }
  },
  b: {
    0:  { 1:  0, 2:  0, 3:  0, 4:  0, 5:  0 },
    2:  { 1:  3, 2:  3, 3:  3, 4:  4, 5:  4 },
    5:  { 1:  5, 2:  6, 3:  7, 4:  8, 5:  9 },
    7:  { 1:  8, 2:  9, 3: 10, 4: 11, 5: 13 },
    10: { 1: 11, 2: 12, 3: 14, 4: 15, 5: 17 },
    12: { 1: 14, 2: 15, 3: 17, 4: 19, 5: 22 },
    15: { 1: 16, 2: 18, 3: 20, 4: 23, 5: 26 },
    20: { 1: 22, 2: 24, 3: 27, 4: 30, 5: 36 }
  }
} as const;

type SSRankInitialCostValue = keyof typeof UnitCostMap[typeof UnitRank.SS]
type SRankInitialCostValue  = keyof typeof UnitCostMap[typeof UnitRank.S]
type ARankInitialCostValue  = keyof typeof UnitCostMap[typeof UnitRank.A]
type BRankInitialCostValue  = keyof typeof UnitCostMap[typeof UnitRank.B]

const InitialUnitCost = {
  bioroid:{
    ss: {
      light: {
        attacker:  { part: 16, nutrient: 27, power: 16 },
        defender:  { part: 27, nutrient: 27, power: 5 },
        supporter: { part: 16, nutrient: 27, power: 5 }
      },
      heavy: {
        attacker:  { part: 27, nutrient: 27, power: 27 },
        defender:  { part: 38, nutrient: 27, power: 16 },
        supporter: { part: 27, nutrient: 27, power: 16 }
      },
      flying: {
        attacker:  { part: 11, nutrient: 27, power: 32 },
        defender:  { part: 21, nutrient: 27, power: 21 },
        supporter: { part: 11, nutrient: 27, power: 21 }
      }
    },
    s: {
      light: {
        attacker:  { part: 13, nutrient: 22, power: 13 },
        defender:  { part: 22, nutrient: 22, power: 4 },
        supporter: { part: 13, nutrient: 22, power: 4 }
      },
      heavy: {
        attacker:  { part: 22, nutrient: 22, power: 22 },
        defender:  { part: 31, nutrient: 22, power: 13 },
        supporter: { part: 22, nutrient: 22, power: 13 }
      },
      flying: {
        attacker:  { part:  9, nutrient: 22, power: 26 },
        defender:  { part: 18, nutrient: 22, power: 18 },
        supporter: { part:  9, nutrient: 22, power: 18 }
      }
    },
    a: {
      light: {
        attacker:  { part: 10, nutrient: 16, power: 10 },
        defender:  { part: 16, nutrient: 16, power: 3 },
        supporter: { part: 10, nutrient: 16, power: 3 }
      },
      heavy: {
        attacker:  { part: 16, nutrient: 16, power: 16 },
        defender:  { part: 23, nutrient: 16, power: 10 },
        supporter: { part: 16, nutrient: 16, power: 10 }
      },
      flying: {
        attacker:  { part:  7, nutrient: 16, power: 20 },
        defender:  { part: 13, nutrient: 16, power: 13 },
        supporter: { part:  7, nutrient: 16, power: 13 }
      }
    },
    b: {
      light: {
        attacker:  { part:  7, nutrient: 12, power: 7 },
        defender:  { part: 12, nutrient: 12, power: 2 },
        supporter: { part:  7, nutrient: 12, power: 2 }
      },
      flying: {
        attacker:  { part:  5, nutrient: 12, power: 15 },
        defender:  { part: 10, nutrient: 12, power: 10 },
        supporter: { part:  5, nutrient: 12, power: 10 }
      }
    }
  },
  ags: {
    ss: {
      light: {
        attacker:  { part: 32, nutrient: 0, power: 27 },
        defender:  { part: 43, nutrient: 0, power: 16 },
        supporter: { part: 32, nutrient: 0, power: 16 },
      },
      heavy: {
        attacker:  { part: 43, nutrient: 0, power: 38 },
        // defender:  { part: 54, nutrient: 0, power: 27 },
        supporter: { part: 43, nutrient: 0, power: 27 }
      },
      flying: {
        attacker:  { part: 27, nutrient: 0, power: 43 },
        defender:  { part: 38, nutrient: 0, power: 32 }
      }
    },
    s: {
      light: {
        attacker:  { part: 26, nutrient: 0, power: 22 },
        defender:  { part: 35, nutrient: 0, power: 13 },
        supporter: { part: 26, nutrient: 0, power: 13 }
      },
      heavy: {
        attacker:  { part: 35, nutrient: 0, power: 31 },
        defender:  { part: 44, nutrient: 0, power: 22 },
        supporter: { part: 35, nutrient: 0, power: 22 }
      }
    },
    a: {
      light: {
        attacker:  { part: 20, nutrient: 0, power: 16 },
        defender:  { part: 26, nutrient: 0, power: 10 },
        supporter: { part: 20, nutrient: 0, power: 10 }
      },
      heavy: {
        attacker:  { part: 26, nutrient: 0, power: 23 },
        defender:  { part: 33, nutrient: 0, power: 16 },
        supporter: { part: 26, nutrient: 0, power: 16 }
      },
      flying: {
        attacker:  { part:  9, nutrient: 0, power: 26 },
        // supporter: { part: 16, nutrient: 0, power: 20 }
      }
    },
    b: {
      light: {
        attacker:  { part: 15, nutrient: 0, power: 12 },
        defender:  { part: 20, nutrient: 0, power:  7 },
        supporter: { part: 15, nutrient: 0, power:  7 }
      },
      flying: {
        supporter: { part: 12, nutrient: 0, power: 15 }
      }
    }
  }
} as const;
