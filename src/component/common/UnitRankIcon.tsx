/** @jsxRuntime classic */
/** @jsx jsx */
import { Theme, jsx } from '@emotion/react';
import { Interpolation } from '@emotion/serialize';
import React from 'react';

import { Image } from 'react-bootstrap';
import { ImageSizeProps } from './ImageSizeProps';

import { UnitRank, UnitRole } from '../../domain/UnitBasicInfo';

import { useTranslation } from 'react-i18next';

type Props = {
  css?: Interpolation<Theme>,
  className?: string,
  rank: UnitRank,
  role: UnitRole
} & ImageSizeProps

const UnitRankIcon: React.FC<Props> = ({ rank, role, ...rest }) => {
  const { t } = useTranslation();
  const src = `${import.meta.env.BASE_URL}icon/${rank}_${role}.webp`;

  return (
    <Image
      {...rest}
      draggable="false"
      alt={`${t(`unit.rank.${rank}`)} ${t(`unit.role.${role}`)}`}
      src={src}
      srcSet={`${src} ${rank === UnitRank.SS ? 185 : 123}w`}
    />
  );
};

export default UnitRankIcon;
