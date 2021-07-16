/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { ArrowSync } from '../icon/FluentIcons';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import SVGButton from '../common/SVGButton';

import { useUnitForm } from '../../state/skill/unitSkillState';

import { ifNonNullable } from '../../util/react';

const UnitFormSelector: React.FC = () => {
  const { t } = useTranslation();
  const [formChangeUnit, changeForm] = useUnitForm();

  return ifNonNullable(
    formChangeUnit,
    unit => (
      <div css={{ padding: '5px 0' }}>
        <OverlayTrigger
          placement='top'
          overlay={<Tooltip id='tooltip-form-change'>{t('form_change')}</Tooltip>}
        >
          <SVGButton
            aria-label="Change unit form"
            variant="secondary"
            svg={<ArrowSync />}
            onClick={changeForm}
          />
        </OverlayTrigger>
        <span css={{ color: '#eee', marginLeft: 10 }}>
          {t(`effect:form.${unit.unitForm()}`)}
        </span>
      </div>
    )
  );
};

export default UnitFormSelector;
