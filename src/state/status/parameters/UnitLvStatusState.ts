import { atomFamily, selector, selectorFamily, CallbackInterface, RecoilValueReadOnly } from 'recoil';
import deepEqual from 'fast-deep-equal';

import {
  AccEnhancementStatusEffect,
  AtkEnhancementStatusEffect,
  CriEnhancementStatusEffect,
  DefEnhancementStatusEffect,
  EvaEnhancementStatusEffect,
  HpEnhancementStatusEffect
} from '../../../domain/status/StatusEffect';
import {
  AvailableUnitRank,
  RankUpUnitNumber,
  UnitRankUpBonus,
  isRankUpUnitNumber,
  isRankUpUnitBasicInfo
} from '../../../domain/status/UnitRankUpBonusData';
import { UnitBasicInfo, UnitNumber, UnitRank } from '../../../domain/UnitBasicInfo';
import {
  UnitCost,
  calculateRankUpUnitCost,
  calculateUnitCost,
  summaryUnitCosts
} from '../../../domain/status/UnitCost';
import UnitLv, { UnitLvMode, UnitLvValue } from '../../../domain/status/UnitLv';
import UnitLvStatus from '../../../domain/status/UnitLvStatus';
import { getUnitDefaultRank } from '../../../domain/status/UnitRankState';

import { coreLinkCountState, fullLinkBonusEffectState } from '../../corelink/UnitCoreLinkState';
import { selectedUnitState } from '../../selector/UnitSelectorState';
import { updateUnitLvStateDependency } from '../../transaction';

import { getFromSnapshot, getValue, ValueOrUpdater } from '../../../util/recoil';

type Status = 'hp' | 'atk' | 'def' | 'acc' | 'eva' | 'cri'

export type EnhanceableStatus = Status

type StatusEffect<T extends Status> =
  T extends 'hp' ? HpEnhancementStatusEffect :
  T extends 'atk' ? AtkEnhancementStatusEffect :
  T extends 'def' ? DefEnhancementStatusEffect :
  T extends 'acc' ? AccEnhancementStatusEffect :
  T extends 'eva' ? EvaEnhancementStatusEffect :
  T extends 'cri' ? CriEnhancementStatusEffect :
    never

type UnitRankUpEnabled = Record<Exclude<UnitRank, typeof UnitRank.B>, boolean>

function createStatusEnhancementLvState<T extends Status>(status: T) {
  return {
    lv: atomFamily<number, UnitNumber>({
      key: `UnitLvStatusState_enhanceLv_${status}_lv`,
      default: 0
    }),
    canIncrement: atomFamily<boolean, UnitNumber>({
      key: `UnitLvStatusState_enhanceLv_${status}_canIncrement`,
      default: true
    }),
    canDecrement: atomFamily<boolean, UnitNumber>({
      key: `UnitLvStatusState_enhanceLv_${status}_canDecrement`,
      default: false
    }),
    statusEffect: atomFamily<StatusEffect<T>, UnitNumber>({
      key: `UnitLvStatusState_enhanceLv_${status}_statusEffect`,
      default: {} as StatusEffect<T>
    })
  };
}

const _unitLvStatusState = atomFamily<UnitLvStatus, UnitNumber>({
  key: 'UnitLvStatusState_unitLvStatusState',
  default: (unit) => new UnitLvStatus(unit)
});

const _lv             = atomFamily<UnitLvValue, UnitNumber>({ key: 'UnitLvStatusState_lv', default: 100 });
const _lvMode         = atomFamily<UnitLvMode, UnitNumber>({ key: 'UnitLvStatusState_lvMode', default: UnitLvMode.Manual });
const _remainPoints   = atomFamily<number, UnitNumber>({ key: 'UnitLvStatusState_remainPoints', default: 300 });
const _canResetPoints = atomFamily<boolean, UnitNumber>({ key: 'UnitLvStatusState_canResetPoints', default: false });

const _enhanceLv ={
  hp:  createStatusEnhancementLvState('hp'),
  atk: createStatusEnhancementLvState('atk'),
  def: createStatusEnhancementLvState('def'),
  acc: createStatusEnhancementLvState('acc'),
  eva: createStatusEnhancementLvState('eva'),
  cri: createStatusEnhancementLvState('cri')
};

const _rank = atomFamily<UnitRank, RankUpUnitNumber>({
  key: 'UnitLvStatusState_rank',
  default: (unit) => getUnitDefaultRank(unit)
});
const _rankUpEnabled = atomFamily<UnitRankUpEnabled, RankUpUnitNumber>({
  key: 'UnitLvStatusState_rankUpEnabled',
  default: (unit) => {
    const lvStatus = new UnitLvStatus(unit,  new UnitLv());
    return {
      [UnitRank.A]: lvStatus.isRankEnabled(UnitRank.A),
      [UnitRank.S]: lvStatus.isRankEnabled(UnitRank.S),
      [UnitRank.SS]: lvStatus.isRankEnabled(UnitRank.SS)
    };
  }
});
const _rankUpBonus = atomFamily<UnitRankUpBonus | undefined, RankUpUnitNumber>({ key: 'UnitLvStatusState_rankUpBonus', default: undefined });

const _selectedUnitStatusEnhancedLv = selectorFamily<number, { status: Status, selected: UnitNumber | undefined }>({
  key: 'UnitLvStatusState_selectedUnitStatusEnhancedLv',
  get: ({ status, selected }) => ({ get }) => selected ? get(_enhanceLv[status].lv(selected)) : 0
});

const _selectedUnitStatusIncrementDisabled = selectorFamily<boolean, { status: Status, selected: UnitNumber | undefined }>({
  key: 'UnitLvStatusState_selectedUnitStatusIncrementDisabled',
  get: ({ status, selected }) => ({ get }) => !(selected && get(_enhanceLv[status].canIncrement(selected)))
});

const _selectedUnitStatusDecrementDisabled = selectorFamily<boolean, { status: Status, selected: UnitNumber | undefined }>({
  key: 'UnitLvStatusState_selectedUnitStatusDecrementDisabled',
  get: ({ status, selected }) => ({ get }) => !(selected && get(_enhanceLv[status].canDecrement(selected)))
});

function _update(unit: UnitNumber, valueOrUpdater: ValueOrUpdater<UnitLvStatus>): (cbi: CallbackInterface) => void {
  return (cbi) => {
    const set = cbi.set;
    const get = getFromSnapshot(cbi.snapshot);
    const prevValue = get(_unitLvStatusState(unit));
    const nextValue = getValue(valueOrUpdater, () => prevValue);

    set(_lv(unit), nextValue.lv);
    set(_lvMode(unit), nextValue.lvMode);
    set(_remainPoints(unit), nextValue.remainPoints);
    set(_canResetPoints(unit), nextValue.usedPoints > 0);

    set(_enhanceLv.hp.lv(unit), nextValue.hpLv);
    set(_enhanceLv.atk.lv(unit), nextValue.atkLv);
    set(_enhanceLv.def.lv(unit), nextValue.defLv);
    set(_enhanceLv.acc.lv(unit), nextValue.accLv);
    set(_enhanceLv.eva.lv(unit), nextValue.evaLv);
    set(_enhanceLv.cri.lv(unit), nextValue.criLv);

    set(_enhanceLv.hp.canIncrement(unit), nextValue.enableUpHpLv);
    set(_enhanceLv.atk.canIncrement(unit), nextValue.enableUpAtkLv);
    set(_enhanceLv.def.canIncrement(unit), nextValue.enableUpDefLv);
    set(_enhanceLv.acc.canIncrement(unit), nextValue.enableUpAccLv);
    set(_enhanceLv.eva.canIncrement(unit), nextValue.enableUpEvaLv);
    set(_enhanceLv.cri.canIncrement(unit), nextValue.enableUpCriLv);

    set(_enhanceLv.hp.canDecrement(unit), nextValue.enableDownHpLv);
    set(_enhanceLv.atk.canDecrement(unit), nextValue.enableDownAtkLv);
    set(_enhanceLv.def.canDecrement(unit), nextValue.enableDownDefLv);
    set(_enhanceLv.acc.canDecrement(unit), nextValue.enableDownAccLv);
    set(_enhanceLv.eva.canDecrement(unit), nextValue.enableDownEvaLv);
    set(_enhanceLv.cri.canDecrement(unit), nextValue.enableDownCriLv);

    set(_enhanceLv.hp.statusEffect(unit), nextValue.hpStatusEffect);
    set(_enhanceLv.atk.statusEffect(unit), nextValue.atkStatusEffect);
    set(_enhanceLv.def.statusEffect(unit), nextValue.defStatusEffect);
    set(_enhanceLv.acc.statusEffect(unit), nextValue.accStatusEffect);
    set(_enhanceLv.eva.statusEffect(unit), nextValue.evaStatusEffect);
    set(_enhanceLv.cri.statusEffect(unit), nextValue.criStatusEffect);

    if (isRankUpUnitNumber(unit)) {
      set(_rank(unit), nextValue.rank);

      const prevEnabled = get(_rankUpEnabled(unit));
      const nextEnabled: UnitRankUpEnabled = {
        [UnitRank.A]: nextValue.isRankEnabled(UnitRank.A),
        [UnitRank.S]: nextValue.isRankEnabled(UnitRank.S),
        [UnitRank.SS]: nextValue.isRankEnabled(UnitRank.SS)
      };
      if (!deepEqual(prevEnabled, nextEnabled)) {
        set(_rankUpEnabled(unit), nextEnabled);
      }

      const prevBonus = get(_rankUpBonus(unit));
      const nextBonus = nextValue.rankUpBonus;
      if (!deepEqual(prevBonus, nextBonus)) {
        set(_rankUpBonus(unit), nextBonus);
      }
    }

    set(_unitLvStatusState(unit), nextValue);

    if (nextValue !== prevValue) {
      updateUnitLvStateDependency(nextValue)(cbi);
    }
  };
}

export const lvValueState = (unit: UnitNumber): RecoilValueReadOnly<UnitLvValue> => _lv(unit);
export const lvModeState = (unit: UnitNumber): RecoilValueReadOnly<UnitLvMode> => _lvMode(unit);
export const remainPointsState = (unit: UnitNumber): RecoilValueReadOnly<number> => _remainPoints(unit);
export const canResetPointsState = (unit: UnitNumber): RecoilValueReadOnly<boolean> => _canResetPoints(unit);

export const hpEnhancementStatusEffectState = (unit: UnitNumber): RecoilValueReadOnly<HpEnhancementStatusEffect> => _enhanceLv.hp.statusEffect(unit);
export const atkEnhancementStatusEffectState = (unit: UnitNumber): RecoilValueReadOnly<AtkEnhancementStatusEffect> => _enhanceLv.atk.statusEffect(unit);
export const defEnhancementStatusEffectState = (unit: UnitNumber): RecoilValueReadOnly<DefEnhancementStatusEffect> => _enhanceLv.def.statusEffect(unit);
export const accEnhancementStatusEffectState = (unit: UnitNumber): RecoilValueReadOnly<AccEnhancementStatusEffect> => _enhanceLv.acc.statusEffect(unit);
export const evaEnhancementStatusEffectState = (unit: UnitNumber): RecoilValueReadOnly<EvaEnhancementStatusEffect> => _enhanceLv.eva.statusEffect(unit);
export const criEnhancementStatusEffectState = (unit: UnitNumber): RecoilValueReadOnly<CriEnhancementStatusEffect> => _enhanceLv.cri.statusEffect(unit);

export const rankUpBonusEffectState = selectorFamily<UnitRankUpBonus | undefined, UnitNumber>({
  key: 'rankUpBonusEffectState',
  get: (unit) => ({ get }) => isRankUpUnitNumber(unit) ? get(_rankUpBonus(unit)) : undefined
});

export const unitRank = (unit: RankUpUnitNumber): RecoilValueReadOnly<UnitRank> => _rank(unit);
export const unitRankUpEnabled = (unit: RankUpUnitNumber): RecoilValueReadOnly<UnitRankUpEnabled> => _rankUpEnabled(unit);

export const currentRankState = (<N extends UnitNumber>() =>
  selectorFamily<AvailableUnitRank<N>, N>({
    key: 'currentRankState',
    get: (unit) => ({ get }) => isRankUpUnitNumber(unit) ? get(_rank(unit)) : getUnitDefaultRank(unit)
  })
)();

export const selectedUnitCurrentRankState = selector<UnitRank | undefined>({
  key: 'selectedUnitCurrentRankState',
  get: ({ get }) => {
    const selected = get(selectedUnitState);
    return selected && get(currentRankState(selected.no));
  }
});

export const unitCostState = selectorFamily<UnitCost, UnitBasicInfo>({
  key: 'unitCostState',
  get: (unit) => ({ get }) => {
    const coreLinkCount = get(coreLinkCountState(unit.no));
    const fullLinkBonus = get(fullLinkBonusEffectState(unit.no));

    return isRankUpUnitBasicInfo(unit) ?
      calculateRankUpUnitCost(unit, get(currentRankState(unit.no)), coreLinkCount, fullLinkBonus) :
      calculateUnitCost(unit, coreLinkCount, fullLinkBonus);
  }
});

export const squadUnitCostState = selectorFamily<UnitCost, ReadonlyArray<{ unit: UnitBasicInfo }>>({
  key: 'squadUnitCostState',
  get: (squadUnits) => ({ get }) => {
    return summaryUnitCosts(...squadUnits.map(({ unit }) => get(unitCostState(unit))));
  }
});

export const statusEnhancedLvState = (status: Status, selected: UnitNumber | undefined): RecoilValueReadOnly<number> =>
  _selectedUnitStatusEnhancedLv({ status, selected });

export const statusIncrementDisabledState = (status: Status, selected: UnitNumber | undefined): RecoilValueReadOnly<boolean> =>
  _selectedUnitStatusIncrementDisabled({ status, selected });

export const statusDecrementDisabledState = (status: Status, selected: UnitNumber | undefined): RecoilValueReadOnly<boolean> =>
  _selectedUnitStatusDecrementDisabled({ status, selected });

export const setLv = (unit: UnitNumber) => (cbi: CallbackInterface) => (lv: UnitLvValue): void => {
  _update(unit, s => s.setUnitLv(lv))(cbi);
};

export const toggleLvMode = (unit: UnitNumber) => (cbi: CallbackInterface) => (): void => {
  _update(unit, s => s.toggleLvMode())(cbi);
};

export const resetRemainPoints = (unit: UnitNumber) => (cbi: CallbackInterface) => (): void => {
  _update(unit, s => s.resetParameterPoints())(cbi);
};

export const incrementStatusLv = (status: Status, selected: UnitNumber | undefined) => (cbi: CallbackInterface) => (): void => {
  if (!selected) {
    return;
  }

  _update(
    selected,
    s => {
      switch (status) {
      case 'hp':  return s.upHpLv();
      case 'atk': return s.upAtkLv();
      case 'def': return s.upDefLv();
      case 'acc': return s.upAccLv();
      case 'eva': return s.upEvaLv();
      case 'cri': return s.upCriLv();
      }
    })(cbi);
};

export const decrementStatusLv = (status: Status, selected: UnitNumber | undefined) => (cbi: CallbackInterface) => (): void => {
  if (!selected) {
    return;
  }

  _update(
    selected,
    s => {
      switch (status) {
      case 'hp':  return s.downHpLv();
      case 'atk': return s.downAtkLv();
      case 'def': return s.downDefLv();
      case 'acc': return s.downAccLv();
      case 'eva': return s.downEvaLv();
      case 'cri': return s.downCriLv();
      }
    })(cbi);
};

export const setRank = (unit: UnitNumber) => (cbi: CallbackInterface) => (rank: UnitRank): void => {
  _update(unit, s => s.changeRank(rank))(cbi);
};

export const lvStateResolver = (unit: UnitNumber): RecoilValueReadOnly<UnitLvStatus> => _unitLvStatusState(unit);

export const restoreLvStatusState = (cbi: CallbackInterface) => (states: ReadonlyArray<UnitLvStatus>): void => {
  states.forEach(s => { _update(s.unit, s)(cbi); });
};
