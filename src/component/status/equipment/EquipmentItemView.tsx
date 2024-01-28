/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { Image } from 'react-bootstrap';

import { EquipmentEnhancementLevel, EquipmentId, EquipmentRank, EquipmentType } from '../../../domain/equipment/EquipmentData';

const EquipmentItemView: React.FC<{
  equipmentId: EquipmentId,
  equipmentType: EquipmentType,
  equipmentRank: EquipmentRank,
  enhancementLv: EquipmentEnhancementLevel
}> = ({ equipmentId, equipmentType, equipmentRank, enhancementLv }) => {
  const { t } = useTranslation();

  return (
    <span css={{ position: 'relative', display: 'inline-block' }}>
      <Image
        fluid
        rounded
        draggable="false"
        sizes="(max-width: 480px) 47px, (min-width: 480px) 62px"
        alt={t(`equipment:${equipmentId}`)}
        src={`${import.meta.env.BASE_URL}equip_icon/${equipmentType}_${equipmentId}_${equipmentRank}.webp`}
      />
      <Image
        draggable="false"
        css={{ position: 'absolute', top: -10, left: -5 }}
        height={28}
        width={28}
        alt={`${t(`equipment:rank.${equipmentRank}`)} ${t(`equipment:type.${equipmentType}`)}`}
        src={`${import.meta.env.BASE_URL}icon/${equipmentType}_${equipmentRank}.webp`}
      />
      <span
        css={{
          position: 'absolute',
          top: -5,
          right: 0,
          color: '#fff',
          fontSize: '0.9em',
          fontWeight: 'bold',
          textShadow: [
            '1px 1px 0px #000, -1px -1px 0px #000',
            '-1px 1px 0px #000,  1px -1px 0px #000',
            '1px 0px 0px #000, -1px  0px 0px #000',
            '0px 1px 0px #000,  0px -1px 0px #000'
          ].join()
        }}
      >
        +{enhancementLv}
      </span>
    </span>
  );
};

export default EquipmentItemView;
