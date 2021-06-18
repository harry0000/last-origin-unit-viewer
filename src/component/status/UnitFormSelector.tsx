/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import { useRecoilState } from 'recoil';
import { useTranslation } from 'react-i18next';

import { ArrowSync } from '../icon/FluentIcons';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import SVGIcon from '../icon/SVGIcon';

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
        <Button
          variant="secondary"
          css={{ lineHeight: '1.2', marginRight: 10 }}
          onClick={() => { setUnit(unit => unit && isFormChangeUnitSkill(unit) ? unit.changeForm(): unit); }}
        >
          <SVGIcon css={{ height: 20, width: 20 }}>
            <ArrowSync />
          </SVGIcon>
        </Button>
      </OverlayTrigger>
      <span css={{ color: '#eee' }}>
        {t(`effect:form.${unit.unitForm()}`)}
      </span>
    </div>) :
    null;
};

export default UnitFormSelector;
