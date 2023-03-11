import { UnitBasicInfo, UnitNumber } from '../UnitBasicInfo';
import { UnitRank } from '../UnitBasicInfo';
import { IntegerValue, MicroValue, MilliPercentageValue, MilliValue } from '../ValueUnit';

import { unitBasicData } from '../../data/unitBasicData';
import { unitRankUpBonusData } from '../../data/unitRankUpBonusData';

export type UnitRankUpBonusData = typeof unitRankUpBonusData
export type RankUpUnitNumber = keyof typeof unitRankUpBonusData
export type RankUpUnitBasicInfo<N extends RankUpUnitNumber = RankUpUnitNumber> = Extract<UnitBasicInfo, { no: N }>

const rankUpUnitNumbers: ReadonlySet<UnitNumber> = new Set(Object.keys(unitRankUpBonusData).map(r => +r as UnitNumber));
export function isRankUpUnitNumber(arg: UnitNumber): arg is RankUpUnitNumber {
  return rankUpUnitNumbers.has(arg);
}
export function isRankUpUnitBasicInfo(arg: UnitBasicInfo): arg is RankUpUnitBasicInfo {
  return isRankUpUnitNumber(arg.no);
}

export type BaseUnitRank<N extends UnitNumber> = typeof unitBasicData[N]['rank']

export type AvailableUnitRank<N extends UnitNumber> =
  BaseUnitRank<N> |
  (N extends RankUpUnitNumber ? keyof typeof unitRankUpBonusData[N] : never)

export type AvailableMaxUnitRank<N extends UnitNumber> =
  typeof UnitRank.SS extends AvailableUnitRank<N> ? typeof UnitRank.SS :
  typeof UnitRank.S  extends AvailableUnitRank<N> ? typeof UnitRank.S :
  typeof UnitRank.A  extends AvailableUnitRank<N> ? typeof UnitRank.A :
  typeof UnitRank.B  extends AvailableUnitRank<N> ? typeof UnitRank.B :
    never

export type RankUpBonus = {
  hp_up: IntegerValue,
  atk_up: MilliValue,
  def_up?: MilliValue,
  cri_up?: MilliPercentageValue,
  acc_up?: MilliPercentageValue,
  eva_up?: MilliPercentageValue,
  spd_up?: MicroValue,
  fire_resist_up?: MilliPercentageValue,
  ice_resist_up?: MilliPercentageValue,
  electric_resist_up?: MilliPercentageValue
} | {
  // HACK: for Goltarion
  atk_up: MilliValue,
  cri_up: MilliPercentageValue,
  acc_up: MilliPercentageValue,
  spd_up: MicroValue
}

export type UnitRankUpBonus = Partial<Record<UnitRank, RankUpBonus>>
