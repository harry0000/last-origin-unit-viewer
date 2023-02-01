import { ReactElement } from 'react';

// eslint-disable-next-line
export function ifTruthy<C extends ReactElement<any, any> | string>(predicate: boolean, component: C | null): C | null {
  return predicate ? component : null;
}

// eslint-disable-next-line
export function ifNonNullable<T, C extends ReactElement<any, any> | string>(value: T | undefined | null, f: (value: T) => C | null): C | null {
  return value ? f(value) : null;
}
