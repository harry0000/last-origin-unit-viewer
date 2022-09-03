/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Theme } from '@emotion/react';
import { Interpolation } from '@emotion/serialize';
import React from 'react';

import { EnhanceableStatus } from '../../../state/status/parameters/UnitLvStatusState';

import { Image } from 'react-bootstrap';
import { ImageSizeProps } from '../../common/ImageSizeProps';

const UnitStatusIcon: React.FC<{
  css?: Interpolation<Theme>,
  status: EnhanceableStatus | 'spd'
} & ImageSizeProps> = ({ status, ...others }) => {
  const src = `${process.env.PUBLIC_URL}/icon/status_${status}.webp`;

  return (
    <Image
      {...others}
      rounded
      draggable="false"
      alt={status}
      src={src}
      srcSet={`${src} 52w`}
    />
  );
};

export default UnitStatusIcon;
