/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { useTranslation } from 'react-i18next';

import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { SkillType } from './UnitSkillList';

import { selectedUnitPassive1SkillState } from '../../state/skill/unitSkillState';

import { ifTruthy } from '../../util/react';

function useEffectsAsEquipmentDescription(skillType: SkillType): boolean {
  if (skillType === 'passive1') {
    const ps1 = useRecoilValue(selectedUnitPassive1SkillState);
    return !!ps1 && 'equipment_effects' in ps1;
  } else {
    return false;
  }
}

const EffectsAsEquipmentDescriptionView: React.FC<{ skillType: SkillType }> = ({ skillType }) => {
  const { t } = useTranslation();
  const show = useEffectsAsEquipmentDescription(skillType);

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
