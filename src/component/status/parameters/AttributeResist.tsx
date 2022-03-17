/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { Image, OverlayTrigger, Tooltip } from 'react-bootstrap';
import StatusEffectsView from './StatusEffectsView';
import { formatResistPercentage } from './UnitStatusParameterFormatter';

import { DamageAttribute } from '../../../domain/skill/UnitSkillData';
import { MilliPercentageValue } from '../../../domain/ValueUnit';
import { UnitNumber } from '../../../domain/UnitBasicInfo';

import { useSelectedUnit } from '../../../state/selector/unitSelectorState';
import {
  useUnitElectricResistParameter,
  useUnitFireResistParameter,
  useUnitIceResistParameter
} from '../../../state/status/parameters/unitStatusParameterState';

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
            draggable="false"
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
  const selected = useSelectedUnit();
  const View = ({ value }: { value?: MilliPercentageValue }) => (
    <AttributeResist attribute={DamageAttribute.Fire} value={value} />
  );

  const UnitFireResistView: React.FC<{ unit: UnitNumber }> = ({ unit }) => {
    const value = useUnitFireResistParameter(unit);
    return (<View value={value} />);
  };

  return selected ?
    (<UnitFireResistView unit={selected.no} />) :
    (<View />);
};

export const IceResist: React.FC = () => {
  const selected = useSelectedUnit();
  const View = ({ value }: { value?: MilliPercentageValue }) => (
    <AttributeResist attribute={DamageAttribute.Ice} value={value} />
  );

  const UnitIceResistView: React.FC<{ unit: UnitNumber }> = ({ unit }) => {
    const value = useUnitIceResistParameter(unit);
    return (<View value={value} />);
  };

  return selected ?
    (<UnitIceResistView unit={selected.no} />) :
    (<View />);
};

export const ElectricResist: React.FC = () => {
  const selected = useSelectedUnit();
  const View = ({ value }: { value?: MilliPercentageValue }) => (
    <AttributeResist attribute={DamageAttribute.Electric} value={value} />
  );

  const UnitElectricResistView: React.FC<{ unit: UnitNumber }> = ({ unit }) => {
    const value = useUnitElectricResistParameter(unit);
    return (<View value={value} />);
  };

  return selected ?
    (<UnitElectricResistView unit={selected.no} />) :
    (<View />);
};
