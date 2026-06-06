/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { EnhanceableStatus } from '../../../state/status/parameters/UnitLvStatusState';

import { Image } from 'react-bootstrap';
import { ImageSizeProps } from '../../common/ImageSizeProps';

type UnitStatusIconProps = {
  status: EnhanceableStatus | 'spd'
} & ImageSizeProps

const UnitStatusIcon = React.forwardRef<HTMLImageElement, UnitStatusIconProps>(({ status, ...others }, ref) => {
  const { t } = useTranslation();
  const src = `${import.meta.env.BASE_URL}icon/status_${status}.webp`;

  return (
    <Image
      {...others}
      ref={ref}
      rounded
      draggable="false"
      alt={t(`status.${status}`)}
      src={src}
      srcSet={`${src} 52w`}
    />
  );
});

export default UnitStatusIcon;
