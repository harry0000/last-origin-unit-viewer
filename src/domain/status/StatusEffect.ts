import { IntegerValue, MicroValue, MilliPercentageValue, MilliValue } from '../ValueUnit';
import { Effect } from '../Effect';

export type IntegerValueStatusEffectKey = typeof Effect['HpUp' | 'HpDown']
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

export type HpEnhancementStatusEffect = { [key in typeof Effect.HpUp]?: IntegerValue }
export type AtkEnhancementStatusEffect = { [key in typeof Effect.AtkUp]?: MilliValue }
export type DefEnhancementStatusEffect = { [key in typeof Effect.DefUp]?: MilliValue }
export type AccEnhancementStatusEffect = { [key in typeof Effect.AccUp]?: MilliPercentageValue }
export type EvaEnhancementStatusEffect = { [key in typeof Effect.EvaUp]?: MilliPercentageValue }
export type CriEnhancementStatusEffect = { [key in typeof Effect.CriUp]?: MilliPercentageValue }

export type StatusEffect = {
  [K in StatusEffectKey]?:
    K extends IntegerValueStatusEffectKey ? IntegerValue :
    K extends MilliValueStatusEffectKey ? MilliValue :
    K extends MicroValueStatusEffectKey ? MicroValue :
    K extends MilliPercentageStatusEffectKey ? MilliPercentageValue :
      never
}

export const emptyStatusEffect: StatusEffect = {};
