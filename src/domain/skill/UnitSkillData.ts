import {
  AlexandraForm,
  BloodyPantherForm,
  EmilyForm,
  FormChangeUnits,
  FortressForm,
  InvincibleDragonForm,
  LeonaForm,
  PhantomForm,
  RampartForm,
  SirenForm
} from '../UnitFormValue';
import { ActiveSkillEffective } from './SkillEffective';
import { AvailableMaxUnitRank } from '../status/UnitRankUpBonusData';
import { MilliPercentageValue } from '../ValueUnit';
import { SkillAreaType } from './SkillAreaOfEffect';
import { SkillEffects, SkillEffectsAsEquipmentEffect } from './SkillEffectData';
import { UnitNumber, UnitRank } from '../UnitBasicInfo';

export const DamageAttribute = {
  Fire: 'fire',
  Ice: 'ice',
  Electric: 'electric'
} as const;
export type DamageAttribute = typeof DamageAttribute[keyof typeof DamageAttribute]

type DamageDealData = Readonly<({
  base: MilliPercentageValue,
  per_lv_up: MilliPercentageValue
} | {
  milliPercentage: number
}) & {
  attribute?: DamageAttribute,
  effective?: ActiveSkillEffective
}>

export type SkillRangeValue = 0 | 1 | 2 | 3 | 4 | 5 | 6

export type SkillApCostValue = 2 | 4 | 5 | 6 | 7 | 8 | 9 | 10

export type SkillApCostData = Readonly<{
  cost:
    SkillApCostValue |
    {
      readonly 1: SkillApCostValue,
      readonly 2: SkillApCostValue
    } |
    {
      readonly 1: SkillApCostValue,
      readonly 2: SkillApCostValue,
      readonly 7: SkillApCostValue
    } |
    {
      readonly 1: SkillApCostValue,
      readonly 2: SkillApCostValue,
      readonly 10: SkillApCostValue
    }
}>

export type SkillAreaOfEffectData = Readonly<{
  area:
    SkillAreaType |
    { readonly [key in 1 | 5]: SkillAreaType } |
    { readonly [key in 1 | 10]: SkillAreaType } |
    { readonly [key in 1 | 5 | 10]: SkillAreaType }
}>

export type ActiveSkillData = Readonly<{
  damage_deal?: DamageDealData,
  range: SkillRangeValue
} & SkillApCostData & SkillEffects & SkillAreaOfEffectData>

export type PassiveSkillData = Readonly<SkillEffects & SkillAreaOfEffectData>

export type PassiveSkillDataAsEquipmentEffect = Readonly<SkillEffectsAsEquipmentEffect & SkillAreaOfEffectData>

export function isPassiveSkillData(arg: PassiveSkillData | PassiveSkillDataAsEquipmentEffect): arg is PassiveSkillData {
  return !!(arg as PassiveSkillData).effects;
}

type BRankPassiveSkill  = readonly []
type ARankPassiveSkill  = readonly [PassiveSkillData]
type SRankPassiveSkill  = readonly [PassiveSkillData, PassiveSkillData]
type SSRankPassiveSkill = readonly [PassiveSkillData, PassiveSkillData, PassiveSkillData]

type UnitPassiveSkillData<R extends UnitRank> =
  R extends typeof UnitRank.SS ? SSRankPassiveSkill :
  R extends typeof UnitRank.S  ? SRankPassiveSkill :
  R extends typeof UnitRank.A  ? ARankPassiveSkill :
  R extends typeof UnitRank.B  ? BRankPassiveSkill :
    never

type CirceSkillData = Readonly<{
  no: 136
  active:
    readonly [ActiveSkillData, ActiveSkillData],
  passive:
    readonly [PassiveSkillDataAsEquipmentEffect, PassiveSkillData]
}>

type LemonadeAlphaSkillData = Readonly<{
  no: 187
  active:
    readonly [ActiveSkillData, ActiveSkillData],
  passive:
    readonly [
      PassiveSkillDataAsEquipmentEffect,
      PassiveSkillDataAsEquipmentEffect,
      PassiveSkillDataAsEquipmentEffect
    ]
}>

type AlexandraSkillData = Readonly<{
  no: typeof FormChangeUnits.Alexandra,
  active:
    readonly [
      { readonly [key in AlexandraForm]: ActiveSkillData },
      { readonly [key in AlexandraForm]: ActiveSkillData }
    ],
  passive:
    readonly [
      { readonly [key in AlexandraForm]: PassiveSkillData },
      PassiveSkillData,
      PassiveSkillData
    ]
}>

type LeonaSkillData = Readonly<{
  no: typeof FormChangeUnits.Leona,
  active:
    readonly [ActiveSkillData, ActiveSkillData],
  passive:
    readonly [
      { readonly [key in LeonaForm]: PassiveSkillData },
      { readonly [key in LeonaForm]: PassiveSkillData },
      PassiveSkillData
    ]
}>

type BloodyPantherSkillData = Readonly<{
  no: typeof FormChangeUnits.BloodyPanther,
  active:
    readonly [
      { readonly [key in BloodyPantherForm]: ActiveSkillData },
      { readonly [key in BloodyPantherForm]: ActiveSkillData }
    ],
  passive:
    readonly [
      PassiveSkillData,
      PassiveSkillData,
      { readonly [key in BloodyPantherForm]: PassiveSkillData }
    ]
}>

type EmilySkillData = Readonly<{
  no: typeof FormChangeUnits.Emily,
  active:
    readonly [
      ActiveSkillData,
      { readonly [key in EmilyForm]: ActiveSkillData }
    ],
  passive: SSRankPassiveSkill
}>

type PhantomSkillData = Readonly<{
  no: typeof FormChangeUnits.Phantom,
  active:
    readonly [
      { readonly [key in PhantomForm]: ActiveSkillData },
      { readonly [key in PhantomForm]: ActiveSkillData }
    ],
  passive:
    readonly [
      { readonly [key in PhantomForm]: PassiveSkillData },
      { readonly [key in PhantomForm]: PassiveSkillData },
      { readonly [key in PhantomForm]: PassiveSkillData }
    ]
}>

type InvincibleDragonSkillData = Readonly<{
  no: typeof FormChangeUnits.InvincibleDragon,
  active:
    readonly [
      { readonly [key in InvincibleDragonForm]: ActiveSkillData },
      { readonly [key in InvincibleDragonForm]: ActiveSkillData }
    ],
  passive: SSRankPassiveSkill
}>

type SirenSkillData = Readonly<{
  no: typeof FormChangeUnits.Siren,
  active:
    readonly [
      { readonly [key in SirenForm]: ActiveSkillData },
      { readonly [key in SirenForm]: ActiveSkillData }
    ],
  passive:
    readonly [
      PassiveSkillData,
      { readonly [key in SirenForm]: PassiveSkillData },
      PassiveSkillData
    ]
}>

type RampartSkillData = Readonly<{
  no: typeof FormChangeUnits.Rampart,
  active:
    readonly [
      { readonly [key in RampartForm]: ActiveSkillData },
      ActiveSkillData
    ],
  passive: SSRankPassiveSkill
}>

type FortressSkillData = Readonly<{
  no: typeof FormChangeUnits.Fortress,
  active:
    readonly [
      { readonly [key in FortressForm]: ActiveSkillData },
      { readonly [key in FortressForm]: ActiveSkillData }
    ],
  passive:
    readonly [
      { readonly [key in FortressForm]: PassiveSkillData }
    ]
}>

type UnitSkill<N extends UnitNumber> =
  N extends CirceSkillData['no'] ? CirceSkillData :
  N extends LemonadeAlphaSkillData['no'] ? LemonadeAlphaSkillData :
  N extends AlexandraSkillData['no'] ? AlexandraSkillData :
  N extends LeonaSkillData['no'] ? LeonaSkillData :
  N extends BloodyPantherSkillData['no'] ? BloodyPantherSkillData :
  N extends EmilySkillData['no'] ? EmilySkillData :
  N extends PhantomSkillData['no'] ? PhantomSkillData :
  N extends InvincibleDragonSkillData['no'] ? InvincibleDragonSkillData :
  N extends SirenSkillData['no'] ? SirenSkillData :
  N extends RampartSkillData['no'] ? RampartSkillData :
  N extends FortressSkillData['no'] ? FortressSkillData :
  Readonly<{
    no: N,
    active:
      readonly [ActiveSkillData, ActiveSkillData],
    passive:
      UnitPassiveSkillData<AvailableMaxUnitRank<N>>
  }>

export type UnitSkillData = { readonly [N in UnitNumber]: UnitSkill<N> }
