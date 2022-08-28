/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

import UnitAliasView from './UnitAliasView';

import { SkillEffectTarget, SkillEffectTargetKind } from '../../domain/skill/SkillEffectData';
import { UnitNumber } from '../../domain/UnitBasicInfo';
import { isUnitAlias } from '../../domain/UnitAlias';

import { ifNonNullable } from '../../util/react';

const SkillEffectTargetView: React.FC<{
  target: SkillEffectTarget,
  selfUnitNumber: UnitNumber
}> = ({ target, selfUnitNumber }) => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      {t(`effect:effect.target.kind.${target.kind}`)}
      {'conditions' in target ? t('effect:of_preposition') : null}
      {
        'conditions' in target && target.conditions ?
          target.conditions.map((cond, i, arr ) => {
            const separator: string = ++i < arr.length ? t('effect:unit_separator') : '';

            if (typeof cond === 'number') {
              return t('effect:with_quotes', { value: t('unit:display', { number: cond }) }) + separator;
            } else if (typeof cond === 'string') {
              return isUnitAlias(cond) ?
                (
                  <React.Fragment key={cond}>
                    <UnitAliasView unitAlias={cond} exceptUnit={target.kind === SkillEffectTargetKind.AllyExceptSelf ? selfUnitNumber : undefined} />
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
              const except = 'except' in cond ? cond.except : undefined;

              return (
                <React.Fragment key={cond.alias}>
                  {ifNonNullable(
                    except,
                    v => (
                      <React.Fragment>
                        {
                          v === selfUnitNumber ?
                            t('effect:unit.self') :
                            t('effect:with_quotes', { value: t('unit:display', { number: v }) })
                        }
                        {t('effect:except_preposition')}
                      </React.Fragment>
                    )
                  )}
                  <UnitAliasView unitAlias={cond.alias} exceptUnit={except} />
                  {unit ? t('effect:of_preposition') : null}
                  {unit}
                  {separator}
                </React.Fragment>
              );
            } else if ('not_alias' in cond) {
              return (
                <React.Fragment key={cond.not_alias}>
                  <UnitAliasView unitAlias={cond.not_alias} />
                  {t('effect:negative_form')}
                  {'type' in cond ? t(`effect:unit.${cond.type}`) : t('effect:unit.unit')}
                  {separator}
                </React.Fragment>
              );
            } else {
              return t(`effect:unit.${cond.type}`) + t(`effect:unit.${cond.role}`) + separator;
            }
          }) :
          null
      }
    </React.Fragment>
  );
};

export default SkillEffectTargetView;
