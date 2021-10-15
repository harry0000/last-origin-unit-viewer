import { Effect } from '../Effect';
import { EffectActivationState } from '../EffectActivationState';
import { EffectTrigger } from '../EffectTrigger';
import { SkillEffectTag } from '../skill/SkillEffectTag';
import { UnitKind } from '../UnitBasicInfo';
import { IntegerValue, MicroValue, MilliPercentageValue } from '../ValueUnit';

export type NoValueEffectKey = typeof Effect[
  'MinimizeDamage' |
  'AllDebuffRemoval' |
  'ColumnProtect' |
  'RowProtect' |
  'IgnoreBarrierDr' |
  'Reconnaissance' |
  'Stunned'
]
export type IntegerValueEffectKey = typeof Effect[
  'FixedDamageOverTime' |
  'Barrier' |
  'BattleContinuation'
]
export type MilliPercentageEffectKey = typeof Effect[
  'FixedDamage' |
  'AntiLightType' |
  'AntiHeavyType' |
  'AntiFlyingType' |
  'AtkUp' |
  'AtkDown' |
  'DefUp' |
  'AccUp' |
  'AccDown' |
  'EvaUp' |
  'CriUp' |
  'SpdUp' |
  'SpdDown' |
  'FireResistUp' |
  'IceResistUp' |
  'ElectricResistUp' |
  'StatusResistUp' |
  'ExpUp' |
  'DefensePenetration' |
  'DamageTakenIncreased' |
  'DamageReduction' |
  'Counterattack'
]
export type MicroValueEffectKey = typeof Effect.ApUp

export type EquipmentEffectKey =
  NoValueEffectKey |
  IntegerValueEffectKey |
  MilliPercentageEffectKey |
  MicroValueEffectKey |
  typeof Effect[
  'RangeUp' |
  'RangeDown' |
  'EffectRemoval' |
  'ActivationRatePercentageUp'
]

export type EquipmentEffectAddition = Readonly<
  { max_stack?: 3 } &
  { term?: 'immediate' | 'infinite' | { readonly for_rounds: 1 | 2 } } &
  { rate?: 'constant' | MilliPercentageValue } &
  { times?: 1 | 2 | 3 | 4 }
>

export type EquipmentEffectValue = Readonly<{
  [E in EquipmentEffectKey]?:
    E extends NoValueEffectKey ?
      EquipmentEffectAddition :
    E extends typeof Effect.EffectRemoval ?
      Readonly<{ effect: Effect } | { effects: ReadonlyArray<Effect> }> & EquipmentEffectAddition :
    E extends typeof Effect.ActivationRatePercentageUp ?
      Readonly<{ effect: Effect, tag: SkillEffectTag }> & MilliPercentageValue & EquipmentEffectAddition :
    E extends typeof Effect['RangeUp' | 'RangeDown']?
      IntegerValue<1 | 2> & EquipmentEffectAddition :
    E extends IntegerValueEffectKey ?
      IntegerValue & EquipmentEffectAddition :
    E extends MicroValueEffectKey?
      MicroValue & EquipmentEffectAddition :
    E extends MilliPercentageEffectKey ?
      MilliPercentageValue & EquipmentEffectAddition :
    never
}>

type ActivationState = Readonly<{
  [EffectActivationState.InBackLine]?: Record<string, never>,
  [EffectActivationState.HpGreaterOrEqual]?: 25,
  [EffectActivationState.Effected]?: Effect,
  [EffectActivationState.Tagged]?: SkillEffectTag,
  [EffectActivationState.Unit]?: UnitKind
}>

export type EquipmentEffectActivationCondition = Readonly<{
  trigger?: EffectTrigger,
  state?: ActivationState
}>

export type EffectDetails = Readonly<{
  condition?: EquipmentEffectActivationCondition,
  details: EquipmentEffectValue
}>