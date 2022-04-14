import {
  calcMicroValue,
  calcMilliPercentageValue,
  calcMilliValue,
  MicroValue,
  MilliPercentageValue,
  MilliValue
} from '../../../domain/ValueUnit';

export function formatMilliValue(value: number): string
export function formatMilliValue(value: MilliValue | undefined): string
export function formatMilliValue(value: number | MilliValue | undefined): string {
  const v = typeof value === 'number' ? value : value ? calcMilliValue(value) : 0;
  return v.toFixed(2);
}

export function formatMicroValue(value: number): string
export function formatMicroValue(value: MicroValue | undefined): string
export function formatMicroValue(value: number | MicroValue | undefined): string {
  const v = typeof value === 'number' ? value : value ? calcMicroValue(value) : 0;
  return v.toFixed(3);
}

export function formatMilliPercentage(value: number): string
export function formatMilliPercentage(value: MilliPercentageValue | undefined): string
export function formatMilliPercentage(value: number | MilliPercentageValue | undefined): string {
  const v = typeof value === 'number' ? value : value ? calcMilliPercentageValue(value) : 0;
  return v.toFixed(2);
}

export function formatResistPercentage(value: number): string
export function formatResistPercentage(value: MilliPercentageValue | undefined): string
export function formatResistPercentage(value: number | MilliPercentageValue | undefined): string {
  const v = typeof value === 'number' ? value : value ? calcMilliPercentageValue(value) : 0;
  return v.toFixed(1);
}

export function appendPercentage(value: string): string {
  return `${value}\u00A0%`;
}
