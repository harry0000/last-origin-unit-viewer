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
import { ActiveSkillData, PassiveSkillData, PassiveSkillDataAsEquipmentEffect } from './UnitSkillData';
import { AffectionBonus } from '../UnitAffection';

export function buildUnitSkill(unit: UnitBasicInfo): UnitSkill {
  if (isFormChangeUnitBasicInfo(unit)) {
    switch (unit.no) {
    case FormChangeUnits.Alexandra:
      return new AlexandraUnitSkill(unit);
    case FormChangeUnits.Leona:
      return new LeonaUnitSkill(unit);
    case FormChangeUnits.BloodyPanther:
      return new BloodyPantherUnitSkill(unit);
    case FormChangeUnits.Emily:
      return new EmilyUnitSkill(unit);
    case FormChangeUnits.Phantom:
      return new PhantomUnitSkill(unit);
    case FormChangeUnits.InvincibleDragon:
      return new InvincibleDragonUnitSkill(unit);
    case FormChangeUnits.Siren:
      return new SirenUnitSkill(unit);
    case FormChangeUnits.Fortress:
      return new FortressUnitSkill(unit);
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

  protected abstract get active1SkillData(): ActiveSkillData
  protected abstract get active2SkillData(): ActiveSkillData

  protected abstract get passive1SkillData(): PassiveSkillData | PassiveSkillDataAsEquipmentEffect | undefined
  protected abstract get passive2SkillData(): PassiveSkillData | undefined
  protected abstract get passive3SkillData(): PassiveSkillData | undefined

  active1Skill(
    coreLinkBonus: CoreLinkBonus,
    fullLinkBonus: FullLinkBonus | undefined,
    affectionBonus: AffectionBonus | undefined
  ): ActiveSkill {
    return calculateActiveSkill(
      this.active1SkillData,
      this.skillLv.active1Lv,
      coreLinkBonus,
      fullLinkBonus,
      affectionBonus
    );
  }

  active2Skill(
    coreLinkBonus: CoreLinkBonus,
    fullLinkBonus: FullLinkBonus | undefined,
    affectionBonus: AffectionBonus | undefined
  ): ActiveSkill {
    return calculateActiveSkill(
      this.active2SkillData,
      this.skillLv.active2Lv,
      coreLinkBonus,
      fullLinkBonus,
      affectionBonus
    );
  }

  passive1Skill(
    fullLinkBonus: FullLinkBonus | undefined,
    affectionBonus: AffectionBonus | undefined
  ): Passive1Skill | undefined {
    const ps = this.passive1SkillData;
    return ps && calculatePassiveSkill(ps, this.skillLv.passive1Lv, fullLinkBonus, affectionBonus);
  }

  passive2Skill(
    fullLinkBonus: FullLinkBonus | undefined,
    affectionBonus: AffectionBonus | undefined
  ): Passive2Skill | undefined {
    const ps = this.passive2SkillData;
    return ps && calculatePassiveSkill(ps, this.skillLv.passive2Lv, fullLinkBonus, affectionBonus);
  }

  passive3Skill(
    fullLinkBonus: FullLinkBonus | undefined,
    affectionBonus: AffectionBonus | undefined
  ): Passive3Skill | undefined {
    const ps = this.passive3SkillData;
    return ps && calculatePassiveSkill(ps, this.skillLv.passive3Lv, fullLinkBonus, affectionBonus);
  }

  get hasPassive1Skill(): boolean { return !!this.passive1SkillData; }
  get hasPassive2Skill(): boolean { return !!this.passive2SkillData; }
  get hasPassive3Skill(): boolean { return !!this.passive3SkillData; }

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
    return this.hasPassive1Skill ?
      this.updateSkillLvValue(this.skillLv.setPassive1Lv(lv)) :
      this;
  }

  changePassive2SkillLv(lv: SkillLv): UnitSkill {
    return this.hasPassive2Skill ?
      this.updateSkillLvValue(this.skillLv.setPassive2Lv(lv)) :
      this;
  }

  changePassive3SkillLv(lv: SkillLv): UnitSkill {
    return this.hasPassive3Skill ?
      this.updateSkillLvValue(this.skillLv.setPassive3Lv(lv)) :
      this;
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

  protected get active1SkillData(): ActiveSkillData { return unitSkillData[this.#unit.no].active[0]; }
  protected get active2SkillData(): ActiveSkillData { return unitSkillData[this.#unit.no].active[1]; }

  protected get passive1SkillData(): PassiveSkillData | PassiveSkillDataAsEquipmentEffect | undefined {
    return unitSkillData[this.#unit.no].passive[0];
  }

  protected get passive2SkillData(): PassiveSkillData | undefined {
    return unitSkillData[this.#unit.no].passive[1];
  }

  protected get passive3SkillData(): PassiveSkillData | undefined {
    return unitSkillData[this.#unit.no].passive[2];
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

class AlexandraUnitSkill extends FormChangeUnitSkill<typeof FormChangeUnits.Alexandra> {

  constructor(
    unit: FormChangeUnitBasicInfo<typeof FormChangeUnits.Alexandra>,
    skillLv?: UnitSkillLvValue,
    form?: UnitFormValue<typeof FormChangeUnits.Alexandra>
  ) {
    super(unit, skillLv, form);
  }

  protected updateSkillLvValue(lv: UnitSkillLvValue): UnitSkill {
    return new AlexandraUnitSkill(this.formChangeUnit, lv, this.form);
  }

  protected updateUnitFormValue(
    form: UnitFormValue<typeof FormChangeUnits.Alexandra>
  ): FormChangeUnitSkill<typeof FormChangeUnits.Alexandra> {
    return new AlexandraUnitSkill(this.formChangeUnit, this.skillLv, form);
  }

  protected get active1SkillData(): ActiveSkillData { return unitSkillData[this.unitNumber].active[0][this.unitForm()]; }
  protected get active2SkillData(): ActiveSkillData { return unitSkillData[this.unitNumber].active[1][this.unitForm()]; }

  protected get passive1SkillData(): PassiveSkillData | PassiveSkillDataAsEquipmentEffect | undefined {
    return unitSkillData[this.unitNumber].passive[0][this.unitForm()];
  }

  protected get passive2SkillData(): PassiveSkillData | undefined {
    return unitSkillData[this.unitNumber].passive[1];
  }

  protected get passive3SkillData(): PassiveSkillData | undefined {
    return unitSkillData[this.unitNumber].passive[2];
  }
}

class LeonaUnitSkill extends FormChangeUnitSkill<typeof FormChangeUnits.Leona> {

  constructor(
    unit: FormChangeUnitBasicInfo<typeof FormChangeUnits.Leona>,
    skillLv?: UnitSkillLvValue,
    form?: UnitFormValue<typeof FormChangeUnits.Leona>
  ) {
    super(unit, skillLv, form);
  }

  protected updateSkillLvValue(lv: UnitSkillLvValue): UnitSkill {
    return new LeonaUnitSkill(this.formChangeUnit, lv, this.form);
  }

  protected updateUnitFormValue(form: UnitFormValue<typeof FormChangeUnits.Leona>): FormChangeUnitSkill<typeof FormChangeUnits.Leona> {
    return new LeonaUnitSkill(this.formChangeUnit, this.skillLv, form);
  }

  protected get active1SkillData(): ActiveSkillData { return unitSkillData[this.unitNumber].active[0]; }
  protected get active2SkillData(): ActiveSkillData { return unitSkillData[this.unitNumber].active[1]; }

  protected get passive1SkillData(): PassiveSkillData | PassiveSkillDataAsEquipmentEffect | undefined {
    return unitSkillData[this.unitNumber].passive[0][this.unitForm()];
  }

  protected get passive2SkillData(): PassiveSkillData | undefined {
    return unitSkillData[this.unitNumber].passive[1][this.unitForm()];
  }

  protected get passive3SkillData(): PassiveSkillData | undefined {
    return unitSkillData[this.unitNumber].passive[2];
  }
}

class BloodyPantherUnitSkill extends FormChangeUnitSkill<typeof FormChangeUnits.BloodyPanther> {

  constructor(
    unit: FormChangeUnitBasicInfo<typeof FormChangeUnits.BloodyPanther>,
    skillLv?: UnitSkillLvValue,
    form?: UnitFormValue<typeof FormChangeUnits.BloodyPanther>
  ) {
    super(unit, skillLv, form);
  }

  protected updateSkillLvValue(lv: UnitSkillLvValue): UnitSkill {
    return new BloodyPantherUnitSkill(this.formChangeUnit, lv, this.form);
  }

  protected updateUnitFormValue(form: UnitFormValue<typeof FormChangeUnits.BloodyPanther>): FormChangeUnitSkill<typeof FormChangeUnits.BloodyPanther> {
    return new BloodyPantherUnitSkill(this.formChangeUnit, this.skillLv, form);
  }

  protected get active1SkillData(): ActiveSkillData { return unitSkillData[this.unitNumber].active[0][this.unitForm()]; }
  protected get active2SkillData(): ActiveSkillData { return unitSkillData[this.unitNumber].active[1][this.unitForm()]; }

  protected get passive1SkillData(): PassiveSkillData | PassiveSkillDataAsEquipmentEffect | undefined {
    return unitSkillData[this.unitNumber].passive[0];
  }

  protected get passive2SkillData(): PassiveSkillData | undefined {
    return unitSkillData[this.unitNumber].passive[1];
  }

  protected get passive3SkillData(): PassiveSkillData | undefined {
    return unitSkillData[this.unitNumber].passive[2][this.unitForm()];
  }
}

class EmilyUnitSkill extends FormChangeUnitSkill<typeof FormChangeUnits.Emily> {

  constructor(
    unit: FormChangeUnitBasicInfo<typeof FormChangeUnits.Emily>,
    skillLv?: UnitSkillLvValue,
    form?: UnitFormValue<typeof FormChangeUnits.Emily>
  ) {
    super(unit, skillLv, form);
  }

  protected updateSkillLvValue(lv: UnitSkillLvValue): UnitSkill {
    return new EmilyUnitSkill(this.formChangeUnit, lv, this.form);
  }

  protected updateUnitFormValue(form: UnitFormValue<typeof FormChangeUnits.Emily>): FormChangeUnitSkill<typeof FormChangeUnits.Emily> {
    return new EmilyUnitSkill(this.formChangeUnit, this.skillLv, form);
  }

  protected get active1SkillData(): ActiveSkillData { return unitSkillData[this.unitNumber].active[0]; }
  protected get active2SkillData(): ActiveSkillData { return unitSkillData[this.unitNumber].active[1][this.unitForm()]; }

  protected get passive1SkillData(): PassiveSkillData | PassiveSkillDataAsEquipmentEffect | undefined {
    return unitSkillData[this.unitNumber].passive[0];
  }

  protected get passive2SkillData(): PassiveSkillData | undefined {
    return unitSkillData[this.unitNumber].passive[1];
  }

  protected get passive3SkillData(): PassiveSkillData | undefined {
    return unitSkillData[this.unitNumber].passive[2];
  }
}

class PhantomUnitSkill extends FormChangeUnitSkill<typeof FormChangeUnits.Phantom> {

  constructor(
    unit: FormChangeUnitBasicInfo<typeof FormChangeUnits.Phantom>,
    skillLv?: UnitSkillLvValue,
    form?: UnitFormValue<typeof FormChangeUnits.Phantom>
  ) {
    super(unit, skillLv, form);
  }

  protected updateSkillLvValue(lv: UnitSkillLvValue): UnitSkill {
    return new PhantomUnitSkill(this.formChangeUnit, lv, this.form);
  }

  protected updateUnitFormValue(form: UnitFormValue<typeof FormChangeUnits.Phantom>): FormChangeUnitSkill<typeof FormChangeUnits.Phantom> {
    return new PhantomUnitSkill(this.formChangeUnit, this.skillLv, form);
  }

  protected get active1SkillData(): ActiveSkillData { return unitSkillData[this.unitNumber].active[0][this.unitForm()]; }
  protected get active2SkillData(): ActiveSkillData { return unitSkillData[this.unitNumber].active[1][this.unitForm()]; }

  protected get passive1SkillData(): PassiveSkillData | PassiveSkillDataAsEquipmentEffect | undefined {
    return unitSkillData[this.unitNumber].passive[0][this.unitForm()];
  }

  protected get passive2SkillData(): PassiveSkillData | undefined {
    return unitSkillData[this.unitNumber].passive[1];
  }

  protected get passive3SkillData(): PassiveSkillData | undefined {
    return undefined;
  }
}

class InvincibleDragonUnitSkill extends FormChangeUnitSkill<typeof FormChangeUnits.InvincibleDragon> {

  constructor(
    unit: FormChangeUnitBasicInfo<typeof FormChangeUnits.InvincibleDragon>,
    skillLv?: UnitSkillLvValue,
    form?: UnitFormValue<typeof FormChangeUnits.InvincibleDragon>
  ) {
    super(unit, skillLv, form);
  }

  protected updateSkillLvValue(lv: UnitSkillLvValue): UnitSkill {
    return new InvincibleDragonUnitSkill(this.formChangeUnit, lv, this.form);
  }

  protected updateUnitFormValue(form: UnitFormValue<typeof FormChangeUnits.InvincibleDragon>): FormChangeUnitSkill<typeof FormChangeUnits.InvincibleDragon> {
    return new InvincibleDragonUnitSkill(this.formChangeUnit, this.skillLv, form);
  }

  protected get active1SkillData(): ActiveSkillData { return unitSkillData[this.unitNumber].active[0][this.unitForm()]; }
  protected get active2SkillData(): ActiveSkillData { return unitSkillData[this.unitNumber].active[1][this.unitForm()]; }

  protected get passive1SkillData(): PassiveSkillData | PassiveSkillDataAsEquipmentEffect | undefined {
    return unitSkillData[this.unitNumber].passive[0];
  }

  protected get passive2SkillData(): PassiveSkillData | undefined {
    return unitSkillData[this.unitNumber].passive[1];
  }

  protected get passive3SkillData(): PassiveSkillData | undefined {
    return unitSkillData[this.unitNumber].passive[2];
  }
}

class SirenUnitSkill extends FormChangeUnitSkill<typeof FormChangeUnits.Siren> {

  constructor(
    unit: FormChangeUnitBasicInfo<typeof FormChangeUnits.Siren>,
    skillLv?: UnitSkillLvValue,
    form?: UnitFormValue<typeof FormChangeUnits.Siren>
  ) {
    super(unit, skillLv, form);
  }

  protected updateSkillLvValue(lv: UnitSkillLvValue): UnitSkill {
    return new SirenUnitSkill(this.formChangeUnit, lv, this.form);
  }

  protected updateUnitFormValue(form: UnitFormValue<typeof FormChangeUnits.Siren>): FormChangeUnitSkill<typeof FormChangeUnits.Siren> {
    return new SirenUnitSkill(this.formChangeUnit, this.skillLv, form);
  }

  protected get active1SkillData(): ActiveSkillData { return unitSkillData[this.unitNumber].active[0][this.unitForm()]; }
  protected get active2SkillData(): ActiveSkillData { return unitSkillData[this.unitNumber].active[1][this.unitForm()]; }

  protected get passive1SkillData(): PassiveSkillData | PassiveSkillDataAsEquipmentEffect | undefined {
    return unitSkillData[this.unitNumber].passive[0];
  }

  protected get passive2SkillData(): PassiveSkillData | undefined {
    return unitSkillData[this.unitNumber].passive[1][this.unitForm()];
  }

  protected get passive3SkillData(): PassiveSkillData | undefined {
    return unitSkillData[this.unitNumber].passive[2];
  }
}

class FortressUnitSkill extends FormChangeUnitSkill<typeof FormChangeUnits.Fortress> {

  constructor(
    unit: FormChangeUnitBasicInfo<typeof FormChangeUnits.Fortress>,
    skillLv?: UnitSkillLvValue,
    form?: UnitFormValue<typeof FormChangeUnits.Fortress>
  ) {
    super(unit, skillLv, form);
  }

  protected updateSkillLvValue(lv: UnitSkillLvValue): UnitSkill {
    return new FortressUnitSkill(this.formChangeUnit, lv, this.form);
  }

  protected updateUnitFormValue(form: UnitFormValue<typeof FormChangeUnits.Fortress>): FormChangeUnitSkill<typeof FormChangeUnits.Fortress> {
    return new FortressUnitSkill(this.formChangeUnit, this.skillLv, form);
  }

  protected get active1SkillData(): ActiveSkillData { return unitSkillData[this.unitNumber].active[0][this.unitForm()]; }
  protected get active2SkillData(): ActiveSkillData { return unitSkillData[this.unitNumber].active[1][this.unitForm()]; }

  protected get passive1SkillData(): PassiveSkillData | PassiveSkillDataAsEquipmentEffect | undefined {
    return unitSkillData[this.unitNumber].passive[0][this.unitForm()];
  }

  protected get passive2SkillData(): PassiveSkillData | undefined {
    return undefined;
  }

  protected get passive3SkillData(): PassiveSkillData | undefined {
    return undefined;
  }
}

export type {
  UnitSkill,
  FormChangeUnitSkill
};
