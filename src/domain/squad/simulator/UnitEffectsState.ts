import { AffectionBonus } from '../../UnitAffection';
import { BattleEffect, BattleEffects } from './BattleEffect';
import { Conditions, SelfSkillEffect, SkillEffect, TargetSkillEffect } from '../../skill/UnitSkills';
import { CoreLinkBonus, FullLinkBonus } from '../../UnitCoreLinkBonusData';
import {
  EffectDetails,
  EffectDetailsAsSkill,
  EquipmentEffectActivationCondition
} from '../../equipment/EquipmentEffect';
import { MicroValue, MilliPercentageValue, MilliValue } from '../../ValueUnit';
import {
  SelfSkillEffectActivationCondition,
  SelfSkillEffectActivationState,
  TargetSkillEffectActivationCondition,
  TargetSkillEffectActivationState
} from '../../skill/SkillEffectActivationCondition';
import { SkillEffectType } from '../../skill/SkillEffectType';
import * as SourceOfEffect from './SourceOfEffect';
import { TenKeyPosition } from '../Squad';
import { UnitBasicInfo, UnitRank } from '../../UnitBasicInfo';
import {
  UnitChip1Equipment,
  UnitChip2Equipment,
  UnitGearEquipment,
  UnitOsEquipment
} from '../../equipment/UnitEquipment';
import UnitDamagedState from '../../UnitDamagedState';
import { UnitLvValue } from '../../status/UnitLv';
import { UnitSkill } from '../../skill/UnitSkill';

// HACK: AroundSkillEffect does not have state field
type StateFullSkillEffect =
  Omit<SelfSkillEffect, 'conditions'> & {
    conditions: Conditions<SelfSkillEffectActivationCondition & { state: SelfSkillEffectActivationState }>
  } |
  Omit<TargetSkillEffect, 'conditions'> & {
    conditions: Conditions<TargetSkillEffectActivationCondition & { state: TargetSkillEffectActivationState }>
  }

type StateFullEquipmentEffectCondition = {
  condition: EquipmentEffectActivationCondition & Required<Pick<EquipmentEffectActivationCondition, 'state'>>
}

type StateFullEquipmentEffect = Omit<EffectDetails, 'condition'> & StateFullEquipmentEffectCondition
type StateFullEquipmentEffectAsSkill = Omit<EffectDetailsAsSkill, 'condition'> & StateFullEquipmentEffectCondition

export type UnitOriginState = {
  position: TenKeyPosition,
  unit: UnitBasicInfo,
  rank: UnitRank,
  lv: UnitLvValue,
  status: {
    atk: MilliValue,
    def: MilliValue,
    acc: MilliPercentageValue,
    eva: MilliPercentageValue,
    cri: MilliPercentageValue,
    spd: MicroValue
  },
  skill: UnitSkill,
  chip1: UnitChip1Equipment,
  chip2: UnitChip2Equipment,
  os: UnitOsEquipment,
  gear: UnitGearEquipment,
  coreLinkBonus: CoreLinkBonus,
  fullLinkBonus: FullLinkBonus | undefined,
  affectionBonus: AffectionBonus | undefined,
  damaged: UnitDamagedState
}

type ApplicableSkillEffect<E> =
  Readonly<{
    effect: E,
    targets: ReadonlySet<TenKeyPosition>
  }> &
  Pick<BattleEffect, 'type' | 'affected_by'>

export type ApplicableAllSkillEffect = ApplicableSkillEffect<SkillEffect>
export type ApplicableStateFullSkillEffect = ApplicableSkillEffect<StateFullSkillEffect>

export function isStateFullConditionEffect(
  arg: ApplicableAllSkillEffect
): arg is ApplicableStateFullSkillEffect {
  return !!arg.effect.conditions && arg.effect.conditions.every(cond => 'state' in cond);
}

type ApplicableEquipmentEffect<E> =
  Readonly<{
    effect: E,
    type: typeof SkillEffectType.General,
    affected_by: SourceOfEffect.Equipment
  }>

type ApplicableEquipmentEffectAsSkill<E> =
  Readonly<{
    effect: E,
    type: typeof SkillEffectType.Buff,
    affected_by: SourceOfEffect.Equipment
  }>

export type ApplicableAllEquipmentEffect =
  ApplicableEquipmentEffect<EffectDetails> |
  ApplicableEquipmentEffectAsSkill<EffectDetailsAsSkill>

export type ApplicableStateFullEquipmentEffect =
  ApplicableEquipmentEffect<StateFullEquipmentEffect> |
  ApplicableEquipmentEffectAsSkill<StateFullEquipmentEffectAsSkill>

export type UnitEffectsState =
  UnitOriginState &
  {
    appliedEffects: BattleEffects,
    applicableSkillEffects: ReadonlyArray<ApplicableAllSkillEffect>,
    applicableEquipmentEffects: ReadonlyArray<ApplicableAllEquipmentEffect>
  }

export type UnitStateFullEffectsState =
  UnitOriginState &
  {
    appliedEffects: BattleEffects,
    applicableSkillEffects: Array<ApplicableStateFullSkillEffect>,
    applicableEquipmentEffects: Array<ApplicableStateFullEquipmentEffect>
  }

export type EnemySquadState = Partial<{ readonly [position in TenKeyPosition]: Omit<UnitBasicInfo, 'no' | 'kind' | 'rank'> }>
