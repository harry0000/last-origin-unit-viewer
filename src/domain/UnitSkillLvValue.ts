import { UnitBasicInfo } from './UnitBasicInfo';
import { availableRanksPerUnit } from './UnitRankValue';
import { Sequence } from '../util/type';

export type SkillLv = Sequence<10>

function checkAvailablePassive(unit: UnitBasicInfo): number {
  return availableRanksPerUnit[unit.no].reduce((acc, v) => {
    switch (v) {
    case 'ss': return 3;
    case 's': return Math.max(2, acc);
    case 'a': return Math.max(1, acc);
    case 'b': return Math.max(0, acc);
    }
  }, 0);
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

    const availablePassives = checkAvailablePassive(unit);
    this.passive1Lv = availablePassives >= 1 ? passive1Lv ?? 10 : undefined;
    this.passive2Lv = availablePassives >= 2 ? passive2Lv ?? 10 : undefined;
    this.passive3Lv = availablePassives >= 3 ? passive3Lv ?? 10 : undefined;
  }

  setActive1Lv(lv: SkillLv): UnitSkillLvValue {
    return new UnitSkillLvValue(
      this.#unit,
      lv,
      this.active2Lv,
      this.passive1Lv,
      this.passive2Lv,
      this.passive3Lv
    );
  }

  setActive2Lv(lv: SkillLv): UnitSkillLvValue {
    return new UnitSkillLvValue(
      this.#unit,
      this.active1Lv,
      lv,
      this.passive1Lv,
      this.passive2Lv,
      this.passive3Lv
    );
  }

  setPassive1Lv(lv: SkillLv): UnitSkillLvValue {
    return new UnitSkillLvValue(
      this.#unit,
      this.active1Lv,
      this.active2Lv,
      lv,
      this.passive2Lv,
      this.passive3Lv
    );
  }

  setPassive2Lv(lv: SkillLv): UnitSkillLvValue {
    return new UnitSkillLvValue(
      this.#unit,
      this.active1Lv,
      this.active2Lv,
      this.passive1Lv,
      lv,
      this.passive3Lv
    );
  }

  setPassive3Lv(lv: SkillLv): UnitSkillLvValue {
    return new UnitSkillLvValue(
      this.#unit,
      this.active1Lv,
      this.active2Lv,
      this.passive1Lv,
      this.passive2Lv,
      lv
    );
  }
}

export default UnitSkillLvValue;
