import { atomFamily, DefaultValue, RecoilValueReadOnly, selector, selectorFamily, useSetRecoilState } from 'recoil';

import {
  AccEnhancementStatusEffect,
  AtkEnhancementStatusEffect,
  CriEnhancementStatusEffect,
  DefEnhancementStatusEffect,
  EvaEnhancementStatusEffect,
  HpEnhancementStatusEffect
} from '../../domain/status/StatusEffect';
import { UnitLvMode, UnitLvValue } from '../../domain/status/UnitLv';
import UnitLvStatus from '../../domain/status/UnitLvStatus';
import { UnitNumber } from '../../domain/UnitBasicInfo';

import { selectedUnitBasicInfoState } from '../selector/unitSelectorState';
import {
  updateChip1EquipmentDependency,
  updateChip2EquipmentDependency,
  updateGearEquipmentDependency,
  updateOsEquipmentDependency
} from '../equipment/unitEquipmentState';
import { updateCoreLinkDependency } from '../corelink/unitCoreLinkState';

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
  cri: createUnitStatusLvState('Cri')
};

export const unitLvState = selectorFamily<UnitLvValue, UnitNumber>({
  key: 'unitLvState',
  get: (unit) => ({ get }) => get(unitLvStateAtoms.lv(unit))
});

export const selectedUnitLvState = selector<UnitLvValue | undefined>({
  key: 'selectedUnitLvState',
  get: ({ get }) => {
    const selected = get(selectedUnitBasicInfoState);
    return selected && get(unitLvStateAtoms.lv(selected.no));
  },
  set: ({ get, set }, lv) => {
    const selected = get(selectedUnitBasicInfoState);
    if (selected && typeof lv === 'number') {
      set(unitLvStatusState(selected.no), s => s.setUnitLv(lv));
    }
  }
});

export const selectedUnitLvModeState = selector<UnitLvMode | undefined>({
  key: 'selectedUnitLvModeState',
  get: ({ get }) => {
    const selected = get(selectedUnitBasicInfoState);
    return selected && get(unitLvStateAtoms.lvMode(selected.no));
  }
});

export const selectedUnitRemainPointsState = selector<number | undefined>({
  key: 'selectedUnitRemainPointsState',
  get: ({ get }) => {
    const selected = get(selectedUnitBasicInfoState);
    return selected && get(unitLvStateAtoms.remainPoints(selected.no));
  }
});

export const selectedUnitUsedPointsCanResetState = selector<boolean | undefined>({
  key: 'selectedUnitUsedPointsCanResetState',
  get: ({ get }) => {
    const selected = get(selectedUnitBasicInfoState);
    return selected && get(unitLvStateAtoms.canResetPoints(selected.no));
  }
});

export const unitStatusEnhancementLvState = selectorFamily<number, [unit: UnitNumber, status: Status]>({
  key: 'unitStatusEnhancementLvState',
  get: ([unit, status]) => ({ get }) => {
    switch (status) {
    case 'hp': return get(unitLvStateAtoms.hp.lv(unit));
    case 'atk': return get(unitLvStateAtoms.atk.lv(unit));
    case 'def': return get(unitLvStateAtoms.def.lv(unit));
    case 'acc': return get(unitLvStateAtoms.acc.lv(unit));
    case 'eva': return get(unitLvStateAtoms.eva.lv(unit));
    case 'cri': return get(unitLvStateAtoms.cri.lv(unit));
    }
  }
});

export const selectedUnitStatusEnhancementLvState = selectorFamily<number | undefined, Status>({
  key: 'selectedUnitStatusEnhancementLvState',
  get: (status) => ({ get }) => {
    const selected = get(selectedUnitBasicInfoState);
    if (!selected) {
      return undefined;
    }

    switch (status) {
    case 'hp': return get(unitLvStateAtoms.hp.lv(selected.no));
    case 'atk': return get(unitLvStateAtoms.atk.lv(selected.no));
    case 'def': return get(unitLvStateAtoms.def.lv(selected.no));
    case 'acc': return get(unitLvStateAtoms.acc.lv(selected.no));
    case 'eva': return get(unitLvStateAtoms.eva.lv(selected.no));
    case 'cri': return get(unitLvStateAtoms.cri.lv(selected.no));
    }
  }
});

export const selectedUnitStatusCanIncrementState = selectorFamily<boolean | undefined, Status>({
  key: 'unitStatusCanIncrementState',
  get: (status) => ({ get }) => {
    const selected = get(selectedUnitBasicInfoState);
    if (!selected) {
      return undefined;
    }

    switch (status) {
    case 'hp': return get(unitLvStateAtoms.hp.canIncrement(selected.no));
    case 'atk': return get(unitLvStateAtoms.atk.canIncrement(selected.no));
    case 'def': return get(unitLvStateAtoms.def.canIncrement(selected.no));
    case 'acc': return get(unitLvStateAtoms.acc.canIncrement(selected.no));
    case 'eva': return get(unitLvStateAtoms.eva.canIncrement(selected.no));
    case 'cri': return get(unitLvStateAtoms.cri.canIncrement(selected.no));
    }
  }
});

export const selectedUnitStatusCanDecrementState = selectorFamily<boolean | undefined, Status>({
  key: 'unitStatusCanDecrementState',
  get: (status) => ({ get }) => {
    const selected = get(selectedUnitBasicInfoState);
    if (!selected) {
      return undefined;
    }

    switch (status) {
    case 'hp': return get(unitLvStateAtoms.hp.canDecrement(selected.no));
    case 'atk': return get(unitLvStateAtoms.atk.canDecrement(selected.no));
    case 'def': return get(unitLvStateAtoms.def.canDecrement(selected.no));
    case 'acc': return get(unitLvStateAtoms.acc.canDecrement(selected.no));
    case 'eva': return get(unitLvStateAtoms.eva.canDecrement(selected.no));
    case 'cri': return get(unitLvStateAtoms.cri.canDecrement(selected.no));
    }
  }
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

export const toggleUnitLvMode = selector<void>({
  key: 'toggleUnitLvMode',
  get: () => { return; },
  set: ({ get, set }) => {
    const selected = get(selectedUnitBasicInfoState);
    selected && set(unitLvStatusState(selected.no), s => s.toggleLvMode());
  }
});

export const resetUnitPoints = selector<void>({
  key: 'resetUnitPoints',
  get: () => { return; },
  set: ({ get, set }) => {
    const selected = get(selectedUnitBasicInfoState);
    selected && set(unitLvStatusState(selected.no), s => s.resetParameterPoints());
  }
});

export const incrementUnitStatusLv = selectorFamily<void, Status>({
  key: 'incrementUnitStatusLv',
  get: () => () => { return; },
  set: (status) => ({ get, set }) => {
    const selected = get(selectedUnitBasicInfoState);
    if (!selected) {
      return;
    }

    switch (status) {
    case 'hp': return set(unitLvStatusState(selected.no), s => s.upHpLv());
    case 'atk': return set(unitLvStatusState(selected.no), s => s.upAtkLv());
    case 'def': return set(unitLvStatusState(selected.no), s => s.upDefLv());
    case 'acc': return set(unitLvStatusState(selected.no), s => s.upAccLv());
    case 'eva': return set(unitLvStatusState(selected.no), s => s.upEvaLv());
    case 'cri': return set(unitLvStatusState(selected.no), s => s.upCriLv());
    }
  }
});

export const decrementUnitStatusLv = selectorFamily<void, Status>({
  key: 'decrementUnitStatusLv',
  get: () => () => { return; },
  set: (status) => ({ get, set }) => {
    const selected = get(selectedUnitBasicInfoState);
    if (!selected) {
      return;
    }

    switch (status) {
    case 'hp': return set(unitLvStatusState(selected.no), s => s.downHpLv());
    case 'atk': return set(unitLvStatusState(selected.no), s => s.downAtkLv());
    case 'def': return set(unitLvStatusState(selected.no), s => s.downDefLv());
    case 'acc': return set(unitLvStatusState(selected.no), s => s.downAccLv());
    case 'eva': return set(unitLvStatusState(selected.no), s => s.downEvaLv());
    case 'cri': return set(unitLvStatusState(selected.no), s => s.downCriLv());
    }
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
  set: (unit) => ({ set }, newValue) => {
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

      set(_unitLvStatusState(unit), newValue);

      set(updateUnitLvDependency(unit), newValue.lv);
    }
  }
});

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
