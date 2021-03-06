/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { Image, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { ShareAndroid } from '../icon/FluentIcons';
import SquadGrid from './SquadGrid';
import SVGButton from '../common/SVGButton';

import { UnitCost } from '../../domain/status/UnitCost';
import { UnitType } from '../../domain/UnitBasicInfo';

import { useSquadShareModalOpener, useSquadUnitTypeCount } from '../../state/squad/squadState';
import { useSquadUnitCostSummary } from '../../state/status/parameters/unitLvStatusState';

import './SquadView.css';

const SquadShareModal = React.lazy(() => import('./SquadShareModal'));

const SquadCostSummaryView: React.FC = () => {
  const { part, nutrient, power } = useSquadUnitCostSummary();
  const CostView = ({ type, value }: { type: keyof UnitCost, value: number }) => {
    const { t } = useTranslation();
    return (
      <div>
        <span
          className={`cost-icon ${type}`}
          css={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/icon/cost_${type}.webp)`,
            maskImage: `url(${process.env.PUBLIC_URL}/icon/cost_${type}.webp)`,
            maskSize: '24px'
          }}
        >
          <span className="sr-only">{t(`cost.${type}`)}</span>
        </span>
        <span className="cost-value">{value}</span>
      </div>
    );
  };

  return (
    <div className="cost-summary">
      <CostView type="part" value={part} />
      <CostView type="nutrient" value={nutrient} />
      <CostView type="power" value={power} />
    </div>
  );
};

const SquadUnitTypeSummaryView: React.FC = () => {
  const CountView = ({ type, count }: { type: UnitType, count: number }) => {
    const { t } = useTranslation();
    return (
      <div>
        <Image
          className="type-icon"
          draggable="false"
          height={24}
          width={24}
          alt={t(`unit.type.${type}`)}
          src={`${process.env.PUBLIC_URL}/icon/type_${type}.webp`}
        />
        <span className="type-count">{count}</span>
      </div>
    );
  };

  const { light, flying, heavy } = useSquadUnitTypeCount();

  return (
    <div className="type-summary">
      <CountView type={UnitType.Light} count={light} />
      <CountView type={UnitType.Flying} count={flying} />
      <CountView type={UnitType.Heavy} count={heavy} />
    </div>
  );
};

const SquadShareButton: React.FC = () => {
  const { t } = useTranslation();
  const openModal = useSquadShareModalOpener();

  return (
    <React.Fragment>
      <OverlayTrigger
        placement='left'
        overlay={<Tooltip id='tooltip-share-squad'>{t('squad.share_squad')}</Tooltip>}
      >
        <SVGButton
          aria-label="Share squad"
          variant="secondary"
          svg={<ShareAndroid />}
          onClick={() => openModal()}
        />
      </OverlayTrigger>
    </React.Fragment>
  );
};

const SquadView: React.FC<{ className: string }> = ({ className }) => {
  return (
    <div className={className}>
      <div className="squad-summary">
        <SquadCostSummaryView />
        <SquadUnitTypeSummaryView />
        <div className="squad-action">
          <SquadShareButton />
        </div>
      </div>
      <div className="squad-grid">
        <SquadGrid />
      </div>
      <React.Suspense fallback={React.Fragment}>
        <SquadShareModal />
      </React.Suspense>
    </div>
  );
};

export default SquadView;
