import {
  atom,
  atomFamily,
  CallbackInterface,
  RecoilState,
  RecoilValueReadOnly,
  selectorFamily
} from 'recoil';
import deepEqual from 'fast-deep-equal';

import {
  Chip,
  EquipmentEnhancementLevel,
  EquipmentId,
  EquipmentRank,
  Gear,
  Os,
  OsEquipmentRank
} from '../../domain/equipment/EquipmentData';
import {
  ChipEquipment,
  EquipmentSlotAvailableLv,
  GearEquipment,
  OsEquipment,
  UnitChip1Equipment,
  UnitChip2Equipment,
  UnitGearEquipment,
  UnitOsEquipment
} from '../../domain/equipment/UnitEquipment';
import { EffectDetails, EffectDetailsAsSkill } from '../../domain/equipment/EquipmentEffect';
import { StatusEffect } from '../../domain/status/StatusEffect';
import { UnitBasicInfo, UnitNumber } from '../../domain/UnitBasicInfo';
import { UnitLvValue } from '../../domain/status/UnitLv';
import {
  calculateEffect,
  calculateEffectAsSkill,
  calculateStatusEffect
} from '../../domain/equipment/EquipmentEffectCalculator';

import { lvValueState } from '../status/parameters/UnitLvStatusState';
import { updateUnitEquipmentDependency } from '../transaction';

import { getFromSnapshot, getValue, ValueOrUpdater } from '../../util/recoil';

export type EquipmentSlot = 'chip1' | 'chip2' | 'os' | 'gear'

type UnitEquipmentType<T extends EquipmentSlot> = {
  chip1: UnitChip1Equipment,
  chip2: UnitChip2Equipment,
  os:    UnitOsEquipment,
  gear:  UnitGearEquipment
}[T]

type EquipmentDetail<T extends EquipmentSlot> = {
  chip1: ChipEquipment | undefined,
  chip2: ChipEquipment | undefined,
  os:    OsEquipment | undefined,
  gear:  GearEquipment | undefined
}[T]

type EquipmentType<T extends EquipmentSlot> = {
  chip1: Chip,
  chip2: Chip,
  os:    Os,
  gear:  Gear
}[T]

type ChangeEquipmentHandler = {
  <T extends EquipmentSlot>(unit: UnitNumber, slot: T): (cbi: CallbackInterface) =>
    (equipment: EquipmentType<T> | undefined) => void;

  (unit: UnitNumber, slot: EquipmentSlot): (cbi: CallbackInterface) => (
    ((equipment: EquipmentType<'chip1'> | undefined) => void) |
    ((equipment: EquipmentType<'chip2'> | undefined) => void) |
    ((equipment: EquipmentType<'os'>    | undefined) => void) |
    ((equipment: EquipmentType<'gear'>  | undefined) => void)
  );
}

export type EquipmentUpdateCallbackArgs<T extends EquipmentSlot = EquipmentSlot> =
  [slot: T, unitEquipment: UnitEquipmentType<T>]

const DefaultEnhanceLv = 10;
const enhanceLvs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as const;

function getSlotAvailable<T extends EquipmentSlot, E extends UnitEquipmentType<T>>(
  slot: T,
  equipment: E,
  lv: UnitLvValue
): boolean;
function getSlotAvailable(
  ...[slot, equipment, lv]:
    [slot: 'chip1', equipment: UnitChip1Equipment, lv: UnitLvValue] |
    [slot: 'chip2', equipment: UnitChip2Equipment, lv: UnitLvValue] |
    [slot: 'os',    equipment: UnitOsEquipment,    lv: UnitLvValue] |
    [slot: 'gear',  equipment: UnitGearEquipment,  lv: UnitLvValue]
): boolean {
  switch (slot) {
  case 'chip1': return equipment.isChip1Available(lv);
  case 'chip2': return equipment.isChip2Available(lv);
  case 'os':    return equipment.isOsAvailable(lv);
  case 'gear':  return equipment.isGearAvailable(lv);
  }
}

function getStatusEffect<T extends EquipmentSlot>(
  slot: T,
  equipment: UnitEquipmentType<T>,
  lv: UnitLvValue
): StatusEffect;
function getStatusEffect(
  ...[slot, equipment, lv]:
    [slot: 'chip1', equipment: UnitChip1Equipment, lv: UnitLvValue] |
    [slot: 'chip2', equipment: UnitChip2Equipment, lv: UnitLvValue] |
    [slot: 'os',    equipment: UnitOsEquipment,    lv: UnitLvValue] |
    [slot: 'gear',  equipment: UnitGearEquipment,  lv: UnitLvValue]
): StatusEffect {
  switch (slot) {
  case 'chip1': return equipment.chip1StatusEffects(lv);
  case 'chip2': return equipment.chip2StatusEffects(lv);
  case 'os':    return equipment.osStatusEffects(lv);
  case 'gear':  return equipment.gearStatusEffects(lv);
  }
}

function createSlotAvailable(slot: EquipmentSlot): (unit: UnitNumber) => RecoilState<boolean> {
  return atomFamily<boolean, UnitNumber>({
    key: `UnitEquipmentState_slotAvailable_${slot}`,
    default: false
  });
}

function createEquipment<T extends EquipmentSlot>(slot: T): (unit: UnitNumber) => RecoilState<EquipmentDetail<T>> {
  return atomFamily<EquipmentDetail<T>, UnitNumber>({
    key: `UnitEquipmentState_equipment_${slot}`,
    default: undefined
  });
}

function createStatusEffects(slot: EquipmentSlot): (unit: UnitNumber) => RecoilState<StatusEffect> {
  return atomFamily<StatusEffect, UnitNumber>({
    key: `UnitEquipmentState_statusEffects_${slot}`,
    default: {}
  });
}

function createEnhanceLvSelector(slot: EquipmentSlot): (lv: EquipmentEnhancementLevel) => RecoilState<boolean> {
  return atomFamily<boolean, EquipmentEnhancementLevel>({
    key: `UnitEquipmentState_enhanceLvSelector_${slot}`,
    default: (lv) => lv === DefaultEnhanceLv
  });
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _unitEquipment: { [K in EquipmentSlot]: (unit: UnitNumber) => RecoilState<UnitEquipmentType<K>> } = {
  chip1: atomFamily<UnitChip1Equipment, UnitNumber>({ key: 'UnitEquipmentState_unitEquipment_chip1', default: (unit) => new UnitChip1Equipment(unit) }),
  chip2: atomFamily<UnitChip2Equipment, UnitNumber>({ key: 'UnitEquipmentState_unitEquipment_chip2', default: (unit) => new UnitChip2Equipment(unit) }),
  os:    atomFamily<UnitOsEquipment,    UnitNumber>({ key: 'UnitEquipmentState_unitEquipment_os',    default: (unit) => new UnitOsEquipment(unit) }),
  gear:  atomFamily<UnitGearEquipment,  UnitNumber>({ key: 'UnitEquipmentState_unitEquipment_gear',  default: (unit) => new UnitGearEquipment(unit) })
};

const _slotAvailable = {
  chip1: createSlotAvailable('chip1'),
  chip2: createSlotAvailable('chip2'),
  os:    createSlotAvailable('os'),
  gear:  createSlotAvailable('gear')
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _equipment: { [K in EquipmentSlot]: (unit: UnitNumber) => RecoilState<EquipmentDetail<K>> } = {
  chip1: createEquipment('chip1'),
  chip2: createEquipment('chip2'),
  os:    createEquipment('os'),
  gear:  createEquipment('gear')
};

const _statusEffects = {
  chip1: createStatusEffects('chip1'),
  chip2: createStatusEffects('chip2'),
  os:    createStatusEffects('os'),
  gear:  createStatusEffects('gear')
};

const _selectedEnhanceLv = atomFamily<EquipmentEnhancementLevel, EquipmentSlot>({
  key: 'UnitEquipmentState_selectedEnhanceLv',
  default: DefaultEnhanceLv
});

const _enhanceLvSelector = {
  chip1: createEnhanceLvSelector('chip1'),
  chip2: createEnhanceLvSelector('chip2'),
  os:    createEnhanceLvSelector('os'),
  gear:  createEnhanceLvSelector('gear')
};

const _selectedOsRank = atom<OsEquipmentRank>({
  key: 'UnitEquipmentState_selectedOsRank',
  default: EquipmentRank.SS
});

const _osRankSelector = atomFamily<boolean, OsEquipmentRank>({
  key: 'UnitEquipmentState_osRankSelector',
  default: (rank) => rank === EquipmentRank.SS
});

const _slotAvailableLv = selectorFamily<EquipmentSlotAvailableLv, { unit: UnitNumber, slot: EquipmentSlot }>({
  key: 'UnitEquipmentState_slotAvailableLv',
  get: ({ unit, slot }) => ({ get }) => {
    switch (slot) {
    case 'chip1': return get(_unitEquipment[slot](unit)).chip1AvailableLv;
    case 'chip2': return get(_unitEquipment[slot](unit)).chip2AvailableLv;
    case 'os':    return get(_unitEquipment[slot](unit)).osAvailableLv;
    case 'gear':  return get(_unitEquipment[slot](unit)).gearAvailableLv;
    }
  }
});

const _statusEffectsData = selectorFamily<StatusEffect, { slot: EquipmentSlot, id: EquipmentId }>({
  key: 'UnitEquipmentState_statusEffectsData',
  get: ({ slot, id }) => ({ get }) =>
    calculateStatusEffect(
      id,
      slot === 'os' ? get(_selectedOsRank) : EquipmentRank.SS,
      get(_selectedEnhanceLv(slot))
    )
});

const _effectsData = selectorFamily<ReadonlyArray<EffectDetails> | undefined, { slot: EquipmentSlot, id: EquipmentId }>({
  key: 'UnitEquipmentState_effectsData',
  get: ({ slot, id }) => ({ get }) =>
    calculateEffect(
      id,
      slot === 'os' ? get(_selectedOsRank) : EquipmentRank.SS,
      get(_selectedEnhanceLv(slot))
    )
});

const _effectsAsSkillData = selectorFamily<ReadonlyArray<EffectDetailsAsSkill> | undefined, { slot: EquipmentSlot, id: EquipmentId }>({
  key: 'UnitEquipmentState_effectsAsSkillData',
  get: ({ slot, id }) => ({ get }) =>
    calculateEffectAsSkill(
      id,
      slot === 'os' ? get(_selectedOsRank) : EquipmentRank.SS,
      get(_selectedEnhanceLv(slot))
    )
});

function _update<T extends EquipmentSlot>(
  unit: UnitNumber,
  slot: T,
  lv: UnitLvValue,
  valueOrUpdater: ValueOrUpdater<UnitEquipmentType<T>>
): (cbi: CallbackInterface) => void {
  return (cbi) => {
    const set = cbi.set;
    const get = getFromSnapshot(cbi.snapshot);
    const prevValue = get(_unitEquipment[slot](unit));
    const nextValue = getValue(valueOrUpdater, () => prevValue);

    set(_slotAvailable[slot](unit), getSlotAvailable(slot, nextValue, lv));

    _updateEquipment(unit, slot, prevValue, nextValue)(cbi);

    const prevEffect = get(_statusEffects[slot](unit));
    const nextEffect = getStatusEffect(slot, nextValue, lv);
    if (!deepEqual(prevEffect, nextEffect)) {
      set(_statusEffects[slot](unit), nextEffect);
    }

    set(_unitEquipment[slot](unit), nextValue);

    if (nextValue !== prevValue) {
      updateUnitEquipmentDependency([slot, nextValue])(cbi);
    }
  };
}

function _updateEquipment<T extends EquipmentSlot>(
  unit: UnitNumber,
  slot: T,
  prevValue: UnitEquipmentType<T>,
  nextValue: UnitEquipmentType<T>
): (cbi: CallbackInterface) => void;
function _updateEquipment(
  ...[unit, slot, prevValue, nextValue]:
    [unit: UnitNumber, slot: 'chip1', prevValue: UnitChip1Equipment, nextValue: UnitChip1Equipment] |
    [unit: UnitNumber, slot: 'chip2', prevValue: UnitChip2Equipment, nextValue: UnitChip2Equipment] |
    [unit: UnitNumber, slot: 'os',    prevValue: UnitOsEquipment,    nextValue: UnitOsEquipment] |
    [unit: UnitNumber, slot: 'gear',  prevValue: UnitGearEquipment,  nextValue: UnitGearEquipment]
): (cbi: CallbackInterface) => void {
  return ({ set }) => {
    switch (slot) {
    case 'chip1': {
      if (!deepEqual(prevValue.chip1, nextValue.chip1)) {
        set(_equipment[slot](unit), nextValue.chip1);
      }
      break;
    }
    case 'chip2':
      if (!deepEqual(prevValue.chip2, nextValue.chip2)) {
        set(_equipment[slot](unit), nextValue.chip2);
      }
      break;
    case 'os':
      if (!deepEqual(prevValue.os, nextValue.os)) {
        set(_equipment[slot](unit), nextValue.os);
      }
      break;
    case 'gear':
      if (!deepEqual(prevValue.gear, nextValue.gear)) {
        set(_equipment[slot](unit), nextValue.gear);
      }
      break;
    }
  };
}

export const equipmentSlotAvailableState = (unit: UnitNumber, slot: EquipmentSlot): RecoilValueReadOnly<boolean> =>
  _slotAvailable[slot](unit);

export const equipmentSlotAvailableLvState = (unit: UnitNumber, slot: EquipmentSlot): RecoilValueReadOnly<EquipmentSlotAvailableLv> =>
  _slotAvailableLv({ unit, slot });

export const equipmentState = <T extends EquipmentSlot>(unit: UnitNumber, slot: T): RecoilValueReadOnly<EquipmentDetail<T>> =>
  _equipment[slot](unit);

export const unitEquipmentStatusEffectsState = (unit: UnitNumber, slot: EquipmentSlot): RecoilValueReadOnly<StatusEffect> =>
  _statusEffects[slot](unit);

export const enhanceLvSelectorState = (slot: EquipmentSlot, lv: EquipmentEnhancementLevel): RecoilValueReadOnly<boolean> =>
  _enhanceLvSelector[slot](lv);

export const osRankSelectorState = (rank: OsEquipmentRank): RecoilValueReadOnly<boolean> => _osRankSelector(rank);

export const selectedEquipmentRankState = selectorFamily<EquipmentRank, EquipmentSlot>({
  key: 'selectedEquipmentRankState',
  get: (slot) => ({ get }) => {
    switch (slot) {
    case 'os':
      return get(_selectedOsRank);
    default:
      return EquipmentRank.SS;
    }
  }
});

export const equipmentStatusEffectsDataState = (slot: EquipmentSlot, id: EquipmentId): RecoilValueReadOnly<StatusEffect> =>
  _statusEffectsData({ slot, id });

export const equipmentEffectsDataState = (slot: EquipmentSlot, id: EquipmentId): RecoilValueReadOnly<ReadonlyArray<EffectDetails> | undefined> =>
  _effectsData({ slot, id });

export const equipmentEffectsAsSkillDataState = (slot: EquipmentSlot, id: EquipmentId): RecoilValueReadOnly<ReadonlyArray<EffectDetailsAsSkill> | undefined> =>
  _effectsAsSkillData({ slot, id });

export const changeEquipment: ChangeEquipmentHandler = (unit: UnitNumber, slot: EquipmentSlot) => (cbi: CallbackInterface) => {
  const get = getFromSnapshot(cbi.snapshot);
  const lv = get(lvValueState(unit));
  const enhanceLv = get(_selectedEnhanceLv(slot));
  const osRank = get(_selectedOsRank);

  switch (slot) {
  case 'chip1':
    return (equipment: EquipmentType<typeof slot> | undefined) => {
      _update(unit, 'chip1', lv, s => equipment ? s.equipChip1(equipment, enhanceLv) : s.removeChip1())(cbi);
    };
  case 'chip2':
    return (equipment: EquipmentType<typeof slot> | undefined) => {
      _update(unit, 'chip2', lv, s => equipment ? s.equipChip2(equipment, enhanceLv) : s.removeChip2())(cbi);
    };
  case 'os':
    return (equipment: EquipmentType<typeof slot> | undefined) => {
      _update(unit, 'os', lv, s => equipment ? s.equipOs(equipment, osRank, enhanceLv) : s.removeOs())(cbi);
    };
  case 'gear':
    return (equipment: EquipmentType<typeof slot> | undefined) => {
      _update(unit, 'gear', lv, s => equipment ? s.equipGear(equipment, enhanceLv) : s.removeGear())(cbi);
    };
  }
};

export const changeEquipmentEnhanceLv = (unit: UnitNumber, slot: EquipmentSlot, enhanceLv: EquipmentEnhancementLevel) => (cbi: CallbackInterface) => (): void => {
  const lv = cbi.snapshot.getLoadable(lvValueState(unit)).getValue();
  _update(unit, slot, lv, s => s.changeEnhancementLv(enhanceLv))(cbi);
};

export const selectEnhanceLv = (slot: EquipmentSlot, enhanceLv: EquipmentEnhancementLevel) => ({ set }: CallbackInterface) => (): void => {
  set(_selectedEnhanceLv(slot), enhanceLv);
  enhanceLvs.forEach(lv => {
    set(_enhanceLvSelector[slot](lv), lv === enhanceLv);
  });
};

export const selectOsRank = (osRank: OsEquipmentRank) => ({ set }: CallbackInterface) => (): void => {
  set(_selectedOsRank, osRank);
  [EquipmentRank.SSS, EquipmentRank.SS].forEach(rank => {
    set(_osRankSelector(rank), rank === osRank);
  });
};

export const unitEquipmentResolver = <T extends EquipmentSlot>(slot: T) => (unit: UnitNumber): RecoilValueReadOnly<UnitEquipmentType<T>> =>
  _unitEquipment[slot](unit);

export const restoreUnitEquipmentState = <T extends EquipmentSlot>(slot: T) => (cbi: CallbackInterface) => (states: ReadonlyArray<UnitEquipmentType<T>>): void => {
  const get = getFromSnapshot(cbi.snapshot);
  states.forEach(s => {
    const lv = get(lvValueState(s.unit));
    _update(s.unit, slot, lv, s)(cbi);
  });
};

export const updateSelectedUnit = (unit: UnitBasicInfo | undefined) => (cbi: CallbackInterface): void => {
  const get = getFromSnapshot(cbi.snapshot);

  const chip1Lv = (unit && get(_unitEquipment['chip1'](unit.no)).chip1?.enhanceLv) ?? DefaultEnhanceLv;
  const chip2Lv = (unit && get(_unitEquipment['chip2'](unit.no)).chip2?.enhanceLv) ?? DefaultEnhanceLv;
  const osLv    = (unit && get(_unitEquipment['os'](unit.no)).os?.enhanceLv)       ?? DefaultEnhanceLv;
  const gearLv  = (unit && get(_unitEquipment['gear'](unit.no)).gear?.enhanceLv)   ?? DefaultEnhanceLv;

  const osRank = (unit && get(_unitEquipment['os'](unit.no)).os?.rank) ?? EquipmentRank.SS;

  selectEnhanceLv('chip1', chip1Lv)(cbi)();
  selectEnhanceLv('chip2', chip2Lv)(cbi)();
  selectEnhanceLv('os', osLv)(cbi)();
  selectEnhanceLv('gear', gearLv)(cbi)();

  selectOsRank(osRank)(cbi)();
};

export const updateUnitLvValue = (unit: UnitNumber, lv: UnitLvValue) => (cbi: CallbackInterface): void => {
  const get = getFromSnapshot(cbi.snapshot);

  _update(unit, 'chip1', lv, get(_unitEquipment['chip1'](unit)))(cbi);
  _update(unit, 'chip2', lv, get(_unitEquipment['chip2'](unit)))(cbi);
  _update(unit, 'os',    lv, get(_unitEquipment['os'](unit)))(cbi);
  _update(unit, 'gear',  lv, get(_unitEquipment['gear'](unit)))(cbi);
};