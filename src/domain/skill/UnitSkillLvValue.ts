import { UnitBasicInfo, UnitRank, UnitRankComparator } from '../UnitBasicInfo';
import { getUnitMaxRank } from '../status/UnitRankState';
import { Sequence } from '../../util/type';

export type SkillLv = Sequence<10>

function validLv(lv: number): boolean {
  return 0 < lv && lv <= 10;
}

class UnitSkillLvValue {

  readonly #unit: UnitBasicInfo;

  readonly active1Lv: SkillLv;
  readonly active2Lv: SkillLv;
  readonly passive1Lv?: SkillLv;
  readonly passive2Lv?: SkillLv;
  readonly passive3Lv?: SkillLv;

  constructor(
    unit: UnitBasicInfo,
    active1Lv?: SkillLv,
    active2Lv?: SkillLv,
    passive1Lv?: SkillLv,
    passive2Lv?: SkillLv,
    passive3Lv?: SkillLv
  ) {
    this.#unit = unit;

    this.active1Lv = active1Lv ?? 10;
    this.active2Lv = active2Lv ?? 10;

    const maxRank = getUnitMaxRank(unit.no);
    this.passive1Lv = UnitRankComparator[maxRank].greaterThan(UnitRank.B) ? passive1Lv ?? 10 : undefined;
    this.passive2Lv = UnitRankComparator[maxRank].greaterThan(UnitRank.A) ? passive2Lv ?? 10 : undefined;
    this.passive3Lv = UnitRankComparator[maxRank].greaterThan(UnitRank.S) ? passive3Lv ?? 10 : undefined;
  }

  setActive1Lv(lv: SkillLv): UnitSkillLvValue {
    return validLv(lv) ?
      new UnitSkillLvValue(
        this.#unit,
        lv,
        this.active2Lv,
        this.passive1Lv,
        this.passive2Lv,
        this.passive3Lv
      ) :
      this;
  }

  setActive2Lv(lv: SkillLv): UnitSkillLvValue {
    return validLv(lv) ?
      new UnitSkillLvValue(
        this.#unit,
        this.active1Lv,
        lv,
        this.passive1Lv,
        this.passive2Lv,
        this.passive3Lv
      ) :
      this;
  }

  setPassive1Lv(lv: SkillLv): UnitSkillLvValue {
    return validLv(lv) ?
      new UnitSkillLvValue(
        this.#unit,
        this.active1Lv,
        this.active2Lv,
        lv,
        this.passive2Lv,
        this.passive3Lv
      ) :
      this;
  }

  setPassive2Lv(lv: SkillLv): UnitSkillLvValue {
    return validLv(lv) ?
      new UnitSkillLvValue(
        this.#unit,
        this.active1Lv,
        this.active2Lv,
        this.passive1Lv,
        lv,
        this.passive3Lv
      ) :
      this;
  }

  setPassive3Lv(lv: SkillLv): UnitSkillLvValue {
    return validLv(lv) ?
      new UnitSkillLvValue(
        this.#unit,
        this.active1Lv,
        this.active2Lv,
        this.passive1Lv,
        this.passive2Lv,
        lv
      ) :
      this;
  }
}

export default UnitSkillLvValue;
