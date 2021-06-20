import {
  ActiveSkill,
  Passive1Skill,
  Passive2Skill,
  Passive3Skill
} from './UnitSkills';
import { CoreLinkBonus, FullLinkBonus } from '../UnitCoreLinkBonusData';
import { UnitBasicInfo, UnitRankComparator } from '../UnitBasicInfo';
import UnitFormValue, {
  FormChangeUnitBasicInfo,
  FormChangeUnitNumbers,
  FormChangeUnits,
  FormLessUnitBasicInfo,
  FormPerUnit,
  isFormChangeUnitBasicInfo,
  isFormChangeUnitNumber
} from '../UnitFormValue';
import UnitSkillLvValue, { SkillLv } from './UnitSkillLvValue';
import {
  calculateActiveSkill,
  calculatePassiveSkill
} from './UnitSkillCalculator';
import { unitSkillData } from '../../data/unitSkillData';

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
    case FormChangeUnits.InvincibleDragon:
      return new InvincibleDragonUnit(unit);
    case FormChangeUnits.Siren:
      return new SirenUnit(unit);
    case FormChangeUnits.Fortress:
      return new FortressUnit(unit);
    }
  } else {
    return new FormLessUnitSkill(unit);
  }
}

export function isFormChangeUnitSkill<N extends FormChangeUnitNumbers>(arg: UnitSkill): arg is FormChangeUnitSkill<N> {
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

  abstract active1Skill(coreLinkBonus: CoreLinkBonus, fullLinkBonus: FullLinkBonus | undefined): ActiveSkill
  abstract active2Skill(coreLinkBonus: CoreLinkBonus, fullLinkBonus: FullLinkBonus | undefined): ActiveSkill

  abstract passive1Skill(fullLinkBonus: FullLinkBonus | undefined): Passive1Skill | undefined
  abstract passive2Skill(fullLinkBonus: FullLinkBonus | undefined): Passive2Skill | undefined
  abstract passive3Skill(fullLinkBonus: FullLinkBonus | undefined): Passive3Skill | undefined

  get isPassive1RankUpSkill(): boolean { return UnitRankComparator.a.greaterThan(this.unit.rank); }
  get isPassive2RankUpSkill(): boolean { return UnitRankComparator.s.greaterThan(this.unit.rank); }
  get isPassive3RankUpSkill(): boolean { return UnitRankComparator.ss.greaterThan(this.unit.rank); }

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

class FormLessUnitSkill extends UnitSkill {

  readonly #unit: FormLessUnitBasicInfo;

  constructor(
    unit: FormLessUnitBasicInfo,
    skillLv?: UnitSkillLvValue
  ) {
    super(unit, skillLv);

    this.#unit = unit;
  }

  protected updateSkillLvValue(lv: UnitSkillLvValue): UnitSkill {
    return new FormLessUnitSkill(this.#unit, lv);
  }

  active1Skill(coreLinkBonus: CoreLinkBonus, fullLinkBonus: FullLinkBonus | undefined): ActiveSkill {
    return calculateActiveSkill(unitSkillData[this.#unit.no].active[0], this.skillLv.active1Lv, coreLinkBonus, fullLinkBonus);
  }

  active2Skill(coreLinkBonus: CoreLinkBonus, fullLinkBonus: FullLinkBonus | undefined): ActiveSkill {
    return calculateActiveSkill(unitSkillData[this.#unit.no].active[1], this.skillLv.active2Lv, coreLinkBonus, fullLinkBonus);
  }

  passive1Skill(fullLinkBonus: FullLinkBonus | undefined): Passive1Skill | undefined {
    const ps = unitSkillData[this.#unit.no].passive;
    return ps.length > 0 ?
      calculatePassiveSkill(ps[0], this.skillLv.passive1Lv, fullLinkBonus) :
      undefined;
  }

  passive2Skill(fullLinkBonus: FullLinkBonus | undefined): Passive2Skill | undefined {
    const ps = unitSkillData[this.#unit.no].passive;
    return ps.length > 1 ?
      calculatePassiveSkill(ps[1], this.skillLv.passive2Lv, fullLinkBonus) :
      undefined;
  }

  passive3Skill(fullLinkBonus: FullLinkBonus | undefined): Passive3Skill | undefined {
    const ps = unitSkillData[this.#unit.no].passive;
    return ps.length > 2 ?
      calculatePassiveSkill(ps[2], this.skillLv.passive3Lv, fullLinkBonus) :
      undefined;
  }
}

abstract class FormChangeUnitSkill<N extends FormChangeUnitNumbers> extends UnitSkill {

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

  protected abstract updateUnitFormValue(form: UnitFormValue<N>): FormChangeUnitSkill<N>

  protected get unitNumber(): N {
    return this.formChangeUnit.no;
  }

  hasFormActive1Skill(): boolean {
    return !('area' in unitSkillData[this.unitNumber].active[0]);
  }

  hasFormActive2Skill(): boolean {
    return !('area' in unitSkillData[this.unitNumber].active[1]);
  }

  hasFormPassive1Skill(): boolean {
    return !('area' in unitSkillData[this.unitNumber].passive[0]);
  }

  hasFormPassive2Skill(): boolean {
    const passive = unitSkillData[this.unitNumber].passive;
    return (
      passive.length > 1 &&
      !!passive[1] &&
      !('area' in passive[1])
    );
  }

  hasFormPassive3Skill(): boolean {
    const passive = unitSkillData[this.unitNumber].passive;
    return (
      passive.length > 2 &&
      !!passive[2] &&
      !('area' in passive[2])
    );
  }

  unitForm(): FormPerUnit<N> {
    return this.form.unitForm;
  }

  changeForm(): FormChangeUnitSkill<N> {
    return this.updateUnitFormValue(this.form.changeForm());
  }
}

class AlexandraUnit extends FormChangeUnitSkill<typeof FormChangeUnits.Alexandra> {

  constructor(
    unit: FormChangeUnitBasicInfo<typeof FormChangeUnits.Alexandra>,
    skillLv?: UnitSkillLvValue,
    form?: UnitFormValue<typeof FormChangeUnits.Alexandra>
  ) {
    super(unit, skillLv, form);
  }

  protected updateSkillLvValue(lv: UnitSkillLvValue): UnitSkill {
    return new AlexandraUnit(this.formChangeUnit, lv, this.form);
  }

  protected updateUnitFormValue(
    form: UnitFormValue<typeof FormChangeUnits.Alexandra>
  ): FormChangeUnitSkill<typeof FormChangeUnits.Alexandra> {
    return new AlexandraUnit(this.formChangeUnit, this.skillLv, form);
  }

  active1Skill(coreLinkBonus: CoreLinkBonus, fullLinkBonus: FullLinkBonus | undefined): ActiveSkill {
    return calculateActiveSkill(unitSkillData[this.unitNumber].active[0][this.unitForm()], this.skillLv.active1Lv, coreLinkBonus, fullLinkBonus);
  }

  active2Skill(coreLinkBonus: CoreLinkBonus, fullLinkBonus: FullLinkBonus | undefined): ActiveSkill {
    return calculateActiveSkill(unitSkillData[this.unitNumber].active[1][this.unitForm()], this.skillLv.active2Lv, coreLinkBonus, fullLinkBonus);
  }

  passive1Skill(fullLinkBonus: FullLinkBonus | undefined): Passive1Skill | undefined {
    return calculatePassiveSkill(unitSkillData[this.unitNumber].passive[0][this.unitForm()], this.skillLv.passive1Lv, fullLinkBonus);
  }

  passive2Skill(fullLinkBonus: FullLinkBonus | undefined): Passive2Skill | undefined {
    return calculatePassiveSkill(unitSkillData[this.unitNumber].passive[1], this.skillLv.passive2Lv, fullLinkBonus);
  }

  passive3Skill(fullLinkBonus: FullLinkBonus | undefined): Passive3Skill | undefined {
    return calculatePassiveSkill(unitSkillData[this.unitNumber].passive[2], this.skillLv.passive3Lv, fullLinkBonus);
  }
}

class LeonaUnit extends FormChangeUnitSkill<typeof FormChangeUnits.Leona> {

  constructor(
    unit: FormChangeUnitBasicInfo<typeof FormChangeUnits.Leona>,
    skillLv?: UnitSkillLvValue,
    form?: UnitFormValue<typeof FormChangeUnits.Leona>
  ) {
    super(unit, skillLv, form);
  }

  protected updateSkillLvValue(lv: UnitSkillLvValue): UnitSkill {
    return new LeonaUnit(this.formChangeUnit, lv, this.form);
  }

  protected updateUnitFormValue(form: UnitFormValue<typeof FormChangeUnits.Leona>): FormChangeUnitSkill<typeof FormChangeUnits.Leona> {
    return new LeonaUnit(this.formChangeUnit, this.skillLv, form);
  }

  active1Skill(coreLinkBonus: CoreLinkBonus, fullLinkBonus: FullLinkBonus | undefined): ActiveSkill {
    return calculateActiveSkill(unitSkillData[this.unitNumber].active[0], this.skillLv.active1Lv, coreLinkBonus, fullLinkBonus);
  }

  active2Skill(coreLinkBonus: CoreLinkBonus, fullLinkBonus: FullLinkBonus | undefined): ActiveSkill {
    return calculateActiveSkill(unitSkillData[this.unitNumber].active[1], this.skillLv.active2Lv, coreLinkBonus, fullLinkBonus);
  }

  passive1Skill(fullLinkBonus: FullLinkBonus | undefined): Passive1Skill | undefined {
    return calculatePassiveSkill(unitSkillData[this.unitNumber].passive[0][this.unitForm()], this.skillLv.passive1Lv, fullLinkBonus);
  }

  passive2Skill(fullLinkBonus: FullLinkBonus | undefined): Passive2Skill | undefined {
    return calculatePassiveSkill(unitSkillData[this.unitNumber].passive[1][this.unitForm()], this.skillLv.passive2Lv, fullLinkBonus);
  }

  passive3Skill(fullLinkBonus: FullLinkBonus | undefined): Passive3Skill | undefined {
    return calculatePassiveSkill(unitSkillData[this.unitNumber].passive[2], this.skillLv.passive3Lv, fullLinkBonus);
  }
}

class BloodyPantherUnit extends FormChangeUnitSkill<typeof FormChangeUnits.BloodyPanther> {

  constructor(
    unit: FormChangeUnitBasicInfo<typeof FormChangeUnits.BloodyPanther>,
    skillLv?: UnitSkillLvValue,
    form?: UnitFormValue<typeof FormChangeUnits.BloodyPanther>
  ) {
    super(unit, skillLv, form);
  }

  protected updateSkillLvValue(lv: UnitSkillLvValue): UnitSkill {
    return new BloodyPantherUnit(this.formChangeUnit, lv, this.form);
  }

  protected updateUnitFormValue(form: UnitFormValue<typeof FormChangeUnits.BloodyPanther>): FormChangeUnitSkill<typeof FormChangeUnits.BloodyPanther> {
    return new BloodyPantherUnit(this.formChangeUnit, this.skillLv, form);
  }

  active1Skill(coreLinkBonus: CoreLinkBonus, fullLinkBonus: FullLinkBonus | undefined): ActiveSkill {
    return calculateActiveSkill(unitSkillData[this.unitNumber].active[0][this.unitForm()], this.skillLv.active1Lv, coreLinkBonus, fullLinkBonus);
  }

  active2Skill(coreLinkBonus: CoreLinkBonus, fullLinkBonus: FullLinkBonus | undefined): ActiveSkill {
    return calculateActiveSkill(unitSkillData[this.unitNumber].active[1][this.unitForm()], this.skillLv.active2Lv, coreLinkBonus, fullLinkBonus);
  }

  passive1Skill(fullLinkBonus: FullLinkBonus | undefined): Passive1Skill | undefined {
    return calculatePassiveSkill(unitSkillData[this.unitNumber].passive[0], this.skillLv.passive1Lv, fullLinkBonus);
  }

  passive2Skill(fullLinkBonus: FullLinkBonus | undefined): Passive2Skill | undefined {
    return calculatePassiveSkill(unitSkillData[this.unitNumber].passive[1], this.skillLv.passive2Lv, fullLinkBonus);
  }

  passive3Skill(fullLinkBonus: FullLinkBonus | undefined): Passive3Skill | undefined {
    return calculatePassiveSkill(unitSkillData[this.unitNumber].passive[2][this.unitForm()], this.skillLv.passive3Lv, fullLinkBonus);
  }
}

class EmilyUnit extends FormChangeUnitSkill<typeof FormChangeUnits.Emily> {

  constructor(
    unit: FormChangeUnitBasicInfo<typeof FormChangeUnits.Emily>,
    skillLv?: UnitSkillLvValue,
    form?: UnitFormValue<typeof FormChangeUnits.Emily>
  ) {
    super(unit, skillLv, form);
  }

  protected updateSkillLvValue(lv: UnitSkillLvValue): UnitSkill {
    return new EmilyUnit(this.formChangeUnit, lv, this.form);
  }

  protected updateUnitFormValue(form: UnitFormValue<typeof FormChangeUnits.Emily>): FormChangeUnitSkill<typeof FormChangeUnits.Emily> {
    return new EmilyUnit(this.formChangeUnit, this.skillLv, form);
  }

  active1Skill(coreLinkBonus: CoreLinkBonus, fullLinkBonus: FullLinkBonus | undefined): ActiveSkill {
    return calculateActiveSkill(unitSkillData[this.unitNumber].active[0], this.skillLv.active1Lv, coreLinkBonus, fullLinkBonus);
  }

  active2Skill(coreLinkBonus: CoreLinkBonus, fullLinkBonus: FullLinkBonus | undefined): ActiveSkill {
    return calculateActiveSkill(unitSkillData[this.unitNumber].active[1][this.unitForm()], this.skillLv.active2Lv, coreLinkBonus, fullLinkBonus);
  }

  passive1Skill(fullLinkBonus: FullLinkBonus | undefined): Passive1Skill | undefined {
    return calculatePassiveSkill(unitSkillData[this.unitNumber].passive[0], this.skillLv.passive1Lv, fullLinkBonus);
  }

  passive2Skill(fullLinkBonus: FullLinkBonus | undefined): Passive2Skill | undefined {
    return calculatePassiveSkill(unitSkillData[this.unitNumber].passive[1], this.skillLv.passive2Lv, fullLinkBonus);
  }

  passive3Skill(fullLinkBonus: FullLinkBonus | undefined): Passive3Skill | undefined {
    return calculatePassiveSkill(unitSkillData[this.unitNumber].passive[2], this.skillLv.passive3Lv, fullLinkBonus);
  }
}

class PhantomUnit extends FormChangeUnitSkill<typeof FormChangeUnits.Phantom> {

  constructor(
    unit: FormChangeUnitBasicInfo<typeof FormChangeUnits.Phantom>,
    skillLv?: UnitSkillLvValue,
    form?: UnitFormValue<typeof FormChangeUnits.Phantom>
  ) {
    super(unit, skillLv, form);
  }

  protected updateSkillLvValue(lv: UnitSkillLvValue): UnitSkill {
    return new PhantomUnit(this.formChangeUnit, lv, this.form);
  }

  protected updateUnitFormValue(form: UnitFormValue<typeof FormChangeUnits.Phantom>): FormChangeUnitSkill<typeof FormChangeUnits.Phantom> {
    return new PhantomUnit(this.formChangeUnit, this.skillLv, form);
  }

  active1Skill(coreLinkBonus: CoreLinkBonus, fullLinkBonus: FullLinkBonus | undefined): ActiveSkill {
    return calculateActiveSkill(unitSkillData[this.unitNumber].active[0][this.unitForm()], this.skillLv.active1Lv, coreLinkBonus, fullLinkBonus);
  }

  active2Skill(coreLinkBonus: CoreLinkBonus, fullLinkBonus: FullLinkBonus | undefined): ActiveSkill {
    return calculateActiveSkill(unitSkillData[this.unitNumber].active[1][this.unitForm()], this.skillLv.active2Lv, coreLinkBonus, fullLinkBonus);
  }

  passive1Skill(fullLinkBonus: FullLinkBonus | undefined): Passive1Skill | undefined {
    return calculatePassiveSkill(unitSkillData[this.unitNumber].passive[0][this.unitForm()], this.skillLv.passive1Lv, fullLinkBonus);
  }

  passive2Skill(fullLinkBonus: FullLinkBonus | undefined): Passive2Skill | undefined {
    return calculatePassiveSkill(unitSkillData[this.unitNumber].passive[1], this.skillLv.passive2Lv, fullLinkBonus);
  }

  // eslint-disable-next-line
  passive3Skill(fullLinkBonus: FullLinkBonus | undefined): Passive3Skill | undefined {
    return undefined;
  }
}

class InvincibleDragonUnit extends FormChangeUnitSkill<typeof FormChangeUnits.InvincibleDragon> {

  constructor(
    unit: FormChangeUnitBasicInfo<typeof FormChangeUnits.InvincibleDragon>,
    skillLv?: UnitSkillLvValue,
    form?: UnitFormValue<typeof FormChangeUnits.InvincibleDragon>
  ) {
    super(unit, skillLv, form);
  }

  protected updateSkillLvValue(lv: UnitSkillLvValue): UnitSkill {
    return new InvincibleDragonUnit(this.formChangeUnit, lv, this.form);
  }

  protected updateUnitFormValue(form: UnitFormValue<typeof FormChangeUnits.InvincibleDragon>): FormChangeUnitSkill<typeof FormChangeUnits.InvincibleDragon> {
    return new InvincibleDragonUnit(this.formChangeUnit, this.skillLv, form);
  }

  active1Skill(coreLinkBonus: CoreLinkBonus, fullLinkBonus: FullLinkBonus | undefined): ActiveSkill {
    return calculateActiveSkill(unitSkillData[this.unitNumber].active[0][this.unitForm()], this.skillLv.active1Lv, coreLinkBonus, fullLinkBonus);
  }

  active2Skill(coreLinkBonus: CoreLinkBonus, fullLinkBonus: FullLinkBonus | undefined): ActiveSkill {
    return calculateActiveSkill(unitSkillData[this.unitNumber].active[1][this.unitForm()], this.skillLv.active2Lv, coreLinkBonus, fullLinkBonus);
  }

  passive1Skill(fullLinkBonus: FullLinkBonus | undefined): Passive1Skill | undefined {
    return calculatePassiveSkill(unitSkillData[this.unitNumber].passive[0], this.skillLv.passive1Lv, fullLinkBonus);
  }

  passive2Skill(fullLinkBonus: FullLinkBonus | undefined): Passive2Skill | undefined {
    return calculatePassiveSkill(unitSkillData[this.unitNumber].passive[1], this.skillLv.passive2Lv, fullLinkBonus);
  }

  passive3Skill(fullLinkBonus: FullLinkBonus | undefined): Passive3Skill | undefined {
    return calculatePassiveSkill(unitSkillData[this.unitNumber].passive[2], this.skillLv.passive3Lv, fullLinkBonus);
  }
}

class SirenUnit extends FormChangeUnitSkill<typeof FormChangeUnits.Siren> {

  constructor(
    unit: FormChangeUnitBasicInfo<typeof FormChangeUnits.Siren>,
    skillLv?: UnitSkillLvValue,
    form?: UnitFormValue<typeof FormChangeUnits.Siren>
  ) {
    super(unit, skillLv, form);
  }

  protected updateSkillLvValue(lv: UnitSkillLvValue): UnitSkill {
    return new SirenUnit(this.formChangeUnit, lv, this.form);
  }

  protected updateUnitFormValue(form: UnitFormValue<typeof FormChangeUnits.Siren>): FormChangeUnitSkill<typeof FormChangeUnits.Siren> {
    return new SirenUnit(this.formChangeUnit, this.skillLv, form);
  }

  active1Skill(coreLinkBonus: CoreLinkBonus, fullLinkBonus: FullLinkBonus | undefined): ActiveSkill {
    return calculateActiveSkill(unitSkillData[this.unitNumber].active[0][this.unitForm()], this.skillLv.active1Lv, coreLinkBonus, fullLinkBonus);
  }

  active2Skill(coreLinkBonus: CoreLinkBonus, fullLinkBonus: FullLinkBonus | undefined): ActiveSkill {
    return calculateActiveSkill(unitSkillData[this.unitNumber].active[1][this.unitForm()], this.skillLv.active2Lv, coreLinkBonus, fullLinkBonus);
  }

  passive1Skill(fullLinkBonus: FullLinkBonus | undefined): Passive1Skill | undefined {
    return calculatePassiveSkill(unitSkillData[this.unitNumber].passive[0], this.skillLv.passive1Lv, fullLinkBonus);
  }

  passive2Skill(fullLinkBonus: FullLinkBonus | undefined): Passive2Skill | undefined {
    return calculatePassiveSkill(unitSkillData[this.unitNumber].passive[1][this.unitForm()], this.skillLv.passive2Lv, fullLinkBonus);
  }

  passive3Skill(fullLinkBonus: FullLinkBonus | undefined): Passive3Skill | undefined {
    return calculatePassiveSkill(unitSkillData[this.unitNumber].passive[2], this.skillLv.passive3Lv, fullLinkBonus);
  }
}

class FortressUnit extends FormChangeUnitSkill<typeof FormChangeUnits.Fortress> {

  constructor(
    unit: FormChangeUnitBasicInfo<typeof FormChangeUnits.Fortress>,
    skillLv?: UnitSkillLvValue,
    form?: UnitFormValue<typeof FormChangeUnits.Fortress>
  ) {
    super(unit, skillLv, form);
  }

  protected updateSkillLvValue(lv: UnitSkillLvValue): UnitSkill {
    return new FortressUnit(this.formChangeUnit, lv, this.form);
  }

  protected updateUnitFormValue(form: UnitFormValue<typeof FormChangeUnits.Fortress>): FormChangeUnitSkill<typeof FormChangeUnits.Fortress> {
    return new FortressUnit(this.formChangeUnit, this.skillLv, form);
  }

  active1Skill(coreLinkBonus: CoreLinkBonus, fullLinkBonus: FullLinkBonus | undefined): ActiveSkill {
    return calculateActiveSkill(unitSkillData[this.unitNumber].active[0][this.unitForm()], this.skillLv.active1Lv, coreLinkBonus, fullLinkBonus);
  }

  active2Skill(coreLinkBonus: CoreLinkBonus, fullLinkBonus: FullLinkBonus | undefined): ActiveSkill {
    return calculateActiveSkill(unitSkillData[this.unitNumber].active[1][this.unitForm()], this.skillLv.active2Lv, coreLinkBonus, fullLinkBonus);
  }

  passive1Skill(fullLinkBonus: FullLinkBonus | undefined): Passive1Skill | undefined {
    return calculatePassiveSkill(unitSkillData[this.unitNumber].passive[0][this.unitForm()], this.skillLv.passive1Lv, fullLinkBonus);
  }

  // eslint-disable-next-line
  passive2Skill(fullLinkBonus: FullLinkBonus | undefined): Passive2Skill | undefined {
    return undefined;
  }

  // eslint-disable-next-line
  passive3Skill(_: FullLinkBonus | undefined): Passive3Skill | undefined {
    return undefined;
  }
}

export type {
  UnitSkill,
  FormChangeUnitSkill
};
