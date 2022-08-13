import { UnitNumber, UnitRole, UnitType } from '../UnitBasicInfo';
import { Effect } from '../Effect';
import {
  EquipmentEffectKey,
  IntegerValueEffectKey,
  MicroValueEffectKey,
  MilliPercentageEffectKey,
  NoValueEffectKey
} from './EquipmentEffect';
import {
  IntegerValueStatusEffectKey,
  MicroValueStatusEffectKey,
  MilliPercentageStatusEffectKey,
  MilliValueStatusEffectKey,
  StatusEffectKey
} from './EquipmentStatusEffect';
import { SkillEffectTag } from '../skill/SkillEffectTag';

import { equipmentData } from '../../data/equipmentData';
import { unitBasicData } from '../../data/unitBasicData';

import { Sequence, ValueOf } from '../../util/type';

export const EquipmentType = {
  Chip: 'chip',
  Os: 'os',
  Gear: 'gear'
} as const;
export type EquipmentType = typeof EquipmentType[keyof typeof EquipmentType]

export const EquipmentRank = {
  SSS: 'sss',
  SS: 'ss'
  // S: 's',
  // A: 'a',
  // B: 'b'
} as const;
export type EquipmentRank = typeof EquipmentRank[keyof typeof EquipmentRank]

export type ChipEquipmentRank = typeof EquipmentRank.SS
export type OsEquipmentRank   = EquipmentRank
export type GearEquipmentRank = typeof EquipmentRank.SS

export type EquipmentEnhancementLevel = 0 | Sequence<10>

export type EquipmentExclusive = {
  exclusive: {
    unit: UnitNumber
  } | {
    type: UnitType
  } | {
    role: UnitRole
  } | {
    type: UnitType,
    role: UnitRole
  }
}

export type StatusEffectData<R extends EquipmentRank> = {
  [K in StatusEffectKey]?:
    K extends IntegerValueStatusEffectKey    ? { value: number | Record<R, number> } :
    K extends MilliValueStatusEffectKey      ? { milliValue: number | Record<R, number> } :
    K extends MicroValueStatusEffectKey      ? { microValue: number | Record<R, number> } :
    K extends MilliPercentageStatusEffectKey ? { milliPercentage: number | Record<R, number> } :
      never
}

export type EquipmentId = keyof typeof equipmentData
export type EquipmentData = typeof equipmentData[EquipmentId]

type EquipmentTypeFilter<T extends EquipmentType> = Extract<EquipmentData, { type: T }>

export type Chip = EquipmentTypeFilter<typeof EquipmentType.Chip>
export type Os   = EquipmentTypeFilter<typeof EquipmentType.Os>
export type Gear = EquipmentTypeFilter<typeof EquipmentType.Gear>

export function isChipEquipment(arg: EquipmentData): arg is Chip { return arg.type === EquipmentType.Chip; }
export function isOsEquipment(arg: EquipmentData):   arg is Os   { return arg.type === EquipmentType.Os;   }
export function isGearEquipment(arg: EquipmentData): arg is Gear { return arg.type === EquipmentType.Gear; }

export type ChipId = Chip['id']
export type OsId   = Os['id']
export type GearId = Gear['id']

export type EquipmentEffects<E = EquipmentData> = E extends { equipment_effects: ReadonlyArray<infer T> } ? T : never
export type EquipmentEffectsAsSkill<E = EquipmentData> = E extends { effects: ReadonlyArray<infer T> } ? T : never

export type EquipmentDataValue<R extends EquipmentRank, V extends number> =
  V |
  { readonly [key in R]: V }

type IntegerValue<R extends EquipmentRank, V extends number = number> = Readonly<{ value: EquipmentDataValue<R, V> }>
type MicroValue<R extends EquipmentRank>                              = Readonly<{ microValue: EquipmentDataValue<R, number> }>
type MilliPercentageValue<R extends EquipmentRank>                    = Readonly<{ milliPercentage: EquipmentDataValue<R, number> }>

export type EffectAdditionData = Readonly<
  { max_stack?: 3 } &
  { term?: 'immediate' | 'infinite' | { readonly for_rounds: 1 | 2 | 3 | 99 | 999 } } &
  { rate?: 'constant' | MilliPercentageValue<typeof EquipmentRank.SS> } &
  { times?: EquipmentDataValue<typeof EquipmentRank.SS, 1 | 2 | 3 | 4> }
>

export type EquipmentEffectValueData<R extends EquipmentRank> = Readonly<{
  [E in EquipmentEffectKey]?:
    E extends NoValueEffectKey ?
      EffectAdditionData :
    E extends typeof Effect.DamageMultiplierUpByStatus ?
      Readonly<{ status: 'def' }> & MilliPercentageValue<R> & EffectAdditionData :
    E extends typeof Effect['BuffRemoval' | 'DebuffRemoval'] ?
      Readonly<{ effect: Effect } | { effects: ReadonlyArray<Effect> }> & EffectAdditionData :
    E extends typeof Effect.PreventsEffect ?
      Readonly<{ effect: Effect }> & EffectAdditionData :
    E extends typeof Effect.ActivationRatePercentageUp ?
      Readonly<{ effect: Effect, tag: SkillEffectTag }> & MilliPercentageValue<R> & EffectAdditionData :
    E extends typeof Effect['RangeUp' | 'RangeDown']?
      IntegerValue<R, 1 | 2> & EffectAdditionData :
    E extends typeof Effect.BattleContinuation ?
      IntegerValue<R> & EffectAdditionData |
      MilliPercentageValue<R> & EffectAdditionData :
    E extends IntegerValueEffectKey ?
      IntegerValue<R> & EffectAdditionData :
    E extends MicroValueEffectKey?
      MicroValue<R> & EffectAdditionData :
    E extends MilliPercentageEffectKey ?
      MilliPercentageValue<R> & EffectAdditionData :
      never
}>

// HACK: to avoid "TS2590: Expression produces a union type that is too complex to represent."
export type EquipmentEffectsData<R extends EquipmentRank> = ReadonlyArray<Readonly<{
  condition?: ValueOf<EquipmentEffects[number], 'condition'>,
  details: EquipmentEffectValueData<R>
}>>

export function availableRankSSS<E extends EquipmentData>(arg: E): arg is Extract<E, { max_rank: typeof EquipmentRank.SSS }> {
  return 'max_rank' in arg && arg.max_rank === EquipmentRank.SSS;
}

export function availableRank(equipment: EquipmentData, rank: EquipmentRank): boolean {
  switch (rank) {
  case EquipmentRank.SSS:
    return availableRankSSS(equipment);
  case EquipmentRank.SS:
  default:
    return true;
  }
}

export function matchExclusive(unit: UnitNumber, equipment: EquipmentData): boolean {
  if (!('exclusive' in equipment)) {
    return true;
  }

  const exclusive = equipment.exclusive;
  if ('unit' in exclusive) {
    return unit === exclusive.unit;
  } else if ('type' in exclusive && 'role' in exclusive) {
    const { type, role } = unitBasicData[unit];
    return type === exclusive.type && role === exclusive.role;
  } else if ('type' in exclusive) {
    return unitBasicData[unit].type === exclusive.type;
  } else {
    return unitBasicData[unit].role === exclusive.role;
  }
}
