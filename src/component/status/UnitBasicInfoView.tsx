/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Image } from 'react-bootstrap';

import { UnitBasicInfo } from '../../domain/UnitBasicInfo';
import { ifNonNullable } from '../../util/react';

const UnitBasicInfoIcon: React.FC<{ unit?: UnitBasicInfo }> = ({ unit }) => {
  return ifNonNullable(
    unit,
    unit => (
      <Image
        css={{
          display: 'block',
          margin: '0 auto',
          height: unit.rank !== 'ss' ? 65 : 75
        }}
        src={`${process.env.PUBLIC_URL}/icon/${unit.rank}_${unit.role}.png`}
      />
    )
  );
};

export const UnitBasicInfoView: React.FC<{ unit?: UnitBasicInfo }> = ({ unit }) => {
  const { t } = useTranslation();
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
        <UnitBasicInfoIcon unit={unit} />
      </div>
      <div
        css={{
          flexGrow: 1,
          alignSelf: 'center',
          overflow: 'hidden'
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
