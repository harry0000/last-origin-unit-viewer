import { useRecoilCallback, useRecoilValue } from 'recoil';
import { useTranslation } from 'react-i18next';

import { ActiveSkillAreaOfEffectCondition } from '../../domain/selector/ActiveSkillAreaOfEffectCondition';
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
import { UnitBasicInfo, UnitRank, UnitRole, UnitType } from '../../domain/UnitBasicInfo';

import {
  activeSkillAreaSelectedState,
  activeSkillSelectedState,
  coreLinkSelectedState,
  filteredUnitListState,
  fullLinkSelectedState,
  rankSelectedState,
  rankUpSelectedState,
  roleSelectedState,
  selectActiveSkillAreaCondition,
  selectCoreLinkBonusCondition,
  selectFullLinkBonusCondition,
  selectRankUpCondition,
  selectUnit,
  selectedUnitState,
  setSelectedUnit,
  skillEffectSelectedState,
  toggleActiveSkillCondition,
  toggleSkillEffectCondition,
  toggleUnitRank,
  toggleUnitRole,
  toggleUnitType,
  typeSelectedState,
  unitSelectedState
} from './UnitSelectorState';
import { useUnitCurrentRank } from '../status/parameters/UnitLvStatusHook';

import { buildUnitTileIconSrcUrl } from '../../service/UnitIconSrcUrlBuilder';
import { notFalsy } from '../../util/type';

export function useUnitRankSelector(rank: UnitRank): [selected: boolean, toggle: () => void] {
  return [
    useRecoilValue(rankSelectedState(rank)),
    useRecoilCallback(toggleUnitRank(rank))
  ];
}

export function useUnitTypeSelector(type: UnitType): [selected: boolean, toggle: () => void] {
  return [
    useRecoilValue(typeSelectedState(type)),
    useRecoilCallback(toggleUnitType(type))
  ];
}

export function useUnitRoleSelector(role: UnitRole): [selected: boolean, toggle: () => void] {
  return [
    useRecoilValue(roleSelectedState(role)),
    useRecoilCallback(toggleUnitRole(role))
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
  return Object.values(ActiveSkillCondition).filter(cond =>
    useRecoilValue(activeSkillSelectedState(cond))
  );
}

export function useSelectedActiveSkillAreaCondition(): ActiveSkillAreaOfEffectCondition | undefined {
  return Object
    .values(ActiveSkillAreaOfEffectCondition)
    .map(condition => {
      const selected = useRecoilValue(activeSkillAreaSelectedState(condition));
      return selected ? condition : undefined;
    })
    .find(notFalsy);
}

export function useSelectedSkillEffectConditions(): ReadonlyArray<SkillEffectCondition> {
  return [
    ...Object.values(StatusSkillEffectCondition),
    ...Object.values(OffensiveSkillEffectCondition),
    ...Object.values(DefensiveSkillEffectCondition),
    ...Object.values(OtherSkillEffectCondition)
  ].filter(cond => useRecoilValue(skillEffectSelectedState(cond)));
}

export function useSelectedCoreLinkBonusCondition(): CoreLinkBonusCondition | undefined {
  return Object
    .values(CoreLinkBonusCondition)
    .map(condition => {
      const selected = useRecoilValue(coreLinkSelectedState(condition));
      return selected ? condition : undefined;
    })
    .find(notFalsy);
}

export function useSelectedFullLinkBonusCondition(): FullLinkBonusCondition | undefined {
  return Object
    .values(FullLinkBonusCondition)
    .map(condition => {
      const selected = useRecoilValue(fullLinkSelectedState(condition));
      return selected ? condition : undefined;
    })
    .find(notFalsy);
}

export function useSelectedRankUpCondition(): RankUpCondition | undefined {
  return Object
    .values(RankUpCondition)
    .map(condition => {
      const selected = useRecoilValue(rankUpSelectedState(condition));
      return selected ? condition : undefined;
    })
    .find(notFalsy);
}

export function useCoreLinkBonusConditionSelector(condition: CoreLinkBonusCondition | undefined): [selected: boolean, select: () => void] {
  return [
    useRecoilValue(coreLinkSelectedState(condition)),
    useRecoilCallback(selectCoreLinkBonusCondition(condition))
  ];
}

export function useFullLinkBonusConditionSelector(condition: FullLinkBonusCondition | undefined): [selected: boolean, select: () => void] {
  return [
    useRecoilValue(fullLinkSelectedState(condition)),
    useRecoilCallback(selectFullLinkBonusCondition(condition))
  ];
}

export function useRankUpConditionSelector(condition: RankUpCondition | undefined): [selected: boolean, select: () => void] {
  return [
    useRecoilValue(rankUpSelectedState(condition)),
    useRecoilCallback(selectRankUpCondition(condition))
  ];
}

export function useActiveSkillConditionSelector(condition: ActiveSkillCondition): [selected: boolean, toggle: () => void] {
  return [
    useRecoilValue(activeSkillSelectedState(condition)),
    useRecoilCallback(toggleActiveSkillCondition(condition))
  ];
}

export function useActiveSkillAreaConditionSelector(condition: ActiveSkillAreaOfEffectCondition | undefined): [selected: boolean, select: () => void] {
  return [
    useRecoilValue(activeSkillAreaSelectedState(condition)),
    useRecoilCallback(selectActiveSkillAreaCondition(condition))
  ];
}

export function useSkillEffectConditionSelector(condition: SkillEffectCondition): [selected: boolean, toggle: () => void] {
  return [
    useRecoilValue(skillEffectSelectedState(condition)),
    useRecoilCallback(toggleSkillEffectCondition(condition))
  ];
}

export function useFilteredUnitList(): ReadonlyArray<UnitBasicInfo> {
  return useRecoilValue(filteredUnitListState);
}

export function useSelectedUnit(): UnitBasicInfo | undefined {
  return useRecoilValue(selectedUnitState);
}

export function useUnit(unit: UnitBasicInfo): [
  unitName: string,
  selected: boolean,
  selectUnit: () => void
] {
  const { t } = useTranslation();
  return [
    t('unit:display', { number: unit.no }),
    useRecoilValue(unitSelectedState(unit)),
    useRecoilCallback(selectUnit(unit))
  ];
}

export function useSquadUnit(unit: UnitBasicInfo): [
  unitName: string,
  unitCurrentRank: UnitRank,
  unitImageSrc: string,
  selected: boolean,
  selectUnit: () => void
] {
  const { t } = useTranslation();
  const rank = useUnitCurrentRank(unit.no);

  return [
    t('unit:display', { number: unit.no }),
    rank,
    buildUnitTileIconSrcUrl(unit.no, rank),
    useRecoilValue(unitSelectedState(unit)),
    useRecoilCallback(selectUnit(unit))
  ];
}

export function useUnitSelector(): (unit: UnitBasicInfo) => void {
  return useRecoilCallback(setSelectedUnit);
}
