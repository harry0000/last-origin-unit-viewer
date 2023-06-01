/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { ReactNode } from 'react';
import { StringMap, TFunction } from 'i18next';
import { useTranslation } from 'react-i18next';

import SkillEffectTargetView from './SkillEffectTargetView';
import UnitAliasView from './UnitAliasView';

import {
  ActivationEnemyState,
  ActivationSelfState,
  ActivationSquadState,
  ActivationTargetState,
  NumOfUnitsInSquadState,
  SelfSkillEffectActivationCondition,
  SelfSkillEffectActivationState,
  SkillEffectActivationCondition,
  SkillEffectActivationState,
  TargetSkillEffectActivationCondition,
  UnitAliasAndRole
} from '../../domain/skill/SkillEffectActivationCondition';
import { Effect } from '../../domain/Effect';
import { EffectActivationState } from '../../domain/EffectActivationState';
import { EffectTrigger } from '../../domain/EffectTrigger';
import { PassiveSkillEffective } from '../../domain/skill/SkillEffective';
import { SkillAreaType } from '../../domain/skill/SkillAreaOfEffect';
import { SkillEffect, isTargetSkillEffect } from '../../domain/skill/UnitSkills';
import { SkillEffectScaleFactor } from '../../domain/skill/SkillEffectScaleFactor';
import { SkillEffectTarget } from '../../domain/skill/SkillEffectTarget';
import { UnitAlias, isUnitAlias, unitNumbersForAlias } from '../../domain/UnitAlias';
import { UnitNumber, UnitRole, UnitType } from '../../domain/UnitBasicInfo';

import SkillEffectConditionViewModel from './SkillEffectConditionViewModel';

import { Entry, typedEntries } from '../../util/object';
import { ifNonNullable, ifTruthy } from '../../util/react';
import { isReadonlyArray, ValueOf } from '../../util/type';

function needSeparator(array: ReadonlyArray<unknown>, index: number): boolean {
  return ++index < array.length;
}

function stateValuesView(
  entry: Entry<ActivationSelfState> | Entry<ActivationTargetState>,
  unitNumber: UnitNumber,
  t: TFunction
): ReactNode {
  switch (entry[0]) {
  case EffectActivationState.HpGreaterOrEqual:
  case EffectActivationState.HpLessOrEqual:
  case EffectActivationState.HpGreaterThan:
  case EffectActivationState.HpLessThan:
    return (<span>{t(`effect:condition.state.${entry[0]}`, { value: entry[1] })}</span>);
  case EffectActivationState.HpRateGreaterOrEqualThanSelf:
    return (<span>{t(`effect:condition.state.${entry[0]}`)}</span>);
  case EffectActivationState.StatusGreaterThanSelf:
  case EffectActivationState.StatusLessThanSelf:
    return (<span>{t(`effect:condition.state.${entry[0]}`, entry[1])}</span>);
  case EffectActivationState.StatusGreaterOrEqualThan:
    return (<span>{t(`effect:condition.state.${entry[0]}`, entry[1])}</span>);
  case EffectActivationState.RankGreaterOrEqual:
    return (<span>{t(`effect:condition.state.${entry[0]}`, { rank: entry[1] })}</span>);
  case EffectActivationState.Affected:
    return (<span>{t(`effect:condition.state.${entry[0]}`, { effect: entry[1] })}</span>);
  case EffectActivationState.NotAffected: {
    const effects = entry[1]
      .map(e => t(`effect:effect.name.${e}`))
      .join(t('effect:and_symbolic_separator'));
    return (<span>{t(`effect:condition.state.${entry[0]}`, { effects })}</span>);
  }
  case EffectActivationState.AffectedBy:
    return affectedByStateView(entry[1], t);
  case EffectActivationState.Tagged: {
    const state = entry[1];
    return isReadonlyArray(state) ?
      (<span>{t('effect:condition.state.multiple_tagged', { tag1: state[0], tag2: state[1] })}</span>) :
      (<span>{t(`effect:condition.state.${entry[0]}`, { tag: state })}</span>);
  }
  case EffectActivationState.NotTagged:
    return (<span>{t(`effect:condition.state.${entry[0]}`, { tag: entry[1] })}</span>);
  case EffectActivationState.TaggedAffected:
  case EffectActivationState.NotTaggedAffected:
    return (<span>{t(`effect:condition.state.${entry[0]}`, entry[1])}</span>);
  case EffectActivationState.Stack:
    if ('effect' in entry[1]) {
      return t('effect:condition.state.tag_effect_stack_ge', entry[1]);
    } else if ('equal' in entry[1]) {
      return t('effect:condition.state.tag_stack_eq', entry[1]);
    } else {
      const { tag } = entry[1];
      const isMultipleTag = isReadonlyArray(tag);
      const prefix = isMultipleTag ? 'tags_' : 'tag_';
      const suffix = 'greater_or_equal' in entry[1] ? 'stack_ge' : 'stack_le';
      const options: StringMap = {
        ...entry[1],
        ...(isMultipleTag ?
          { tags: tag.map(tagKey => t('effect:tag.format', { tag: tagKey })).join(t('effect:or_symbolic_separator')) }:
          {}
        )
      };

      return t(`effect:condition.state.${prefix}${suffix}`, options);
    }
  case EffectActivationState.Form:
    return (<span>{t(`effect:condition.state.${entry[0]}`, { form: entry[1] })}</span>);
  case EffectActivationState.Equipped: {
    const equipment = t(`equipment:${entry[1]}`);
    return (<span>{t(`effect:condition.state.${entry[0]}`, { equipment })}</span>);
  }
  case EffectActivationState.NotEquipped: {
    const equipments = entry[1]
      .map(e => `${t('effect:with_quotes', { value: t(`equipment:${e}`) })}`)
      .join(t('effect:unit_separator'));
    return (<span>{t(`effect:condition.state.${entry[0]}`, { equipments })}</span>);
  }
  case EffectActivationState.Grid:
    return (<span>{t(`effect:condition.state.${entry[0]}`, { grid: entry[1] })}</span>);
  case EffectActivationState.Unit:
    return unitStateView(entry[0], entry[1], unitNumber, t);
  default: {
    const _exhaustiveCheck: never = entry;
    return _exhaustiveCheck;
  }
  }
}

function affectedByStateView(
  state: ValueOf<ActivationSelfState, typeof EffectActivationState.AffectedBy>,
  t: TFunction
): Exclude<ReactNode, undefined> {
  if ('alias' in state) {
    return (
      <React.Fragment>
        {t('effect:with_quotes', { value: t('unit:display', { number: state.except }) })}
        {t('effect:except_preposition')}
        <UnitAliasView unitAlias={state.alias} exceptUnit={state.except} />
        {t('effect:condition.state.affected_by_alias')}
      </React.Fragment>
    );
  } else {
    if ('effect' in state) {
      const key = 'unit' in state ? 'affected_effect_by' : 'affected_equipment_effect_by';
      return (<span>{t(`effect:condition.state.${key}`, state as StringMap)}</span>);
    } else {
      return (<span>{t('effect:condition.state.affected_by', state)}</span>);
    }
  }
}

function unitStateView(key: typeof EffectActivationState.InSquad, state: ValueOf<ActivationSquadState, typeof EffectActivationState.InSquad> | ReadonlyArray<UnitNumber>, selfUnitNumber: UnitNumber, t: TFunction): Exclude<ReactNode, undefined>
function unitStateView(key: typeof EffectActivationState.NotInSquad, state: ValueOf<ActivationSquadState, typeof EffectActivationState.NotInSquad> | 41, selfUnitNumber: UnitNumber, t: TFunction): Exclude<ReactNode, undefined>
function unitStateView(key: typeof EffectActivationState.Unit, state: typeof UnitAlias.SteelLine | typeof UnitType.Flying, selfUnitNumber: UnitNumber, t: TFunction): Exclude<ReactNode, undefined>
function unitStateView(
  key: typeof EffectActivationState['InSquad' | 'NotInSquad' | 'Unit' | 'NumOfUnitsLessThanEnemies'],
  state:
    UnitNumber |
    ReadonlyArray<UnitNumber> |
    UnitAliasAndRole<typeof UnitAlias['SteelLine' | 'AACannonier'], typeof UnitRole.Supporter> |
    UnitAliasAndRole<typeof UnitAlias.Strikers, typeof UnitRole.Attacker> |
    typeof UnitAlias[
      'ElectricActive' |
      'SteelLine' |
      'SteelLineOfficerRanks' |
      'SteelLineExcludingOfficerRanks' |
      'Horizon' |
      'Kunoichi' |
      'DEntertainment' |
      'KouheiChurch' |
      'EmpressHound' |
      'Mermaid'
    ] |
    typeof SkillAreaType.CrossAdjacent |
    UnitType |
    UnitRole |
    'golden_factory' |
    { [EffectActivationState.Tagged]: 'younger_sister' } |
    { equipment: 'hot_pack', effect: typeof Effect.MinimumIceResistUp },
  selfUnitNumber: UnitNumber,
  t: TFunction
): Exclude<ReactNode, undefined> {
  function unitName(unit: UnitNumber): string {
    return t('effect:with_quotes', { value: t('unit:display', { number: unit }) });
  }

  if (typeof state === 'number') {
    return (
      <span>{t(`effect:condition.state.${key}`, { unit: unitName(state) })}</span>
    );
  } else if (isReadonlyArray(state)) {
    const units = state.map(u => unitName(u)).join(t('effect:unit_separator'));
    return (
      <span>{t(`effect:condition.state.${key}`, { unit: units })}</span>
    );
  } else if (typeof state === 'string') {
    // TODO: Move excepting logic from view.
    const isSquadCond = key === EffectActivationState.InSquad || key === EffectActivationState.NotInSquad;
    if (isUnitAlias(state)) {
      return (
        <React.Fragment>
          {ifTruthy(
            isSquadCond && unitNumbersForAlias[state].has(selfUnitNumber),
            (<span>{t('effect:unit.self')}{t('effect:except_preposition')}</span>)
          )}
          <UnitAliasView unitAlias={state} exceptUnit={isSquadCond ? selfUnitNumber : undefined} />
          <span>{t(`effect:condition.state.${key}`, { unit: '' })}</span>
        </React.Fragment>
      );
    } else {
      const isTypeOrRole = state !== 'cross_adjacent' && state !== 'golden_factory';
      return (
        <React.Fragment>
          {ifTruthy(
            isSquadCond && isTypeOrRole,
            (<span>{t('effect:unit.self')}{t('effect:except_preposition')}</span>)
          )}
          <span>{t(`effect:condition.state.${key}`, { unit: t(`effect:unit.${state}`) })}</span>
        </React.Fragment>
      );
    }
  } else if ('alias' in state) {
    return (
      <React.Fragment>
        <UnitAliasView unitAlias={state.alias} />
        {t('effect:of_preposition')}
        {t(`effect:unit.${state.role}`)}
        {t(`effect:condition.state.${key}`, { unit: '' })}
      </React.Fragment>
    );
  } else {
    return EffectActivationState.Tagged in state ?
      (<span>
        {t('effect:condition.state.tagged', { tag: state.tagged })}
        {t('effect:condition.state.in_squad', { unit: t('effect:unit.ally') })}
      </span>) :
      (<span>{t('effect:condition.state.affected_equipment_effect_by', state)}</span>);
  }
}

const SelfAndTargetStateView: React.FC<{
  state: ReadonlyArray<ActivationSelfState>,
  unitNumber: UnitNumber
} | {
  state: ReadonlyArray<ActivationTargetState>,
  target: SkillEffectTarget,
  unitNumber: UnitNumber
}> = (props) => {
  const { t } = useTranslation();
  const { state, unitNumber } = props;

  return (
    <React.Fragment>
      {
        'target' in props ?
          (<React.Fragment>
            <SkillEffectTargetView target={props.target} selfUnitNumber={unitNumber} />
            {t('effect:case_particle')}
          </React.Fragment>) :
          t('effect:condition.target.self')
      }
      {state.map((v, i: number) => {
        return (
          <React.Fragment key={JSON.stringify(v)}>
            {typedEntries(v).map((entry, i, entries) => (
              <React.Fragment key={entry[0]}>
                {stateValuesView(entry, unitNumber, t)}
                {ifTruthy(needSeparator(entries, i), (<span>{t('effect:and_symbolic_separator')}</span>))}
              </React.Fragment>
            ))}
            {ifTruthy(needSeparator(state, i), (<span>{t('effect:or_symbolic_separator')}</span>))}
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
};

type NumOfCrossAdjacent = NumOfUnitsInSquadState['num_of_units'] & { unit: typeof SkillAreaType.CrossAdjacent }

function isNumOfCrossAdjacent(arg: NumOfUnitsInSquadState['num_of_units']): arg is NumOfCrossAdjacent {
  return arg.unit === SkillAreaType.CrossAdjacent;
}

const SquadStateView: React.FC<{
  state: ValueOf<SkillEffectActivationState, 'squad'>,
  unitNumber: UnitNumber
}> = ({ state, unitNumber }) => {
  const { t } = useTranslation();

  const numOfCrossAdjacent = (state: NumOfCrossAdjacent): string => {
    return 'equal' in state ?
      t('effect:condition.state.cross_adjacent_eq', state) :
      'less_or_equal' in state ?
        t('effect:condition.state.cross_adjacent', state) :
        t('effect:condition.state.cross_adjacent_ge', state);
  };

  if (isReadonlyArray(state)) {
    return (
      <React.Fragment>
        {t('effect:condition.target.squad')}
        {
          state.length === 2 ?
            (<React.Fragment>
              {unitStateView(EffectActivationState.NotInSquad, state[0].not_in_squad, unitNumber, t)}
              <span>{t('effect:or_symbolic_separator')}</span>
              {unitStateView(EffectActivationState.InSquad, state[1].in_squad, unitNumber, t)}
            </React.Fragment>) :
            unitStateView(EffectActivationState.InSquad, state.map(s => s.in_squad), unitNumber, t)
        }
      </React.Fragment>
    );
  } else {
    return EffectActivationState.NumOfUnitsLessThanEnemies in state ?
      (<span>{t(`effect:condition.state.${EffectActivationState.NumOfUnitsLessThanEnemies}`)}</span>) :
      (<React.Fragment>
        {t('effect:condition.target.squad')}
        {
          typedEntries(state).map((entry, i, array) => {
            const Separator = () => (
              <React.Fragment>{ifTruthy(needSeparator(array, i), t('effect:and_symbolic_separator'))}</React.Fragment>
            );

            switch (entry[0]) {
            case EffectActivationState.InSquad:
              return (
                <React.Fragment key={entry[0]}>
                  {unitStateView(EffectActivationState.InSquad, entry[1], unitNumber, t)}
                  <Separator />
                </React.Fragment>
              );
            case EffectActivationState.NotInSquad:
              return (
                <React.Fragment key={entry[0]}>
                  {unitStateView(EffectActivationState.NotInSquad, entry[1], unitNumber, t)}
                  <Separator />
                </React.Fragment>
              );
            case EffectActivationState.NumOfUnits: {
              const squadState = entry[1];
              return (
                <React.Fragment key={entry[0]}>
                  {
                    isNumOfCrossAdjacent(squadState) ?
                      numOfCrossAdjacent(squadState) :
                      'equal' in squadState ?
                        t('effect:condition.state.num_of_units_eq', squadState) :
                        'greater_or_equal' in squadState ?
                          t('effect:condition.state.num_of_units_ge', squadState as StringMap) :
                          t('effect:condition.state.num_of_units_le', squadState as StringMap)
                  }
                  <Separator />
                </React.Fragment>
              );
            }
            default: {
              const _exhaustiveCheck: never = entry;
              return _exhaustiveCheck;
            }
            }
          })
        }
      </React.Fragment>);
  }
};

const EnemyStateView: React.FC<{
  state: ActivationEnemyState
}> = ({ state }) => {
  const { t } = useTranslation();
  const { num_of_units } = state;

  return (
    <React.Fragment>
      {
        'unit' in num_of_units ?
          t('effect:condition.target.enemy_unit', num_of_units) :
          t('effect:condition.target.enemy')
      }
      {
        'equal' in num_of_units ?
          t('effect:condition.state.num_of_enemies_eq', num_of_units) :
          'less_or_equal' in num_of_units ?
            t('effect:condition.state.num_of_enemies', num_of_units as StringMap) :
            t('effect:condition.state.num_of_enemies_ge', num_of_units as StringMap)
      }
    </React.Fragment>
  );
};

const TriggerView: React.FC<{
  condition: SkillEffectActivationCondition,
  unitNumber: UnitNumber
}> = ({ condition, unitNumber }) => {
  const { t } = useTranslation();

  if (!('trigger' in condition)) {
    return null;
  }

  switch (condition.trigger) {
  case EffectTrigger.StartRound:
    return (
      <React.Fragment>
        {
          condition.round ?
            'at' in condition.round ?
              t('effect:condition.trigger.round.at', { round: condition.round.at }) :
              'from' in condition.round ?
                t('effect:condition.trigger.round.from', { round: condition.round.from }) :
                t('effect:condition.trigger.round.until', { round: condition.round.until }) :
            t('effect:condition.trigger.start_round')
        }
      </React.Fragment>
    );
  case EffectTrigger.UseActive1:
  case EffectTrigger.UseActive2:
  case EffectTrigger.HitActive1:
  case EffectTrigger.HitActive2:
    return (
      <React.Fragment>
        {
          [
            ...('round' in condition ? [t(`effect:condition.trigger.round.${condition.round}`)] : []),
            t(`effect:condition.trigger.${condition.trigger}`, { unit: unitNumber })
          ].join('')
        }
      </React.Fragment>
    );
  case EffectTrigger.SeizeOpportunity:
    return (
      <React.Fragment>
        {
          [...unitNumbersForAlias[UnitAlias.NotApplicableForSeizeOpportunity]].map(number =>
            t('effect:with_quotes', { value: t('unit:display', { number }) })
          ).join(t('effect:unit_separator'))
        }
        {t('effect:except_preposition')}
        <UnitAliasView unitAlias={UnitAlias.ApplicableForSeizeOpportunity} />
        {t('effect:case_particle')}
        {t(`effect:condition.trigger.${condition.trigger}`)}
      </React.Fragment>
    );
  default:
    return (<React.Fragment>{t(`effect:condition.trigger.${condition.trigger}`)}</React.Fragment>);
  }
};

const ConditionStateView: React.FC<{
  condition: SelfSkillEffectActivationCondition,
  unitNumber: UnitNumber
} | {
  condition: TargetSkillEffectActivationCondition,
  target: SkillEffectTarget,
  unitNumber: UnitNumber
}> = (props) => {
  const { t } = useTranslation();
  const { unitNumber } = props;

  if (!('state' in props.condition)) {
    return null;
  }

  const Separator = ({ show }: { show: boolean }) => (
    <React.Fragment>{ifTruthy(show, t('effect:and_symbolic_separator'))}</React.Fragment>
  );
  const NotTargetStateView = ({ entry, unitNumber, needSeparator }: {
    entry: Entry<SelfSkillEffectActivationState>,
    unitNumber: UnitNumber,
    needSeparator: boolean
  }) => {
    const [key, value] = entry;
    if (key === 'self') {
      return (
        <React.Fragment key={key}>
          <SelfAndTargetStateView state={value} unitNumber={unitNumber} />
          <Separator show={needSeparator} />
        </React.Fragment>
      );
    } else if (key === 'squad') {
      return (
        <React.Fragment key={key}>
          <SquadStateView key={key} state={value} unitNumber={unitNumber} />
          <Separator show={needSeparator} />
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment key={key}>
          <EnemyStateView state={value}/>
          <Separator show={needSeparator} />
        </React.Fragment>
      );
    }
  };

  return (
    <React.Fragment>
      {'target' in props ?
        typedEntries(props.condition.state).map((entry, i, array) =>
          entry[0] === 'target' ?
            (
              <React.Fragment key={entry[0]}>
                <SelfAndTargetStateView state={entry[1]} target={props.target} unitNumber={unitNumber} />
                <Separator show={needSeparator(array, i)} />
              </React.Fragment>
            ) :
            entry[0] === 'squad' ?
              (
                <React.Fragment key={entry[0]}>
                  <SquadStateView state={entry[1]} unitNumber={unitNumber} />
                  <Separator show={needSeparator(array, i)} />
                </React.Fragment>
              ) :
              (<NotTargetStateView key={entry[0]} entry={entry} unitNumber={unitNumber} needSeparator={needSeparator(array, i)} />)
        ) :
        typedEntries(props.condition.state).map((entry, i, array) => (
          <NotTargetStateView key={entry[0]} entry={entry} unitNumber={unitNumber} needSeparator={needSeparator(array, i)} />
        ))
      }
      {t('effect:case')}
    </React.Fragment>
  );
};

const ConditionRow: React.FC<{
  condition: SelfSkillEffectActivationCondition,
  unitNumber: UnitNumber
} | {
  condition: TargetSkillEffectActivationCondition,
  target: SkillEffectTarget,
  unitNumber: UnitNumber
}> = (props) => {
  const { t } = useTranslation();
  const { condition, unitNumber } = props;
  const needSeparator = 'trigger' in condition && 'state' in condition;

  return (
    <span>
      <TriggerView condition={condition} unitNumber={unitNumber} />
      {ifTruthy(needSeparator, t('effect:separator'))}
      {'target' in props ?
        <ConditionStateView condition={props.condition} target={props.target} unitNumber={unitNumber} /> :
        <ConditionStateView condition={props.condition} unitNumber={unitNumber} />}
    </span>
  );
};

const EnemyCondition: React.FC<{
  target: NonNullable<SkillEffectConditionViewModel['enemyTargetConditions']>
}> = ({ target }) => {
  const { t } = useTranslation();
  const unit = target.conditions.map(cond => t(`effect:unit.${cond}`)).join(t('effect:unit_separator'));

  return (
    <React.Fragment>
      {t('effect:effect.target.kind.enemy')}
      {t('effect:case_particle')}
      {t('effect:condition.state.unit', { unit })}
      {t('effect:case')}
    </React.Fragment>
  );
};

const EffectiveView: React.FC<{ effective: PassiveSkillEffective | undefined }> = ({ effective }) => {
  const { t } = useTranslation();

  return ifNonNullable(effective, v => (<span>{t(`effect:effective.${v}`)}</span>));
};

const EffectScaleFactorView: React.FC<{
  scaleFactor: SkillEffectScaleFactor | undefined,
  unitNumber: UnitNumber
}> = ({ scaleFactor, unitNumber }) => {
  const { t } = useTranslation();

  return ifNonNullable(
    scaleFactor,
    v => {
      if ('per_stack' in v) {
        const key = 'effect' in v.per_stack ?
          'effect:scale_factor.per_stack_effect' :
          'effect:scale_factor.per_stack';
        return (<span>{t(key, v.per_stack)}</span>);
      } else  {
        switch (v.per_units.type) {
        case 'all':
          return (<span>{t('effect:scale_factor.per_units')}</span>);
        case 'squad': {
          const { unit = 'ally', except } = v.per_units;
          const exceptSelf = !!except;
          return (
            <React.Fragment>
              {ifTruthy(exceptSelf, (<span>{t('effect:unit.self')}{t('effect:except_preposition')}</span>))}
              {
                isReadonlyArray(unit) ?
                  (<React.Fragment>
                    <UnitAliasView unitAlias={unit[0]} exceptUnit={exceptSelf ? unitNumber : undefined} />
                    <span>&nbsp;{t('effect:unit_separator')}&nbsp;</span>
                    <UnitAliasView unitAlias={unit[1]} exceptUnit={exceptSelf ? unitNumber : undefined} />
                  </React.Fragment>) :
                  isUnitAlias(unit) ?
                    (<UnitAliasView unitAlias={unit} exceptUnit={exceptSelf ? unitNumber : undefined} />) :
                    (<span>{t(`effect:unit.${unit}`)}</span>)
              }
              <span>{t('effect:scale_factor.num_of_allies')}</span>
            </React.Fragment>
          );
        }
        case 'enemy':
          return (
            <span>
              {t('effect:unit.enemy')}
              {ifNonNullable(v.per_units.unit, unit => t(`effect:unit.${unit}`))}
              {t(`effect:scale_factor.${v.per_units.variation}`)}
            </span>
          );
        }
      }
    }
  );
};

const EffectTargetsView: React.FC<{
  targets: SkillEffectConditionViewModel['effectTargets'],
  unitNumber: UnitNumber
}> = ({ targets, unitNumber }) => {
  const { t } = useTranslation();

  return (
    <span>
      {ifTruthy('self' in targets, t('effect:effect.target.self'))}
      {ifTruthy('self' in targets && 'target' in targets, t('effect:and_separator'))}
      {
        'target' in targets ?
          'kind' in targets ?
            <SkillEffectTargetView target={targets} selfUnitNumber={unitNumber} /> :
            t('effect:effect.target.target') :
          null
      }
      {ifTruthy('around' in targets, t('effect:effect.target.around'))}
      {t('effect:to_preposition')}
    </span>
  );
};

const SkillEffectConditionView: React.FC<{
  effect: SkillEffect,
  unitNumber: UnitNumber
}> = ({ effect, unitNumber }) => {
  const { t } = useTranslation();
  const model = new SkillEffectConditionViewModel(effect);

  const OrConjunction = () => (<div css={{ fontSize: '0.7em' }}>{t('effect:or_conjunction')}</div>);
  const Conditions = () => {
    if (isTargetSkillEffect(effect)) {
      const conditions =
        effect.conditions ?
          effect.conditions.length === 1 ?
            (<ConditionRow condition={effect.conditions[0]} target={effect.target} unitNumber={unitNumber} />) :
            (
              <React.Fragment>
                <ConditionRow condition={effect.conditions[0]} target={effect.target} unitNumber={unitNumber} />
                <OrConjunction />
                <ConditionRow condition={effect.conditions[1]} target={effect.target} unitNumber={unitNumber} />
              </React.Fragment>
            ) :
          null;
      return (
        <React.Fragment>
          {conditions}
          {ifNonNullable(model.enemyTargetConditions, enemyTarget => (
            <React.Fragment>
              {ifTruthy(!!conditions, t('effect:separator'))}
              <EnemyCondition target={enemyTarget} />
            </React.Fragment>
          ))}
        </React.Fragment>
      );
    } else {
      return ifNonNullable(
        effect.conditions,
        conds =>
          conds.length === 1 ?
            (<ConditionRow condition={conds[0]} unitNumber={unitNumber} />) :
            (
              <React.Fragment>
                <ConditionRow condition={conds[0]} unitNumber={unitNumber} />
                <OrConjunction />
                <ConditionRow condition={conds[1]} unitNumber={unitNumber} />
              </React.Fragment>
            )
      );
    }
  };
  const Additional = ({ children }: { children: ReactNode }) => {
    return (
      model.hasAnyConditions ?
        model.hasMultipleConditions ?
          (<div css={{ marginTop: 5 }}>{children}</div>) :
          (<span>{t('effect:separator')}{children}</span>) :
        (<span>{children}</span>)
    );
  };

  return (
    <div>
      <Conditions />
      <Additional>
        <EffectiveView effective={model.effective} />
        <EffectScaleFactorView scaleFactor={model.scaleFactor} unitNumber={unitNumber} />
        <EffectTargetsView targets={model.effectTargets} unitNumber={unitNumber} />
        {t('effect:below_effects')}
      </Additional>
    </div>
  );
};

export default SkillEffectConditionView;
