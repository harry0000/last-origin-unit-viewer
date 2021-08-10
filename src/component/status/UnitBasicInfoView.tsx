/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

import UnitRankView from './UnitRankView';

import { useSelectedUnit } from '../../state/selector/unitSelectorState';

const UnitInfoView: React.FC = () => {
  const { t } = useTranslation();
  const unit = useSelectedUnit();
  const name = unit ? t(`unit:name.${unit.no}`) : '';
  const type = unit ? t(`common:unit.type.${unit.type}`) : '';
  const role = unit ? t(`common:unit.role.${unit.role}`) : '';

  return (
    <React.Fragment>
      <div
        css={{
          color: '#ffcc00',
          fontSize: '1.5em',
          paddingLeft: 10,
          textOverflow: 'ellipsis',
          overflow: 'hidden',
          whiteSpace: 'nowrap'
        }}
        title={name}
      >
        {name}
      </div>
      <div
        css={{
          color: '#ccc',
          fontSize: '0.9em',
          paddingLeft: 10
        }}
      >
        {type}&nbsp;{role}
      </div>
    </React.Fragment>
  );
};

const UnitBasicInfoView: React.FC = () => {
  return (
    <div
      css={{
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <div>
        <UnitRankView />
      </div>
      <div
        css={{
          flexGrow: 1,
          overflow: 'hidden',
          userSelect: 'text'
        }}
      >
        <UnitInfoView />
      </div>
    </div>
  );
};

export default UnitBasicInfoView;
