import { atomFamily, selectorFamily, CallbackInterface, RecoilValueReadOnly } from 'recoil';
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
import { UnitLvMode, UnitLvValue } from '../../../domain/status/UnitLv';
import UnitLvStatus from '../../../domain/status/UnitLvStatus';
import { getUnitDefaultRank } from '../../../domain/status/UnitRankState';

import { unitCoreLinkState } from '../../corelink/UnitCoreLinkState';
import { updateUnitLvValueDependency } from '../../transaction';

import { isUpdater, ValueOrUpdater } from '../../../util/recoil';

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
      key: `unitLvStatusState_enhanceLv_${status}_lv`,
      default: 0
    }),
    canIncrement: atomFamily<boolean, UnitNumber>({
      key: `unitLvStatusState_enhanceLv_${status}_canIncrement`,
      default: true
    }),
    canDecrement: atomFamily<boolean, UnitNumber>({
      key: `unitLvStatusState_enhanceLv_${status}_canDecrement`,
      default: false
    }),
    statusEffect: atomFamily<StatusEffect<T>, UnitNumber>({
      key: `unitLvStatusState_enhanceLv_${status}_statusEffect`,
      default: {} as StatusEffect<T>
    })
  };
}

class UnitLvStatusState {
  readonly #unitLvStatusState = atomFamily<UnitLvStatus, UnitNumber>({
    key: 'unitLvStatusState_unitLvStatusState',
    default: (unit) => new UnitLvStatus(unit)
  });

  readonly #lv             = atomFamily<UnitLvValue, UnitNumber>({ key: 'unitLvStatusState_lv', default: 1 });
  readonly #lvMode         = atomFamily<UnitLvMode, UnitNumber>({ key: 'unitLvStatusState_lvMode', default: UnitLvMode.Auto });
  readonly #remainPoints   = atomFamily<number, UnitNumber>({ key: 'unitLvStatusState_remainPoints', default: 300 });
  readonly #canResetPoints = atomFamily<boolean, UnitNumber>({ key: 'unitLvStatusState_canResetPoints', default: false });

  readonly #enhanceLv ={
    hp:  createStatusEnhancementLvState('hp'),
    atk: createStatusEnhancementLvState('atk'),
    def: createStatusEnhancementLvState('def'),
    acc: createStatusEnhancementLvState('acc'),
    eva: createStatusEnhancementLvState('eva'),
    cri: createStatusEnhancementLvState('cri')
  };

  readonly #rank = atomFamily<UnitRank, RankUpUnitNumber>({
    key: 'unitLvStatusState_rank',
    default: (unit) => getUnitDefaultRank(unit)
  });
  readonly #rankUpEnabled = atomFamily<UnitRankUpEnabled, RankUpUnitNumber>({
    key: 'unitLvStatusState_rankUpEnabled',
    default: (unit) => {
      const defaultValue = { [UnitRank.A]: false, [UnitRank.S]: false, [UnitRank.SS]: false };
      const defaultRank = getUnitDefaultRank(unit);
      if (defaultRank !== UnitRank.B) {
        defaultValue[defaultRank] = true;
      }

      return defaultValue;
    }
  });
  readonly #rankUpBonus = atomFamily<UnitRankUpBonus | undefined, RankUpUnitNumber>({ key: 'unitLvStatusState_rankUpBonus', default: undefined });

  readonly #selectedUnitStatusEnhancedLv = selectorFamily<number, { status: Status, selected: UnitNumber | undefined }>({
    key: 'unitLvStatusState_selectedUnitStatusEnhancedLv',
    get: ({ status, selected }) => ({ get }) => selected ? get(this.#enhanceLv[status].lv(selected)) : 0
  });

  readonly #selectedUnitStatusIncrementDisabled = selectorFamily<boolean, { status: Status, selected: UnitNumber | undefined }>({
    key: 'unitLvStatusState_selectedUnitStatusIncrementDisabled',
    get: ({ status, selected }) => ({ get }) => !(selected && get(this.#enhanceLv[status].canIncrement(selected)))
  });

  readonly #selectedUnitStatusDecrementDisabled = selectorFamily<boolean, { status: Status, selected: UnitNumber | undefined }>({
    key: 'unitLvStatusState_selectedUnitStatusDecrementDisabled',
    get: ({ status, selected }) => ({ get }) => !(selected && get(this.#enhanceLv[status].canDecrement(selected)))
  });

  #update(unit: UnitNumber, valueOrUpdater: ValueOrUpdater<UnitLvStatus>): (cbi: CallbackInterface) => void {
    return (cbi) => {
      const { snapshot, set } = cbi;
      const newValue =
        isUpdater(valueOrUpdater) ?
          valueOrUpdater(snapshot.getLoadable(this.#unitLvStatusState(unit)).getValue()) :
          valueOrUpdater;

      set(this.#lv(unit), newValue.lv);
      set(this.#lvMode(unit), newValue.lvMode);
      set(this.#remainPoints(unit), newValue.remainPoints);
      set(this.#canResetPoints(unit), newValue.usedPoints > 0);

      set(this.#enhanceLv.hp.lv(unit), newValue.hpLv);
      set(this.#enhanceLv.atk.lv(unit), newValue.atkLv);
      set(this.#enhanceLv.def.lv(unit), newValue.defLv);
      set(this.#enhanceLv.acc.lv(unit), newValue.accLv);
      set(this.#enhanceLv.eva.lv(unit), newValue.evaLv);
      set(this.#enhanceLv.cri.lv(unit), newValue.criLv);

      set(this.#enhanceLv.hp.canIncrement(unit), newValue.enableUpHpLv);
      set(this.#enhanceLv.atk.canIncrement(unit), newValue.enableUpAtkLv);
      set(this.#enhanceLv.def.canIncrement(unit), newValue.enableUpDefLv);
      set(this.#enhanceLv.acc.canIncrement(unit), newValue.enableUpAccLv);
      set(this.#enhanceLv.eva.canIncrement(unit), newValue.enableUpEvaLv);
      set(this.#enhanceLv.cri.canIncrement(unit), newValue.enableUpCriLv);

      set(this.#enhanceLv.hp.canDecrement(unit), newValue.enableDownHpLv);
      set(this.#enhanceLv.atk.canDecrement(unit), newValue.enableDownAtkLv);
      set(this.#enhanceLv.def.canDecrement(unit), newValue.enableDownDefLv);
      set(this.#enhanceLv.acc.canDecrement(unit), newValue.enableDownAccLv);
      set(this.#enhanceLv.eva.canDecrement(unit), newValue.enableDownEvaLv);
      set(this.#enhanceLv.cri.canDecrement(unit), newValue.enableDownCriLv);

      set(this.#enhanceLv.hp.statusEffect(unit), newValue.hpStatusEffect);
      set(this.#enhanceLv.atk.statusEffect(unit), newValue.atkStatusEffect);
      set(this.#enhanceLv.def.statusEffect(unit), newValue.defStatusEffect);
      set(this.#enhanceLv.acc.statusEffect(unit), newValue.accStatusEffect);
      set(this.#enhanceLv.eva.statusEffect(unit), newValue.evaStatusEffect);
      set(this.#enhanceLv.cri.statusEffect(unit), newValue.criStatusEffect);

      if (isRankUpUnitNumber(unit)) {
        set(this.#rank(unit), newValue.rank);

        const prevEnabled = snapshot.getLoadable(this.#rankUpEnabled(unit)).getValue();
        const nextEnabled: UnitRankUpEnabled = {
          [UnitRank.A]: newValue.isRankEnabled(UnitRank.A),
          [UnitRank.S]: newValue.isRankEnabled(UnitRank.S),
          [UnitRank.SS]: newValue.isRankEnabled(UnitRank.SS)
        };
        if (!deepEqual(prevEnabled, nextEnabled)) {
          set(this.#rankUpEnabled(unit), nextEnabled);
        }

        const prevBonus = snapshot.getLoadable(this.#rankUpBonus(unit)).getValue();
        const nextBonus = newValue.rankUpBonus;
        if (!deepEqual(prevBonus, nextBonus)) {
          set(this.#rankUpBonus(unit), nextBonus);
        }
      }

      set(this.#unitLvStatusState(unit), newValue);

      updateUnitLvValueDependency(unit, newValue.lv)(cbi);
    };
  }

  readonly lvValueState = (unit: UnitNumber): RecoilValueReadOnly<UnitLvValue> => this.#lv(unit);
  readonly lvModeState = (unit: UnitNumber): RecoilValueReadOnly<UnitLvMode> => this.#lvMode(unit);
  readonly remainPointsState = (unit: UnitNumber): RecoilValueReadOnly<number> => this.#remainPoints(unit);
  readonly canResetPointsState = (unit: UnitNumber): RecoilValueReadOnly<boolean> => this.#canResetPoints(unit);

  readonly hpEnhancementStatusEffectState = (unit: UnitNumber): RecoilValueReadOnly<HpEnhancementStatusEffect> => this.#enhanceLv.hp.statusEffect(unit);
  readonly atkEnhancementStatusEffectState = (unit: UnitNumber): RecoilValueReadOnly<AtkEnhancementStatusEffect> => this.#enhanceLv.atk.statusEffect(unit);
  readonly defEnhancementStatusEffectState = (unit: UnitNumber): RecoilValueReadOnly<DefEnhancementStatusEffect> => this.#enhanceLv.def.statusEffect(unit);
  readonly accEnhancementStatusEffectState = (unit: UnitNumber): RecoilValueReadOnly<AccEnhancementStatusEffect> => this.#enhanceLv.acc.statusEffect(unit);
  readonly evaEnhancementStatusEffectState = (unit: UnitNumber): RecoilValueReadOnly<EvaEnhancementStatusEffect> => this.#enhanceLv.eva.statusEffect(unit);
  readonly criEnhancementStatusEffectState = (unit: UnitNumber): RecoilValueReadOnly<CriEnhancementStatusEffect> => this.#enhanceLv.cri.statusEffect(unit);

  readonly rankUpBonusEffectState = selectorFamily<UnitRankUpBonus | undefined, UnitNumber>({
    key: 'rankUpBonusEffectState',
    get: (unit) => ({ get }) => isRankUpUnitNumber(unit) ? get(this.#rankUpBonus(unit)) : undefined
  });

  readonly unitRank = (unit: RankUpUnitNumber): RecoilValueReadOnly<UnitRank> => this.#rank(unit);
  readonly unitRankUpEnabled = (unit: RankUpUnitNumber): RecoilValueReadOnly<UnitRankUpEnabled> => this.#rankUpEnabled(unit);

  readonly currentRankState = (<N extends UnitNumber>() =>
    selectorFamily<AvailableUnitRank<N>, N>({
      key: 'currentRankState',
      get: (unit) => ({ get }) => isRankUpUnitNumber(unit) ? get(this.#rank(unit)) : getUnitDefaultRank(unit)
    })
  )();

  readonly unitCostState = selectorFamily<UnitCost, UnitBasicInfo>({
    key: 'unitCostState',
    get: (unit) => ({ get }) => {
      const {
        coreLinkCountState,
        fullLinkBonusEffectState
      } = unitCoreLinkState;
      const coreLinkCount = get(coreLinkCountState(unit.no));
      const fullLinkBonus = get(fullLinkBonusEffectState(unit.no));

      return isRankUpUnitBasicInfo(unit) ?
        calculateRankUpUnitCost(unit, get(this.currentRankState(unit.no)), coreLinkCount, fullLinkBonus) :
        calculateUnitCost(unit, coreLinkCount, fullLinkBonus);
    }
  });

  readonly squadUnitCostState = selectorFamily<UnitCost, ReadonlyArray<{ unit: UnitBasicInfo }>>({
    key: 'squadUnitCostState',
    get: (squadUnits) => ({ get }) => {
      return summaryUnitCosts(...squadUnits.map(({ unit }) => get(this.unitCostState(unit))));
    }
  });

  readonly statusEnhancedLvState = (status: Status, selected: UnitNumber | undefined): RecoilValueReadOnly<number> =>
    this.#selectedUnitStatusEnhancedLv({ status, selected });

  readonly statusIncrementDisabledState = (status: Status, selected: UnitNumber | undefined): RecoilValueReadOnly<boolean> =>
    this.#selectedUnitStatusIncrementDisabled({ status, selected });

  readonly statusDecrementDisabledState = (status: Status, selected: UnitNumber | undefined): RecoilValueReadOnly<boolean> =>
    this.#selectedUnitStatusDecrementDisabled({ status, selected });

  readonly setLv = (unit: UnitNumber) => (cbi: CallbackInterface) => (lv: UnitLvValue): void => {
    this.#update(unit, s => s.setUnitLv(lv))(cbi);
  };

  readonly toggleLvMode = (unit: UnitNumber) => (cbi: CallbackInterface) => (): void => {
    this.#update(unit, s => s.toggleLvMode())(cbi);
  };

  readonly resetRemainPoints = (unit: UnitNumber) => (cbi: CallbackInterface) => (): void => {
    this.#update(unit, s => s.resetParameterPoints())(cbi);
  };

  readonly incrementStatusLv = (status: Status, selected: UnitNumber | undefined) => (cbi: CallbackInterface) => (): void => {
    if (!selected) {
      return;
    }

    this.#update(
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

  readonly decrementStatusLv = (status: Status, selected: UnitNumber | undefined) => (cbi: CallbackInterface) => (): void => {
    if (!selected) {
      return;
    }

    this.#update(
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

  readonly setRank = (unit: UnitNumber) => (cbi: CallbackInterface) => (rank: UnitRank): void => {
    this.#update(unit, s => s.changeRank(rank))(cbi);
  };

  readonly lvStateResolver = (unit: UnitNumber): RecoilValueReadOnly<UnitLvStatus> => this.#unitLvStatusState(unit);

  readonly restoreLvStatusState = (cbi: CallbackInterface) => (states: ReadonlyArray<UnitLvStatus>): void => {
    states.forEach(s => { this.#update(s.unit, s)(cbi); });
  };
}

export const unitLvStatusState: UnitLvStatusState = new UnitLvStatusState();
