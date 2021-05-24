import { DamageAttribute } from '../../domain/UnitSkillData';

export const AttributeColorStyle: { [key in DamageAttribute]: string } = {
  [DamageAttribute.Fire]: '#c33',
  [DamageAttribute.Ice]: '#0cf',
  [DamageAttribute.Electric]: '#fc0'
};
