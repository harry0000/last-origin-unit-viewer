import { Effect } from '../Effect';
import { EffectActivationState } from '../EffectActivationState';
import { EffectTrigger } from '../EffectTrigger';
import { EquipmentId } from '../equipment/EquipmentData';
import { SkillAreaType } from './SkillAreaOfEffect';
import { SkillEffectTag } from './SkillEffectTag';
import { UnitAlias } from '../UnitAlias';
import { UnitForms } from '../UnitFormValue';
import { UnitKind, UnitNumber, UnitRank, UnitRole, UnitType } from '../UnitBasicInfo';

export type UnitNotAlias = {
  not_alias: typeof UnitAlias['AngerOfHorde' | 'KouheiChurch']
}

export type UnitTypeAndRole = {
  type: UnitType,
  role: UnitRole
}

export type UnitAliasAndType = {
  alias: UnitAlias,
  type: UnitType
} | {
  not_alias: typeof UnitAlias.MagicalGirl,
  type: typeof UnitType.Light
}

export type UnitAliasAndRole<A extends UnitAlias = UnitAlias, R extends UnitRole = UnitRole> = {
  alias: A,
  role: R
}

export type UnitAliasExceptUnit<
  A extends UnitAlias = UnitAlias,
  E extends UnitNumber = UnitNumber
> = {
  alias: A,
  except: E
}

export type ExceptUnit<
  E extends UnitNumber = UnitNumber
> = {
  except: E
}

export const GridState = {
  FrontLine: 'front_line',
  MidLine: 'mid_line',
  BackLine: 'back_line',
  AreaOfEffect: 'area_of_effect',
  SameLine: 'same_line'
} as const;
export type GridState = typeof GridState[keyof typeof GridState]

type HPRateEffectActivationStateKey =
  typeof EffectActivationState['HpGreaterOrEqual' | 'HpLessOrEqual' | 'HpGreaterThan' | 'HpLessThan']

type StatusEffectActivationStateKey =
  typeof EffectActivationState['StatusGreaterThanSelf' | 'StatusLessThanSelf']

type AffectedByActivationState =
  Readonly<{
    [EffectActivationState.AffectedBy]:
      { unit: 9 | 54 | 55 | 133 | 135 } |
      { unit: 23, effect: typeof Effect.FollowUpAttack } |
      { unit: 83 | 134, effect: typeof Effect.TargetProtect } |
      { unit: 171, effect: typeof Effect.Marked } |
      UnitAliasExceptUnit<typeof UnitAlias.MongooseTeam, 80> |
      UnitAliasExceptUnit<typeof UnitAlias.Strikers, 150> |
      { equipment: 'hot_pack', effect: typeof Effect.MinimumIceResistUp }
  }>

type NotAffectedActivationState =
  Readonly<{
    [EffectActivationState.NotAffected]?:
      readonly [typeof Effect.DefUp, typeof Effect.DamageReductionUp] |
      readonly [typeof Effect.SpdUp] |
      readonly [typeof Effect.DamageReductionUp] |
      readonly [typeof Effect.BattleContinuation] |
      readonly [typeof Effect.RowProtect] |
      readonly [typeof Effect.Marked]
  }>

const AffectedSkillEffect = [
  Effect.AtkUp,
  Effect.AtkDown,
  Effect.DefUp,
  Effect.DefDown,
  Effect.AccUp,
  Effect.AccDown,
  Effect.EvaUp,
  Effect.EvaDown,
  Effect.CriUp,
  Effect.CriDown,
  Effect.SpdUp,
  Effect.SpdDown,
  Effect.FireResistUp,
  Effect.FireResistDown,
  Effect.IceResistUp,
  Effect.IceResistDown,
  Effect.ElectricResistUp,
  Effect.ElectricResistDown,
  Effect.StatusResistUp,
  Effect.RangeUp,
  Effect.LightTypeDamageUp,
  Effect.HeavyTypeDamageUp,
  Effect.AdditionalDamageFocusing,
  Effect.FixedDamageOverTime,
  Effect.FixedFireDamageOverTime,
  Effect.ActionCountUp,
  Effect.ActionCountDown,
  Effect.DamageMultiplierUp,
  Effect.DamageMultiplierDown,
  Effect.DamageMultiplierUpByStatus,
  Effect.DefensePenetration,
  Effect.DamageTakenIncreased,
  Effect.DamageReductionUp,
  Effect.MinimizeDamage,
  Effect.Barrier,
  Effect.FollowUpAttack,
  Effect.IgnoreBarrierDr,
  Effect.IgnoreProtect,
  Effect.Provoked,
  Effect.Immovable,
  Effect.Stunned
] as const;
export type AffectedSkillEffect = typeof AffectedSkillEffect extends ReadonlyArray<infer T> ? T : never;

const affectedSkillEffectSet: ReadonlySet<Effect> = new Set(AffectedSkillEffect);
export function isAffectedSkillEffect(arg: Effect): arg is AffectedSkillEffect {
  return affectedSkillEffectSet.has(arg);
}

const AffectedAnyTypeEffect = [
  Effect.MinimumIceResistUp,
  Effect.BattleContinuation,
  Effect.TagStack,
  Effect.ColumnProtect,
  Effect.RowProtect,
  Effect.TargetProtect,
  Effect.Counterattack,
  Effect.Reconnaissance,
  Effect.Marked
] as const;
export type AffectedAnyTypeEffect = typeof AffectedAnyTypeEffect extends ReadonlyArray<infer T> ? T : never;

const affectedAnyTypeEffect: ReadonlySet<Effect> = new Set(AffectedAnyTypeEffect);
export function isAffectedAnyTypeEffect(arg: Effect): arg is AffectedAnyTypeEffect {
  return affectedAnyTypeEffect.has(arg);
}

export type AffectedEffect = AffectedSkillEffect | AffectedAnyTypeEffect

type ActivationState =
  {
    [key in HPRateEffectActivationStateKey]?: number
  } &
  {
    [EffectActivationState.Affected]?: AffectedEffect
  } &
  {
    [EffectActivationState.TaggedAffected]?: {
      tag: SkillEffectTag,
      effect: AffectedEffect
    }
  } &
  {
    [EffectActivationState.Stack]?: {
      tag: SkillEffectTag,
      effect: AffectedEffect,
      greater_or_equal: 3 | 5
    } | ({
      tag: SkillEffectTag,
    } & (
      { equal: 1 | 2 | 3 } |
      { greater_or_equal: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 9 } |
      { less_or_equal: 2 }
    )) | {
      tag: readonly ['power_of_true_blood_death_eye', 'power_of_true_blood_fate_control', 'power_of_true_blood_deathless'],
      greater_or_equal: 2
    }
  } |
  AffectedByActivationState

export type ActivationSelfState =
  ActivationState &
  {
    [EffectActivationState.Grid]?: Exclude<GridState, typeof GridState.SameLine>
  }  &
  {
    [EffectActivationState.NotTagged]?: SkillEffectTag
  } &
  {
    [EffectActivationState.Form]?: UnitForms
  } &
  {
    [EffectActivationState.Equipped]?: EquipmentId
  } &
  {
    [EffectActivationState.NotEquipped]?: ReadonlyArray<EquipmentId>
  } &
  {
    [EffectActivationState.Tagged]?: SkillEffectTag
  } &
  {
    [EffectActivationState.NotAffected]?:
      // The following are AND conditions
      readonly [typeof Effect.Counterattack] |
      readonly [typeof Effect.Reconnaissance] |
      readonly [typeof Effect.FollowUpAttack] |
      readonly [typeof Effect.FollowUpAttack, typeof Effect.TargetProtect]
  } &
  {
    [EffectActivationState.StatusGreaterOrEqualThan]?: {
      status: 'atk' | 'def',
      than: 'atk' | 'def',
      value: number
    }
  } &
  {
    // for Tommy Walker
    [EffectActivationState.RankGreaterOrEqual]?: typeof UnitRank.S
  }

export type ActivationTargetState =
  ActivationState &
  {
    [EffectActivationState.Grid]?: Exclude<GridState, typeof GridState.AreaOfEffect>
  } &
  {
    [key in StatusEffectActivationStateKey]?: {
      status: 'atk' | 'def' | 'acc' | 'eva' | 'cri' | 'spd'
    }
  } &
  {
    [EffectActivationState.Unit]?: typeof UnitAlias.SteelLine | typeof UnitType.Flying
  } &
  {
    [EffectActivationState.Tagged]?:
      SkillEffectTag |
      // The following is AND condition
      readonly ['eternal_true_bloods_flash', 'cyclops_eternal_beam']
  } &
  {
    [EffectActivationState.NotTagged]?: 'vafrlogi'
  } &
  NotAffectedActivationState

type InSquadStateUnit =
  UnitNumber |
  typeof UnitType['Light' | 'Heavy'] |
  UnitRole |
  typeof UnitAlias[
    'ElectricActive' |
    'SteelLine' |
    'SteelLineOfficerRanks' |
    'SteelLineExcludingOfficerRanks' |
    'Horizon' |
    'KouheiChurch' |
    'EmpressHound'
  ] |
  Readonly<UnitAliasAndRole<typeof UnitAlias['SteelLine' | 'AACannonier'], typeof UnitRole.Supporter>> |
  Readonly<UnitAliasAndRole<typeof UnitAlias['Strikers'], typeof UnitRole.Attacker>> |
  'golden_factory'

type InSquadState<T extends InSquadStateUnit = InSquadStateUnit> = {
  [EffectActivationState.InSquad]: T
}

type NotInSquadStateUnit =
  110 | 127 | 252 |
  typeof UnitRole['Attacker' | 'Defender'] |
  typeof UnitAlias.SteelLine |
  typeof SkillAreaType.CrossAdjacent |
  Readonly<UnitAliasAndRole<typeof UnitAlias.AACannonier, typeof UnitRole.Supporter>>

type NotInSquadState<T extends NotInSquadStateUnit = NotInSquadStateUnit> = {
  [EffectActivationState.NotInSquad]: T
}

export type NumOfUnitsInSquadState = {
  [EffectActivationState.NumOfUnits]:
    { unit: UnitKind, greater_or_equal: 3 } |
    { unit: typeof UnitKind.AGS, less_or_equal: 2 } |
    { unit: 'ally', greater_or_equal: 1 | 2 | 4 } |
    { unit: UnitType | UnitRole, greater_or_equal: 1 | 2 } |
    { unit: typeof UnitType['Flying' | 'Heavy'], less_or_equal: 1 | 2 } |
    { unit: typeof UnitRole.Attacker, equal: 1 | 2 | 3 | 4 } |
    { unit: typeof SkillAreaType.CrossAdjacent, greater_or_equal: 1 | 2 | 3 } |
    { unit: typeof SkillAreaType.CrossAdjacent, greater_or_equal: 2, less_or_equal: 3 } |
    { unit: typeof SkillAreaType.CrossAdjacent, equal: 4 }
}

export type ActivationSquadState = InSquadState | NotInSquadState | NumOfUnitsInSquadState

export type ActivationEnemyState = {
  [EffectActivationState.NumOfUnits]:
    { equal: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 } |
    { greater_or_equal: 1, less_or_equal: 2 } |
    { greater_or_equal: 3, less_or_equal: 4 } |
    { greater_or_equal: 5, less_or_equal: 6 } |
    { greater_or_equal: 1, unit: typeof UnitType.Flying } |
    { greater_or_equal: 3, unit: typeof UnitType.Heavy } |
    { greater_or_equal: 5 | 6 | 7 }
}

export type SelfSkillEffectActivationState =
  { self: ReadonlyArray<ActivationSelfState> } |
  {
    squad:
      ActivationSquadState |
      // The following are OR conditions
      readonly [NotInSquadState<typeof UnitRole.Attacker>, InSquadState<typeof UnitAlias.EmpressHound>] |
      readonly [InSquadState<87>, InSquadState<89>, InSquadState<90>] |
      readonly [InSquadState<138>, InSquadState<140>, InSquadState<236>]
  } |
  { enemy: ActivationEnemyState } |
  {
    self: ReadonlyArray<ActivationSelfState>,
    squad: ActivationSquadState
  }

export type TargetSkillEffectActivationState =
  { target: ReadonlyArray<ActivationTargetState> } |
  {
    self: ReadonlyArray<ActivationSelfState>,
    target: ReadonlyArray<ActivationTargetState>
  } |
  {
    target: ReadonlyArray<ActivationTargetState>,
    squad: ActivationSquadState | { [EffectActivationState.NotInSquad]: 41 }
  }

export type SkillEffectActivationState = SelfSkillEffectActivationState | TargetSkillEffectActivationState

export type SkillEffectActivationTrigger = {
  trigger: typeof EffectTrigger.StartRound,
  round?: { at: 1 | 2 | 3 | 4 } | { from: 2 | 3 | 5 } | { until: 1 | 2 | 3 | 4 }
} | {
  trigger: typeof EffectTrigger.HitActive1,
  round?: 'odd'
} | {
  trigger: typeof EffectTrigger.HitActive2,
  round?: 'even'
} | {
  trigger: Exclude<EffectTrigger, typeof EffectTrigger['StartRound' | 'HitActive1' | 'HitActive2']>
}

export type SelfSkillEffectActivationCondition =
  SkillEffectActivationTrigger |
  { state: SelfSkillEffectActivationState } |
  SkillEffectActivationTrigger & { state: SelfSkillEffectActivationState }

export type TargetSkillEffectActivationCondition =
  SelfSkillEffectActivationCondition |
  { state: TargetSkillEffectActivationState } |
  SkillEffectActivationTrigger & { state: TargetSkillEffectActivationState }

export type SkillEffectActivationCondition = TargetSkillEffectActivationCondition
