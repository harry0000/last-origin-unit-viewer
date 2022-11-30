import {
  calcMicroValue,
  calcMilliPercentageValue,
  calcMilliValue,
  MicroValue,
  MilliPercentageValue,
  MilliValue
} from '../../../domain/ValueUnit';

function getCurrentLocale(): string {
  return Array.isArray(navigator.languages) ?
    navigator.languages[0] :
    navigator.language;
}

export function buildNumberFormatter(options?: Intl.NumberFormatOptions): Intl.NumberFormat {
  return Intl.NumberFormat(getCurrentLocale(), options);
}

export function formatMilliValue(value: number): string;
export function formatMilliValue(value: MilliValue | undefined): string;
export function formatMilliValue(value: number | MilliValue | undefined): string {
  const v = typeof value === 'number' ? value : value ? calcMilliValue(value) : 0;
  return v.toFixed(2);
}

export function formatUnitSpdValue(value: number): string;
export function formatUnitSpdValue(value: MicroValue | undefined): string;
export function formatUnitSpdValue(value: number | MicroValue | undefined): string {
  const v = typeof value === 'number' ? value : value ? calcMicroValue(value) : 0;
  return v.toFixed(3);
}

export function formatSquadUnitSpdValue(value: number): string;
export function formatSquadUnitSpdValue(value: MicroValue | undefined): string;
export function formatSquadUnitSpdValue(value: number | MicroValue | undefined): string {
  const v = typeof value === 'number' ? value : value ? calcMicroValue(value) : 0;
  return Intl.NumberFormat(
    getCurrentLocale(),
    {
      maximumFractionDigits: 6,
      minimumFractionDigits: v === 0 ? 3 : undefined
    }
  ).format(v);
}

export function formatApValue(value: number): string;
export function formatApValue(value: MicroValue | undefined): string;
export function formatApValue(value: number | MicroValue | undefined): string {
  const v = typeof value === 'number' ? value : value ? calcMicroValue(value) : 0;
  return Intl.NumberFormat(getCurrentLocale(), { maximumFractionDigits: 6 }).format(v);
}

export function formatMilliPercentage(value: number): string;
export function formatMilliPercentage(value: MilliPercentageValue | undefined): string;
export function formatMilliPercentage(value: number | MilliPercentageValue | undefined): string {
  const v = typeof value === 'number' ? value : value ? calcMilliPercentageValue(value) : 0;
  return v.toFixed(2);
}

export function formatResistPercentage(value: number): string;
export function formatResistPercentage(value: MilliPercentageValue | undefined): string;
export function formatResistPercentage(value: number | MilliPercentageValue | undefined): string {
  const v = typeof value === 'number' ? value : value ? calcMilliPercentageValue(value) : 0;
  return v.toFixed(1);
}

export function appendPercentage(value: string): string {
  return `${value}\u00A0%`;
}
