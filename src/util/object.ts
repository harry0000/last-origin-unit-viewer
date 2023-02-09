export function isRecord(arg: unknown): arg is Record<string | number | symbol, unknown> {
  return !!arg && Object.prototype.toString.call(arg) === '[object Object]';
}

type TupleEntry<T extends readonly unknown[], I extends unknown[] = [], R = never> =
  T extends readonly [infer Head, ...infer Tail] ?
    TupleEntry<Tail, [...I, unknown], R | [`${I['length']}`, Head]> :
    R

// eslint-disable-next-line @typescript-eslint/ban-types
type ObjectEntry<T extends {}> =
  // eslint-disable-next-line @typescript-eslint/ban-types
  T extends object ?
    { [K in keyof T]: [K, Required<T>[K]] }[keyof T] extends infer E ?
      E extends [infer K extends string | number, infer V] ?
        [`${K}`, V] :
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
