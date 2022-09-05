import { CallbackInterface } from 'recoil';

import { UnitBasicInfo, UnitNumber } from '../domain/UnitBasicInfo';
import { UnitLvValue } from '../domain/status/UnitLv';

import { unitCoreLinkState } from './corelink/UnitCoreLinkState';
import {
  updateChip1EquipmentDependency,
  updateChip2EquipmentDependency,
  updateEquipmentSelector,
  updateGearEquipmentDependency,
  updateOsEquipmentDependency
} from './equipment/unitEquipmentState';
import { updateSkillTab } from './ui/unitSkillTabState';

export function updateSelectedUnitDependency(
  selected: UnitBasicInfo | undefined
): (cbi: CallbackInterface) => void {
  return ({ set }) => {
    set(updateSkillTab, selected);
    set(updateEquipmentSelector, selected);
  };
}

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
