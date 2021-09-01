import { atom, selector, useRecoilState, useRecoilValue } from 'recoil';
import { UnitBasicInfo } from '../../domain/UnitBasicInfo';

const unitSkillTabState = atom<string | undefined>({
  key: 'unitSkillTabState',
  default: undefined
});

export const updateSkillTab = selector<UnitBasicInfo | undefined>({
  key: 'updateSkillTabDependency',
  get: () => { throw new Error(); },
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
