/** @jsxRuntime classic */
/** @jsx jsx */
import { CSSObject, jsx } from '@emotion/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

import AutoFireButton from '../../common/AutoFireButton';
import UnitStatusIcon from './UnitStatusIcon';

import { EnhanceableStatus } from '../../../state/status/parameters/UnitLvStatusState';
import {
  useSelectedUnitStatusEnhancedLv,
  useStatusParameterDecrement,
  useStatusParameterIncrement
} from '../../../state/status/parameters/UnitLvStatusHook';

const UnitStatusParameterLvView: React.FC<{ status: EnhanceableStatus }> = ({ status }) => {
  const { t } = useTranslation();
  const View = ({ status }: { status: EnhanceableStatus }) => {
    const lv = useSelectedUnitStatusEnhancedLv(status);
    return (<React.Fragment>{lv}</React.Fragment>);
  };

  return (
    <span>
      {t('lv')}
      <span css={{ display: 'inline-block', width: '2em', textAlign: 'right' }}>
        <View status={status} />
      </span>
    </span>
  );
};

const StatusEnhancementLvDecrementButton: React.FC<{ status: EnhanceableStatus }> = ({ status }) => {
  const [disabled, decrement] = useStatusParameterDecrement(status);
  return (<AutoFireButton variant="secondary" disabled={disabled} onClick={decrement}><span>-</span></AutoFireButton>);
};

const StatusEnhancementLvIncrementButton: React.FC<{ status: EnhanceableStatus }> = ({ status }) => {
  const [disabled, increment] = useStatusParameterIncrement(status);
  return (<AutoFireButton variant="secondary" disabled={disabled} onClick={increment}><span>+</span></AutoFireButton>);
};

const UnitStatusParameterUpDownForm: React.FC<{ status: EnhanceableStatus }> = ({ status }) => {
  return (
    <div css={{
      display: 'flex',
      alignItems: 'center',
      color: '#ccc',
      fontWeight: 'bold'
    }}>
      <div css={{
        marginRight: 8,
        '@media (max-width: 480px)': { alignSelf: 'start' }
      }}>
        <UnitStatusIcon height={24} width={24} status={status} />
      </div>
      <div
        css={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          '@media (max-width: 480px)': { flexDirection: 'column' },
          '@media (min-width: 480px)': { flexDirection: 'row' }
        }}
      >
        <div
          css={{
            marginRight: 'auto'
          }}
        >
          <UnitStatusParameterLvView status={status} />
        </div>
        <div
          css={{
            textAlign: 'right',
            marginLeft: 'auto',
            '& > .btn': {
              lineHeight: 0.5,
              fontWeight: 'bold',
              width: 50
            },
            '& > .btn:first-of-type': {
              marginRight: 10
            }
          }}
        >
          <StatusEnhancementLvDecrementButton status={status} />
          <StatusEnhancementLvIncrementButton status={status} />
        </div>
      </div>
    </div>
  );
};

const row: CSSObject = {
  display: 'flex',
  width: '100%',
  '& > div': {
    width: '50%'
  },
  '& > div:first-of-type': { paddingRight: 8 },
  '& > div:last-of-type': { paddingLeft: 8 },
};

const UnitStatusParametersForm: React.FC = () => {
  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        '& > div:not(:first-of-type)': { marginTop: 5 }
      }}
    >
      <div css={row}>
        <UnitStatusParameterUpDownForm status="hp" />
        <UnitStatusParameterUpDownForm status="cri" />
      </div>
      <div css={row}>
        <UnitStatusParameterUpDownForm status="atk" />
        <UnitStatusParameterUpDownForm status="acc" />
      </div>
      <div css={row}>
        <UnitStatusParameterUpDownForm status="def" />
        <UnitStatusParameterUpDownForm status="eva" />
      </div>
    </div>
  );
};

export default UnitStatusParametersForm;
