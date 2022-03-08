import { atom, useRecoilState, useRecoilValue } from 'recoil';

import { UnitBasicInfo } from '../../domain/UnitBasicInfo';

import { setOnlySelector } from '../../util/recoil';

const unitSkillTabState = atom<string | undefined>({
  key: 'unitSkillTabState',
  default: undefined
});

export const updateSkillTab = setOnlySelector<UnitBasicInfo | undefined>({
  key: 'updateSkillTabDependency',
  set: ({ set }, newValue) => {
    set(unitSkillTabState, newValue ? 'active1' : undefined);
  }
});

export function useSkillTab(): [activeTab: string | undefined, setActiveTab: (tab: string | undefined) => void] {
  return useRecoilState(unitSkillTabState);
}

export function useActiveSkillTab(): string | undefined {
  return useRecoilValue(unitSkillTabState);
}
