type MakeSequence<N extends number, I extends unknown[] = [unknown], R = N> =
  N extends I['length'] ?
    R :
    MakeSequence<N, [...I, unknown], R | I['length']>

export type Sequence<N extends number> = MakeSequence<N>

export type IndexOf<T extends readonly unknown[]> = Exclude<Partial<T>['length'], T['length']>
export type Keyof<T> = T extends Record<string | number | symbol, unknown> ? keyof T : never
export type ValueOf<T extends Record<string | number | symbol, unknown>, K extends Keyof<T>> = T extends { [key in K]: infer V } ? V : never

// https://github.com/microsoft/TypeScript/issues/17002
export function isReadonlyArray<T>(arg: ReadonlyArray<T> | unknown): arg is ReadonlyArray<T> {
  return Array.isArray(arg);
}

type Falsy = false | '' | 0 | -0 | 0n | null | undefined

export function notFalsy<A>(arg: A | Falsy): arg is A {
  return !!arg;
}
