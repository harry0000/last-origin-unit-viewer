import {
  DamageAttribute,
  SkillApCostValue,
  SkillRangeValue
} from './UnitSkillData';
import {
  Effect
} from '../Effect';
import {
  IntegerValue,
  MilliPercentageValue,
  ValueUnit
} from '../ValueUnit';
import { SkillAreaType } from './SkillAreaOfEffect';
import { SkillEffectActivationRate } from './SkillEffectActivationRate';
import { SkillEffectActivationCondition } from './SkillEffectActivationCondition';
import { SkillEffectScaleFactor } from './SkillEffectScaleFactor';
import { SkillEffectTag, SkillEffectTagStackValue } from './SkillEffectTag';
import { SkillEffectTerm, SkillEffectTermRoundsValue } from './SkillEffectTerm';
import { SkillEffective } from './SkillEffective';
import { UnitForms } from '../UnitFormValue';
import { SkillEffectTimesValue } from './SkillEffectTimesValue';
import {
  EquipmentEffectOnly,
  IntegerValueEffectKey,
  MicroValueEffectKey,
  MilliPercentageEffectKey, NoValueEffectKey, PushPullEffectKey,
  RangeUpDownEffectKey
} from './SkillEffect';

type SkillEffectAddition = Readonly<{
  tag?: SkillEffectTag,
  max_stack?: SkillEffectTagStackValue,
  term?:
    typeof SkillEffectTerm['Immediate' | 'Infinite'] |
    {
      readonly [SkillEffectTerm.ForRounds]: SkillEffectTermRoundsValue
    },
  rate?: SkillEffectActivationRate | MilliPercentageValue,
  times?: SkillEffectTimesValue,
  cannot_be_dispelled?: true
}>

type ValueWithAddition<T extends ValueUnit> =
  { readonly [key in T]: number } & SkillEffectAddition

export type SkillEffectValue = Readonly<{
  [E in Exclude<Effect, EquipmentEffectOnly>]?:
    E extends NoValueEffectKey ?
      SkillEffectAddition :
    E extends PushPullEffectKey | RangeUpDownEffectKey ?
      IntegerValue<1 | 2> & SkillEffectAddition :
    E extends IntegerValueEffectKey ?
      ValueWithAddition<'value'> :
    E extends MicroValueEffectKey ?
      ValueWithAddition<'microValue'> :
    E extends typeof Effect.EffectRemoval ?
      ({
        effect: Effect
      } | {
        effects: ReadonlyArray<Effect>
      }) & SkillEffectAddition :
    E extends typeof Effect.PreventsEffect ?
      { effect: Effect } & SkillEffectAddition :
    E extends typeof Effect.ActivationRatePercentageUp ?
      { effect: Effect } & ValueWithAddition<'milliPercentage'> :
    E extends typeof Effect['TagStack' | 'TagRelease'] ?
      { tag: SkillEffectTag } & Omit<SkillEffectAddition, 'tag'> :
    E extends typeof Effect.TagUnstack ?
      {
        tag: SkillEffectTag,
        effect?: Effect,
        value: number
      } & Omit<SkillEffectAddition, 'tag'> :
    E extends typeof Effect['FormChange' | 'FormRelease'] ?
      { form: UnitForms } & SkillEffectAddition :
    E extends typeof Effect['DefDown' | 'EvaUp' | 'StatusResistUp'] ?
      ValueWithAddition<'milliPercentage'> |
      ReadonlyArray<ValueWithAddition<'milliPercentage'>> :
    E extends Exclude<MilliPercentageEffectKey, typeof Effect['DefDown' | 'EvaUp' | 'StatusResistUp']> ?
      ValueWithAddition<'milliPercentage'> :
      never
}>

export type AroundSkillEffectValue = Readonly<{
  [Effect.FixedDamage]?: ValueWithAddition<'milliPercentage'>
}>

export type SkillEffect = Readonly<{
  conditions?:
    readonly [SkillEffectActivationCondition] |
    readonly [SkillEffectActivationCondition, SkillEffectActivationCondition],
  effective?: SkillEffective,
  scale_factor?: SkillEffectScaleFactor,
  details: {
    readonly self?: SkillEffectValue,
    readonly target?: SkillEffectValue,
    readonly around?: AroundSkillEffectValue
  }
}>

export type DamageDeal = {
  milliPercentage: number,
  attribute?: DamageAttribute,
  effective?: typeof SkillEffective.NextRound
}

export type ActiveSkill = Readonly<{
  damage_deal?: DamageDeal,
  cost: SkillApCostValue,
  range: SkillRangeValue,
  area: SkillAreaType,
  effects: ReadonlyArray<SkillEffect>
}>

export type PassiveSkill = Readonly<{
  area: SkillAreaType,
  effects: ReadonlyArray<SkillEffect>
}>

export type PassiveSkillAsEquipmentEffect = Readonly<{
  area: SkillAreaType,
  equipment_effects: ReadonlyArray<SkillEffect>
}>

export type Passive1Skill =
  PassiveSkill |
  PassiveSkillAsEquipmentEffect

export type Passive2Skill = PassiveSkill
export type Passive3Skill = PassiveSkill
