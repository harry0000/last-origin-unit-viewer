/** @jsx jsx */
import { jsx } from '@emotion/react';
import { CSSPropertiesWithMultiValues } from '@emotion/serialize';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import RoundedToggleButton from '../common/RoundedToggleButton';

import { UnitLvMode } from '../../domain/status/UnitLv';
import { UnitNumber } from '../../domain/UnitBasicInfo';

import { useSelectedUnit } from '../../state/selector/UnitSelectorHook';
import { useUnitLvMode } from '../../state/status/parameters/UnitLvStatusHook';

const style = {
  '& > .btn.btn-toggle': {
    lineHeight: 1,
    fontSize: '0.9em'
  } as const satisfies CSSPropertiesWithMultiValues
};

const ToggleButton = React.forwardRef<HTMLDivElement, { disabled?: boolean, selected: boolean, toggle?: () => void }>((
  { disabled, selected, toggle, ...rest },
  ref
) => {
  const { t } = useTranslation();
  return (
    <RoundedToggleButton
      {...rest}
      ref={ref}
      css={style}
      disabled={disabled}
      selected={selected}
      onChange={toggle}
    >
      {t('status.lv_mode.label')}
    </RoundedToggleButton>
  );
});

const LvModeToggleButton: React.FC<{ unit: UnitNumber }> = ({ unit }) => {
  const { t } = useTranslation();
  const [lvMode, toggle] = useUnitLvMode(unit);

  return (
    <OverlayTrigger
      placement='auto'
      overlay={<Tooltip id='tooltip-unit-lv-mode'>{t('status.lv_mode.annotation')}</Tooltip>}
    >
      <ToggleButton selected={lvMode === UnitLvMode.Auto} toggle={toggle} />
    </OverlayTrigger>
  );
};

const UnitLvModeToggleButton: React.FC = () => {
  const selected = useSelectedUnit();

  return selected ?
    (<LvModeToggleButton unit={selected.no} />) :
    (<ToggleButton disabled={true} selected={false} />);
};

export default UnitLvModeToggleButton;
