import {
  ReadWriteSelectorFamilyOptions,
  ReadWriteSelectorOptions,
  RecoilState,
  SerializableParam,
  SetterOrUpdater,
  selector,
  selectorFamily
} from 'recoil';

export type ValueOrUpdater<T> = Parameters<SetterOrUpdater<T>>[0]

export function isUpdater<T>(arg: ValueOrUpdater<T>): arg is (currVal: T) => T {
  return typeof arg === 'function';
}

class GetMethodNotImplementedError extends Error {
  constructor(key: string) {
    super(`get is not implemented on ${key}`);
  }
}

export function setOnlySelector<T>(
  options: Omit<ReadWriteSelectorOptions<T>, 'get'>
): RecoilState<T> {
  return selector<T>({
    ...options,
    get: () => { throw new GetMethodNotImplementedError(options.key); }
  });
}

export function setOnlySelectorFamily<T, P extends SerializableParam>(
  options: Omit<ReadWriteSelectorFamilyOptions<T, P>, 'get'>
): (param: P) => RecoilState<T> {
  return selectorFamily<T, P>({
    ...options,
    get: () => { throw new GetMethodNotImplementedError(options.key); }
  });
}

export function updateSelector(
  options: Omit<ReadWriteSelectorOptions<void>, 'get'>
): RecoilState<void> {
  return selector<void>({
    ...options,
    get: () => { throw new GetMethodNotImplementedError(options.key); }
  });
}

export function updateSelectorFamily<P extends SerializableParam>(
  options: Omit<ReadWriteSelectorFamilyOptions<void, P>, 'get'>
): (param: P) => RecoilState<void> {
  return selectorFamily<void, P>({
    ...options,
    get: () => () => { throw new GetMethodNotImplementedError(options.key); }
  });
}
