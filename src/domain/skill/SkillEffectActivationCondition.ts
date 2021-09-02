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
}

export type UnitAliasAndRole = {
  alias: UnitAlias,
  role: UnitRole
}

type HPRateEffectActivationStateKey =
  typeof EffectActivationState['HpGreaterOrEqual' | 'HpLessOrEqual' | 'HpGreaterThan' | 'HpLessThan']

type NoValueEffectActivationStateKey =
  Exclude<
    EffectActivationState,
    HPRateEffectActivationStateKey |
    typeof EffectActivationState[
      'Effected' |
      'Tagged' |
      'StackGe' |
      'Form' |
      'Equipped' |
      'InSquad' |
      'EffectedBy' |
      'Unit'
    ]
  >

type ActivationState =
  {
    [key in NoValueEffectActivationStateKey]?: Record<string, never>
  } &
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
      value: 1 | 2 | 3 | 4 | 5
    }
  }

export type ActivationSelfState =
  ActivationState &
  {
    [EffectActivationState.Form]?: UnitForms
  } &
  {
    [EffectActivationState.Equipped]?: EquipmentId
  } &
  {
    [EffectActivationState.EffectedBy]?: UnitNumber | UnitAlias
  }

export type ActivationTargetState =
  ActivationState &
  {
    [EffectActivationState.EffectedBy]?: UnitNumber | UnitAlias
  } &
  {
    [EffectActivationState.Unit]?:
      UnitKind | UnitType | UnitRole | UnitTypeAndRole | UnitAliasAndType | UnitAliasAndRole | UnitNumber | UnitAlias
  }

export type ActivationSquadState = {
  [EffectActivationState.InSquad]: UnitNumber | UnitAlias
}

export type SkillEffectActivationState =
  { self: ReadonlyArray<ActivationSelfState> } |
  { target: ReadonlyArray<ActivationTargetState> } |
  { squad: ReadonlyArray<ActivationSquadState> } |
  {
    self: ReadonlyArray<ActivationSelfState>,
    target: ReadonlyArray<ActivationTargetState>
  }

export type SkillEffectActivationTrigger = {
  trigger: typeof EffectTrigger.StartRound,
  round?: { at: 1 | 2 } | { from: 3 } | { until: 1 | 2 | 3 | 4 }
} | {
  trigger: Exclude<EffectTrigger, typeof EffectTrigger.StartRound>
}

export type SkillEffectActivationCondition =
  SkillEffectActivationTrigger |
  { state: SkillEffectActivationState } |
  SkillEffectActivationTrigger & { state: SkillEffectActivationState }
