/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { Image, OverlayTrigger, Tooltip } from 'react-bootstrap';
import StatusEffectsView from './StatusEffectsView';

import { DamageAttribute } from '../../../domain/skill/UnitSkillData';

import { useSelectedUnitAttributeResistParameter } from '../../../state/status/parameters/unitStatusParameterState';

const AttributeResist: React.FC<{
  attribute: DamageAttribute
}> = ({ attribute }) => {
  const { t } = useTranslation();
  const value = useSelectedUnitAttributeResistParameter(attribute);

  const alt = t(`status.${attribute}_resist`);
  const parameter = `${attribute}Resist` as const;

  return (
    <div css={{ display: 'flex', flexDirection: 'column' }}>
      <div>
        <OverlayTrigger
          placement="top"
          overlay={<Tooltip id='tooltip-attribute-resist'>{alt}</Tooltip>}
        >
          <Image
            draggable="false"
            height={24}
            width={24}
            alt={alt}
            src={`${process.env.PUBLIC_URL}/icon/attribute_${attribute}.webp`}
          />
        </OverlayTrigger>
        <div css={{ display: 'inline-block', width: '4.2em', textAlign: 'right', fontWeight: 'bold' }}>
          <span>{value}</span>
        </div>
      </div>
      <StatusEffectsView css={{ color: '#888', fontSize: '0.9em', fontWeight: 'bold' }} parameter={parameter} />
    </div>
  );
};

export const FireResist: React.FC = () => {
  return (<AttributeResist attribute={DamageAttribute.Fire} />);
};

export const IceResist: React.FC = () => {
  return (<AttributeResist attribute={DamageAttribute.Ice} />);
};

export const ElectricResist: React.FC = () => {
  return (<AttributeResist attribute={DamageAttribute.Electric} />);
};
