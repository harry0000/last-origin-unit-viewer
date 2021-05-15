import { mapObjectValue } from '../util/object';
import { unitBasicData } from '../data/unitBasicData';
import { unitSkillData } from '../data/unitSkillData';

import { UnitBasicInfo, UnitRank } from './UnitBasicInfo';

export const availableRanksPerUnit = (() => {
  const ranks: ReadonlyArray<UnitRank> =
    [UnitRank.B, UnitRank.A, UnitRank.S, UnitRank.SS] as const;

  const rankIndex =
    Object.fromEntries(ranks.map((rank, index) => [rank, index]));

  return mapObjectValue(
    unitBasicData,
    unit => ranks.slice(rankIndex[unit.rank], unitSkillData[unit.no].passive.length + 1)
  );
})();

class UnitRankValue {

  readonly #unit: UnitBasicInfo;
  readonly unitRank: UnitRank;

  constructor(unit: UnitBasicInfo, rank?: UnitRank) {
    this.#unit = unit;
    this.unitRank =
      rank && availableRanksPerUnit[this.#unit.no].includes(rank) ?
        rank :
        unit.rank;
  }

  get availableUnitRanks(): ReadonlyArray<UnitRank> {
    return availableRanksPerUnit[this.#unit.no];
  }

  changeUnitRank(rank: UnitRank): UnitRankValue {
    return new UnitRankValue(this.#unit, rank);
  }
}

export default UnitRankValue;
