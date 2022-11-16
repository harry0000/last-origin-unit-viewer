import { atom, useRecoilState, useSetRecoilState } from 'recoil';

export type NotificationLevel = 'info' | 'warn' | 'error'
type NotificationKey =
  'copied_squad_url' |
  'restore_squad_units' |
  'squad_is_empty' |
  'error_while_generating_squad_url' |
  'error_while_restoring_squad_url'

type Notification = {
  level: NotificationLevel,
  key: NotificationKey
}

function createNotification(key: NotificationKey): Notification {
  switch (key) {
  case 'copied_squad_url':
  case 'restore_squad_units':
    return { level: 'info', key };
  case 'squad_is_empty':
    return { level: 'warn', key };
  case 'error_while_generating_squad_url':
  case 'error_while_restoring_squad_url':
    return { level: 'error', key };
  }
}

class NotificationStore {

  readonly notifications: ReadonlyArray<Notification>;

  constructor(notifications?: ReadonlyArray<Notification>) {
    this.notifications = notifications ?? [];
  }

  #remove(target: NotificationKey): ReadonlyArray<Notification> {
    const i = this.notifications.findIndex(({ key }) => key === target);
    if (i >= 0) {
      return this.notifications.slice(0, i).concat(this.notifications.slice(i + 1));
    } else {
      return this.notifications;
    }
  }

  addNotification(key: NotificationKey): NotificationStore {
    return new NotificationStore(this.#remove(key).concat(createNotification(key)));
  }

  removeNotification(key: NotificationKey): NotificationStore {
    const newValue = this.#remove(key);
    if (newValue !== this.notifications) {
      return new NotificationStore(newValue);
    } else {
      return this;
    }
  }
}

const notificationStoreState = atom<NotificationStore>({
  key: 'notificationStoreState',
  default: new NotificationStore()
});

export function useNotification(): [notifications: ReadonlyArray<Notification>, hideNotification: (key: NotificationKey) => void] {
  const [store, setStore] =  useRecoilState(notificationStoreState);

  return [
    store.notifications,
    (key) => { setStore(s => s.removeNotification(key)); }
  ];
}

export function useNotificationResister(): (key: NotificationKey) => void {
  const setter = useSetRecoilState(notificationStoreState);

  return (key) => { setter(s => s.addNotification(key)); };
}
