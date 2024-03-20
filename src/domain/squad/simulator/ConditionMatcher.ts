import {
  ActivationSelfState,
  ActivationSquadState,
  ActivationTargetState,
  AffectedEffect,
  ArmoredBulgasari,
  GridState,
  InSquadTaggedUnitState,
  SelfSkillEffectActivationState,
  SkillEffectActivationState,
  TargetSkillEffectActivationState,
  isBeastHunterAndPani,
  isCommandStateLeona,
  isDefenderAndArmoredBulgasari,
  isDefenderAndCyclopsPrincess,
  isEquipObservationFrameLeona,
  isFormedLeona,
  isJangHwaActivationSquadState
} from '../../skill/SkillEffectActivationCondition';
import { AlliedUnitTarget, SkillEffectTargetKind } from '../../skill/SkillEffectTarget';
import { BattleEffect } from './BattleEffect';
import { Effect } from '../../Effect';
import { EffectActivationState } from '../../EffectActivationState';
import { EnemySquadState, UnitOriginState, UnitStateFullEffectsState } from './UnitEffectsState';
import { EquipmentEffectActivationState } from '../../equipment/EquipmentEffect';
import { EquipmentId } from '../../equipment/EquipmentData';
import { FormChangeUnits } from '../../UnitFormValue';
import { SkillAreaType } from '../../skill/SkillAreaOfEffect';
import { SkillEffectScaleFactor } from '../../skill/SkillEffectScaleFactor';
import { SkillEffectTag } from '../../skill/SkillEffectTag';
import { TenKeyPosition } from '../Squad';
import { UnitBasicInfo, UnitKind, UnitRankComparator, UnitRole, UnitType } from '../../UnitBasicInfo';
import { calcTargetPositions } from '../../skill/SkillAreaOfEffectMatcher';
import { calcMicroValue, calcMilliPercentageValue, calcMilliValue } from '../../ValueUnit';
import { isFormChangeUnitSkill } from '../../skill/UnitSkill';
import { isPassiveSkillType } from '../../skill/SkillType';
import { isUnitAlias, unitNumbersForAlias } from '../../UnitAlias';

import { ExtractArray, ValueOf, isReadonlyArray } from '../../../util/type';
import { isRecord, typedEntries } from '../../../util/object';

type DependencyState = typeof EffectActivationState[
  'Affected' |
  'NotAffected' |
  'AffectedBy' |
  'AffectedActiveBy' |
  'Tagged' |
  'NotTagged' |
  'TaggedAffected' |
  'NotTaggedAffected' |
  'Stack'
]

const dependencyStateKeys = [
  EffectActivationState.Affected,
  EffectActivationState.NotAffected,
  EffectActivationState.AffectedBy,
  EffectActivationState.AffectedActiveBy,
  EffectActivationState.Tagged,
  EffectActivationState.NotTagged,
  EffectActivationState.TaggedAffected,
  EffectActivationState.NotTaggedAffected,
  EffectActivationState.Stack
] as const satisfies ReadonlyArray<DependencyState>;

export function hasNoDependencyState<T extends ActivationSelfState | ActivationTargetState | EquipmentEffectActivationState>(
  arg: T
): arg is T & Record<DependencyState, never> {
  return dependencyStateKeys.every(state => !(state in arg));
}

export function hasNoDependencySquadState(
  arg:
    ValueOf<SelfSkillEffectActivationState, 'squad'> |
    ValueOf<TargetSkillEffectActivationState, 'squad'>
): boolean {
  return Array.isArray(arg) || (
    !(EffectActivationState.InSquad in arg) ||
    !isRecord(arg.in_squad) ||
    !(EffectActivationState.Tagged in arg.in_squad)
  );
}

function matchTargetCondition(
  target: UnitBasicInfo,
  cond: ExtractArray<NonNullable<AlliedUnitTarget['conditions']>>
): boolean {
  if (typeof cond === 'number') {
    return target.no === cond;
  } else if (typeof cond === 'string') {
    if (isUnitAlias(cond)) {
      return unitNumbersForAlias[cond].has(target.no);
    } else {
      switch (cond) {
      case UnitKind.Bioroid:
      case UnitKind.AGS:
        return target.kind === cond;
      case UnitType.Light:
      case UnitType.Heavy:
      case UnitType.Flying:
        return target.type === cond;
      case UnitRole.Attacker:
      case UnitRole.Defender:
      case UnitRole.Supporter:
        return target.role === cond;
      default: {
        const _exhaustiveCheck: never = cond;
        return _exhaustiveCheck;
      }
      }
    }
  }

  if ('not_alias' in cond) {
    return (
      !unitNumbersForAlias[cond.not_alias].has(target.no) &&
      (!('type' in cond) || target.type === cond.type) &&
      (!('role' in cond) || target.role === cond.role)
    );
  } else if ('alias' in cond) {
    return unitNumbersForAlias[cond.alias].has(target.no) &&
      (!('type'   in cond) || target.type === cond.type) &&
      (!('role'   in cond) || target.role === cond.role);
  } else {
    return target.type === cond.type && target.role === cond.role;
  }
}

function matchTargetConditions(
  target: UnitBasicInfo,
  condition: NonNullable<AlliedUnitTarget['conditions']>
): boolean {
  return condition.some(cond => matchTargetCondition(target, cond));
}

export function matchTarget(
  target: UnitBasicInfo,
  source: UnitBasicInfo,
  condition: AlliedUnitTarget
): boolean {
  if (
    condition.kind === SkillEffectTargetKind.AllyExceptSelf && target.no === source.no ||
    'except' in condition && (
      isReadonlyArray(condition.except) ?
        target.no === condition.except[0] || target.no === condition.except[1] :
        target.no === condition.except
    )
  ) {
    return false;
  }

  return !condition.conditions || matchTargetConditions(target, condition.conditions);
}

type FactorScaledCount = NonNullable<BattleEffect['scaled']>['value']
type FactorUnitCondition = Extract<SkillEffectScaleFactor, { per_units: { type: 'squad' } }>['per_units']['unit']

type InSquadCondition         = ValueOf<ActivationSquadState, typeof EffectActivationState.InSquad>
type NotInSquadCondition      = ValueOf<ActivationSquadState, typeof EffectActivationState.NotInSquad>
type NumOfUnitsSquadCondition = ValueOf<ValueOf<ActivationSquadState, typeof EffectActivationState.NumOfUnits>, 'unit'>

function isArmoredBulgasari({ unit: { no }, gear: { gear } }: UnitOriginState): boolean {
  return no === FormChangeUnits.Bulgasari && gear?.id === 'counterterrorism_body_armor';
}

function getSquadUnitMatcher(
  cond:
    FactorUnitCondition |
    Exclude<
      InSquadCondition,
      { [EffectActivationState.AffectedBy]: { unit: 83, effect: typeof Effect.TargetProtect } } |
      InSquadTaggedUnitState |
      'golden_factory'
    > |
    NotInSquadCondition |
    Exclude<NumOfUnitsSquadCondition, 'ally' | 'killed'>,
  sourcePosition: TenKeyPosition
): (state: UnitOriginState) => boolean {
  if (!cond) {
    return () => true;
  }

  if (isReadonlyArray(cond)) {
    if (isBeastHunterAndPani(cond)) {
      return (target) => target.unit.no == cond[0] || target.unit.no == cond[1];
    } else if (isDefenderAndArmoredBulgasari(cond)) {
      return (target) => target.unit.role == cond[0] || isArmoredBulgasari(target);
    } else if (isDefenderAndCyclopsPrincess(cond)) {
      return (target) => target.unit.role == cond[0] || target.unit.no == cond[1];
    } else if (isCommandStateLeona(cond)) {
      return ({ unit: { no }, skill, gear }) => (
        no === cond[0].unit && isFormChangeUnitSkill(skill) && skill.unitForm() === cond[0].form ||
        no === cond[1].unit && gear.gear?.id === cond[1].equipped
      );
    } else if (cond[0] === UnitType.Light) {
      return (target) => target.unit.type == cond[0] || target.unit.type == cond[1];
    } else {
      const set = new Set([...unitNumbersForAlias[cond[0]], ...unitNumbersForAlias[cond[1]]]);
      return (target) => set.has(target.unit.no);
    }
  } else if (typeof cond === 'number') {
    return (target) => target.unit.no === cond;
  } else if (typeof cond === 'string') {
    if (isUnitAlias(cond)) {
      const set = unitNumbersForAlias[cond];
      return (target) => set.has(target.unit.no);
    } else {
      switch (cond) {
      case UnitKind.Bioroid:
      case UnitKind.AGS:
      case UnitType.Light:
      case UnitType.Heavy:
      case UnitType.Flying:
      case UnitRole.Attacker:
      case UnitRole.Defender:
      case UnitRole.Supporter:
        return (target) => matchUnitBasicInfo(cond, target.unit);
      case SkillAreaType.CrossAdjacent: {
        const targetPos = calcTargetPositions(cond, sourcePosition);
        return (target) => targetPos.has(target.position);
      }
      case ArmoredBulgasari:
        return isArmoredBulgasari;
      default: {
        const _exhaustiveCheck: never = cond;
        return _exhaustiveCheck;
      }
      }
    }
  } else if (isFormedLeona(cond)) {
    return ({ unit: { no }, skill }) =>
      no === cond.unit &&
      isFormChangeUnitSkill(skill) && skill.unitForm() === cond.form;
  } else if (isEquipObservationFrameLeona(cond)) {
    return ({ unit: { no }, gear }) => no === cond.unit && gear.gear?.id === cond.equipped;
  } else {
    const set = unitNumbersForAlias[cond.alias];
    return (target) => set.has(target.unit.no) && matchUnitBasicInfo(cond.role, target.unit);
  }
}

export function countMatchedScaleFactor(
  factor: SkillEffectScaleFactor,
  source: UnitBasicInfo,
  sourcePosition: TenKeyPosition,
  squad: ReadonlyArray<UnitOriginState>,
  enemies: EnemySquadState
): 0 | FactorScaledCount {
  if ('per_stack' in factor) {
    // HACK: Currently this case does not need to be considered.
    return 0;
  }

  switch (factor.per_units.type) {
  case 'all':
    return (
      squad.length +
      Object.keys(enemies).length
    ) as ReturnType<typeof countMatchedScaleFactor>;
  case 'squad': {
    const { unit, except } = factor.per_units;
    const matchUnit = getSquadUnitMatcher(unit, sourcePosition);
    const pickUnit = (state: UnitOriginState): boolean => {
      return (!except || state.unit.no !== source.no) && matchUnit(state);
    };

    return squad
      .filter(pickUnit)
      .length as ReturnType<typeof countMatchedScaleFactor>;
  }
  case 'enemy': {
    const type = factor.per_units.unit;
    return (
      type ?
        Object.values(enemies).filter(enemy => enemy.type === type) :
        Object.keys(enemies)
    ).length as ReturnType<typeof countMatchedScaleFactor>;
  }
  }
}

function matchUnitBasicInfo(
  cond: UnitKind | UnitType | UnitRole,
  unit: UnitBasicInfo
): boolean {
  switch (cond) {
  case UnitKind.Bioroid:
  case UnitKind.AGS:
    return unit.kind === cond;
  case UnitType.Light:
  case UnitType.Heavy:
  case UnitType.Flying:
    return unit.type === cond;
  case UnitRole.Attacker:
  case UnitRole.Defender:
  case UnitRole.Supporter:
    return unit.role === cond;
  }
}

function onSameLine(
  source: TenKeyPosition,
  target: TenKeyPosition
): boolean {
  return source % 3 === target % 3;
}

const FrontLine: ReadonlySet<TenKeyPosition> = new Set([3, 6, 9]);
const MidLine:   ReadonlySet<TenKeyPosition> = new Set([2, 5, 8]);
const BackLine:  ReadonlySet<TenKeyPosition> = new Set([1, 4, 7]);

function onGridPosition(
  grid: Exclude<GridState, typeof GridState['AreaOfEffect' | 'SameLine']>,
  position: TenKeyPosition
): boolean;
function onGridPosition(
  grid: Exclude<GridState, typeof GridState.SameLine>,
  position: TenKeyPosition,
  area: ReadonlySet<TenKeyPosition>
): boolean;
function onGridPosition(...[
  grid,
  position,
  area
]:
  [Exclude<GridState, typeof GridState['AreaOfEffect' | 'SameLine']>, TenKeyPosition] |
  [Exclude<GridState, typeof GridState.SameLine>, TenKeyPosition, ReadonlySet<TenKeyPosition>]
): boolean {
  switch (grid) {
  case GridState.FrontLine:
    return FrontLine.has(position);
  case GridState.MidLine:
    return MidLine.has(position);
  case GridState.BackLine:
    return BackLine.has(position);
  case GridState.AreaOfEffect:
    return area.has(position);
  default: {
    const _exhaustiveCheck: never = grid;
    return _exhaustiveCheck;
  }
  }
}

function matchHpRate(
  cond: typeof EffectActivationState['HpGreaterOrEqual' | 'HpLessOrEqual' | 'HpGreaterThan' | 'HpLessThan'],
  value: number,
  unit: UnitOriginState
): boolean {
  switch (cond) {
  case EffectActivationState.HpGreaterOrEqual:
    return unit.damaged.currentHpRate >= value;
  case EffectActivationState.HpLessOrEqual:
    return unit.damaged.currentHpRate <= value;
  case EffectActivationState.HpGreaterThan:
    return unit.damaged.currentHpRate > value;
  case EffectActivationState.HpLessThan:
    return unit.damaged.currentHpRate < value;
  }
}

function compareSelfStatus(
  cond: {
    status: 'atk' | 'def',
    than: 'atk' | 'def',
    value: number
  },
  unit: UnitOriginState
): boolean {
  const status = calcMilliValue(cond.status === 'atk' ? unit.status.atk : unit.status.def);
  const than   = calcMilliValue(cond.than   === 'atk' ? unit.status.atk : unit.status.def);

  return status >= than * (cond.value / 100);
}

function compareTargetStatus(
  cond: typeof EffectActivationState['StatusGreaterThanSelf' | 'StatusLessThanSelf'],
  status: 'atk' | 'def' | 'acc' | 'eva' | 'cri' | 'spd',
  source: UnitOriginState,
  target: UnitOriginState
): boolean {
  const getStatus = (unit: UnitOriginState): number => {
    switch (status) {
    case 'atk': return calcMilliValue(unit.status[status]);
    case 'def': return calcMilliValue(unit.status[status]);
    case 'acc': return calcMilliPercentageValue(unit.status[status]);
    case 'eva': return calcMilliPercentageValue(unit.status[status]);
    case 'cri': return calcMilliPercentageValue(unit.status[status]);
    case 'spd': return calcMicroValue(unit.status[status]);
    }
  };

  const srcStatus = getStatus(source);
  const tgtStatus = getStatus(target);

  switch (cond) {
  case EffectActivationState.StatusGreaterThanSelf: return srcStatus < tgtStatus;
  case EffectActivationState.StatusLessThanSelf:    return srcStatus > tgtStatus;
  }
}

function equipped(id: EquipmentId, unit: UnitOriginState): boolean {
  return (
    unit.chip1.chip1?.id === id ||
    unit.chip2.chip2?.id === id ||
    unit.os.os?.id       === id ||
    unit.gear.gear?.id   === id
  );
}

function notEquipped(id: EquipmentId, unit: UnitOriginState): boolean {
  return !equipped(id, unit);
}

function matchCommonStaticActivationState(
  state: ActivationSelfState | ActivationTargetState,
  unit: UnitOriginState
): boolean {
  const { HpGreaterOrEqual, HpLessOrEqual, HpGreaterThan, HpLessThan } = EffectActivationState;
  return (
    (!(HpGreaterOrEqual in state) || !!state.hp_greater_or_equal && matchHpRate(HpGreaterOrEqual, state.hp_greater_or_equal, unit)) &&
    (!(HpLessOrEqual    in state) || !!state.hp_less_or_equal    && matchHpRate(HpLessOrEqual, state.hp_less_or_equal, unit)) &&
    (!(HpGreaterThan    in state) || !!state.hp_greater_than     && matchHpRate(HpGreaterThan, state.hp_greater_than, unit)) &&
    (!(HpLessThan       in state) || !!state.hp_less_than        && matchHpRate(HpLessThan, state.hp_less_than, unit))
  );
}

function matchStaticActivationSelfState(
  state: ActivationSelfState,
  unit: UnitOriginState,
  skillArea: ReadonlySet<TenKeyPosition>
): boolean {
  const { Grid, Form, Equipped, NotEquipped, StatusGreaterOrEqualThan, RankGreaterOrEqual } = EffectActivationState;
  return (
    matchCommonStaticActivationState(state, unit) &&
    (!(Grid in state) || !!state.grid && onGridPosition(state.grid, unit.position, skillArea)) &&
    (!(Form in state) || !!state.form && isFormChangeUnitSkill(unit.skill) && state.form === unit.skill.unitForm()) &&
    (!(Equipped in state) || !!state.equipped && equipped(state.equipped, unit)) &&
    (!(NotEquipped in state) || !!state.not_equipped && state.not_equipped.every(id => notEquipped(id, unit))) &&
    (!(StatusGreaterOrEqualThan in state) || !!state.status_greater_or_equal_than && compareSelfStatus(state.status_greater_or_equal_than, unit)) &&
    (!(RankGreaterOrEqual in state) || !!state.rank_greater_or_equal && !UnitRankComparator[unit.rank].lessThan(state.rank_greater_or_equal))
  );
}

/**
 * Currently, ignore enemy target state (e.g. HpRateGreaterOrEqualThanSelf).
 */
function matchStaticActivationTargetState(
  state: ActivationTargetState,
  source: UnitOriginState,
  target: UnitOriginState
): boolean {
  const { Grid, StatusGreaterThanSelf, StatusLessThanSelf, Unit } = EffectActivationState;
  return (
    matchCommonStaticActivationState(state, target) &&
    (
      !(Grid in state) ||
      !!state.grid && (state.grid === GridState.SameLine ? onSameLine(source.position, target.position) : onGridPosition(state.grid, target.position))
    ) &&
    (
      !(StatusGreaterThanSelf in state) ||
      !!state.status_greater_than_self && compareTargetStatus(StatusGreaterThanSelf, state.status_greater_than_self.status, source, target)
    ) &&
    (
      !(StatusLessThanSelf in state) ||
      !!state.status_less_than_self && compareTargetStatus(StatusLessThanSelf, state.status_less_than_self.status, source, target)
    ) &&
    (!(Unit in state) || !!state.unit && matchTargetCondition(target.unit, state.unit))
  );
}

export function matchStaticSelfState(
  state: SkillEffectActivationState,
  unit: UnitOriginState,
  skillArea: ReadonlySet<TenKeyPosition>
): boolean {
  return !('self' in state) ||
    state.self.some(s =>
      matchStaticActivationSelfState(s, unit, skillArea)
    );
}

export function matchStaticTargetState(
  state: SkillEffectActivationState,
  source: UnitOriginState,
  target: UnitOriginState
): boolean {
  return !('target' in state) ||
    state.target.some(s =>
      matchStaticActivationTargetState(s, source, target)
    );
}

function pickEffects(affected: ReadonlyArray<BattleEffect>): ReadonlySet<BattleEffect['effect']> {
  return new Set(affected.map(({ effect }) => effect));
}

function pickTaggedEffects(
  tag: SkillEffectTag,
  affected: ReadonlyArray<BattleEffect>
): ReadonlyMap<BattleEffect['effect'], number> {
  const acc: Map<BattleEffect['effect'], number> = new Map();

  return affected.reduce<typeof acc>(
    (acc, battleEffect) => {
      const { effect, value } = battleEffect;
      if ('tag' in value && value.tag === tag) {
        if ('scaled' in battleEffect && battleEffect.scaled) {
          acc.set(effect, battleEffect.scaled.value);
        } else {
          const count = acc.get(effect) ?? 0;
          acc.set(effect, count + 1);
        }
      }

      return acc;
    },
    acc
  );
}

function matchNotAffected(
  state:
    NonNullable<ActivationSelfState[typeof EffectActivationState.NotAffected]> |
    NonNullable<ActivationTargetState[typeof EffectActivationState.NotAffected]>,
  affected: ReadonlyArray<BattleEffect>
): boolean {
  const effects = pickEffects(affected);

  // HACK: to avoid "TS2349: This expression is not callable."
  const conds: ReadonlyArray<typeof state[number]> = state;
  return conds.every(e => !effects.has(e));
}

function matchAffected(
  state: AffectedEffect | ReadonlyArray<AffectedEffect>,
  affected: ReadonlyArray<BattleEffect>
): boolean {
  return isReadonlyArray(state) ?
    state.every(pickEffects(affected).has) :
    pickEffects(affected).has(state);
}

function matchTagged(
  state: SkillEffectTag | ReadonlyArray<SkillEffectTag>,
  affected: ReadonlyArray<BattleEffect>
): boolean {
  return isReadonlyArray(state) ?
    state.every(tag => affected.some(({ value }) => 'tag' in value && value.tag === tag)) :
    affected.some(({ value }) => 'tag' in value && value.tag === state);
}

function matchTaggedAffected(
  state: { tag: SkillEffectTag, effect: AffectedEffect },
  affected: ReadonlyArray<BattleEffect>
): boolean {
  return pickTaggedEffects(state.tag, affected).has(state.effect);
}

function matchTagStack(
  state: {
    tag: SkillEffectTag | ReadonlyArray<SkillEffectTag>,
    effect?: AffectedEffect,
  } & (
    { equal: 1 | 2 | 3 } |
    { greater_or_equal: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 9 } |
    { less_or_equal: 2 }
  ),
  affected: ReadonlyArray<BattleEffect>
): boolean {
  const countStacked = (tag: SkillEffectTag): number => {
    const taggedEffects = pickTaggedEffects(tag, affected);
    return taggedEffects.size && (
      state.effect ? (taggedEffects.get(state.effect) ?? 0) : taggedEffects.values().next().value
    );
  };
  const stacked = isReadonlyArray(state.tag) ?
    state.tag.reduce((acc, t) => acc + countStacked(t), 0) :
    countStacked(state.tag);

  return 'equal' in state ?
    stacked === state.equal :
    'greater_or_equal' in state ?
      stacked >= state.greater_or_equal :
      stacked <= state.less_or_equal;
}

function matchAffectedBy(
  state: ValueOf<ActivationTargetState, typeof EffectActivationState.AffectedBy>,
  affected: ReadonlyArray<BattleEffect>
): boolean {
  const matcher: (e: BattleEffect) => boolean = (() => {
    if ('alias' in state) {
      // check only passive skill effects.
      return ({ affected_by }) =>
        affected_by.type === 'ally' &&
        affected_by.no !== state.except &&
        unitNumbersForAlias[state.alias].has(affected_by.no) &&
        isPassiveSkillType(affected_by.skillType);
    } else if ('unit' in state) {
      if ('effect' in state) {
        return ({ effect, affected_by }) =>
          effect === state.effect &&
          affected_by.type === 'ally' &&
          affected_by.no === state.unit;
      } else {
        return ({ affected_by }) =>
          affected_by.type === 'ally' && affected_by.no === state.unit;
      }
    } else {
      return ({ effect, affected_by }) =>
        effect === state.effect &&
        affected_by.type === 'equipment' &&
        affected_by.id === state.equipment;
    }
  })();

  return affected.some(matcher);
}

export function matchAffectedState(
  state: ReadonlyArray<ActivationSelfState> | ReadonlyArray<ActivationTargetState>,
  affected: ReadonlyArray<BattleEffect>
): boolean {
  const { Affected, NotAffected, AffectedBy, AffectedActiveBy, Tagged, NotTagged, TaggedAffected, NotTaggedAffected, Stack } = EffectActivationState;

  return state.some(s => dependencyStateKeys.every(key => {
    switch (key) {
    case Affected:          return !(key in s) || !!s.affected            && matchAffected(s.affected, affected);
    case NotAffected:       return !(key in s) || !!s.not_affected        && matchNotAffected(s.not_affected, affected);
    case AffectedBy:        return !(key in s) || !!s.affected_by         && matchAffectedBy(s.affected_by, affected);
    // HACK: Currently, always return false. (Active skill effects are never applied.)
    case AffectedActiveBy:  return !(key in s) || false;
    case Tagged:            return !(key in s) || !!s.tagged              && matchTagged(s.tagged, affected);
    case NotTagged:         return !(key in s) || !!s.not_tagged          && !matchTagged(s.not_tagged, affected);
    case TaggedAffected:    return !(key in s) || !!s.tagged_affected     && matchTaggedAffected(s.tagged_affected, affected);
    case NotTaggedAffected: return !(key in s) || !!s.not_tagged_affected && !matchTaggedAffected(s.not_tagged_affected, affected);
    case Stack:             return !(key in s) || !!s.stack               && matchTagStack(s.stack, affected);
    default: {
      const _exhaustiveCheck: never = key;
      return _exhaustiveCheck;
    }
    }
  }));
}

export function matchAffectedSquadUnitState(
  state: SkillEffectActivationState,
  source: UnitOriginState,
  squad: ReadonlyArray<UnitStateFullEffectsState>
): boolean {
  if (!('squad' in state)) {
    return true;
  }

  const cond = state.squad;
  if (EffectActivationState.InSquad in cond) {
    const in_squad = cond.in_squad;
    if (isRecord(in_squad)) {
      if (EffectActivationState.AffectedBy in in_squad) {
        return squad
          .filter(({ unit }) => unit.no != source.unit.no)
          .some(({ appliedEffects }) => appliedEffects.matchTargetAffectedState({ target: [in_squad] }));
      }
      if (EffectActivationState.Tagged in in_squad) {
        const unitNo = 'unit' in in_squad ? in_squad.unit : undefined;
        const taggedState: { [EffectActivationState.Tagged]: SkillEffectTag } = in_squad;
        const affectedState: SkillEffectActivationState = { target: [taggedState] };

        return squad
          .filter(({ unit: { no } }) => no !== source.unit.no && (!unitNo || no === unitNo))
          .some(({ appliedEffects }) => appliedEffects.matchTargetAffectedState(affectedState));
      }
      if (EffectActivationState.AffectedActiveBy in in_squad) {
        // HACK: Currently, always return false. (Active skill effects are never applied.)
        return false;
      }
    }
  }

  return true;
}

export function matchStaticSquadState(
  state: SkillEffectActivationState,
  source: UnitOriginState,
  squad: ReadonlyArray<UnitOriginState>,
  enemies: EnemySquadState
): boolean {
  if (!('squad' in state)) {
    return true;
  }

  const exceptSourceUnit = (matcher: (state: UnitOriginState) => boolean) => (state: UnitOriginState): boolean => {
    return state.unit.no !== source.unit.no && matcher(state);
  };

  const squadState = state.squad;
  if (isReadonlyArray(squadState)) {
    if (isJangHwaActivationSquadState(squadState)) {
      const is_attacker = exceptSourceUnit(getSquadUnitMatcher(squadState[0].not_in_squad, source.position));
      const in_squad = exceptSourceUnit(getSquadUnitMatcher(squadState[1].in_squad, source.position));
      return (
        squad.every(target => !is_attacker(target)) ||
        squad.some(in_squad)
      );
    } else {
      return squadState.some(({ in_squad }) => squad.some(getSquadUnitMatcher(in_squad, source.position)));
    }
  } else {
    return typedEntries(squadState).every(entry => {
      switch (entry[0]) {
      case EffectActivationState.InSquad: {
        const in_squad = entry[1];
        if (in_squad === 'golden_factory') {
          return false;
        } else if (
          typeof in_squad === 'string' ||
          typeof in_squad === 'number'
        ) {
          const matcher = exceptSourceUnit(getSquadUnitMatcher(in_squad, source.position));
          return squad.some(matcher);
        } else if (
          EffectActivationState.Tagged in in_squad ||
          EffectActivationState.AffectedBy in in_squad ||
          EffectActivationState.AffectedActiveBy in in_squad
        ) {
          // Use `matchAffectedSquadUnitState()`.
          // HACK: return `true` as a static condition.
          return true;
        } else if (isReadonlyArray(in_squad)) {
          if (isCommandStateLeona(in_squad)) {
            return squad.some(getSquadUnitMatcher(in_squad, source.position));
          } else {
            return squad.some(unit => unit.unit.role === in_squad[0] || isArmoredBulgasari(unit));
          }
        } else if ('alias' in in_squad) {
          const { alias, role } = in_squad;
          const matcher = exceptSourceUnit(({ unit }) =>
            unitNumbersForAlias[alias].has(unit.no) && unit.role === role
          );

          return squad.some(matcher);
        } else {
          return squad.some(getSquadUnitMatcher(in_squad, source.position));
        }
      }
      case EffectActivationState.NotInSquad: {
        const matcher = exceptSourceUnit(getSquadUnitMatcher(entry[1], source.position));
        return squad.every(target => !matcher(target));
      }
      case EffectActivationState.NumOfUnits: {
        const num_of_units = entry[1];
        const gtEnemies = 'greater_than' in num_of_units;
        const lessOrEqual = 'less_or_equal' in num_of_units;
        if ('less_than' in num_of_units) {
          return squad.length < Object.keys(enemies).length;
        } else if (
          gtEnemies ||
          lessOrEqual && num_of_units.less_or_equal === 'enemy'
        ) {
          const cond = num_of_units.unit;
          const numOfSquad = Object.values(squad).filter(({ unit: { type } }) => type === cond).length;
          const numOfEnemy = Object.values(enemies).filter(({ type }) => type === cond).length;
          return gtEnemies ?
            numOfSquad > numOfEnemy :
            numOfSquad <= numOfEnemy;
        } else {
          const target = num_of_units.unit;
          const count =
            target === 'ally' ?
              squad.length - 1 : // except source unit
              target === 'killed' ?
                0 : // Currently, the number of units killed is always 0
                squad.filter(exceptSourceUnit(getSquadUnitMatcher(target, source.position))).length;

          return (
            'equal' in num_of_units ? num_of_units.equal === count :
              'less_or_equal' in num_of_units ?
                'greater_or_equal' in num_of_units ?
                  num_of_units.greater_or_equal <= count && count <= num_of_units.less_or_equal :
                  count <= num_of_units.less_or_equal :
                num_of_units.greater_or_equal <= count
          );
        }
      }
      default: {
        const _exhaustiveCheck: never = entry;
        return _exhaustiveCheck;
      }
      }
    });
  }
}

export function matchEnemyState(
  state: SkillEffectActivationState,
  enemies: EnemySquadState
): boolean {
  if (!('enemy' in state)) {
    return true;
  }

  const enemyState = state.enemy;
  const values = Object.values(enemies);
  const matchUnit =
    !('unit' in enemyState) || values.every(({ type }) => type === enemyState.unit);

  const cond = enemyState.num_of_units;
  const count = 'unit' in cond ?
    values.filter(({ type }) => type === cond.unit).length :
    values.length;

  return matchUnit && (
    'equal' in cond ? cond.equal === count :
      'less_or_equal' in cond ?
        'greater_or_equal' in cond ?
          cond.greater_or_equal <= count && count <= cond.less_or_equal :
          count <= cond.less_or_equal :
        cond.greater_or_equal <= count
  );
}

function matchEquippedUnit(state: NonNullable<EquipmentEffectActivationState['unit']>, unit: UnitBasicInfo): boolean {
  if (typeof state === 'number') {
    return state === unit.no;
  } else {
    return state.kind === unit.kind && (!state.except || state.except !== unit.no);
  }
}

export function matchStaticEquipmentState(
  state: EquipmentEffectActivationState,
  unit: UnitOriginState
): boolean {
  return (
    (!state.grid                || onGridPosition(state.grid, unit.position)) &&
    (!state.hp_greater_or_equal || matchHpRate(EffectActivationState.HpGreaterOrEqual, state.hp_greater_or_equal, unit)) &&
    (!state.unit                || matchEquippedUnit(state.unit, unit.unit))
  );
}

export function matchAffectedEquipmentState(
  state: EquipmentEffectActivationState,
  affected: ReadonlyArray<BattleEffect>
): boolean {
  return (
    (!state.affected || matchAffected(state.affected, affected)) &&
    (!state.tagged   || matchTagged(state.tagged, affected))
  );
}
