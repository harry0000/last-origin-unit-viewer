import {
  Chip,
  ChipEquipmentRank,
  ChipId,
  EquipmentEnhancementLevel,
  EquipmentId,
  EquipmentRank,
  EquipmentType,
  Gear,
  GearEquipmentRank,
  GearId,
  Os,
  OsEquipmentRank,
  OsId,
  availableRank,
  matchExclusive
} from './EquipmentData';
import { emptyStatusEffect, StatusEffect } from '../status/StatusEffect';
import { UnitLvValue } from '../status/UnitLv';
import { UnitNumber } from '../UnitBasicInfo';
import { calculateStatusEffect } from './EquipmentEffectCalculator';

import { unitEquipmentSlotData } from '../../data/unitEquipmentSlotData';

export type EquipmentSlotAvailableLv = typeof unitEquipmentSlotData[UnitNumber][keyof typeof unitEquipmentSlotData[UnitNumber]]

type EquipmentAttribute<T extends EquipmentId> =
  Readonly<{
    id: T,
    rank:
      T extends ChipId ? ChipEquipmentRank :
      T extends OsId   ? OsEquipmentRank :
      T extends GearId ? GearEquipmentRank :
      never,
    enhanceLv: EquipmentEnhancementLevel
  }>

export type ChipEquipment = EquipmentAttribute<ChipId>
export type OsEquipment   = EquipmentAttribute<OsId>
export type GearEquipment = EquipmentAttribute<GearId>

const defaultEquipmentRank = {
  rank: EquipmentRank.SS
} as const;

export class UnitChip1Equipment {

  readonly unit: UnitNumber;
  readonly chip1: ChipEquipment | undefined;

  constructor(
    unit: UnitNumber,
    chip1?: ChipEquipment
  ) {
    this.unit = unit;
    this.chip1 = chip1;
  }

  equipChip1(chip: Chip, enhanceLv: EquipmentEnhancementLevel): UnitChip1Equipment {
    if (
      (
        chip.id !== this.chip1?.id ||
        enhanceLv !== this.chip1?.enhanceLv
      ) &&
      chip.type === EquipmentType.Chip &&
      matchExclusive(this.unit, chip)
    ) {
      const newChip = { ...defaultEquipmentRank, id: chip.id, enhanceLv };
      return new UnitChip1Equipment(this.unit, newChip);
    }
    return this;
  }

  removeChip1(): UnitChip1Equipment {
    if (this.chip1) {
      return new UnitChip1Equipment(this.unit, undefined);
    }
    return this;
  }

  changeEnhancementLv(lv: EquipmentEnhancementLevel): UnitChip1Equipment {
    return this.chip1 && this.chip1.enhanceLv !== lv ?
      new UnitChip1Equipment(this.unit, { ...this.chip1, enhanceLv: lv }) :
      this;
  }

  get chip1AvailableLv(): EquipmentSlotAvailableLv {
    return unitEquipmentSlotData[this.unit].chip1;
  }

  isChip1Available(lv: UnitLvValue): boolean {
    return lv >= this.chip1AvailableLv;
  }

  chip1StatusEffects(lv: UnitLvValue): StatusEffect {
    return this.isChip1Available(lv) && this.chip1 ?
      calculateStatusEffect(this.chip1.id, this.chip1.rank, this.chip1.enhanceLv) :
      emptyStatusEffect;
  }
}

export class UnitChip2Equipment {

  readonly unit: UnitNumber;
  readonly chip2: ChipEquipment | undefined;

  constructor(
    unit: UnitNumber,
    chip2?: ChipEquipment
  ) {
    this.unit = unit;
    this.chip2 = chip2;
  }

  equipChip2(chip: Chip, enhanceLv: EquipmentEnhancementLevel): UnitChip2Equipment {
    if (
      (
        chip.id !== this.chip2?.id ||
        enhanceLv !== this.chip2?.enhanceLv
      ) &&
      chip.type === EquipmentType.Chip &&
      matchExclusive(this.unit, chip)
    ) {
      const newChip = { ...defaultEquipmentRank, id: chip.id, enhanceLv };
      return new UnitChip2Equipment(this.unit, newChip);
    }
    return this;
  }

  removeChip2(): UnitChip2Equipment {
    if (this.chip2) {
      return new UnitChip2Equipment(this.unit, undefined);
    }
    return this;
  }

  changeEnhancementLv(lv: EquipmentEnhancementLevel): UnitChip2Equipment {
    return this.chip2 && this.chip2.enhanceLv !== lv ?
      new UnitChip2Equipment(this.unit, { ...this.chip2, enhanceLv: lv }) :
      this;
  }

  get chip2AvailableLv(): EquipmentSlotAvailableLv {
    return unitEquipmentSlotData[this.unit].chip2;
  }

  isChip2Available(lv: UnitLvValue): boolean {
    return lv >= this.chip2AvailableLv;
  }

  chip2StatusEffects(lv: UnitLvValue): StatusEffect {
    return this.isChip2Available(lv) && this.chip2 ?
      calculateStatusEffect(this.chip2.id, this.chip2.rank, this.chip2.enhanceLv) :
      emptyStatusEffect;
  }
}

export class UnitOsEquipment {

  readonly unit: UnitNumber;
  readonly os: OsEquipment | undefined;

  constructor(
    unit: UnitNumber,
    os?: OsEquipment
  ) {
    this.unit = unit;
    this.os = os;
  }

  equipOs(os: Os, rank: EquipmentRank, enhanceLv: EquipmentEnhancementLevel): UnitOsEquipment {
    if (
      (
        os.id     !== this.os?.id ||
        rank      !== this.os?.rank ||
        enhanceLv !== this.os?.enhanceLv
      ) &&
      os.type === EquipmentType.Os &&
      availableRank(os, rank) &&
      matchExclusive(this.unit, os)
    ) {
      const newOs = { id: os.id, rank, enhanceLv };
      return new UnitOsEquipment(this.unit, newOs);
    }
    return this;
  }

  removeOs(): UnitOsEquipment {
    if (this.os) {
      return new UnitOsEquipment(this.unit, undefined);
    }
    return this;
  }

  changeEnhancementLv(lv: EquipmentEnhancementLevel): UnitOsEquipment {
    return this.os && this.os.enhanceLv !== lv ?
      new UnitOsEquipment(this.unit, { ...this.os, enhanceLv: lv }) :
      this;
  }

  get osAvailableLv(): EquipmentSlotAvailableLv {
    return unitEquipmentSlotData[this.unit].os;
  }

  isOsAvailable(lv: UnitLvValue): boolean {
    return lv >= this.osAvailableLv;
  }

  osStatusEffects(lv: UnitLvValue): StatusEffect {
    return this.isOsAvailable(lv) && this.os ?
      calculateStatusEffect(this.os.id, this.os.rank, this.os.enhanceLv) :
      emptyStatusEffect;
  }
}

export class UnitGearEquipment {

  readonly unit: UnitNumber;
  readonly gear: GearEquipment | undefined;

  constructor(
    unit: UnitNumber,
    gear?: GearEquipment
  ) {
    this.unit = unit;
    this.gear = gear;
  }

  equipGear(gear: Gear, enhanceLv: EquipmentEnhancementLevel): UnitGearEquipment {
    if (
      (
        gear.id !== this.gear?.id ||
        enhanceLv !== this.gear?.enhanceLv
      ) &&
      gear.type === EquipmentType.Gear &&
      matchExclusive(this.unit, gear)
    ) {
      const newGear = { ...defaultEquipmentRank, id: gear.id, enhanceLv };
      return new UnitGearEquipment(this.unit, newGear);
    }
    return this;
  }

  removeGear(): UnitGearEquipment {
    if (this.gear) {
      return new UnitGearEquipment(this.unit, undefined);
    }
    return this;
  }

  changeEnhancementLv(lv: EquipmentEnhancementLevel): UnitGearEquipment {
    return this.gear && this.gear.enhanceLv !== lv ?
      new UnitGearEquipment(this.unit, { ...this.gear, enhanceLv: lv }) :
      this;
  }

  get gearAvailableLv(): EquipmentSlotAvailableLv {
    return unitEquipmentSlotData[this.unit].gear;
  }

  isGearAvailable(lv: UnitLvValue): boolean {
    return lv >= this.gearAvailableLv;
  }

  gearStatusEffects(lv: UnitLvValue): StatusEffect {
    return this.isGearAvailable(lv) && this.gear ?
      calculateStatusEffect(this.gear.id, this.gear.rank, this.gear.enhanceLv) :
      emptyStatusEffect;
  }
}
