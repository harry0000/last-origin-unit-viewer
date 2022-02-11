import { Effect } from '../Effect';
import { EffectActivationState } from '../EffectActivationState';
import { EffectTrigger } from '../EffectTrigger';
import { EquipmentId } from '../equipment/EquipmentData';
import { SkillEffectTag } from './SkillEffectTag';
import { UnitAlias } from '../UnitAlias';
import { UnitForms } from '../UnitFormValue';
import { UnitKind, UnitNumber, UnitRole, UnitType } from '../UnitBasicInfo';

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

export type UnitAliasExceptUnit = {
  alias: UnitAlias,
  except: UnitNumber
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

type ActivationState =
  {
    [key in HPRateEffectActivationStateKey]?: number
  } &
  {
    [EffectActivationState.Effected]?: Effect
  } &
  {
    [EffectActivationState.Tagged]?: SkillEffectTag
  } &
  {
    [EffectActivationState.StackGe]?: {
      tag: SkillEffectTag,
      effect?: Effect,
      value: 1 | 2 | 3 | 4 | 5 | 6 | 7
    }
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
    [EffectActivationState.EffectedBy]?: UnitNumber
  } & {
    [EffectActivationState.Grid]?: GridState
  } &
  {
    [EffectActivationState.Unit]?: UnitAliasExceptUnit
  }

export type ActivationTargetState =
  ActivationState &
  {
    [EffectActivationState.EffectedBy]?: UnitNumber | UnitAliasExceptUnit
  } & {
    [EffectActivationState.Grid]?: Exclude<GridState, typeof GridState.AreaOfEffect>
  } &
  {
    [EffectActivationState.Unit]?:
      UnitKind | UnitType | UnitRole | UnitTypeAndRole | UnitAliasAndType | UnitAliasAndRole | UnitNumber | UnitAlias | UnitAliasExceptUnit
  }

export type ActivationSquadState = {
  [EffectActivationState.InSquad]: UnitNumber | typeof UnitAlias['ElectricActive' | 'Horizon' | 'KouheiChurch'] | 'golden_factory'
} | {
  [EffectActivationState.NumOfUnits]:
    { unit: typeof UnitKind.AGS, greater_or_equal: 3 } |
    { unit: 'ally', greater_or_equal: 2 | 4 } |
    { unit: UnitType, greater_or_equal: 1 | 2 }
}

export type ActivationEnemyState = {
  [EffectActivationState.NumOfUnits]:
    { greater_or_equal: 1, less_or_equal: 2 } |
    { greater_or_equal: 3, less_or_equal: 4 } |
    { greater_or_equal: 5 }
}

export type SkillEffectActivationState =
  { self: ReadonlyArray<ActivationSelfState> } |
  { target: ReadonlyArray<ActivationTargetState> } |
  { squad: ActivationSquadState } |
  { enemy: ActivationEnemyState } |
  {
    self: ReadonlyArray<ActivationSelfState>,
    target: ReadonlyArray<ActivationTargetState>
  } |
  {
    self: ReadonlyArray<ActivationSelfState>,
    squad: ActivationSquadState
  } |
  {
    target: ReadonlyArray<ActivationTargetState>,
    squad: ActivationSquadState
  }

export type SkillEffectActivationTrigger = {
  trigger: typeof EffectTrigger.StartRound,
  round?: { at: 1 | 2 | 3 | 4 } | { from: 2 | 3 } | { until: 1 | 2 | 3 | 4 }
} | {
  trigger: Exclude<EffectTrigger, typeof EffectTrigger.StartRound>
}

export type SkillEffectActivationCondition =
  SkillEffectActivationTrigger |
  { state: SkillEffectActivationState } |
  SkillEffectActivationTrigger & { state: SkillEffectActivationState }
