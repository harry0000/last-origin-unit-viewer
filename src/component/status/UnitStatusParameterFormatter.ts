export function formatMilliValue(value?: number): string {
  return (value ?? 0).toFixed(2);
}

export function formatMicroValue(value?: number): string {
  return (value ?? 0).toFixed(3);
}

export function formatMilliPercentage(value?: number): string {
  return `${(value ?? 0).toFixed(2)}\u00A0%`;
}

export function formatResistPercentage(value?: number): string {
  return `${(value ?? 0).toFixed(1)}\u00A0%`;
}
