export type IntegerValue<T extends number = number> = Readonly<{ value: T }>
export type MilliValue                              = Readonly<{ milliValue: number }>
export type MicroValue                              = Readonly<{ microValue: number }>
export type MilliPercentageValue                    = Readonly<{ milliPercentage: number }>

export type ValueUnit = keyof IntegerValue | keyof MilliValue | keyof MicroValue | keyof MilliPercentageValue
export type ValueTypes = IntegerValue | MilliValue | MicroValue | MilliPercentageValue

export const ZeroIntegerValue = { value: 0 } as const satisfies IntegerValue;
export const ZeroMilliValue = { milliValue: 0 } as const satisfies MilliValue;
export const ZeroMicroValue = { microValue: 0 } as const satisfies MicroValue;
export const ZeroMilliPercentageValue = { milliPercentage: 0 } as const satisfies MilliPercentageValue;

export function reverseIntegerValueSign({ value }: IntegerValue): IntegerValue {
  return { value: -value };
}

export function reverseMilliValueSign({ milliValue }: MilliValue): MilliValue {
  return { milliValue: -milliValue };
}

export function reverseMicroValueSign({ microValue }: MicroValue): MicroValue {
  return { microValue: -microValue };
}

export function reverseMilliPercentageValueSign({ milliPercentage }: MilliPercentageValue): MilliPercentageValue {
  return { milliPercentage: -milliPercentage };
}

export function reverseSign(value: ValueTypes): ValueTypes {
  if ('milliValue' in value) {
    return reverseMilliValueSign(value);
  } else if ('microValue' in value) {
    return reverseMicroValueSign(value);
  } else if ('milliPercentage' in value) {
    return reverseMilliPercentageValueSign(value);
  }

  return reverseIntegerValueSign(value);
}

export function equalIntegerValue<T extends number>(a: IntegerValue<T>, b: IntegerValue<T>): boolean {
  return a.value === b.value;
}

export function equalMilliValue(a: MilliValue, b: MilliValue): boolean {
  return a.milliValue === b.milliValue;
}

export function equalMicroValue(a: MicroValue, b: MicroValue): boolean {
  return a.microValue === b.microValue;
}

export function equalMilliPercentageValue(a: MilliPercentageValue, b: MilliPercentageValue): boolean {
  return a.milliPercentage === b.milliPercentage;
}

function multiply(value: number, multiplier: MilliPercentageValue): number {
  return value * multiplier.milliPercentage / 100_000;
}

export function multiplyValue({ value }: IntegerValue, multiplier: MilliPercentageValue): IntegerValue {
  return { value: Math.round(multiply(value, multiplier)) };
}

export function multiplyMilliValue({ milliValue }: MilliValue, multiplier: MilliPercentageValue): MilliValue {
  return { milliValue: multiply(milliValue, multiplier) };
}

export function multiplyMicroValue({ microValue }: MicroValue, multiplier: MilliPercentageValue): MicroValue {
  return { microValue: multiply(microValue, multiplier) };
}

function product(v: number, n: number): number {
  return v * n;
}

export function productValue({ value }: IntegerValue, n: number): IntegerValue {
  return { value: product(value, n) };
}

export function productMilliValue({ milliValue }: MilliValue, n: number): MilliValue {
  return { milliValue: product(milliValue, n) };
}

export function productMicroValue({ microValue }: MicroValue, n: number): MicroValue {
  return { microValue: product(microValue, n) };
}

export function productMilliPercentageValue({ milliPercentage }: MilliPercentageValue, n: number): MilliPercentageValue {
  return { milliPercentage: product(milliPercentage, n) };
}

export function sumValues(...values: IntegerValue[]): IntegerValue {
  return {
    value: values.reduce((acc, v) => acc + v.value, 0)
  };
}

export function sumMilliValues(...values: MilliValue[]): MilliValue {
  return {
    milliValue: values.reduce((acc, v) => acc + v.milliValue, 0)
  };
}

export function sumMicroValues(...values: MicroValue[]): MicroValue {
  return {
    microValue: values.reduce((acc, v) => acc + v.microValue, 0)
  };
}

export function sumMilliPercentageValues(...values: MilliPercentageValue[]): MilliPercentageValue {
  return {
    milliPercentage: values.reduce((acc, v) => acc + v.milliPercentage, 0)
  };
}

export function calcIntegerValues(...values: IntegerValue[]): number {
  return sumValues(...values).value;
}

export function calcMilliValues(...values: MilliValue[]): number {
  return calcMilliValue(sumMilliValues(...values));
}

export function calcMilliPercentageValues(...values: MilliPercentageValue[]): number {
  return calcMilliPercentageValue(sumMilliPercentageValues(...values));
}

export function calcMicroValues(...values: MicroValue[]): number {
  return calcMicroValue(sumMicroValues(...values));
}

export function calcValue(value: ValueTypes): number {
  if ('milliValue' in value) {
    return calcMilliValue(value);
  } else if ('milliPercentage' in value) {
    return calcMilliPercentageValue(value);
  } else if ('microValue' in value) {
    return calcMicroValue(value);
  }

  return value.value;
}

export function calcMilliValue({ milliValue }: MilliValue): number {
  return milliValue / 1000;
}

export function calcMilliPercentageValue({ milliPercentage }: MilliPercentageValue): number {
  return milliPercentage / 1000;
}

export function calcMicroValue({ microValue }: MicroValue): number {
  return microValue / 1_000_000;
}
