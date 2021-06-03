import { IntegerValue, MicroValue, MilliPercentageValue, MilliValue } from '../ValueUnit';
import { Effect } from '../Effect';

export type IntegerValueStatusEffectKey = typeof Effect.HpUp
export type MilliValueStatusEffectKey = typeof Effect['AtkUp' | 'AtkDown' | 'DefUp' | 'DefDown']
export type MicroValueStatusEffectKey = typeof Effect['SpdUp' | 'SpdDown']
export type MilliPercentageStatusEffectKey =
  typeof Effect[
    'AccUp' |
    'AccDown' |
    'EvaUp' |
    'EvaDown' |
    'CriUp' |
    'CriDown' |
    'FireResistUp' |
    'FireResistDown' |
    'IceResistUp' |
    'IceResistDown' |
    'ElectricResistUp' |
    'ElectricResistDown'
  ]

export type StatusEffectKey =
  IntegerValueStatusEffectKey |
  MilliValueStatusEffectKey |
  MicroValueStatusEffectKey |
  MilliPercentageStatusEffectKey

export type EnhancementStatusEffect = {
  [key in typeof Effect.HpUp]?: IntegerValue
} & {
  [key in typeof Effect['AtkUp' | 'DefUp']]?: MilliValue
} & {
  [key in typeof Effect['AccUp' | 'EvaUp' | 'CriUp']]?: MilliPercentageValue
}

export type StatusEffect = {
  [K in StatusEffectKey]?:
    K extends IntegerValueStatusEffectKey ? IntegerValue :
    K extends MilliValueStatusEffectKey ? MilliValue :
    K extends MicroValueStatusEffectKey ? MicroValue :
    K extends MilliPercentageStatusEffectKey ? MilliPercentageValue :
      never
}
