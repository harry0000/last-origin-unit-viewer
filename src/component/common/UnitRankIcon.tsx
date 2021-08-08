/** @jsxRuntime classic */
/** @jsx jsx */
import { Theme, jsx } from '@emotion/react';
import { Interpolation } from '@emotion/serialize';
import React from 'react';

import { UnitRank, UnitRole } from '../../domain/UnitBasicInfo';
import { Image } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

type Props = {
  css?: Interpolation<Theme>,
  className?: string,
  rank: UnitRank,
  role: UnitRole
} & (
  {
    height: number,
    width: number
  } | {
    sizes: string
  }
)

const UnitRankIcon: React.FC<Props> = ({ rank, role, ...others }) => {
  const { t } = useTranslation();

  return (
    <Image
      {...others}
      draggable="false"
      alt={`${t(`unit.rank.${rank}`)} ${t(`unit.role.${role}`)}`}
      src={`${process.env.PUBLIC_URL}/icon/${rank}_${role}.webp`}
    />
  );
};

export default UnitRankIcon;
