/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { CSSPropertiesWithMultiValues } from '@emotion/serialize/dist/declarations/types';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { Image } from 'react-bootstrap';
import { ImageSizeProps } from '../../common/ImageSizeProps';

import { Effect } from '../../../domain/Effect';

import { buildEffectIconSrcUrl } from '../../../service/EffectIconSrcUrlBuilder';

const placeHolderStyle: CSSPropertiesWithMultiValues = {
  width: 24,
  height: 24
};

const PlaceHolder: React.FC = () => {
  return (<div css={placeHolderStyle} />);
};

const EffectIcon: React.FC<
  { effect: Effect } & ImageSizeProps
> = ({ effect, ...others }) => {
  const { t } = useTranslation();
  const src = buildEffectIconSrcUrl(effect);

  return src ? (
    <Image
      {...others}
      rounded
      draggable="false"
      alt={t(`effect:effect.name.${effect}`)}
      src={src}
      srcSet={`${src} 48w`}
    />
  ) : (
    <PlaceHolder />
  );
};

export default EffectIcon;
