import { CallbackInterface } from 'recoil';

import { UnitBasicInfo, UnitNumber } from '../domain/UnitBasicInfo';
import { UnitLvValue } from '../domain/status/UnitLv';

import * as unitSkillTabState from './ui/UnitSkillTabState';
import { unitCoreLinkState } from './corelink/UnitCoreLinkState';
import { unitEquipmentState } from './equipment/UnitEquipmentState';

export function updateSelectedUnitDependency(
  selected: UnitBasicInfo | undefined
): (cbi: CallbackInterface) => void {
  return (cbi) => {
    unitSkillTabState.updateSelectedUnit(selected)(cbi);
    unitEquipmentState.updateSelectedUnit(selected)(cbi);
  };
}

export function updateUnitLvValueDependency(
  unit: UnitNumber,
  lv: UnitLvValue
): (cbi: CallbackInterface) => void {
  return (cbi) => {
    unitEquipmentState.updateUnitLvValue(unit, lv)(cbi);
    unitCoreLinkState.updateUnitLvValue(unit, lv)(cbi);
  };
}
