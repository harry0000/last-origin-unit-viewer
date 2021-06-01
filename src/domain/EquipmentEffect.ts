import { Effect } from './Effect';

export type IntegerValueEffectKey = typeof Effect.HpUp
export type MilliValueEffectKey   = typeof Effect['AtkUp' | 'AtkDown' | 'DefUp' | 'DefDown']
export type MicroValueEffectKey   = typeof Effect['SpdUp' | 'SpdDown']
export type MilliPercentageEffectKey =
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
  IntegerValueEffectKey |
  MilliValueEffectKey |
  MicroValueEffectKey |
  MilliPercentageEffectKey
