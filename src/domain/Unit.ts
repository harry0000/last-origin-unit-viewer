import {
  Active1Skill,
  Active2Skill,
  Passive1Skill,
  Passive2Skill,
  Passive3Skill
} from './UnitSkill';
import { UnitBasicInfo, UnitNumber } from './UnitBasicInfo';
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

export function buildUnit(unit: UnitBasicInfo): Unit {
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

export function isFormChangeUnit<N extends FormChangeUnitNumbers>(arg: Unit): arg is FormChangeUnit<N> {
  return isFormChangeUnitNumber(arg.unitNumber);
}

abstract class Unit {

  readonly basicInfo: UnitBasicInfo;
  readonly skillLv: UnitSkillLvValue;

  protected constructor(
    basicInfo: UnitBasicInfo,
    skillLv?: UnitSkillLvValue
  ) {
    this.basicInfo = basicInfo;
    this.skillLv   = skillLv ?? new UnitSkillLvValue(basicInfo);
  }

  protected abstract updateSkillLvValue(lv: UnitSkillLvValue): Unit

  get unitNumber(): UnitNumber {
    return this.basicInfo.no;
  }

  abstract get active1Skill(): Active1Skill
  abstract get active2Skill(): Active2Skill

  abstract get passive1Skill(): Passive1Skill | undefined
  abstract get passive2Skill(): Passive2Skill | undefined
  abstract get passive3Skill(): Passive3Skill | undefined

  changeActive1SkillLv(lv: SkillLv): Unit {
    return this.updateSkillLvValue(this.skillLv.setActive1Lv(lv));
  }

  changeActive2SkillLv(lv: SkillLv): Unit {
    return this.updateSkillLvValue(this.skillLv.setActive2Lv(lv));
  }

  changePassive1SkillLv(lv: SkillLv): Unit {
    return this.updateSkillLvValue(this.skillLv.setPassive1Lv(lv));
  }

  changePassive2SkillLv(lv: SkillLv): Unit {
    return this.updateSkillLvValue(this.skillLv.setPassive2Lv(lv));
  }

  changePassive3SkillLv(lv: SkillLv): Unit {
    return this.updateSkillLvValue(this.skillLv.setPassive3Lv(lv));
  }

}

class FormLessUnit extends Unit {

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

  protected updateSkillLvValue(lv: UnitSkillLvValue): Unit {
    return new FormLessUnit(this.#unit, lv);
  }
}

abstract class FormChangeUnit<N extends FormChangeUnitNumbers> extends Unit {

  protected readonly unit: FormChangeUnitBasicInfo<N>
  protected readonly form: UnitFormValue<N>;

  protected constructor(
    unit: FormChangeUnitBasicInfo<N>,
    skillLv?: UnitSkillLvValue,
    form?: UnitFormValue<N>
  ) {
    super(unit, skillLv);

    this.unit = unit;
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

  protected updateSkillLvValue(lv: UnitSkillLvValue): Unit {
    return new AlexandraUnit(this.unit, lv, this.form);
  }

  protected updateUnitFormValue(
    form: UnitFormValue<typeof FormChangeUnits.Alexandra>
  ): FormChangeUnit<typeof FormChangeUnits.Alexandra> {
    return new AlexandraUnit(this.unit, this.skillLv, form);
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

  protected updateSkillLvValue(lv: UnitSkillLvValue): Unit {
    return new LeonaUnit(this.unit, lv, this.form);
  }

  protected updateUnitFormValue(form: UnitFormValue<typeof FormChangeUnits.Leona>): FormChangeUnit<typeof FormChangeUnits.Leona> {
    return new LeonaUnit(this.unit, this.skillLv, form);
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

  protected updateSkillLvValue(lv: UnitSkillLvValue): Unit {
    return new BloodyPantherUnit(this.unit, lv, this.form);
  }

  protected updateUnitFormValue(form: UnitFormValue<typeof FormChangeUnits.BloodyPanther>): FormChangeUnit<typeof FormChangeUnits.BloodyPanther> {
    return new BloodyPantherUnit(this.unit, this.skillLv, form);
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

  protected updateSkillLvValue(lv: UnitSkillLvValue): Unit {
    return new EmilyUnit(this.unit, lv, this.form);
  }

  protected updateUnitFormValue(form: UnitFormValue<typeof FormChangeUnits.Emily>): FormChangeUnit<typeof FormChangeUnits.Emily> {
    return new EmilyUnit(this.unit, this.skillLv, form);
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

  protected updateSkillLvValue(lv: UnitSkillLvValue): Unit {
    return new PhantomUnit(this.unit, lv, this.form);
  }

  protected updateUnitFormValue(form: UnitFormValue<typeof FormChangeUnits.Phantom>): FormChangeUnit<typeof FormChangeUnits.Phantom> {
    return new PhantomUnit(this.unit, this.skillLv, form);
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

  protected updateSkillLvValue(lv: UnitSkillLvValue): Unit {
    return new SirenUnit(this.unit, lv, this.form);
  }

  protected updateUnitFormValue(form: UnitFormValue<typeof FormChangeUnits.Siren>): FormChangeUnit<typeof FormChangeUnits.Siren> {
    return new SirenUnit(this.unit, this.skillLv, form);
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

  protected updateSkillLvValue(lv: UnitSkillLvValue): Unit {
    return new FortressUnit(this.unit, lv, this.form);
  }

  protected updateUnitFormValue(form: UnitFormValue<typeof FormChangeUnits.Fortress>): FormChangeUnit<typeof FormChangeUnits.Fortress> {
    return new FortressUnit(this.unit, this.skillLv, form);
  }
}

export type {
  Unit,
  FormChangeUnit
};
