import { useRecoilCallback, useRecoilValue } from 'recoil';

import { AvailableUnitRank, RankUpUnitNumber } from '../../../domain/status/UnitRankUpBonusData';
import { UnitBasicInfo, UnitNumber, UnitRank } from '../../../domain/UnitBasicInfo';
import { UnitCost } from '../../../domain/status/UnitCost';
import { UnitLvMode, UnitLvValue } from '../../../domain/status/UnitLv';
import UnitRankState, { availableUnitRanks, RankUpAvailableLv } from '../../../domain/status/UnitRankState';

import {
  EnhanceableStatus,
  canResetPointsState,
  currentRankState,
  decrementStatusLv,
  incrementStatusLv,
  lvModeState,
  lvValueState,
  remainPointsState,
  resetRemainPoints,
  setLv,
  setRank,
  squadUnitCostState,
  statusDecrementDisabledState,
  statusEnhancedLvState,
  statusIncrementDisabledState,
  toggleLvMode,
  unitCostState,
  unitRank,
  unitRankUpEnabled
} from './UnitLvStatusState';
import { useSquadUnits } from '../../squad/SquadHook';
import { useSelectedUnit } from '../../selector/UnitSelectorHook';

export function useUnitCost(unit: UnitBasicInfo): UnitCost {
  return useRecoilValue(unitCostState(unit));
}

export function useSquadUnitCostSummary(): UnitCost {
  const squadUnits = useSquadUnits();
  return useRecoilValue(squadUnitCostState(squadUnits));
}

export function useUnitLv(unit: UnitNumber): [lvMode: UnitLvMode, lv: UnitLvValue, selectLv: (lv: UnitLvValue) => void] {
  const lv = useRecoilValue(lvValueState(unit));
  const lvMode = useRecoilValue(lvModeState(unit));
  const selectLv = useRecoilCallback(setLv(unit));

  return [lvMode, lv, selectLv];
}

export function useUnitLvMode(unit: UnitNumber): [lvMode: UnitLvMode, toggleLvMode: () => void] {
  const lvMode = useRecoilValue(lvModeState(unit));
  const toggle = useRecoilCallback(toggleLvMode(unit));

  return [lvMode, toggle];
}

export function useRemainPoints(unit: UnitNumber): number {
  return useRecoilValue(remainPointsState(unit));
}

export function useUsedPointReset(unit: UnitNumber): [disable: boolean, reset: () => void] {
  const canReset = useRecoilValue(canResetPointsState(unit));
  const reset = useRecoilCallback(resetRemainPoints(unit));

  return [!canReset, reset];
}

export function useStatusEnhancedLv(status: EnhanceableStatus, unit: UnitNumber): number {
  return useRecoilValue(statusEnhancedLvState(status, unit));
}

export function useSelectedUnitStatusEnhancedLv(status: EnhanceableStatus): number {
  const selected = useSelectedUnit()?.no;
  return useRecoilValue(statusEnhancedLvState(status, selected));
}

export function useStatusParameterIncrement(status: EnhanceableStatus): [incrementDisabled: boolean, increment: () => void] {
  const selected = useSelectedUnit()?.no;
  return [
    useRecoilValue(statusIncrementDisabledState(status, selected)),
    useRecoilCallback(incrementStatusLv(status, selected))
  ];
}

export function useStatusParameterDecrement(status: EnhanceableStatus): [decrementDisabled: boolean, decrement: () => void] {
  const selected = useSelectedUnit()?.no;
  return [
    useRecoilValue(statusDecrementDisabledState(status, selected)),
    useRecoilCallback(decrementStatusLv(status, selected))
  ];
}

export function useUnitRank(unit: RankUpUnitNumber): [
  currentRank: UnitRank,
  selectRank: (rank: UnitRank) => void,
  rankItems: ReadonlyArray<{ rank: UnitRank, availableLv?: RankUpAvailableLv, disabled: boolean }>
] {
  const currentRank = useRecoilValue(unitRank(unit));
  const rankEnabled = useRecoilValue(unitRankUpEnabled(unit));
  const selectRank = useRecoilCallback(setRank(unit));

  const rankItems = availableUnitRanks(unit).map(rank => {
    const availableLv = rank !== UnitRank.B ? UnitRankState.rankUpAvailableLv(rank) : undefined;
    const disabled    = rank !== UnitRank.B ? !rankEnabled[rank] : false;
    return {
      rank,
      availableLv,
      disabled
    };
  });

  return [
    currentRank,
    selectRank,
    rankItems
  ];
}

export function useUnitCurrentRank<N extends UnitNumber>(unit: N): AvailableUnitRank<N> {
  return useRecoilValue(currentRankState(unit));
}
