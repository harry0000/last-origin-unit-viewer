import { useRecoilCallback, useRecoilValue } from 'recoil';

import { setActiveTab, unitSkillTabState } from './UnitSkillTabState';

export function useSkillTab(): [activeTab: string | undefined, setActiveTab: (tab: string | undefined) => void] {
  return [
    useRecoilValue(unitSkillTabState),
    useRecoilCallback(setActiveTab)
  ];
}

export function useActiveSkillTab(): string | undefined {
  return useRecoilValue(unitSkillTabState);
}
