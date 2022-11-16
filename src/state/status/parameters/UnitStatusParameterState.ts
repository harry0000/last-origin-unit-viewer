import { atomFamily, CallbackInterface, RecoilValueReadOnly, selectorFamily } from 'recoil';

import {
  IntegerValue,
  MicroValue,
  MilliPercentageValue,
  MilliValue,
  equalIntegerValue,
  equalMicroValue,
  equalMilliPercentageValue,
  equalMilliValue
} from '../../../domain/ValueUnit';
import {
  UnitAccStatusParameter,
  UnitAtkStatusParameter,
  UnitCriStatusParameter,
  UnitDefStatusParameter,
  UnitElectricResistStatusParameter,
  UnitEvaStatusParameter,
  UnitFireResistStatusParameter,
  UnitHpStatusParameter,
  UnitIceResistStatusParameter,
  UnitSpdStatusParameter,
  calculateUnitBaseAtk,
  calculateUnitBaseDef,
  calculateUnitBaseHp
} from '../../../domain/status/UnitStatusParameter';
import {
  UnitChip1Equipment,
  UnitChip2Equipment,
  UnitGearEquipment,
  UnitOsEquipment
} from '../../../domain/equipment/UnitEquipment';
import UnitCoreLink from '../../../domain/UnitCoreLink';
import UnitLvStatus from '../../../domain/status/UnitLvStatus';
import { UnitNumber } from '../../../domain/UnitBasicInfo';

import { unitStatusData } from '../../../data/unitStatusData';

import { lvStateResolver } from './UnitLvStatusState';
import { unitCoreLinkResolver } from '../../corelink/UnitCoreLinkState';
import { unitEquipmentResolver } from '../../equipment/UnitEquipmentState';

import { getFromSnapshot, setIfNotDeepEqual } from '../../../util/recoil';

const ZeroIntegerValue: IntegerValue = { value: 0 };
const ZeroMilliValue: MilliValue = { milliValue: 0 };
const ZeroMicroValue: MicroValue = { microValue: 0 };
const ZeroMilliPercentageValue: MilliPercentageValue = { milliPercentage: 0 };

const _hp = atomFamily<IntegerValue, UnitNumber>({ key: 'UnitStatusParameterState_hp', default: (unit) => calculateUnitBaseHp(unit, 1) });
const _atk = atomFamily<MilliValue, UnitNumber>({ key: 'UnitStatusParameterState_atk', default: (unit) => calculateUnitBaseAtk(unit, 1) });
const _def = atomFamily<MilliValue, UnitNumber>({ key: 'UnitStatusParameterState_def', default: (unit) => calculateUnitBaseDef(unit, 1) });
const _acc = atomFamily<MilliPercentageValue, UnitNumber>({ key: 'UnitStatusParameterState_acc', default: (unit) => unitStatusData[unit].acc });
const _eva = atomFamily<MilliPercentageValue, UnitNumber>({ key: 'UnitStatusParameterState_eva', default: (unit) => unitStatusData[unit].eva });
const _cri = atomFamily<MilliPercentageValue, UnitNumber>({ key: 'UnitStatusParameterState_cri', default: (unit) => unitStatusData[unit].cri });
const _spd = atomFamily<MicroValue, UnitNumber>({ key: 'UnitStatusParameterState_spd', default: (unit) => unitStatusData[unit].spd });
const _fireResist = atomFamily<MilliPercentageValue, UnitNumber>({ key: 'UnitStatusParameterState_fireResist', default: (unit) => unitStatusData[unit].fireResist });
const _iceResist = atomFamily<MilliPercentageValue, UnitNumber>({ key: 'UnitStatusParameterState_iceResist', default: (unit) => unitStatusData[unit].iceResist });
const _electricResist = atomFamily<MilliPercentageValue, UnitNumber>({ key: 'UnitStatusParameterState_electricResist', default: (unit) => unitStatusData[unit].electricResist });

const _hpEffectValue = atomFamily<IntegerValue, UnitNumber>({ key: 'UnitStatusParameterState_hpEffectValue', default: ZeroIntegerValue });
const _atkEffectValue = atomFamily<MilliValue, UnitNumber>({ key: 'UnitStatusParameterState_atkEffectValue', default: ZeroMilliValue });
const _defEffectValue = atomFamily<MilliValue, UnitNumber>({ key: 'UnitStatusParameterState_defEffectValue', default: ZeroMilliValue });
const _accEffectValue = atomFamily<MilliPercentageValue, UnitNumber>({ key: 'UnitStatusParameterState_accEffectValue', default: ZeroMilliPercentageValue });
const _evaEffectValue = atomFamily<MilliPercentageValue, UnitNumber>({ key: 'UnitStatusParameterState_evaEffectValue', default: ZeroMilliPercentageValue });
const _criEffectValue = atomFamily<MilliPercentageValue, UnitNumber>({ key: 'UnitStatusParameterState_criEffectValue', default: ZeroMilliPercentageValue });
const _spdEffectValue = atomFamily<MicroValue, UnitNumber>({ key: '', default: ZeroMicroValue });
const _fireResistEffectValue = atomFamily<MilliPercentageValue, UnitNumber>({ key: 'UnitStatusParameterState_fireResistEffectValue', default: ZeroMilliPercentageValue });
const _iceResistEffectValue = atomFamily<MilliPercentageValue, UnitNumber>({ key: 'UnitStatusParameterState_iceResistEffectValue', default: ZeroMilliPercentageValue });
const _electricResistEffectValue = atomFamily<MilliPercentageValue, UnitNumber>({ key: 'UnitStatusParameterState_electricResistEffectValue', default: ZeroMilliPercentageValue });

const _hpCoreLinkBonusValue = atomFamily<IntegerValue, UnitNumber>({ key: 'UnitStatusParameterState_hpCoreLinkBonusValue', default: ZeroIntegerValue });
const _hpFullLinkBonusValue = atomFamily<IntegerValue, UnitNumber>({ key: 'UnitStatusParameterState_hpFullLinkBonusValue', default: ZeroIntegerValue });

const _atkCoreLinkBonusValue = atomFamily<MilliValue, UnitNumber>({ key: 'UnitStatusParameterState_atkCoreLinkBonusValue', default: ZeroMilliValue });
const _defCoreLinkBonusValue = atomFamily<MilliValue, UnitNumber>({ key: 'UnitStatusParameterState_defCoreLinkBonusValue', default: ZeroMilliValue });

function _updateStatus(
  unit: UnitNumber,
  lvState: UnitLvStatus,
  chip1: UnitChip1Equipment,
  chip2: UnitChip2Equipment,
  os: UnitOsEquipment,
  gear: UnitGearEquipment,
  coreLink: UnitCoreLink
): (cbi: CallbackInterface) => void {
  return (cbi) => {
    const lv = lvState.lv;
    const hp = lvState.hpStatusEffect;
    const atk = lvState.atkStatusEffect;
    const def = lvState.defStatusEffect;
    const acc = lvState.accStatusEffect;
    const eva = lvState.evaStatusEffect;
    const cri = lvState.criStatusEffect;
    const rankUpBonus = lvState.rankUpBonus;

    const chip1Effect = chip1.chip1StatusEffects(lv);
    const chip2Effect = chip2.chip2StatusEffects(lv);
    const osEffect = os.osStatusEffects(lv);
    const gearEffect = gear.gearStatusEffects(lv);

    const coreLinkBonus = coreLink.bonusEffects(lv);
    const fullLinkBonus = coreLink.fullLinkBonusEffect(lv);

    const hpParam = new UnitHpStatusParameter(unit, lv, hp, chip1Effect, chip2Effect, osEffect, gearEffect, coreLinkBonus, fullLinkBonus, rankUpBonus);
    const atkParam = new UnitAtkStatusParameter(unit, lv, atk, chip1Effect, chip2Effect, osEffect, gearEffect, coreLinkBonus, rankUpBonus);
    const defParam = new UnitDefStatusParameter(unit, lv, def, chip1Effect, chip2Effect, osEffect, gearEffect, coreLinkBonus, rankUpBonus);
    const accParam = new UnitAccStatusParameter(unit, acc, chip1Effect, chip2Effect, osEffect, gearEffect, coreLinkBonus, fullLinkBonus, rankUpBonus);
    const evaParam = new UnitEvaStatusParameter(unit, eva, chip1Effect, chip2Effect, osEffect, gearEffect, coreLinkBonus, fullLinkBonus, rankUpBonus);
    const criParam = new UnitCriStatusParameter(unit, cri, chip1Effect, chip2Effect, osEffect, gearEffect, coreLinkBonus, fullLinkBonus, rankUpBonus);
    const spdParam = new UnitSpdStatusParameter(unit, chip1Effect, chip2Effect, osEffect, gearEffect, coreLinkBonus, fullLinkBonus, rankUpBonus);
    const fireResist     = new UnitFireResistStatusParameter(unit, chip1Effect, chip2Effect, osEffect, gearEffect);
    const iceResist      = new UnitIceResistStatusParameter(unit, chip1Effect, chip2Effect, osEffect, gearEffect);
    const electricResist = new UnitElectricResistStatusParameter(unit, chip1Effect, chip2Effect, osEffect, gearEffect);

    setIfNotDeepEqual(cbi, _hp(unit), hpParam.hp, equalIntegerValue);
    setIfNotDeepEqual(cbi, _hpEffectValue(unit), hpParam.hpEffectValue, equalIntegerValue);
    setIfNotDeepEqual(cbi, _hpCoreLinkBonusValue(unit), hpParam.hpCoreLinkBonus, equalIntegerValue);
    setIfNotDeepEqual(cbi, _hpFullLinkBonusValue(unit), hpParam.hpFullLinkBonus, equalIntegerValue);

    setIfNotDeepEqual(cbi, _atk(unit), atkParam.atk, equalMilliValue);
    setIfNotDeepEqual(cbi, _atkEffectValue(unit), atkParam.atkEffectValue, equalMilliValue);
    setIfNotDeepEqual(cbi, _atkCoreLinkBonusValue(unit), atkParam.atkCoreLinkBonus, equalMilliValue);

    setIfNotDeepEqual(cbi, _def(unit), defParam.def, equalMilliValue);
    setIfNotDeepEqual(cbi, _defEffectValue(unit), defParam.defEffectValue, equalMilliValue);
    setIfNotDeepEqual(cbi, _defCoreLinkBonusValue(unit), defParam.defCoreLinkBonus, equalMilliValue);

    setIfNotDeepEqual(cbi, _acc(unit), accParam.acc, equalMilliPercentageValue);
    setIfNotDeepEqual(cbi, _accEffectValue(unit), accParam.accEffectValue, equalMilliPercentageValue);

    setIfNotDeepEqual(cbi, _eva(unit), evaParam.eva, equalMilliPercentageValue);
    setIfNotDeepEqual(cbi, _evaEffectValue(unit), evaParam.evaEffectValue, equalMilliPercentageValue);

    setIfNotDeepEqual(cbi, _cri(unit), criParam.cri, equalMilliPercentageValue);
    setIfNotDeepEqual(cbi, _criEffectValue(unit), criParam.criEffectValue, equalMilliPercentageValue);

    setIfNotDeepEqual(cbi, _spd(unit), spdParam.spd, equalMicroValue);
    setIfNotDeepEqual(cbi, _spdEffectValue(unit), spdParam.spdEffectValue, equalMicroValue);

    setIfNotDeepEqual(cbi, _fireResist(unit), fireResist.resist, equalMilliPercentageValue);
    setIfNotDeepEqual(cbi, _fireResistEffectValue(unit), fireResist.resistEffectValue, equalMilliPercentageValue);

    setIfNotDeepEqual(cbi, _iceResist(unit), iceResist.resist, equalMilliPercentageValue);
    setIfNotDeepEqual(cbi, _iceResistEffectValue(unit), iceResist.resistEffectValue, equalMilliPercentageValue);

    setIfNotDeepEqual(cbi, _electricResist(unit), electricResist.resist, equalMilliPercentageValue);
    setIfNotDeepEqual(cbi, _electricResistEffectValue(unit), electricResist.resistEffectValue, equalMilliPercentageValue);
  };
}

export const selectedUnitHp = selectorFamily<IntegerValue, UnitNumber | undefined>({
  key: 'selectedUnitHp',
  get: (selected) => ({ get }) => selected ? get(_hp(selected)) : ZeroIntegerValue
});
export const selectedUnitAtk = selectorFamily<MilliValue, UnitNumber | undefined>({
  key: 'selectedUnitAtk',
  get: (selected) => ({ get }) => selected ? get(_atk(selected)) : ZeroMilliValue
});
export const selectedUnitDef = selectorFamily<MilliValue, UnitNumber | undefined>({
  key: 'selectedUnitDef',
  get: (selected) => ({ get }) => selected ? get(_def(selected)) : ZeroMilliValue
});
export const selectedUnitAcc = selectorFamily<MilliPercentageValue, UnitNumber | undefined>({
  key: 'selectedUnitAcc',
  get: (selected) => ({ get }) => selected ? get(_acc(selected)) : ZeroMilliPercentageValue
});
export const selectedUnitEva = selectorFamily<MilliPercentageValue, UnitNumber | undefined>({
  key: 'selectedUnitEva',
  get: (selected) => ({ get }) => selected ? get(_eva(selected)) : ZeroMilliPercentageValue
});
export const selectedUnitCri = selectorFamily<MilliPercentageValue, UnitNumber | undefined>({
  key: 'selectedUnitCri',
  get: (selected) => ({ get }) => selected ? get(_cri(selected)) : ZeroMilliPercentageValue
});
export const selectedUnitSpd = selectorFamily<MicroValue, UnitNumber | undefined>({
  key: 'selectedUnitSpd',
  get: (selected) => ({ get }) => selected ? get(_spd(selected)) : ZeroMicroValue
});
export const selectedUnitFireResist = selectorFamily<MilliPercentageValue, UnitNumber | undefined>({
  key: 'selectedUnitFireResist',
  get: (selected) => ({ get }) => selected ? get(_fireResist(selected)) : ZeroMilliPercentageValue
});
export const selectedUnitIceResist = selectorFamily<MilliPercentageValue, UnitNumber | undefined>({
  key: 'selectedUnitIceResist',
  get: (selected) => ({ get }) => selected ? get(_iceResist(selected)) : ZeroMilliPercentageValue
});
export const selectedUnitElectricResist = selectorFamily<MilliPercentageValue, UnitNumber | undefined>({
  key: 'selectedUnitElectricResist',
  get: (selected) => ({ get }) => selected ? get(_electricResist(selected)) : ZeroMilliPercentageValue
});

export const hpEffectValue = (unit: UnitNumber): RecoilValueReadOnly<IntegerValue> => _hpEffectValue(unit);
export const atkEffectValue = (unit: UnitNumber): RecoilValueReadOnly<MilliValue> => _atkEffectValue(unit);
export const defEffectValue = (unit: UnitNumber): RecoilValueReadOnly<MilliValue> => _defEffectValue(unit);
export const accEffectValue = (unit: UnitNumber): RecoilValueReadOnly<MilliPercentageValue> => _accEffectValue(unit);
export const evaEffectValue = (unit: UnitNumber): RecoilValueReadOnly<MilliPercentageValue> => _evaEffectValue(unit);
export const criEffectValue = (unit: UnitNumber): RecoilValueReadOnly<MilliPercentageValue> => _criEffectValue(unit);
export const spdEffectValue = (unit: UnitNumber): RecoilValueReadOnly<MicroValue> => _spdEffectValue(unit);
export const fireResistEffectValue = (unit: UnitNumber): RecoilValueReadOnly<MilliPercentageValue> => _fireResistEffectValue(unit);
export const iceResistEffectValue = (unit: UnitNumber): RecoilValueReadOnly<MilliPercentageValue> => _iceResistEffectValue(unit);
export const electricResistEffectValue = (unit: UnitNumber): RecoilValueReadOnly<MilliPercentageValue> => _electricResistEffectValue(unit);

export const hpCoreLinkBonusValue = (unit: UnitNumber): RecoilValueReadOnly<IntegerValue> => _hpCoreLinkBonusValue(unit);
export const atkCoreLinkBonusValue = (unit: UnitNumber): RecoilValueReadOnly<MilliValue> => _atkCoreLinkBonusValue(unit);
export const defCoreLinkBonusValue = (unit: UnitNumber): RecoilValueReadOnly<MilliValue> => _defCoreLinkBonusValue(unit);

export const hpFullLinkBonusValue = (unit: UnitNumber): RecoilValueReadOnly<IntegerValue> => _hpFullLinkBonusValue(unit);

export const updateUnitLvState = (lvState: UnitLvStatus) => (cbi: CallbackInterface): void => {
  const get = getFromSnapshot(cbi.snapshot);
  const unit = lvState.unit;

  _updateStatus(
    unit,
    lvState,
    get(unitEquipmentResolver('chip1')(unit)),
    get(unitEquipmentResolver('chip2')(unit)),
    get(unitEquipmentResolver('os')(unit)),
    get(unitEquipmentResolver('gear')(unit)),
    get(unitCoreLinkResolver(unit))
  )(cbi);
};

export const updateChip1EquipmentState = (chip1: UnitChip1Equipment) => (cbi: CallbackInterface): void => {
  const get = getFromSnapshot(cbi.snapshot);
  const unit = chip1.unit;

  _updateStatus(
    unit,
    get(lvStateResolver(unit)),
    chip1,
    get(unitEquipmentResolver('chip2')(unit)),
    get(unitEquipmentResolver('os')(unit)),
    get(unitEquipmentResolver('gear')(unit)),
    get(unitCoreLinkResolver(unit))
  )(cbi);
};

export const updateChip2EquipmentState = (chip2: UnitChip2Equipment) => (cbi: CallbackInterface): void => {
  const get = getFromSnapshot(cbi.snapshot);
  const unit = chip2.unit;

  _updateStatus(
    unit,
    get(lvStateResolver(unit)),
    get(unitEquipmentResolver('chip1')(unit)),
    chip2,
    get(unitEquipmentResolver('os')(unit)),
    get(unitEquipmentResolver('gear')(unit)),
    get(unitCoreLinkResolver(unit))
  )(cbi);
};

export const updateOsEquipmentState = (os: UnitOsEquipment) => (cbi: CallbackInterface): void => {
  const get = getFromSnapshot(cbi.snapshot);
  const unit = os.unit;

  _updateStatus(
    unit,
    get(lvStateResolver(unit)),
    get(unitEquipmentResolver('chip1')(unit)),
    get(unitEquipmentResolver('chip2')(unit)),
    os,
    get(unitEquipmentResolver('gear')(unit)),
    get(unitCoreLinkResolver(unit))
  )(cbi);
};

export const updateGearEquipmentState = (gear: UnitGearEquipment) => (cbi: CallbackInterface): void => {
  const get = getFromSnapshot(cbi.snapshot);
  const unit = gear.unit;

  _updateStatus(
    unit,
    get(lvStateResolver(unit)),
    get(unitEquipmentResolver('chip1')(unit)),
    get(unitEquipmentResolver('chip2')(unit)),
    get(unitEquipmentResolver('os')(unit)),
    gear,
    get(unitCoreLinkResolver(unit))
  )(cbi);
};

export const updateUnitCoreLinkState = (coreLink: UnitCoreLink) => (cbi: CallbackInterface): void => {
  const get = getFromSnapshot(cbi.snapshot);
  const unit = coreLink.unit;

  _updateStatus(
    unit,
    get(lvStateResolver(unit)),
    get(unitEquipmentResolver('chip1')(unit)),
    get(unitEquipmentResolver('chip2')(unit)),
    get(unitEquipmentResolver('os')(unit)),
    get(unitEquipmentResolver('gear')(unit)),
    coreLink
  )(cbi);
};
