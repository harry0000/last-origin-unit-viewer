/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { useTranslation } from 'react-i18next';

import { Image, OverlayTrigger, Tooltip } from 'react-bootstrap';
import StatusEffectsView from './StatusEffectsView';

import { DamageAttribute } from '../../domain/skill/UnitSkillData';
import { MilliPercentageValue } from '../../domain/ValueUnit';

import {
  selectedUnitElectricResistStatusParameterState,
  selectedUnitFireResistStatusParameterState,
  selectedUnitIceResistStatusParameterState
} from '../../state/status/selectedUnitStatusParameterState';

import { formatResistPercentage } from './UnitStatusParameterFormatter';

const AttributeResist: React.FC<{
  attribute: DamageAttribute,
  value?: MilliPercentageValue
}> = ({ attribute, value }) => {
  const { t } = useTranslation();
  const alt = t(`status.${attribute}_resist`);
  const parameter = (() => {
    switch (attribute) {
    case 'fire':
      return 'fireResist';
    case 'ice':
      return 'iceResist';
    case 'electric':
      return 'electricResist';
    }
  })();

  return (
    <div css={{ display: 'flex', flexDirection: 'column' }}>
      <div>
        <OverlayTrigger
          placement="top"
          overlay={<Tooltip id='tooltip-attribute-resist'>{alt}</Tooltip>}
        >
          <Image
            height={24}
            width={24}
            alt={alt}
            src={`${process.env.PUBLIC_URL}/icon/attribute_${attribute}.webp`}
          />
        </OverlayTrigger>
        <div css={{ display: 'inline-block', width: '4.2em', textAlign: 'right', fontWeight: 'bold' }}>
          <span>{formatResistPercentage(value)}</span>
        </div>
      </div>
      <StatusEffectsView css={{ color: '#888', fontSize: '0.9em', fontWeight: 'bold' }} parameter={parameter} />
    </div>
  );
};

export const FireResist: React.FC = () => {
  const value = useRecoilValue(selectedUnitFireResistStatusParameterState)?.resist;

  return (<AttributeResist attribute={DamageAttribute.Fire} value={value} />);
};

export const IceResist: React.FC = () => {
  const value = useRecoilValue(selectedUnitIceResistStatusParameterState)?.resist;

  return (<AttributeResist attribute={DamageAttribute.Ice} value={value} />);
};

export const ElectricResist: React.FC = () => {
  const value = useRecoilValue(selectedUnitElectricResistStatusParameterState)?.resist;

  return (<AttributeResist attribute={DamageAttribute.Electric} value={value} />);
};
