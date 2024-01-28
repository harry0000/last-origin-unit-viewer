/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

import CircleImageSwitch from '../common/CircleImageSwitch';

import { BioroidUnitNumber, UnitKind } from '../../domain/UnitBasicInfo';

import { useAffectionBonus } from '../../state/status/UnitAffectionHook';
import { useSelectedUnit } from '../../state/selector/UnitSelectorHook';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const AffectionBonusSelector: React.FC = () => {
  const { t } = useTranslation();
  const selected = useSelectedUnit();
  const Selector: React.FC<{ bioroid: BioroidUnitNumber }> = ({ bioroid }) => {
    const [bonusEnabled, toggleEnableBonus] = useAffectionBonus(bioroid);

    return (
      <div css={{ display: 'flex', alignItems: 'center' }}>
        <OverlayTrigger
          placement="top"
          overlay={<Tooltip id='tooltip-affection-bonus'>{t('affection.bonus')}</Tooltip>}
        >
          <CircleImageSwitch
            id="affection-bonus-switch"
            src={`${import.meta.env.BASE_URL}icon/wedding_vows.webp`}
            height={48}
            width={48}
            alt={t('affection.bonus')}
            selected={bonusEnabled}
            onChange={toggleEnableBonus}
          />
        </OverlayTrigger>
        <span
          css={{
            color: '#ccc',
            opacity: bonusEnabled ? 1 : 0.3,
            marginLeft: 10
          }}
        >
          {t('affection.effect')}
        </span>
      </div>
    );
  };

  return selected && selected.kind === UnitKind.Bioroid ?
    (<Selector bioroid={selected.no} />) :
    null;
};

export default AffectionBonusSelector;
