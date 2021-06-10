/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { useTranslation } from 'react-i18next';

import { Image } from 'react-bootstrap';

import { selectedUnitBasicInfoState } from '../../state/unit/unitSelectorStoreState';

import { UnitBasicInfo } from '../../domain/UnitBasicInfo';

import { ifNonNullable } from '../../util/react';

const UnitBasicInfoIcon: React.FC<{ unit: UnitBasicInfo }> = ({ unit }) => {
  const [height, width] = unit.rank === 'ss' ? [75, 87] : [65, 65];

  return (
    <Image
      css={{
        display: 'block',
        margin: '0 auto'
      }}
      height={height}
      width={width}
      alt={`${unit.rank} ${unit.role}`}
      src={`${process.env.PUBLIC_URL}/icon/${unit.rank}_${unit.role}.webp`}
    />
  );
};

const UnitBasicInfoView: React.FC = () => {
  const { t } = useTranslation();
  const unit = useRecoilValue(selectedUnitBasicInfoState);
  const name = unit ? t(`unit:name.${unit.no}`) : '';
  const type = unit ? t(`common:unit.type.${unit.type}`) : '';
  const role = unit ? t(`common:unit.role.${unit.role}`) : '';

  return (
    <div
      css={{
        display: 'flex',
        height: 75
      }}
    >
      <div
        css={{
          alignSelf: 'center',
          flexBasis: 90
        }}
      >
        {ifNonNullable(unit, v => (<UnitBasicInfoIcon unit={v} />))}
      </div>
      <div
        css={{
          flexGrow: 1,
          alignSelf: 'center',
          overflow: 'hidden',
          userSelect: 'text'
        }}
      >
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
      </div>
    </div>
  );
};

export default UnitBasicInfoView;
