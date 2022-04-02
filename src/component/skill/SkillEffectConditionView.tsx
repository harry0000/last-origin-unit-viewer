/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { ReactNode } from 'react';
import { TFunction } from 'i18next';
import { useTranslation } from 'react-i18next';

import SkillEffectTargetView from './SkillEffectTargetView';
import UnitAliasView from './UnitAliasView';

import {
  ActivationEnemyState,
  ActivationSelfState,
  ActivationTargetState,
  SelfSkillEffectActivationCondition,
  SelfSkillEffectActivationState,
  SkillEffectActivationCondition,
  TargetSkillEffectActivationCondition,
  UnitAliasExceptUnit
} from '../../domain/skill/SkillEffectActivationCondition';
import { EffectActivationState } from '../../domain/EffectActivationState';
import { PassiveSkillEffective } from '../../domain/skill/SkillEffective';
import { SkillEffectScaleFactor } from '../../domain/skill/SkillEffectScaleFactor';
import { SkillEffectTarget } from '../../domain/skill/SkillEffectData';
import { UnitNumber } from '../../domain/UnitBasicInfo';
import { isTargetSkillEffect, SkillEffect } from '../../domain/skill/UnitSkills';
import { isUnitAlias, UnitAlias } from '../../domain/UnitAlias';

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
  case 'hp_greater_or_equal':
  case 'hp_less_or_equal':
  case 'hp_greater_than':
  case 'hp_less_than':
    return (<span>{t(`effect:condition.state.${entry[0]}`, { value: entry[1] })}</span>);
  case 'effected':
    return (<span>{t(`effect:condition.state.${entry[0]}`, { effect: entry[1] })}</span>);
  case 'tagged':
  case 'not_tagged':
    return (<span>{t(`effect:condition.state.${entry[0]}`, { tag: entry[1] })}</span>);
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
    return (<span>{t(`effect:condition.state.${entry[0]}`, { form: entry[1] })}</span>);
  case 'unit':
    return unitStateView(entry[0], entry[1], unitNumber, t);
  case 'effected_by':
    return unitStateView(entry[0], entry[1], unitNumber, t);
  case 'equipped': {
    const equipment = t(`equipment:${entry[1]}`);
    return (<span>{t(`effect:condition.state.${entry[0]}`, { equipment })}</span>);
  }
  case 'not_equipped': {
    const equipments = entry[1]
      .map(e => `${t('effect:with_quotes', { value: t(`equipment:${e}`) })}`)
      .join(t('effect:unit_separator'));
    return (<span>{t(`effect:condition.state.${entry[0]}`, { equipments })}</span>);
  }
  case 'grid':
    return (<span>{t(`effect:condition.state.${entry[0]}`, { grid: entry[1] })}</span>);
  default: {
    const _exhaustiveCheck: never = entry;
    return _exhaustiveCheck;
  }
  }
}

function unitStateView(key: typeof EffectActivationState.Unit, unit: UnitAliasExceptUnit<typeof UnitAlias.AngerOfHorde, 41>, selfUnitNumber: UnitNumber, t: TFunction): Exclude<ReactNode, undefined>
function unitStateView(key: typeof EffectActivationState.EffectedBy, unit: UnitNumber | UnitAliasExceptUnit<typeof UnitAlias.MongooseTeam, 80>, selfUnitNumber: UnitNumber, t: TFunction): Exclude<ReactNode, undefined>
function unitStateView(key: typeof EffectActivationState.InSquad, unit: UnitNumber | ReadonlyArray<UnitNumber> | typeof UnitAlias.ElectricActive | typeof UnitAlias.Horizon | typeof UnitAlias.KouheiChurch | 'golden_factory', selfUnitNumber: UnitNumber, t: TFunction): Exclude<ReactNode, undefined>
function unitStateView(
  key: typeof EffectActivationState['InSquad' | 'Unit' | 'EffectedBy'],
  unit:
    UnitNumber |
    ReadonlyArray<UnitNumber> |
    UnitAliasExceptUnit<typeof UnitAlias.AngerOfHorde, 41> |
    UnitAliasExceptUnit<typeof UnitAlias.MongooseTeam, 80> |
    typeof UnitAlias.ElectricActive |
    typeof UnitAlias.Horizon |
    typeof UnitAlias.KouheiChurch |
    'golden_factory',
  selfUnitNumber: UnitNumber,
  t: TFunction
): Exclude<ReactNode, undefined> {
  function unitName(unit: UnitNumber): string {
    return t('effect:with_quotes', { value: t('unit:display', { number: unit }) });
  }

  if (typeof unit === 'number') {
    return (
      <span>{t(`effect:condition.state.${key}`, { unit: unitName(unit) })}</span>
    );
  } else if (isReadonlyArray(unit)) {
    const units = unit.map(u => unitName(u)).join(t('effect:unit_separator'));
    return (
      <span>{t(`effect:condition.state.${key}`, { unit: units })}</span>
    );
  } else if (typeof unit === 'string') {
    if (isUnitAlias(unit)) {
      // TODO: Move to excepting logic from view.
      return (
        <React.Fragment>
          {ifTruthy(key === EffectActivationState.InSquad, (<span>{t('effect:unit.self')}{t('effect:except_preposition')}</span>))}
          <UnitAliasView unitAlias={unit} exceptUnit={key === EffectActivationState.InSquad ? selfUnitNumber : undefined} />
          <span>{t(`effect:condition.state.${key}`, { unit: '' })}</span>
        </React.Fragment>
      );
    } else {
      return (<span>{t(`effect:condition.state.${key}`, { unit: t(`effect:unit.${unit}`) })}</span>);
    }
  } else {
    return (
      <React.Fragment>
        {t('effect:with_quotes', { value: t('unit:display', { number: unit.except }) })}
        {t('effect:except_preposition')}
        <UnitAliasView unitAlias={unit.alias} exceptUnit={unit.except} />
        {t(`effect:condition.state.${key}`, { unit: '' })}
      </React.Fragment>
    );
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

const SquadStateView: React.FC<{
  state: ValueOf<SelfSkillEffectActivationState, 'squad'>,
  unitNumber: UnitNumber
}> = ({ state, unitNumber }) => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      {t('effect:condition.target.squad')}
      {
        isReadonlyArray(state) ?
          unitStateView(EffectActivationState.InSquad, state.map(s => s.in_squad), unitNumber, t) :
          'num_of_units' in state ?
            t('effect:condition.state.num_of_units', state.num_of_units as Record<string, unknown>) :
            unitStateView(EffectActivationState.InSquad, state.in_squad, unitNumber, t)
      }
    </React.Fragment>
  );
};

const EnemyStateView: React.FC<{
  state: ActivationEnemyState
}> = ({ state }) => {
  const { t } = useTranslation();
  const { num_of_units } = state;

  return (
    <React.Fragment>
      {t('effect:condition.target.enemy')}
      {
        'less_or_equal' in num_of_units ?
          t('effect:condition.state.num_of_enemies', num_of_units as Record<string, unknown>) :
          t('effect:condition.state.num_of_enemies_ge', num_of_units as Record<string, unknown>)
      }
    </React.Fragment>
  );
};

const TriggerView: React.FC<{
  condition: SkillEffectActivationCondition
}> = ({ condition }) => {
  const { t } = useTranslation();

  if (!('trigger' in condition)) {
    return null;
  }

  return condition.trigger === 'start_round' ?
    condition.round ?
      'at' in condition.round ?
        t('effect:condition.trigger.round.at', { round: condition.round.at }) :
        'from' in condition.round ?
          t('effect:condition.trigger.round.from', { round: condition.round.from }) :
          t('effect:condition.trigger.round.until', { round: condition.round.until }) :
      t('effect:condition.trigger.start_round') :
    t(`effect:condition.trigger.${condition.trigger}`);
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

  const Separator = ({ show }: { show: boolean }) => ifTruthy(show, t('effect:and_symbolic_separator'));
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
          <SquadStateView key={key} state={value} unitNumber={unitNumber}/>
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
      <TriggerView condition={condition} />
      {ifTruthy(needSeparator, t('effect:separator'))}
      {'target' in props ?
        <ConditionStateView condition={props.condition} target={props.target} unitNumber={unitNumber} /> :
        <ConditionStateView condition={props.condition} unitNumber={unitNumber} />}
    </span>
  );
};

const EnemyConditionRow: React.FC<{
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
        return (<span>{t('effect:scale_factor.per_stack', { tag: v.per_stack.tag })}</span>);
      } else if ('num_of_enemies' in v) {
        return (<span>{t('effect:unit.enemy')}{t(`effect:scale_factor.${v.num_of_enemies}`)}</span>);
      } else {
        const exceptSelf = !!v.except;
        if (isUnitAlias(v.num_of_units)) {
          return (
            <React.Fragment>
              {ifTruthy(exceptSelf, (<span>{t('effect:unit.self')}{t('effect:except_preposition')}</span>))}
              <UnitAliasView unitAlias={v.num_of_units} exceptUnit={exceptSelf ? unitNumber : undefined} />
              <span>{t('effect:scale_factor.num_of_allies')}</span>
            </React.Fragment>
          );
        } else {
          return (
            <React.Fragment>
              {ifTruthy(exceptSelf, (<span>{t('effect:unit.self')}{t('effect:except_preposition')}</span>))}
              <span>{t(`effect:unit.${v.num_of_units}`)}{t('effect:scale_factor.num_of_allies')}</span>
            </React.Fragment>
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
      return effect.conditions ?
        effect.conditions.length === 1 ?
          (<ConditionRow condition={effect.conditions[0]} target={effect.target} unitNumber={unitNumber} />) :
          (
            <React.Fragment>
              <ConditionRow condition={effect.conditions[0]} target={effect.target} unitNumber={unitNumber} />
              <OrConjunction />
              <ConditionRow condition={effect.conditions[1]} target={effect.target} unitNumber={unitNumber} />
            </React.Fragment>
          ) :
        ifNonNullable(model.enemyTargetConditions, conditions => (<EnemyConditionRow target={conditions} />));
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
      model.onlyAdditional ?
        (<span>{children}</span>) :
        model.hasMultipleConditions ?
          (<div css={{ marginTop: 5 }}>{children}</div>) :
          (<span>{t('effect:separator')}{children}</span>)
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
