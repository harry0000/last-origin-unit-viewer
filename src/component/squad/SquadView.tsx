/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { ShareAndroid } from '../icon/FluentIcons';
import SquadGrid from './SquadGrid';
import SVGButton from '../common/SVGButton';

import { useSquadShareModalOpener } from '../../state/squad/squadState';

const SquadShareModal = React.lazy(() => import('./SquadShareModal'));

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
    <div
      className={className}
      css={{ paddingTop: 15 }}
    >
      <div
        css={{
          display: 'flex',
          justifyContent: 'flex-end',
          paddingRight: 5
        }}
      >
        <SquadShareButton />
      </div>
      <div
        css={{
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <SquadGrid />
      </div>
      <React.Suspense fallback={React.Fragment}>
        <SquadShareModal />
      </React.Suspense>
    </div>
  );
};

export default SquadView;
