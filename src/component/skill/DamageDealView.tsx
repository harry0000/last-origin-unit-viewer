/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { SkillAreaType } from '../../domain/skill/SkillAreaOfEffect';
import { SkillType } from '../../domain/skill/SkillType';
import { UnitBasicInfo } from '../../domain/UnitBasicInfo';
import { calcValue } from '../../domain/ValueUnit';

import { AttributeColorStyle } from './AttributeColorStyle';

import { useDamageDeal } from '../../state/skill/UnitSkillHook';

import { ifNonNullable } from '../../util/react';

const DamageDealView: React.FC<{ skillType: SkillType, unit: UnitBasicInfo }> = ({ skillType, unit }) => {
  const { t } = useTranslation();
  const props = useDamageDeal(skillType, unit);
  if (!props[0]) {
    return null;
  }

  const [damage_deal, area] = props;

  return (
    <div css={{ color: '#ccc', marginTop: 10 }}>
      <span>
        {area === SkillAreaType.Single ?
          t('effect:damage_deal.target.single') :
          t('effect:damage_deal.target.area')}
      </span>
      {ifNonNullable(
        damage_deal.effective,
        effective => (<span>{t(`effect:effective.${effective}`)}{t('effect:separator')}</span>)
      )}
      <span>{t('status.atk')}</span>
      <span css={{ margin: '0 5px', color: '#fc0', fontWeight: 'bold' }}>
        {calcValue(damage_deal)}%
      </span>
      <span>{t('effect:as_preposition')}</span>
      {ifNonNullable(
        damage_deal.attribute,
        attribute => (
          <span css={{ margin: '0 5px', color: AttributeColorStyle[attribute], fontWeight: 600 }}>
            {t(`effect:attribute.${attribute}`)}
          </span>
        )
      )}
      <span>{t('effect:damage')}</span>
    </div>
  );
};

export default DamageDealView;
