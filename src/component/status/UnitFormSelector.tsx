/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import { useRecoilState } from 'recoil';
import { useTranslation } from 'react-i18next';

import { ArrowSync } from '../icon/FluentIcons';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import SVGIcon from '../icon/SVGIcon';

import { isFormChangeUnit } from '../../domain/Unit';
import { selectedUnitState } from '../../state/unit/selectedUnitState';

export const UnitFormSelector: React.FC = () => {
  const { t } = useTranslation();
  const [unit, setUnit] = useRecoilState(selectedUnitState);

  return unit && isFormChangeUnit(unit) ?
    (<div>
      <OverlayTrigger
        placement='auto'
        overlay={<Tooltip id='tooltip-form-change'>{t('form_change')}</Tooltip>}
      >
        <Button
          variant="secondary"
          onClick={() => { setUnit(unit => unit && isFormChangeUnit(unit) ? unit.changeForm(): unit); }}
        >
          <SVGIcon
            css={{
              height: 24,
              width: 24
            }}
          >
            <ArrowSync />
          </SVGIcon>
        </Button>
      </OverlayTrigger>
      <span
        css={{
          color: '#eee',
          marginLeft: 10
        }}
      >
        {t(`effect:form.${unit.unitForm()}`)}
      </span>
    </div>) :
    null;
};
