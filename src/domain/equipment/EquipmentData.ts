import { UnitNumber, UnitRank, UnitRole, UnitType } from '../UnitBasicInfo';
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
import {
  IntegerEquipmentValue,
  MicroEquipmentValue,
  MilliEquipmentValue,
  MilliPercentageEquipmentValue
} from './EquipmentEffectValue';
import { SkillEffectTag } from '../skill/SkillEffectTag';

import { equipmentData } from '../../data/equipmentData';
import { unitBasicData } from '../../data/unitBasicData';

import { Sequence } from '../../util/type';

export const EquipmentType = {
  Chip: 'chip',
  Os: 'os',
  Gear: 'gear'
} as const;
export type EquipmentType = typeof EquipmentType[keyof typeof EquipmentType]

export const EquipmentRank = {
  SS: 'ss',
  S: 's',
  A: 'a',
  B: 'b'
} as const;
export type EquipmentRank = typeof EquipmentRank[keyof typeof EquipmentRank]

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

export type StatusEffectData = {
  [K in StatusEffectKey]?:
    K extends IntegerValueStatusEffectKey ? IntegerEquipmentValue :
    K extends MilliValueStatusEffectKey ? MilliEquipmentValue :
    K extends MicroValueStatusEffectKey ? MicroEquipmentValue :
    K extends MilliPercentageStatusEffectKey ? MilliPercentageEquipmentValue :
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

export type ChipId = EquipmentTypeFilter<typeof EquipmentType.Chip>['id']
export type OsId   = EquipmentTypeFilter<typeof EquipmentType.Os>['id']
export type GearId = EquipmentTypeFilter<typeof EquipmentType.Gear>['id']

export type EquipmentEffects<E = EquipmentData> = E extends { equipment_effects: ReadonlyArray<infer T> } ? T : never
export type EquipmentEffectsAsSkill<E = EquipmentData> = E extends { effects: ReadonlyArray<infer T> } ? T : never

export type EquipmentRankDataValue<T extends number> =
  T |
  { readonly [UnitRank.SS]: T }

type IntegerValue<T extends number = number> = Readonly<{ value: EquipmentRankDataValue<T> }>
type MicroValue                              = Readonly<{ microValue: EquipmentRankDataValue<number> }>
type MilliPercentageValue                    = Readonly<{ milliPercentage: EquipmentRankDataValue<number> }>

export type EffectAdditionData = Readonly<
  { max_stack?: 3 } &
  { term?: 'immediate' | 'infinite' | { readonly for_rounds: 1 | 2 } } &
  { rate?: 'constant' | MilliPercentageValue } &
  { times?: EquipmentRankDataValue<1 | 2 | 3 | 4> }
>

export type EquipmentEffectValueData = Readonly<{
  [E in EquipmentEffectKey]?:
    E extends NoValueEffectKey ?
      EffectAdditionData :
    E extends typeof Effect.EffectRemoval ?
      Readonly<{ effect: Effect } | { effects: ReadonlyArray<Effect> }> & EffectAdditionData :
    E extends typeof Effect.ActivationRatePercentageUp ?
      Readonly<{ effect: Effect, tag: SkillEffectTag }> & MilliPercentageValue & EffectAdditionData :
    E extends typeof Effect['RangeUp' | 'RangeDown']?
      IntegerValue<1 | 2> & EffectAdditionData :
    E extends IntegerValueEffectKey ?
      IntegerValue & EffectAdditionData :
    E extends MicroValueEffectKey?
      MicroValue & EffectAdditionData :
    E extends MilliPercentageEffectKey ?
      MilliPercentageValue & EffectAdditionData :
      never
}>

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
