import { Increment } from './type';

export function isRecord(arg: unknown): arg is Record<string | number | symbol, unknown> {
  return !!arg && Object.prototype.toString.call(arg) === '[object Object]';
}

export function mapObjectValue<K extends string | number | symbol, V, R>(object: Record<K, V>, f: (value: V) => R): Record<K, R>
export function mapObjectValue<K extends string | number | symbol, V, R>(object: Partial<Record<K, V>>, f: (value: V) => R): Partial<Record<K, R>>
export function mapObjectValue<K extends string | number | symbol, V, R>(object: Record<K, V>, f: (value: V) => R): Record<K, R> {
  return Object.fromEntries(Object.entries<V>(object).map(([key, value]) => [key, f(value)])) as Record<K, R>;
}

type TupleEntry<T extends ReadonlyArray<unknown>, I extends number = 0, R = never> =
  T extends readonly [infer Head, ...infer Tail] ?
    TupleEntry<Tail, Increment<I> & number, R | [`${I}`, Head]> :
    R

// eslint-disable-next-line @typescript-eslint/ban-types
type ObjectEntry<T extends {}> =
  T extends Record<string | number | symbol, unknown> ?
    keyof T extends infer K ?
      K extends string | number ?
        [`${K}`, Required<T>[K]] :
        never :
      never :
    never

// eslint-disable-next-line @typescript-eslint/ban-types
export type Entry<T extends {}> =
  T extends readonly [unknown, ...unknown[]] ?
    TupleEntry<T> :
    T extends ReadonlyArray<infer U> ?
      [`${number}`, U] :
      ObjectEntry<T>

// eslint-disable-next-line @typescript-eslint/ban-types
export function typedEntries<T extends {}>(object: T): ReadonlyArray<Entry<T>> {
  return Object.entries(object) as unknown as ReadonlyArray<Entry<T>>;
}

export function foldObjectEntry<T extends Record<string | number | symbol, unknown>, R>(
  object: T,
  f: (entry: Entry<T>) => keyof T extends keyof R ? R : never
): (z: R) => R {
  return function (z): R {
    return typedEntries(object).reduce<R>((acc, entry) => {
      return {
        ...acc,
        ...f(entry)
      };
    }, z);
  };
}
