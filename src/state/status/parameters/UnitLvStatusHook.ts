import { useRecoilCallback, useRecoilValue } from 'recoil';

import { AvailableUnitRank, RankUpUnitNumber } from '../../../domain/status/UnitRankUpBonusData';
import { UnitBasicInfo, UnitNumber, UnitRank } from '../../../domain/UnitBasicInfo';
import { UnitCost } from '../../../domain/status/UnitCost';
import { UnitLvMode, UnitLvValue } from '../../../domain/status/UnitLv';
import UnitRankState, { availableUnitRanks, RankUpAvailableLv } from '../../../domain/status/UnitRankState';

import { EnhanceableStatus, unitLvStatusState } from './UnitLvStatusState';
import { useSquad } from '../../squad/squadState';
import { useSelectedUnit } from '../../selector/unitSelectorState';

export function useUnitCost(unit: UnitBasicInfo): UnitCost {
  return useRecoilValue(unitLvStatusState.unitCostState(unit));
}

export function useSquadUnitCostSummary(): UnitCost {
  const squad = useSquad();
  return useRecoilValue(unitLvStatusState.squadUnitCostState(squad.units));
}

export function useUnitLv(unit: UnitNumber): [lvMode: UnitLvMode, lv: UnitLvValue, setLv: (lv: UnitLvValue) => void] {
  const lv = useRecoilValue(unitLvStatusState.lvValueState(unit));
  const lvMode = useRecoilValue(unitLvStatusState.lvModeState(unit));
  const setLv = useRecoilCallback(unitLvStatusState.setLv(unit));

  return [lvMode, lv, setLv];
}

export function useUnitLvMode(unit: UnitNumber): [lvMode: UnitLvMode, toggleLvMode: () => void] {
  const lvMode = useRecoilValue(unitLvStatusState.lvModeState(unit));
  const toggle = useRecoilCallback(unitLvStatusState.toggleLvMode(unit));

  return [lvMode, toggle];
}

export function useRemainPoints(unit: UnitNumber): number {
  return useRecoilValue(unitLvStatusState.remainPointsState(unit));
}

export function useUsedPointReset(unit: UnitNumber): [disable: boolean, reset: () => void] {
  const canReset = useRecoilValue(unitLvStatusState.canResetPointsState(unit));
  const reset = useRecoilCallback(unitLvStatusState.resetRemainPoints(unit));

  return [!canReset, reset];
}

export function useStatusEnhancedLv(status: EnhanceableStatus, unit: UnitNumber): number {
  return useRecoilValue(unitLvStatusState.statusEnhancedLvState(status, unit));
}

export function useSelectedUnitStatusEnhancedLv(status: EnhanceableStatus): number {
  const selected = useSelectedUnit()?.no;
  return useRecoilValue(unitLvStatusState.statusEnhancedLvState(status, selected));
}

export function useStatusParameterIncrement(status: EnhanceableStatus): [incrementDisabled: boolean, increment: () => void] {
  const selected = useSelectedUnit()?.no;
  return [
    useRecoilValue(unitLvStatusState.statusIncrementDisabledState(status, selected)),
    useRecoilCallback(unitLvStatusState.incrementStatusLv(status, selected))
  ];
}

export function useStatusParameterDecrement(status: EnhanceableStatus): [decrementDisabled: boolean, decrement: () => void] {
  const selected = useSelectedUnit()?.no;
  return [
    useRecoilValue(unitLvStatusState.statusDecrementDisabledState(status, selected)),
    useRecoilCallback(unitLvStatusState.decrementStatusLv(status, selected))
  ];
}

export function useUnitRank(unit: RankUpUnitNumber): [
  currentRank: UnitRank,
  setRank: (rank: UnitRank) => void,
  rankItems: ReadonlyArray<{ rank: UnitRank, availableLv?: RankUpAvailableLv, disabled: boolean }>
] {
  const currentRank = useRecoilValue(unitLvStatusState.unitRank(unit));
  const rankEnabled = useRecoilValue(unitLvStatusState.unitRankUpEnabled(unit));
  const setRank = useRecoilCallback(unitLvStatusState.setRank(unit));

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
    setRank,
    rankItems
  ];
}

export function useUnitCurrentRank<N extends UnitNumber>(unit: N): AvailableUnitRank<N> {
  return useRecoilValue(unitLvStatusState.currentRankState(unit));
}
