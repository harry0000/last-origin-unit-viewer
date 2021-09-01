import { TFunction } from 'i18next';
import { StatusEffect } from '../../domain/status/StatusEffect';
import { calcMicroValue, calcMilliPercentageValue, calcMilliValue } from '../../domain/ValueUnit';

import { typedEntries } from '../../util/object';

export function translateEquipmentStatusEffects(effects: StatusEffect, t: TFunction): string {
  return typedEntries(effects).flatMap((entry) => {
    switch (entry[0]) {
    case 'hp_up':
      return entry[1] ? t(`effect:status.description.${entry[0]}`, { value: entry[1].value }) : [];
    case 'atk_up':
    case 'atk_down':
    case 'def_up':
    case 'def_down':
      return entry[1] ? t(`effect:status.description.${entry[0]}`, { value: calcMilliValue(entry[1]) }) : [];
    case 'spd_up':
    case 'spd_down':
      return entry[1] ? t(`effect:status.description.${entry[0]}`, { value: calcMicroValue(entry[1]) }) : [];
    default:
      return entry[1] ? t(`effect:status.description.${entry[0]}`, { value: calcMilliPercentageValue(entry[1]) }) : [];
    }
  }).join(' / ');
}
