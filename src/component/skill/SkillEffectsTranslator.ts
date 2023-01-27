import { TFunction } from 'i18next';

import { AroundSkillEffectValue, SkillEffectValue } from '../../domain/skill/UnitSkills';
import { Effect } from '../../domain/Effect';
import {
  calcMicroValue,
  calcMilliPercentageValue,
  calcMilliValue,
  MilliPercentageValue
} from '../../domain/ValueUnit';
import { isFormChangeUnitNumber, UnitForms } from '../../domain/UnitFormValue';

import { Entry } from '../../util/object';
import { notFalsy } from '../../util/type';

export type SkillEffectDetailsEntry =
  Entry<SkillEffectValue> |
  Entry<AroundSkillEffectValue>

type SkillEffectDetailsProps = { tag?: string, detail: string, term?: string }

function getDetail(body: string, value: SkillEffectDetailsEntry[1], t: TFunction): string {
  const rate = 'rate' in value && value.rate ?
    typeof value.rate === 'string' ?
      `${t(`effect:rate.${value.rate}`)}${t('effect:separator')}` :
      `${t('effect:rate.percentage', { value: calcMilliPercentageValue(value.rate) })}${t('effect:separator')}` :
    '';
  const additions = [
    'times' in value && value.times ?
      t('effect:times', { count: value.times }) : undefined,
    'max_stack' in value && typeof value.max_stack === 'number' ?
      value.max_stack === 1 ?
        t('effect:does_not_stack') :
        t('effect:max_stack', { count: value.max_stack }) :
      undefined,
    'cannot_be_dispelled' in value && value.cannot_be_dispelled ?
      t('effect:cannot_be_dispelled') : undefined
  ].filter(notFalsy)
    .join(t('effect:separator'));

  return `${rate}${body}${additions ? ` (${additions})` : '' }`;
}

function getTerm(value: SkillEffectDetailsEntry[1], t: TFunction): string | undefined {
  return 'term' in value ?
    typeof value.term === 'string' ?
      t(`effect:term.${value.term}`) :
      value.term && t('effect:term.for_rounds', { value: value.term.for_rounds }) :
    undefined;
}

function getTag(value: SkillEffectDetailsEntry[1], t: TFunction): string | undefined {
  return 'tag' in value ?
    value.tag && t('effect:tag.format', { tag: value.tag }) :
    undefined;
}

function translateMilliPercentageDetail(
  effect: string,
  value: SkillEffectDetailsEntry[1] & MilliPercentageValue,
  t: TFunction
): SkillEffectDetailsProps {
  return {
    tag: getTag(value, t),
    detail: getDetail(t(`effect:effect.description.${effect}`, { value: calcMilliPercentageValue(value) }), value, t),
    term: getTerm(value, t)
  };
}

type TagStackEffectValue = NonNullable<SkillEffectValue[typeof Effect.TagStack]>

function translateTagStackDetail(
  key: typeof Effect['TagStack' | 'TagRelease'],
  value: TagStackEffectValue,
  t: TFunction
): SkillEffectDetailsProps {
  return {
    detail: getDetail(t(`effect:effect.description.${key}`, { tag: value.tag }), value, t),
    term: getTerm(value, t)
  };
}

function translateEffectNames(value: { effect: Effect } | { effects: ReadonlyArray<Effect> }, t: TFunction): string {
  return 'effect' in value ?
    t(`effect:effect.name.${value.effect}`) :
    value.effects.map(e => t(`effect:effect.name.${e}`)).join(t('effect:separator'));
}

export function translateSkillEffectDetails(
  entry: SkillEffectDetailsEntry,
  t: TFunction
): SkillEffectDetailsProps | ReadonlyArray<SkillEffectDetailsProps>{
  const term = getTerm(entry[1], t);

  switch (entry[0]) {
  case Effect.ActionCountUp:
  case Effect.ActionCountDown:
  case Effect.MinimizeDamage:
  case Effect.NullifyDamage:
  case Effect.AllBuffBlocking:
  case Effect.AllBuffRemoval:
  case Effect.AllDebuffRemoval:
  case Effect.ColumnProtect:
  case Effect.RowProtect:
  case Effect.TargetProtect:
  case Effect.ReAttack:
  case Effect.FollowUpAttack:
  case Effect.IgnoreBarrierDr:
  case Effect.IgnoreProtect:
  case Effect.IgnoreProtectDeactivate:
  case Effect.Reconnaissance:
  case Effect.Marked:
  case Effect.Provoked:
  case Effect.Immovable:
  case Effect.Silenced:
  case Effect.Stunned:
  case Effect.RefundAp:
  case Effect.AttackHit:
  case Effect.AttackCritical:
  case Effect.IgnoreDef:
    return {
      tag: getTag(entry[1], t),
      detail: getDetail(t(`effect:effect.description.${entry[0]}`), entry[1], t),
      term
    };
  case Effect.AMG11Construction:
  case Effect.DeployRabbitDField:
  case Effect.SummonHologramTiger:
  case Effect.GoldenFactoryConstruction:
    return {
      tag: getTag(entry[1], t),
      detail: t(`effect:effect.description.${entry[0]}`, { times: entry[1].times }),
      term
    };
  case Effect.CooperativeAttack: {
    const { unit, active } = entry[1];
    return {
      tag: getTag(entry[1], t),
      detail:
        isFormChangeUnitNumber(unit) ?
          t('effect:effect.description.cooperative_attack_form_active', { unit, no: active, form: UnitForms[unit].default }) :
          t('effect:effect.description.cooperative_attack', { unit, no: active }),
      term
    };
  }
  case Effect.Push:
  case Effect.Pull:
  case Effect.RangeUp:
  case Effect.RangeDown:
  case Effect.RangeUpActive2:
  case Effect.FixedDamageOverTime:
  case Effect.FixedFireDamageOverTime:
  case Effect.FixedIceDamageOverTime:
  case Effect.FixedElectricDamageOverTime:
  case Effect.MinimizeDamageLessThanValue:
  case Effect.Barrier:
    return {
      tag: getTag(entry[1], t),
      detail: getDetail(
        t(`effect:effect.description.${entry[0]}`, { value: entry[1].value }),
        entry[1],
        t
      ),
      term
    };
  case Effect.BattleContinuation: {
    const body = 'value' in entry[1] ?
      t('effect:effect.description.battle_continuation', { value: entry[1].value }) :
      t('effect:effect.description.battle_continuation_with_hp_rate', { value: calcMilliPercentageValue(entry[1]) });

    return {
      tag: getTag(entry[1], t),
      detail: getDetail(body, entry[1], t),
      term
    };
  }
  case Effect.AtkValueUp:
  case Effect.DefValueUp:
    return {
      tag: getTag(entry[1], t),
      detail: getDetail(
        t(`effect:effect.description.${entry[0]}`, { value: calcMilliValue(entry[1]) }),
        entry[1],
        t
      ),
      term
    };
  case Effect.ApUp:
  case Effect.ApDown:
  case Effect.SetAp:
    return {
      tag: getTag(entry[1], t),
      detail: getDetail(
        t(`effect:effect.description.${entry[0]}`, { value: calcMicroValue(entry[1]) }),
        entry[1],
        t
      ),
      term
    };
  case Effect.BuffRemoval:
  case Effect.DebuffRemoval: {
    const effects = translateEffectNames(entry[1], t);

    return {
      detail: getDetail(
        entry[1].tag ?
          t(`effect:effect.description.tagged_${entry[0]}`, { tag: entry[1].tag, effects }) :
          t(`effect:effect.description.${entry[0]}`, { effects }),
        entry[1],
        t
      ),
      term
    };
  }
  case Effect.PreventsEffect:
    return {
      tag: getTag(entry[1], t),
      detail: getDetail(
        t(`effect:effect.description.${entry[0]}`, { effects: translateEffectNames(entry[1], t) }),
        entry[1],
        t
      ),
      term
    };
  case Effect.ActivationRatePercentageUp: {
    const value  = calcMilliPercentageValue(entry[1]);
    const effect = entry[1].effect;

    return {
      detail: getDetail(
        entry[1].tag ?
          t('effect:effect.description.tagged_activation_rate_percentage_up', { tag: entry[1].tag, effect, value }) :
          t('effect:effect.description.activation_rate_percentage_up', { effect, value }),
        entry[1],
        t
      ),
      term
    };
  }
  case Effect.AbsolutelyActivated:
    return {
      detail: getDetail(t(`effect:effect.description.${entry[0]}`, entry[1]), entry[1], t),
      term
    };
  case Effect.FormChange:
  case Effect.FormRelease:
    return {
      tag: getTag(entry[1], t),
      detail: getDetail(t(`effect:effect.description.${entry[0]}`, { form: entry[1].form }), entry[1], t),
      term
    };
  case Effect.TagStack:
  case Effect.TagRelease:
    return 'length' in entry[1] ?
      entry[1].map(v => translateTagStackDetail(entry[0], v, t)) :
      translateTagStackDetail(entry[0], entry[1], t);
  case Effect.TagUnstack:
    return {
      detail: getDetail(
        t(`effect:effect.description.${entry[0]}`, { tag: entry[1].tag, value: entry[1].value }),
        entry[1],
        t
      ),
      term
    };
  case Effect.DamageMultiplierUpByStatus:
  case Effect.DamageMultiplierReductionByStatus:
  case Effect.CriReductionByStatus:
    return {
      tag: getTag(entry[1], t),
      detail: getDetail(
        t(`effect:effect.description.${entry[0]}`, { status: entry[1].status, value: calcMilliPercentageValue(entry[1]) }),
        entry[1],
        t
      ),
      term
    };
  case Effect.AtkValueUpByUnitValue:
    return {
      tag: getTag(entry[1], t),
      detail: getDetail(
        t(`effect:effect.description.${entry[0]}`, { unit: entry[1].unit, value: calcMilliPercentageValue(entry[1]) }),
        entry[1],
        t
      ),
      term
    };
  case Effect.DamageMultiplierDown:
  case Effect.DefDown:
  case Effect.AccDown:
  case Effect.CriDown:
  case Effect.EvaUp:
  case Effect.StatusResistUp:
    return 'length' in entry[1] ?
      entry[1].map(v => translateMilliPercentageDetail(entry[0], v, t)) :
      translateMilliPercentageDetail(entry[0], entry[1], t);
  default: {
    return translateMilliPercentageDetail(entry[0], entry[1], t);
  }
  }
}
