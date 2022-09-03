import { CallbackInterface } from 'recoil';

import { UnitLvValue } from '../domain/status/UnitLv';
import { UnitNumber } from '../domain/UnitBasicInfo';

import {
  updateChip1EquipmentDependency,
  updateChip2EquipmentDependency,
  updateGearEquipmentDependency,
  updateOsEquipmentDependency
} from './equipment/unitEquipmentState';
import { unitCoreLinkState } from './corelink/UnitCoreLinkState';

export function updateUnitLvValueDependency(
  unit: UnitNumber,
  lv: UnitLvValue
): (cbi: CallbackInterface) => void {
  return (cbi) => {
    const { set } = cbi;
    set(updateChip1EquipmentDependency(unit), lv);
    set(updateChip2EquipmentDependency(unit), lv);
    set(updateOsEquipmentDependency(unit), lv);
    set(updateGearEquipmentDependency(unit), lv);

    unitCoreLinkState.updateUnitLvValue(unit, lv)(cbi);
  };
}
