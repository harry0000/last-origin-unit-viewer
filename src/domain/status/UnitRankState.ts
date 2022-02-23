import { RankUpUnitNumber, RankUpBonus, UnitRankUpBonus } from './UnitRankUpBonusData';
import { UnitLvValue } from './UnitLv';
import { UnitNumber, UnitRank, UnitRankComparator } from '../UnitBasicInfo';

import { unitBasicData } from '../../data/unitBasicData';
import { unitSkillData } from '../../data/unitSkillData';
import { unitRankUpBonusData } from '../../data/unitRankUpBonusData';

import { typedEntries } from '../../util/object';

export function getUnitMaxRank(unit: UnitNumber): UnitRank {
  switch (unitSkillData[unit].passive.length) {
  case 3: return UnitRank.SS;
  case 2: return UnitRank.S;
  case 1: return UnitRank.A;
  case 0: return UnitRank.B;
  }
}

export function getUnitDefaultRank(unit: UnitNumber): UnitRank {
  return unitBasicData[unit].rank;
}

const unitRanks = [UnitRank.B, UnitRank.A, UnitRank.S, UnitRank.SS] as const;
const unitRankIndex = { [UnitRank.B]: 0, [UnitRank.A]: 1, [UnitRank.S]: 2, [UnitRank.SS]: 3 } as const;

type AvailableRanks =
  readonly [typeof UnitRank.B, typeof UnitRank.A] |
  readonly [typeof UnitRank.B, typeof UnitRank.A, typeof UnitRank.S] |
  readonly [typeof UnitRank.B, typeof UnitRank.A, typeof UnitRank.S, typeof UnitRank.SS] |
  readonly [typeof UnitRank.A, typeof UnitRank.S] |
  readonly [typeof UnitRank.A, typeof UnitRank.S, typeof UnitRank.SS] |
  readonly [typeof UnitRank.S, typeof UnitRank.SS]

export function availableUnitRanks(unit: RankUpUnitNumber): AvailableRanks {
  return unitRanks.slice(
    unitRankIndex[getUnitDefaultRank(unit)],
    unitRankIndex[getUnitMaxRank(unit)] + 1
  ) as unknown as AvailableRanks;
}

const rankAvailableLv = { [UnitRank.A]: 70, [UnitRank.S]: 80, [UnitRank.SS]: 90 } as const;
export type RankUpAvailableLv = typeof rankAvailableLv[keyof typeof rankAvailableLv]

class UnitRankState {

  static rankUpAvailableLv(rank: Exclude<UnitRank, typeof UnitRank.B>): RankUpAvailableLv {
    return rankAvailableLv[rank];
  }

  static initialRankEnabled(unit: RankUpUnitNumber, rank: UnitRank): boolean {
    return rank === UnitRank.B || rank === getUnitDefaultRank(unit);
  }

  static create(unit: RankUpUnitNumber): UnitRankState {
    return new UnitRankState(unit);
  }

  readonly unit: RankUpUnitNumber;
  readonly rank: UnitRank;

  private constructor(unit: RankUpUnitNumber, rank?: UnitRank) {
    this.unit = unit;
    this.rank = rank ?? getUnitDefaultRank(unit);
  }

  isAvailableRank(rank: UnitRank): boolean {
    return getUnitDefaultRank(this.unit) === rank || Object.keys(unitRankUpBonusData[this.unit]).includes(rank);
  }

  isRankEnabled(rank: UnitRank, lv: UnitLvValue): boolean {
    return this.isAvailableRank(rank) &&
      (
        rank === UnitRank.B ||
        rank === getUnitDefaultRank(this.unit) ||
        UnitRankState.rankUpAvailableLv(rank) <= lv
      );
  }

  adjustRank(lv: UnitLvValue): UnitRankState {
    return this.isRankEnabled(this.rank, lv) ?
      this :
      UnitRankState.create(this.unit);
  }

  changeUnitRank(rank: UnitRank, lv: UnitLvValue): UnitRankState {
    return this.isRankEnabled(rank, lv) ?
      new UnitRankState(this.unit, rank) :
      this;
  }

  get rankUpBonus(): UnitRankUpBonus | undefined {
    if (this.rank === getUnitDefaultRank(this.unit)) {
      return undefined;
    }

    const bonuses: Array<[UnitRank, RankUpBonus]> = [];
    typedEntries(unitRankUpBonusData[this.unit]).forEach(([rank, bonus]) => {
      if (this.rank === rank || UnitRankComparator[this.rank].greaterThan(rank)) {
        bonuses.push([rank, bonus]);
      }
    });

    return Object.fromEntries(bonuses);
  }
}

export default UnitRankState;
