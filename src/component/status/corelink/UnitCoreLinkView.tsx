/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { Suspense } from 'react';
import { ReactElementLike } from 'prop-types';
import { useTranslation } from 'react-i18next';

import { Button, OverlayTrigger, Popover } from 'react-bootstrap';
import PopoverListContent from '../../common/PopoverListContent';
import { Search } from '../../icon/FluentIcons';
import SVGIcon from '../../icon/SVGIcon';
import UnitStatusHeading from '../UnitStatusHeading';
import { effectValueColor } from '../../common/effectValueColor';

import { CoreLinkBonus } from '../../../domain/UnitCoreLinkBonusData';
import { UnitBasicInfo } from '../../../domain/UnitBasicInfo';
import { calcMicroValue, calcMilliPercentageValue } from '../../../domain/ValueUnit';

import {
  useCoreLinkEffect,
  useCoreLinkRate,
  useLinkAllSlot
} from '../../../state/corelink/UnitCoreLinkHook';
import { useSelectedUnit } from '../../../state/selector/UnitSelectorHook';

import '../UnitSlot.css';
import './UnitCoreLinkView.css';

const CoreLinkRate: React.FC = () => {
  const selected = useSelectedUnit();
  const View = ({ rate }: { rate: number }) => (<span className="core-link-rate">{rate}&nbsp;%</span>);

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
  children: ReactElementLike
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
      {children}
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
    <span className="core-link-rate-details">
      {selected ? (<DetailView unit={selected} />) : (child)}
    </span>
  );
};

const WrappedButton: React.FC<{
  available: boolean,
  onClick: () => void
}> = ({ available, onClick, ...rest }) => {
  const { t } = useTranslation();
  return (
    <Button
      {...rest}
      variant="secondary"
      disabled={!available}
      onClick={onClick}
    >
      {t('form.link_all_slot')}
    </Button>
  );
};

const LinkAllSlotButton: React.FC<{ unit: UnitBasicInfo }> = ({ unit }) => {
  const [linkAllSlot, available] = useLinkAllSlot(unit);

  return (<WrappedButton available={available} onClick={linkAllSlot} />);
};

const DisabledButton: React.FC = () => {
  return (<WrappedButton available={false} onClick={() => { return; }} />);
};

const CoreLinkAction: React.FC = () => {
  const selected = useSelectedUnit();

  return (
    <div className="core-link-action">
      {selected ? (<LinkAllSlotButton unit={selected} />): (<DisabledButton />)}
    </div>
  );
};

const CoreLinkSelector = React.lazy(() => import('./CoreLinkSelector'));

const UnitCoreLinkView: React.FC = () => {
  return (
    <div className="slot-container">
      <UnitStatusHeading
        iconSrc={`${import.meta.env.BASE_URL}icon/placeholder_core_link.webp`}
        headingKey="heading.core_link"
      >
        <CoreLinkRate />
        <CoreLinkEffectDetailView />
        <CoreLinkAction />
      </UnitStatusHeading>
      <div className="slot-row">
        <div className="slot-cell"><Suspense fallback={null}><CoreLinkSelector slot="slot1" /></Suspense></div>
        <div className="slot-cell"><Suspense fallback={null}><CoreLinkSelector slot="slot2" /></Suspense></div>
        <div className="slot-cell"><Suspense fallback={null}><CoreLinkSelector slot="slot3" /></Suspense></div>
        <div className="slot-cell"><Suspense fallback={null}><CoreLinkSelector slot="slot4" /></Suspense></div>
        <div className="slot-cell"><Suspense fallback={null}><CoreLinkSelector slot="slot5" /></Suspense></div>
      </div>
    </div>
  );
};

export default UnitCoreLinkView;
