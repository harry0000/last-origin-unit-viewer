/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useTranslation } from 'react-i18next';

import { Image, OverlayTrigger, Tooltip } from 'react-bootstrap';

import type { UnitBasicInfo, UnitRole } from '../../domain/UnitBasicInfo';
import { UnitRank } from '../../domain/UnitBasicInfo';

import { unitSelectedState, selectedUnitBasicInfoState } from '../../state/selector/unitSelectorState';

import './UnitCard.css';

const Badge: React.FC<{ rank: UnitRank, role: UnitRole }> = React.memo(({ rank, role }) => {
  const isRankSS = rank === UnitRank.SS;
  const [height, width] = isRankSS ? [45, 52] : [40, 40];

  return (
    <Image
      className={isRankSS ? 'unit-badge ss' : 'unit-badge'}
      draggable="false"
      height={height}
      width={width}
      alt={`${rank} ${role}`}
      src={`${process.env.PUBLIC_URL}/icon/${rank}_${role}.webp`}
    />
  );
});

const UnitCard: React.FC<{ unit: UnitBasicInfo }> = React.memo(({ unit }) => {
  const { t } = useTranslation();

  const selected = useRecoilValue(unitSelectedState(unit.no));
  const setUnit = useSetRecoilState(selectedUnitBasicInfoState);
  const unitName = t('unit:display', { number: unit.no });

  return (
    <OverlayTrigger
      placement='auto'
      overlay={<Tooltip id='tooltip-unit-number-and-name'>{unitName}</Tooltip>}
    >
      <div
        className={selected ? 'unit-card selected' : 'unit-card'}
        onClick={() => setUnit(unit)}
      >
        <Image
          rounded
          draggable="false"
          height={100}
          width={100}
          alt={unitName}
          src={`${process.env.PUBLIC_URL}/unit_icon/${unit.no}.webp`}
        />
        <Badge rank={unit.rank} role={unit.role} />
      </div>
    </OverlayTrigger>
  );
});

export default UnitCard;
