/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

import CircleImageSwitch from '../common/CircleImageSwitch';
import { UnitBasicInfo } from '../../domain/UnitBasicInfo';

import { useSelectedUnit } from '../../state/selector/UnitSelectorHook';
import { useUnitDamagedState } from '../../state/status/UnitDamagedHook';

const DamagedStateSwitch: React.FC<{
  disabled?: boolean,
  selected?: boolean,
  toggle?: () => void
}> = ({ disabled, selected, toggle }) => {
  const { t } = useTranslation();

  return (
    <div css={{ display: 'flex', alignItems: 'center' }}>
      <CircleImageSwitch
        id="damaged-state-switch"
        src={`${process.env.PUBLIC_URL}/icon/damaged.webp`}
        height={48}
        width={48}
        alt={t('damaged_state')}
        disabled={disabled}
        selected={selected}
        onChange={toggle}
      />
      <span
        css={{
          color: '#ccc',
          opacity: selected ? 1 : 0.3,
          marginLeft: 10
        }}
      >
        {t('damaged_state')}
      </span>
    </div>
  );
};

const DamagedStateSelector: React.FC = () => {
  const selected = useSelectedUnit();

  const Switch = ({ unit }: { unit: UnitBasicInfo }) => {
    const [damaged, toggleDamagedState] = useUnitDamagedState(unit);

    return (<DamagedStateSwitch selected={damaged} toggle={toggleDamagedState} />);
  };

  return selected ?
    (<Switch unit={selected} />) :
    (<DamagedStateSwitch disabled={true} />);
};

export default DamagedStateSelector;
