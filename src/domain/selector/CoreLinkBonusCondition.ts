import { Effect } from '../Effect';
import { UnitCoreLinkBonusData } from '../UnitCoreLinkBonusData';
import { UnitNumber } from '../UnitBasicInfo';

export const CoreLinkBonusCondition = {
  DamageMultiplier: 'damage_multiplier',
  DefUp: Effect.DefUp,
  AccUp: Effect.AccUp,
  CriUp: Effect.CriUp,
  EvaUp: Effect.EvaUp,
  SpdUp: Effect.SpdUp
} as const;
export type CoreLinkBonusCondition = typeof CoreLinkBonusCondition[keyof typeof CoreLinkBonusCondition]

export const FullLinkBonusCondition = {
  HpUp: Effect.HpUp,
  AccUp: Effect.AccUp,
  CriUp: Effect.CriUp,
  EvaUp: Effect.EvaUp,
  RangeUp: Effect.RangeUp,
  BuffDebuffLv2Up: 'buff_debuff_lv_2_up'
} as const;
export type FullLinkBonusCondition = typeof FullLinkBonusCondition[keyof typeof FullLinkBonusCondition]

export function matchCoreLinkBonusConditions(
  coreLink: UnitCoreLinkBonusData[UnitNumber],
  coreLinkBonus: CoreLinkBonusCondition | undefined,
  fullLinkBonus: FullLinkBonusCondition | undefined
): boolean {
  return (
    (!coreLinkBonus || Object.prototype.hasOwnProperty.call(coreLink.specific_link_bonus, coreLinkBonus)) &&
    (!fullLinkBonus || matchFullLinkBonusCondition(coreLink, fullLinkBonus))
  );
}

function matchFullLinkBonusCondition(
  coreLink: UnitCoreLinkBonusData[UnitNumber],
  fullLinkBonus: FullLinkBonusCondition
): boolean {
  switch (fullLinkBonus) {
  case Effect.HpUp:
    return (
      'hp_up' in coreLink.full_link_bonus[2] ||
      'hp_up' in coreLink.full_link_bonus[3]
    );
  case Effect.AccUp:
    return (
      'acc_up' in coreLink.full_link_bonus[1] ||
      'acc_up' in coreLink.full_link_bonus[2] ||
      'acc_up' in coreLink.full_link_bonus[3]
    );
  case Effect.CriUp:
    return (
      'cri_up' in coreLink.full_link_bonus[2] ||
      'cri_up' in coreLink.full_link_bonus[3]
    );
  case Effect.EvaUp:
    return 'eva_up' in coreLink.full_link_bonus[3];
  case Effect.RangeUp:
    return (
      'range_up' in coreLink.full_link_bonus[2] ||
      'range_up' in coreLink.full_link_bonus[3]
    );
  case 'buff_debuff_lv_2_up':
    return 'buff_debuff_lv_up' in coreLink.full_link_bonus[3];
  }
}
