import { Effect } from '../Effect';
import { EquipmentEffectAddition, EffectDetails, EquipmentEffectValue } from './EquipmentEffect';
import {
  EffectAdditionData,
  EquipmentEffects,
  EquipmentEffectsAsSkill,
  EquipmentEffectValueData,
  EquipmentEnhancementLevel,
  EquipmentId,
  EquipmentRankDataValue,
  StatusEffectData
} from './EquipmentData';
import { ValueUnit } from '../ValueUnit';
import { emptyStatusEffect, StatusEffect } from '../status/StatusEffect';
import { toIntegerValue, toMicroValue, toMilliPercentageValue, toMilliValue } from './EquipmentEffectValue';

import { equipmentData } from '../../data/equipmentData';

import { Keyof } from '../../util/type';
import { foldObjectNonNullableEntry, NonNullableEntry, typedEntries } from '../../util/object';

function extractStatusEffect(data: StatusEffectData): StatusEffect {
  return foldObjectNonNullableEntry(data, entry => {
    switch (entry[0]) {
    case Effect.HpUp:
      return { [Effect.HpUp]: toIntegerValue(entry[1]) };
    case Effect.AtkUp:
    case Effect.AtkDown:
    case Effect.DefUp:
    case Effect.DefDown:
      return { [entry[0]]: toMilliValue(entry[1]) };
    case Effect.AccUp:
    case Effect.AccDown:
    case Effect.EvaUp:
    case Effect.EvaDown:
    case Effect.CriUp:
    case Effect.CriDown:
    case Effect.FireResistUp:
    case Effect.FireResistDown:
    case Effect.IceResistUp:
    case Effect.IceResistDown:
    case Effect.ElectricResistUp:
    case Effect.ElectricResistDown:
      return { [entry[0]]: toMilliPercentageValue(entry[1]) };
    case Effect.SpdUp:
    case Effect.SpdDown:
      return { [entry[0]]: toMicroValue(entry[1]) };
    default: {
      const _exhaustiveCheck: never = entry;
      return _exhaustiveCheck;
    }
    }
  })({});
}

export function calculateStatusEffect(equipmentId: EquipmentId, enhanceLv: EquipmentEnhancementLevel): StatusEffect {
  const equipment = equipmentData[equipmentId];
  return 'status_effects' in equipment ? extractStatusEffect(equipment.status_effects[enhanceLv]) : emptyStatusEffect;
}

function extractValueData<T extends number>(value: EquipmentRankDataValue<T>): T {
  return typeof value === 'number' ? value : value.ss;
}

function extractValueUnitData<T extends number, U extends ValueUnit>(
  unit: U,
  value: Record<U, EquipmentRankDataValue<T>>
): Record<U, T> {
  return { [unit]: extractValueData(value[unit]) } as Record<U, T>;
}

function calculateAddition(data: EffectAdditionData): EquipmentEffectAddition {
  const entries =
    typedEntries(data).flatMap<NonNullableEntry<Keyof<EquipmentEffectAddition>, EquipmentEffectAddition>>(entry => {
      switch (entry[0]) {
      case 'max_stack': {
        const value = entry[1];
        return value ? [[entry[0], value]] : [];
      }
      case 'term': {
        const value = entry[1];
        return value ? [[entry[0], value]] : [];
      }
      case 'rate': {
        const value = entry[1];
        return value ?
          value === 'constant' ?
            [[entry[0], value]] :
            [[entry[0], extractValueUnitData('milliPercentage', value)]] :
          [];
      }
      case 'times': {
        const value = entry[1];
        return value ? [[entry[0], extractValueData(value)]] : [];
      }
      default:
        return [];
      }
    });

  return Object.fromEntries(entries);
}

function calculateEffectDetails(
  details: EquipmentEffectValueData
): EquipmentEffectValue {
  return foldObjectNonNullableEntry(details, entry => {
    switch (entry[0]) {
    case Effect.MinimizeDamage:
    case Effect.AllDebuffRemoval:
    case Effect.ColumnProtect:
    case Effect.RowProtect:
    case Effect.IgnoreBarrierDr:
    case Effect.Reconnaissance:
    case Effect.Stunned:
      return { [entry[0]]: calculateAddition(entry[1]) };
    case Effect.FixedDamageOverTime:
    case Effect.Barrier:
    case Effect.BattleContinuation:
    case Effect.RangeUp:
    case Effect.RangeDown:
      return {
        [entry[0]]: {
          ...calculateAddition(entry[1]),
          ...extractValueUnitData('value', entry[1])
        }
      };
    case Effect.FixedDamage:
    case Effect.AntiLightType:
    case Effect.AntiHeavyType:
    case Effect.AntiFlyingType:
    case Effect.AtkUp:
    case Effect.AtkDown:
    case Effect.DefUp:
    case Effect.AccUp:
    case Effect.AccDown:
    case Effect.EvaUp:
    case Effect.CriUp:
    case Effect.SpdUp:
    case Effect.SpdDown:
    case Effect.FireResistUp:
    case Effect.IceResistUp:
    case Effect.ElectricResistUp:
    case Effect.StatusResistUp:
    case Effect.ExpUp:
    case Effect.DefensePenetration:
    case Effect.DamageTakenIncreased:
    case Effect.DamageReduction:
    case Effect.Counterattack:
      return {
        [entry[0]]: {
          ...calculateAddition(entry[1]),
          ...extractValueUnitData('milliPercentage', entry[1])
        }
      };
    case Effect.ApUp:
      return {
        [Effect.ApUp]: {
          ...calculateAddition(entry[1]),
          ...extractValueUnitData('microValue', entry[1])
        }
      };
    case Effect.EffectRemoval: {
      const value = entry[1];
      return 'effect' in value ?
        { [Effect.EffectRemoval]: { ...calculateAddition(value), effect: value.effect } } :
        { [Effect.EffectRemoval]: { ...calculateAddition(value), effects: value.effects } };
    }
    case Effect.ActivationRatePercentageUp: {
      const { effect, tag } = entry[1];
      return {
        [Effect.ActivationRatePercentageUp]: {
          ...calculateAddition(entry[1]),
          ...extractValueUnitData('milliPercentage', entry[1]),
          effect,
          tag
        }
      };
    }
    }
  })({});
}

function calculateEffectValues(effect: EquipmentEffects[number] | EquipmentEffectsAsSkill[number]): EffectDetails {
  return Object.assign(
    { details: calculateEffectDetails(effect.details) },
    'condition' in effect ? { condition: effect.condition } : {}
  );
}

export function calculateEffect(equipmentId: EquipmentId, enhanceLv: EquipmentEnhancementLevel): ReadonlyArray<EffectDetails> | undefined {
  const equipment = equipmentData[equipmentId];

  return 'equipment_effects' in equipment ? equipment.equipment_effects[enhanceLv].map(calculateEffectValues) : undefined;
}

export function calculateEffectAsSkill(equipmentId: EquipmentId, enhanceLv: EquipmentEnhancementLevel): ReadonlyArray<EffectDetails> | undefined {
  const equipment = equipmentData[equipmentId];

  return 'effects' in equipment ? equipment.effects[enhanceLv].map(calculateEffectValues) : undefined;
}