import {
  CommonCoreLinkBonus,
  CoreLinkBonus,
  DamageMultiplierBonus,
  FullLinkBonus
} from './UnitCoreLinkBonusData';
import { Effect } from './Effect';
import { MicroValue, MilliPercentageValue } from './ValueUnit';
import { UnitBasicInfo, UnitNumber, UnitRank, UnitRole, UnitType } from './UnitBasicInfo';
import { UnitLvValue } from './status/UnitLv';

import { unitCoreLinkBonusData } from '../data/unitCoreLinkBonusData';

export type CoreLinkSlotAvailableLv = 10 | 30 | 50 | 70 | 90

export type CoreLinkUnit = {
  unit: UnitNumber,
  rate: 100
} | {
  rank: typeof UnitRank.SS,
  type: UnitType,
  role: UnitRole,
  rate: 75
} | {
  rank: typeof UnitRank.S,
  type: UnitType,
  role: UnitRole,
  rate: 60
} | {
  rank: typeof UnitRank.A,
  type: UnitType,
  role: UnitRole,
  rate: 45
}

const MaxLinkRate = 500;

const commonStatusBonus: CommonCoreLinkBonus = {
  [Effect.HpUp]:  { milliPercentage: 20_000 },
  [Effect.AtkUp]: { milliPercentage: 20_000 },
  [Effect.ExpUp]: { milliPercentage: 4_000 }
} as const;

function calcBonusValue(value: number, rate: number): number {
  return value * rate / 100;
}

function calcSpecificBonus(linkRate: number, no: UnitNumber):
  { [key in keyof DamageMultiplierBonus]: MilliPercentageValue } |
  { [Effect.HpUp]: MilliPercentageValue } |
  { [Effect.AccUp]: MilliPercentageValue } |
  { [Effect.CriUp]: MilliPercentageValue } |
  { [Effect.DefUp]: MilliPercentageValue } |
  { [Effect.EvaUp]: MilliPercentageValue } |
  { [Effect.SpdUp]: MicroValue }
{
  const bonus = unitCoreLinkBonusData[no].specific_link_bonus;
  if ('damage_multiplier' in bonus) { return { damage_multiplier: { milliPercentage: calcBonusValue(bonus.damage_multiplier.milliPercentage, linkRate) } }; }
  if ('hp_up' in bonus) { return  { [Effect.HpUp]: { milliPercentage: calcBonusValue(bonus.hp_up.milliPercentage, linkRate) } }; }
  if ('acc_up' in bonus) { return { [Effect.AccUp]: { milliPercentage: calcBonusValue(bonus.acc_up.milliPercentage, linkRate) } }; }
  if ('cri_up' in bonus) { return { [Effect.CriUp]: { milliPercentage: calcBonusValue(bonus.cri_up.milliPercentage, linkRate) } }; }
  if ('def_up' in bonus) { return { [Effect.DefUp]: { milliPercentage: calcBonusValue(bonus.def_up.milliPercentage, linkRate) } }; }
  if ('eva_up' in bonus) { return { [Effect.EvaUp]: { milliPercentage: calcBonusValue(bonus.eva_up.milliPercentage, linkRate) } }; }

  return { [Effect.SpdUp]: { microValue: calcBonusValue(bonus.spd_up.microValue, linkRate) } };
}

function calcBonus(linkRate: number, no: UnitNumber): CoreLinkBonus {
  const hp = calcBonusValue(commonStatusBonus.hp_up.milliPercentage, linkRate);
  const atk = calcBonusValue(commonStatusBonus.atk_up.milliPercentage, linkRate);
  const exp = calcBonusValue(commonStatusBonus.exp_up.milliPercentage, linkRate);

  const specific = calcSpecificBonus(linkRate, no);

  if ('hp_up' in specific) {
    return {
      [Effect.HpUp]: { milliPercentage: hp + specific.hp_up.milliPercentage },
      [Effect.AtkUp]: { milliPercentage: atk },
      [Effect.ExpUp]: { milliPercentage: exp }
    };
  } else {
    return {
      [Effect.HpUp]: { milliPercentage: hp },
      [Effect.AtkUp]: { milliPercentage: atk },
      [Effect.ExpUp]: { milliPercentage: exp },
      ...specific
    };
  }
}

class UnitCoreLink {

  static get slot1AvailableLv(): CoreLinkSlotAvailableLv { return 10; }
  static get slot2AvailableLv(): CoreLinkSlotAvailableLv { return 30; }
  static get slot3AvailableLv(): CoreLinkSlotAvailableLv { return 50; }
  static get slot4AvailableLv(): CoreLinkSlotAvailableLv { return 70; }
  static get slot5AvailableLv(): CoreLinkSlotAvailableLv { return 90; }

  readonly unit: UnitBasicInfo;

  readonly slot1: CoreLinkUnit | undefined;
  readonly slot2: CoreLinkUnit | undefined;
  readonly slot3: CoreLinkUnit | undefined;
  readonly slot4: CoreLinkUnit | undefined;
  readonly slot5: CoreLinkUnit | undefined;

  readonly fullLinkBonus: FullLinkBonus | undefined

  constructor(
    unit: UnitBasicInfo,
    slot1?: CoreLinkUnit,
    slot2?: CoreLinkUnit,
    slot3?: CoreLinkUnit,
    slot4?: CoreLinkUnit,
    slot5?: CoreLinkUnit,
    fullLinkBonus?: FullLinkBonus
  ) {
    this.unit = unit;

    this.slot1 = slot1;
    this.slot2 = slot2;
    this.slot3 = slot3;
    this.slot4 = slot4;
    this.slot5 = slot5;

    this.fullLinkBonus = fullLinkBonus;
  }

  get fitUnit(): CoreLinkUnit {
    return { unit: this.unit.no, rate: 100 };
  }

  get rankSSFitUnit(): CoreLinkUnit & { rank: typeof UnitRank.SS } {
    return { rank: UnitRank.SS, type: this.unit.type, role: this.unit.role, rate: 75 };
  }

  get rankSFitUnit(): CoreLinkUnit & { rank: typeof UnitRank.S } {
    return { rank: UnitRank.S, type: this.unit.type, role: this.unit.role, rate: 60 };
  }

  get rankAFitUnit(): CoreLinkUnit & { rank: typeof UnitRank.A } {
    return { rank: UnitRank.A, type: this.unit.type, role: this.unit.role, rate: 45 };
  }

  #validateCoreLinkUnit(coreLinkUnit: CoreLinkUnit): boolean {
    if ('unit' in coreLinkUnit) {
      return coreLinkUnit.unit === this.unit.no;
    }

    return coreLinkUnit.type === this.unit.type && coreLinkUnit.role === this.unit.role;
  }

  linkSlot1(coreLinkUnit: CoreLinkUnit): UnitCoreLink {
    if (this.#validateCoreLinkUnit(coreLinkUnit) && coreLinkUnit !== this.slot1) {
      return new UnitCoreLink(this.unit, coreLinkUnit, this.slot2, this.slot3, this.slot4, this.slot5, this.fullLinkBonus);
    }
    return this;
  }

  linkSlot2(coreLinkUnit: CoreLinkUnit): UnitCoreLink {
    if (this.#validateCoreLinkUnit(coreLinkUnit) && coreLinkUnit !== this.slot2) {
      return new UnitCoreLink(this.unit, this.slot1, coreLinkUnit, this.slot3, this.slot4, this.slot5, this.fullLinkBonus);
    }
    return this;
  }

  linkSlot3(coreLinkUnit: CoreLinkUnit): UnitCoreLink {
    if (this.#validateCoreLinkUnit(coreLinkUnit) && coreLinkUnit !== this.slot3) {
      return new UnitCoreLink(this.unit, this.slot1, this.slot2, coreLinkUnit, this.slot4, this.slot5, this.fullLinkBonus);
    }
    return this;
  }

  linkSlot4(coreLinkUnit: CoreLinkUnit): UnitCoreLink {
    if (this.#validateCoreLinkUnit(coreLinkUnit) && coreLinkUnit !== this.slot4) {
      return new UnitCoreLink(this.unit, this.slot1, this.slot2, this.slot3, coreLinkUnit, this.slot5, this.fullLinkBonus);
    }
    return this;
  }

  linkSlot5(coreLinkUnit: CoreLinkUnit): UnitCoreLink {
    if (this.#validateCoreLinkUnit(coreLinkUnit) && coreLinkUnit !== this.slot5) {
      return new UnitCoreLink(this.unit, this.slot1, this.slot2, this.slot3, this.slot4, coreLinkUnit, this.fullLinkBonus);
    }
    return this;
  }

  unlinkSlot1(): UnitCoreLink {
    return this.slot1 ? new UnitCoreLink(this.unit, undefined, this.slot2, this.slot3, this.slot4, this.slot5, this.fullLinkBonus) : this;
  }
  unlinkSlot2(): UnitCoreLink {
    return this.slot2 ? new UnitCoreLink(this.unit, this.slot1, undefined, this.slot3, this.slot4, this.slot5, this.fullLinkBonus) : this;
  }
  unlinkSlot3(): UnitCoreLink {
    return this.slot3 ? new UnitCoreLink(this.unit, this.slot1, this.slot2, undefined, this.slot4, this.slot5, this.fullLinkBonus) : this;
  }
  unlinkSlot4(): UnitCoreLink {
    return this.slot4 ? new UnitCoreLink(this.unit, this.slot1, this.slot2, this.slot3, undefined, this.slot5, this.fullLinkBonus) : this;
  }
  unlinkSlot5(): UnitCoreLink {
    return this.slot5 ? new UnitCoreLink(this.unit, this.slot1, this.slot2, this.slot3, this.slot4, undefined, this.fullLinkBonus) : this;
  }

  selectFullLinkBonus(bonus: FullLinkBonus): UnitCoreLink {
    return (
      this.fullLinkBonus !== bonus &&
      unitCoreLinkBonusData[this.unit.no].full_link_bonus.indexOf(bonus) >= 0
    ) ?
      new UnitCoreLink(this.unit, this.slot1, this.slot2, this.slot3, this.slot4, this.slot5, bonus) :
      this;
  }

  unselectFullLinkBonus(): UnitCoreLink {
    return this.fullLinkBonus ?
      new UnitCoreLink(this.unit, this.slot1, this.slot2, this.slot3, this.slot4, this.slot5, undefined) :
      this;
  }

  isSlot1Available(lv: UnitLvValue): boolean { return lv >= UnitCoreLink.slot1AvailableLv; }
  isSlot2Available(lv: UnitLvValue): boolean { return lv >= UnitCoreLink.slot2AvailableLv; }
  isSlot3Available(lv: UnitLvValue): boolean { return lv >= UnitCoreLink.slot3AvailableLv; }
  isSlot4Available(lv: UnitLvValue): boolean { return lv >= UnitCoreLink.slot4AvailableLv; }
  isSlot5Available(lv: UnitLvValue): boolean { return lv >= UnitCoreLink.slot5AvailableLv; }

  slot1LinkRate(lv: UnitLvValue): number { return this.isSlot1Available(lv) && this.slot1 ? this.slot1.rate : 0; }
  slot2LinkRate(lv: UnitLvValue): number { return this.isSlot2Available(lv) && this.slot2 ? this.slot2.rate : 0; }
  slot3LinkRate(lv: UnitLvValue): number { return this.isSlot3Available(lv) && this.slot3 ? this.slot3.rate : 0; }
  slot4LinkRate(lv: UnitLvValue): number { return this.isSlot4Available(lv) && this.slot4 ? this.slot4.rate : 0; }
  slot5LinkRate(lv: UnitLvValue): number { return this.isSlot5Available(lv) && this.slot5 ? this.slot5.rate : 0; }

  linkRate(lv: UnitLvValue): number {
    return (
      this.slot1LinkRate(lv) +
      this.slot2LinkRate(lv) +
      this.slot3LinkRate(lv) +
      this.slot4LinkRate(lv) +
      this.slot5LinkRate(lv)
    );
  }

  bonusEffects(lv: UnitLvValue): CoreLinkBonus {
    const rate = this.linkRate(lv);
    return calcBonus(rate, this.unit.no);
  }

  isFullLinkBonusAvailable(lv: UnitLvValue): boolean {
    return this.linkRate(lv) === MaxLinkRate;
  }

  fullLinkBonusEffect(lv: UnitLvValue): FullLinkBonus | undefined {
    return this.isFullLinkBonusAvailable(lv) ? this.fullLinkBonus : undefined;
  }
}

export default UnitCoreLink;
