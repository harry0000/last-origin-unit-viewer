import { atomFamily } from 'recoil';
import { UnitBasicInfo } from '../../domain/UnitBasicInfo';
import { buildUnit, Unit } from '../../domain/Unit';

export const unitState = atomFamily<Unit, UnitBasicInfo>({
  key: 'unitState',
  default: (unit) => buildUnit(unit)
});
