import { Effect } from '../Effect';
import { EffectActivationState } from '../EffectActivationState';
import { EffectTrigger } from '../EffectTrigger';
import { EquipmentId } from '../EquipmentData';
import { SkillEffectTag } from './SkillEffectTag';
import { UnitAlias } from '../UnitAlias';
import { UnitForms } from '../UnitFormValue';
import { UnitKind, UnitNumber, UnitRole, UnitType } from '../UnitBasicInfo';

export type UnitTypeAndRole = {
  type: UnitType,
  role: UnitRole
}

type HPRateEffectActivationStateKey =
  typeof EffectActivationState['HpGreaterOrEqual' | 'HpLessOrEqual' | 'HpGreaterThan' | 'HpLessThan']

type NoValueEffectActivationStateKey =
  Exclude<
    EffectActivationState,
    HPRateEffectActivationStateKey |
    typeof EffectActivationState[
      'HpRateLessThanSelf' |
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
    [EffectActivationState.HpRateLessThanSelf]?: Record<string, never>
  } &
  {
    [EffectActivationState.EffectedBy]?: UnitNumber | UnitAlias
  } &
  {
    [EffectActivationState.Unit]?: UnitKind | UnitType | UnitRole | UnitTypeAndRole | UnitAlias
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

export type SkillEffectActivationCondition =
  { trigger: EffectTrigger } |
  { state: SkillEffectActivationState } |
  {
    trigger: EffectTrigger,
    state: SkillEffectActivationState
  }
