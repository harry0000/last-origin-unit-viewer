import { ReactElement } from 'react';

// eslint-disable-next-line
export function ifTruthy(predicate: boolean, component: ReactElement<any, any> | null): ReactElement<any, any> | null {
  return predicate ? component : null;
}

// eslint-disable-next-line
export function ifNonNullable<T>(value: T | undefined | null, f: (value: T) => ReactElement<any, any> | null): ReactElement<any, any> | null {
  return value ? f(value) : null;
}
