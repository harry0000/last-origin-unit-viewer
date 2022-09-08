import {
  SetterOrUpdater,
  Snapshot,
  RecoilValue
} from 'recoil';

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
