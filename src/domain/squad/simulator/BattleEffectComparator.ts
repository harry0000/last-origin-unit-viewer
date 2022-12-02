import { BattleEffect } from './BattleEffect';
import { EquipmentSlot } from '../../../state/equipment/UnitEquipmentState';
import { SkillType } from '../../skill/SkillType';
import { SourceOfEffect } from './SourceOfEffect';

const CompareResult = {
  Before: -1,
  // Equals: 0,
  Behind: 1
} as const;

const EquipmentSlotOrdering = {
  chip1: 1,
  chip2: 2,
  os: 3,
  gear: 4
} as const;

function compareSkillType(a: SkillType, b: SkillType): number {
  return a.localeCompare(b);
}

function compareEquipmentSlot(a: EquipmentSlot, b: EquipmentSlot): number {
  return EquipmentSlotOrdering[a] - EquipmentSlotOrdering[b];
}

function compareSourceOfEffect(a: SourceOfEffect, b: SourceOfEffect): number {
  if (a.type === 'ally') {
    if (a.type !== b.type) {
      return CompareResult.Before;
    }

    return a.no - b.no || compareSkillType(a.skillType, b.skillType);
  } else {
    if (a.type !== b.type) {
      return CompareResult.Behind;
    }

    return compareEquipmentSlot(a.slot, b.slot);
  }
}

export function compare(a: BattleEffect, b: BattleEffect): number {
  return compareSourceOfEffect(a.affected_by, b.affected_by);
}
