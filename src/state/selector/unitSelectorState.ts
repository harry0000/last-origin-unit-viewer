import { atom, atomFamily, selector, useRecoilValue, useSetRecoilState } from 'recoil';
import { useTranslation } from 'react-i18next';

import { ActiveSkillCondition } from '../../domain/selector/ActiveSkillCondition';
import {
  CoreLinkBonusCondition,
  FullLinkBonusCondition
} from '../../domain/selector/CoreLinkBonusCondition';
import {
  DefensiveSkillEffectCondition,
  OffensiveSkillEffectCondition,
  OtherSkillEffectCondition,
  SkillEffectCondition,
  StatusSkillEffectCondition
} from '../../domain/selector/SkillEffectCondition';
import { RankUpCondition } from '../../domain/selector/RankUpCondition';
import { UnitBasicInfo, UnitNumber, UnitRank, UnitRole, UnitType } from '../../domain/UnitBasicInfo';
import UnitSelector from '../../domain/selector/UnitSelector';

import { unitBasicData } from '../../data/unitBasicData';
import { unitCoreLinkBonusData } from '../../data/unitCoreLinkBonusData';
import { unitRankUpBonusData } from '../../data/unitRankUpBonusData';
import { unitSkillData } from '../../data/unitSkillData';

import { updateEquipmentEnhanceLvSelector } from '../equipment/unitEquipmentState';
import { updateSkillTab } from '../ui/unitSkillTabState';
import { useUnitCurrentRank } from '../status/unitLvStatusState';

import { buildUnitTileIconSrcUrl } from '../../service/UnitIconSrcUrlBuilder';

const selectorAtoms = {
  unit: atomFamily<boolean, UnitRank | UnitType | UnitRole>({
    key: 'unitConditionSelectorAtom',
    default: true
  }),
  skillCondition: atomFamily<boolean, ActiveSkillCondition | SkillEffectCondition>({
    key: 'skillConditionSelectorAtom',
    default: false
  }),
  coreLinkCondition: atomFamily<boolean, CoreLinkBonusCondition | undefined>({
    key: 'coreLinkConditionSelectorAtom',
    default: (cond) => !cond
  }),
  fullLinkCondition: atomFamily<boolean, FullLinkBonusCondition | undefined>({
    key: 'fullLinkConditionSelectorAtom',
    default: (cond) => !cond
  }),
  rankUpCondition: atomFamily<boolean, RankUpCondition | undefined>({
    key: 'rankUpConditionSelectorAtom',
    default: (cond) => !cond
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

const updateSelectedUnitDependency = selector<UnitBasicInfo | undefined>({
  key: 'updateSelectedUnitDependency',
  get: () => { throw new Error(); },
  set: ({ set }, unit) => {
    set(updateSkillTab, unit);
    set(updateEquipmentEnhanceLvSelector, unit);
  }
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

      set(updateSelectedUnitDependency, newValue.selectedUnit);

      Object.values(UnitRank).forEach(rank => set(selectorAtoms.unit(rank), newValue.isRankSelected(rank)));
      Object.values(UnitType).forEach(type => set(selectorAtoms.unit(type), newValue.isTypeSelected(type)));
      Object.values(UnitRole).forEach(role => set(selectorAtoms.unit(role), newValue.isRoleSelected(role)));
      Object
        .values(ActiveSkillCondition)
        .forEach(condition => set(selectorAtoms.skillCondition(condition), newValue.isActiveSkillConditionSelected(condition)));
      Object
        .values(StatusSkillEffectCondition)
        .forEach(condition => set(selectorAtoms.skillCondition(condition), newValue.isSkillEffectSelected(condition)));
      Object
        .values(OffensiveSkillEffectCondition)
        .forEach(condition => set(selectorAtoms.skillCondition(condition), newValue.isSkillEffectSelected(condition)));
      Object
        .values(DefensiveSkillEffectCondition)
        .forEach(condition => set(selectorAtoms.skillCondition(condition), newValue.isSkillEffectSelected(condition)));
      Object
        .values(OtherSkillEffectCondition)
        .forEach(condition => set(selectorAtoms.skillCondition(condition), newValue.isSkillEffectSelected(condition)));

      [undefined, ...Object.values(CoreLinkBonusCondition)]
        .forEach(condition => set(selectorAtoms.coreLinkCondition(condition), newValue.coreLinkBonus === condition));
      [undefined, ...Object.values(FullLinkBonusCondition)]
        .forEach(condition => set(selectorAtoms.fullLinkCondition(condition), newValue.fullLinkBonus === condition));
      [undefined, ...Object.values(RankUpCondition)]
        .forEach(condition => set(selectorAtoms.rankUpCondition(condition), newValue.rankUpCondition === condition));

      set(_unitSelectorState, newValue);
    }
  }
});

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

export function useConditionEmptyBadge(): boolean {
  const actives  = useSelectedActiveSkillConditions();
  const skills   = useSelectedSkillEffectConditions();
  const coreLink = useSelectedCoreLinkBonusCondition();
  const fullLink = useSelectedFullLinkBonusCondition();
  const rankUp   = useSelectedRankUpCondition();

  return !actives.length && !skills.length && !coreLink && !fullLink && !rankUp;
}

export function useSelectedActiveSkillConditions(): ReadonlyArray<ActiveSkillCondition> {
  return Object
    .values(ActiveSkillCondition)
    .filter(cond => useRecoilValue(selectorAtoms.skillCondition(cond)));
}

export function useSelectedSkillEffectConditions(): ReadonlyArray<SkillEffectCondition> {
  return [
    ...Object.values(StatusSkillEffectCondition),
    ...Object.values(OffensiveSkillEffectCondition),
    ...Object.values(DefensiveSkillEffectCondition),
    ...Object.values(OtherSkillEffectCondition)
  ].filter(cond => useRecoilValue(selectorAtoms.skillCondition(cond)));
}

export function useSelectedCoreLinkBonusCondition(): CoreLinkBonusCondition | undefined {
  return Object
    .values(CoreLinkBonusCondition)
    .map(condition => {
      const selected = useRecoilValue(selectorAtoms.coreLinkCondition(condition));
      return selected ? condition : undefined;
    })
    .find(condition => !!condition);
}

export function useSelectedFullLinkBonusCondition(): FullLinkBonusCondition | undefined {
  return Object
    .values(FullLinkBonusCondition)
    .map(condition => {
      const selected = useRecoilValue(selectorAtoms.fullLinkCondition(condition));
      return selected ? condition : undefined;
    })
    .find(condition => !!condition);
}

export function useSelectedRankUpCondition(): RankUpCondition | undefined {
  return Object
    .values(RankUpCondition)
    .map(condition => {
      const selected = useRecoilValue(selectorAtoms.rankUpCondition(condition));
      return selected ? condition : undefined;
    })
    .find(condition => !!condition);
}

export function useCoreLinkBonusConditionSelector(condition: CoreLinkBonusCondition | undefined): [selected: boolean, select: () => void] {
  const setter = useSetRecoilState(unitSelectorState);
  return [
    useRecoilValue(selectorAtoms.coreLinkCondition(condition)),
    () => setter(s => s.selectCoreLinkBonusCondition(condition))
  ];
}

export function useFullLinkBonusConditionSelector(condition: FullLinkBonusCondition | undefined): [selected: boolean, select: () => void] {
  const setter = useSetRecoilState(unitSelectorState);
  return [
    useRecoilValue(selectorAtoms.fullLinkCondition(condition)),
    () => setter(s => s.selectFullLinkBonusCondition(condition))
  ];
}

export function useRankUpConditionSelector(condition: RankUpCondition | undefined): [selected: boolean, select: () => void] {
  const setter = useSetRecoilState(unitSelectorState);
  return [
    useRecoilValue(selectorAtoms.rankUpCondition(condition)),
    () => setter(s => s.selectRankUpCondition(condition))
  ];
}

export function useActiveSkillConditionSelector(condition: ActiveSkillCondition): [selected: boolean, toggle: () => void] {
  const setter = useSetRecoilState(unitSelectorState);
  return [
    useRecoilValue(selectorAtoms.skillCondition(condition)),
    () => setter(s => s.toggleActiveSkillCondition(condition))
  ];
}

export function useSkillEffectConditionSelector(condition: SkillEffectCondition): [selected: boolean, toggle: () => void] {
  const setter = useSetRecoilState(unitSelectorState);
  return [
    useRecoilValue(selectorAtoms.skillCondition(condition)),
    () => setter(s => s.toggleSkillEffectCondition(condition))
  ];
}

export function useFilteredUnitList(): ReadonlyArray<UnitBasicInfo> {
  const unitSelector = useRecoilValue(unitSelectorState);
  return unitSelector.selectUnits(unitBasicData, unitSkillData, unitCoreLinkBonusData, unitRankUpBonusData);
}

export function useSelectedUnit(): UnitBasicInfo | undefined {
  return useRecoilValue(_selectedUnitBasicInfoState);
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

export function useSquadUnit(unit: UnitBasicInfo): [
  unitName: string,
  unitCurrentRank: UnitRank,
  unitImageSrc: string,
  selected: boolean,
  selectUnit: (unit: UnitBasicInfo) => void
] {
  const { t } = useTranslation();
  const rank = useUnitCurrentRank(unit.no);
  const setter = useSetRecoilState(unitSelectorState);

  return [
    t('unit:display', { number: unit.no }),
    rank,
    buildUnitTileIconSrcUrl(unit.no, rank),
    useRecoilValue(_unitSelectedState(unit.no)),
    (unit) => setter(s => s.selectUnit(unit))
  ];
}

export function useUnitSelector(): (unit: UnitBasicInfo) => void {
  const setter = useSetRecoilState(unitSelectorState);

  return (unit) => setter(s => s.selectUnit(unit));
}
