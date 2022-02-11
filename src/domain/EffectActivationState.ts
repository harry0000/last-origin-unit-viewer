export const EffectActivationState = {
  HpGreaterOrEqual: 'hp_greater_or_equal',
  HpLessOrEqual: 'hp_less_or_equal',
  HpGreaterThan: 'hp_greater_than',
  HpLessThan: 'hp_less_than',
  Effected: 'effected',
  Tagged: 'tagged',
  NotTagged: 'not_tagged',
  StackGe: 'stack_ge',
  Form: 'form',
  Equipped: 'equipped',
  NotEquipped: 'not_equipped',
  Grid: 'grid',
  InSquad: 'in_squad',
  Unit: 'unit',
  NumOfUnits: 'num_of_units',
  EffectedBy: 'effected_by'
} as const;
export type EffectActivationState = typeof EffectActivationState[keyof typeof EffectActivationState]
