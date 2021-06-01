import {
  Effect
} from './Effect';
import { IntegerValue, ValueUnit } from './ValueUnit';
import { SkillEffectActivationCondition } from './SkillEffectActivationCondition';
import { SkillEffectActivationRate } from './SkillEffectActivationRate';
import { SkillEffectScaleFactor } from './SkillEffectScaleFactor';
import { SkillEffectTag, SkillEffectTagStackValue } from './SkillEffectTag';
import { SkillEffectTerm, SkillEffectTermRoundsValue } from './SkillEffectTerm';
import { SkillEffectTimesValue } from './SkillEffectTimesValue';
import { SkillEffective } from './SkillEffective';
import { UnitForms } from './UnitFormValue';
import {
  EquipmentEffectOnly,
  IntegerValueEffectKey,
  MicroValueEffectKey,
  MilliPercentageEffectKey, NoValueEffectKey, PushPullEffectKey,
  RangeUpDownEffectKey
} from './SkillEffect';

type EffectValue<T extends ValueUnit> =
  {
    readonly [key in T]: number
  }

type EffectDataValue<T extends ValueUnit> =
  {
    readonly base: { readonly [key in T]: number },
    readonly per_lv_up: { readonly [key in T]: number }
  } |
  EffectValue<T>

type SkillEffectAddition = Readonly<{
  tag?: SkillEffectTag,
  max_stack?: SkillEffectTagStackValue,
  term?:
    typeof SkillEffectTerm['Immediate' | 'Infinite'] |
    {
      readonly [SkillEffectTerm.ForRounds]:
        SkillEffectTermRoundsValue |
        {
          readonly 1: Exclude<SkillEffectTermRoundsValue, 10 | 99 | 999>
          readonly 10: Exclude<SkillEffectTermRoundsValue, 1 | 10 | 99 | 999>
        }
    },
  rate?:
    SkillEffectActivationRate |
    EffectDataValue<'milliPercentage'>,
  times?:
    SkillEffectTimesValue |
    { readonly [key in 1 | 5]: SkillEffectTimesValue } |
    { readonly [key in 1 | 10]: SkillEffectTimesValue } |
    { readonly [key in 1 | 5 | 10]: SkillEffectTimesValue },
  cannot_be_dispelled?: true
}>

type ValueWithAddition<T extends ValueUnit> =
  EffectDataValue<T> & SkillEffectAddition

export type SkillEffectDataValue = Readonly<{
  [E in Exclude<Effect, EquipmentEffectOnly>]?:
    E extends NoValueEffectKey ?
      SkillEffectAddition :
    E extends PushPullEffectKey ?
      IntegerValue<1 | 2> & SkillEffectAddition :
    E extends RangeUpDownEffectKey ?
      (
        IntegerValue<1 | 2> |
        { value: { [key in 1 | 10]: 0 | 1 | 2 } }
      ) & SkillEffectAddition :
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
      { effect: Effect } & EffectValue<'milliPercentage'> & SkillEffectAddition :
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

export type AroundSkillEffectDataValue = Readonly<{
  [Effect.FixedDamage]?: ValueWithAddition<'milliPercentage'>
}>

export type SkillEffectData = Readonly<{
  conditions?:
    readonly [SkillEffectActivationCondition] |
    readonly [SkillEffectActivationCondition, SkillEffectActivationCondition],
  effective?: SkillEffective,
  scale_factor?: SkillEffectScaleFactor,
  details: {
    readonly self?: SkillEffectDataValue,
    readonly target?: SkillEffectDataValue,
    readonly around?: AroundSkillEffectDataValue
  }
}>

export type SkillEffects = Readonly<{
  effects: ReadonlyArray<SkillEffectData>
}>

export type SkillEffectsAsEquipmentEffect = Readonly<{
  equipment_effects: ReadonlyArray<SkillEffectData>
}>
