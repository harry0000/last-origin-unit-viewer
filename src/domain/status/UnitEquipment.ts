import {
  Chip,
  EquipmentEnhancementLevel,
  EquipmentRank,
  Gear,
  matchExclusive,
  Os, StatusEffectData
} from '../EquipmentData';
import { Effect } from '../Effect';
import { StatusEffect } from './StatusEffect';
import { UnitBasicInfo } from '../UnitBasicInfo';
import UnitLv, { UnitLvValue } from './UnitLv';
import { toIntegerValue, toMicroValue, toMilliPercentageValue, toMilliValue } from '../EquipmentEffectValue';

import { unitEquipmentSlot } from '../../data/unitEquipmentSlot';

import { foldObjectNonNullableEntry } from '../../util/object';

type EquipmentAttribute = {
  rank: EquipmentRank,
  enhanceLv: EquipmentEnhancementLevel
}

export type ChipEquipment = { equipped: Chip } & EquipmentAttribute
export type OsEquipment   = { equipped: Os } & EquipmentAttribute
export type GearEquipment = { equipped: Gear } & EquipmentAttribute

export type EquipmentSlot = 'chip1' | 'chip2' | 'os' | 'gear'

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

class UnitEquipment {

  readonly #unit: UnitBasicInfo;
  readonly chip1: ChipEquipment | undefined;
  readonly chip2: ChipEquipment | undefined;
  readonly os: OsEquipment | undefined;
  readonly gear: GearEquipment | undefined;

  constructor(
    unit: UnitBasicInfo,
    chip1?: ChipEquipment,
    chip2?: ChipEquipment,
    os?: OsEquipment,
    gear?: GearEquipment,
  ) {
    this.#unit = unit;

    this.chip1 = chip1;
    this.chip2 = chip2;
    this.os    = os;
    this.gear  = gear;
  }

  equipChip1(chip: Chip): UnitEquipment {
    if (chip !== this.chip1?.equipped && matchExclusive(this.#unit, chip)) {
      const newChip = { equipped: chip, ...defaultAttribute };
      return new UnitEquipment(this.#unit, newChip, this.chip2, this.os, this.gear);
    }
    return this;
  }

  removeChip1(): UnitEquipment {
    if (this.chip1) {
      return new UnitEquipment(this.#unit, undefined, this.chip2, this.os, this.gear);
    }
    return this;
  }

  equipChip2(chip: Chip): UnitEquipment {
    if (chip !== this.chip2?.equipped && matchExclusive(this.#unit, chip)) {
      const newChip = { equipped: chip, ...defaultAttribute };
      return new UnitEquipment(this.#unit, this.chip1, newChip, this.os, this.gear);
    }
    return this;
  }

  removeChip2(): UnitEquipment {
    if (this.chip2) {
      return new UnitEquipment(this.#unit, this.chip1, undefined, this.os, this.gear);
    }
    return this;
  }

  equipOs(os: Os): UnitEquipment {
    if (os !== this.os?.equipped && matchExclusive(this.#unit, os)) {
      const newOs = { equipped: os, ...defaultAttribute };
      return new UnitEquipment(this.#unit, this.chip1, this.chip2, newOs, this.gear);
    }
    return this;
  }

  removeOs(): UnitEquipment {
    if (this.os) {
      return new UnitEquipment(this.#unit, this.chip1, this.chip2, undefined, this.gear);
    }
    return this;
  }

  equipGear(gear: Gear): UnitEquipment {
    if (gear !== this.gear?.equipped && matchExclusive(this.#unit, gear)) {
      const newGear = { equipped: gear, ...defaultAttribute };
      return new UnitEquipment(this.#unit, this.chip1, this.chip2, this.os, newGear);
    }
    return this;
  }

  removeGear(): UnitEquipment {
    if (this.gear) {
      return new UnitEquipment(this.#unit, this.chip1, this.chip2, this.os, undefined);
    }
    return this;
  }

  get chip1AvailableLv(): UnitLvValue {
    return unitEquipmentSlot[this.#unit.no].chip1;
  }

  get chip2AvailableLv(): UnitLvValue {
    return unitEquipmentSlot[this.#unit.no].chip2;
  }

  get osAvailableLv(): UnitLvValue {
    return unitEquipmentSlot[this.#unit.no].os;
  }

  get gearAvailableLv(): UnitLvValue {
    return unitEquipmentSlot[this.#unit.no].gear;
  }

  isChip1Available(unitLv: UnitLv): boolean {
    return this.chip1AvailableLv <= unitLv.value;
  }

  isChip2Available(unitLv: UnitLv): boolean {
    return this.chip2AvailableLv <= unitLv.value;
  }

  isOsAvailable(unitLv: UnitLv): boolean {
    return this.osAvailableLv <= unitLv.value;
  }

  isGearAvailable(unitLv: UnitLv): boolean {
    return this.gearAvailableLv <= unitLv.value;
  }

  chip1StatusEffects(unitLv: UnitLv): StatusEffect {
    if (this.isChip1Available(unitLv) && this.chip1 && 'status_effects' in this.chip1.equipped) {
      return extractStatusEffect(this.chip1.equipped.status_effects[this.chip1.enhanceLv]);
    } else {
      return emptyEffect;
    }
  }

  chip2StatusEffects(unitLv: UnitLv): StatusEffect {
    if (this.isChip2Available(unitLv) && this.chip2 && 'status_effects' in this.chip2.equipped) {
      return extractStatusEffect(this.chip2.equipped.status_effects[this.chip2.enhanceLv]);
    } else {
      return emptyEffect;
    }
  }

  osStatusEffects(unitLv: UnitLv): StatusEffect {
    if (this.isOsAvailable(unitLv) && this.os && 'status_effects' in this.os.equipped) {
      return extractStatusEffect(this.os.equipped.status_effects[this.os.enhanceLv]);
    } else {
      return emptyEffect;
    }
  }

  gearStatusEffects(unitLv: UnitLv): StatusEffect {
    if (this.isGearAvailable(unitLv) && this.gear && 'status_effects' in this.gear.equipped) {
      return extractStatusEffect(this.gear.equipped.status_effects[this.gear.enhanceLv]);
    } else {
      return emptyEffect;
    }
  }
}

export default UnitEquipment;
