/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { Button, Form, Modal, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Copy } from '../icon/FluentIcons';
import SVGButton from '../common/SVGButton';
import { ReactComponent as TwitterSocialIcon } from '../icon/TwitterSocialIcon.svg';

import { useSquadShare, useSquadShareModal, useSquadShareToTwitter } from '../../state/squad/squadState';

const ShareUrlCopyButton: React.FC<{
  disabled: boolean,
  onClick: () => void
}> = ({ disabled, onClick }) => {
  const { t } = useTranslation();

  return (
    <OverlayTrigger
      placement='left'
      overlay={<Tooltip id='tooltip-copy-url-to-clipboard'>{t('squad.copy_url_to_clipboard')}</Tooltip>}
    >
      <SVGButton
        aria-label="Copy squad url"
        variant="secondary"
        svg={<Copy />}
        disabled={disabled}
        onClick={onClick}
      />
    </OverlayTrigger>
  );
};

const TwitterShareButton: React.FC<{
  url?: string,
  disabled: boolean
}> = ({ url, disabled }) => {
  const { t } = useTranslation();
  const openTwitterShare = useSquadShareToTwitter(url);

  return (
    <OverlayTrigger
      placement='left'
      overlay={<Tooltip id='tooltip-share-url-to-twitter'>{t('squad.share_url_to_twitter')}</Tooltip>}
    >
      <SVGButton
        aria-label="Share squad url to Twitter"
        fluidSvg
        svg={<TwitterSocialIcon />}
        disabled={disabled}
        onClick={openTwitterShare}
      />
    </OverlayTrigger>
  );
};

const SquadShareModal: React.FC = () => {
  const { t } = useTranslation();
  const [show, hideModal, shareUrl] = useSquadShareModal();
  const [copyToClipboard, inputRef] = useSquadShare();

  return (
    <Modal
      show={show}
      centered
      aria-labelledby="share-squad-modal"
      onHide={hideModal}
    >
      <Modal.Header
        closeButton
        onHide={hideModal}
      >
        <Modal.Title id="share-squad-modal-title">
          {t('squad.share_squad_modal_title')}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div
          css={{
            display: 'flex',
            '& > button': {
              flexShrink: 0
            }
          }}
        >
          <Form.Control
            css={{ marginRight: 15 }}
            ref={inputRef}
            size="sm"
            type="text"
            readOnly
            placeholder="Loading..."
            value={shareUrl}
          />
          <ShareUrlCopyButton
            disabled={!shareUrl}
            onClick={copyToClipboard}
          />
        </div>
        <div
          css={{
            display: 'flex',
            justifyContent: 'flex-end',
            marginTop: 15,
            '& > button': {
              flexShrink: 0
            }
          }}
        >
          <TwitterShareButton
            url={shareUrl}
            disabled={!shareUrl}
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={hideModal}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SquadShareModal;