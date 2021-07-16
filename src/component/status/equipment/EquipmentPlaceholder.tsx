/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { Image } from 'react-bootstrap';

import { EquipmentType } from '../../../domain/EquipmentData';

const EquipmentPlaceholder: React.FC<{ type: EquipmentType }> = React.memo(({ type }) => {
  const { t } = useTranslation();

  return (
    <span
      css={{
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        opacity: 0.5
      }}
    >
      <Image
        rounded
        draggable="false"
        height={32}
        width={32}
        alt={t(`equipment:type.${type}`)}
        src={`${process.env.PUBLIC_URL}/icon/placeholder_${type}.webp`}
      />
    </span>
  );
});

export default EquipmentPlaceholder;
