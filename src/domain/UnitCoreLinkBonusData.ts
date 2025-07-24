import { Effect } from './Effect';
import { IntegerValue, MicroValue, MilliPercentageValue } from './ValueUnit';
import { UnitNumber } from './UnitBasicInfo';

import { IndexOf, Keyof } from '../util/type';
import { LiteralToNumberDeep } from '../util/object';

export type CommonCoreLinkBonus = Readonly<{
  [Effect.HpUp]: { [key in keyof MilliPercentageValue]: 20_000 },
  [Effect.AtkUp]: { [key in keyof MilliPercentageValue]: 20_000 },
  [Effect.ExpUp]: { [key in keyof MilliPercentageValue]: 4_000 }
}>

type GoltarionLikeSpecificCoreLinkBonus = Readonly<{
  [Effect.CriUp]: { [key in keyof MilliPercentageValue]: 2_000 },
  [Effect.AccUp]: { [key in keyof MilliPercentageValue]: 7_000 }
}>

type LemonadeBetaSpecificCoreLinkBonus = Readonly<{
  [Effect.CriUp]: { [key in keyof MilliPercentageValue]: 2_000 },
  [Effect.SpdUp]: { [key in keyof MicroValue]: 20_000 }
}>

export type SpecificCoreLinkBonus =
  Readonly<{ damage_multiplier: { [key in keyof MilliPercentageValue]: 2_000 } }> |
  Readonly<{ [Effect.HpUp]: { [key in keyof MilliPercentageValue]: 5_000 } }> |
  Readonly<{ [Effect.AccUp]: { [key in keyof MilliPercentageValue]: 7_000 } }> |
  Readonly<{ [Effect.CriUp]: { [key in keyof MilliPercentageValue]: 2_000 } }> |
  Readonly<{ [Effect.DefUp]: { [key in keyof MilliPercentageValue]: 3_000 } }> |
  Readonly<{ [Effect.EvaUp]: { [key in keyof MilliPercentageValue]: 2_000 } }> |
  Readonly<{ [Effect.SpdUp]: { [key in keyof MicroValue]: 20_000 } }> |
  GoltarionLikeSpecificCoreLinkBonus |
  LemonadeBetaSpecificCoreLinkBonus

export type CalculatedSpecificCoreLinkBonus = LiteralToNumberDeep<SpecificCoreLinkBonus>;

export function isGoltarionLikeSpecificCoreLinkBonus(
  arg: SpecificCoreLinkBonus | CalculatedSpecificCoreLinkBonus
): arg is GoltarionLikeSpecificCoreLinkBonus {
  return Effect.CriUp in arg && Effect.AccUp in arg;
}

export function isLemonadeBetaSpecificCoreLinkBonus(
  arg: SpecificCoreLinkBonus | CalculatedSpecificCoreLinkBonus
): arg is LemonadeBetaSpecificCoreLinkBonus {
  return Effect.CriUp in arg && Effect.SpdUp in arg;
}

type GoltarionLikeCoreLinkBonus =
  Readonly<{
    [key in keyof Omit<CommonCoreLinkBonus, typeof Effect.HpUp>]: MilliPercentageValue
  }> &
  Readonly<{
    [Effect.CriUp]: MilliPercentageValue,
    [Effect.AccUp]: MilliPercentageValue
  }>

type LemonadeBetaCoreLinkBonus =
  Readonly<{
    [key in keyof Omit<CommonCoreLinkBonus, typeof Effect.AtkUp>]: MilliPercentageValue
  }> &
  Readonly<{
    [Effect.CriUp]: MilliPercentageValue,
    [Effect.SpdUp]: MicroValue
  }>

export type CoreLinkBonus =
  Readonly<{ [key in keyof CommonCoreLinkBonus]: MilliPercentageValue }> & (
    Readonly<{ damage_multiplier: MilliPercentageValue }> |
    Readonly<{ [Effect.HpUp]: MilliPercentageValue }> |
    Readonly<{ [Effect.AccUp]: MilliPercentageValue }> |
    Readonly<{ [Effect.CriUp]: MilliPercentageValue }> |
    Readonly<{ [Effect.DefUp]: MilliPercentageValue }> |
    Readonly<{ [Effect.EvaUp]: MilliPercentageValue }> |
    Readonly<{ [Effect.SpdUp]: MicroValue }>
  ) |
  GoltarionLikeCoreLinkBonus |
  LemonadeBetaCoreLinkBonus

export type SortieCostBonus = Readonly<{
  sortie_cost: { [key in keyof MilliPercentageValue]: 20_000 | 25_000 }
}>

export type DamageMultiplierBonus = Readonly<{
  damage_multiplier: { [key in keyof MilliPercentageValue]: 15_000 | 20_000 | 25_000 | 30_000 }
}>

export type Range1UpBonus = Readonly<{
  [Effect.RangeUp]: { [key in keyof IntegerValue]: 1 | 2 }
}>

export type AccUpBonus = Readonly<{
  [Effect.AccUp]: { [key in keyof MilliPercentageValue]: 75_000 }
}>

export type EvaUpBonus = Readonly<{
  [Effect.EvaUp]: { [key in keyof MilliPercentageValue]: 20_000 }
}>

export type CriUpBonus = Readonly<{
  [Effect.CriUp]: { [key in keyof MilliPercentageValue]: 20_000 | 30_000 }
}>

export type HpUpBonus = Readonly<{
  [Effect.HpUp]: { [key in keyof MilliPercentageValue]: 20_000 | 30_000 | 40_000 | 50_000 }
}>

export type AtkUpBonus = Readonly<{
  [Effect.AtkUp]: { [key in keyof MilliPercentageValue]: 20_000 | 50_000 }
}>

export type DefUpBonus = Readonly<{
  [Effect.DefUp]: { [key in keyof MilliPercentageValue]: 30_000 }
}>

export type BuffDebuffLv2UpBonus = Readonly<{
  buff_debuff_lv_up: { [key in keyof IntegerValue]: 2 }
}>

export type SpdUpBonus = Readonly<{
  [Effect.SpdUp]: { [key in keyof MicroValue]: 100_000 | 150_000 | 200_000 }
}>

type CommonFullLinkBonus = HpUpBonus | DefUpBonus | AccUpBonus | CriUpBonus | Range1UpBonus | BuffDebuffLv2UpBonus

export type UnitCoreLinkBonusData = Readonly<{
  [key in UnitNumber]: {
    specific_link_bonus: SpecificCoreLinkBonus,
    full_link_bonus: readonly [
      SortieCostBonus,
      CommonFullLinkBonus | AtkUpBonus | DamageMultiplierBonus,
      CommonFullLinkBonus,
      CommonFullLinkBonus | EvaUpBonus,
      SpdUpBonus
    ]
  }
}>

export type FullLinkBonus = UnitCoreLinkBonusData[UnitNumber]['full_link_bonus'][number]
export type FullLinkBonusIndex = IndexOf<UnitCoreLinkBonusData[UnitNumber]['full_link_bonus']>
export type FullLinkBonusKey = Keyof<FullLinkBonus>
