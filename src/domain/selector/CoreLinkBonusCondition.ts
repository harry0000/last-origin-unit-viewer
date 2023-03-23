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
  DefUp: Effect.DefUp,
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

const commonFullLinkBonusIndexes = [1, 2, 3] as const;

function matchFullLinkBonusCondition(
  coreLink: UnitCoreLinkBonusData[UnitNumber],
  fullLinkBonus: FullLinkBonusCondition
): boolean {
  switch (fullLinkBonus) {
  case FullLinkBonusCondition.EvaUp:
    return 'eva_up' in coreLink.full_link_bonus[3];
  case FullLinkBonusCondition.BuffDebuffLv2Up:
    return commonFullLinkBonusIndexes.some(i => 'buff_debuff_lv_up' in coreLink.full_link_bonus[i]);
  default:
    return commonFullLinkBonusIndexes.some(i => fullLinkBonus in coreLink.full_link_bonus[i]);
  }
}
