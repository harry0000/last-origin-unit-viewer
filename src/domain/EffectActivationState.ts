export const EffectActivationState = {
  HpGreaterOrEqual: 'hp_greater_or_equal',
  HpLessOrEqual: 'hp_less_or_equal',
  HpGreaterThan: 'hp_greater_than',
  HpLessThan: 'hp_less_than',
  StatusLessThanSelf: 'status_less_than_self',
  StatusGreaterOrEqualThan: 'status_greater_or_equal_than',
  Affected: 'affected',
  NotAffected: 'not_affected',
  AffectedBy: 'affected_by',
  Tagged: 'tagged',
  NotTagged: 'not_tagged',
  TaggedAffected: 'tagged_affected',
  StackGe: 'stack_ge',
  Form: 'form',
  Equipped: 'equipped',
  NotEquipped: 'not_equipped',
  Grid: 'grid',
  InSquad: 'in_squad',
  Unit: 'unit',
  NumOfUnits: 'num_of_units'
} as const;
export type EffectActivationState = typeof EffectActivationState[keyof typeof EffectActivationState]
