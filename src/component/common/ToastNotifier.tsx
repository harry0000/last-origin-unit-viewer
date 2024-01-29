/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { Toast } from 'react-bootstrap';

import { NotificationLevel, useNotification } from '../../state/ui/NotificationState';

const iconColors: Readonly<{ [key in NotificationLevel]: string }> = {
  info: '#007aff',
  warn: '#fc0',
  error: '#dc3545'
};

const Icon: React.FC<{ level: NotificationLevel }> = ({ level }) => {
  return (
    <svg
      className="bd-placeholder-img rounded mr-2"
      width="20"
      height="20"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      focusable="false"
      role="img"
    >
      <rect fill={iconColors[level]} width="100%" height="100%"/>
    </svg>
  );
};

const ToastNotifier: React.FC = () => {
  const { t } = useTranslation();
  const [notifications, hide] = useNotification();

  return (
    <div
      css={{
        position: 'fixed',
        top: 10,
        right: 10,
        zIndex: 1060 /* $zindex-popover */
      }}
    >
      {notifications.map(({ level, key }) => (
        <Toast
          key={key}
          autohide
          delay={3000}
          onClose={() => { hide(key); }}
        >
          <Toast.Header>
            <Icon level={level} />
            <strong className="mr-auto">{t(`notification.${key}.title`)}</strong>
          </Toast.Header>
          <Toast.Body>{t(`notification.${key}.body`)}</Toast.Body>
        </Toast>
      ))}
    </div>
  );
};

export default ToastNotifier;
