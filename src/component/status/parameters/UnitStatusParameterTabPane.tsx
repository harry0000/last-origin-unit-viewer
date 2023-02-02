/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { UnitElectricResist, UnitFireResist, UnitIceResist } from './AttributeResist';
import { UnitStatusEffectsView } from './StatusEffectsView';
import UnitStatusIcon from './UnitStatusIcon';
import { appendPercentage } from './UnitStatusParameterFormatter';

import { EnhanceableStatus } from '../../../state/status/parameters/UnitLvStatusState';
import { useSelectedUnitStatusEnhancedLv } from '../../../state/status/parameters/UnitLvStatusHook';
import { useStatusParameter } from '../../../state/status/parameters/UnitStatusParameterHook';

import './StatusParameter.css';
import { Tab } from 'react-bootstrap';

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
          <UnitStatusEffectsView className="effects" parameter={status} />
        </div>
      </div>
    </div>
  );
};

const UnitStatusParameterTabPane: React.FC<{ eventKey: string }> = (props) => {
  return (
    <Tab.Pane
      className="status-parameter-container"
      {...props}
    >
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
        <UnitFireResist />
        <UnitIceResist />
        <UnitElectricResist />
      </div>
    </Tab.Pane>
  );
};

export default UnitStatusParameterTabPane;
