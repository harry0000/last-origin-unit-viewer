import {
  atomFamily,
  DefaultValue,
  GetRecoilValue,
  selectorFamily,
  SetRecoilState,
  useRecoilState,
  useRecoilValue
} from 'recoil';
import deepEqual from 'fast-deep-equal';

import { Chip, EquipmentType, Gear, Os } from '../../domain/EquipmentData';
import {
  ChipEquipment,
  EquipmentSlotAvailableLv,
  GearEquipment,
  OsEquipment,
  UnitChip1Equipment,
  UnitChip2Equipment,
  UnitGearEquipment,
  UnitOsEquipment
} from '../../domain/status/UnitEquipment';
import { StatusEffect } from '../../domain/status/StatusEffect';
import { UnitBasicInfo, UnitNumber } from '../../domain/UnitBasicInfo';
import { UnitLvValue } from '../../domain/status/UnitLv';

import { unitLvState } from '../status/unitLvStatusState';

export type EquipmentSlot = 'chip1' | 'chip2' | 'os' | 'gear'
type EquipmentSlotKey = `${Capitalize<EquipmentSlot>}`

function createSlotAvailableAtom(slotKey: EquipmentSlotKey) {
  return atomFamily<boolean, UnitNumber>({
    key: `_unit${slotKey}EquipmentSlotAvailableAtom`,
    default: false
  });
}

function createStatusEffectsAtom(slotKey: EquipmentSlotKey) {
  return atomFamily<StatusEffect, UnitNumber>({
    key: `_unit${slotKey}EquipmentStatusEffectsAtom`,
    default: {}
  });
}

const atoms = {
  slotAvailable: {
    chip1: createSlotAvailableAtom('Chip1'),
    chip2: createSlotAvailableAtom('Chip2'),
    os: createSlotAvailableAtom('Os'),
    gear: createSlotAvailableAtom('Gear')
  },
  statusEffects: {
    chip1: createStatusEffectsAtom('Chip1'),
    chip2: createStatusEffectsAtom('Chip2'),
    os: createStatusEffectsAtom('Os'),
    gear: createStatusEffectsAtom('Gear')
  }
};

const _unitChip1EquipmentAtom = atomFamily<UnitChip1Equipment, UnitNumber>({
  key: '_unitChip1EquipmentAtom',
  default: (unit) => new UnitChip1Equipment(unit)
});

const _unitChip2EquipmentAtom = atomFamily<UnitChip2Equipment, UnitNumber>({
  key: '_unitChip2EquipmentAtom',
  default: (unit) => new UnitChip2Equipment(unit)
});

const _unitOsEquipmentAtom = atomFamily<UnitOsEquipment, UnitNumber>({
  key: '_unitOsEquipmentAtom',
  default: (unit) => new UnitOsEquipment(unit)
});

const _unitGearEquipmentAtom = atomFamily<UnitGearEquipment, UnitNumber>({
  key: '_unitGearEquipmentAtom',
  default: (unit) => new UnitGearEquipment(unit)
});

function updateChip1InnerAtoms(get: GetRecoilValue, set: SetRecoilState, unit: UnitNumber, chip1: UnitChip1Equipment, lv: UnitLvValue): void {
  set(atoms.slotAvailable.chip1(unit), chip1.isChip1Available(lv));

  const chip1Effect = chip1.chip1StatusEffects(lv);
  if (!deepEqual(get(atoms.statusEffects.chip1(unit)), chip1Effect)) {
    set(atoms.statusEffects.chip1(unit), chip1Effect);
  }
}

function updateChip2InnerAtoms(get: GetRecoilValue, set: SetRecoilState, unit: UnitNumber, chip2: UnitChip2Equipment, lv: UnitLvValue): void {
  set(atoms.slotAvailable.chip2(unit), chip2.isChip2Available(lv));

  const chip2Effect = chip2.chip2StatusEffects(lv);
  if (!deepEqual(get(atoms.statusEffects.chip2(unit)), chip2Effect)) {
    set(atoms.statusEffects.chip2(unit), chip2Effect);
  }
}

function updateOsInnerAtoms(get: GetRecoilValue, set: SetRecoilState, unit: UnitNumber, os: UnitOsEquipment, lv: UnitLvValue): void {
  set(atoms.slotAvailable.os(unit), os.isOsAvailable(lv));

  const osEffect = os.osStatusEffects(lv);
  if (!deepEqual(get(atoms.statusEffects.os(unit)), osEffect)) {
    set(atoms.statusEffects.os(unit), osEffect);
  }
}

function updateGearInnerAtoms(get: GetRecoilValue, set: SetRecoilState, unit: UnitNumber, gear: UnitGearEquipment, lv: UnitLvValue): void {
  set(atoms.slotAvailable.gear(unit), gear.isGearAvailable(lv));

  const gearEffect = gear.gearStatusEffects(lv);
  if (!deepEqual(get(atoms.statusEffects.gear(unit)), gearEffect)) {
    set(atoms.statusEffects.gear(unit), gearEffect);
  }
}

export const updateChip1EquipmentDependency = selectorFamily<UnitLvValue, UnitNumber>({
  key: 'updateChip1EquipmentDependency',
  get: () => () => { throw new Error(); },
  set: (unit) => ({ get, set }, lv) => {
    if (!(lv instanceof DefaultValue)) {
      updateChip1InnerAtoms(get, set, unit, get(unitChip1EquipmentState(unit)), lv);
    }
  }
});

export const updateChip2EquipmentDependency = selectorFamily<UnitLvValue, UnitNumber>({
  key: 'updateChip2EquipmentDependency',
  get: () => () => { throw new Error(); },
  set: (unit) => ({ get, set }, lv) => {
    if (!(lv instanceof DefaultValue)) {
      updateChip2InnerAtoms(get, set, unit, get(unitChip2EquipmentState(unit)), lv);
    }
  }
});

export const updateOsEquipmentDependency = selectorFamily<UnitLvValue, UnitNumber>({
  key: 'updateOsEquipmentDependency',
  get: () => () => { throw new Error(); },
  set: (unit) => ({ get, set }, lv) => {
    if (!(lv instanceof DefaultValue)) {
      updateOsInnerAtoms(get, set, unit, get(unitOsEquipmentState(unit)), lv);
    }
  }
});

export const updateGearEquipmentDependency = selectorFamily<UnitLvValue, UnitNumber>({
  key: 'updateGearEquipmentDependency',
  get: () => () => { throw new Error(); },
  set: (unit) => ({ get, set }, lv) => {
    if (!(lv instanceof DefaultValue)) {
      updateGearInnerAtoms(get, set, unit, get(unitGearEquipmentState(unit)), lv);
    }
  }
});

export const unitChip1EquipmentState = selectorFamily<UnitChip1Equipment, UnitNumber>({
  key: 'unitChip1EquipmentState',
  get: (unit) => ({ get }) => get(_unitChip1EquipmentAtom(unit)),
  set: (unit) => ({ get, set }, newValue) => {
    if (newValue instanceof UnitChip1Equipment) {
      set(_unitChip1EquipmentAtom(unit), newValue);
      updateChip1InnerAtoms(get, set, unit, newValue, get(unitLvState(unit)));
    }
  }
});

export const unitChip2EquipmentState = selectorFamily<UnitChip2Equipment, UnitNumber>({
  key: 'unitChip2EquipmentState',
  get: (unit) => ({ get }) => get(_unitChip2EquipmentAtom(unit)),
  set: (unit) => ({ get, set }, newValue) => {
    if (newValue instanceof UnitChip2Equipment) {
      set(_unitChip2EquipmentAtom(unit), newValue);
      updateChip2InnerAtoms(get, set, unit, newValue, get(unitLvState(unit)));
    }
  }
});

export const unitOsEquipmentState = selectorFamily<UnitOsEquipment, UnitNumber>({
  key: 'unitOsEquipmentState',
  get: (unit) => ({ get }) => get(_unitOsEquipmentAtom(unit)),
  set: (unit) => ({ get, set }, newValue) => {
    if (newValue instanceof UnitOsEquipment) {
      set(_unitOsEquipmentAtom(unit), newValue);
      updateOsInnerAtoms(get, set, unit, newValue, get(unitLvState(unit)));
    }
  }
});

export const unitGearEquipmentState = selectorFamily<UnitGearEquipment, UnitNumber>({
  key: 'unitGearEquipmentState',
  get: (unit) => ({ get }) => get(_unitGearEquipmentAtom(unit)),
  set: (unit) => ({ get, set }, newValue) => {
    if (newValue instanceof UnitGearEquipment) {
      set(_unitGearEquipmentAtom(unit), newValue);
      updateGearInnerAtoms(get, set, unit, newValue, get(unitLvState(unit)));
    }
  }
});

export const unitChip1EquipmentStatusEffectsState = selectorFamily<StatusEffect, UnitBasicInfo>({
  key: 'unitChip1EquipmentStatusEffectsState',
  get: (unit) => ({ get }) => get(atoms.statusEffects.chip1(unit.no))
});

export const unitChip2EquipmentStatusEffectsState = selectorFamily<StatusEffect, UnitBasicInfo>({
  key: 'unitChip2EquipmentStatusEffectsState',
  get: (unit) => ({ get }) => get(atoms.statusEffects.chip2(unit.no))
});

export const unitOsEquipmentStatusEffectsState = selectorFamily<StatusEffect, UnitBasicInfo>({
  key: 'unitOsEquipmentStatusEffectsState',
  get: (unit) => ({ get }) => get(atoms.statusEffects.os(unit.no))
});

export const unitGearEquipmentStatusEffectsState = selectorFamily<StatusEffect, UnitBasicInfo>({
  key: 'unitGearEquipmentStatusEffectsState',
  get: (unit) => ({ get }) => get(atoms.statusEffects.gear(unit.no))
});

export function useUnitEquipment(unit: UnitBasicInfo, slot: 'chip1' | 'chip2'): [
  type: typeof EquipmentType.Chip,
  equipment: ChipEquipment | undefined,
  equip: (equipment: Chip | undefined) => void
]
export function useUnitEquipment(unit: UnitBasicInfo, slot: 'os'): [
  type: typeof EquipmentType.Os,
  equipment: OsEquipment | undefined,
  equip: (equipment: Os | undefined) => void
]
export function useUnitEquipment(unit: UnitBasicInfo, slot: 'gear'): [
  type: typeof EquipmentType.Gear,
  equipment: GearEquipment | undefined,
  equip: (equipment: Gear | undefined) => void
]
export function useUnitEquipment(unit: UnitBasicInfo, slot: EquipmentSlot): [
  type: EquipmentType,
  equipment: ChipEquipment | OsEquipment | GearEquipment | undefined,
  equip:
    ((equipment: Chip | undefined) => void) |
    ((equipment: Os | undefined) => void) |
    ((equipment: Gear | undefined) => void)
] {
  switch (slot) {
  case 'chip1': {
    const [unitChip1, setUnitChip1] = useRecoilState(unitChip1EquipmentState(unit.no));
    return [EquipmentType.Chip, unitChip1.chip1, (e: Chip | undefined) => { setUnitChip1(s => e ? s.equipChip1(e) : s.removeChip1()); }];
  }
  case 'chip2': {
    const [unitChip2, setUnitChip2] = useRecoilState(unitChip2EquipmentState(unit.no));
    return [EquipmentType.Chip, unitChip2.chip2, (e: Chip | undefined) => { setUnitChip2(s => e ? s.equipChip2(e) : s.removeChip2()); }];
  }
  case 'os': {
    const [unitOs, setUnitOs] = useRecoilState(unitOsEquipmentState(unit.no));
    return [EquipmentType.Os, unitOs.os, (e: Os | undefined) => { setUnitOs(s => e ? s.equipOs(e) : s.removeOs()); }];
  }
  case 'gear': {
    const [unitGear, setUnitGear] = useRecoilState(unitGearEquipmentState(unit.no));
    return [EquipmentType.Gear, unitGear.gear, (e: Gear | undefined) => { setUnitGear(s => e ? s.equipGear(e) : s.removeGear()); }];
  }
  }
}

export function useEquipmentAvailable(unit: UnitBasicInfo, slot: EquipmentSlot): [
  available: boolean,
  availableLv: EquipmentSlotAvailableLv
] {
  switch (slot) {
  case 'chip1': return [useRecoilValue(atoms.slotAvailable.chip1(unit.no)), useRecoilValue(unitChip1EquipmentState(unit.no)).chip1AvailableLv];
  case 'chip2': return [useRecoilValue(atoms.slotAvailable.chip2(unit.no)), useRecoilValue(unitChip2EquipmentState(unit.no)).chip2AvailableLv];
  case 'os':    return [useRecoilValue(atoms.slotAvailable.os(unit.no)),    useRecoilValue(unitOsEquipmentState(unit.no)).osAvailableLv];
  case 'gear':  return [useRecoilValue(atoms.slotAvailable.gear(unit.no)),  useRecoilValue(unitGearEquipmentState(unit.no)).gearAvailableLv];
  }
}
