import { Effect } from '../Effect';
import { EquipmentEffectAddition, EffectDetails, EffectDetailsAsSkill, EquipmentEffectValue } from './EquipmentEffect';
import {
  EquipmentEffects,
  EquipmentEffectsAsSkill,
  EquipmentEffectsData,
  EquipmentEffectValueData,
  EquipmentEnhancementLevel,
  EquipmentId,
  EquipmentRank,
  StatusEffectData,
  availableRankSSS
} from './EquipmentData';
import { StatusEffect, emptyStatusEffect } from '../status/StatusEffect';
import { toIntegerValue, toMicroValue, toMilliPercentageValue, toMilliValue } from './EquipmentEffectValue';

import { equipmentData } from '../../data/equipmentData';

import { Entry, foldObjectEntry, typedEntries } from '../../util/object';
import { ValueOf } from '../../util/type';

function calculateStatusEffects<R extends EquipmentRank, D extends StatusEffectData<R>>(
  rank: R,
  data: D
): StatusEffect {
  return typedEntries(data)
    .reduce<StatusEffect>((acc, entry) => {
      switch (entry[0]) {
      case Effect.HpUp:
      case Effect.HpDown:
        return { ...acc, [entry[0]]: toIntegerValue(rank, entry[1]) };
      case Effect.AtkUp:
      case Effect.AtkDown:
      case Effect.DefUp:
      case Effect.DefDown:
        return { ...acc, [entry[0]]: toMilliValue(rank, entry[1]) };
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
        return { ...acc, [entry[0]]: toMilliPercentageValue(rank, entry[1]) };
      case Effect.SpdUp:
      case Effect.SpdDown:
        return { ...acc, [entry[0]]: toMicroValue(rank, entry[1]) };
      default: {
        const _exhaustiveCheck: never = entry;
        return _exhaustiveCheck;
      }
      }
    }, {});
}

export function calculateStatusEffect(
  equipmentId: EquipmentId,
  equipmentRank: EquipmentRank,
  enhanceLv: EquipmentEnhancementLevel
): StatusEffect {
  const equipment = equipmentData[equipmentId];

  if (!('status_effects' in equipment)) {
    return emptyStatusEffect;
  }

  return equipmentRank === EquipmentRank.SS ?
    calculateStatusEffects(EquipmentRank.SS, equipment.status_effects[enhanceLv]) :
    availableRankSSS(equipment) ?
      calculateStatusEffects(EquipmentRank.SSS, equipment.status_effects[enhanceLv]) :
      emptyStatusEffect;
}

// Currently, SSS rank equipment does not have any additional data.
function calculateAddition(
  data: Entry<EquipmentEffectValueData<typeof EquipmentRank.SS>>[1]
): EquipmentEffectAddition {
  return foldObjectEntry(data, entry => {
    switch (entry[0]) {
    case 'max_stack':
      return { [entry[0]]: entry[1] };
    case 'term':
      return { [entry[0]]: entry[1] };
    case 'rate': {
      const value = entry[1];
      return {
        [entry[0]]: value === 'constant' ? value : toMilliPercentageValue(EquipmentRank.SS, value)
      };
    }
    case 'times': {
      const value = entry[1];
      return {
        [entry[0]]: typeof value === 'number' ? value : value.ss
      };
    }
    default:
      return {};
    }
  })({});
}

function calculateEffectDetails<R extends EquipmentRank, E extends EquipmentEffectValueData<R>>(
  rank: R,
  details: E
): EquipmentEffectValue {
  return typedEntries(details).reduce<EquipmentEffectValue>((acc, entry) => {
    function calculate(): EquipmentEffectValue {
      switch (entry[0]) {
      case Effect.RangeDownActive1:
      case Effect.RangeUpActive2:
      case Effect.ActionCountUp:
      case Effect.MinimizeDamage:
      case Effect.AllDebuffRemoval:
      case Effect.ColumnProtect:
      case Effect.RowProtect:
      case Effect.ReAttack:
      case Effect.IgnoreBarrierDr:
      case Effect.IgnoreProtect:
      case Effect.Reconnaissance:
      case Effect.Marked:
      case Effect.Stunned:
        return { [entry[0]]: calculateAddition(entry[1]) };
      case Effect.FixedDamageOverTime:
      case Effect.Barrier:
      case Effect.RangeUp:
      case Effect.RangeDown:
        return {
          [entry[0]]: {
            ...calculateAddition(entry[1]),
            ...toIntegerValue(rank, entry[1])
          }
        };
      case Effect.BattleContinuation:
        return 'value' in entry[1] ?
          { [entry[0]]: { ...calculateAddition(entry[1]), ...toIntegerValue(rank, entry[1]) } } :
          { [entry[0]]: { ...calculateAddition(entry[1]), ...toMilliPercentageValue(rank, entry[1]) } };
      case Effect.AdditionalFireDamage:
      case Effect.AdditionalIceDamage:
      case Effect.AdditionalElectricDamage:
      case Effect.FixedDamage:
      case Effect.LightTypeDamageUp:
      case Effect.HeavyTypeDamageUp:
      case Effect.FlyingTypeDamageUp:
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
      case Effect.FireResistDown:
      case Effect.IceResistUp:
      case Effect.IceResistDown:
      case Effect.ElectricResistUp:
      case Effect.ElectricResistDown:
      case Effect.StatusResistUp:
      case Effect.ExpUp:
      case Effect.DefensePenetration:
      case Effect.DamageTakenIncreased:
      case Effect.DamageReduction:
      case Effect.Counterattack:
        return {
          [entry[0]]: {
            ...calculateAddition(entry[1]),
            ...toMilliPercentageValue(rank, entry[1])
          }
        };
      case Effect.DamageMultiplierUpByStatus:
        return {
          [entry[0]]: {
            ...calculateAddition(entry[1]),
            ...toMilliPercentageValue(rank, entry[1]),
            status: entry[1].status
          }
        };
      case Effect.ApUp:
        return {
          [entry[0]]: {
            ...calculateAddition(entry[1]),
            ...toMicroValue(rank, entry[1])
          }
        };
      case Effect.BuffRemoval:
      case Effect.DebuffRemoval: {
        const value = entry[1];
        return 'effect' in value ?
          { [entry[0]]: { ...calculateAddition(value), effect: value.effect } } :
          { [entry[0]]: { ...calculateAddition(value), effects: value.effects } };
      }
      case Effect.PreventsEffect:
        return { [entry[0]]: { ...calculateAddition(entry[1]), effect: entry[1].effect } };
      case Effect.ActivationRatePercentageUp: {
        const { effect, tag } = entry[1];
        return {
          [entry[0]]: {
            ...calculateAddition(entry[1]),
            ...toMilliPercentageValue(rank, entry[1]),
            effect,
            tag
          }
        };
      }
      }
    }

    return { ...acc, ...calculate() };
  }, {});
}

function calculateCondition(
  effect: {
    condition?:
      ValueOf<EquipmentEffects[number], 'condition'> |
      ValueOf<EquipmentEffectsAsSkill[number], 'condition'>
  }
): Pick<Required<EffectDetails>, 'condition'> | Record<string, never> {
  return effect.condition ? { condition: effect.condition } : {};
}

function calculateEffects<R extends EquipmentRank, E extends EquipmentEffectsData<R>>(
  rank: R,
  effects: E
): ReadonlyArray<EffectDetails> {
  return effects.map(effect => ({
    details: calculateEffectDetails(rank, effect.details),
    ...calculateCondition(effect)
  }));
}

export function calculateEffect(
  equipmentId: EquipmentId,
  equipmentRank: EquipmentRank,
  enhanceLv: EquipmentEnhancementLevel
): ReadonlyArray<EffectDetails> | undefined {
  const equipment = equipmentData[equipmentId];

  if (!('equipment_effects' in equipment)) {
    return undefined;
  }

  if (equipmentRank === EquipmentRank.SS) {
    // HACK: to avoid "TS2590: Expression produces a union type that is too complex to represent."
    const effects: EquipmentEffectsData<typeof EquipmentRank.SS> = equipment.equipment_effects[enhanceLv];
    return calculateEffects(EquipmentRank.SS, effects);
  } else {
    return availableRankSSS(equipment) ?
      calculateEffects(EquipmentRank.SSS, equipment.equipment_effects[enhanceLv]) :
      undefined;
  }
}

function calculateEffectsAsSkill(
  rank: typeof EquipmentRank.SS,
  effects: EquipmentEffectsAsSkill
): ReadonlyArray<EffectDetailsAsSkill> {
  return effects.map(effect => ({
    details:
      Object.assign(
        { self: calculateEffectDetails(rank, effect.details.self) },
        'target' in effect.details ?
          { target: calculateEffectDetails(rank, effect.details.target) } :
          {}
      ),
    ...calculateCondition(effect)
  }));
}

export function calculateEffectAsSkill(
  equipmentId: EquipmentId,
  equipmentRank: EquipmentRank,
  enhanceLv: EquipmentEnhancementLevel
): ReadonlyArray<EffectDetailsAsSkill> | undefined {
  const equipment = equipmentData[equipmentId];

  if (!('effects' in equipment)) {
    return undefined;
  }

  // Currently, SSS rank equipment which has effects as skill does not exist.
  //
  // return equipmentRank === EquipmentRank.SS ?
  //   calculateEffectsAsSkill(EquipmentRank.SS, equipment.effects[enhanceLv]) :
  //   availableRankSSS(equipment) ?
  //     calculateEffectsAsSkill(EquipmentRank.SSS, equipment.effects[enhanceLv]) :
  //     undefined;

  return calculateEffectsAsSkill(EquipmentRank.SS, equipment.effects[enhanceLv]);
}
