import {
  atomFamily,
  DefaultValue,
  GetRecoilValue,
  RecoilValueReadOnly,
  selectorFamily,
  SetRecoilState,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState
} from 'recoil';
import deepEqual from 'fast-deep-equal';
import { useTranslation } from 'react-i18next';

import {
  Chip,
  EquipmentEnhancementLevel,
  EquipmentId,
  EquipmentType,
  Gear,
  Os
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
import { StatusEffect } from '../../domain/status/StatusEffect';
import { UnitBasicInfo, UnitNumber } from '../../domain/UnitBasicInfo';
import { UnitLvValue } from '../../domain/status/UnitLv';
import {
  calculateEffect,
  calculateEffectAsSkill,
  calculateStatusEffect
} from '../../domain/equipment/EquipmentEffectCalculator';

import { TranslatedEquipmentEffect, translateEquipmentEffect } from './EquipmentEffectsTranslator';
import { translateEquipmentStatusEffects } from './EquipmentStatusEffectsTlanslator';
import { unitLvState } from '../status/unitLvStatusState';

import { setOnlySelector, setOnlySelectorFamily, updateSelectorFamily } from '../../util/recoil';

export type EquipmentSlot = 'chip1' | 'chip2' | 'os' | 'gear'
type EquipmentSlotKey = `${Capitalize<EquipmentSlot>}`

const enhanceLvs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as const;

const selectedEnhanceLvState = atomFamily<EquipmentEnhancementLevel, EquipmentSlot>({
  key: 'selectedEnhanceLvState',
  default: 10
});

const chip1EnhanceLvSelectorState = atomFamily<boolean, EquipmentEnhancementLevel>({
  key: 'chip1EnhanceLvSelectorState',
  default: (lv) => lv === 10
});

const chip2EnhanceLvSelectorState = atomFamily<boolean, EquipmentEnhancementLevel>({
  key: 'chip2EnhanceLvSelectorState',
  default: (lv) => lv === 10
});

const osEnhanceLvSelectorState = atomFamily<boolean, EquipmentEnhancementLevel>({
  key: 'osEnhanceLvSelectorState',
  default: (lv) => lv === 10
});

const gearEnhanceLvSelectorState = atomFamily<boolean, EquipmentEnhancementLevel>({
  key: 'gearEnhanceLvSelectorState',
  default: (lv) => lv === 10
});

const updateChip1EnhanceLvSelector = updateSelectorFamily<EquipmentEnhancementLevel>({
  key: 'updateChip1EnhanceLvSelector',
  set: (enhanceLv) => ({ set }) => {
    set(selectedEnhanceLvState('chip1'), enhanceLv);
    enhanceLvs.forEach(lv => {
      set(chip1EnhanceLvSelectorState(lv), enhanceLv === lv);
    });
  }
});

const updateChip2EnhanceLvSelector = updateSelectorFamily<EquipmentEnhancementLevel>({
  key: 'updateChip2EnhanceLvSelector',
  set: (enhanceLv) => ({ set }) => {
    set(selectedEnhanceLvState('chip2'), enhanceLv);
    enhanceLvs.forEach(lv => {
      set(chip2EnhanceLvSelectorState(lv), enhanceLv === lv);
    });
  }
});

const updateOsEnhanceLvSelector = updateSelectorFamily<EquipmentEnhancementLevel>({
  key: 'updateOsEnhanceLvSelector',
  set: (enhanceLv) => ({ set }) => {
    set(selectedEnhanceLvState('os'), enhanceLv);
    enhanceLvs.forEach(lv => {
      set(osEnhanceLvSelectorState(lv), enhanceLv === lv);
    });
  }
});

const updateGearEnhanceLvSelector = updateSelectorFamily<EquipmentEnhancementLevel>({
  key: 'updateGearEnhanceLvSelector',
  set: (enhanceLv) => ({ set }) => {
    set(selectedEnhanceLvState('gear'), enhanceLv);
    enhanceLvs.forEach(lv => {
      set(gearEnhanceLvSelectorState(lv), enhanceLv === lv);
    });

  }
});

export const updateEquipmentEnhanceLvSelector = setOnlySelector<UnitBasicInfo | undefined>({
  key: 'updateEquipmentEnhanceLvSelector',
  set: ({ get, set }, newValue) => {
    if (!(newValue instanceof DefaultValue)) {
      const chip1Lv = (newValue && get(_unitChip1EquipmentAtom(newValue.no)).chip1?.enhanceLv) ?? 10;
      const chip2Lv = (newValue && get(_unitChip2EquipmentAtom(newValue.no)).chip2?.enhanceLv) ?? 10;
      const osLv    = (newValue && get(_unitOsEquipmentAtom(newValue.no)).os?.enhanceLv) ?? 10;
      const gearLv  = (newValue && get(_unitGearEquipmentAtom(newValue.no)).gear?.enhanceLv) ?? 10;

      set(selectedEnhanceLvState('chip1'), chip1Lv);
      set(selectedEnhanceLvState('chip2'), chip2Lv);
      set(selectedEnhanceLvState('os'), osLv);
      set(selectedEnhanceLvState('gear'), gearLv);

      enhanceLvs.forEach(lv => {
        set(chip1EnhanceLvSelectorState(lv), lv === chip1Lv);
        set(chip2EnhanceLvSelectorState(lv), lv === chip2Lv);
        set(osEnhanceLvSelectorState(lv), lv === osLv);
        set(gearEnhanceLvSelectorState(lv), lv === gearLv);
      });
    }
  }
});

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

export const updateChip1EquipmentDependency = setOnlySelectorFamily<UnitLvValue, UnitNumber>({
  key: 'updateChip1EquipmentDependency',
  set: (unit) => ({ get, set }, lv) => {
    if (!(lv instanceof DefaultValue)) {
      updateChip1InnerAtoms(get, set, unit, get(unitChip1EquipmentState(unit)), lv);
    }
  }
});

export const updateChip2EquipmentDependency = setOnlySelectorFamily<UnitLvValue, UnitNumber>({
  key: 'updateChip2EquipmentDependency',
  set: (unit) => ({ get, set }, lv) => {
    if (!(lv instanceof DefaultValue)) {
      updateChip2InnerAtoms(get, set, unit, get(unitChip2EquipmentState(unit)), lv);
    }
  }
});

export const updateOsEquipmentDependency = setOnlySelectorFamily<UnitLvValue, UnitNumber>({
  key: 'updateOsEquipmentDependency',
  set: (unit) => ({ get, set }, lv) => {
    if (!(lv instanceof DefaultValue)) {
      updateOsInnerAtoms(get, set, unit, get(unitOsEquipmentState(unit)), lv);
    }
  }
});

export const updateGearEquipmentDependency = setOnlySelectorFamily<UnitLvValue, UnitNumber>({
  key: 'updateGearEquipmentDependency',
  set: (unit) => ({ get, set }, lv) => {
    if (!(lv instanceof DefaultValue)) {
      updateGearInnerAtoms(get, set, unit, get(unitGearEquipmentState(unit)), lv);
    }
  }
});

const unitChip1EquipmentState = selectorFamily<UnitChip1Equipment, UnitNumber>({
  key: 'unitChip1EquipmentState',
  get: (unit) => ({ get }) => get(_unitChip1EquipmentAtom(unit)),
  set: (unit) => ({ get, set }, newValue) => {
    if (newValue instanceof UnitChip1Equipment) {
      set(_unitChip1EquipmentAtom(unit), newValue);
      updateChip1InnerAtoms(get, set, unit, newValue, get(unitLvState(unit)));
    }
  }
});

const unitChip2EquipmentState = selectorFamily<UnitChip2Equipment, UnitNumber>({
  key: 'unitChip2EquipmentState',
  get: (unit) => ({ get }) => get(_unitChip2EquipmentAtom(unit)),
  set: (unit) => ({ get, set }, newValue) => {
    if (newValue instanceof UnitChip2Equipment) {
      set(_unitChip2EquipmentAtom(unit), newValue);
      updateChip2InnerAtoms(get, set, unit, newValue, get(unitLvState(unit)));
    }
  }
});

const unitOsEquipmentState = selectorFamily<UnitOsEquipment, UnitNumber>({
  key: 'unitOsEquipmentState',
  get: (unit) => ({ get }) => get(_unitOsEquipmentAtom(unit)),
  set: (unit) => ({ get, set }, newValue) => {
    if (newValue instanceof UnitOsEquipment) {
      set(_unitOsEquipmentAtom(unit), newValue);
      updateOsInnerAtoms(get, set, unit, newValue, get(unitLvState(unit)));
    }
  }
});

const unitGearEquipmentState = selectorFamily<UnitGearEquipment, UnitNumber>({
  key: 'unitGearEquipmentState',
  get: (unit) => ({ get }) => get(_unitGearEquipmentAtom(unit)),
  set: (unit) => ({ get, set }, newValue) => {
    if (newValue instanceof UnitGearEquipment) {
      set(_unitGearEquipmentAtom(unit), newValue);
      updateGearInnerAtoms(get, set, unit, newValue, get(unitLvState(unit)));
    }
  }
});

const unitChip1EquipmentRestore = setOnlySelector<ReadonlyArray<UnitChip1Equipment>>({
  key: 'unitChip1EquipmentRestore',
  set: ({ set }, newValue) => {
    if (!(newValue instanceof DefaultValue)) {
      newValue.forEach(v => set(unitChip1EquipmentState(v.unit), v));
    }
  }
});

const unitChip2EquipmentRestore = setOnlySelector<ReadonlyArray<UnitChip2Equipment>>({
  key: 'unitChip2EquipmentRestore',
  set: ({ set }, newValue) => {
    if (!(newValue instanceof DefaultValue)) {
      newValue.forEach(v => set(unitChip2EquipmentState(v.unit), v));
    }
  }
});

const unitOsEquipmentRestore = setOnlySelector<ReadonlyArray<UnitOsEquipment>>({
  key: 'unitOsEquipmentRestore',
  set: ({ set }, newValue) => {
    if (!(newValue instanceof DefaultValue)) {
      newValue.forEach(v => set(unitOsEquipmentState(v.unit), v));
    }
  }
});

const unitGearEquipmentRestore = setOnlySelector<ReadonlyArray<UnitGearEquipment>>({
  key: 'unitGearEquipmentRestore',
  set: ({ set }, newValue) => {
    if (!(newValue instanceof DefaultValue)) {
      newValue.forEach(v => set(unitGearEquipmentState(v.unit), v));
    }
  }
});

export const unitChip1EquipmentStatusEffectsState = selectorFamily<StatusEffect, UnitNumber>({
  key: 'unitChip1EquipmentStatusEffectsState',
  get: (unit) => ({ get }) => get(atoms.statusEffects.chip1(unit))
});

export const unitChip2EquipmentStatusEffectsState = selectorFamily<StatusEffect, UnitNumber>({
  key: 'unitChip2EquipmentStatusEffectsState',
  get: (unit) => ({ get }) => get(atoms.statusEffects.chip2(unit))
});

export const unitOsEquipmentStatusEffectsState = selectorFamily<StatusEffect, UnitNumber>({
  key: 'unitOsEquipmentStatusEffectsState',
  get: (unit) => ({ get }) => get(atoms.statusEffects.os(unit))
});

export const unitGearEquipmentStatusEffectsState = selectorFamily<StatusEffect, UnitNumber>({
  key: 'unitGearEquipmentStatusEffectsState',
  get: (unit) => ({ get }) => get(atoms.statusEffects.gear(unit))
});

export function useEquipmentEnhanceLvSelector(slot: EquipmentSlot, unit: UnitNumber, lv: EquipmentEnhancementLevel): [selected: boolean, selectEnhanceLv: () => void] {
  switch (slot) {
  case 'chip1': {
    const updateSelector = useSetRecoilState(updateChip1EnhanceLvSelector(lv));
    const updateChip1 = useSetRecoilState(unitChip1EquipmentState(unit));
    const selectEnhanceLv = () => {
      updateSelector();
      updateChip1(currVal => currVal.changeEnhancementLv(lv));
    };
    return [useRecoilValue(chip1EnhanceLvSelectorState(lv)), selectEnhanceLv];
  }
  case 'chip2': {
    const updateSelector = useSetRecoilState(updateChip2EnhanceLvSelector(lv));
    const updateChip2 = useSetRecoilState(unitChip2EquipmentState(unit));
    const selectEnhanceLv = () => {
      updateSelector();
      updateChip2(currVal => currVal.changeEnhancementLv(lv));
    };
    return [useRecoilValue(chip2EnhanceLvSelectorState(lv)), selectEnhanceLv];
  }
  case 'os': {
    const updateSelector = useSetRecoilState(updateOsEnhanceLvSelector(lv));
    const updateOs = useSetRecoilState(unitOsEquipmentState(unit));
    const selectEnhanceLv = () => {
      updateSelector();
      updateOs(currVal => currVal.changeEnhancementLv(lv));
    };
    return [useRecoilValue(osEnhanceLvSelectorState(lv)), selectEnhanceLv];
  }
  case 'gear': {
    const updateSelector = useSetRecoilState(updateGearEnhanceLvSelector(lv));
    const updateGear = useSetRecoilState(unitGearEquipmentState(unit));
    const selectEnhanceLv = () => {
      updateSelector();
      updateGear(currVal => currVal.changeEnhancementLv(lv));
    };
    return [useRecoilValue(gearEnhanceLvSelectorState(lv)), selectEnhanceLv];
  }
  }
}

export function useEquipmentStatusEffects(slot: EquipmentSlot, equipmentId: EquipmentId): string {
  const { t } = useTranslation();
  const lv = useRecoilValue(selectedEnhanceLvState(slot));
  const effects = calculateStatusEffect(equipmentId, lv);
  const details = translateEquipmentStatusEffects(effects, t);

  return details !== '' ? details : t('status.none_equipment_status_effect');
}

export function useEquipmentEffects(
  slot: EquipmentSlot,
  equipmentId: EquipmentId
): ReadonlyArray<TranslatedEquipmentEffect> | undefined {
  const { t } = useTranslation();
  const lv = useRecoilValue(selectedEnhanceLvState(slot));
  const effects = calculateEffect(equipmentId, lv);

  return effects && translateEquipmentEffect(effects, t);
}

export function useEquipmentEffectsAsSkill(
  slot: EquipmentSlot,
  equipmentId: EquipmentId
): ReadonlyArray<TranslatedEquipmentEffect> | undefined {
  const { t } = useTranslation();
  const lv = useRecoilValue(selectedEnhanceLvState(slot));
  const effects = calculateEffectAsSkill(equipmentId, lv);

  return effects && translateEquipmentEffect(effects, t);
}

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
    const enhanceLv = useRecoilValue(selectedEnhanceLvState('chip1'));
    const [unitChip1, setUnitChip1] = useRecoilState(unitChip1EquipmentState(unit.no));
    return [EquipmentType.Chip, unitChip1.chip1, (e: Chip | undefined) => { setUnitChip1(s => e ? s.equipChip1(e, enhanceLv) : s.removeChip1()); }];
  }
  case 'chip2': {
    const enhanceLv = useRecoilValue(selectedEnhanceLvState('chip2'));
    const [unitChip2, setUnitChip2] = useRecoilState(unitChip2EquipmentState(unit.no));
    return [EquipmentType.Chip, unitChip2.chip2, (e: Chip | undefined) => { setUnitChip2(s => e ? s.equipChip2(e, enhanceLv) : s.removeChip2()); }];
  }
  case 'os': {
    const enhanceLv = useRecoilValue(selectedEnhanceLvState('os'));
    const [unitOs, setUnitOs] = useRecoilState(unitOsEquipmentState(unit.no));
    return [EquipmentType.Os, unitOs.os, (e: Os | undefined) => { setUnitOs(s => e ? s.equipOs(e, enhanceLv) : s.removeOs()); }];
  }
  case 'gear': {
    const enhanceLv = useRecoilValue(selectedEnhanceLvState('gear'));
    const [unitGear, setUnitGear] = useRecoilState(unitGearEquipmentState(unit.no));
    return [EquipmentType.Gear, unitGear.gear, (e: Gear | undefined) => { setUnitGear(s => e ? s.equipGear(e, enhanceLv) : s.removeGear()); }];
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

export function useChip1EquipmentEffect(unit: UnitBasicInfo): [chip1: ChipEquipment | undefined, chip1Effect: StatusEffect] {
  return [
    useRecoilValue(unitChip1EquipmentState(unit.no)).chip1,
    useRecoilValue(unitChip1EquipmentStatusEffectsState(unit.no))
  ];
}

export function useChip2EquipmentEffect(unit: UnitBasicInfo): [chip2: ChipEquipment | undefined, chip2Effect: StatusEffect] {
  return [
    useRecoilValue(unitChip2EquipmentState(unit.no)).chip2,
    useRecoilValue(unitChip2EquipmentStatusEffectsState(unit.no))
  ];
}

export function useOsEquipmentEffect(unit: UnitBasicInfo): [os: OsEquipment | undefined, osEffect: StatusEffect] {
  return [
    useRecoilValue(unitOsEquipmentState(unit.no)).os,
    useRecoilValue(unitOsEquipmentStatusEffectsState(unit.no))
  ];
}

export function useGearEquipmentEffect(unit: UnitBasicInfo): [gear: GearEquipment | undefined, gearEffect: StatusEffect] {
  return [
    useRecoilValue(unitGearEquipmentState(unit.no)).gear,
    useRecoilValue(unitGearEquipmentStatusEffectsState(unit.no))
  ];
}

export function useUnitChip1EquipmentResolver(): (param: UnitNumber) => RecoilValueReadOnly<UnitChip1Equipment> {
  return unitChip1EquipmentState;
}

export function useUnitChip2EquipmentResolver(): (param: UnitNumber) => RecoilValueReadOnly<UnitChip2Equipment> {
  return unitChip2EquipmentState;
}

export function useUnitOsEquipmentResolver(): (param: UnitNumber) => RecoilValueReadOnly<UnitOsEquipment> {
  return unitOsEquipmentState;
}

export function useUnitGearEquipmentResolver(): (param: UnitNumber) => RecoilValueReadOnly<UnitGearEquipment> {
  return unitGearEquipmentState;
}

export function useUnitChip1EquipmentRestore(): (param: ReadonlyArray<UnitChip1Equipment>) => void {
  return useSetRecoilState(unitChip1EquipmentRestore);
}

export function useUnitChip2EquipmentRestore(): (param: ReadonlyArray<UnitChip2Equipment>) => void {
  return useSetRecoilState(unitChip2EquipmentRestore);
}

export function useUnitOsEquipmentRestore(): (param: ReadonlyArray<UnitOsEquipment>) => void {
  return useSetRecoilState(unitOsEquipmentRestore);
}

export function useUnitGearEquipmentRestore(): (param: ReadonlyArray<UnitGearEquipment>) => void {
  return useSetRecoilState(unitGearEquipmentRestore);
}
