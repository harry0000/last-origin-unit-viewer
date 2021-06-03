import { atomFamily } from 'recoil';
import UnitStatus from '../../domain/status/UnitStatus';
import { UnitBasicInfo } from '../../domain/UnitBasicInfo';

export const unitStatusState = atomFamily<UnitStatus, UnitBasicInfo>({
  key: 'unitStatusState',
  default: (unit) => new UnitStatus(unit)
});
