import { AvailableUnitRank, RankUpUnitBasicInfo, RankUpUnitNumber } from './UnitRankUpBonusData';
import { CoreLinkCount } from '../UnitCoreLink';
import { FullLinkBonus, SortieCostBonus } from '../UnitCoreLinkBonusData';
import { UnitBasicInfo, UnitKind, UnitRank, UnitRole, UnitType } from '../UnitBasicInfo';

import { unitBasicData } from '../../data/unitBasicData';

export type UnitCost = {
  part: number,
  nutrient: number,
  power: number
}

const initialUnitCostData = {
  [UnitKind.Bioroid]:{
    [UnitRank.SS]: {
      [UnitType.Light]: {
        [UnitRole.Attacker]:  { part: 16, nutrient: 27, power: 16 },
        [UnitRole.Defender]:  { part: 27, nutrient: 27, power: 5 },
        [UnitRole.Supporter]: { part: 16, nutrient: 27, power: 5 }
      },
      [UnitType.Heavy]: {
        [UnitRole.Attacker]:  { part: 27, nutrient: 27, power: 27 },
        [UnitRole.Defender]:  { part: 38, nutrient: 27, power: 16 },
        [UnitRole.Supporter]: { part: 27, nutrient: 27, power: 16 }
      },
      [UnitType.Flying]: {
        [UnitRole.Attacker]:  { part: 11, nutrient: 27, power: 32 },
        [UnitRole.Defender]:  { part: 21, nutrient: 27, power: 21 },
        [UnitRole.Supporter]: { part: 11, nutrient: 27, power: 21 }
      }
    },
    [UnitRank.S]: {
      [UnitType.Light]: {
        [UnitRole.Attacker]:  { part: 13, nutrient: 22, power: 13 },
        [UnitRole.Defender]:  { part: 22, nutrient: 22, power: 4 },
        [UnitRole.Supporter]: { part: 13, nutrient: 22, power: 4 }
      },
      [UnitType.Heavy]: {
        [UnitRole.Attacker]:  { part: 22, nutrient: 22, power: 22 },
        [UnitRole.Defender]:  { part: 31, nutrient: 22, power: 13 },
        [UnitRole.Supporter]: { part: 22, nutrient: 22, power: 13 }
      },
      [UnitType.Flying]: {
        [UnitRole.Attacker]:  { part:  9, nutrient: 22, power: 26 },
        [UnitRole.Defender]:  { part: 18, nutrient: 22, power: 18 },
        [UnitRole.Supporter]: { part:  9, nutrient: 22, power: 18 }
      }
    },
    [UnitRank.A]: {
      [UnitType.Light]: {
        [UnitRole.Attacker]:  { part: 10, nutrient: 16, power: 10 },
        [UnitRole.Defender]:  { part: 16, nutrient: 16, power: 3 },
        [UnitRole.Supporter]: { part: 10, nutrient: 16, power: 3 }
      },
      [UnitType.Heavy]: {
        [UnitRole.Attacker]:  { part: 16, nutrient: 16, power: 16 },
        [UnitRole.Defender]:  { part: 23, nutrient: 16, power: 10 },
        [UnitRole.Supporter]: { part: 16, nutrient: 16, power: 10 }
      },
      [UnitType.Flying]: {
        [UnitRole.Attacker]:  { part:  7, nutrient: 16, power: 20 },
        [UnitRole.Defender]:  { part: 13, nutrient: 16, power: 13 },
        [UnitRole.Supporter]: { part:  7, nutrient: 16, power: 13 }
      }
    },
    [UnitRank.B]: {
      [UnitType.Light]: {
        [UnitRole.Attacker]:  { part:  7, nutrient: 12, power: 7 },
        [UnitRole.Defender]:  { part: 12, nutrient: 12, power: 2 },
        [UnitRole.Supporter]: { part:  7, nutrient: 12, power: 2 }
      },
      [UnitType.Flying]: {
        [UnitRole.Attacker]:  { part:  5, nutrient: 12, power: 15 },
        [UnitRole.Defender]:  { part: 10, nutrient: 12, power: 10 },
        [UnitRole.Supporter]: { part:  5, nutrient: 12, power: 10 }
      }
    }
  },
  [UnitKind.AGS]: {
    [UnitRank.SS]: {
      [UnitType.Light]: {
        [UnitRole.Attacker]:  { part: 32, nutrient: 0, power: 27 },
        [UnitRole.Defender]:  { part: 43, nutrient: 0, power: 16 },
        [UnitRole.Supporter]: { part: 32, nutrient: 0, power: 16 },
      },
      [UnitType.Heavy]: {
        [UnitRole.Attacker]:  { part: 43, nutrient: 0, power: 38 },
        [UnitRole.Defender]:  { part: 54, nutrient: 0, power: 27 },
        [UnitRole.Supporter]: { part: 43, nutrient: 0, power: 27 }
      },
      [UnitType.Flying]: {
        [UnitRole.Attacker]:  { part: 27, nutrient: 0, power: 43 },
        [UnitRole.Defender]:  { part: 38, nutrient: 0, power: 32 },
        [UnitRole.Supporter]: { part: 27, nutrient: 0, power: 32 }
      }
    },
    [UnitRank.S]: {
      [UnitType.Light]: {
        [UnitRole.Attacker]:  { part: 26, nutrient: 0, power: 22 },
        [UnitRole.Defender]:  { part: 35, nutrient: 0, power: 13 },
        [UnitRole.Supporter]: { part: 26, nutrient: 0, power: 13 }
      },
      [UnitType.Heavy]: {
        [UnitRole.Attacker]:  { part: 35, nutrient: 0, power: 31 },
        [UnitRole.Defender]:  { part: 44, nutrient: 0, power: 22 },
        [UnitRole.Supporter]: { part: 35, nutrient: 0, power: 22 }
      },
      [UnitType.Flying]: {
        [UnitRole.Attacker]:  { part: 22, nutrient: 0, power: 35 },
        [UnitRole.Supporter]: { part: 22, nutrient: 0, power: 26 }
      }
    },
    [UnitRank.A]: {
      [UnitType.Light]: {
        [UnitRole.Attacker]:  { part: 20, nutrient: 0, power: 16 },
        [UnitRole.Defender]:  { part: 26, nutrient: 0, power: 10 },
        [UnitRole.Supporter]: { part: 20, nutrient: 0, power: 10 }
      },
      [UnitType.Heavy]: {
        [UnitRole.Attacker]:  { part: 26, nutrient: 0, power: 23 },
        [UnitRole.Defender]:  { part: 33, nutrient: 0, power: 16 },
        [UnitRole.Supporter]: { part: 26, nutrient: 0, power: 16 }
      },
      [UnitType.Flying]: {
        [UnitRole.Attacker]:  { part: 16, nutrient: 0, power: 26 },
        [UnitRole.Supporter]: { part: 16, nutrient: 0, power: 20 }
      }
    },
    [UnitRank.B]: {
      [UnitType.Light]: {
        [UnitRole.Attacker]:  { part: 15, nutrient: 0, power: 12 },
        [UnitRole.Defender]:  { part: 20, nutrient: 0, power:  7 },
        [UnitRole.Supporter]: { part: 15, nutrient: 0, power:  7 }
      },
      [UnitType.Flying]: {
        [UnitRole.Supporter]: { part: 12, nutrient: 0, power: 15 }
      }
    }
  }
} as const;
type InitialUnitCostData = typeof initialUnitCostData

type SSRankInitialUnitCost<C = InitialUnitCostData[UnitKind][typeof UnitRank.SS]> = C extends { [key: string]: { [key: string]: infer T } } ? T : never
type SRankInitialUnitCost<C = InitialUnitCostData[UnitKind][typeof UnitRank.S]> = C extends { [key: string]: { [key: string]: infer T } } ? T : never
type ARankInitialUnitCost<C = InitialUnitCostData[UnitKind][typeof UnitRank.A]> = C extends { [key: string]: { [key: string]: infer T } } ? T : never
type BRankInitialUnitCost<C = InitialUnitCostData[UnitKind][typeof UnitRank.B]> = C extends { [key: string]: { [key: string]: infer T } } ? T : never

type InitialUnitCost =
  SSRankInitialUnitCost |
  SRankInitialUnitCost |
  ARankInitialUnitCost |
  BRankInitialUnitCost

type SSRankInitialUnitCostValues<C = SSRankInitialUnitCost> = C extends Record<string, infer T> ? T : never
type SRankInitialUnitCostValues<C = SRankInitialUnitCost> = C extends Record<string, infer T> ? T : never
type ARankInitialUnitCostValues<C = ARankInitialUnitCost> = C extends Record<string, infer T> ? T : never
type BRankInitialUnitCostValues<C = BRankInitialUnitCost> = C extends Record<string, infer T> ? T : never

const unitCostMap: {
  [K in UnitRank]:
    K extends typeof UnitRank.SS ? { [key in SSRankInitialUnitCostValues]: { [key in Exclude<CoreLinkCount, 0>]: number } } :
    K extends typeof UnitRank.S ? { [key in SRankInitialUnitCostValues]: { [key in Exclude<CoreLinkCount, 0>]: number } } :
    K extends typeof UnitRank.A ? { [key in ARankInitialUnitCostValues]: { [key in Exclude<CoreLinkCount, 0>]: number } } :
    K extends typeof UnitRank.B ? { [key in BRankInitialUnitCostValues]: { [key in Exclude<CoreLinkCount, 0>]: number } } :
      never
} = {
  [UnitRank.SS]: {
    0:  { 1:  0, 2:  0, 3:  0, 4: 0,  5:  0 },
    5:  { 1:  6, 2:  7, 3:  7, 4: 8,  5:  9 },
    11: { 1: 12, 2: 13, 3: 15, 4: 17, 5: 19 },
    16: { 1: 18, 2: 20, 3: 22, 4: 25, 5: 28 },
    21: { 1: 24, 2: 26, 3: 30, 4: 33, 5: 38 },
    27: { 1: 30, 2: 33, 3: 37, 4: 41, 5: 47 },
    32: { 1: 36, 2: 40, 3: 45, 4: 50, 5: 57 },
    38: { 1: 42, 2: 46, 3: 52, 4: 58, 5: 66 },
    43: { 1: 48, 2: 53, 3: 59, 4: 66, 5: 76 },
    54: { 1: 60, 2: 66, 3: 74, 4: 83, 5: 95 }
  },
  [UnitRank.S]: {
    0:  { 1:  0, 2:  0, 3:  0, 4:  0, 5:  0 },
    4:  { 1:  5, 2:  5, 3:  6, 4:  7, 5:  8 },
    9:  { 1: 10, 2: 11, 3: 12, 4: 14, 5: 16 },
    13: { 1: 15, 2: 16, 3: 18, 4: 20, 5: 23 },
    18: { 1: 20, 2: 22, 3: 24, 4: 27, 5: 31 },
    22: { 1: 24, 2: 27, 3: 30, 4: 34, 5: 39 },
    26: { 1: 29, 2: 32, 3: 36, 4: 41, 5: 47 },
    31: { 1: 34, 2: 38, 3: 43, 4: 47, 5: 54 },
    35: { 1: 39, 2: 43, 3: 49, 4: 54, 5: 62 },
    44: { 1: 49, 2: 54, 3: 61, 4: 68, 5: 78 }
  },
  [UnitRank.A]: {
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
  [UnitRank.B]: {
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

type UnitBasicInfoConstraint =
  { type: Exclude<UnitType, typeof UnitType.Heavy>, rank: UnitRank, role: UnitRole } |
  { type: typeof UnitType.Heavy, rank: Exclude<UnitRank, typeof UnitRank.B>, role: UnitRole }

function resolveBioroidUnitCost(
  unit: UnitBasicInfoConstraint,
  coreLinkCount: CoreLinkCount
): UnitCost {
  switch (unit.rank) {
  case UnitRank.SS:
    return resolveCostFromInitialCost(unit.rank, initialUnitCostData.bioroid[unit.rank][unit.type][unit.role], coreLinkCount);
  case UnitRank.S:
    return resolveCostFromInitialCost(unit.rank, initialUnitCostData.bioroid[unit.rank][unit.type][unit.role], coreLinkCount);
  case UnitRank.A:
    return resolveCostFromInitialCost(unit.rank, initialUnitCostData.bioroid[unit.rank][unit.type][unit.role], coreLinkCount);
  case UnitRank.B:
    return resolveCostFromInitialCost(unit.rank, initialUnitCostData.bioroid[unit.rank][unit.type][unit.role], coreLinkCount);
  }
}

function resolveAgsUnitCost(
  unit: Extract<UnitBasicInfo, { kind: typeof UnitKind.AGS }>,
  coreLinkCount: CoreLinkCount
): UnitCost {
  const agsCost = initialUnitCostData.ags;
  if (unit.rank === UnitRank.SS) {
    switch (unit.type) {
    case UnitType.Light:  return resolveCostFromInitialCost(unit.rank, agsCost.ss.light[unit.role], coreLinkCount);
    case UnitType.Heavy:  return resolveCostFromInitialCost(unit.rank, agsCost.ss.heavy[unit.role], coreLinkCount);
    case UnitType.Flying: return resolveCostFromInitialCost(unit.rank, agsCost.ss.flying[unit.role], coreLinkCount);
    }
  } else if (unit.rank === UnitRank.S) {
    switch (unit.type) {
    case UnitType.Light:  return resolveCostFromInitialCost(unit.rank, agsCost.s.light[unit.role], coreLinkCount);
    case UnitType.Heavy:  return resolveCostFromInitialCost(unit.rank, agsCost.s.heavy[unit.role], coreLinkCount);
    }
  } else if (unit.rank === UnitRank.A) {
    switch (unit.type) {
    case UnitType.Light:  return resolveCostFromInitialCost(unit.rank, agsCost.a.light[unit.role], coreLinkCount);
    case UnitType.Heavy:  return resolveCostFromInitialCost(unit.rank, agsCost.a.heavy[unit.role], coreLinkCount);
    case UnitType.Flying: return resolveCostFromInitialCost(unit.rank, agsCost.a.flying[unit.role], coreLinkCount);
    }
  } else {
    switch (unit.type) {
    case UnitType.Light:  return resolveCostFromInitialCost(unit.rank, agsCost.b.light[unit.role], coreLinkCount);
    case UnitType.Flying: return resolveCostFromInitialCost(unit.rank, agsCost.b.flying[unit.role], coreLinkCount);
    }
  }
}

class RankUpUnitCostResolver<N extends RankUpUnitNumber> {

  static get<N extends RankUpUnitNumber>({ no }: RankUpUnitBasicInfo<N>): RankUpUnitCostResolver<N> {
    return new RankUpUnitCostResolver(no);
  }

  readonly #no: N;

  private constructor(no: N) {
    this.#no = no;
  }

  resolveUnitCost<R extends AvailableUnitRank<N>>(currentRank: R, coreLinkCount: CoreLinkCount): UnitCost {
    const unit = unitBasicData[this.#no];
    if (unit.kind === UnitKind.Bioroid) {
      return resolveBioroidUnitCost({ ...unit, rank: currentRank } as UnitBasicInfoConstraint, coreLinkCount);
    } else {
      const agsCost = initialUnitCostData.ags;
      switch (unit.no) {
      case 103: return agsCost[currentRank as AvailableUnitRank<typeof unit.no>][unit.type][unit.role];
      case 107: return agsCost[currentRank as AvailableUnitRank<typeof unit.no>][unit.type][unit.role];
      case 110: return agsCost[currentRank as AvailableUnitRank<typeof unit.no>][unit.type][unit.role];
      case 114: return agsCost[currentRank as AvailableUnitRank<typeof unit.no>][unit.type][unit.role];
      case 115: return agsCost[currentRank as AvailableUnitRank<typeof unit.no>][unit.type][unit.role];
      case 128: return agsCost[currentRank as AvailableUnitRank<typeof unit.no>][unit.type][unit.role];
      case 202: return agsCost[currentRank as AvailableUnitRank<typeof unit.no>][unit.type][unit.role];
      case 204: return agsCost[currentRank as AvailableUnitRank<typeof unit.no>][unit.type][unit.role];
      case 214: return agsCost[currentRank as AvailableUnitRank<typeof unit.no>][unit.type][unit.role];
      case 215: return agsCost[currentRank as AvailableUnitRank<typeof unit.no>][unit.type][unit.role];
      case 216: return agsCost[currentRank as AvailableUnitRank<typeof unit.no>][unit.type][unit.role];
      case 217: return agsCost[currentRank as AvailableUnitRank<typeof unit.no>][unit.type][unit.role];
      case 222: return agsCost[currentRank as AvailableUnitRank<typeof unit.no>][unit.type][unit.role];
      case 225: return agsCost[currentRank as AvailableUnitRank<typeof unit.no>][unit.type][unit.role];
      case 227: return agsCost[currentRank as AvailableUnitRank<typeof unit.no>][unit.type][unit.role];
      case 255: return agsCost[currentRank as AvailableUnitRank<typeof unit.no>][unit.type][unit.role];
      default:
        return unit satisfies never;
      }
    }
  }
}

function resolveCostFromInitialCost(rank: typeof UnitRank.SS, initialCost: SSRankInitialUnitCost, coreLinkCount: CoreLinkCount): UnitCost
function resolveCostFromInitialCost(rank: typeof UnitRank.S,  initialCost: SRankInitialUnitCost, coreLinkCount: CoreLinkCount): UnitCost
function resolveCostFromInitialCost(rank: typeof UnitRank.A,  initialCost: ARankInitialUnitCost, coreLinkCount: CoreLinkCount): UnitCost
function resolveCostFromInitialCost(rank: typeof UnitRank.B,  initialCost: BRankInitialUnitCost, coreLinkCount: CoreLinkCount): UnitCost
function resolveCostFromInitialCost(
  rank: UnitRank,
  initialCost: InitialUnitCost,
  coreLinkCount: CoreLinkCount
): UnitCost {
  if (coreLinkCount === 0) {
    return initialCost;
  }

  switch (rank) {
  case UnitRank.SS: {
    const { part, nutrient, power } = initialCost as SSRankInitialUnitCost;
    return {
      part:     unitCostMap.ss[part][coreLinkCount],
      nutrient: unitCostMap.ss[nutrient][coreLinkCount],
      power:    unitCostMap.ss[power][coreLinkCount]
    };
  }
  case UnitRank.S: {
    const { part, nutrient, power } = initialCost as SRankInitialUnitCost;
    return {
      part:     unitCostMap.s[part][coreLinkCount],
      nutrient: unitCostMap.s[nutrient][coreLinkCount],
      power:    unitCostMap.s[power][coreLinkCount]
    };
  }
  case UnitRank.A: {
    const { part, nutrient, power } = initialCost as ARankInitialUnitCost;
    return {
      part:     unitCostMap.a[part][coreLinkCount],
      nutrient: unitCostMap.a[nutrient][coreLinkCount],
      power:    unitCostMap.a[power][coreLinkCount] };
  }
  case UnitRank.B: {
    const { part, nutrient, power } = initialCost as BRankInitialUnitCost;
    return {
      part:     unitCostMap.b[part][coreLinkCount],
      nutrient: unitCostMap.b[nutrient][coreLinkCount],
      power:    unitCostMap.b[power][coreLinkCount]
    };
  }
  }
}

function reduceCost(cost: UnitCost, sortieCostBonus: SortieCostBonus): UnitCost {
  const rate = (100_000 - sortieCostBonus.sortie_cost.milliPercentage) / 100_000;
  return {
    part:     Math.ceil(cost.part * rate),
    nutrient: Math.ceil(cost.nutrient * rate),
    power:    Math.ceil(cost.power * rate)
  };
}

export function calculateRankUpUnitCost<N extends RankUpUnitNumber>(
  unit: RankUpUnitBasicInfo<N>,
  currentRank: AvailableUnitRank<N>,
  coreLinkCount: CoreLinkCount,
  fullLinkBonus: FullLinkBonus | undefined
): UnitCost {
  const cost = RankUpUnitCostResolver.get(unit).resolveUnitCost(currentRank, coreLinkCount);

  return fullLinkBonus && 'sortie_cost' in fullLinkBonus ?
    reduceCost(cost, fullLinkBonus) :
    cost;
}

export function calculateUnitCost(
  unit: UnitBasicInfo,
  coreLinkCount: CoreLinkCount,
  fullLinkBonus: FullLinkBonus | undefined
): UnitCost {
  const cost =
    unit.kind === UnitKind.Bioroid ?
      resolveBioroidUnitCost(unit, coreLinkCount) :
      resolveAgsUnitCost(unit, coreLinkCount);

  return fullLinkBonus && 'sortie_cost' in fullLinkBonus ?
    reduceCost(cost, fullLinkBonus) :
    cost;
}

export function summaryUnitCosts(...costs: UnitCost[]): UnitCost {
  return costs.reduce(
    (acc, cost) => {
      acc.part     += cost.part;
      acc.nutrient += cost.nutrient;
      acc.power    += cost.power;
      return acc;
    },
    { part: 0, nutrient: 0, power: 0 }
  );
}
