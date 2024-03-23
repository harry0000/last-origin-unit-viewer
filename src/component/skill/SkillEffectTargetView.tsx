/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

import UnitAliasView from './UnitAliasView';

import { SkillEffectTarget, SkillEffectTargetKind } from '../../domain/skill/SkillEffectTarget';
import { UnitNumber } from '../../domain/UnitBasicInfo';
import { isUnitAlias } from '../../domain/UnitAlias';

import { ifNonNullable } from '../../util/react';
import { isReadonlyArray } from '../../util/type';

const SkillEffectTargetView: React.FC<{
  target: SkillEffectTarget,
  selfUnitNumber: UnitNumber
}> = ({ target, selfUnitNumber }) => {
  const { t } = useTranslation();
  function unitName(unit: UnitNumber): string {
    return t('effect:with_quotes', { value: t('unit:display', { number: unit }) });
  }

  const hasConditions = 'conditions' in target && target.conditions;
  const except = 'except' in target ? target.except : undefined;
  const exceptUnit =
    target.kind === SkillEffectTargetKind.AllyExceptSelf ?
      selfUnitNumber :
      !isReadonlyArray(except) ?
        except :
        undefined;

  return (
    <React.Fragment>
      {t(`effect:effect.target.kind.${target.kind}`)}
      {hasConditions || !!except ? t('effect:of_preposition') : null}
      {ifNonNullable(
        except,
        v => (
          <React.Fragment>
            {isReadonlyArray(v) ?
              `${unitName(v[0])}${t('effect:unit_separator')}${unitName(v[1])}` :
              unitName(v)}
            {t('effect:except_preposition')}
            {hasConditions ? null : t('effect:unit.unit')}
          </React.Fragment>
        )
      )}
      {
        hasConditions ?
          target.conditions.map((cond, i, arr ) => {
            const separator: string = ++i < arr.length ? t('effect:unit_separator') : '';

            if (typeof cond === 'number') {
              return unitName(cond) + separator;
            } else if (typeof cond === 'string') {
              return isUnitAlias(cond) ?
                (
                  <React.Fragment key={cond}>
                    <UnitAliasView unitAlias={cond} exceptUnit={exceptUnit} />
                    {separator}
                  </React.Fragment>
                ) :
                t(`effect:unit.${cond}`) + separator;
            } else if ('alias' in cond) {
              const unit: string | null =
                'type' in cond ?
                  t(`effect:unit.${cond.type}`) :
                  'role' in cond ?
                    t(`effect:unit.${cond.role}`) :
                    null;

              return (
                <React.Fragment key={JSON.stringify(cond)}>
                  <UnitAliasView unitAlias={cond.alias} exceptUnit={exceptUnit} />
                  {unit ? t('effect:of_preposition') : null}
                  {unit}
                  {separator}
                </React.Fragment>
              );
            } else if ('not_alias' in cond) {
              return (
                <React.Fragment key={JSON.stringify(cond)}>
                  <UnitAliasView unitAlias={cond.not_alias} exceptUnit={exceptUnit} />
                  {t('effect:negative_form')}
                  {'type' in cond ?
                    t(`effect:unit.${cond.type}`) :
                    'role' in cond ?
                      t(`effect:unit.${cond.role}`) :
                      t('effect:unit.unit')}
                  {separator}
                </React.Fragment>
              );
            } else {
              if ('kind' in cond) {
                const unit = 'type' in cond ? cond.type : cond.role;
                return t(`effect:unit.${unit}`) + t(`effect:unit.${cond.kind}`) + separator;
              } else {
                return t(`effect:unit.${cond.type}`) + t(`effect:unit.${cond.role}`) + separator;
              }
            }
          }) :
          null
      }
    </React.Fragment>
  );
};

export default SkillEffectTargetView;
