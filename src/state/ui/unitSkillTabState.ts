import { atom } from 'recoil';

export const unitSkillTabState = atom<string | undefined>({
  key: 'unitSkillTabState',
  default: undefined
});
