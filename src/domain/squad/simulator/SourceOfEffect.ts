import { EquipmentEnhancementLevel, EquipmentId, EquipmentRank } from '../../equipment/EquipmentData';
import { FormChangeUnitNumbers, FormPerUnit } from '../../UnitFormValue';
import { SkillLv } from '../../skill/UnitSkillLvValue';
import { SkillType as SkillTypeValue } from '../../skill/SkillType';
import { UnitNumber } from '../../UnitBasicInfo';

import { EquipmentSlot } from '../../../state/equipment/UnitEquipmentState';

type SkillInfo = Readonly<{
  skillType: SkillTypeValue,
  lv: SkillLv
}>

type FormLessUnit = Readonly<{
  type: 'ally',
  no: Exclude<UnitNumber, FormChangeUnitNumbers>
}> & SkillInfo

type FormChangeUnit<N extends FormChangeUnitNumbers = FormChangeUnitNumbers> = Readonly<{
  type: 'ally',
  no: N,
  form: FormPerUnit<N>
}> & SkillInfo

export type Equipment = Readonly<{
  type: 'equipment',
  slot: EquipmentSlot,
  id: EquipmentId,
  rank: EquipmentRank,
  lv: EquipmentEnhancementLevel
}>

export type SourceOfEffect =
  FormLessUnit |
  FormChangeUnit |
  Equipment
