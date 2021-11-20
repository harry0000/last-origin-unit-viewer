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

type HPRateEffectActivationStateKey =
  typeof EffectActivationState['HpGreaterOrEqual' | 'HpLessOrEqual' | 'HpGreaterThan' | 'HpLessThan']

type NoValueEffectActivationStateKey =
  Exclude<
    EffectActivationState,
    HPRateEffectActivationStateKey |
    typeof EffectActivationState[
      'Effected' |
      'Tagged' |
      'NotTagged' |
      'StackGe' |
      'Form' |
      'Equipped' |
      'NotEquipped' |
      'InSquad' |
      'EffectedBy' |
      'Unit' |
      'NumOfUnits'
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
  } &
  {
    [EffectActivationState.Unit]?: UnitAliasExceptUnit
  }

export type ActivationTargetState =
  ActivationState &
  {
    [EffectActivationState.EffectedBy]?: UnitNumber | UnitAliasExceptUnit
  } &
  {
    [EffectActivationState.Unit]?:
      UnitKind | UnitType | UnitRole | UnitTypeAndRole | UnitAliasAndType | UnitAliasAndRole | UnitNumber | UnitAlias | UnitAliasExceptUnit
  }

export type ActivationSquadState = {
  [EffectActivationState.InSquad]?: UnitNumber | typeof UnitAlias.ElectricActive | typeof UnitAlias.Horizon | 'golden_factory'
} & {
  [EffectActivationState.NumOfUnits]?:
    { unit: typeof UnitKind.AGS, greater_or_equal: 3 } |
    { unit: 'ally', greater_or_equal: 2 | 4 } |
    { unit: UnitType, greater_or_equal: 1 | 2 }
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
  round?: { at: 1 | 2 | 3 | 4 } | { from: 3 } | { until: 1 | 2 | 3 | 4 }
} | {
  trigger: Exclude<EffectTrigger, typeof EffectTrigger.StartRound>
}

export type SkillEffectActivationCondition =
  SkillEffectActivationTrigger |
  { state: SkillEffectActivationState } |
  SkillEffectActivationTrigger & { state: SkillEffectActivationState }
