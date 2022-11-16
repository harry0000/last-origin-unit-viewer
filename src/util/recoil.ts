import {
  CallbackInterface,
  RecoilState,
  RecoilValue,
  SetterOrUpdater,
  Snapshot
} from 'recoil';
import deepEqual from 'fast-deep-equal';

export type ValueOrUpdater<T> = Parameters<SetterOrUpdater<T>>[0]

function isUpdater<T>(arg: ValueOrUpdater<T>): arg is (currVal: T) => T {
  return typeof arg === 'function';
}

export function getValue<T>(valueOrUpdater: ValueOrUpdater<T>, currVal: () => T): T {
  return isUpdater(valueOrUpdater) ? valueOrUpdater(currVal()) : valueOrUpdater;
}

export function getFromSnapshot(snapshot: Snapshot): <T>(rv: RecoilValue<T>) => T {
  return (rv) => snapshot.getLoadable(rv).getValue();
}

export function setIfNotDeepEqual<T>(
  cbi: CallbackInterface,
  state: RecoilState<T>,
  newValue: T,
  equal: (a: T, b: T) => boolean = deepEqual
): void {
  const set = cbi.set;
  const get = getFromSnapshot(cbi.snapshot);

  if (!equal(get(state), newValue)) {
    set(state, newValue);
  }
}
