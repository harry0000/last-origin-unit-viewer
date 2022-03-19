import { TFunction } from 'i18next';

import { Effect } from '../../domain/Effect';
import { EffectActivationState } from '../../domain/EffectActivationState';
import { EffectAdditionData } from '../../domain/equipment/EquipmentData';
import {
  EffectDetails,
  EquipmentEffectActivationCondition,
  EquipmentEffectAddition,
  EquipmentEffectValue
} from '../../domain/equipment/EquipmentEffect';
import { calcMicroValue, calcMilliPercentageValue } from '../../domain/ValueUnit';

import { Entry, typedEntries } from '../../util/object';
import { notFalsy } from '../../util/type';

export type TranslatedEquipmentEffect = {
  condition?: string,
  details: ReadonlyArray<{
    detail: string,
    term?: string
  }>
}

function translateTerm(term: Required<EffectAdditionData>['term'], t: TFunction): string {
  return typeof term === 'string' ?
    t(`effect:term.${term}`) :
    t('effect:term.for_rounds', { value: term.for_rounds });
}

function buildDetail(body: string, value: EquipmentEffectAddition, t: TFunction): string {
  const rate =
    'rate' in value && value.rate ?
      typeof value.rate === 'string' ?
        `${t(`effect:rate.${value.rate}`)}${t('effect:separator')}` :
        `${t('effect:rate.percentage', { value: calcMilliPercentageValue(value.rate) })}${t('effect:separator')}` :
      '';
  const additions = [
    'times' in value && value.times ?
      t('effect:times', { count: value.times }) : undefined,
    'max_stack' in value && value.max_stack ?
      t('effect:max_stack', { count: value.max_stack }) :
      undefined
  ].filter(notFalsy)
    .join(t('effect:separator'));

  return `${rate}${body}${additions ? ` (${additions})` : '' }`;
}

function translateDetail(entry: Entry<EquipmentEffectValue>, t: TFunction): string {
  switch (entry[0]) {
  case Effect.MinimizeDamage:
  case Effect.AllDebuffRemoval:
  case Effect.ColumnProtect:
  case Effect.RowProtect:
  case Effect.IgnoreBarrierDr:
  case Effect.Reconnaissance:
  case Effect.Stunned:
    return buildDetail(t(`effect:effect.description.${entry[0]}`), entry[1], t);
  case Effect.FixedDamageOverTime:
  case Effect.Barrier:
  case Effect.BattleContinuation:
  case Effect.RangeUp:
  case Effect.RangeDown:
    return buildDetail(t(`effect:effect.description.${entry[0]}`, { value: entry[1].value }), entry[1], t);
  case Effect.AdditionalFireDamage:
  case Effect.AdditionalIceDamage:
  case Effect.AdditionalElectricDamage:
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
    return buildDetail(
      t(`effect:effect.description.${entry[0]}`, { value: calcMilliPercentageValue(entry[1]) }),
      entry[1],
      t
    );
  case Effect.ApUp:
    return t(`effect:effect.description.${entry[0]}`, { value: calcMicroValue(entry[1]) });
  case Effect.EffectRemoval: {
    const effects =
      'effect' in entry[1] ?
        t(`effect:effect.name.${entry[1].effect}`) :
        entry[1].effects.map(e => t(`effect:effect.name.${e}`)).join(t('effect:separator'));

    return buildDetail(t('effect:effect.description.effect_removal', { effects }), entry[1], t);
  }
  case Effect.ActivationRatePercentageUp:{
    const { tag, effect } = entry[1];
    const value = calcMilliPercentageValue(entry[1]);
    return buildDetail(
      t('effect:effect.description.tagged_activation_rate_percentage_up', { tag, effect, value }),
      entry[1],
      t
    );
  }
  default: {
    const _exhaustiveCheck: never = entry;
    return _exhaustiveCheck;
  }
  }
}

function translateCondition(condition: EquipmentEffectActivationCondition, t: TFunction): string {
  const trigger = 'trigger' in condition ? t(`effect:condition.trigger.${condition.trigger}`) : '';
  const state = 'state' in condition && condition.state ?
    Object
      .entries(condition.state)
      .map(entry => {
        switch (entry[0]) {
        case EffectActivationState.Grid:
          return t('effect:condition.state.grid', { grid: entry[1] });
        case EffectActivationState.HpGreaterOrEqual:
          return t('effect:condition.state.hp_greater_or_equal', { value: entry[1] });
        case EffectActivationState.Effected:
          return t('effect:condition.state.effected', { effect: entry[1] });
        case EffectActivationState.Tagged:
          return t('effect:condition.state.tagged', { tag: entry[1] });
        case EffectActivationState.Unit:
          return t('effect:condition.state.unit', { unit: t(`effect:unit.${entry[1]}`) });
        }
      })
      .join(t('effect:and_symbolic_separator')) :
    '';

  return `${trigger}${trigger && state ? t('effect:separator') : ''}${state}${state ? t('effect:case') : ''}`;
}

function translateDetails(details: EquipmentEffectValue, t: TFunction): TranslatedEquipmentEffect['details'] {
  return typedEntries(details).map(entry => {
    const value = entry[1];
    return {
      detail: translateDetail(entry, t),
      ...(value && 'term' in value && value.term ? { term: translateTerm(value.term, t) } : {})
    };
  });
}

export function translateEquipmentEffect(effects: ReadonlyArray<EffectDetails>, t: TFunction): ReadonlyArray<TranslatedEquipmentEffect> {
  return effects.map(e => {
    return {
      details: translateDetails(e.details, t),
      ...('condition' in e && e.condition ? { condition: translateCondition(e.condition, t) } : {})
    };
  });
}
