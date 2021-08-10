/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { ReactElement, ReactNode } from 'react';
import { TFunction } from 'i18next';
import { useTranslation } from 'react-i18next';

import UnitAliasView from './UnitAliasView';

import {
  ActivationSelfState,
  ActivationSquadState,
  ActivationTargetState,
  SkillEffectActivationCondition,
  SkillEffectActivationState, UnitAliasAndRole, UnitAliasAndType, UnitTypeAndRole
} from '../../domain/skill/SkillEffectActivationCondition';
import { EffectActivationState } from '../../domain/EffectActivationState';
import { SkillEffect } from '../../domain/skill/UnitSkills';
import { isUnitAlias, UnitAlias } from '../../domain/UnitAlias';
import { UnitKind, UnitNumber, UnitRole, UnitType } from '../../domain/UnitBasicInfo';

import { NonNullableEntry } from '../../util/object';
import { ifNonNullable, ifTruthy } from '../../util/react';

type SkillEffectActivationStateValues =
  ReadonlyArray<ActivationSelfState> |
  ReadonlyArray<ActivationTargetState> |
  ReadonlyArray<ActivationSquadState>

type StateValuesEntry =
  NonNullableEntry<keyof ActivationSelfState, ActivationSelfState> |
  NonNullableEntry<keyof ActivationTargetState, ActivationTargetState> |
  NonNullableEntry<keyof ActivationSquadState, ActivationSquadState>

function isNeedSeparator(array: ReadonlyArray<unknown>, index: number): boolean {
  return array.length > 1 && index + 1 < array.length;
}

function stateValuesView(entry: StateValuesEntry, unitNumber: UnitNumber, t: TFunction): ReactNode {
  switch (entry[0]) {
  case 'hp_greater_or_equal':
  case 'hp_less_or_equal':
  case 'hp_greater_than':
  case 'hp_less_than':
    return (<span>{t(`effect:condition.state.${entry[0]}`, { value: entry[1] })}</span>);
  case 'effected':
    return (
      <span>{t(`effect:condition.state.${entry[0]}`, { effect: entry[1] })}</span>
    );
  case 'tagged':
    return (
      <span>{t(`effect:condition.state.${entry[0]}`, { tag: entry[1] })}</span>
    );
  case 'stack_ge':
    if ('effect' in entry[1]) {
      return t(
        'effect:condition.state.tag_effect_stack_ge',
        {
          tag: entry[1].tag,
          effect: entry[1].effect,
          value: entry[1].value
        }
      );
    } else {
      return t(
        'effect:condition.state.tag_stack_ge',
        { tag: entry[1].tag, value: entry[1].value }
      );
    }
  case 'form':
    return (
      <span>{t(`effect:condition.state.${entry[0]}`, { form: entry[1] })}</span>
    );
  case 'unit':
    return unitStateView(entry[0], entry[1], unitNumber, t);
  case 'in_squad':
  case 'effected_by':
    return unitStateView(entry[0], entry[1], unitNumber, t);
  case 'equipped':
    return (
      <span>{t(`effect:condition.state.${entry[0]}`, { equipment: t(`equipment:${entry[1]}`) })}</span>
    );
  case 'protected':
  case 'in_front_line':
  case 'in_mid_line':
  case 'in_back_line':
    return (<span>{t(`effect:condition.state.${entry[0]}`)}</span>);
  default: {
    const _exhaustiveCheck: never = entry;
    return _exhaustiveCheck;
  }
  }
}

function unitStateView(key: typeof EffectActivationState['InSquad' | 'Unit' | 'EffectedBy'], unit: UnitNumber | UnitAlias, selfUnitNumber: UnitNumber, t: TFunction): Exclude<ReactNode, undefined>
function unitStateView(key: typeof EffectActivationState['InSquad' | 'Unit' | 'EffectedBy'], unit: UnitKind | UnitType | UnitRole | UnitTypeAndRole | UnitAliasAndType | UnitAliasAndRole | UnitNumber | UnitAlias, selfUnitNumber: UnitNumber, t: TFunction): Exclude<ReactNode, undefined>
function unitStateView(
  key: typeof EffectActivationState['InSquad' | 'Unit' | 'EffectedBy'],
  unit: UnitNumber | UnitKind | UnitType | UnitRole | UnitTypeAndRole | UnitAliasAndType | UnitAliasAndRole | UnitAlias,
  selfUnitNumber: UnitNumber,
  t: TFunction
): Exclude<ReactNode, undefined> {
  if (typeof unit === 'number') {
    return (
      <span>
        {t(
          `effect:condition.state.${key}`,
          { unit: t('effect:with_quotes', { value: t('unit:display', { number: unit }) }) }
        )}
      </span>
    );
  } else if (typeof unit === 'string') {
    switch (unit) {
    case UnitKind.AGS:
    case UnitKind.Bioroid:
    case UnitType.Light:
    case UnitType.Heavy:
    case UnitType.Flying:
    case UnitRole.Attacker:
    case UnitRole.Defender:
    case UnitRole.Supporter:
      return (
        <span>
          {t(`effect:condition.state.${key}`, { unit: t(`effect:unit.${unit}`) })}
        </span>
      );
    case UnitAlias.ElectricActive:
    case UnitAlias.ArtilleryTypeActive:
    case UnitAlias.Squad21:
    case UnitAlias.CompanionSeries:
    case UnitAlias.SteelLine:
    case UnitAlias.SistersOfValhalla:
    case UnitAlias.AngerOfHorde:
    case UnitAlias.AACannonier:
    case UnitAlias.ArmoredMaiden:
    case UnitAlias.MongooseTeam:
    case UnitAlias.Horizon:
    case UnitAlias.TomosFriends:
    case UnitAlias.CityGuard:
    case UnitAlias.SpartanSeries:
      return (
        <React.Fragment>
          <UnitAliasView unitAlias={unit} selfUnitNumber={selfUnitNumber} />
          <span>{t(`effect:condition.state.${key}`, { unit: '' })}</span>
        </React.Fragment>
      );
    default: {
      const _exhaustiveCheck: never = unit;
      return _exhaustiveCheck;
    }
    }
  } else {
    if ('alias' in unit) {
      const target = 'type' in unit ? t(`effect:unit.${unit.type}`) : t(`effect:unit.${unit.role}`);
      return (
        <React.Fragment>
          <UnitAliasView unitAlias={unit.alias} selfUnitNumber={selfUnitNumber} />
          <span>{t('effect:of_preposition')}{t(`effect:condition.state.${key}`, { unit: target })}</span>
        </React.Fragment>
      );
    } else {
      const { type, role } = unit;
      const typeAndRole = `${t(`effect:unit.${type}`)}${t(`effect:unit.${role}`)}`;
      return (<span>{t(`effect:condition.state.${key}`, { unit: typeAndRole })}</span>);
    }
  }
}

function stateValuesPerTargetView(
  target: string,
  values: SkillEffectActivationStateValues,
  unitNumber: UnitNumber,
  t: TFunction
): ReactNode {
  return values.map((v: SkillEffectActivationStateValues[number], i: number) => (
    <React.Fragment key={JSON.stringify(v)}>
      {Object
        .entries(v)
        .map((entry, i, entries) => (
          <React.Fragment key={entry[0]}>
            {stateValuesView(entry as StateValuesEntry, unitNumber, t)}
            {ifTruthy(
              isNeedSeparator(entries, i),
              (<span>{t('effect:and_separator')}</span>)
            )}
          </React.Fragment>
        ))}
      {ifTruthy(
        isNeedSeparator(values, i),
        (<span>{t('effect:or_separator')}</span>)
      )}
    </React.Fragment>
  ));
}

const StateView: React.FC<{
  state: SkillEffectActivationState,
  unitNumber: UnitNumber
}> = ({
  state,
  unitNumber
}) => {
  const { t } = useTranslation();
  const statePerTarget =
    Object
      .entries(state)
      .map((entry) => {
        return { key: entry[0], node: stateValuesPerTargetView(entry[0], entry[1] as SkillEffectActivationStateValues, unitNumber, t) };
      });

  return (
    <React.Fragment>
      {statePerTarget.map(({ key, node }, i) => (
        <React.Fragment key={key}>
          <span>{t(`effect:condition.target.${key}`)}</span>
          {node}
          {ifTruthy(
            isNeedSeparator(statePerTarget, i),
            (<span>{t('effect:and_separator')}</span>)
          )}
        </React.Fragment>
      ))}
      <span>{t('effect:case')}</span>
    </React.Fragment>
  );
};

const buildSkillEffectTriggerView = (condition: SkillEffectActivationCondition, t: TFunction): ReactElement | null => {
  if (!('trigger' in condition)) {
    return null;
  }

  return condition.trigger === 'start_round' ?
    (
      <span>
        {condition.round ? t('effect:condition.round.until', { round: condition.round.until }) : ''}
        {t('effect:condition.trigger.start_round')}
      </span>
    ) :
    (<span>{t(`effect:condition.trigger.${condition.trigger}`)}</span>);
};

const SkillEffectConditionRow: React.FC<{
  condition: SkillEffectActivationCondition,
  unitNumber: UnitNumber
}> = ({ condition, unitNumber }) => {
  const { t } = useTranslation();
  const trigger = buildSkillEffectTriggerView(condition, t);
  const state = 'state' in condition ? (<StateView state={condition.state} unitNumber={unitNumber} />) : null;

  return (
    <div>
      {trigger}
      {ifTruthy(!!trigger && !!state, (<span>{t('effect:separator')}</span>))}
      <span>{state}</span>
    </div>
  );
};

const SkillEffectConditionView: React.FC<
  Omit<SkillEffect, 'details'> & { unitNumber: UnitNumber }
> = ({
  conditions,
  effective,
  scale_factor,
  unitNumber
}) => {
  const { t } = useTranslation();
  const Conditions = () =>
    ifNonNullable(
      conditions,
      conds => (
        <div>
          {conds.length === 1 ?
            (<SkillEffectConditionRow condition={conds[0]} unitNumber={unitNumber} />) :
            (
              <React.Fragment>
                <SkillEffectConditionRow condition={conds[0]} unitNumber={unitNumber} />
                <div css={{ fontSize: '0.7em' }}>{t('effect:or_conjunction')}</div>
                <SkillEffectConditionRow condition={conds[1]} unitNumber={unitNumber} />
              </React.Fragment>
            )
          }
        </div>
      )
    );
  const Additional = () => {
    return ifTruthy(
      !!effective || !!scale_factor,
      (<div>
        {ifNonNullable(effective, v => (<span>{t(`effect:effective.${v}`)}{t('effect:separator')}</span>))}
        {ifNonNullable(
          scale_factor,
          v => {
            if ('per_stack' in v) {
              return (<span>{t('effect:scale_factor.per_stack', { tag: v.per_stack.tag })}</span>);
            } else {
              if (isUnitAlias(v.num_of_units)) {
                return (
                  <React.Fragment>
                    <UnitAliasView unitAlias={v.num_of_units} selfUnitNumber={unitNumber} />
                    <span>{t('effect:scale_factor.num_of_allies')}</span>
                  </React.Fragment>
                );
              } else {
                return (<span>{t(`effect:unit.${v.num_of_units}`)}{t('effect:scale_factor.num_of_allies')}</span>);
              }
            }
          }
        )}
        <span>{t('effect:below_effects')}</span>
      </div>)
    );
  };

  return (
    <React.Fragment>
      <Conditions />
      <Additional />
    </React.Fragment>
  );
};

export default SkillEffectConditionView;
