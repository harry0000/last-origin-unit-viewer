import {
  Chip,
  EquipmentEnhancementLevel,
  EquipmentRank,
  EquipmentType,
  Gear,
  matchExclusive,
  Os,
  StatusEffectData
} from '../EquipmentData';
import { Effect } from '../Effect';
import { StatusEffect } from './StatusEffect';
import { UnitLvValue } from './UnitLv';
import { UnitNumber } from '../UnitBasicInfo';
import { toIntegerValue, toMicroValue, toMilliPercentageValue, toMilliValue } from '../EquipmentEffectValue';

import { unitEquipmentSlot } from '../../data/unitEquipmentSlot';

import { foldObjectNonNullableEntry } from '../../util/object';

export type EquipmentSlotAvailableLv = typeof unitEquipmentSlot[UnitNumber][keyof typeof unitEquipmentSlot[UnitNumber]]

type EquipmentAttribute = Readonly<{
  rank: EquipmentRank,
  enhanceLv: EquipmentEnhancementLevel
}>

export type ChipEquipment = Readonly<{ equipped: Chip }> & EquipmentAttribute
export type OsEquipment   = Readonly<{ equipped: Os }> & EquipmentAttribute
export type GearEquipment = Readonly<{ equipped: Gear }> & EquipmentAttribute

const emptyEffect: StatusEffect = {};

const defaultAttribute = {
  rank: EquipmentRank.SS,
  enhanceLv: 10
} as const;

function extractStatusEffect(data: StatusEffectData): StatusEffect {
  return foldObjectNonNullableEntry(data, entry => {
    switch (entry[0]) {
    case Effect.HpUp:
      return { [Effect.HpUp]: toIntegerValue(entry[1]) };
    case Effect.AtkUp:
    case Effect.AtkDown:
    case Effect.DefUp:
    case Effect.DefDown:
      return { [entry[0]]: toMilliValue(entry[1]) };
    case Effect.AccUp:
    case Effect.AccDown:
    case Effect.EvaUp:
    case Effect.EvaDown:
    case Effect.CriUp:
    case Effect.CriDown:
    case Effect.FireResistUp:
    case Effect.FireResistDown:
    case Effect.IceResistUp:
    case Effect.IceResistDown:
    case Effect.ElectricResistUp:
    case Effect.ElectricResistDown:
      return { [entry[0]]: toMilliPercentageValue(entry[1]) };
    case Effect.SpdUp:
    case Effect.SpdDown:
      return { [entry[0]]: toMicroValue(entry[1]) };
    default: {
      const _exhaustiveCheck: never = entry;
      return _exhaustiveCheck;
    }
    }
  })({});
}

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

  equipChip1(chip: Chip): UnitChip1Equipment {
    if (
      chip !== this.chip1?.equipped &&
      chip.type === EquipmentType.Chip &&
      matchExclusive(this.unit, chip)
    ) {
      const newChip = { equipped: chip, ...defaultAttribute };
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

  get chip1AvailableLv(): EquipmentSlotAvailableLv {
    return unitEquipmentSlot[this.unit].chip1;
  }

  isChip1Available(lv: UnitLvValue): boolean {
    return lv >= this.chip1AvailableLv;
  }

  chip1StatusEffects(lv: UnitLvValue): StatusEffect {
    if (
      this.isChip1Available(lv) &&
      this.chip1 && 'status_effects' in this.chip1.equipped
    ) {
      return extractStatusEffect(this.chip1.equipped.status_effects[this.chip1.enhanceLv]);
    } else {
      return emptyEffect;
    }
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

  equipChip2(chip: Chip): UnitChip2Equipment {
    if (
      chip !== this.chip2?.equipped &&
      chip.type === EquipmentType.Chip &&
      matchExclusive(this.unit, chip)
    ) {
      const newChip = { equipped: chip, ...defaultAttribute };
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

  get chip2AvailableLv(): EquipmentSlotAvailableLv {
    return unitEquipmentSlot[this.unit].chip2;
  }

  isChip2Available(lv: UnitLvValue): boolean {
    return lv >= this.chip2AvailableLv;
  }

  chip2StatusEffects(lv: UnitLvValue): StatusEffect {
    if (
      this.isChip2Available(lv) &&
      this.chip2 && 'status_effects' in this.chip2.equipped
    ) {
      return extractStatusEffect(this.chip2.equipped.status_effects[this.chip2.enhanceLv]);
    } else {
      return emptyEffect;
    }
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

  equipOs(os: Os): UnitOsEquipment {
    if (
      os !== this.os?.equipped &&
      os.type === EquipmentType.Os &&
      matchExclusive(this.unit, os)
    ) {
      const newOs = { equipped: os, ...defaultAttribute };
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

  get osAvailableLv(): EquipmentSlotAvailableLv {
    return unitEquipmentSlot[this.unit].os;
  }

  isOsAvailable(lv: UnitLvValue): boolean {
    return lv >= this.osAvailableLv;
  }

  osStatusEffects(lv: UnitLvValue): StatusEffect {
    if (
      this.isOsAvailable(lv) &&
      this.os && 'status_effects' in this.os.equipped
    ) {
      return extractStatusEffect(this.os.equipped.status_effects[this.os.enhanceLv]);
    } else {
      return emptyEffect;
    }
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

  equipGear(gear: Gear): UnitGearEquipment {
    if (
      gear !== this.gear?.equipped &&
      gear.type === EquipmentType.Gear &&
      matchExclusive(this.unit, gear)
    ) {
      const newGear = { equipped: gear, ...defaultAttribute };
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

  get gearAvailableLv(): EquipmentSlotAvailableLv {
    return unitEquipmentSlot[this.unit].gear;
  }

  isGearAvailable(lv: UnitLvValue): boolean {
    return lv >= this.gearAvailableLv;
  }

  gearStatusEffects(lv: UnitLvValue): StatusEffect {
    if (
      this.isGearAvailable(lv) &&
      this.gear && 'status_effects' in this.gear.equipped
    ) {
      return extractStatusEffect(this.gear.equipped.status_effects[this.gear.enhanceLv]);
    } else {
      return emptyEffect;
    }
  }
}
