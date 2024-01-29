/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { Image } from 'react-bootstrap';
import UnitRankIcon from '../../common/UnitRankIcon';

import { CoreLinkUnit } from '../../../domain/UnitCoreLink';
import { UnitNumber, UnitRank, UnitRole, UnitType } from '../../../domain/UnitBasicInfo';

const FitUnitView: React.FC<{ unit: UnitNumber }> = ({ unit }) => {
  const { t } = useTranslation();

  return (
    <span css={{ display: 'inline-block', height: '100%', width: '100%' }}>
      <Image
        fluid
        rounded
        draggable="false"
        sizes="(max-width: 480px) 47px, (min-width: 480px) 62px"
        alt={t(`unit:name.${unit}`)}
        src={`${import.meta.env.BASE_URL}unit_icon/${unit}.webp`}
      />
    </span>
  );
};

const PartialFitUnitView: React.FC<{
  rank: UnitRank,
  type: UnitType,
  role: UnitRole,
  rate: number
}> = ({ rank, type, role, rate }) => {
  const { t } = useTranslation();

  return (
    <span css={{ display: 'inline-block', height: '100%', width: '100%' }}>
      <span
        css={{
          display: 'inline-flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: 10,
          '@media (max-width: 480px)': { height: 47, width: 47 },
          '@media (min-width: 480px)': { height: 62, width: 62 }
        }}
      >
        <UnitRankIcon
          sizes="(max-width: 480px) 24px, (min-width: 480px) 30px"
          rank={rank}
          role={role}
        />
        <span
          css={{
            color: '#ccc',
            fontWeight: 'bold',
            '@media (max-width: 480px)': { fontSize: '0.7em' },
            '@media (min-width: 480px)': { fontSize: '0.9em' }
          }}
        >
          {t(`unit.type.${type}`)}
        </span>
      </span>
      <span
        css={{
          position: 'absolute',
          top: -5,
          right: 0,
          color: '#0cf',
          fontWeight: 'bold',
          textShadow: [
            '1px 1px 0px #000, -1px -1px 0px #000',
            '-1px 1px 0px #000,  1px -1px 0px #000',
            '1px 0px 0px #000, -1px  0px 0px #000',
            '0px 1px 0px #000,  0px -1px 0px #000'
          ].join(),
          '@media (max-width: 480px)': { fontSize: '0.7em' },
          '@media (min-width: 480px)': { fontSize: '0.9em' }
        }}
      >
        +{rate}%
      </span>
    </span>
  );
};

const CoreLinkUnitView: React.FC<{ linkedUnit: CoreLinkUnit }> = ({ linkedUnit }) => {
  return 'unit' in linkedUnit ?
    (<FitUnitView unit={linkedUnit.unit} />) :
    (<PartialFitUnitView rank={linkedUnit.rank} type={linkedUnit.type} role={linkedUnit.role} rate={linkedUnit.rate} />);
};

export default CoreLinkUnitView;
