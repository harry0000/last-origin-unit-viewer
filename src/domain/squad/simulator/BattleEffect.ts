import { Effect } from '../../Effect';
import {
  EquipmentEffectActivationState,
  EquipmentEffectKey,
  EquipmentEffectValue
} from '../../equipment/EquipmentEffect';
import { MultipleMilliPercentageEffectKey } from '../../skill/SkillEffect';
import {
  SkillEffectActivationState,
  isAffectedAnyTypeEffect,
  isAffectedSkillEffect
} from '../../skill/SkillEffectActivationCondition';
import { SkillEffectKey, SkillEffectValue } from '../../skill/UnitSkills';
import { SkillEffectScaleFactor } from '../../skill/SkillEffectScaleFactor';
import { SkillEffectType } from '../../skill/SkillEffectType';
import { SourceOfEffect } from './SourceOfEffect';
import { compare } from './BattleEffectComparator';
import { matchAffectedEquipmentState, matchAffectedState } from './ConditionMatcher';
import {
  productMicroValue,
  productMilliPercentageValue,
  productMilliValue,
  productValue
} from '../../ValueUnit';

import { Sequence, isReadonlyArray } from '../../../util/type';
import { dropWhile, partition } from '../../../util/array';
import { typedEntries } from '../../../util/object';

type MultipleSkillEffectValue<T> = T | ReadonlyArray<T>
type ExtractMultipleSkillEffectValue<T> = T extends MultipleSkillEffectValue<infer U> ? U : T

type EffectInBattle = SkillEffectKey | EquipmentEffectKey

type SkillBattleEffectValue<K extends SkillEffectKey> = ExtractMultipleSkillEffectValue<NonNullable<SkillEffectValue[K]>>
type EquipmentBattleEffectValue<K extends EquipmentEffectKey> = NonNullable<EquipmentEffectValue[K]>

type EffectValue<E extends EffectInBattle> =
  E extends EquipmentEffectKey ?
    E extends SkillEffectKey ?
      SkillBattleEffectValue<E> | EquipmentBattleEffectValue<E> :
      EquipmentBattleEffectValue<E> :
    E extends SkillEffectKey ?
      SkillBattleEffectValue<E> :
      never

export type EffectDetails<E extends EffectInBattle> =
  Readonly<{
    effect: E,
    value: EffectValue<E>,
    type: SkillEffectType
  }>

type EffectScaled = Readonly<{
  scaled?: Readonly<{
    by: SkillEffectScaleFactor,
    value: Sequence<14> // 5 (allies) + 9 (enemies)
  }>
}>

type EffectSource = Readonly<{
  affected_by: SourceOfEffect
}>

type MakeBattleEffect<T extends EffectInBattle> = EffectDetails<T> & EffectScaled & EffectSource

type AtkEffect = typeof Effect['AtkUp' | 'AtkDown']
type AtkValueUpEffect = typeof Effect['AtkValueUp']
type AtkValueUpByUnitEffect = typeof Effect['AtkValueUpByUnitValue']
type DefEffect = typeof Effect['DefUp' | 'DefDown']
type DefValueUpEffect = typeof Effect['DefValueUp']
type AccEffect = typeof Effect['AccUp' | 'AccDown']
type EvaEffect = typeof Effect['EvaUp' | 'EvaDown']
type CriEffect = typeof Effect['CriUp' | 'CriDown']
type SpdEffect = typeof Effect['SpdUp' | 'SpdDown']
type ApEffect = typeof Effect['ApUp' | 'ApDown' | 'SetAp']
type FireResistEffect = typeof Effect['FireResistUp' | 'FireResistDown']
type IceResistEffect = typeof Effect['IceResistUp' | 'IceResistDown']
type ElectricResistEffect = typeof Effect['ElectricResistUp' | 'ElectricResistDown']

type StatusEffect =
  AtkEffect | AtkValueUpEffect | AtkValueUpByUnitEffect |
  DefEffect | DefValueUpEffect |
  AccEffect |
  EvaEffect |
  CriEffect |
  SpdEffect |
  ApEffect |
  FireResistEffect |
  IceResistEffect |
  ElectricResistEffect

export type AtkBattleEffect = MakeBattleEffect<AtkEffect>
export type AtkValueUpBattleEffect = MakeBattleEffect<AtkValueUpEffect>
export type AtkValueUpByUnitBattleEffect = MakeBattleEffect<AtkValueUpByUnitEffect>
export type DefBattleEffect = MakeBattleEffect<DefEffect>
export type DefValueUpBattleEffect = MakeBattleEffect<DefValueUpEffect>
export type AccBattleEffect = MakeBattleEffect<AccEffect>
export type EvaBattleEffect = MakeBattleEffect<EvaEffect>
export type CriBattleEffect = MakeBattleEffect<CriEffect>
export type SpdBattleEffect = MakeBattleEffect<SpdEffect>
export type ApBattleEffect = MakeBattleEffect<ApEffect>
export type FireResistBattleEffect = MakeBattleEffect<FireResistEffect>
export type IceResistBattleEffect = MakeBattleEffect<IceResistEffect>
export type ElectricResistBattleEffect = MakeBattleEffect<ElectricResistEffect>

export function isStatusBattleEffect<E extends StatusEffect>(
  effect: E,
  battleEffect: BattleEffect
): battleEffect is MakeBattleEffect<E> {
  return battleEffect.effect === effect;
}

type AllRemovalEffect = typeof Effect['AllBuffRemoval' | 'AllDebuffRemoval']
type BuffDebuffRemovalEffect = typeof Effect['BuffRemoval' | 'DebuffRemoval']

type RemovalEffect = typeof Effect['TagUnstack' | 'TagRelease'] | AllRemovalEffect | BuffDebuffRemovalEffect

type TagUnstackBattleEffect = MakeBattleEffect<typeof Effect.TagUnstack>
type TagReleaseBattleEffect = MakeBattleEffect<typeof Effect.TagRelease>
type AllEffectRemovalBattleEffect = MakeBattleEffect<AllRemovalEffect>
type BuffDebuffRemovalBattleEffect = MakeBattleEffect<BuffDebuffRemovalEffect>

type RemovalBattleEffect =
  TagUnstackBattleEffect |
  TagReleaseBattleEffect |
  AllEffectRemovalBattleEffect |
  BuffDebuffRemovalBattleEffect

type ExcludeTagUnstackRemovalBattleEffect =
  Extract<RemovalBattleEffect, { effect: Exclude<RemovalEffect, typeof Effect.TagUnstack> }>

type SkillBattleEffect = MakeBattleEffect<SkillEffectKey>
type EquipmentBattleEffect = MakeBattleEffect<EquipmentEffectKey>

type AppliedBattleEffect =
  Exclude<SkillBattleEffect | EquipmentBattleEffect, RemovalBattleEffect>

export type BattleEffect = AppliedBattleEffect | MakeBattleEffect<StatusEffect>

type MultipleValueSkillEffectKey = typeof Effect.TagRelease | MultipleMilliPercentageEffectKey
type SingleValueSkillEffectKey = Exclude<SkillEffectKey, typeof Effect.TagRelease | MultipleMilliPercentageEffectKey>

function buildSkillBattleEffect(
  entry:
    readonly [effect: MultipleValueSkillEffectKey, value: NonNullable<SkillEffectValue[MultipleValueSkillEffectKey]>] |
    readonly [effect: SingleValueSkillEffectKey, value: NonNullable<SkillEffectValue[SingleValueSkillEffectKey]>],
  type: SkillEffectType,
  affected_by: SourceOfEffect,
  scaled?: BattleEffect['scaled']
): ReadonlyArray<SkillBattleEffect> {
  const build = (
    effect: MultipleValueSkillEffectKey | SingleValueSkillEffectKey,
    value: NonNullable<SkillEffectValue[SingleValueSkillEffectKey]>,
    type: SkillEffectType,
    affected_by: SourceOfEffect,
    scaled?: BattleEffect['scaled']
  ): SkillBattleEffect => {
    return scaled ?
      { effect, value: applyScaling(value, scaled), type, affected_by, scaled } :
      { effect, value, type, affected_by };
  };
  const isMultipleValueEntry = (arg: typeof entry): arg is readonly [effect: MultipleValueSkillEffectKey, value: NonNullable<SkillEffectValue[MultipleValueSkillEffectKey]>] => {
    switch (arg[0]) {
    case Effect.TagRelease:
    case Effect.DamageMultiplierDown:
    case Effect.DefDown:
    case Effect.AccDown:
    case Effect.CriDown:
    case Effect.EvaUp:
    case Effect.StatusResistUp:
      return true;
    default:
      return false;
    }
  };

  // FIXME: Currently, every effect value does not have a SkillEffectType per value.
  //        As a temporary response, values with `cannot_be_dispelled` field are considered general type effects.
  const fixed_type = 'cannot_be_dispelled' in entry[1] ? SkillEffectType.General : type;

  return (
    isMultipleValueEntry(entry) ?
      isReadonlyArray(entry[1]) ?
        entry[1].map(v => build(entry[0], v, fixed_type, affected_by, scaled)) :
        [build(entry[0], entry[1], fixed_type, affected_by, scaled)] :
      [build(entry[0], entry[1], fixed_type, affected_by, scaled)]
  );
}

function buildEquipmentBattleEffect<K extends EquipmentEffectKey>(
  [effect, value]: readonly [effect: K, value: NonNullable<EquipmentEffectValue[K]>],
  type: SkillEffectType,
  affected_by: SourceOfEffect
): EquipmentBattleEffect {
  return { effect, value, type, affected_by };
}

function applyScaling(
  value: NonNullable<SkillEffectValue[SingleValueSkillEffectKey]>,
  scaled: NonNullable<BattleEffect['scaled']>
): NonNullable<SkillEffectValue[SingleValueSkillEffectKey]> {
  // HACK: Currently, InverselyProportional scale_factor does not exist at the start of the round.
  // FIXME: implement 221:RF87 Roc's passive3 skill effect scale_factor.
  if ('value' in value) {
    return { ...value, ...productValue(value, scaled.value) };
  } else if ('milliValue' in value) {
    return { ...value, ...productMilliValue(value, scaled.value) };
  } else if ('microValue' in value) {
    return { ...value, ...productMicroValue(value, scaled.value) };
  } else if ('milliPercentage' in value) {
    return { ...value, ...productMilliPercentageValue(value, scaled.value) };
  }

  return value;
}

function pickDependencyRoot({ effect, type }: AppliedBattleEffect): boolean {
  return (
    isAffectedAnyTypeEffect(effect) ||
    isAffectedSkillEffect(effect) && type !== 'general'
  );
}

function pickRemovalEffect(arg: SkillBattleEffect | EquipmentBattleEffect): arg is RemovalBattleEffect {
  switch (arg.effect) {
  case Effect.TagUnstack:
  case Effect.TagRelease:
  case Effect.AllBuffRemoval:
  case Effect.AllDebuffRemoval:
  case Effect.BuffRemoval:
  case Effect.DebuffRemoval:
    return true;
  default:
    return false;
  }
}

function isTagUnstackRemoval(arg: RemovalBattleEffect): arg is TagUnstackBattleEffect {
  return arg.effect === Effect.TagUnstack;
}

function dropMatchRemovals(
  effects: ReadonlyArray<AppliedBattleEffect>,
  effectRemovals: ReadonlyArray<RemovalBattleEffect>
): Array<AppliedBattleEffect> {
  const results = [...effects];
  if (effectRemovals.length === 0) {
    return results;
  }

  const [tagUnstack, removals] = partition<TagUnstackBattleEffect, ExcludeTagUnstackRemovalBattleEffect>(
    effectRemovals,
    isTagUnstackRemoval
  );

  tagUnstack.forEach(({ value: { tag } }) => {
    // HACK: Currently, always drop 1 tagged effect.
    const i = results.findIndex(({ value }) => 'tag' in value && value.tag === tag);
    if (i >= 0) {
      results.splice(i, 1);
    }
  });

  dropWhile(results, matchRemovals(removals));

  return results;
}

function matchRemovals(
  effectRemovals: ReadonlyArray<ExcludeTagUnstackRemovalBattleEffect>
): (battleEffect: AppliedBattleEffect) => boolean {
  return (battleEffect) => {
    const { type, value } = battleEffect;
    if ('cannot_be_dispelled' in value) {
      return false;
    }

    return effectRemovals.some(removal => {
      switch (removal.effect) {
      case Effect.TagRelease:
        return matchReleaseTag(removal, battleEffect);
      case Effect.BuffRemoval:
        return type === SkillEffectType.Buff && matchRemovalEffect(removal, battleEffect);
      case Effect.DebuffRemoval:
        return type === SkillEffectType.DeBuff && matchRemovalEffect(removal, battleEffect);
      case Effect.AllDebuffRemoval:
        return type === SkillEffectType.DeBuff;
      case Effect.AllBuffRemoval:
        // HACK: only active skill effect or enemy target effect.
        return true;
      }
    });
  };
}

function matchReleaseTag(
  cond: TagReleaseBattleEffect,
  { value }: AppliedBattleEffect,
): boolean {
  return 'tag' in value && cond.value.tag === value.tag;
}

function matchRemovalEffect(
  cond: BuffDebuffRemovalBattleEffect,
  { effect, value }: AppliedBattleEffect,
): boolean {
  if (
    'tag' in cond.value &&
    (!('tag' in value) || cond.value.tag !== value.tag)
  ) {
    return false;
  }

  return 'effect' in cond.value ?
    cond.value.effect === effect :
    cond.value.effects.some(e => e === effect);
}

function matchSelfAffectedState(
  state: SkillEffectActivationState,
  affected: ReadonlyArray<AppliedBattleEffect>
): boolean {
  return !('self' in state) || matchAffectedState(state.self, affected);
}

function matchTargetAffectedState(
  state: SkillEffectActivationState,
  affected: ReadonlyArray<AppliedBattleEffect>
): boolean {
  return !('target' in state) || matchAffectedState(state.target, affected);
}

type ApplicationCandidate = [
  state: SkillEffectActivationState,
  value: SkillEffectValue,
  type: SkillEffectType,
  affected_by: SourceOfEffect,
  scaled?: BattleEffect['scaled']
]

export class BattleEffects {

  readonly #effects: Array<AppliedBattleEffect>;
  readonly #affectedStateRoots: Array<AppliedBattleEffect>;
  readonly #effectRemovals: Array<RemovalBattleEffect>;

  readonly #targetEffectsPool: Array<ApplicationCandidate>;

  constructor() {
    this.#effects = [];
    this.#affectedStateRoots = [];
    this.#effectRemovals = [];
    this.#targetEffectsPool = [];
  }

  build(): ReadonlyArray<AppliedBattleEffect> {
    // TODO: Remove debuff effects if status_resist summary exceeds 100% or prevents_effect exists.
    return dropMatchRemovals(this.#effects, this.#effectRemovals).sort(compare);
  }

  #recheckPool(newAffectedStateRoots: ReadonlyArray<AppliedBattleEffect>): void {
    let roots = newAffectedStateRoots;
    while (
      this.#targetEffectsPool.length !== 0 &&
      roots.length !== 0
    ) {
      const appliedRoots: Array<AppliedBattleEffect> = [];

      dropWhile(
        this.#targetEffectsPool,
        ([state, value, type, affected_by, scaled]) => {
          const matched = matchTargetAffectedState(state, roots);
          if (matched) {
            appliedRoots.push(
              ...this.#pushEffectsAndRoots(
                typedEntries(value).flatMap(entry => buildSkillBattleEffect(entry, type, affected_by, scaled))
              )
            );
          }

          return matched;
        }
      );

      roots = appliedRoots;
    }
  }

  #pushEffectsAndRoots(effects: ReadonlyArray<SkillBattleEffect | EquipmentBattleEffect>): ReadonlyArray<AppliedBattleEffect> {
    const [removals, newEffects] = partition<RemovalBattleEffect, AppliedBattleEffect>(effects, pickRemovalEffect);
    const newRoots = newEffects.filter(pickDependencyRoot);

    // TODO: check max_stack
    this.#effects.push(...newEffects);
    this.#affectedStateRoots.push(...newRoots);
    this.#effectRemovals.push(...removals);

    return newRoots;
  }

  #applyEffects(effects: ReadonlyArray<SkillBattleEffect>): void;
  #applyEffects(effects: ReadonlyArray<EquipmentBattleEffect>): void;
  #applyEffects(effects: ReadonlyArray<SkillBattleEffect> | ReadonlyArray<EquipmentBattleEffect>): void {
    const newRoots = this.#pushEffectsAndRoots(effects);
    this.#recheckPool(newRoots);
  }

  applySkillEffects(
    value: SkillEffectValue,
    type: SkillEffectType,
    affected_by: SourceOfEffect,
    scaled?: BattleEffect['scaled']
  ): void {
    this.#applyEffects(typedEntries(value).flatMap(entry => buildSkillBattleEffect(entry, type, affected_by, scaled)));
  }

  applyEquipmentEffects(
    value: EquipmentEffectValue,
    type: SkillEffectType,
    affected_by: SourceOfEffect
  ): void {
    this.#applyEffects(typedEntries(value).map(entry => buildEquipmentBattleEffect(entry, type, affected_by)));
  }

  tryApplyingTargetSkillEffects(...args: ApplicationCandidate): void {
    const [state, value, type, affected_by, scaled] = args;

    if (this.matchTargetAffectedState(state)) {
      this.applySkillEffects(value, type, affected_by, scaled);
    } else {
      this.#targetEffectsPool.push(args);
    }
  }

  matchSelfAffectedState(state: SkillEffectActivationState): boolean {
    return matchSelfAffectedState(state, this.#affectedStateRoots);
  }

  matchTargetAffectedState(state: SkillEffectActivationState): boolean {
    return matchTargetAffectedState(state, this.#affectedStateRoots);
  }

  matchAffectedEquipmentState(state: EquipmentEffectActivationState): boolean {
    return matchAffectedEquipmentState(state, this.#affectedStateRoots);
  }
}
