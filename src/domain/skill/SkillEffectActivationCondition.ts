import { Effect } from '../Effect';
import { EffectActivationState } from '../EffectActivationState';
import { EffectTrigger } from '../EffectTrigger';
import { EquipmentId } from '../equipment/EquipmentData';
import { SkillEffectTag } from './SkillEffectTag';
import { UnitAlias } from '../UnitAlias';
import { UnitForms } from '../UnitFormValue';
import { UnitKind, UnitNumber, UnitRole, UnitType } from '../UnitBasicInfo';
import { UnitStatusData } from '../status/UnitStatusData';

export type UnitNotAlias = {
  not_alias: typeof UnitAlias.KouheiChurch
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

export type UnitAliasAndRole = {
  alias: UnitAlias,
  role: UnitRole
}

export type UnitAliasExceptUnit<
  A extends UnitAlias = UnitAlias,
  E extends UnitNumber = UnitNumber
> = {
  alias: A,
  except: E
}

export const GridState = {
  FrontLine: 'front_line',
  MidLine: 'mid_line',
  BackLine: 'back_line',
  AreaOfEffect: 'area_of_effect'
} as const;
export type GridState = typeof GridState[keyof typeof GridState]

type HPRateEffectActivationStateKey =
  typeof EffectActivationState['HpGreaterOrEqual' | 'HpLessOrEqual' | 'HpGreaterThan' | 'HpLessThan']

type StatusEffectActivationStateKey =
  typeof EffectActivationState['StatusLessThanSelf']

type ActivationState =
  {
    [key in HPRateEffectActivationStateKey]?: number
  } &
  {
    [key in StatusEffectActivationStateKey]?: {
      status: Exclude<keyof UnitStatusData[UnitNumber], 'hp'>
    }
  } &
  {
    [EffectActivationState.Affected]?: Effect
  } &
  {
    [EffectActivationState.Tagged]?: SkillEffectTag
  } &
  {
    [EffectActivationState.TaggedAffected]?: {
      tag: SkillEffectTag,
      effects: ReadonlyArray<Effect>
    }
  } &
  {
    [EffectActivationState.StackGe]?: {
      tag: SkillEffectTag,
      effect?: Effect,
      value: 1 | 2 | 3 | 4 | 5 | 6 | 7
    }
  } &
  {
    [EffectActivationState.Grid]?: GridState
  }

export type ActivationSelfState =
  ActivationState &
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
    [EffectActivationState.AffectedBy]?: UnitNumber
  } &
  {
    // HACK: for seize_opportunity tag
    [EffectActivationState.Unit]?: UnitAliasExceptUnit<typeof UnitAlias.AngerOfHorde, 41>
  }

export type ActivationTargetState =
  ActivationState &
  {
    [EffectActivationState.AffectedBy]?: UnitNumber | UnitAliasExceptUnit<typeof UnitAlias.MongooseTeam, 80>
  } &
  {
    [EffectActivationState.Grid]?: Exclude<GridState, typeof GridState.AreaOfEffect>
  }

type InSquadStateUnit = UnitNumber | typeof UnitAlias['ElectricActive' | 'SteelLine' | 'Horizon' | 'KouheiChurch'] | 'golden_factory'

type InSquadState<T extends InSquadStateUnit = InSquadStateUnit> = {
  [EffectActivationState.InSquad]: T
}

type NumOfUnitsInSquadState = {
  [EffectActivationState.NumOfUnits]:
    { unit: typeof UnitKind.AGS, greater_or_equal: 3 } |
    { unit: 'ally', greater_or_equal: 2 | 4 } |
    { unit: UnitType, greater_or_equal: 1 | 2 }
}

export type ActivationSquadState = InSquadState | NumOfUnitsInSquadState

export type ActivationEnemyState = {
  [EffectActivationState.NumOfUnits]:
    { greater_or_equal: 1, less_or_equal: 2 } |
    { greater_or_equal: 3, less_or_equal: 4 } |
    { greater_or_equal: 5, less_or_equal: 6 } |
    { greater_or_equal: 3, unit: typeof UnitType.Heavy } |
    { greater_or_equal: 5 } |
    { greater_or_equal: 7 }
}

export type SelfSkillEffectActivationState =
  { self: ReadonlyArray<ActivationSelfState> } |
  { squad: ActivationSquadState | ReadonlyArray<InSquadState<87 | 89 | 90>> } |
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
    squad: ActivationSquadState
  }

export type SkillEffectActivationState = SelfSkillEffectActivationState | TargetSkillEffectActivationState

export type SkillEffectActivationTrigger = {
  trigger: typeof EffectTrigger.StartRound,
  round?: { at: 1 | 2 | 3 | 4 } | { from: 2 | 3 } | { until: 1 | 2 | 3 | 4 }
} | {
  trigger: Exclude<EffectTrigger, typeof EffectTrigger.StartRound>
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
