/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

import { Image, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { SquadUnitStatusEffectsView, UnitStatusEffectsView } from './StatusEffectsView';

import { DamageAttribute } from '../../../domain/skill/UnitSkillData';

import { useAttributeResistParameter } from '../../../state/status/parameters/UnitStatusParameterHook';
import { useSquadUnitAttributeResistParameter } from '../../../state/status/parameters/SquadUnitStatusParameterHook';

const AttributeResistEffectStyle = { color: '#888', fontSize: '0.9em', fontWeight: 'bold' } as const;

const AttributeResist: React.FC<{
  attribute: DamageAttribute,
  value: string,
  children: ReactNode
}> = ({ attribute, value, children }) => {
  const { t } = useTranslation();
  const alt = t(`status.${attribute}_resist`);
  const src = `${process.env.PUBLIC_URL}/icon/attribute_resist_${attribute}.webp`;

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
            src={src}
            srcSet={`${src} 40w`}
          />
        </OverlayTrigger>
        <div css={{ display: 'inline-block', width: '4.2em', textAlign: 'right', fontWeight: 'bold' }}>
          <span>{value}</span>
        </div>
      </div>
      {children}
    </div>
  );
};

const UnitAttributeResist: React.FC<{
  attribute: DamageAttribute
}> = ({ attribute }) => {
  const parameter = `${attribute}Resist` as const;
  const value = useAttributeResistParameter(attribute);

  return (
    <AttributeResist attribute={attribute} value={value}>
      <UnitStatusEffectsView css={AttributeResistEffectStyle} parameter={parameter} />
    </AttributeResist>
  );
};

export const UnitFireResist: React.FC = () => {
  return (<UnitAttributeResist attribute={DamageAttribute.Fire} />);
};

export const UnitIceResist: React.FC = () => {
  return (<UnitAttributeResist attribute={DamageAttribute.Ice} />);
};

export const UnitElectricResist: React.FC = () => {
  return (<UnitAttributeResist attribute={DamageAttribute.Electric} />);
};

const SquadUnitAttributeResist: React.FC<{
  attribute: DamageAttribute
}> = ({ attribute }) => {
  const parameter = `${attribute}Resist` as const;
  const value = useSquadUnitAttributeResistParameter(attribute);

  return (
    <AttributeResist attribute={attribute} value={value}>
      <SquadUnitStatusEffectsView css={AttributeResistEffectStyle} parameter={parameter} />
    </AttributeResist>
  );
};

export const SquadUnitFireResist: React.FC = () => {
  return (<SquadUnitAttributeResist attribute={DamageAttribute.Fire} />);
};

export const SquadUnitIceResist: React.FC = () => {
  return (<SquadUnitAttributeResist attribute={DamageAttribute.Ice} />);
};

export const SquadUnitElectricResist: React.FC = () => {
  return (<SquadUnitAttributeResist attribute={DamageAttribute.Electric} />);
};
