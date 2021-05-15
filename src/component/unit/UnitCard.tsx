/** @jsxRuntime classic */
/** @jsx jsx */
import { CSSObject, jsx } from '@emotion/react';
import React from 'react';
import { Image, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useRecoilState } from 'recoil';
import { useTranslation } from 'react-i18next';

import type { UnitBasicInfo, UnitRank, UnitRole } from '../../domain/UnitBasicInfo';
import { unitSelectorStoreState } from '../../state/unit/unitSelectorStoreState';

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

const Badge: React.FC<{ rank: UnitRank, role: UnitRole }> = ({ rank, role }) => {
  const top    = rank === 'ss' ? -10 : -5;
  const height = rank === 'ss' ? 45 : 40;

  return (
    <Image
      css={{
        position: 'absolute',
        top,
        left: -5,
        height
      }}
      src={`/icon/${rank}_${role}.png`}
    />
  );
};

const UnitCard: React.FC<{ unit: UnitBasicInfo }> = ({ unit }) => {
  const { t } = useTranslation();

  const [store, setStore] = useRecoilState(unitSelectorStoreState);
  const isSelected = unit.no === store.selectedUnit?.no;
  const onClick = () => {
    if (!isSelected) {
      setStore(store.selectUnit(unit));
    }
  };

  return (
    <OverlayTrigger
      placement='auto'
      overlay={<Tooltip id='tooltip-unit-number-and-name'>{t('unit:display', { number: unit.no })}</Tooltip>}
    >
      <div
        css={{
          position: 'relative',
          cursor: 'pointer',
          userSelect: 'none',
          ...(isSelected ? selectedUnitBoxShadow : {})
        }}
        onClick={onClick}
      >
        <Image src={`/unit_icon/${unit.no}.png`} rounded fluid />
        <Badge rank={unit.rank} role={unit.role} />
      </div>
    </OverlayTrigger>
  );
};

export default UnitCard;
