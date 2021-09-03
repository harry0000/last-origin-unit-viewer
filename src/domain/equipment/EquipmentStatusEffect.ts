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
