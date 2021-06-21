/** @jsxRuntime classic */
/** @jsx jsx */
import { CSSObject, jsx } from '@emotion/react';
import React from 'react';
import { Image, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useTranslation } from 'react-i18next';

import type { UnitBasicInfo, UnitRank, UnitRole } from '../../domain/UnitBasicInfo';
import { unitSelectedState, selectedUnitBasicInfoState } from '../../state/selector/unitSelectorState';

const selectedUnitBoxShadow: CSSObject = {
  '&::before': {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    content: '""',
    boxShadow: [
      '2px   0px 3px 0px #00fff0',
      ' 0px  1px 3px 0px #00fff0',
      '-2px  0px 3px 0px #00fff0',
      ' 0px -1px 3px 0px #00fff0',
      'inset  0px  1px 3px 1px #00fff0',
      'inset  1px  0px 3px 1px #00fff0',
      'inset  0px -1px 3px 1px #00fff0',
      'inset -1px  0px 3px 1px #00fff0'
    ].join(',')
  }
};

const Badge: React.FC<{ rank: UnitRank, role: UnitRole }> = React.memo(({ rank, role }) => {
  const [top, height, width] = rank === 'ss' ? [-10, 45, 52] : [-5, 40, 40];

  return (
    <Image
      css={{
        position: 'absolute',
        top,
        left: -5
      }}
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
        css={{
          position: 'relative',
          cursor: 'pointer',
          userSelect: 'none',
          ...(selected ? selectedUnitBoxShadow : {})
        }}
        onClick={() => setUnit(unit)}
      >
        <Image
          rounded
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
