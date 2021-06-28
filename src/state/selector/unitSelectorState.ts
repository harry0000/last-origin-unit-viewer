import { atom, atomFamily, DefaultValue, selector, selectorFamily } from 'recoil';

import { SkillEffectSelectorCondition } from '../../domain/selector/SkillEffectSelectorCondition';
import { UnitBasicInfo, UnitNumber, UnitRank, UnitRole, UnitType } from '../../domain/UnitBasicInfo';
import UnitSelector from '../../domain/selector/UnitSelector';

import { unitBasicData } from '../../data/unitBasicData';
import { unitSkillData } from '../../data/unitSkillData';
import { unitSkillTabState } from '../ui/unitSkillTabState';

const _unitSelectedState = atomFamily<boolean, UnitNumber>({
  key: '_unitSelectedState',
  default: false
});

export const unitSelectedState = selectorFamily<boolean, UnitNumber>({
  key: 'unitSelectedState',
  get: (unit) => ({ get }) => get(_unitSelectedState(unit))
});

const _unitConditionSelectorState = atomFamily<boolean, UnitRank | UnitType | UnitRole>({
  key: '_unitConditionSelectorState',
  default: true
});

export const unitConditionSelectorState = selectorFamily<boolean, UnitRank | UnitType | UnitRole>({
  key: 'unitConditionSelectorState',
  get: (selector) => ({ get }) => get(_unitConditionSelectorState(selector))
});

const _skillEffectSelectorState = atomFamily<boolean, SkillEffectSelectorCondition>({
  key: '_skillEffectSelectorState',
  default: false
});

export const skillEffectSelectorState = selectorFamily<boolean, SkillEffectSelectorCondition>({
  key: 'skillEffectSelectorState',
  get: (effect) => ({ get }) => get(_skillEffectSelectorState(effect))
});

export const toggleUnitSelector = selectorFamily<void, UnitRank | UnitType | UnitRole>({
  key: 'toggleUnitSelector',
  get: () => () => { return; },
  set: (selector) => ({ set }) => {
    switch (selector) {
    case UnitRank.SS:
    case UnitRank.S:
    case UnitRank.A:
    case UnitRank.B:
      set(unitSelectorState, s => s.toggleRank(selector));
      break;
    case UnitType.Light:
    case UnitType.Flying:
    case UnitType.Heavy:
      set(unitSelectorState, s => s.toggleType(selector));
      break;
    case UnitRole.Attacker:
    case UnitRole.Defender:
    case UnitRole.Supporter:
      set(unitSelectorState, s => s.toggleRole(selector));
      break;
    }
  }
});

export const toggleSkillEffectSelector = selectorFamily<void, SkillEffectSelectorCondition>({
  key: 'toggleSkillEffectSelector',
  get: () => () => { return; },
  set: (effect) => ({ set }) => {
    set(unitSelectorState, s => s.toggleSkillEffect(effect));
  }
});

const _selectedUnitBasicInfoState = atom<UnitBasicInfo | undefined>({
  key: '_selectedUnitBasicInfoState',
  default: undefined
});

export const selectedUnitBasicInfoState = selector<UnitBasicInfo | undefined>({
  key: 'selectedUnitBasicInfoState',
  get: ({ get }) => get(_selectedUnitBasicInfoState),
  set: ({ set }, newValue) => {
    if (newValue && !(newValue instanceof DefaultValue)) {
      set(unitSelectorState, s => s.selectUnit(newValue));
    }
  }
});

export const filteredUnitsState = selector({
  key: 'filteredUnitsState',
  get: ({ get }) => {
    const unitSelector = get(unitSelectorState);
    return unitSelector.selectUnits(unitBasicData, unitSkillData);
  }
});

const _unitSelectorState = atom({
  key: '_unitSelectorState',
  default: UnitSelector.initialState()
});

const unitSelectorState = selector<UnitSelector>({
  key: 'unitSelectorState',
  get: ({ get }) => {
    return get(_unitSelectorState);
  },
  set: ({ get, set }, newValue) => {
    if (newValue instanceof UnitSelector) {
      const prev = get(_unitSelectorState).selectedUnit;
      const next = newValue.selectedUnit;
      if (prev !== next) {
        if (prev) { set(_unitSelectedState(prev.no), false); }
        if (next) { set(_unitSelectedState(next.no), true); }
      }
      set(_selectedUnitBasicInfoState, newValue.selectedUnit);
      set(unitSkillTabState, newValue.selectedUnit ? 'active1' : undefined);

      Object.values(UnitRank).forEach(rank => set(_unitConditionSelectorState(rank), newValue.isRankSelected(rank)));
      Object.values(UnitType).forEach(type => set(_unitConditionSelectorState(type), newValue.isTypeSelected(type)));
      Object.values(UnitRole).forEach(role => set(_unitConditionSelectorState(role), newValue.isRoleSelected(role)));
      Object
        .values(SkillEffectSelectorCondition)
        .forEach(effect => set(_skillEffectSelectorState(effect), newValue.isSkillEffectSelected(effect)));

      set(_unitSelectorState, newValue);
    }
  }
});
