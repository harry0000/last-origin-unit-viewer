/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { Image, OverlayTrigger, Tooltip } from 'react-bootstrap';

import { DamageAttribute } from '../../domain/UnitSkillData';
import { useRecoilValue } from 'recoil';
import { selectedUnitStatusState } from '../../state/status/selectedUnitStatusState';
import StatusEffectsView from './StatusEffectsView';

const AttributeResist: React.FC<{
  attribute: DamageAttribute,
  value?: number
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
        <div css={{ display: 'inline-block', width: '3.5em', textAlign: 'right', fontWeight: 'bold' }}>
          <span>{value ?? 0}</span>&nbsp;<span>%</span>
        </div>
      </div>
      <StatusEffectsView css={{ color: '#888', fontSize: '0.9em', fontWeight: 'bold' }} parameter={parameter} />
    </div>
  );
};

export const FireResist: React.FC = () => {
  const status = useRecoilValue(selectedUnitStatusState);

  return (<AttributeResist attribute={DamageAttribute.Fire} value={status?.fireResist} />);
};

export const IceResist: React.FC = () => {
  const status = useRecoilValue(selectedUnitStatusState);

  return (<AttributeResist attribute={DamageAttribute.Ice} value={status?.iceResist} />);
};

export const ElectricResist: React.FC = () => {
  const status = useRecoilValue(selectedUnitStatusState);

  return (<AttributeResist attribute={DamageAttribute.Electric} value={status?.electricResist} />);
};
