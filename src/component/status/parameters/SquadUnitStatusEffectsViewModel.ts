import {
  AccBattleEffect,
  ApBattleEffect,
  AtkBattleEffect,
  AtkValueUpBattleEffect,
  BattleEffect,
  CriBattleEffect,
  DefBattleEffect,
  DefValueUpBattleEffect,
  ElectricResistBattleEffect,
  EvaBattleEffect,
  FireResistBattleEffect,
  IceResistBattleEffect,
  MinimumIceResistUpBattleEffect,
  SpdBattleEffect
} from '../../../domain/squad/simulator/BattleEffect';
import { Effect } from '../../../domain/Effect';
import { EquipmentType } from '../../../domain/equipment/EquipmentData';
import {
  MicroValue,
  MilliValue,
  calcMilliPercentageValue,
  calcMicroValue,
  calcMilliValue,
  productMicroValue,
  reverseMicroValueSign,
  reverseMilliPercentageValueSign,
  sumMicroValues,
  sumMilliPercentageValues
} from '../../../domain/ValueUnit';
import { SkillEffectActivationRate } from '../../../domain/skill/SkillEffectActivationRate';
import { SkillEffectScaleFactor } from '../../../domain/skill/SkillEffectScaleFactor';
import { SkillEffectTag } from '../../../domain/skill/SkillEffectTag';
import { SkillEffectType } from '../../../domain/skill/SkillEffectType';
import { hasFormChangeUnitNumber } from '../../../domain/UnitFormValue';
import { extractNo, extractType } from '../../../domain/skill/SkillType';

import { UnitStatusEffectValue, buildSquadUnitStatusEffectValueViewModel } from './StatusEffectsSummaryViewModel';
import {
  appendPercentage,
  buildNumberFormatter,
  formatApValue,
  formatMilliPercentage,
  formatMilliValue
} from './UnitStatusParameterFormatter';
import { effectValueColor } from '../../common/effectValueColor';

import {
  AtkValueUpByUnitBattleEffectValue,
  BattleEffectExcludeAPEffect
} from '../../../state/status/parameters/UnitStatusParameterState';

import { ValueOf } from '../../../util/type';

type PercentageStatusBattleEffect =
  AtkBattleEffect |
  DefBattleEffect |
  AccBattleEffect |
  EvaBattleEffect |
  CriBattleEffect |
  SpdBattleEffect |
  FireResistBattleEffect |
  IceResistBattleEffect |
  ElectricResistBattleEffect |
  MinimumIceResistUpBattleEffect

type ValueStatusBattleEffect =
  AtkValueUpBattleEffect |
  DefValueUpBattleEffect

type EffectLabel = { tag: SkillEffectTag } | { key: string | string[] }

type ApplyingEffectAddition =
  { type: 'rate', key: 'percentage' | SkillEffectActivationRate, options?: { value: number } } |
  { type: 'times', value: number } |
  { type: 'cannot_be_dispelled' }

type ApplyingEffectTerm = {
  key: string,
  options?: { rounds: number }
}

type ApplyingEffectSource = {
  type: 'ally',
  source: { key: string, options: Record<string, unknown> },
  skill: { type: string, name: string | string[], lv: number }
} | {
  type: EquipmentType,
  source: { key: string, options: Record<string, unknown> }
}

export type SquadUnitStatusEffectDetails = {
  source: EffectLabel,
  scaled?: {
    key: string,
    options?: Record<string, unknown>
  },
  effect: UnitStatusEffectValue
}

function canUseTagAsSource(effect: BattleEffect['effect']): boolean {
  switch (effect) {
  case Effect.TagStack:
  case Effect.ActivationRatePercentageUp:
  case Effect.AbsolutelyActivated:
    return false;
  default:
    return true;
  }
}

function getSkillName(
  affectedBy: Extract<BattleEffect['affected_by'], { type: 'ally' }>
): Extract<EffectLabel, { key: string | string[] }> {
  const form = hasFormChangeUnitNumber(affectedBy) ? affectedBy.form : undefined;
  const defaultKey = `skill:name.${affectedBy.no}.${extractType(affectedBy.skillType)}.${extractNo(affectedBy.skillType)}`;

  return {
    key: form ?
      [`${defaultKey}.${form}`, defaultKey] :
      defaultKey
  };
}

function buildSourceOfEffectLabel({ effect, value, affected_by }: BattleEffect): EffectLabel {
  return 'tag' in value && value.tag && canUseTagAsSource(effect) ?
    { tag: value.tag } :
    affected_by.type === 'equipment' ?
      { key: `equipment:${affected_by.id}` } :
      getSkillName(affected_by);
}

function getColorStyle(effect: PercentageStatusBattleEffect['effect']): UnitStatusEffectValue['colorStyle'] {
  return effect.endsWith('_up') ? effectValueColor.positive : effectValueColor.negative;
}

function buildEffectValue({ effect, value }: PercentageStatusBattleEffect): UnitStatusEffectValue {
  const colorStyle = value.milliPercentage === 0 ? undefined : getColorStyle(effect);
  const sign = colorStyle === effectValueColor.negative ? '-' : '+';

  return {
    value: appendPercentage(formatMilliPercentage(value)),
    colorStyle,
    sign
  };
}

function buildApEffectValue({ effect, value }: ApBattleEffect): UnitStatusEffectValue {
  const colorStyle =
    value.microValue === 0 ? undefined :
      effect === Effect.ApDown ?
        effectValueColor.negative :
        effectValueColor.positive;
  const sign = colorStyle === effectValueColor.negative ? '-' : '+';

  return {
    value: formatApValue(value),
    colorStyle,
    sign
  };
}

function getUnitTargetKey(factor: ValueOf<SkillEffectScaleFactor, 'per_units'>): string {
  switch (factor.type) {
  case 'all':
    return 'all_units';
  case 'squad':
    return 'unit' in factor ? 'target_ally' : 'ally';
  case 'enemy':
    return 'unit' in factor ? 'target_enemy' : 'enemy';
  }
}

function buildScaled(
  effect: BattleEffect
): Pick<SquadUnitStatusEffectDetails, 'scaled'> | Record<string, never> {
  if ('scaled' in effect && effect.scaled) {
    const { by, value } = effect.scaled;
    if ('per_stack' in by) {
      return {
        scaled: {
          key: 'tag_stack',
          options: { value, tag: by.per_stack.tag }
        }
      };
    } else {
      return {
        scaled: {
          key: getUnitTargetKey(by.per_units),
          options: { value }
        }
      };
    }
  }

  return {};
}

function buildBattleEffectProps(effect: PercentageStatusBattleEffect): SquadUnitStatusEffectDetails {
  return {
    source: buildSourceOfEffectLabel(effect),
    effect: buildEffectValue(effect),
    ...buildScaled(effect)
  };
}

function buildApBattleEffectProps(effect: ApBattleEffect): SquadUnitStatusEffectDetails {
  return {
    source: buildSourceOfEffectLabel(effect),
    effect: buildApEffectValue(effect),
    ...buildScaled(effect)
  };
}

export class SquadUnitStatusEffectsViewModel {

  static build(
    ...args:
      [status: 'atk', rateEffects: ReadonlyArray<AtkBattleEffect>, rateEffectSummary: MilliValue | undefined, valueUpEffects: ReadonlyArray<AtkValueUpBattleEffect>, valueUpByUnitEffects: ReadonlyArray<AtkValueUpByUnitBattleEffectValue>] |
      [status: 'def', rateEffects: ReadonlyArray<DefBattleEffect>, rateEffectSummary: MilliValue | undefined, valueUpEffects: ReadonlyArray<DefValueUpBattleEffect>] |
      [status: 'acc', rateEffects: ReadonlyArray<AccBattleEffect>] |
      [status: 'eva', rateEffects: ReadonlyArray<EvaBattleEffect>] |
      [status: 'cri', rateEffects: ReadonlyArray<CriBattleEffect>] |
      [status: 'spd', rateEffects: ReadonlyArray<SpdBattleEffect>, rateEffectSummary: MicroValue | undefined]
  ): SquadUnitStatusEffectsViewModel {
    switch (args[0]) {
    case 'atk':
      return new SquadUnitStatusEffectsViewModel(
        args[1],
        args[2] && buildSquadUnitStatusEffectValueViewModel(args[0], calcMilliValue(args[2])),
        args[3],
        args[4]
      );
    case 'def':
      return new SquadUnitStatusEffectsViewModel(
        args[1],
        args[2] && buildSquadUnitStatusEffectValueViewModel(args[0], calcMilliValue(args[2])),
        args[3]
      );
    case 'acc':
    case 'eva':
    case 'cri':
      return new SquadUnitStatusEffectsViewModel(args[1]);
    case 'spd':
      return new SquadUnitStatusEffectsViewModel(
        args[1],
        args[2] && buildSquadUnitStatusEffectValueViewModel(args[0], calcMicroValue(args[2]))
      );
    }
  }

  readonly reteEffects: ReadonlyArray<SquadUnitStatusEffectDetails>;
  readonly rateEffectSummary: { summary: string, value: UnitStatusEffectValue } | undefined;
  readonly valueUpEffects: ReadonlyArray<SquadUnitStatusEffectDetails>;
  readonly valueUpByUnitEffects: ReadonlyArray<SquadUnitStatusEffectDetails>;

  private constructor(
    reteBattleEffects: ReadonlyArray<PercentageStatusBattleEffect>,
    rateEffectValue: UnitStatusEffectValue | undefined = undefined,
    valueUpEffects: ReadonlyArray<ValueStatusBattleEffect> = [],
    valueUpByUnitEffects: ReadonlyArray<AtkValueUpByUnitBattleEffectValue> = [],
  ) {
    let summary = { milliPercentage: 0 };
    const reteEffects = reteBattleEffects.map(e => {
      const props = buildBattleEffectProps(e);

      summary = sumMilliPercentageValues(
        summary,
        props.effect.sign === '+' ? e.value : reverseMilliPercentageValueSign(e.value)
      );

      return props;
    });

    this.reteEffects = reteEffects;
    this.rateEffectSummary =
      reteEffects.length > 0 && rateEffectValue ?
        { summary: formatMilliPercentage(summary), value: rateEffectValue } :
        undefined;

    this.valueUpEffects = valueUpEffects.map(e => ({
      source: buildSourceOfEffectLabel(e),
      effect: {
        sign: '+',
        colorStyle: effectValueColor.positive,
        value: formatMilliValue(e.value)
      },
      ...buildScaled(e)
    }));
    this.valueUpByUnitEffects = valueUpByUnitEffects.map(({ effect, value }) => ({
      source: buildSourceOfEffectLabel(effect),
      effect: {
        sign: '+',
        colorStyle: effectValueColor.positive,
        value: formatMilliValue(value)
      },
      ...buildScaled(effect)
    }));
  }

  get hasEffects(): boolean {
    return (
      this.reteEffects.length !== 0 ||
      this.valueUpEffects.length !== 0 ||
      this.valueUpByUnitEffects.length !== 0
    );
  }
}

function getAttributeStatusKey(status: 'fireResist' | 'iceResist' | 'electricResist'): string {
  switch (status) {
  case 'fireResist':     return 'fire_resist';
  case 'iceResist':      return 'ice_resist';
  case 'electricResist': return 'electric_resist';
  }
}

export class SquadUnitAttributeResistEffectsViewModel {

  static build(
    ...[status, rateEffects, minimumRateUpEffects]:
      [status: 'fireResist',     rateEffects: ReadonlyArray<FireResistBattleEffect>] |
      [status: 'iceResist',      rateEffects: ReadonlyArray<IceResistBattleEffect>, minimumRateUpEffects: ReadonlyArray<MinimumIceResistUpBattleEffect>] |
      [status: 'electricResist', rateEffects: ReadonlyArray<ElectricResistBattleEffect>]
  ): SquadUnitAttributeResistEffectsViewModel {
    switch (status) {
    case 'fireResist':
    case 'electricResist':
      return new SquadUnitAttributeResistEffectsViewModel(status, rateEffects);
    case 'iceResist':
      return new SquadUnitAttributeResistEffectsViewModel(status, rateEffects, minimumRateUpEffects);
    }
  }

  readonly statusKey: string;
  readonly reteEffects: ReadonlyArray<SquadUnitStatusEffectDetails>;
  readonly minimumReteUpEffects: ReadonlyArray<SquadUnitStatusEffectDetails>;

  private constructor(
    status: 'fireResist' | 'iceResist' | 'electricResist',
    reteBattleEffects: ReadonlyArray<PercentageStatusBattleEffect>,
    minimumRateUpEffects: ReadonlyArray<MinimumIceResistUpBattleEffect> = []
  ) {
    this.statusKey = getAttributeStatusKey(status);
    this.reteEffects = reteBattleEffects.map(buildBattleEffectProps);
    this.minimumReteUpEffects = minimumRateUpEffects.map(buildBattleEffectProps);
  }

  get hasEffects(): boolean {
    return (
      this.reteEffects.length !== 0 ||
      this.minimumReteUpEffects.length !== 0
    );
  }

  get needReteEffectsLabel(): boolean {
    return this.reteEffects.length !== 0 && this.needMinimumReteUpLabel;
  }

  get needMinimumReteUpLabel(): boolean {
    return this.minimumReteUpEffects.length !== 0;
  }
}

export class SquadUnitApEffectsViewModel {

  readonly apEffects: ReadonlyArray<SquadUnitStatusEffectDetails>;
  readonly initialAp: string;
  readonly apTickCount: number;
  readonly spdSummary: string;

  constructor(
    apBattleEffects: ReadonlyArray<ApBattleEffect>,
    tickCount: number,
    spd: MicroValue
  ) {
    let initialApSummary = { microValue: 0 };
    this.apEffects = apBattleEffects.map(e => {
      const props = buildApBattleEffectProps(e);

      initialApSummary = sumMicroValues(
        initialApSummary,
        props.effect.sign === '+' ? e.value : reverseMicroValueSign(e.value)
      );

      return props;
    });

    this.apTickCount = tickCount;

    const microValueFormatter = buildNumberFormatter({ maximumFractionDigits: 6 });
    const getFractionDigits = (n: number): number =>
      microValueFormatter.formatToParts(n).reduce((acc, { type, value }) => type === 'fraction' ? value.length : acc, 0);

    const spdSummaryValue = calcMicroValue(productMicroValue(spd, tickCount));
    const initialApValue  = calcMicroValue(initialApSummary);

    const minimumFractionDigits = Math.max(getFractionDigits(spdSummaryValue), getFractionDigits(initialApValue));
    const formatter = buildNumberFormatter({ minimumFractionDigits });

    this.spdSummary = formatter.format(spdSummaryValue);
    this.initialAp = formatter.format(initialApValue);
  }
}

function getSkillEffectDescriptionKey({ effect, value }: BattleEffect): string {
  switch (effect) {
  case Effect.BattleContinuation:
    return 'milliPercentage' in value ? 'battle_continuation_with_hp_rate' : effect;
  case Effect.ActivationRatePercentageUp:
    return 'tag' in value ? 'tagged_activation_rate_percentage_up' : effect;
  // TODO: Effect.CooperativeAttack (need current unit form)
  case Effect.CooperativeAttack:
  default:
    return effect;
  }
}

function getCalculatedValue({ value }: BattleEffectExcludeAPEffect): { value: number } | Record<string, never> {
  if ('milliValue' in value) {
    return { value: calcMilliValue(value) };
  } else if ('milliPercentage' in value) {
    return { value: calcMilliPercentageValue(value) };
  } else if ('microValue' in value) {
    return { value: calcMicroValue(value) };
  }

  // value field already exists or does not exist.
  return {};
}

type DescriptionOptions = Record<string, unknown> & { effect?: Effect } & { effects?: ReadonlyArray<Effect> }

function buildBattleEffectDescription(
  battleEffect: BattleEffect
): { key: string, options: DescriptionOptions } {
  const key = getSkillEffectDescriptionKey(battleEffect);

  return {
    key,
    options: {
      ...battleEffect.value,
      ...getCalculatedValue(battleEffect)
    }
  };
}

function isNotSummonEffect(
  arg: Effect
): arg is Exclude<Effect, typeof Effect['AMG11Construction' | 'DeployRabbitDField' | 'SummonHologramTiger' | 'GoldenFactoryConstruction']> {
  switch (arg) {
  case Effect.AMG11Construction:
  case Effect.DeployRabbitDField:
  case Effect.SummonHologramTiger:
  case Effect.GoldenFactoryConstruction:
    return false;
  default:
    return true;
  }
}

function buildEffectAdditions({ effect, value }: BattleEffectExcludeAPEffect): ReadonlyArray<ApplyingEffectAddition> {
  const additions: Array<ApplyingEffectAddition> = [];

  if (value?.rate) {
    if (typeof value.rate === 'string') {
      additions.push({ type: 'rate', key: value.rate });
    } else {
      additions.push({ type: 'rate', key: 'percentage', options: { value: calcMilliPercentageValue(value.rate) } });
    }
  }

  if (value?.times && isNotSummonEffect(effect)) {
    additions.push({ type: 'times', value: value.times });
  }

  if ('cannot_be_dispelled' in value) {
    additions.push({ type: 'cannot_be_dispelled' });
  }

  return additions;
}

function getEffectTerm({ value }: BattleEffectExcludeAPEffect): ApplyingEffectTerm | undefined {
  if ('term' in value && value.term) {
    return typeof value.term === 'string' ?
      { key: `status.effect.term.${value.term}` } :
      { key: 'status.effect.term.for_rounds', options: { rounds: value.term.for_rounds } };
  }

  return undefined;
}

function getAffected({ affected_by }: BattleEffectExcludeAPEffect): ApplyingEffectSource {
  if (affected_by.type === 'ally') {
    return {
      type: affected_by.type,
      source: { key: 'status.effect.source.ally', options: affected_by },
      skill: {
        type: affected_by.skillType,
        name: getSkillName(affected_by).key,
        lv: affected_by.lv
      }
    };
  } else {
    return {
      type: affected_by.slot === 'chip1' || affected_by.slot === 'chip2' ? 'chip' : affected_by.slot,
      source: { key: 'status.effect.source.equipment', options: affected_by }
    };
  }
}

export class SquadUnitApplyingEffectViewModel {
  readonly effect: Effect;
  readonly type: SkillEffectType;
  readonly label: EffectLabel;

  readonly description: { key: string, options: DescriptionOptions };
  readonly additions: ReadonlyArray<ApplyingEffectAddition>;

  readonly term: ApplyingEffectTerm | undefined;

  readonly affected: ApplyingEffectSource;

  constructor(battleEffect: BattleEffectExcludeAPEffect) {
    this.effect = battleEffect.effect;
    this.type = battleEffect.type;
    this.label = buildSourceOfEffectLabel(battleEffect);

    this.description = buildBattleEffectDescription(battleEffect);
    this.additions = buildEffectAdditions(battleEffect);

    this.term = getEffectTerm(battleEffect);

    this.affected = getAffected(battleEffect);
  }

}
