import { atom, CallbackInterface, RecoilValueReadOnly } from 'recoil';

import { UnitBasicInfo } from '../../domain/UnitBasicInfo';
import { SkillType } from '../../domain/skill/SkillType';

const _unitSkillTab = atom<string | undefined>({
  key: 'UnitSkillTabState_unitSkillTab',
  default: undefined
});

export const unitSkillTabState: RecoilValueReadOnly<string | undefined> = _unitSkillTab;

export const setActiveTab = ({ set }: CallbackInterface) => (tab: string | undefined): void => {
  set(_unitSkillTab, tab);
};

export const updateSelectedUnit = (selected: UnitBasicInfo | undefined) => ({ set }: CallbackInterface): void => {
  set(_unitSkillTab, selected ? SkillType.Active1 : undefined);
};
