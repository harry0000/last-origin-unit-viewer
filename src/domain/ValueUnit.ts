export type IntegerValue<T extends number = number> = { value: T }
export type MilliValue                              = { milliValue: number }
export type MicroValue                              = { microValue: number }
export type MilliPercentageValue                    = { milliPercentage: number }

export type ValueUnit = keyof IntegerValue | keyof MilliValue | keyof MicroValue | keyof MilliPercentageValue
export type ValueTypes = IntegerValue | MilliValue | MicroValue | MilliPercentageValue

function multiply(value: number, multiplier: MilliPercentageValue): number {
  return value * multiplier.milliPercentage / 100_000;
}

export function multiplyValue(value: IntegerValue, multiplier: MilliPercentageValue): IntegerValue {
  return { value: Math.round(multiply(value.value, multiplier)) };
}

export function multiplyMilliValue(value: MilliValue, multiplier: MilliPercentageValue): MilliValue {
  return { milliValue: multiply(value.milliValue, multiplier) };
}

export function multiplyMicroValue(value: MicroValue, multiplier: MilliPercentageValue): MicroValue {
  return { microValue: multiply(value.microValue, multiplier) };
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

export function calcMilliValue(value: MilliValue): number {
  return value.milliValue / 1000;
}

export function calcMilliPercentageValue(value: MilliPercentageValue): number {
  return value.milliPercentage / 1000;
}

export function calcMicroValue(value: MicroValue): number {
  return value.microValue / 1_000_000;
}
