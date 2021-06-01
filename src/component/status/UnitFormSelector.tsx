/** @jsxRuntime classic */
/** @jsx jsx */
import { Theme, jsx } from '@emotion/react';
import { Interpolation } from '@emotion/serialize';
import React from 'react';
import { useRecoilState } from 'recoil';
import { useTranslation } from 'react-i18next';

import { ArrowSync } from '../icon/FluentIcons';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import SVGIcon from '../icon/SVGIcon';

import { isFormChangeUnit } from '../../domain/Unit';
import { selectedUnitState } from '../../state/unit/selectedUnitState';

const UnitFormSelector: React.FC<{ css?: Interpolation<Theme> }> = (props) => {
  const { t } = useTranslation();
  const [unit, setUnit] = useRecoilState(selectedUnitState);

  return unit && isFormChangeUnit(unit) ?
    (<div {...props}>
      <OverlayTrigger
        placement='auto'
        overlay={<Tooltip id='tooltip-form-change'>{t('form_change')}</Tooltip>}
      >
        <Button
          variant="secondary"
          css={{ lineHeight: '1.2', marginRight: 10 }}
          onClick={() => { setUnit(unit => unit && isFormChangeUnit(unit) ? unit.changeForm(): unit); }}
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
