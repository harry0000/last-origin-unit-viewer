/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { Image } from 'react-bootstrap';
import { CoreLinkSlot } from './UnitCoreLinkView';

const EquipmentPlaceholder: React.FC<{ slot: CoreLinkSlot }> = React.memo(({ slot }) => {
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
        height={32}
        width={32}
        alt={t(`status.core_link_${slot}`)}
        src={`${process.env.PUBLIC_URL}/icon/placeholder_core_link.webp`}
      />
    </span>
  );
});

export default EquipmentPlaceholder;
