export function isRecord(arg: unknown): arg is Record<string, unknown> {
  return !!arg && Object.prototype.toString.call(arg) === '[object Object]';
}

export function mapObjectValue<K extends string | number | symbol, V, R>(object: Record<K, V>, f: (value: V) => R): Record<K, R>
export function mapObjectValue<K extends string | number | symbol, V, R>(object: Partial<Record<K, V>>, f: (value: V) => R): Partial<Record<K, R>>
export function mapObjectValue<K extends string | number | symbol, V, R>(object: Record<K, V>, f: (value: V) => R): Record<K, R> {
  return Object.fromEntries(Object.entries<V>(object).map(([key, value]) => [key, f(value)])) as Record<K, R>;
}

export type Entry<T> =
  T extends Record<string | number | symbol, unknown> ?
    keyof T extends string ?
      NonNullable<{ [K in keyof T]: [`${string & K}`, T[K]] }[keyof T]> :
      never :
    never

export type NonNullableEntry<T> =
  T extends Record<string | number | symbol, unknown> ?
    keyof T extends string ?
      NonNullable<{ [K in keyof T]: [`${string & K}`, NonNullable<T[K]>] }[keyof T]> :
      never :
    never

export function typedEntries<T>(object: T): ReadonlyArray<Entry<T>> {
  return Object.entries(object) as unknown as ReadonlyArray<Entry<T>>;
}

export function typedNonNullableEntries<T>(object: T): ReadonlyArray<NonNullableEntry<T>> {
  return Object.entries(object) as unknown as ReadonlyArray<NonNullableEntry<T>>;
}

export function foldObjectNonNullableEntry<T, R, K extends keyof T = keyof T>(
  object: T,
  f: (entry: NonNullableEntry<T>) => K extends keyof R ? R : never
): (z: R) => R {
  return function (z): R {
    return Object.entries(object).reduce<R>((acc, entry) => {
      const r = entry[1] ? f(entry as unknown as NonNullableEntry<T>) : entry;
      return {
        ...acc,
        ...r
      };
    }, z);
  };
}
