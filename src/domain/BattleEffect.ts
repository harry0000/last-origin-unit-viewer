import { Effect } from './Effect';
import { EquipmentEffectOnly } from './skill/SkillEffect';
import { EquipmentEnhancementLevel, EquipmentId } from './equipment/EquipmentData';
import { FormChangeUnitNumbers, FormPerUnit } from './UnitFormValue';
import { SkillEffectScaleFactor } from './skill/SkillEffectScaleFactor';
import { SkillEffectTag } from './skill/SkillEffectTag';
import { SkillEffectValue } from './skill/UnitSkills';
import { SkillType as SkillTypeValue } from './skill/SkillType';
import { UnitNumber } from './UnitBasicInfo';

import { Sequence, ValueOf } from '../util/type';

type SkillType = {
  skillType: SkillTypeValue
}

type FormLessUnit = {
  type: 'ally',
  no: Exclude<UnitNumber, FormChangeUnitNumbers>
} & SkillType

type FormChangeUnit<N extends FormChangeUnitNumbers = FormChangeUnitNumbers> = {
  type: 'ally',
  no: N,
  form: FormPerUnit<N>
} & SkillType

type Origin =
  FormLessUnit |
  FormChangeUnit |
  {
    type: 'equipment',
    id: EquipmentId,
    lv: EquipmentEnhancementLevel
  }

type EffectInBattle = Exclude<Effect, EquipmentEffectOnly>

type EffectDetails<E extends EffectInBattle = EffectInBattle> = {
  effect: E,
  type: 'effects' | 'equipment_effects',
  value: Exclude<SkillEffectValue[E], undefined>
}

type EffectScaled = {
  scaled?: {
    by: SkillEffectTag | ValueOf<SkillEffectScaleFactor, 'num_of_units'> | 'enemy',
    value: Sequence<9>
  }
}

export type BattleEffect = EffectDetails & EffectScaled & { affected_by: Origin }
