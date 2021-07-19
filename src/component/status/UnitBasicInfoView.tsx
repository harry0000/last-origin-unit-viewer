/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { Image } from 'react-bootstrap';
import { UnitRank, UnitRole } from '../../domain/UnitBasicInfo';
import { useSelectedUnit } from '../../state/selector/unitSelectorState';

import { ifNonNullable } from '../../util/react';

const UnitBasicInfoIcon: React.FC<{ rank: UnitRank, role: UnitRole }> = ({ rank, role }) => {
  const [height, width] = rank === 'ss' ? [75, 87] : [65, 65];

  return (
    <Image
      draggable="false"
      css={{
        display: 'block',
        margin: '0 auto'
      }}
      height={height}
      width={width}
      alt={`${rank} ${role}`}
      src={`${process.env.PUBLIC_URL}/icon/${rank}_${role}.webp`}
    />
  );
};

const UnitBasicInfoView: React.FC = () => {
  const { t } = useTranslation();
  const unit = useSelectedUnit();
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
        {ifNonNullable(unit, v => (<UnitBasicInfoIcon rank={v.rank} role={v.role} />))}
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
