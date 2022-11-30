/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { EnhanceableStatus } from '../../../state/status/parameters/UnitLvStatusState';

import { Image } from 'react-bootstrap';
import { ImageSizeProps } from '../../common/ImageSizeProps';

const UnitStatusIcon: React.FC<{
  status: EnhanceableStatus | 'spd'
} & ImageSizeProps> = ({ status, ...others }) => {
  const { t } = useTranslation();
  const src = `${process.env.PUBLIC_URL}/icon/status_${status}.webp`;

  return (
    <Image
      {...others}
      rounded
      draggable="false"
      alt={t(`status.${status}`)}
      src={src}
      srcSet={`${src} 52w`}
    />
  );
};

export default UnitStatusIcon;
