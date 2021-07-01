/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

import CoreLinkSelector from './CoreLinkSelector';
import { OverlayTrigger, Popover } from 'react-bootstrap';
import PopoverListContent from '../../common/PopoverListContent';
import { Search } from '../../icon/FluentIcons';
import SVGIcon from '../../icon/SVGIcon';
import { effectValueColor } from '../../common/effectValueColor';

import { CoreLinkBonus } from '../../../domain/UnitCoreLinkBonusData';
import { calcMicroValue, calcMilliPercentageValue } from '../../../domain/ValueUnit';

import { useCoreLinkEffect, useCoreLinkRate } from '../../../state/corelink/unitCoreLinkState';

import '../UnitStatusSlot.css';
import './UnitCoreLinkView.css';

const CoreLinkRate: React.FC = () => {
  const rate = useCoreLinkRate();
  return (<span className="core-link">{rate}&nbsp;%</span>);
};

const CoreLinkEffectsPopoverView: React.FC<{
  bonus: CoreLinkBonus,
  children: ReactNode
}> = ({ bonus, children }) => {
  const { t } = useTranslation();
  const popover = (
    <Popover id="popover-core-link-effects" css={{ maxWidth: 'none' }}>
      <PopoverListContent>
        {Object.entries(bonus).map(([key, value]) => {
          const [effect, color] =
            'milliPercentage' in value ?
              ((v) => [`+ ${v} %`, v > 0 ? effectValueColor.positive : {}])(calcMilliPercentageValue(value)) :
              ((v) => [`+ ${v}`,   v > 0 ? effectValueColor.positive : {}])(calcMicroValue(value));

          return (
            <PopoverListContent.Row key={key} css={{ display: 'flex' }}>
              <div css={{ flexShrink: 0 }}>
                {t(`core_link_bonus.${key}`)}
              </div>
              <div css={{ width: 120, textAlign: 'right', marginLeft: 'auto', ...color }}>
                {effect}
              </div>
            </PopoverListContent.Row>
          );
        })}
      </PopoverListContent>
    </Popover>
  );

  return (
    <OverlayTrigger overlay={popover}>
      <span>{children}</span>
    </OverlayTrigger>
  );
};

const CoreLinkEffectDetailView: React.FC = () => {
  const bonus = useCoreLinkEffect();
  const child = (<SVGIcon css={{ height: 20, width: 20, cursor: 'help' }}><Search /></SVGIcon>);

  return (
    <span className="core-link-details">
      {
        bonus ?
          (<CoreLinkEffectsPopoverView bonus={bonus}>{child}</CoreLinkEffectsPopoverView>) :
          (child)
      }
    </span>
  );
};

const UnitCoreLinkView: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="slot-container">
      <div className="label">
        <span>{t('status.core_link')}</span>
        <CoreLinkRate />
        <CoreLinkEffectDetailView />
      </div>
      <div className="slot-row">
        <div className="slot-cell"><CoreLinkSelector slot="slot1" /></div>
        <div className="slot-cell"><CoreLinkSelector slot="slot2" /></div>
        <div className="slot-cell"><CoreLinkSelector slot="slot3" /></div>
        <div className="slot-cell"><CoreLinkSelector slot="slot4" /></div>
        <div className="slot-cell"><CoreLinkSelector slot="slot5" /></div>
      </div>
    </div>
  );
};

export default UnitCoreLinkView;
