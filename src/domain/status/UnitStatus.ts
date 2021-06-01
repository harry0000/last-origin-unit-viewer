import { Chip, Gear, Os } from '../EquipmentData';
import { UnitBasicInfo, UnitNumber } from '../UnitBasicInfo';
import UnitLv, { UnitLvMode, UnitLvValue } from './UnitLv';
import UnitParameterEnhancementLv from './UnitParameterEnhancementLv';
import {
  calcMicroValues,
  calcMilliPercentageValues,
  calcMilliValues
} from '../ValueUnit';
import UnitBaseParameter from './UnitBaseParameter';
import UnitStatusEffect from './UnitStatusEffect';
import UnitEquipment, { ChipEquipment, GearEquipment, OsEquipment } from './UnitEquipment';

type StateParams = {
  lv?: UnitLv,
  parameters?: UnitParameterEnhancementLv,
  equipments?: UnitEquipment
}

class UnitStatus {

  readonly unit: UnitBasicInfo;
  readonly #lv: UnitLv;
  readonly #enhancements: UnitParameterEnhancementLv;
  readonly #equipments: UnitEquipment;
  readonly baseParameters: UnitBaseParameter;
  readonly effects: UnitStatusEffect;

  readonly remainPoints: number;

  constructor(
    unit: UnitBasicInfo,
    lv?: UnitLv,
    enhancements?: UnitParameterEnhancementLv,
    equipments?: UnitEquipment
  ) {
    const l = lv ?? new UnitLv();
    const e = enhancements ?? new UnitParameterEnhancementLv(unit);

    this.unit = unit;
    this.#lv = l.adjustLv(e);

    if (this.#lv.points < e.points) {
      this.#enhancements = e.resetPoints();
    } else {
      this.#enhancements = e;
    }

    this.remainPoints = this.#lv.points - this.#enhancements.points;
    this.baseParameters = new UnitBaseParameter(this.unit.no, this.#lv.value);
    this.#equipments = equipments ?? new UnitEquipment(this.unit);
    this.effects = new UnitStatusEffect(this.#lv, this.#enhancements, this.#equipments);
  }

  private get hasRemainPoints(): boolean {
    return this.remainPoints > 0;
  }

  private updateState({ lv, parameters, equipments }: StateParams): UnitStatus {
    if (lv && lv === this.#lv ||
        parameters && parameters === this.#enhancements ||
        equipments && equipments === this.#equipments) {
      return this;
    }

    return new UnitStatus(
      this.unit,
      lv ?? this.#lv,
      parameters ?? this.#enhancements,
      equipments ?? this.#equipments
    );
  }

  get unitNumber(): UnitNumber {
    return this.unit.no;
  }

  get lv(): UnitLvValue {
    return this.#lv.value;
  }

  get usedPoints(): number {
    return this.#enhancements.points;
  }

  setUnitLv(lvValue: UnitLvValue): UnitStatus {
    const lv = this.#lv.setLv(lvValue);
    if (lv === this.#lv) {
      return this;
    }
    return this.updateState({ lv });
  }

  get lvMode(): UnitLvMode {
    return this.#lv.mode;
  }

  toggleLvMode(): UnitStatus {
    return this.updateState({ lv: this.#lv.toggleMode() });
  }

  resetParameterPoints(): UnitStatus {
    return this.updateState({ parameters: this.#enhancements.resetPoints() });
  }

  get hp(): number {
    return this.baseParameters.hp.value + this.effects.hpValue.value;
  }

  get atk(): number {
    return calcMilliValues(this.baseParameters.atk, this.effects.atkValue);
  }

  get def(): number {
    return calcMilliValues(this.baseParameters.def, this.effects.defValue);
  }

  get acc(): number {
    return calcMilliPercentageValues(this.baseParameters.acc, this.effects.accValue);
  }

  get eva(): number {
    return calcMilliPercentageValues(this.baseParameters.eva, this.effects.evaValue);
  }

  get cri(): number {
    return calcMilliPercentageValues(this.baseParameters.cri, this.effects.criValue);
  }

  get spd(): number {
    return calcMicroValues(this.baseParameters.spd, this.effects.spdValue);
  }

  get fireResist(): number {
    return calcMilliPercentageValues(this.baseParameters.fireResist, this.effects.fireResistValue);
  }

  get iceResist(): number {
    return calcMilliPercentageValues(this.baseParameters.iceResist, this.effects.iceResistValue);
  }

  get electricResist(): number {
    return calcMilliPercentageValues(this.baseParameters.electricResist, this.effects.electricResistValue);
  }

  get hpLv(): number { return this.#enhancements.hpLv; }
  get atkLv(): number { return this.#enhancements.atkLv; }
  get defLv(): number { return this.#enhancements.defLv; }
  get accLv(): number { return this.#enhancements.accLv; }
  get evaLv(): number { return this.#enhancements.evaLv; }
  get criLv(): number { return this.#enhancements.criLv; }

  get enableUpHpLv(): boolean { return this.hasRemainPoints && this.#enhancements.enableUpHpLv; }
  get enableDownHpLv(): boolean { return this.#enhancements.enableDownHpLv; }

  get enableUpAtkLv(): boolean { return this.hasRemainPoints && this.#enhancements.enableUpAtkLv; }
  get enableDownAtkLv(): boolean { return this.#enhancements.enableDownAtkLv; }

  get enableUpDefLv(): boolean { return this.hasRemainPoints && this.#enhancements.enableUpDefLv; }
  get enableDownDefLv(): boolean { return this.#enhancements.enableDownDefLv; }

  get enableUpAccLv(): boolean { return this.hasRemainPoints && this.#enhancements.enableUpAccLv; }
  get enableDownAccLv(): boolean { return this.#enhancements.enableDownAccLv; }

  get enableUpEvaLv(): boolean { return this.hasRemainPoints && this.#enhancements.enableUpEvaLv; }
  get enableDownEvaLv(): boolean { return this.#enhancements.enableDownEvaLv; }

  get enableUpCriLv(): boolean { return this.hasRemainPoints && this.#enhancements.enableUpCriLv; }
  get enableDownCriLv(): boolean { return this.#enhancements.enableDownCriLv; }

  upHpLv(): UnitStatus {
    if (this.enableUpHpLv) {
      return this.updateState({ parameters: this.#enhancements.upHpLv() });
    }
    return this;
  }

  downHpLv(): UnitStatus {
    if (this.enableDownHpLv) {
      return this.updateState({ parameters: this.#enhancements.downHpLv() });
    }
    return this;
  }

  upAtkLv(): UnitStatus {
    if (this.enableUpAtkLv) {
      return this.updateState({ parameters: this.#enhancements.upAtkLv() });
    }
    return this;
  }

  downAtkLv(): UnitStatus {
    if (this.enableDownAtkLv) {
      return this.updateState({ parameters: this.#enhancements.downAtkLv() });
    }
    return this;
  }

  upDefLv(): UnitStatus {
    if (this.enableUpDefLv) {
      return this.updateState({ parameters: this.#enhancements.upDefLv() });
    }
    return this;
  }

  downDefLv(): UnitStatus {
    if (this.enableDownDefLv) {
      return this.updateState({ parameters: this.#enhancements.downDefLv() });
    }
    return this;
  }

  upAccLv(): UnitStatus {
    if (this.enableUpAccLv) {
      return this.updateState({ parameters: this.#enhancements.upAccLv() });
    }
    return this;
  }

  downAccLv(): UnitStatus {
    if (this.enableDownAccLv) {
      return this.updateState({ parameters: this.#enhancements.downAccLv() });
    }
    return this;
  }

  upEvaLv(): UnitStatus {
    if (this.enableUpEvaLv) {
      return this.updateState({ parameters: this.#enhancements.upEvaLv() });
    }
    return this;
  }

  downEvaLv(): UnitStatus {
    if (this.enableDownEvaLv) {
      return this.updateState({ parameters: this.#enhancements.downEvaLv() });
    }
    return this;
  }

  upCriLv(): UnitStatus {
    if (this.enableUpCriLv) {
      return this.updateState({ parameters: this.#enhancements.upCriLv() });
    }
    return this;
  }

  downCriLv(): UnitStatus {
    if (this.enableDownCriLv) {
      return this.updateState({ parameters: this.#enhancements.downCriLv() });
    }
    return this;
  }

  get chip1(): ChipEquipment | undefined {
    return this.#equipments.chip1;
  }

  get chip1AvailableLv(): UnitLvValue {
    return this.#equipments.chip1AvailableLv;
  }

  get chip2(): ChipEquipment | undefined {
    return this.#equipments.chip2;
  }

  get chip2AvailableLv(): UnitLvValue {
    return this.#equipments.chip2AvailableLv;
  }

  get os(): OsEquipment | undefined {
    return this.#equipments.os;
  }

  get osAvailableLv(): UnitLvValue {
    return this.#equipments.osAvailableLv;
  }

  get isChip1Available(): boolean {
    return this.#equipments.isChip1Available(this.#lv);
  }

  get isChip2Available(): boolean {
    return this.#equipments.isChip2Available(this.#lv);
  }

  get isOsAvailable(): boolean {
    return this.#equipments.isOsAvailable(this.#lv);
  }

  get isGearAvailable(): boolean {
    return this.#equipments.isGearAvailable(this.#lv);
  }

  get gear(): GearEquipment | undefined {
    return this.#equipments.gear;
  }

  get gearAvailableLv(): UnitLvValue {
    return this.#equipments.gearAvailableLv;
  }

  equipChip1(chip: Chip): UnitStatus {
    return this.updateState({ equipments: this.#equipments.equipChip1(chip) });
  }

  removeChip1(): UnitStatus {
    return this.updateState({ equipments: this.#equipments.removeChip1() });
  }

  equipChip2(chip: Chip): UnitStatus {
    return this.updateState({ equipments: this.#equipments.equipChip2(chip) });
  }

  removeChip2(): UnitStatus {
    return this.updateState({ equipments: this.#equipments.removeChip2() });
  }

  equipOs(os: Os): UnitStatus {
    return this.updateState({ equipments: this.#equipments.equipOs(os) });
  }

  removeOs(): UnitStatus {
    return this.updateState({ equipments: this.#equipments.removeOs() });
  }

  equipGear(gear: Gear): UnitStatus {
    return this.updateState({ equipments: this.#equipments.equipGear(gear) });
  }

  removeGear(): UnitStatus {
    return this.updateState({ equipments: this.#equipments.removeGear() });
  }
}

export default UnitStatus;
