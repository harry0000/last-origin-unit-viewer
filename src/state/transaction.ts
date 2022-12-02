import { CallbackInterface } from 'recoil';

import { Squad } from '../domain/squad/Squad';
import UnitAffection from '../domain/UnitAffection';
import { UnitBasicInfo } from '../domain/UnitBasicInfo';
import {
  UnitChip1Equipment,
  UnitChip2Equipment,
  UnitGearEquipment,
  UnitOsEquipment
} from '../domain/equipment/UnitEquipment';
import UnitCoreLink from '../domain/UnitCoreLink';
import UnitDamagedState from '../domain/UnitDamagedState';
import UnitLvStatus from '../domain/status/UnitLvStatus';
import { UnitSkill } from '../domain/skill/UnitSkill';

import { EquipmentSlot, EquipmentUpdateCallbackArgs } from './equipment/UnitEquipmentState';
import * as UnitCoreLinkState from './corelink/UnitCoreLinkState';
import * as UnitEquipmentState from './equipment/UnitEquipmentState';
import * as UnitSkillTabState from './ui/UnitSkillTabState';
import * as UnitStatusParameterState from './status/parameters/UnitStatusParameterState';

export function updateSelectedUnitDependency(
  selected: UnitBasicInfo | undefined
): (cbi: CallbackInterface) => void {
  return (cbi) => {
    UnitSkillTabState.updateSelectedUnit(selected)(cbi);
    UnitEquipmentState.updateSelectedUnit(selected)(cbi);
  };
}

export function updateUnitLvStateDependency(
  unitLvStatus: UnitLvStatus
): (cbi: CallbackInterface) => void {
  return (cbi) => {
    const unit = unitLvStatus.unit;
    const lv = unitLvStatus.lv;

    UnitEquipmentState.updateUnitLvValue(unit, lv)(cbi);
    UnitCoreLinkState.updateUnitLvValue(unit, lv)(cbi);

    UnitStatusParameterState.updateUnitLvState(unitLvStatus)(cbi);
  };
}

export function updateUnitEquipmentDependency<T extends EquipmentSlot>(
  args: EquipmentUpdateCallbackArgs<T>
): (cbi: CallbackInterface) => void;
export function updateUnitEquipmentDependency(
  [slot, unitEquipment]:
    [slot: 'chip1', unitEquipment: UnitChip1Equipment] |
    [slot: 'chip2', unitEquipment: UnitChip2Equipment] |
    [slot: 'os',    unitEquipment: UnitOsEquipment] |
    [slot: 'gear',  unitEquipment: UnitGearEquipment]
): (cbi: CallbackInterface) => void {
  return (cbi) => {
    switch (slot) {
    case 'chip1': UnitStatusParameterState.updateChip1EquipmentState(unitEquipment)(cbi); break;
    case 'chip2': UnitStatusParameterState.updateChip2EquipmentState(unitEquipment)(cbi); break;
    case 'os':    UnitStatusParameterState.updateOsEquipmentState(unitEquipment)(cbi);    break;
    case 'gear':  UnitStatusParameterState.updateGearEquipmentState(unitEquipment)(cbi);  break;
    }
  };
}

export function updateUnitCoreLinkDependency(
  unitCoreLink: UnitCoreLink
): (cbi: CallbackInterface) => void {
  return (cbi) => {
    UnitStatusParameterState.updateUnitCoreLinkState(unitCoreLink)(cbi);
  };
}

export function updateSquadDependency(
  squad: Squad
): (cbi: CallbackInterface) => void {
  return (cbi) => {
    UnitStatusParameterState.updateSquadState(squad)(cbi);
  };
}

export function updateUnitSkillDependency(
  unitSkill: UnitSkill
): (cbi: CallbackInterface) => void {
  return (cbi) => {
    UnitStatusParameterState.updateUnitSkillState(unitSkill)(cbi);
  };
}

export function updateUnitAffectionDependency(
  affection: UnitAffection
): (cbi: CallbackInterface) => void {
  return (cbi) => {
    UnitStatusParameterState.updateUnitAffectionState(affection)(cbi);
  };
}

export function updateUnitDamagedDependency(
  damaged: UnitDamagedState
): (cbi: CallbackInterface) => void {
  return (cbi) => {
    UnitStatusParameterState.updateUnitDamagedState(damaged)(cbi);
  };
}
