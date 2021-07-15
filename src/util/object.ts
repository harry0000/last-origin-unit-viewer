export function isRecord(arg: unknown): arg is Record<string, unknown> {
  return !!arg && Object.prototype.toString.call(arg) === '[object Object]';
}

export function mapObjectValue<K extends string | number | symbol, V, R>(object: Record<K, V>, f: (value: V) => R): Record<K, R>
export function mapObjectValue<K extends string | number | symbol, V, R>(object: Partial<Record<K, V>>, f: (value: V) => R): Partial<Record<K, R>>
export function mapObjectValue<K extends string | number | symbol, V, R>(object: Record<K, V>, f: (value: V) => R): Record<K, R> {
  return Object.fromEntries(Object.entries<V>(object).map(([key, value]) => [key, f(value)])) as Record<K, R>;
}

// export type Entry<K extends string | number | symbol, T> = K extends keyof T ? readonly [`${string & K}`, T[K]] : never
export type NonNullableEntry<K extends string | number | symbol, T> = K extends keyof T ? readonly [`${string & K}`, NonNullable<T[K]>] : never

export function foldObjectNonNullableEntry<T, R, K extends keyof T = keyof T>(
  object: T,
  f: (entry: NonNullableEntry<K, T>) => K extends keyof R ? R : never
): (z: R) => R {
  return function (z): R {
    return Object.entries(object).reduce<R>((acc, entry) => {
      const r = entry[1] ? f(entry as unknown as NonNullableEntry<K, T>) : entry;
      return {
        ...acc,
        ...r
      };
    }, z);
  };
}
