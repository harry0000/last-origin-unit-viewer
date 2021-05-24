/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { Image, OverlayTrigger, Tooltip } from 'react-bootstrap';

import { DamageAttribute } from '../../domain/UnitSkillData';
import UnitStatus from '../../domain/status/UnitStatus';

const AttributeResist: React.FC<{
  attribute: DamageAttribute,
  value?: number
}> = ({ attribute, value }) => {
  const { t } = useTranslation();
  const alt = t(`status.${attribute}_resist`);

  return (
    <div>
      <OverlayTrigger
        placement="auto"
        overlay={<Tooltip id='tooltip-attribute-resist'>{alt}</Tooltip>}
      >
        <Image
          height={24}
          width={24}
          alt={alt}
          src={`${process.env.PUBLIC_URL}/icon/attribute_${attribute}.webp`}
        />
      </OverlayTrigger>
      <div css={{ display: 'inline-block', width: '3em', textAlign: 'right' }}>
        <span>{value ?? 0}</span><span>%</span>
      </div>
    </div>
  );
};

export const FireResist: React.FC<{ status?: UnitStatus }> = ({ status }) => {
  return (<AttributeResist attribute={DamageAttribute.Fire} value={status?.fireResistValue} />);
};

export const IceResist: React.FC<{ status?: UnitStatus }> = ({ status }) => {
  return (<AttributeResist attribute={DamageAttribute.Ice} value={status?.iceResistValue} />);
};

export const ElectricResist: React.FC<{ status?: UnitStatus }> = ({ status }) => {
  return (<AttributeResist attribute={DamageAttribute.Electric} value={status?.electricResistValue} />);
};
