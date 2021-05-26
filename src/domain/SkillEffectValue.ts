export type IntegerValue<T extends number = number> = { value: T }
export type MilliValue                              = { milliValue: number }
export type MicroValue                              = { microValue: number }
export type MilliPercentageValue                    = { milliPercentage: number }

export type ValueUnit = keyof IntegerValue | keyof MilliValue | keyof MicroValue | keyof MilliPercentageValue
type ValueTypes = IntegerValue | MilliValue | MicroValue | MilliPercentageValue

export function addValues(...values: IntegerValue[]): IntegerValue {
  return {
    value: values.reduce((acc, v) => acc + v.value, 0)
  };
}

export function addMilliValues(...values: MilliValue[]): MilliValue {
  return {
    milliValue: values.reduce((acc, v) => acc + v.milliValue, 0)
  };
}

export function addMicroValues(...values: MicroValue[]): MicroValue {
  return {
    microValue: values.reduce((acc, v) => acc + v.microValue, 0)
  };
}

export function addMilliPercentageValues(...values: MilliPercentageValue[]): MilliPercentageValue {
  return {
    milliPercentage: values.reduce((acc, v) => acc + v.milliPercentage, 0)
  };
}

export function calcIntegerValues(...values: IntegerValue[]): number {
  return addValues(...values).value;
}

export function calcMilliValues(...values: MilliValue[]): number {
  return calcMilliValue(addMilliValues(...values));
}

export function calcMilliPercentageValues(...values: MilliPercentageValue[]): number {
  return calcMilliPercentageValue(addMilliPercentageValues(...values));
}

export function calcMicroValues(...values: MicroValue[]): number {
  return calcMicroValue(addMicroValues(...values));
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
