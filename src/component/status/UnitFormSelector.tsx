/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import { useRecoilState } from 'recoil';
import { useTranslation } from 'react-i18next';

import { ArrowSync } from '../icon/FluentIcons';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import SVGButton from '../common/SVGButton';

import { selectedUnitSkillState } from '../../state/skill/unitSkillState';

import { isFormChangeUnitSkill } from '../../domain/skill/UnitSkill';

const UnitFormSelector: React.FC = () => {
  const { t } = useTranslation();
  const [unit, setUnit] = useRecoilState(selectedUnitSkillState);

  return unit && isFormChangeUnitSkill(unit) ?
    (<div css={{ padding: '5px 0' }}>
      <OverlayTrigger
        placement='top'
        overlay={<Tooltip id='tooltip-form-change'>{t('form_change')}</Tooltip>}
      >
        <SVGButton
          aria-label="Change unit form"
          variant="secondary"
          svg={<ArrowSync />}
          onClick={() => { setUnit(unit => unit && isFormChangeUnitSkill(unit) ? unit.changeForm(): unit); }}
        />
      </OverlayTrigger>
      <span css={{ color: '#eee', marginLeft: 10 }}>
        {t(`effect:form.${unit.unitForm()}`)}
      </span>
    </div>) :
    null;
};

export default UnitFormSelector;
