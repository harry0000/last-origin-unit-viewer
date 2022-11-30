export function dropWhile<T, U>(
  array: Array<T | U>,
  predicate: (value: T | U) => value is T
): asserts array is Array<U>;
export function dropWhile<T>(
  array: Array<T>,
  predicate: (value: T) => boolean
): void;
export function dropWhile<T>(
  array: Array<T>,
  predicate: (value: T) => boolean
): void {
  let i = 0;
  while (i < array.length) {
    if (predicate(array[i])) {
      array.splice(i, 1);
    } else {
      i++;
    }
  }
}

export function partition<T, U>(
  array: ReadonlyArray<T | U>,
  predicate: (value: T | U) => value is T
): [Array<T>, Array<U>];
export function partition<T>(
  array: ReadonlyArray<T>,
  predicate: (value: T) => boolean
): [Array<T>, Array<T>];
export function partition<T>(
  array: ReadonlyArray<T>,
  predicate: (value: T) => boolean
): [Array<T>, Array<T>] {
  return array.reduce<[Array<T>, Array<T>]>(
    (acc, v) => {
      if (predicate(v)) {
        acc[0].push(v);
      } else {
        acc[1].push(v);
      }

      return acc;
    },
    [[], []]
  );
}
