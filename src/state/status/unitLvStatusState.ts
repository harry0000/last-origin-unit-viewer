import {
  atomFamily,
  DefaultValue,
  RecoilValueReadOnly,
  selector,
  selectorFamily,
  useRecoilValue,
  useSetRecoilState
} from 'recoil';
import deepEqual from 'fast-deep-equal';

import {
  AccEnhancementStatusEffect,
  AtkEnhancementStatusEffect,
  CriEnhancementStatusEffect,
  DefEnhancementStatusEffect,
  EvaEnhancementStatusEffect,
  HpEnhancementStatusEffect
} from '../../domain/status/StatusEffect';
import {
  AvailableUnitRank,
  isRankUpUnitBasicInfo,
  isRankUpUnitNumber,
  RankUpUnitNumber,
  UnitRankUpBonus
} from '../../domain/status/UnitRankUpBonusData';
import { UnitBasicInfo, UnitNumber, UnitRank } from '../../domain/UnitBasicInfo';
import { UnitLvMode, UnitLvValue } from '../../domain/status/UnitLv';
import UnitLvStatus from '../../domain/status/UnitLvStatus';
import UnitRankState, { availableUnitRanks, getUnitDefaultRank, RankUpAvailableLv } from '../../domain/status/UnitRankState';
import { calculateRankUpUnitCost, calculateUnitCost, summaryUnitCosts, UnitCost } from '../../domain/status/UnitCost';

import {
  coreLinkCountState,
  fullLinkBonusEffectState,
  updateCoreLinkDependency
} from '../corelink/unitCoreLinkState';
import {
  updateChip1EquipmentDependency,
  updateChip2EquipmentDependency,
  updateGearEquipmentDependency,
  updateOsEquipmentDependency
} from '../equipment/unitEquipmentState';
import { useSquad } from '../squad/squadState';

type Status = 'hp' | 'atk' | 'def' | 'acc' | 'eva' | 'cri'
type StatusKey = `${Capitalize<Status>}`

export type EnhanceableStatus = Status

type StatusEffect<T extends StatusKey> =
  T extends 'Hp' ? HpEnhancementStatusEffect :
  T extends 'Atk' ? AtkEnhancementStatusEffect :
  T extends 'Def' ? DefEnhancementStatusEffect :
  T extends 'Acc' ? AccEnhancementStatusEffect :
  T extends 'Eva' ? EvaEnhancementStatusEffect :
  T extends 'Cri' ? CriEnhancementStatusEffect :
    never

type UnitRankUpEnabled = Record<Exclude<UnitRank, typeof UnitRank.B>, boolean>

function createUnitStatusLvState<T extends StatusKey>(statusKey: T) {
  return {
    lv: atomFamily<number, UnitNumber>({
      key: `_unit${statusKey}EnhancementLvState`,
      default: 0
    }),
    canIncrement: atomFamily<boolean, UnitNumber>({
      key: `_unit${statusKey}CanIncrementState`,
      default: true
    }),
    canDecrement: atomFamily<boolean, UnitNumber>({
      key: `_unit${statusKey}CanDecrementState`,
      default: false
    }),
    statusEffect: atomFamily<StatusEffect<T>, UnitNumber>({
      key: `_unit${statusKey}StatusEffectState`,
      default: {} as StatusEffect<T>
    })
  };
}

const unitLvStateAtoms = {
  lv: atomFamily<UnitLvValue, UnitNumber>({
    key: '_unitLvState',
    default: 1
  }),
  lvMode: atomFamily<UnitLvMode, UnitNumber>({
    key: '_unitLvModeState',
    default: UnitLvMode.Auto
  }),
  remainPoints: atomFamily<number, UnitNumber>({
    key: '_unitRemainPointsState',
    default: 300
  }),
  canResetPoints: atomFamily<boolean, UnitNumber>({
    key: '_unitCanResetPointsState',
    default: false
  }),
  hp: createUnitStatusLvState('Hp'),
  atk: createUnitStatusLvState('Atk'),
  def: createUnitStatusLvState('Def'),
  acc: createUnitStatusLvState('Acc'),
  eva: createUnitStatusLvState('Eva'),
  cri: createUnitStatusLvState('Cri'),
  rank: atomFamily<UnitRank, RankUpUnitNumber>({
    key: '_unitRankState',
    default: (unit) => getUnitDefaultRank(unit)
  }),
  rankEnabled: atomFamily<UnitRankUpEnabled, RankUpUnitNumber>({
    key: '_unitRankEnabledState',
    default: (unit) => {
      const defaultValue = { [UnitRank.A]: false, [UnitRank.S]: false, [UnitRank.SS]: false };
      const defaultRank = getUnitDefaultRank(unit);
      if (defaultRank !== UnitRank.B) {
        defaultValue[defaultRank] = true;
      }

      return defaultValue;
    }
  }),
  rankUpBonus: atomFamily<UnitRankUpBonus | undefined, RankUpUnitNumber>({
    key: '_unitRankUpBonusState',
    default: undefined
  })
};

export const unitLvState = selectorFamily<UnitLvValue, UnitNumber>({
  key: 'unitLvState',
  get: (unit) => ({ get }) => get(unitLvStateAtoms.lv(unit))
});

export const unitHpEnhancementStatusEffectState = selectorFamily<HpEnhancementStatusEffect, UnitNumber>({
  key: 'unitHpEnhancementStatusEffectState',
  get: (unit) => ({ get }) => get(unitLvStateAtoms.hp.statusEffect(unit))
});

export const unitAtkEnhancementStatusEffectState = selectorFamily<AtkEnhancementStatusEffect, UnitNumber>({
  key: 'unitAtkEnhancementStatusEffectState',
  get: (unit) => ({ get }) => get(unitLvStateAtoms.atk.statusEffect(unit))
});

export const unitDefEnhancementStatusEffectState = selectorFamily<DefEnhancementStatusEffect, UnitNumber>({
  key: 'unitDefEnhancementStatusEffectState',
  get: (unit) => ({ get }) => get(unitLvStateAtoms.def.statusEffect(unit))
});

export const unitAccEnhancementStatusEffectState = selectorFamily<AccEnhancementStatusEffect, UnitNumber>({
  key: 'unitAccEnhancementStatusEffectState',
  get: (unit) => ({ get }) => get(unitLvStateAtoms.acc.statusEffect(unit))
});

export const unitEvaEnhancementStatusEffectState = selectorFamily<EvaEnhancementStatusEffect, UnitNumber>({
  key: 'unitEvaEnhancementStatusEffectState',
  get: (unit) => ({ get }) => get(unitLvStateAtoms.eva.statusEffect(unit))
});

export const unitCriEnhancementStatusEffectState = selectorFamily<CriEnhancementStatusEffect, UnitNumber>({
  key: 'unitCriEnhancementStatusEffectState',
  get: (unit) => ({ get }) => get(unitLvStateAtoms.cri.statusEffect(unit))
});

export const unitRankUpBonusEffectState = selectorFamily<UnitRankUpBonus | undefined, UnitNumber>({
  key: 'unitRankUpBonusEffectState',
  get: (unit) => ({ get }) => isRankUpUnitNumber(unit) ? get(unitLvStateAtoms.rankUpBonus(unit)) : undefined
});

const unitCurrentRankState = (<N extends UnitNumber>() =>
  selectorFamily<AvailableUnitRank<N>, N>({
    key: 'unitCurrentRankState',
    get: (unit) => ({ get }) => isRankUpUnitNumber(unit) ? get(unitLvStateAtoms.rank(unit)) : getUnitDefaultRank(unit)
  })
)();

const unitCostState = selectorFamily<UnitCost, UnitBasicInfo>({
  key: 'unitCostState',
  get: (unit) => ({ get }) => {
    const coreLinkCount = get(coreLinkCountState(unit.no));
    const fullLinkBonus = get(fullLinkBonusEffectState(unit.no));

    return isRankUpUnitBasicInfo(unit) ?
      calculateRankUpUnitCost(unit, get(unitCurrentRankState(unit.no)), coreLinkCount, fullLinkBonus) :
      calculateUnitCost(unit, coreLinkCount, fullLinkBonus);
  }
});

const squadUnitCostState = selectorFamily<UnitCost, ReadonlyArray<{ unit: UnitBasicInfo }>>({
  key: 'squadUnitCostState',
  get: (squadUnits) => ({ get }) => {
    return summaryUnitCosts(...squadUnits.map(({ unit }) => get(unitCostState(unit))));
  }
});

const updateUnitLvDependency = selectorFamily<UnitLvValue, UnitNumber>({
  key: 'updateUnitLvDependency',
  get: () => () => { throw new Error(); },
  set: (unit) => ({ set }, lv) => {
    set(updateChip1EquipmentDependency(unit), lv);
    set(updateChip2EquipmentDependency(unit), lv);
    set(updateOsEquipmentDependency(unit), lv);
    set(updateGearEquipmentDependency(unit), lv);
    set(updateCoreLinkDependency(unit), lv);
  }
});

const _unitLvStatusState = atomFamily<UnitLvStatus, UnitNumber>({
  key: '_unitLvStatusState',
  default: (unit) => new UnitLvStatus(unit)
});

const unitLvStatusState = selectorFamily<UnitLvStatus, UnitNumber>({
  key: 'unitLvStatusState',
  get: (unit) => ({ get }) => get(_unitLvStatusState(unit)),
  set: (unit) => ({ get, set }, newValue) => {
    if (newValue instanceof UnitLvStatus) {
      set(unitLvStateAtoms.lv(unit), newValue.lv);
      set(unitLvStateAtoms.lvMode(unit), newValue.lvMode);
      set(unitLvStateAtoms.remainPoints(unit), newValue.remainPoints);
      set(unitLvStateAtoms.canResetPoints(unit), newValue.usedPoints > 0);

      set(unitLvStateAtoms.hp.lv(unit), newValue.hpLv);
      set(unitLvStateAtoms.atk.lv(unit), newValue.atkLv);
      set(unitLvStateAtoms.def.lv(unit), newValue.defLv);
      set(unitLvStateAtoms.acc.lv(unit), newValue.accLv);
      set(unitLvStateAtoms.eva.lv(unit), newValue.evaLv);
      set(unitLvStateAtoms.cri.lv(unit), newValue.criLv);

      set(unitLvStateAtoms.hp.canIncrement(unit), newValue.enableUpHpLv);
      set(unitLvStateAtoms.atk.canIncrement(unit), newValue.enableUpAtkLv);
      set(unitLvStateAtoms.def.canIncrement(unit), newValue.enableUpDefLv);
      set(unitLvStateAtoms.acc.canIncrement(unit), newValue.enableUpAccLv);
      set(unitLvStateAtoms.eva.canIncrement(unit), newValue.enableUpEvaLv);
      set(unitLvStateAtoms.cri.canIncrement(unit), newValue.enableUpCriLv);

      set(unitLvStateAtoms.hp.canDecrement(unit), newValue.enableDownHpLv);
      set(unitLvStateAtoms.atk.canDecrement(unit), newValue.enableDownAtkLv);
      set(unitLvStateAtoms.def.canDecrement(unit), newValue.enableDownDefLv);
      set(unitLvStateAtoms.acc.canDecrement(unit), newValue.enableDownAccLv);
      set(unitLvStateAtoms.eva.canDecrement(unit), newValue.enableDownEvaLv);
      set(unitLvStateAtoms.cri.canDecrement(unit), newValue.enableDownCriLv);

      set(unitLvStateAtoms.hp.statusEffect(unit), newValue.hpStatusEffect);
      set(unitLvStateAtoms.atk.statusEffect(unit), newValue.atkStatusEffect);
      set(unitLvStateAtoms.def.statusEffect(unit), newValue.defStatusEffect);
      set(unitLvStateAtoms.acc.statusEffect(unit), newValue.accStatusEffect);
      set(unitLvStateAtoms.eva.statusEffect(unit), newValue.evaStatusEffect);
      set(unitLvStateAtoms.cri.statusEffect(unit), newValue.criStatusEffect);

      if (isRankUpUnitNumber(unit)) {
        set(unitLvStateAtoms.rank(unit), newValue.rank);

        const prevEnabled = get(unitLvStateAtoms.rankEnabled(unit));
        const nextEnabled: UnitRankUpEnabled = {
          [UnitRank.A]: newValue.isRankEnabled(UnitRank.A),
          [UnitRank.S]: newValue.isRankEnabled(UnitRank.S),
          [UnitRank.SS]: newValue.isRankEnabled(UnitRank.SS)
        };
        if (!deepEqual(prevEnabled, nextEnabled)) {
          set(unitLvStateAtoms.rankEnabled(unit), nextEnabled);
        }

        const prevBonus = get(unitLvStateAtoms.rankUpBonus(unit));
        const nextBonus = newValue.rankUpBonus;
        if (!deepEqual(prevBonus, nextBonus)) {
          set(unitLvStateAtoms.rankUpBonus(unit), nextBonus);
        }
      }

      set(_unitLvStatusState(unit), newValue);

      set(updateUnitLvDependency(unit), newValue.lv);
    }
  }
});

export function useUnitCost(unit: UnitBasicInfo): UnitCost {
  return useRecoilValue(unitCostState(unit));
}

export function useSquadUnitCostSummary(): UnitCost {
  const squad = useSquad();
  return useRecoilValue(squadUnitCostState(squad.units));
}

export function useUnitLv(unit: UnitNumber): [lvMode: UnitLvMode, lv: UnitLvValue, setLv: (lv: UnitLvValue) => void] {
  const lv = useRecoilValue(unitLvState(unit));
  const lvMode = useRecoilValue(unitLvStateAtoms.lvMode(unit));
  const setter = useSetRecoilState(unitLvStatusState(unit));

  return [lvMode, lv, (lv) => { setter(s => s.setUnitLv(lv)); }];
}

export function useUnitLvMode(unit: UnitNumber): [lvMode: UnitLvMode, toggleLvMode: () => void] {
  const lvMode = useRecoilValue(unitLvStateAtoms.lvMode(unit));
  const setter = useSetRecoilState(unitLvStatusState(unit));

  return [lvMode, () => { setter(s => s.toggleLvMode()); }];
}

export function useRemainPoints(unit: UnitNumber): number {
  return useRecoilValue(unitLvStateAtoms.remainPoints(unit));
}

export function useUsedPointReset(unit: UnitNumber): [disable: boolean, reset: () => void] {
  const canReset = useRecoilValue(unitLvStateAtoms.canResetPoints(unit));
  const setter = useSetRecoilState(unitLvStatusState(unit));

  return [!canReset, () => { setter(s => s.resetParameterPoints()); }];
}

export function useStatusParameterEnhancedLv(parameter: EnhanceableStatus, unit: UnitNumber): number {
  switch (parameter) {
  case 'hp':  return useRecoilValue(unitLvStateAtoms.hp.lv(unit));
  case 'atk': return useRecoilValue(unitLvStateAtoms.atk.lv(unit));
  case 'def': return useRecoilValue(unitLvStateAtoms.def.lv(unit));
  case 'acc': return useRecoilValue(unitLvStateAtoms.acc.lv(unit));
  case 'eva': return useRecoilValue(unitLvStateAtoms.eva.lv(unit));
  case 'cri': return useRecoilValue(unitLvStateAtoms.cri.lv(unit));
  }
}

export function useStatusParameterIncrement(parameter: EnhanceableStatus, unit: UnitNumber): [incrementDisabled: boolean, increment: () => void] {
  const setter = useSetRecoilState(unitLvStatusState(unit));

  switch (parameter) {
  case 'hp':  return [!useRecoilValue(unitLvStateAtoms.hp.canIncrement(unit)), () => { setter(s => s.upHpLv()); }];
  case 'atk': return [!useRecoilValue(unitLvStateAtoms.atk.canIncrement(unit)), () => { setter(s => s.upAtkLv()); }];
  case 'def': return [!useRecoilValue(unitLvStateAtoms.def.canIncrement(unit)), () => { setter(s => s.upDefLv()); }];
  case 'acc': return [!useRecoilValue(unitLvStateAtoms.acc.canIncrement(unit)), () => { setter(s => s.upAccLv()); }];
  case 'eva': return [!useRecoilValue(unitLvStateAtoms.eva.canIncrement(unit)), () => { setter(s => s.upEvaLv()); }];
  case 'cri': return [!useRecoilValue(unitLvStateAtoms.cri.canIncrement(unit)), () => { setter(s => s.upCriLv()); }];
  }
}

export function useStatusParameterDecrement(parameter: EnhanceableStatus, unit: UnitNumber): [decrementDisabled: boolean, decrement: () => void] {
  const setter = useSetRecoilState(unitLvStatusState(unit));

  switch (parameter) {
  case 'hp':  return [!useRecoilValue(unitLvStateAtoms.hp.canDecrement(unit)), () => { setter(s => s.downHpLv()); }];
  case 'atk': return [!useRecoilValue(unitLvStateAtoms.atk.canDecrement(unit)), () => { setter(s => s.downAtkLv()); }];
  case 'def': return [!useRecoilValue(unitLvStateAtoms.def.canDecrement(unit)), () => { setter(s => s.downDefLv()); }];
  case 'acc': return [!useRecoilValue(unitLvStateAtoms.acc.canDecrement(unit)), () => { setter(s => s.downAccLv()); }];
  case 'eva': return [!useRecoilValue(unitLvStateAtoms.eva.canDecrement(unit)), () => { setter(s => s.downEvaLv()); }];
  case 'cri': return [!useRecoilValue(unitLvStateAtoms.cri.canDecrement(unit)), () => { setter(s => s.downCriLv()); }];
  }
}

export function useUnitRank(unit: RankUpUnitNumber): [
  currentRank: UnitRank,
  setRank: (rank: UnitRank) => void,
  rankItems: ReadonlyArray<{ rank: UnitRank, availableLv?: RankUpAvailableLv, disabled: boolean }>
] {
  const currentRank = useRecoilValue(unitLvStateAtoms.rank(unit));
  const rankEnabled = useRecoilValue(unitLvStateAtoms.rankEnabled(unit));
  const setter = useSetRecoilState(unitLvStatusState(unit));

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
    rank => { setter(s => s.changeRank(rank)); },
    rankItems
  ];
}

export function useUnitCurrentRank<N extends UnitNumber>(unit: N): AvailableUnitRank<N> {
  return useRecoilValue(unitCurrentRankState(unit));
}

export function useRankUpBonusEffect(unit: UnitNumber): UnitRankUpBonus | undefined {
  return useRecoilValue(unitRankUpBonusEffectState(unit));
}

const unitLvStatusRestore = selector<ReadonlyArray<UnitLvStatus>>({
  key: 'unitLvStatusRestore',
  get: () => [],
  set: ({ set }, newValue) => {
    if (!(newValue instanceof DefaultValue)) {
      newValue.forEach(v => set(unitLvStatusState(v.unit), v));
    }
  }
});

export function useUnitLvStatusResolver(): (param: UnitNumber) => RecoilValueReadOnly<UnitLvStatus> {
  return unitLvStatusState;
}

export function useUnitLvStatusRestore(): (param: ReadonlyArray<UnitLvStatus>) => void {
  return useSetRecoilState(unitLvStatusRestore);
}
