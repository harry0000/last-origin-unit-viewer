type Digits = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type Tail<T extends string> = T extends `${Digits}${infer U}` ? U : never;
type Head<T extends string> = T extends `${infer U}${Tail<T>}` ? U : never;
type DigitsStr = `${Digits}`;

type Tile<T extends unknown[], N extends Digits | DigitsStr | 10 | '10'> = [
  [],
  [...T],
  [...T, ...T],
  [...T, ...T, ...T],
  [...T, ...T, ...T, ...T],
  [...T, ...T, ...T, ...T, ...T],
  [...T, ...T, ...T, ...T, ...T, ...T],
  [...T, ...T, ...T, ...T, ...T, ...T, ...T],
  [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T],
  [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T],
  [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T],
][N];

type MakeTupleImpl<T, N extends string, X extends unknown[] = []> =
  string extends N ? never :
    N extends '' ? X :
      Head<N> extends infer U ?
        U extends DigitsStr ?
          MakeTupleImpl<
            T,
            Tail<N>, // src.slice(1)
            [ ...Tile<[T], U>, ...Tile<X, 10> /* x * 10 */]
            > :
          never :
        never;
type MakeTuple<T, N extends number> = MakeTupleImpl<T, `${N}`>;

type ToNumber<S extends string> = MakeTupleImpl<unknown, S>['length'];

type IndexSequenceImpl<T extends unknown[]> = {
  [K in keyof T]: K extends string ? ToNumber<K> : never;
}
type IndexSequence<N extends number> = IndexSequenceImpl<MakeTuple<unknown, N>>[number];
export type Sequence<N extends number> = Exclude<N | IndexSequence<N>, 0>

type Repeat<T extends number, R extends unknown[] = []> = R['length'] extends T ? R : Repeat<T, [unknown, ...R]>
type Add<T extends number, U extends number> = [...Repeat<T>, ...Repeat <U>]['length']
export type Increment<T extends number> = Add<T, 1>

export type IndexOf<T extends readonly unknown[]> = Exclude<Partial<T>['length'], T['length']>
export type Keyof<T> = T extends Record<string | number | symbol, unknown> ? keyof T : never
