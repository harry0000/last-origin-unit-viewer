import { atom, atomFamily, DefaultValue, selector, useRecoilValue, useSetRecoilState } from 'recoil';
import { useTranslation } from 'react-i18next';

import { SkillEffectSelectorCondition } from '../../domain/selector/SkillEffectSelectorCondition';
import { UnitBasicInfo, UnitNumber, UnitRank, UnitRole, UnitType } from '../../domain/UnitBasicInfo';
import UnitSelector from '../../domain/selector/UnitSelector';

import { unitBasicData } from '../../data/unitBasicData';
import { unitSkillData } from '../../data/unitSkillData';
import { unitSkillTabState } from '../ui/unitSkillTabState';

const selectorAtoms = {
  unit: atomFamily<boolean, UnitRank | UnitType | UnitRole>({
    key: 'unitConditionSelectorAtom',
    default: true
  }),
  skillEffect: atomFamily<boolean, SkillEffectSelectorCondition>({
    key: 'skillEffectSelectorAtom',
    default: false
  })
};

const _unitSelectedState = atomFamily<boolean, UnitNumber>({
  key: '_unitSelectedState',
  default: false
});

const _selectedUnitBasicInfoState = atom<UnitBasicInfo | undefined>({
  key: '_selectedUnitBasicInfoState',
  default: undefined
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

      Object.values(UnitRank).forEach(rank => set(selectorAtoms.unit(rank), newValue.isRankSelected(rank)));
      Object.values(UnitType).forEach(type => set(selectorAtoms.unit(type), newValue.isTypeSelected(type)));
      Object.values(UnitRole).forEach(role => set(selectorAtoms.unit(role), newValue.isRoleSelected(role)));
      Object
        .values(SkillEffectSelectorCondition)
        .forEach(effect => set(selectorAtoms.skillEffect(effect), newValue.isSkillEffectSelected(effect)));

      set(_unitSelectorState, newValue);
    }
  }
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

export function useFilteredUnitList(): ReadonlyArray<UnitBasicInfo> {
  const unitSelector = useRecoilValue(unitSelectorState);
  return unitSelector.selectUnits(unitBasicData, unitSkillData);
}

export function useUnitRankSelector(rank: UnitRank): [selected: boolean, toggle: () => void] {
  const setter = useSetRecoilState(unitSelectorState);
  return [
    useRecoilValue(selectorAtoms.unit(rank)),
    () => setter(s => s.toggleRank(rank))
  ];
}

export function useUnitTypeSelector(type: UnitType): [selected: boolean, toggle: () => void] {
  const setter = useSetRecoilState(unitSelectorState);
  return [
    useRecoilValue(selectorAtoms.unit(type)),
    () => setter(s => s.toggleType(type))
  ];
}

export function useUnitRoleSelector(role: UnitRole): [selected: boolean, toggle: () => void] {
  const setter = useSetRecoilState(unitSelectorState);
  return [
    useRecoilValue(selectorAtoms.unit(role)),
    () => setter(s => s.toggleRole(role))
  ];
}

export function useSkillEffectBadge(effect: SkillEffectSelectorCondition): boolean {
  return useRecoilValue(selectorAtoms.skillEffect(effect));
}

export function useSkillEffectSelector(effect: SkillEffectSelectorCondition): [selected: boolean, toggle: () => void] {
  const setter = useSetRecoilState(unitSelectorState);
  return [
    useRecoilValue(selectorAtoms.skillEffect(effect)),
    () => setter(s => s.toggleSkillEffect(effect))
  ];
}

export function useUnit(unit: UnitBasicInfo): [
  unitName: string,
  selected: boolean,
  selectUnit: (unit: UnitBasicInfo) => void
] {
  const { t } = useTranslation();
  const setter = useSetRecoilState(unitSelectorState);
  return [
    t('unit:display', { number: unit.no }),
    useRecoilValue(_unitSelectedState(unit.no)),
    (unit) => setter(s => s.selectUnit(unit))
  ];
}
