import { atom } from 'recoil';
import UnitStore from '../../store/UnitStore';

export const unitStoreState = atom({
  key: 'unitStoreState',
  default: UnitStore.initialState()
});
