import {
  Active1Skill,
  Active2Skill,
  Passive1Skill,
  Passive2Skill,
  Passive3Skill
} from './UnitSkills';
import { UnitBasicInfo } from './UnitBasicInfo';
import UnitFormValue, {
  FormChangeUnitBasicInfo,
  FormChangeUnitNumbers,
  FormChangeUnits,
  FormLessUnitBasicInfo,
  FormPerUnit,
  isFormChangeUnitBasicInfo,
  isFormChangeUnitNumber
} from './UnitFormValue';
import UnitSkillLvValue, { SkillLv } from './UnitSkillLvValue';
import { calculateFormChangeUnitSkill, calculateUnitSkill } from './UnitSkillCalculator';

export function buildUnit(unit: UnitBasicInfo): UnitSkill {
  if (isFormChangeUnitBasicInfo(unit)) {
    switch (unit.no) {
    case FormChangeUnits.Alexandra:
      return new AlexandraUnit(unit);
    case FormChangeUnits.Leona:
      return new LeonaUnit(unit);
    case FormChangeUnits.BloodyPanther:
      return new BloodyPantherUnit(unit);
    case FormChangeUnits.Emily:
      return new EmilyUnit(unit);
    case FormChangeUnits.Phantom:
      return new PhantomUnit(unit);
    case FormChangeUnits.Siren:
      return new SirenUnit(unit);
    case FormChangeUnits.Fortress:
      return new FortressUnit(unit);
    }
  } else {
    return new FormLessUnit(unit);
  }
}

export function isFormChangeUnit<N extends FormChangeUnitNumbers>(arg: UnitSkill): arg is FormChangeUnit<N> {
  return isFormChangeUnitNumber(arg.unit.no);
}

abstract class UnitSkill {

  readonly unit: UnitBasicInfo;
  readonly skillLv: UnitSkillLvValue;

  protected constructor(
    unit: UnitBasicInfo,
    skillLv?: UnitSkillLvValue
  ) {
    this.unit    = unit;
    this.skillLv = skillLv ?? new UnitSkillLvValue(unit);
  }

  protected abstract updateSkillLvValue(lv: UnitSkillLvValue): UnitSkill

  abstract get active1Skill(): Active1Skill
  abstract get active2Skill(): Active2Skill

  abstract get passive1Skill(): Passive1Skill | undefined
  abstract get passive2Skill(): Passive2Skill | undefined
  abstract get passive3Skill(): Passive3Skill | undefined

  changeActive1SkillLv(lv: SkillLv): UnitSkill {
    return this.updateSkillLvValue(this.skillLv.setActive1Lv(lv));
  }

  changeActive2SkillLv(lv: SkillLv): UnitSkill {
    return this.updateSkillLvValue(this.skillLv.setActive2Lv(lv));
  }

  changePassive1SkillLv(lv: SkillLv): UnitSkill {
    return this.updateSkillLvValue(this.skillLv.setPassive1Lv(lv));
  }

  changePassive2SkillLv(lv: SkillLv): UnitSkill {
    return this.updateSkillLvValue(this.skillLv.setPassive2Lv(lv));
  }

  changePassive3SkillLv(lv: SkillLv): UnitSkill {
    return this.updateSkillLvValue(this.skillLv.setPassive3Lv(lv));
  }

}

class FormLessUnit extends UnitSkill {

  readonly #unit: FormLessUnitBasicInfo;
  readonly active1Skill: Active1Skill;
  readonly active2Skill: Active2Skill;
  readonly passive1Skill: Passive1Skill | undefined;
  readonly passive2Skill: Passive2Skill | undefined;
  readonly passive3Skill: Passive3Skill | undefined;

  constructor(
    unit: FormLessUnitBasicInfo,
    skillLv?: UnitSkillLvValue
  ) {
    super(unit, skillLv);

    this.#unit = unit;

    const [as1, as2, ps1, ps2, ps3] = calculateUnitSkill(this.#unit.no, unit, this.skillLv);
    this.active1Skill = as1;
    this.active2Skill = as2;
    this.passive1Skill = ps1;
    this.passive2Skill = ps2;
    this.passive3Skill = ps3;
  }

  protected updateSkillLvValue(lv: UnitSkillLvValue): UnitSkill {
    return new FormLessUnit(this.#unit, lv);
  }
}

abstract class FormChangeUnit<N extends FormChangeUnitNumbers> extends UnitSkill {

  protected readonly formChangeUnit: FormChangeUnitBasicInfo<N>
  protected readonly form: UnitFormValue<N>;

  protected constructor(
    unit: FormChangeUnitBasicInfo<N>,
    skillLv?: UnitSkillLvValue,
    form?: UnitFormValue<N>
  ) {
    super(unit, skillLv);

    this.formChangeUnit = unit;
    this.form = form ?? UnitFormValue.build(unit);
  }

  protected abstract updateUnitFormValue(form: UnitFormValue<N>): FormChangeUnit<N>

  unitForm(): FormPerUnit<N> {
    return this.form.unitForm;
  }

  changeForm(): FormChangeUnit<N> {
    return this.updateUnitFormValue(this.form.changeForm());
  }
}

class AlexandraUnit extends FormChangeUnit<typeof FormChangeUnits.Alexandra> {

  readonly active1Skill: Active1Skill;
  readonly active2Skill: Active2Skill;
  readonly passive1Skill: Passive1Skill | undefined;
  readonly passive2Skill: Passive2Skill | undefined;
  readonly passive3Skill: Passive3Skill | undefined;

  constructor(
    unit: FormChangeUnitBasicInfo<typeof FormChangeUnits.Alexandra>,
    skillLv?: UnitSkillLvValue,
    form?: UnitFormValue<typeof FormChangeUnits.Alexandra>
  ) {
    super(unit, skillLv, form);

    const [as1, as2, ps1, ps2, ps3] = calculateFormChangeUnitSkill({ unitNumber: unit.no, basicInfo: unit, skillLv: this.skillLv, form: this.form });
    this.active1Skill = as1;
    this.active2Skill = as2;
    this.passive1Skill = ps1;
    this.passive2Skill = ps2;
    this.passive3Skill = ps3;
  }

  protected updateSkillLvValue(lv: UnitSkillLvValue): UnitSkill {
    return new AlexandraUnit(this.formChangeUnit, lv, this.form);
  }

  protected updateUnitFormValue(
    form: UnitFormValue<typeof FormChangeUnits.Alexandra>
  ): FormChangeUnit<typeof FormChangeUnits.Alexandra> {
    return new AlexandraUnit(this.formChangeUnit, this.skillLv, form);
  }
}

class LeonaUnit extends FormChangeUnit<typeof FormChangeUnits.Leona> {

  readonly active1Skill: Active1Skill;
  readonly active2Skill: Active2Skill;
  readonly passive1Skill: Passive1Skill | undefined;
  readonly passive2Skill: Passive2Skill | undefined;
  readonly passive3Skill: Passive3Skill | undefined;

  constructor(
    unit: FormChangeUnitBasicInfo<typeof FormChangeUnits.Leona>,
    skillLv?: UnitSkillLvValue,
    form?: UnitFormValue<typeof FormChangeUnits.Leona>
  ) {
    super(unit, skillLv, form);

    const [as1, as2, ps1, ps2, ps3] = calculateFormChangeUnitSkill({ unitNumber: unit.no, basicInfo: unit, skillLv: this.skillLv, form: this.form });
    this.active1Skill = as1;
    this.active2Skill = as2;
    this.passive1Skill = ps1;
    this.passive2Skill = ps2;
    this.passive3Skill = ps3;
  }

  protected updateSkillLvValue(lv: UnitSkillLvValue): UnitSkill {
    return new LeonaUnit(this.formChangeUnit, lv, this.form);
  }

  protected updateUnitFormValue(form: UnitFormValue<typeof FormChangeUnits.Leona>): FormChangeUnit<typeof FormChangeUnits.Leona> {
    return new LeonaUnit(this.formChangeUnit, this.skillLv, form);
  }
}

class BloodyPantherUnit extends FormChangeUnit<typeof FormChangeUnits.BloodyPanther> {

  readonly active1Skill: Active1Skill;
  readonly active2Skill: Active2Skill;
  readonly passive1Skill: Passive1Skill | undefined;
  readonly passive2Skill: Passive2Skill | undefined;
  readonly passive3Skill: Passive3Skill | undefined;

  constructor(
    unit: FormChangeUnitBasicInfo<typeof FormChangeUnits.BloodyPanther>,
    skillLv?: UnitSkillLvValue,
    form?: UnitFormValue<typeof FormChangeUnits.BloodyPanther>
  ) {
    super(unit, skillLv, form);

    const [as1, as2, ps1, ps2, ps3] = calculateFormChangeUnitSkill({ unitNumber: unit.no, basicInfo: unit, skillLv: this.skillLv, form: this.form });
    this.active1Skill = as1;
    this.active2Skill = as2;
    this.passive1Skill = ps1;
    this.passive2Skill = ps2;
    this.passive3Skill = ps3;
  }

  protected updateSkillLvValue(lv: UnitSkillLvValue): UnitSkill {
    return new BloodyPantherUnit(this.formChangeUnit, lv, this.form);
  }

  protected updateUnitFormValue(form: UnitFormValue<typeof FormChangeUnits.BloodyPanther>): FormChangeUnit<typeof FormChangeUnits.BloodyPanther> {
    return new BloodyPantherUnit(this.formChangeUnit, this.skillLv, form);
  }
}

class EmilyUnit extends FormChangeUnit<typeof FormChangeUnits.Emily> {

  readonly active1Skill: Active1Skill;
  readonly active2Skill: Active2Skill;
  readonly passive1Skill: Passive1Skill | undefined;
  readonly passive2Skill: Passive2Skill | undefined;
  readonly passive3Skill: Passive3Skill | undefined;

  constructor(
    unit: FormChangeUnitBasicInfo<typeof FormChangeUnits.Emily>,
    skillLv?: UnitSkillLvValue,
    form?: UnitFormValue<typeof FormChangeUnits.Emily>
  ) {
    super(unit, skillLv, form);

    const [as1, as2, ps1, ps2, ps3] = calculateFormChangeUnitSkill({ unitNumber: unit.no, basicInfo: unit, skillLv: this.skillLv, form: this.form });
    this.active1Skill = as1;
    this.active2Skill = as2;
    this.passive1Skill = ps1;
    this.passive2Skill = ps2;
    this.passive3Skill = ps3;
  }

  protected updateSkillLvValue(lv: UnitSkillLvValue): UnitSkill {
    return new EmilyUnit(this.formChangeUnit, lv, this.form);
  }

  protected updateUnitFormValue(form: UnitFormValue<typeof FormChangeUnits.Emily>): FormChangeUnit<typeof FormChangeUnits.Emily> {
    return new EmilyUnit(this.formChangeUnit, this.skillLv, form);
  }
}

class PhantomUnit extends FormChangeUnit<typeof FormChangeUnits.Phantom> {

  readonly active1Skill: Active1Skill;
  readonly active2Skill: Active2Skill;
  readonly passive1Skill: Passive1Skill | undefined;
  readonly passive2Skill: Passive2Skill | undefined;
  readonly passive3Skill: Passive3Skill | undefined;

  constructor(
    unit: FormChangeUnitBasicInfo<typeof FormChangeUnits.Phantom>,
    skillLv?: UnitSkillLvValue,
    form?: UnitFormValue<typeof FormChangeUnits.Phantom>
  ) {
    super(unit, skillLv, form);

    const [as1, as2, ps1, ps2, ps3] = calculateFormChangeUnitSkill({ unitNumber: unit.no, basicInfo: unit, skillLv: this.skillLv, form: this.form });
    this.active1Skill = as1;
    this.active2Skill = as2;
    this.passive1Skill = ps1;
    this.passive2Skill = ps2;
    this.passive3Skill = ps3;
  }

  protected updateSkillLvValue(lv: UnitSkillLvValue): UnitSkill {
    return new PhantomUnit(this.formChangeUnit, lv, this.form);
  }

  protected updateUnitFormValue(form: UnitFormValue<typeof FormChangeUnits.Phantom>): FormChangeUnit<typeof FormChangeUnits.Phantom> {
    return new PhantomUnit(this.formChangeUnit, this.skillLv, form);
  }
}

class SirenUnit extends FormChangeUnit<typeof FormChangeUnits.Siren> {

  readonly active1Skill: Active1Skill;
  readonly active2Skill: Active2Skill;
  readonly passive1Skill: Passive1Skill | undefined;
  readonly passive2Skill: Passive2Skill | undefined;
  readonly passive3Skill: Passive3Skill | undefined;

  constructor(
    unit: FormChangeUnitBasicInfo<typeof FormChangeUnits.Siren>,
    skillLv?: UnitSkillLvValue,
    form?: UnitFormValue<typeof FormChangeUnits.Siren>
  ) {
    super(unit, skillLv, form);

    const [as1, as2, ps1, ps2, ps3] = calculateFormChangeUnitSkill({ unitNumber: unit.no, basicInfo: unit, skillLv: this.skillLv, form: this.form });
    this.active1Skill = as1;
    this.active2Skill = as2;
    this.passive1Skill = ps1;
    this.passive2Skill = ps2;
    this.passive3Skill = ps3;
  }

  protected updateSkillLvValue(lv: UnitSkillLvValue): UnitSkill {
    return new SirenUnit(this.formChangeUnit, lv, this.form);
  }

  protected updateUnitFormValue(form: UnitFormValue<typeof FormChangeUnits.Siren>): FormChangeUnit<typeof FormChangeUnits.Siren> {
    return new SirenUnit(this.formChangeUnit, this.skillLv, form);
  }
}

class FortressUnit extends FormChangeUnit<typeof FormChangeUnits.Fortress> {

  readonly active1Skill: Active1Skill;
  readonly active2Skill: Active2Skill;
  readonly passive1Skill: Passive1Skill | undefined;
  readonly passive2Skill: Passive2Skill | undefined;
  readonly passive3Skill: Passive3Skill | undefined;

  constructor(
    unit: FormChangeUnitBasicInfo<typeof FormChangeUnits.Fortress>,
    skillLv?: UnitSkillLvValue,
    form?: UnitFormValue<typeof FormChangeUnits.Fortress>
  ) {
    super(unit, skillLv, form);

    const [as1, as2, ps1, ps2, ps3] = calculateFormChangeUnitSkill({ unitNumber: unit.no, basicInfo: unit, skillLv: this.skillLv, form: this.form });
    this.active1Skill = as1;
    this.active2Skill = as2;
    this.passive1Skill = ps1;
    this.passive2Skill = ps2;
    this.passive3Skill = ps3;
  }

  protected updateSkillLvValue(lv: UnitSkillLvValue): UnitSkill {
    return new FortressUnit(this.formChangeUnit, lv, this.form);
  }

  protected updateUnitFormValue(form: UnitFormValue<typeof FormChangeUnits.Fortress>): FormChangeUnit<typeof FormChangeUnits.Fortress> {
    return new FortressUnit(this.formChangeUnit, this.skillLv, form);
  }
}

export type {
  UnitSkill,
  FormChangeUnit
};
