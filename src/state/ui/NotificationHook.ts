import { useRecoilCallback, useRecoilValue } from 'recoil';

import {
  Notification,
  NotificationKey,
  addNotification,
  notificationsState,
  removeNotification
} from './NotificationState';

export function useNotification(): [notifications: ReadonlyArray<Notification>, hideNotification: (key: NotificationKey) => void] {
  return [
    useRecoilValue(notificationsState),
    useRecoilCallback(removeNotification)
  ];
}

export function useNotificationResister(): (key: NotificationKey) => void {
  return useRecoilCallback(addNotification);
}
