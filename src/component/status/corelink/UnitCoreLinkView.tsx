/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { Fragment, ReactNode, Suspense } from 'react';
import { useTranslation } from 'react-i18next';

import { OverlayTrigger, Popover } from 'react-bootstrap';
import PopoverListContent from '../../common/PopoverListContent';
import { Search } from '../../icon/FluentIcons';
import SVGIcon from '../../icon/SVGIcon';
import { effectValueColor } from '../../common/effectValueColor';

import { CoreLinkBonus } from '../../../domain/UnitCoreLinkBonusData';
import { UnitBasicInfo } from '../../../domain/UnitBasicInfo';
import { calcMicroValue, calcMilliPercentageValue } from '../../../domain/ValueUnit';

import { useCoreLinkEffect, useCoreLinkRate } from '../../../state/corelink/unitCoreLinkState';
import { useSelectedUnit } from '../../../state/selector/unitSelectorState';

import '../UnitStatusSlot.css';
import './UnitCoreLinkView.css';

const CoreLinkRate: React.FC = () => {
  const selected = useSelectedUnit();
  const View = ({ rate }: { rate: number }) => (<span className="core-link">{rate}&nbsp;%</span>);

  const CoreLinkRateView: React.FC<{ unit: UnitBasicInfo }> = ({ unit }) => {
    const rate = useCoreLinkRate(unit);
    return (<View rate={rate} />);
  };

  return selected ?
    (<CoreLinkRateView unit={selected} />) :
    (<View rate={0} />);
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
  const selected = useSelectedUnit();
  const child = (<SVGIcon css={{ height: 20, width: 20, cursor: 'help' }}><Search /></SVGIcon>);

  const DetailView: React.FC<{ unit: UnitBasicInfo }> = ({ unit }) => {
    const bonus = useCoreLinkEffect(unit);
    return (<CoreLinkEffectsPopoverView bonus={bonus}>{child}</CoreLinkEffectsPopoverView>);
  };

  return (
    <span className="core-link-details">
      {selected ? (<DetailView unit={selected} />) : (child)}
    </span>
  );
};

const CoreLinkSelector = React.lazy(() => import('./CoreLinkSelector'));

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
        <div className="slot-cell"><Suspense fallback={Fragment}><CoreLinkSelector slot="slot1" /></Suspense></div>
        <div className="slot-cell"><Suspense fallback={Fragment}><CoreLinkSelector slot="slot2" /></Suspense></div>
        <div className="slot-cell"><Suspense fallback={Fragment}><CoreLinkSelector slot="slot3" /></Suspense></div>
        <div className="slot-cell"><Suspense fallback={Fragment}><CoreLinkSelector slot="slot4" /></Suspense></div>
        <div className="slot-cell"><Suspense fallback={Fragment}><CoreLinkSelector slot="slot5" /></Suspense></div>
      </div>
    </div>
  );
};

export default UnitCoreLinkView;
