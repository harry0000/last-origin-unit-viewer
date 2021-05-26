import {
  AlexandraForm,
  BloodyPantherForm,
  EmilyForm,
  FormChangeUnitNumbers,
  FormChangeUnits,
  FortressForm,
  LeonaForm,
  PhantomForm,
  SirenForm
} from './UnitFormValue';
import { MilliPercentageValue } from './SkillEffectValue';
import { SkillAreaType } from './SkillAreaOfEffect';
import {
  SkillEffects,
  SkillEffectsAsEquipmentEffect
} from './SkillEffectData';
import { SkillEffective } from './SkillEffective';
import { UnitNumber } from './UnitBasicInfo';

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
  effective?: typeof SkillEffective.NextRound
}>

export type SkillRangeValue = 0 | 1 | 2 | 3 | 4 | 5 | 6

export type SkillApCostValue = 2 | 4 | 5 | 6 | 7 | 8 | 9 | 10

export type SkillApCostData = Readonly<{
  cost:
    SkillApCostValue |
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

type CirceSkillData = Readonly<{
  no: 136
  active:
    readonly [ActiveSkillData, ActiveSkillData],
  passive:
    readonly [PassiveSkillDataAsEquipmentEffect, PassiveSkillData]
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
  passive:
    readonly [
      PassiveSkillData,
      PassiveSkillData,
      PassiveSkillData
    ]
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
      PassiveSkillData
    ]
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

export type FormChangeUnitSkillData =
  AlexandraSkillData |
  LeonaSkillData |
  BloodyPantherSkillData |
  EmilySkillData |
  PhantomSkillData |
  SirenSkillData |
  FortressSkillData

type UnitSkill =
  Readonly<{
    no: Exclude<UnitNumber, CirceSkillData['no'] | FormChangeUnitNumbers>,
    active:
      readonly [ActiveSkillData, ActiveSkillData],
    passive:
      readonly [] |
      readonly [PassiveSkillData] |
      readonly [PassiveSkillData, PassiveSkillData] |
      readonly [PassiveSkillData, PassiveSkillData, PassiveSkillData]
  }> |
  CirceSkillData |
  FormChangeUnitSkillData

export type UnitSkillData = {
  readonly [N in UnitNumber]:
    N extends CirceSkillData['no'] ? CirceSkillData :
    N extends AlexandraSkillData['no'] ? AlexandraSkillData :
    N extends LeonaSkillData['no'] ? LeonaSkillData :
    N extends BloodyPantherSkillData['no'] ? BloodyPantherSkillData :
    N extends EmilySkillData['no'] ? EmilySkillData :
    N extends PhantomSkillData['no'] ? PhantomSkillData :
    N extends SirenSkillData['no'] ? SirenSkillData :
    N extends FortressSkillData['no'] ? FortressSkillData :
      Exclude<UnitSkill, CirceSkillData | FormChangeUnitSkillData>
}
