import {
  ActiveSkillData,
  PassiveSkillData,
  PassiveSkillDataAsEquipmentEffect,
  SkillApCostData,
  SkillApCostValue,
  SkillAreaOfEffectData,
  UnitSkillData
} from './UnitSkillData';
import {
  Active1Skill,
  Active2Skill,
  FormlessActiveSkill,
  FormlessPassiveSkillAsEquipmentEffect,
  FormlessPassiveSkill,
  FormlessPassive1Skill,
  Passive1Skill,
  Passive2Skill,
  Passive3Skill,
  SkillEffect,
  SkillEffectValue,
  AroundSkillEffectValue
} from './UnitSkills';
import { SkillAreaType } from './SkillAreaOfEffect';
import { AroundSkillEffectDataValue, SkillEffectData, SkillEffectDataValue } from './SkillEffectData';
import { UnitBasicData, UnitNumber } from '../UnitBasicInfo';
import UnitFormValue, { FormChangeUnitNumbers, FormChangeUnits } from '../UnitFormValue';
import UnitSkillLvValue, { SkillLv } from './UnitSkillLvValue';
import { unitSkillData } from '../../data/unitSkillData';
import { Effect } from '../Effect';
import { ValueUnit } from '../ValueUnit';
import { foldObjectNonNullableEntry, NonNullableEntry } from '../../util/object';
import {
  IntegerValueEffectKey,
  MicroValueEffectKey,
  MilliPercentageEffectKey, NoValueEffectKey,
  RangeUpDownEffectKey
} from './SkillEffect';

type Value<T extends ValueUnit> =
  {
    readonly [key in T]: number
  }

type PerLvValue<T extends ValueUnit> =
  {
    readonly base: { readonly [key in T]: number },
    readonly per_lv_up: { readonly [key in T]: number }
  }

function calculateDataValue<T extends ValueUnit>(unit: T, value: PerLvValue<T> | Value<T>, lv: SkillLv): Value<T> {
  if ('base' in value) {
    return { [unit]: value.base[unit] + value.per_lv_up[unit] * (lv - 1) } as { [key in T]: number };
  }

  return value;
}

function calculateDamageDeal(damageDeal: ActiveSkillData['damage_deal'], lv: SkillLv): FormlessActiveSkill['damage_deal'] {
  if (!damageDeal) {
    return undefined;
  }

  return {
    ...calculateDataValue('milliPercentage', damageDeal, lv),
    effective: damageDeal.effective,
    attribute: damageDeal.attribute
  };
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
    } else if (lv < 10) {
      return data[2];
    } else {
      return data[10];
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

type IncludeAddition = SkillEffectDataValue[Exclude<keyof SkillEffectDataValue, typeof Effect['DefDown' | 'EvaUp' | 'StatusResistUp']>]

function calculateTerm(
  term: NonNullable<IncludeAddition>['term'] | undefined,
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
  rate: NonNullable<IncludeAddition>['rate'] | undefined,
  lv: SkillLv
) {
  if (!rate || typeof rate === 'string') {
    return rate;
  }

  return calculateDataValue('milliPercentage', rate, lv);
}

function calculateTimes(
  times: NonNullable<IncludeAddition>['times'] | undefined,
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
  addition: Pick<NonNullable<IncludeAddition>, 'tag' | 'max_stack' | 'term' | 'rate' | 'times' | 'cannot_be_dispelled'>,
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
): SkillEffectValue[RangeUpDownEffectKey] {
  const value =
    typeof data.value === 'number' ?
      data.value :
      lv === 10 ?
        data.value[10] :
        data.value[1];

  if (value === 0) {
    return undefined;
  } else {
    return {
      ...calculateAddition(data, lv),
      value
    };
  }
}

function calculateIntegerValueEffectValue(
  data: NonNullable<SkillEffectDataValue[IntegerValueEffectKey]>,
  lv: SkillLv
): SkillEffectValue[IntegerValueEffectKey] {
  return {
    ...calculateAddition(data, lv),
    ...calculateDataValue('value', data, lv)
  };
}

function calculateMicroValueEffectValue(
  data: NonNullable<SkillEffectDataValue[MicroValueEffectKey]>,
  lv: SkillLv
): NonNullable<SkillEffectValue[MicroValueEffectKey]> {
  return {
    ...calculateAddition(data, lv),
    ...calculateDataValue('microValue', data, lv)
  };
}

function calculateMilliPercentageEffectValue(
  data: NonNullable<SkillEffectDataValue[Exclude<MilliPercentageEffectKey, typeof Effect['DefDown' | 'EvaUp' | 'StatusResistUp']>]>,
  lv: SkillLv
): NonNullable<SkillEffectValue[Exclude<MilliPercentageEffectKey, typeof Effect['DefDown' | 'EvaUp' | 'StatusResistUp']>]> {
  return {
    ...calculateAddition(data, lv),
    ...calculateDataValue('milliPercentage', data, lv)
  };
}

function calculateEffectValue(
  entry: NonNullableEntry<Exclude<Effect, typeof Effect.HpUp>, SkillEffectDataValue>,
  lv: SkillLv
): SkillEffectValue {
  switch (entry[0]) {
  case Effect.MinimizeDamage:
  case Effect.NullifyDamage:
  case Effect.AllBuffRemoval:
  case Effect.AllDebuffRemoval:
  case Effect.ColumnProtect:
  case Effect.RowProtect:
  case Effect.TargetProtect:
  case Effect.FollowUpAttack:
  case Effect.IgnoreBarrierDr:
  case Effect.IgnoreDr:
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
  case Effect.TagStack:
  case Effect.TagRelease:
    // HACK: tag property of 'TagStack' and 'TagRelease' is calculated as addition.
    return { [entry[0]]: calculateAddition(entry[1], lv) };
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
    return { [entry[0]]: calculateIntegerValueEffectValue(entry[1], lv) };
  case Effect.ApUp:
  case Effect.ApDown:
  case Effect.SetAp:
    return { [entry[0]]: calculateMicroValueEffectValue(entry[1], lv) };
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
        milliPercentage: entry[1].milliPercentage
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
  case Effect.EvaUp:
  case Effect.StatusResistUp:
    if ('length' in entry[1]) {
      return { [entry[0]]: entry[1].map(v => calculateMilliPercentageEffectValue(v, lv)) };
    }
    return { [entry[0]]: calculateMilliPercentageEffectValue(entry[1], lv) };
  default: {
    return { [entry[0]]: calculateMilliPercentageEffectValue(entry[1], lv) };
  }
  }
}

function calculateEffectDataValue(data: SkillEffectDataValue | undefined, lv: SkillLv): SkillEffectValue | undefined {
  if (!data) {
    return undefined;
  }

  return foldObjectNonNullableEntry(data, entry => calculateEffectValue(entry, lv))({});
}

function calculateAroundEffectDataValue(data: AroundSkillEffectDataValue | undefined, lv: SkillLv): AroundSkillEffectValue | undefined {
  if (!data || !data.fixed_damage) {
    return undefined;
  }

  return {
    fixed_damage: {
      ...calculateDataValue('milliPercentage', data.fixed_damage, lv),
      ...calculateAddition(data.fixed_damage, lv)
    }
  };
}

function calculateEffect(data: SkillEffectData, lv: SkillLv): SkillEffect {
  return {
    conditions: data.conditions,
    effective: data.effective,
    scale_factor: data.scale_factor,
    details: {
      self: calculateEffectDataValue(data.details.self, lv),
      target: calculateEffectDataValue(data.details.target, lv),
      around: calculateAroundEffectDataValue(data.details.around, lv)
    }
  };
}

function calculateEffects(data: ReadonlyArray<SkillEffectData>, lv: SkillLv): ReadonlyArray<SkillEffect> {
  return data.map(effect => calculateEffect(effect, lv));
}

function calculateActiveSkill(data: ActiveSkillData, lv: SkillLv): FormlessActiveSkill {
  return {
    damage_deal: calculateDamageDeal(data.damage_deal, lv),
    cost: calculateApCost(data.cost, lv),
    range: data.range,
    area: calculateArea(data.area, lv),
    effects: calculateEffects(data.effects, lv)
  };
}

function calculateActiveSkills(
  active: UnitSkillData[Exclude<UnitNumber, FormChangeUnitNumbers>]['active'],
  skillLvValue: UnitSkillLvValue
): readonly [FormlessActiveSkill, FormlessActiveSkill] {
  return [
    calculateActiveSkill(active[0], skillLvValue.active1Lv),
    calculateActiveSkill(active[1], skillLvValue.active2Lv),
  ];
}

function calculatePassiveSkill(data: PassiveSkillData, lv: SkillLv | undefined): FormlessPassiveSkill | undefined
function calculatePassiveSkill(data: PassiveSkillDataAsEquipmentEffect, lv: SkillLv | undefined): FormlessPassiveSkillAsEquipmentEffect | undefined
function calculatePassiveSkill(data: PassiveSkillData | PassiveSkillDataAsEquipmentEffect, lv: SkillLv | undefined): FormlessPassiveSkill | FormlessPassiveSkillAsEquipmentEffect | undefined
function calculatePassiveSkill(data: PassiveSkillData | PassiveSkillDataAsEquipmentEffect, lv: SkillLv | undefined): FormlessPassiveSkill | FormlessPassiveSkillAsEquipmentEffect | undefined {
  if (!lv) {
    return undefined;
  } else if ('effects' in data) {
    const effects = calculateEffects(data.effects, lv);
    return {
      area: calculateArea(data.area, lv),
      effects
    };
  } else {
    const equipment_effects = calculateEffects(data.equipment_effects, lv);
    return {
      area: calculateArea(data.area, lv),
      equipment_effects
    };
  }
}

function calculatePassiveSkills(
  passive: UnitSkillData[Exclude<UnitNumber, FormChangeUnitNumbers>]['passive'],
  skillLvValue: UnitSkillLvValue
): [FormlessPassiveSkill | FormlessPassiveSkillAsEquipmentEffect | undefined, FormlessPassiveSkill | undefined, FormlessPassiveSkill | undefined] {
  const ps1 = passive.length > 0 ? passive[0] : undefined;
  const ps2 = passive.length > 1 ? passive[1] : undefined;
  const ps3 = passive.length > 2 ? passive[2] : undefined;

  return [
    ps1 ? calculatePassiveSkill(ps1, skillLvValue.passive1Lv) : undefined,
    ps2 ? calculatePassiveSkill(ps2, skillLvValue.passive2Lv) : undefined,
    ps3 ? calculatePassiveSkill(ps3, skillLvValue.passive3Lv) : undefined
  ];
}

export function calculateUnitSkill<N extends Exclude<UnitNumber, FormChangeUnitNumbers>>(
  unitNumber: N,
  skillLv: UnitSkillLvValue
): [FormlessActiveSkill, FormlessActiveSkill, FormlessPassive1Skill | undefined, FormlessPassiveSkill | undefined, FormlessPassiveSkill | undefined] {
  const skillData = unitSkillData[unitNumber];

  return [
    ...calculateActiveSkills(skillData.active, skillLv),
    ...calculatePassiveSkills(skillData.passive, skillLv)
  ];
}

type Args = Readonly<
  { unitNumber: typeof FormChangeUnits.Alexandra,     skillLv: UnitSkillLvValue, form: UnitFormValue<typeof FormChangeUnits.Alexandra>     } |
  { unitNumber: typeof FormChangeUnits.Leona,         skillLv: UnitSkillLvValue, form: UnitFormValue<typeof FormChangeUnits.Leona>         } |
  { unitNumber: typeof FormChangeUnits.BloodyPanther, skillLv: UnitSkillLvValue, form: UnitFormValue<typeof FormChangeUnits.BloodyPanther> } |
  { unitNumber: typeof FormChangeUnits.Emily,         skillLv: UnitSkillLvValue, form: UnitFormValue<typeof FormChangeUnits.Emily>         } |
  { unitNumber: typeof FormChangeUnits.Phantom,       skillLv: UnitSkillLvValue, form: UnitFormValue<typeof FormChangeUnits.Phantom>       } |
  { unitNumber: typeof FormChangeUnits.Siren,         skillLv: UnitSkillLvValue, form: UnitFormValue<typeof FormChangeUnits.Siren>         } |
  { unitNumber: typeof FormChangeUnits.Fortress,      skillLv: UnitSkillLvValue, form: UnitFormValue<typeof FormChangeUnits.Fortress>      }
>

export function calculateFormChangeUnitSkill(
  args: Args
): [Active1Skill, Active2Skill, Passive1Skill | undefined, Passive2Skill | undefined, Passive3Skill | undefined] {
  switch (args.unitNumber) {
  case FormChangeUnits.Alexandra: {
    const skillData = unitSkillData[args.unitNumber];
    const form = args.form.unitForm;
    return [
      Object.assign(calculateActiveSkill(skillData.active[0][form], args.skillLv.active1Lv), { form }),
      Object.assign(calculateActiveSkill(skillData.active[1][form], args.skillLv.active2Lv), { form }),
      Object.assign(calculatePassiveSkill(skillData.passive[0][form], args.skillLv.passive1Lv), { form }),
      calculatePassiveSkill(skillData.passive[1], args.skillLv.passive2Lv),
      calculatePassiveSkill(skillData.passive[2], args.skillLv.passive3Lv)
    ];
  }
  case FormChangeUnits.Leona: {
    const skillData = unitSkillData[args.unitNumber];
    const form = args.form.unitForm;
    return [
      ...calculateActiveSkills(skillData.active, args.skillLv),
      Object.assign(calculatePassiveSkill(skillData.passive[0][form], args.skillLv.passive1Lv), { form }),
      Object.assign(calculatePassiveSkill(skillData.passive[1][form], args.skillLv.passive2Lv), { form }),
      calculatePassiveSkill(skillData.passive[2], args.skillLv.passive3Lv)
    ];
  }
  case FormChangeUnits.BloodyPanther: {
    const skillData = unitSkillData[args.unitNumber];
    const form = args.form.unitForm;
    return [
      Object.assign(calculateActiveSkill(skillData.active[0][form], args.skillLv.active1Lv), { form }),
      Object.assign(calculateActiveSkill(skillData.active[1][form], args.skillLv.active2Lv), { form }),
      calculatePassiveSkill(skillData.passive[0], args.skillLv.passive1Lv),
      calculatePassiveSkill(skillData.passive[1], args.skillLv.passive2Lv),
      Object.assign(calculatePassiveSkill(skillData.passive[2][form], args.skillLv.passive3Lv), { form })
    ];
  }
  case FormChangeUnits.Emily: {
    const skillData = unitSkillData[args.unitNumber];
    const form = args.form.unitForm;
    return [
      calculateActiveSkill(skillData.active[0], args.skillLv.active1Lv),
      Object.assign(calculateActiveSkill(skillData.active[1][form], args.skillLv.active2Lv), { form }),
      calculatePassiveSkill(skillData.passive[0], args.skillLv.passive1Lv),
      calculatePassiveSkill(skillData.passive[1], args.skillLv.passive2Lv),
      calculatePassiveSkill(skillData.passive[2], args.skillLv.passive3Lv)
    ];
  }
  case FormChangeUnits.Phantom: {
    const skillData = unitSkillData[args.unitNumber];
    const form = args.form.unitForm;
    return [
      Object.assign(calculateActiveSkill(skillData.active[0][form], args.skillLv.active1Lv), { form }),
      Object.assign(calculateActiveSkill(skillData.active[1][form], args.skillLv.active2Lv), { form }),
      Object.assign(calculatePassiveSkill(skillData.passive[0][form], args.skillLv.passive1Lv), { form }),
      calculatePassiveSkill(skillData.passive[1], args.skillLv.passive2Lv),
      undefined
    ];
  }
  case FormChangeUnits.Siren: {
    const skillData = unitSkillData[args.unitNumber];
    const form = args.form.unitForm;
    return [
      Object.assign(calculateActiveSkill(skillData.active[0][form], args.skillLv.active1Lv), { form }),
      Object.assign(calculateActiveSkill(skillData.active[1][form], args.skillLv.active2Lv), { form }),
      calculatePassiveSkill(skillData.passive[0], args.skillLv.passive1Lv),
      Object.assign(calculatePassiveSkill(skillData.passive[1][form], args.skillLv.passive2Lv), { form }),
      calculatePassiveSkill(skillData.passive[2], args.skillLv.passive3Lv)
    ];
  }
  case FormChangeUnits.Fortress: {
    const skillData = unitSkillData[args.unitNumber];
    const form = args.form.unitForm;
    return [
      Object.assign(calculateActiveSkill(skillData.active[0][form], args.skillLv.active1Lv), { form }),
      Object.assign(calculateActiveSkill(skillData.active[1][form], args.skillLv.active2Lv), { form }),
      Object.assign(calculatePassiveSkill(skillData.passive[0][form], args.skillLv.passive1Lv), { form }),
      undefined,
      undefined
    ];
  }
  }
}
