import { TFunction } from 'i18next';

import { Effect } from '../../domain/Effect';
import { EffectActivationState } from '../../domain/EffectActivationState';
import { EffectAdditionData } from '../../domain/equipment/EquipmentData';
import {
  EffectDetails,
  EffectDetailsAsSkill,
  EquipmentEffectActivationCondition,
  EquipmentEffectAddition,
  EquipmentEffectAsSkillSelfActivationCondition,
  EquipmentEffectAsSkillTargetActivationCondition,
  EquipmentEffectValue, extractEquipmentEffectActivationConditionState
} from '../../domain/equipment/EquipmentEffect';
import { EffectTrigger } from '../../domain/EffectTrigger';
import { calcMicroValue, calcMilliPercentageValue, calcMilliValue } from '../../domain/ValueUnit';

import { Entry, typedEntries } from '../../util/object';

export type TranslatedEquipmentEffect = {
  condition?: string,
  details: ReadonlyArray<{
    detail: string,
    term?: string
  }>
}

export type TranslatedEquipmentEffectAsSkill = {
  condition?: string,
  details: {
    self?: TranslatedEquipmentEffect['details'],
    target?: TranslatedEquipmentEffect['details']
  }
}

export function isTranslatedEquipmentEffectAsSkillDetails(
  arg: TranslatedEquipmentEffect['details'] | TranslatedEquipmentEffectAsSkill['details']
): arg is TranslatedEquipmentEffectAsSkill['details'] {
  return 'self' in arg || 'target' in arg;
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
    ...('times' in value && value.times ?
      [t('effect:times', { count: value.times })] :
      []
    ),
    ...('max_stack' in value && value.max_stack ?
      (value.max_stack === 1 ?
        [t('effect:does_not_stack')] :
        [t('effect:max_stack', { count: value.max_stack })]) :
      []
    )
  ].join(t('effect:separator'));

  return `${rate}${body}${additions ? ` (${additions})` : '' }`;
}

function translateDetail(entry: Entry<EquipmentEffectValue>, t: TFunction): string {
  switch (entry[0]) {
  case Effect.RangeDownActive1:
  case Effect.ActionCountUp:
  case Effect.LimitActionCount:
  case Effect.MinimizeDamage:
  case Effect.AllDebuffRemoval:
  case Effect.ColumnProtect:
  case Effect.RowProtect:
  case Effect.ReAttack:
  case Effect.IgnoreBarrierDr:
  case Effect.IgnoreProtect:
  case Effect.Reconnaissance:
  case Effect.Marked:
  case Effect.Immovable:
  case Effect.Silenced:
  case Effect.Stunned:
    return buildDetail(t(`effect:effect.description.${entry[0]}`), entry[1], t);
  case Effect.FixedDamageOverTime:
  case Effect.FixedFireDamageOverTime:
  case Effect.FixedIceDamageOverTime:
  case Effect.FixedElectricDamageOverTime:
  case Effect.Barrier:
  case Effect.RangeUp:
  case Effect.RangeDown:
  case Effect.RangeUpActive1:
  case Effect.RangeUpActive2:
    return buildDetail(t(`effect:effect.description.${entry[0]}`, { value: entry[1].value }), entry[1], t);
  case Effect.BattleContinuation:
    return 'value' in entry[1] ?
      buildDetail(t('effect:effect.description.battle_continuation', { value: entry[1].value }), entry[1], t) :
      buildDetail(t('effect:effect.description.battle_continuation_with_hp_rate', { value: calcMilliPercentageValue(entry[1]) }), entry[1], t);
  case Effect.AtkValueUp:
    return buildDetail(t(`effect:effect.description.${entry[0]}`, { value: calcMilliValue(entry[1]) }), entry[1], t);
  case Effect.DamageMultiplierUp:
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
  case Effect.MinimumIceResistUp:
  case Effect.StatusResistUp:
  case Effect.ExpUp:
  case Effect.DefensePenetration:
  case Effect.DamageTakenIncreased:
  case Effect.DamageReductionUp:
  case Effect.AllBuffRemovalResistUp:
  case Effect.Counterattack:
    return buildDetail(
      t(`effect:effect.description.${entry[0]}`, { value: calcMilliPercentageValue(entry[1]) }),
      entry[1],
      t
    );
  case Effect.DamageMultiplierUpByStatus:
    return buildDetail(
      t(`effect:effect.description.${entry[0]}`, { value: calcMilliPercentageValue(entry[1]), status: entry[1].status }),
      entry[1],
      t
    );
  case Effect.ApUp:
    return t(`effect:effect.description.${entry[0]}`, { value: calcMicroValue(entry[1]) });
  case Effect.BuffRemoval:
  case Effect.DebuffRemoval:
  case Effect.PreventsEffect: {
    const effects =
      'effect' in entry[1] ?
        t(`effect:effect.name.${entry[1].effect}`) :
        entry[1].effects.map(e => t(`effect:effect.name.${e}`)).join(t('effect:separator'));

    return buildDetail(t(`effect:effect.description.${entry[0]}`, { effects }), entry[1], t);
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

function translateTrigger(
  condition:
    EquipmentEffectActivationCondition |
    EquipmentEffectAsSkillSelfActivationCondition |
    EquipmentEffectAsSkillTargetActivationCondition,
  t: TFunction
): string {
  if (!('trigger' in condition)) {
    return '';
  }

  switch (condition.trigger) {
  case EffectTrigger.StartRound:
    return condition.round ?
      typeof condition.round === 'string' ?
        t(`effect:condition.trigger.start_${condition.round}_round`) :
        t('effect:condition.trigger.round.at', { round: condition.round.at }) :
      t('effect:condition.trigger.start_round');
  case EffectTrigger.HitActive2:
    return t(`effect:condition.trigger.${condition.trigger}`, { unit: condition.unit });
  default:
    return t(`effect:condition.trigger.${condition.trigger}`);
  }
}

function translateCondition(details: EffectDetails | EffectDetailsAsSkill, t: TFunction): { condition: string } | Record<string, never> {
  if (!('condition' in details)) {
    return {};
  }

  const trigger = translateTrigger(details.condition, t);
  const hasTarget = 'target' in details && details.target;
  const state = extractEquipmentEffectActivationConditionState(details.condition);
  const translated = state ?
    typedEntries(state)
      .map(entry => {
        switch (entry[0]) {
        case EffectActivationState.Grid:
          return t('effect:condition.state.grid', { grid: entry[1] });
        case EffectActivationState.HpGreaterOrEqual:
          return t('effect:condition.state.hp_greater_or_equal', { value: entry[1] });
        case EffectActivationState.Affected:
          return t('effect:condition.state.affected', { effect: entry[1] });
        case EffectActivationState.Tagged:
          return t('effect:condition.state.tagged', { tag: entry[1] });
        case EffectActivationState.Unit: {
          const key = 'effect:condition.state.equipped_with';
          if (typeof entry[1] === 'number') {
            const unit = t('effect:with_quotes', { value: t('unit:display', { number: entry[1] }) });
            return t(key, { unit });
          } else {
            const kind = t(`effect:unit.${entry[1].kind}`);
            const unit = 'except' in entry[1] ?
              `${t('effect:with_quotes', { value: t('unit:display', { number: entry[1].except }) })}${t('effect:except_preposition')}${kind}` :
              kind;
            return t(key, { unit });
          }
        }
        case EffectActivationState.StatusGreaterThanSelf:
          return (
            (hasTarget ? t(`effect:condition.target.${details.target.kind}`) : '') +
            t('effect:condition.state.status_greater_than_self', entry[1])
          );
        case EffectActivationState.StatusLessThanSelf:
          return (
            (hasTarget ? t(`effect:condition.target.${details.target.kind}`) : '') +
            t('effect:condition.state.status_less_than_self', entry[1])
          );
        }
      })
      .join(t('effect:and_symbolic_separator')) :
    '';

  const separator = trigger && translated ? t('effect:separator') : '';
  const toTarget = translated && hasTarget ?
    t('effect:separator') + t('effect:effect.target.target') + t('effect:to_preposition') + t('effect:below_effects') :
    '';

  const condition = `${trigger}${separator}${translated}${translated ? t('effect:case') : ''}${toTarget}`;
  return { condition };
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

export function translateEquipmentEffect(
  effects: ReadonlyArray<EffectDetails>,
  t: TFunction
): ReadonlyArray<TranslatedEquipmentEffect> {
  return effects.map(e => {
    return {
      details: translateDetails(e.details, t),
      ...translateCondition(e, t)
    };
  });
}

export function translateEquipmentEffectAsSkill(
  effects: ReadonlyArray<EffectDetailsAsSkill>,
  t: TFunction
): ReadonlyArray<TranslatedEquipmentEffectAsSkill> {
  return effects.map(e => {
    return {
      details: {
        ...(
          'self' in e.details && e.details.self ?
            { self: translateDetails(e.details.self, t) } :
            {}
        ),
        ...(
          'target' in e.details && e.details.target ?
            { target: translateDetails(e.details.target, t) } :
            {}
        )
      },
      ...translateCondition(e, t)
    };
  });
}
