/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { ElectricResist, FireResist, IceResist } from './AttributeResist';
import StatusEffectsView from './StatusEffectsView';
import UnitStatusIcon from './UnitStatusIcon';
import { appendPercentage } from './UnitStatusParameterFormatter';

import { EnhanceableStatus, useSelectedUnitStatusEnhancedLv } from '../../../state/status/parameters/unitLvStatusState';
import { useStatusParameter } from '../../../state/status/parameters/unitStatusParameterState';

import './StatusParameter.css';

const UnitStatusParameterLvView: React.FC<{ status: EnhanceableStatus }> = ({ status }) => {
  const lv = useSelectedUnitStatusEnhancedLv(status);

  return (<React.Fragment>{lv}</React.Fragment>);
};

const StatusParameterValueView: React.FC<{ status: EnhanceableStatus | 'spd' }> = ({ status }) => {
  const value = useStatusParameter(status);
  const percentage = status === 'cri' || status === 'acc' || status === 'eva';

  return (<div>{percentage ? appendPercentage(value) : value}</div>);
};

const StatusParameterCol: React.FC<{ status: EnhanceableStatus | 'spd' }> = ({ status }) => {
  const { t } = useTranslation();

  return (
    <div className="status-parameter-col">
      <UnitStatusIcon height={36} width={36} status={status} />
      <div className="status-parameter-body">
        <div className="status-parameter-label">
          <div>{t(`status.${status}`)}</div>
          {
            status !== 'spd' ?
              (<div className="lv">{t('lv')}&nbsp;<UnitStatusParameterLvView status={status} /></div>) :
              null
          }
        </div>
        <div className="status-parameter-value">
          <StatusParameterValueView status={status} />
          <StatusEffectsView className="effects" parameter={status} />
        </div>
      </div>
    </div>
  );
};

const UnitStatusParameter: React.FC = () => {
  return (
    <div className="status-parameter-container">
      <div className="status-parameter-row">
        <StatusParameterCol status="hp" />
      </div>
      <div className="status-parameter-row">
        <StatusParameterCol status="atk" />
        <StatusParameterCol status="cri" />
      </div>
      <div className="status-parameter-row">
        <StatusParameterCol status="def" />
        <StatusParameterCol status="acc" />
      </div>
      <div className="status-parameter-row">
        <StatusParameterCol status="spd" />
        <StatusParameterCol status="eva" />
      </div>
      <div className="attribute-resist-row">
        <FireResist />
        <IceResist />
        <ElectricResist />
      </div>
    </div>
  );
};

export default UnitStatusParameter;
