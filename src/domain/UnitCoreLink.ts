import {
  CommonCoreLinkBonus,
  CoreLinkBonus,
  DamageMultiplierBonus,
  FullLinkBonus,
  FullLinkBonusIndex
} from './UnitCoreLinkBonusData';
import { Effect } from './Effect';
import { MicroValue, MilliPercentageValue } from './ValueUnit';
import { UnitLvValue } from './status/UnitLv';
import { UnitNumber, UnitRank, UnitRole, UnitType } from './UnitBasicInfo';

import { unitCoreLinkBonusData } from '../data/unitCoreLinkBonusData';
import { unitBasicData } from '../data/unitBasicData';

export type CoreLinkCount = 0 | 1 | 2 | 3 | 4 | 5
export type CoreLinkSlotAvailableLv = 10 | 30 | 50 | 70 | 90

export type CoreLinkUnit = Readonly<{
  unit: UnitNumber,
  rate: 100
}> | Readonly<{
  rank: typeof UnitRank.SS,
  type: UnitType,
  role: UnitRole,
  rate: 75
}> | Readonly<{
  rank: typeof UnitRank.S,
  type: UnitType,
  role: UnitRole,
  rate: 60
}> | Readonly<{
  rank: typeof UnitRank.A,
  type: UnitType,
  role: UnitRole,
  rate: 45
}>

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
  { [Effect.SpdUp]: MicroValue } |
  {
    [Effect.AccUp]: MilliPercentageValue,
    [Effect.CriUp]: MilliPercentageValue
  }
{
  const bonus = unitCoreLinkBonusData[no].specific_link_bonus;
  if ('acc_up' in bonus && 'cri_up' in bonus) {
    return {
      [Effect.AccUp]: { milliPercentage: calcBonusValue(bonus.acc_up.milliPercentage, linkRate) },
      [Effect.CriUp]: { milliPercentage: calcBonusValue(bonus.cri_up.milliPercentage, linkRate) }
    };
  }

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
  } else if ('acc_up' in specific && 'cri_up' in specific) {
    return {
      [Effect.AtkUp]: { milliPercentage: atk },
      [Effect.ExpUp]: { milliPercentage: exp },
      ...specific
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

  static initialState = {
    coreLinkUnit: undefined,
    linkCount: 0,
    linkRate: 0,
    fullLinkBonusAvailable: false,
    selectedFullLinkBonus: undefined,
    fullLinkBonus: undefined
  } as const;

  static get slot1AvailableLv(): CoreLinkSlotAvailableLv { return 10; }
  static get slot2AvailableLv(): CoreLinkSlotAvailableLv { return 30; }
  static get slot3AvailableLv(): CoreLinkSlotAvailableLv { return 50; }
  static get slot4AvailableLv(): CoreLinkSlotAvailableLv { return 70; }
  static get slot5AvailableLv(): CoreLinkSlotAvailableLv { return 90; }

  static isSlot1Available(lv: UnitLvValue): boolean { return lv >= UnitCoreLink.slot1AvailableLv; }
  static isSlot2Available(lv: UnitLvValue): boolean { return lv >= UnitCoreLink.slot2AvailableLv; }
  static isSlot3Available(lv: UnitLvValue): boolean { return lv >= UnitCoreLink.slot3AvailableLv; }
  static isSlot4Available(lv: UnitLvValue): boolean { return lv >= UnitCoreLink.slot4AvailableLv; }
  static isSlot5Available(lv: UnitLvValue): boolean { return lv >= UnitCoreLink.slot5AvailableLv; }

  static emptyBonus(unit: UnitNumber): CoreLinkBonus { return calcBonus(0, unit); }

  static getCoreLinkUnits(
    unit: UnitNumber
  ): readonly [
    CoreLinkUnit,
    CoreLinkUnit & { rank: typeof UnitRank.SS },
    CoreLinkUnit & { rank: typeof UnitRank.S },
    CoreLinkUnit & { rank: typeof UnitRank.A }
  ] {
    return [
      UnitCoreLink.#fitUnit(unit),
      UnitCoreLink.#rankSSFitUnit(unit),
      UnitCoreLink.#rankSFitUnit(unit),
      UnitCoreLink.#rankAFitUnit(unit)
    ];
  }

  static #fitUnit(unit: UnitNumber): CoreLinkUnit {
    return { unit, rate: 100 };
  }

  static #rankSSFitUnit(unit: UnitNumber): CoreLinkUnit & { rank: typeof UnitRank.SS } {
    const { type, role } = unitBasicData[unit];
    return { rank: UnitRank.SS, type, role, rate: 75 };
  }

  static #rankSFitUnit(unit: UnitNumber): CoreLinkUnit & { rank: typeof UnitRank.S } {
    const { type, role } = unitBasicData[unit];
    return { rank: UnitRank.S, type, role, rate: 60 };
  }

  static #rankAFitUnit(unit: UnitNumber): CoreLinkUnit & { rank: typeof UnitRank.A } {
    const { type, role } = unitBasicData[unit];
    return { rank: UnitRank.A, type, role, rate: 45 };
  }

  readonly unit: UnitNumber;

  readonly slot1: CoreLinkUnit | undefined;
  readonly slot2: CoreLinkUnit | undefined;
  readonly slot3: CoreLinkUnit | undefined;
  readonly slot4: CoreLinkUnit | undefined;
  readonly slot5: CoreLinkUnit | undefined;

  readonly fullLinkBonus: FullLinkBonus | undefined;

  constructor(
    unit: UnitNumber,
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

  #validateCoreLinkUnit(coreLinkUnit: CoreLinkUnit): boolean {
    if ('unit' in coreLinkUnit) {
      return coreLinkUnit.unit === this.unit;
    }

    const { type, role } = unitBasicData[this.unit];
    return coreLinkUnit.type === type && coreLinkUnit.role === role;
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

  #fullLinkBonusIndex(bonus: FullLinkBonus): FullLinkBonusIndex | -1 {
    return unitCoreLinkBonusData[this.unit].full_link_bonus.indexOf(bonus) as FullLinkBonusIndex | -1;
  }

  get selectedFullLinkBonusIndex(): FullLinkBonusIndex | -1 {
    return this.fullLinkBonus ? this.#fullLinkBonusIndex(this.fullLinkBonus) : -1;
  }

  selectFullLinkBonus(bonus: FullLinkBonus): UnitCoreLink {
    return (
      this.fullLinkBonus !== bonus &&
      this.#fullLinkBonusIndex(bonus) !== -1
    ) ?
      new UnitCoreLink(this.unit, this.slot1, this.slot2, this.slot3, this.slot4, this.slot5, bonus) :
      this;
  }

  unselectFullLinkBonus(): UnitCoreLink {
    return this.fullLinkBonus ?
      new UnitCoreLink(this.unit, this.slot1, this.slot2, this.slot3, this.slot4, this.slot5, undefined) :
      this;
  }

  slot1LinkRate(lv: UnitLvValue): number { return UnitCoreLink.isSlot1Available(lv) && this.slot1 ? this.slot1.rate : 0; }
  slot2LinkRate(lv: UnitLvValue): number { return UnitCoreLink.isSlot2Available(lv) && this.slot2 ? this.slot2.rate : 0; }
  slot3LinkRate(lv: UnitLvValue): number { return UnitCoreLink.isSlot3Available(lv) && this.slot3 ? this.slot3.rate : 0; }
  slot4LinkRate(lv: UnitLvValue): number { return UnitCoreLink.isSlot4Available(lv) && this.slot4 ? this.slot4.rate : 0; }
  slot5LinkRate(lv: UnitLvValue): number { return UnitCoreLink.isSlot5Available(lv) && this.slot5 ? this.slot5.rate : 0; }

  linkCount(lv: UnitLvValue): CoreLinkCount {
    return (
      (this.slot1LinkRate(lv) > 0 ? 1 : 0) +
      (this.slot2LinkRate(lv) > 0 ? 1 : 0) +
      (this.slot3LinkRate(lv) > 0 ? 1 : 0) +
      (this.slot4LinkRate(lv) > 0 ? 1 : 0) +
      (this.slot5LinkRate(lv) > 0 ? 1 : 0)
    ) as CoreLinkCount;
  }

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
    return calcBonus(rate, this.unit);
  }

  isFullLinkBonusAvailable(lv: UnitLvValue): boolean {
    return this.linkRate(lv) === MaxLinkRate;
  }

  fullLinkBonusEffect(lv: UnitLvValue): FullLinkBonus | undefined {
    return this.isFullLinkBonusAvailable(lv) ? this.fullLinkBonus : undefined;
  }
}

export default UnitCoreLink;
