import deepEqual from 'fast-deep-equal';

import {
  ActiveSkill,
  AroundSkillEffectValue,
  PassiveSkillAsEquipmentEffect,
  PassiveSkill,
  SkillEffect,
  SkillEffectValue
} from './UnitSkills';
import {
  ActiveSkillData,
  PassiveSkillData,
  PassiveSkillDataAsEquipmentEffect,
  SkillApCostData,
  SkillApCostValue,
  SkillAreaOfEffectData
} from './UnitSkillData';
import { AffectionBonus } from '../UnitAffection';
import {
  AroundSkillEffectDataValue,
  isAroundSkillEffectData,
  isTargetSkillEffectData,
  SkillEffectData,
  SkillEffectDataValue
} from './SkillEffectData';
import { CoreLinkBonus, FullLinkBonus } from '../UnitCoreLinkBonusData';
import { Effect } from '../Effect';
import {
  IntegerValueEffectKey,
  MicroValueEffectKey,
  MilliPercentageEffectKey,
  MultipleMilliPercentageEffectKey,
  NoValueEffectKey,
  RangeUpDownEffectKey
} from './SkillEffect';
import { SkillAreaType } from './SkillAreaOfEffect';
import { SkillEffectTag } from './SkillEffectTag';
import { SkillLv } from './UnitSkillLvValue';
import { sumMilliPercentageValues, ValueUnit } from '../ValueUnit';

import { Entry, foldObjectEntry } from '../../util/object';

type SkillEffectLv = SkillLv | 11 | 12 | 13

function calculateSkillEffectLv(
  skillLv: SkillLv,
  fullLinkBonus: FullLinkBonus | undefined,
  affectionBonus: AffectionBonus | undefined
): SkillEffectLv {
  let effectLv: SkillEffectLv = skillLv;

  if (fullLinkBonus && 'buff_debuff_lv_up' in fullLinkBonus) {
    effectLv = effectLv + fullLinkBonus.buff_debuff_lv_up.value as SkillEffectLv;
  }

  if (affectionBonus) {
    effectLv = effectLv + affectionBonus.buff_debuff_lv_up.value as SkillEffectLv;
  }

  return effectLv;
}

type Value<T extends ValueUnit> =
  {
    readonly [key in T]: number
  }

type PerLvValue<T extends ValueUnit> =
  {
    readonly base: { readonly [key in T]: number },
    readonly per_lv_up: { readonly [key in T]: number }
  }

function calculateDataValue<T extends ValueUnit>(unit: T, value: PerLvValue<T> | Value<T>, lv: SkillLv | SkillEffectLv): Value<T> {
  if ('base' in value) {
    return { [unit]: value.base[unit] + value.per_lv_up[unit] * (lv - 1) } as { [key in T]: number };
  }

  return value;
}

function calculateDamageDeal(
  damageDeal: ActiveSkillData['damage_deal'],
  lv: SkillLv,
  coreLinkBonus: CoreLinkBonus,
  fullLinkBonus: FullLinkBonus | undefined
): ActiveSkill['damage_deal'] {
  return (
    damageDeal &&
    {
      ...(
        sumMilliPercentageValues(
          calculateDataValue('milliPercentage', damageDeal, lv),
          ...('damage_multiplier' in coreLinkBonus ? [coreLinkBonus.damage_multiplier] : []),
          ...(fullLinkBonus && 'damage_multiplier' in fullLinkBonus ? [fullLinkBonus.damage_multiplier] : [])
        )
      ),
      effective: damageDeal.effective,
      attribute: damageDeal.attribute
    }
  );
}

function calculateApCost(data: SkillApCostData['cost'], lv: SkillLv): SkillApCostValue {
  if (typeof data === 'number') {
    return data;
  }

  if ('7' in data) {
    if (lv === 1) {
      return data[1];
    } else if (lv < 7) {
      return data[2];
    } else {
      return data[7];
    }
  } else {
    if (lv === 1) {
      return data[1];
    } else if (lv === 10 && '10' in data) {
      return data[10];
    } else {
      return data[2];
    }
  }
}

function calculateArea(data: SkillAreaOfEffectData['area'], lv: SkillLv): SkillAreaType {
  if (typeof data === 'string') {
    return data;
  }

  if (lv < 5) {
    return data[1];
  } else if (lv < 10) {
    return '5' in data ? data[5] : data[1];
  } else /* lv === 10 */ {
    return '10' in data ? data[10] : data[5];
  }
}

type IncludeAddition = NonNullable<SkillEffectDataValue[NoValueEffectKey]>

function calculateTerm(
  term: IncludeAddition['term'] | undefined,
  lv: SkillLv
) {
  if (!term || typeof term === 'string') {
    return term;
  }

  const for_rounds =
    typeof term.for_rounds === 'number' ?
      term.for_rounds :
      lv === 10 ?
        term.for_rounds[10] :
        term.for_rounds[1];

  return { for_rounds };
}

function calculateRate(
  rate: IncludeAddition['rate'] | undefined,
  lv: SkillLv
) {
  if (!rate || typeof rate === 'string') {
    return rate;
  }

  return calculateDataValue('milliPercentage', rate, lv);
}

function calculateTimes(
  times: IncludeAddition['times'] | undefined,
  lv: SkillLv
) {
  if (!times || typeof times === 'number') {
    return times;
  }

  if (lv < 5) {
    return times[1];
  } else if (lv < 10) {
    return '5' in times ? times[5] : times[1];
  } else /* lv === 10 */ {
    return '10' in times ? times[10] : times[5];
  }
}

function calculateAddition(
  addition: Pick<IncludeAddition, 'tag' | 'max_stack' | 'term' | 'rate' | 'times' | 'cannot_be_dispelled'> & { tag: SkillEffectTag },
  lv: SkillLv
): SkillEffectValue[NoValueEffectKey] & { tag: SkillEffectTag }
function calculateAddition(
  addition: Pick<IncludeAddition, 'tag' | 'max_stack' | 'term' | 'rate' | 'times' | 'cannot_be_dispelled'>,
  lv: SkillLv
): SkillEffectValue[NoValueEffectKey]
function calculateAddition(
  addition: Pick<IncludeAddition, 'tag' | 'max_stack' | 'term' | 'rate' | 'times' | 'cannot_be_dispelled'>,
  lv: SkillLv
): SkillEffectValue[NoValueEffectKey] {
  return {
    tag: addition.tag,
    max_stack: addition.max_stack,
    term: calculateTerm(addition.term, lv),
    rate: calculateRate(addition.rate, lv),
    times: calculateTimes(addition.times, lv),
    cannot_be_dispelled: addition.cannot_be_dispelled
  };
}

function calculateRangeUpDownEffectValue(
  data: NonNullable<SkillEffectDataValue[RangeUpDownEffectKey]>,
  lv: SkillLv
): NonNullable<SkillEffectValue[RangeUpDownEffectKey]> {
  const value =
    typeof data.value === 'number' ?
      data.value :
      lv === 10 ?
        data.value[10] :
        data.value[1];

  return {
    ...calculateAddition(data, lv),
    value
  };
}

function calculateIntegerValueEffectValue(
  data: NonNullable<SkillEffectDataValue[IntegerValueEffectKey]>,
  lv: SkillLv,
  effectLv: SkillEffectLv
): NonNullable<SkillEffectValue[IntegerValueEffectKey]> {
  return {
    ...calculateAddition(data, lv),
    ...calculateDataValue('value', data, effectLv)
  };
}

function calculateMicroValueEffectValue(
  data: NonNullable<SkillEffectDataValue[MicroValueEffectKey]>,
  lv: SkillLv,
  effectLv: SkillEffectLv
): NonNullable<SkillEffectValue[MicroValueEffectKey]> {
  return {
    ...calculateAddition(data, lv),
    ...calculateDataValue('microValue', data, effectLv)
  };
}

function calculateMilliPercentageEffectValue(
  data: NonNullable<SkillEffectDataValue[Exclude<MilliPercentageEffectKey, MultipleMilliPercentageEffectKey>]>,
  lv: SkillLv,
  effectLv: SkillEffectLv
): NonNullable<SkillEffectValue[Exclude<MilliPercentageEffectKey, MultipleMilliPercentageEffectKey>]> {
  return {
    ...calculateAddition(data, lv),
    ...calculateDataValue('milliPercentage', data, effectLv)
  };
}

function calculateEffectValue(
  entry: Entry<Omit<SkillEffectDataValue, typeof Effect.HpUp>>,
  lv: SkillLv,
  effectLv: SkillEffectLv
): SkillEffectValue {
  if ('enabledLv' in entry[1] && (entry[1].enabledLv ?? 1) > lv) {
    return {};
  }

  switch (entry[0]) {
  case Effect.MinimizeDamage:
  case Effect.NullifyDamage:
  case Effect.AllBuffRemoval:
  case Effect.AllDebuffRemoval:
  case Effect.ColumnProtect:
  case Effect.RowProtect:
  case Effect.TargetProtect:
  case Effect.ReAttack:
  case Effect.FollowUpAttack:
  case Effect.IgnoreBarrierDr:
  case Effect.IgnoreProtect:
  case Effect.Reconnaissance:
  case Effect.Marked:
  case Effect.Provoked:
  case Effect.Immovable:
  case Effect.Silenced:
  case Effect.Stunned:
  case Effect.RefundAp:
  case Effect.AttackCritical:
  case Effect.CounterattackCritical:
  case Effect.DeployDefensiveWall:
  case Effect.AMG11Construction:
  case Effect.DeployRabbitDField:
  case Effect.SummonHologramTiger:
  case Effect.GoldenFactoryConstruction:
  case Effect.TagStack:
    return { [entry[0]]: calculateAddition(entry[1], lv) };
  case Effect.TagRelease:
    if ('length' in entry[1]) {
      return { [entry[0]]: entry[1].map(v => calculateAddition(v, lv)) };
    }
    return { [entry[0]]: calculateAddition(entry[1], lv) };
  case Effect.CooperativeAttack:
    return {
      [entry[0]]: {
        ...calculateAddition(entry[1], lv),
        unit: entry[1].unit,
        active: entry[1].active
      }
    };
  case Effect.Push:
  case Effect.Pull:
    return {
      [entry[0]]: {
        ...calculateAddition(entry[1], lv),
        value: entry[1].value
      }
    };
  case Effect.RangeUp:
  case Effect.RangeDown:
    return { [entry[0]]: calculateRangeUpDownEffectValue(entry[1], lv) };
  case Effect.FixedDamageOverTime:
  case Effect.FixedFireDamageOverTime:
  case Effect.FixedIceDamageOverTime:
  case Effect.FixedElectricDamageOverTime:
  case Effect.Barrier:
  case Effect.BattleContinuation:
    return { [entry[0]]: calculateIntegerValueEffectValue(entry[1], lv, effectLv) };
  case Effect.ApUp:
  case Effect.ApDown:
  case Effect.SetAp:
    return { [entry[0]]: calculateMicroValueEffectValue(entry[1], lv, effectLv) };
  case Effect.EffectRemoval:
  case Effect.PreventsEffect: {
    const effect = 'effect' in entry[1] ? { effect: entry[1].effect } : { effects: entry[1].effects };
    return {
      [entry[0]]: {
        ...calculateAddition(entry[1], lv),
        ...effect
      }
    };
  }
  case Effect.ActivationRatePercentageUp:
    return {
      [entry[0]]: {
        ...calculateAddition(entry[1], lv),
        effect: entry[1].effect,
        ...calculateDataValue('milliPercentage', entry[1], effectLv)
      }
    };
  case Effect.FormChange:
  case Effect.FormRelease:
    return {
      [entry[0]]: {
        ...calculateAddition(entry[1], lv),
        form: entry[1].form
      }
    };
  case Effect.TagUnstack:
    return {
      [entry[0]]: {
        ...calculateAddition(entry[1], lv),
        tag: entry[1].tag,
        effect: entry[1].effect,
        value: entry[1].value
      }
    };
  case Effect.DefDown:
  case Effect.AccDown:
  case Effect.CriDown:
  case Effect.EvaUp:
  case Effect.StatusResistUp:
    if ('length' in entry[1]) {
      return { [entry[0]]: entry[1].map(v => calculateMilliPercentageEffectValue(v, lv, effectLv)) };
    }
    return { [entry[0]]: calculateMilliPercentageEffectValue(entry[1], lv, effectLv) };
  default: {
    return { [entry[0]]: calculateMilliPercentageEffectValue(entry[1], lv, effectLv) };
  }
  }
}

function calculateEffectDataValue(
  data: SkillEffectDataValue | undefined,
  lv: SkillLv,
  effectLv: SkillEffectLv
): SkillEffectValue | undefined {
  const calculated = foldObjectEntry(data ?? {}, entry =>
    calculateEffectValue(entry, lv, effectLv)
  )({});

  return !deepEqual(calculated, {}) ? calculated : undefined;
}

function calculateAroundEffectDataValue(
  data: AroundSkillEffectDataValue,
  lv: SkillLv,
  effectLv: SkillEffectLv
): AroundSkillEffectValue {
  return (
    data?.fixed_damage ?
      {
        fixed_damage: {
          ...calculateDataValue('milliPercentage', data.fixed_damage, effectLv),
          ...calculateAddition(data.fixed_damage, lv)
        }
      } :
      {}
  );
}

function calculateEffect(
  data: SkillEffectData,
  lv: SkillLv,
  effectLv: SkillEffectLv
): SkillEffect | undefined {
  if (isAroundSkillEffectData(data)) {
    const around = calculateAroundEffectDataValue(data.details.around, lv, effectLv);
    return around && {
      conditions: data.conditions,
      details: { around }
    };
  } else if (isTargetSkillEffectData(data)) {
    const self = calculateEffectDataValue(data.details.self, lv, effectLv);
    const target = calculateEffectDataValue(data.details.target, lv, effectLv);
    return self || target ?
      {
        conditions: data.conditions,
        scale_factor: data.scale_factor,
        target: data.target,
        details: Object.assign(
          self ? { self } : {},
          target ? { target } : {},
        )
      } :
      undefined;
  } else {
    const self = calculateEffectDataValue(data.details.self, lv, effectLv);
    return self && {
      conditions: data.conditions,
      effective: data.effective,
      scale_factor: data.scale_factor,
      details: { self }
    };
  }
}

function calculateEffects(
  data: ReadonlyArray<SkillEffectData>,
  lv: SkillLv,
  effectLv: SkillEffectLv
): ReadonlyArray<SkillEffect> {
  return data
    .flatMap(effect => {
      const e = calculateEffect(effect, lv, effectLv);
      return e ?? [];
    });
}

export function calculateActiveSkill(
  data: ActiveSkillData,
  lv: SkillLv,
  coreLinkBonus: CoreLinkBonus,
  fullLinkBonus: FullLinkBonus | undefined,
  affectionBonus: AffectionBonus | undefined
): ActiveSkill {
  const effectLv = calculateSkillEffectLv(lv, fullLinkBonus, affectionBonus);

  return {
    damage_deal: calculateDamageDeal(data.damage_deal, lv, coreLinkBonus, fullLinkBonus),
    cost: calculateApCost(data.cost, lv),
    range: data.range,
    area: calculateArea(data.area, lv),
    effects: calculateEffects(data.effects, lv, effectLv)
  };
}

export function calculatePassiveSkill(data: PassiveSkillData | undefined, lv: SkillLv | undefined, fullLinkBonus: FullLinkBonus | undefined, affectionBonus: AffectionBonus | undefined): PassiveSkill | undefined
export function calculatePassiveSkill(data: PassiveSkillDataAsEquipmentEffect | undefined, lv: SkillLv | undefined, fullLinkBonus: FullLinkBonus | undefined, affectionBonus: AffectionBonus | undefined): PassiveSkillAsEquipmentEffect | undefined
export function calculatePassiveSkill(data: PassiveSkillData | PassiveSkillDataAsEquipmentEffect | undefined, lv: SkillLv | undefined, fullLinkBonus: FullLinkBonus | undefined, affectionBonus: AffectionBonus | undefined): PassiveSkill | PassiveSkillAsEquipmentEffect | undefined
export function calculatePassiveSkill(data: PassiveSkillData | PassiveSkillDataAsEquipmentEffect | undefined, lv: SkillLv | undefined, fullLinkBonus: FullLinkBonus | undefined, affectionBonus: AffectionBonus | undefined): PassiveSkill | PassiveSkillAsEquipmentEffect | undefined {
  if (!data || !lv) {
    return undefined;
  }

  const effectLv = calculateSkillEffectLv(lv, fullLinkBonus, affectionBonus);
  if ('effects' in data) {
    const effects = calculateEffects(data.effects, lv, effectLv);
    return {
      area: calculateArea(data.area, lv),
      effects
    };
  } else {
    const equipment_effects = calculateEffects(data.equipment_effects, lv, effectLv);
    return {
      area: calculateArea(data.area, lv),
      equipment_effects
    };
  }
}
