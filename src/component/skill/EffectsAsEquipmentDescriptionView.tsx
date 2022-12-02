/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { OverlayTrigger, Tooltip } from 'react-bootstrap';

import { SkillType } from '../../domain/skill/SkillType';
import { UnitBasicInfo } from '../../domain/UnitBasicInfo';

import { useEffectsAsEquipmentDescription } from '../../state/skill/UnitSkillHook';

import { ifTruthy } from '../../util/react';

const EffectsAsEquipmentDescriptionView: React.FC<{ skillType: SkillType, unit: UnitBasicInfo }> = ({ skillType, unit }) => {
  const { t } = useTranslation();
  const show = useEffectsAsEquipmentDescription(skillType, unit);

  return (
    ifTruthy(
      show,
      (<div css={{
        color: '#ccc',
        fontSize: '0.9em',
        marginTop: 10
      }}>
        <span>{t('effect:effects_as_equipment.description.prefix')}</span>
        <OverlayTrigger
          placement='auto'
          overlay={<Tooltip id='tooltip-effects-as-equipment'>{t('effect:effects_as_equipment.annotation')}</Tooltip>}
        >
          <span css={{ cursor: 'help', textDecoration: 'underline' }}>
            {t('effect:effects_as_equipment.description.as_equipment')}
          </span>
        </OverlayTrigger>
        <span>{t('effect:effects_as_equipment.description.suffix')}</span>
      </div>)
    )
  );
};

export default EffectsAsEquipmentDescriptionView;
