import { atom, CallbackInterface, useRecoilCallback, useRecoilValue } from 'recoil';

import { UnitBasicInfo } from '../../domain/UnitBasicInfo';
import { SkillType } from '../../domain/skill/SkillType';

const unitSkillTabState = atom<string | undefined>({
  key: 'unitSkillTabState',
  default: undefined
});

const setActiveTab = ({ set }: CallbackInterface) => (tab: string | undefined): void => {
  set(unitSkillTabState, tab);
};

export const updateSelectedUnit = (selected: UnitBasicInfo | undefined) => ({ set }: CallbackInterface): void => {
  set(unitSkillTabState, selected ? SkillType.Active1 : undefined);
};

export function useSkillTab(): [activeTab: string | undefined, setActiveTab: (tab: string | undefined) => void] {
  return [
    useRecoilValue(unitSkillTabState),
    useRecoilCallback(setActiveTab)
  ];
}

export function useActiveSkillTab(): string | undefined {
  return useRecoilValue(unitSkillTabState);
}
