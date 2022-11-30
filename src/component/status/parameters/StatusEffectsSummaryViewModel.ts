import { AffectableStatus } from './StatusEffectsView';
import {
  appendPercentage,
  formatUnitSpdValue,
  formatMilliPercentage,
  formatMilliValue,
  formatResistPercentage,
  formatSquadUnitSpdValue
} from './UnitStatusParameterFormatter';
import { effectValueColor } from '../../common/effectValueColor';

export type UnitStatusEffectValue = {
  colorStyle: typeof effectValueColor[keyof typeof effectValueColor] | undefined,
  sign: '+' | '-',
  value: string
}

function appendPercentageToValue(status: AffectableStatus, value: string): string {
  switch (status) {
  case 'acc':
  case 'eva':
  case 'cri':
  case 'fireResist':
  case 'iceResist':
  case 'electricResist':
    return appendPercentage(value);
  default:
    return value;
  }
}

export function buildUnitStatusEffectsSummaryViewModel(
  status: AffectableStatus,
  summary: number
): UnitStatusEffectValue {
  const colorStyle =
    summary === 0 ?
      undefined :
      summary > 0 ?
        effectValueColor.positive :
        effectValueColor.negative;

  const sign = summary >= 0 ? '+' : '-';

  const value = (() => {
    switch (status) {
    case 'hp':
      return Math.abs(summary) + '';
    case 'atk':
    case 'def':
      return formatMilliValue(Math.abs(summary));
    case 'acc':
    case 'eva':
    case 'cri':
      return formatMilliPercentage(Math.abs(summary));
    case 'spd':
      return formatUnitSpdValue(Math.abs(summary));
    case 'fireResist':
    case 'iceResist':
    case 'electricResist':
      return formatResistPercentage(Math.abs(summary));
    }
  })();

  return { colorStyle, sign, value };
}

export function buildSquadUnitStatusEffectsSummaryViewModel(
  status: AffectableStatus,
  summary: number
): UnitStatusEffectValue {
  const { colorStyle, sign, value } = buildUnitStatusEffectsSummaryViewModel(status, summary);

  return {
    colorStyle,
    sign,
    value:
      status === 'spd' ?
        formatSquadUnitSpdValue(Math.abs(summary)) :
        value
  };
}

export function buildUnitStatusEffectValueViewModel(
  status: AffectableStatus,
  effectValue: number
): UnitStatusEffectValue {
  const { colorStyle, sign, value } = buildUnitStatusEffectsSummaryViewModel(status, effectValue);

  return {
    colorStyle,
    sign,
    value: appendPercentageToValue(status, value)
  };
}

export function buildSquadUnitStatusEffectValueViewModel(
  status: AffectableStatus,
  effectValue: number
): UnitStatusEffectValue {
  const { colorStyle, sign, value } = buildSquadUnitStatusEffectsSummaryViewModel(status, effectValue);

  return {
    colorStyle,
    sign,
    value: appendPercentageToValue(status, value)
  };
}
