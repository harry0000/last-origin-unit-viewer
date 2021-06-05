import { atomFamily } from 'recoil';
import UnitBaseParameter from '../../domain/status/UnitBaseParameter';
import { UnitBasicInfo } from '../../domain/UnitBasicInfo';

export const unitBaseParameterState = atomFamily<UnitBaseParameter, UnitBasicInfo>({
  key: 'unitBaseParameterState',
  default: (unit) => new UnitBaseParameter(unit)
});
