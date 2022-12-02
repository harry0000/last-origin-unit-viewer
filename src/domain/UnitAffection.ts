import { BioroidUnitNumber } from './UnitBasicInfo';
import { IntegerValue } from './ValueUnit';

export type AffectionBonus = Readonly<{
  buff_debuff_lv_up: { [key in keyof IntegerValue]: 1 }
}>
const AffectionBonus: AffectionBonus = {
  buff_debuff_lv_up: { value: 1 }
};

class UnitAffection {

  readonly unit: BioroidUnitNumber;
  readonly isAffectionBonusEnabled: boolean;

  constructor(
    bioroid: BioroidUnitNumber,
    isAffectionBonusEnabled?: boolean
  ) {
    this.unit = bioroid;
    this.isAffectionBonusEnabled = isAffectionBonusEnabled ?? false;
  }

  toggleAffectionBonusEnable(): UnitAffection {
    return new UnitAffection(this.unit, !this.isAffectionBonusEnabled);
  }

  enableAffectionBonus(): UnitAffection {
    return this.isAffectionBonusEnabled ?
      this :
      this.toggleAffectionBonusEnable();
  }

  get affectionBonus(): AffectionBonus | undefined {
    return this.isAffectionBonusEnabled ? AffectionBonus : undefined;
  }
}

export default UnitAffection;
