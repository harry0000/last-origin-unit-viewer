import { useRecoilCallback, useRecoilValue } from 'recoil';
import { useTranslation } from 'react-i18next';

import {
  Chip,
  EquipmentEnhancementLevel,
  EquipmentId,
  EquipmentRank,
  EquipmentType,
  Gear,
  Os,
  OsEquipmentRank
} from '../../domain/equipment/EquipmentData';
import {
  ChipEquipment,
  EquipmentSlotAvailableLv,
  GearEquipment,
  OsEquipment
} from '../../domain/equipment/UnitEquipment';
import { StatusEffect } from '../../domain/status/StatusEffect';
import { UnitBasicInfo, UnitNumber } from '../../domain/UnitBasicInfo';

import { EquipmentSlot, unitEquipmentState } from './UnitEquipmentState';
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
  const selected = useRecoilValue(unitEquipmentState.enhanceLvSelectorState(slot, lv));

  const updateSelector = useRecoilCallback(unitEquipmentState.selectEnhanceLv(slot, lv));
  const changeEquipmentEnhanceLv = useRecoilCallback(unitEquipmentState.changeEquipmentEnhanceLv(unit, slot, lv));

  return [
    selected,
    () => {
      updateSelector();
      changeEquipmentEnhanceLv();
    }
  ];
}

export function useOsEquipmentRankSelector(rank: OsEquipmentRank): [selected: boolean, selectRank: () => void] {
  return [
    useRecoilValue(unitEquipmentState.osRankSelectorState(rank)),
    useRecoilCallback(unitEquipmentState.selectOsRank(rank))
  ];
}

export function useEquipmentRank(slot: EquipmentSlot): EquipmentRank {
  return useRecoilValue(unitEquipmentState.selectedEquipmentRankState(slot));
}

export function useEquipmentStatusEffects(slot: EquipmentSlot, id: EquipmentId): string {
  const { t } = useTranslation();
  const effects = useRecoilValue(unitEquipmentState.equipmentStatusEffectsDataState(slot, id));
  const details = translateEquipmentStatusEffects(effects, t);

  return details !== '' ? details : t('status.none_equipment_status_effect');
}

export function useEquipmentEffects(
  slot: EquipmentSlot,
  id: EquipmentId
): ReadonlyArray<TranslatedEquipmentEffect> | undefined {
  const { t } = useTranslation();
  const effects = useRecoilValue(unitEquipmentState.equipmentEffectsDataState(slot, id));

  return effects && translateEquipmentEffect(effects, t);
}

export function useEquipmentEffectsAsSkill(
  slot: EquipmentSlot,
  id: EquipmentId
): ReadonlyArray<TranslatedEquipmentEffectAsSkill> | undefined {
  const { t } = useTranslation();
  const effects = useRecoilValue(unitEquipmentState.equipmentEffectsAsSkillDataState(slot, id));

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
      useRecoilValue(unitEquipmentState.equipmentState(no, slot)),
      useRecoilCallback(unitEquipmentState.changeEquipment(no, slot))
    ];
  case 'chip2':
    return [
      EquipmentType.Chip,
      useRecoilValue(unitEquipmentState.equipmentState(no, slot)),
      useRecoilCallback(unitEquipmentState.changeEquipment(no, slot))
    ];
  case 'os':
    return [
      EquipmentType.Os,
      useRecoilValue(unitEquipmentState.equipmentState(no, slot)),
      useRecoilCallback(unitEquipmentState.changeEquipment(no, slot))
    ];
  case 'gear':
    return [
      EquipmentType.Gear,
      useRecoilValue(unitEquipmentState.equipmentState(no, slot)),
      useRecoilCallback(unitEquipmentState.changeEquipment(no, slot))
    ];
  }
}

export function useEquipmentAvailable({ no }: UnitBasicInfo, slot: EquipmentSlot): [
  available: boolean,
  availableLv: EquipmentSlotAvailableLv
] {
  return [
    useRecoilValue(unitEquipmentState.equipmentSlotAvailableState(no, slot)),
    useRecoilValue(unitEquipmentState.equipmentSlotAvailableLvState(no, slot))
  ];
}

export function useChip1EquipmentEffect({ no }: UnitBasicInfo): [chip1: ChipEquipment | undefined, chip1Effect: StatusEffect] {
  return [
    useRecoilValue(unitEquipmentState.equipmentState(no, 'chip1')),
    useRecoilValue(unitEquipmentState.unitEquipmentStatusEffectsState(no, 'chip1'))
  ];
}

export function useChip2EquipmentEffect({ no }: UnitBasicInfo): [chip2: ChipEquipment | undefined, chip2Effect: StatusEffect] {
  return [
    useRecoilValue(unitEquipmentState.equipmentState(no, 'chip2')),
    useRecoilValue(unitEquipmentState.unitEquipmentStatusEffectsState(no, 'chip2'))
  ];
}

export function useOsEquipmentEffect({ no }: UnitBasicInfo): [os: OsEquipment | undefined, osEffect: StatusEffect] {
  return [
    useRecoilValue(unitEquipmentState.equipmentState(no, 'os')),
    useRecoilValue(unitEquipmentState.unitEquipmentStatusEffectsState(no, 'os'))
  ];
}

export function useGearEquipmentEffect({ no }: UnitBasicInfo): [gear: GearEquipment | undefined, gearEffect: StatusEffect] {
  return [
    useRecoilValue(unitEquipmentState.equipmentState(no, 'gear')),
    useRecoilValue(unitEquipmentState.unitEquipmentStatusEffectsState(no, 'gear'))
  ];
}
