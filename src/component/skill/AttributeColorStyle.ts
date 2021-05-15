import { DamageAttribute } from '../../domain/UnitSkillData';

export const AttributeColorStyle: { [key in DamageAttribute]: string } = {
  [DamageAttribute.Fire]: '#d0191d',
  [DamageAttribute.Ice]: '#0cf',
  [DamageAttribute.Electric]: '#fc0'
};
