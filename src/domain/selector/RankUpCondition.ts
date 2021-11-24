import { UnitNumber, UnitRank } from '../UnitBasicInfo';
import { isRankUpUnitNumber, UnitRankUpBonusData } from '../status/UnitRankUpBonusData';

export const RankUpCondition = {
  ARankUp: UnitRank.A,
  SRankUp: UnitRank.S,
  SSRankUp: UnitRank.SS
} as const;
export type RankUpCondition = typeof RankUpCondition[keyof typeof RankUpCondition]

export function matchRankUpConditions(
  unitNumber: UnitNumber,
  unitRankUpBonus: UnitRankUpBonusData,
  rankUpCondition: RankUpCondition | undefined
): boolean {
  if (!rankUpCondition) {
    return true;
  }

  return isRankUpUnitNumber(unitNumber) && Object.prototype.hasOwnProperty.call(unitRankUpBonus[unitNumber], rankUpCondition);
}
