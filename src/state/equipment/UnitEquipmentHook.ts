import { useRecoilCallback, useRecoilValue } from 'recoil';
import { useTranslation } from 'react-i18next';

import {
  Chip,
  EquipmentEnhancementLevel,
  EquipmentId,
  EquipmentRank,
  EquipmentType,
  Gear,
  Os
} from '../../domain/equipment/EquipmentData';
import {
  ChipEquipment,
  EquipmentSlotAvailableLv,
  GearEquipment,
  OsEquipment
} from '../../domain/equipment/UnitEquipment';
import { StatusEffect } from '../../domain/status/StatusEffect';
import { UnitBasicInfo, UnitNumber } from '../../domain/UnitBasicInfo';

import {
  EquipmentSlot,
  EquipmentSlotRank,
  EquipmentStateArgs,
  changeEquipment,
  changeEquipmentEnhanceLv,
  enhanceLvSelectorState,
  equipmentEffectsAsSkillDataState,
  equipmentEffectsDataState,
  equipmentSlotAvailableLvState,
  equipmentSlotAvailableState,
  equipmentState,
  equipmentStatusEffectsDataState,
  rankSelectorState,
  selectedEquipmentRankState,
  selectEnhanceLv,
  selectRank,
  unitEquipmentStatusEffectsState
} from './UnitEquipmentState';
import {
  TranslatedEquipmentEffect,
  TranslatedEquipmentEffectAsSkill,
  translateEquipmentEffect,
  translateEquipmentEffectAsSkill
} from './EquipmentEffectsTranslator';
import { translateEquipmentStatusEffects } from './EquipmentStatusEffectsTlanslator';

export function useEquipmentEnhanceLvSelector(
  slot: EquipmentSlot,
  unit: UnitNumber,
  lv: EquipmentEnhancementLevel
): [selected: boolean, selectEnhanceLv: () => void] {
  const selected = useRecoilValue(enhanceLvSelectorState(slot, lv));

  const updateSelector = useRecoilCallback(selectEnhanceLv(slot, lv));
  const changeEnhanceLv = useRecoilCallback(changeEquipmentEnhanceLv(unit, slot, lv));

  return [
    selected,
    () => {
      updateSelector();
      changeEnhanceLv();
    }
  ];
}

export function useEquipmentRankSelector<S extends EquipmentSlot>(
  slot: S,
  rank: EquipmentSlotRank<S>
): [selected: boolean, selectRank: () => void];
export function useEquipmentRankSelector(...args: EquipmentStateArgs): [selected: boolean, selectRank: () => void] {
  return [
    useRecoilValue(rankSelectorState(...args)),
    useRecoilCallback(selectRank(...args))
  ];
}

export function useEquipmentRank(slot: EquipmentSlot): EquipmentRank {
  return useRecoilValue(selectedEquipmentRankState(slot));
}

export function useEquipmentStatusEffects(slot: EquipmentSlot, id: EquipmentId): string {
  const { t } = useTranslation();
  const effects = useRecoilValue(equipmentStatusEffectsDataState(slot, id));
  const details = translateEquipmentStatusEffects(effects, t);

  return details !== '' ? details : t('status.none_equipment_status_effect');
}

export function useEquipmentEffects(
  slot: EquipmentSlot,
  id: EquipmentId
): ReadonlyArray<TranslatedEquipmentEffect> | undefined {
  const { t } = useTranslation();
  const effects = useRecoilValue(equipmentEffectsDataState(slot, id));

  return effects && translateEquipmentEffect(effects, t);
}

export function useEquipmentEffectsAsSkill(
  slot: EquipmentSlot,
  id: EquipmentId
): ReadonlyArray<TranslatedEquipmentEffectAsSkill> | undefined {
  const { t } = useTranslation();
  const effects = useRecoilValue(equipmentEffectsAsSkillDataState(slot, id));

  return effects && translateEquipmentEffectAsSkill(effects, t);
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
export function useUnitEquipment({ no }: UnitBasicInfo, slot: EquipmentSlot): [
  type: EquipmentType,
  equipment: ChipEquipment | OsEquipment | GearEquipment | undefined,
  equip:
    ((equipment: Chip | undefined) => void) |
    ((equipment: Os | undefined) => void) |
    ((equipment: Gear | undefined) => void)
] {
  switch (slot) {
  case 'chip1':
    return [
      EquipmentType.Chip,
      useRecoilValue(equipmentState(no, slot)),
      useRecoilCallback(changeEquipment(no)(slot))
    ];
  case 'chip2':
    return [
      EquipmentType.Chip,
      useRecoilValue(equipmentState(no, slot)),
      useRecoilCallback(changeEquipment(no)(slot))
    ];
  case 'os':
    return [
      EquipmentType.Os,
      useRecoilValue(equipmentState(no, slot)),
      useRecoilCallback(changeEquipment(no)(slot))
    ];
  case 'gear':
    return [
      EquipmentType.Gear,
      useRecoilValue(equipmentState(no, slot)),
      useRecoilCallback(changeEquipment(no)(slot))
    ];
  }
}

export function useEquipmentAvailable({ no }: UnitBasicInfo, slot: EquipmentSlot): [
  available: boolean,
  availableLv: EquipmentSlotAvailableLv
] {
  return [
    useRecoilValue(equipmentSlotAvailableState(no, slot)),
    useRecoilValue(equipmentSlotAvailableLvState(no, slot))
  ];
}

export function useChip1EquipmentEffect({ no }: UnitBasicInfo): [chip1: ChipEquipment | undefined, chip1Effect: StatusEffect] {
  return [
    useRecoilValue(equipmentState(no, 'chip1')),
    useRecoilValue(unitEquipmentStatusEffectsState(no, 'chip1'))
  ];
}

export function useChip2EquipmentEffect({ no }: UnitBasicInfo): [chip2: ChipEquipment | undefined, chip2Effect: StatusEffect] {
  return [
    useRecoilValue(equipmentState(no, 'chip2')),
    useRecoilValue(unitEquipmentStatusEffectsState(no, 'chip2'))
  ];
}

export function useOsEquipmentEffect({ no }: UnitBasicInfo): [os: OsEquipment | undefined, osEffect: StatusEffect] {
  return [
    useRecoilValue(equipmentState(no, 'os')),
    useRecoilValue(unitEquipmentStatusEffectsState(no, 'os'))
  ];
}

export function useGearEquipmentEffect({ no }: UnitBasicInfo): [gear: GearEquipment | undefined, gearEffect: StatusEffect] {
  return [
    useRecoilValue(equipmentState(no, 'gear')),
    useRecoilValue(unitEquipmentStatusEffectsState(no, 'gear'))
  ];
}
