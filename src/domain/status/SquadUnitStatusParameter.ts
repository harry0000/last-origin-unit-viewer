import {
  AccBattleEffect,
  ApBattleEffect,
  AtkBattleEffect,
  AtkValueUpBattleEffect,
  AtkValueUpByUnitBattleEffect,
  BattleEffect,
  CriBattleEffect,
  DefBattleEffect,
  DefValueUpBattleEffect,
  ElectricResistBattleEffect,
  EvaBattleEffect,
  FireResistBattleEffect,
  IceResistBattleEffect,
  SpdBattleEffect,
  isStatusBattleEffect
} from '../squad/simulator/BattleEffect';
import {
  AtkValueUpByUnitBattleEffectValue,
  BattleEffectExcludeAPEffect
} from '../../state/status/parameters/UnitStatusParameterState';
import { Effect } from '../Effect';
import {
  MicroValue,
  MilliPercentageValue,
  MilliValue,
  multiplyMicroValue,
  multiplyMilliValue,
  reverseMicroValueSign,
  reverseMilliPercentageValueSign,
  sumMicroValues,
  sumMilliPercentageValues,
  sumMilliValues
} from '../ValueUnit';
import { ReadyToAction, readyToAction } from '../squad/SquadUnitActionOrder';
import { UnitNumber } from '../UnitBasicInfo';

class SquadUnitStatus {
  readonly unit: UnitNumber;

  readonly battleEffects: ReadonlyArray<BattleEffectExcludeAPEffect>;

  readonly atkEffects: ReadonlyArray<AtkBattleEffect>;
  readonly defEffects: ReadonlyArray<DefBattleEffect>;
  readonly accEffects: ReadonlyArray<AccBattleEffect>;
  readonly evaEffects: ReadonlyArray<EvaBattleEffect>;
  readonly criEffects: ReadonlyArray<CriBattleEffect>;
  readonly spdEffects: ReadonlyArray<SpdBattleEffect>;
  readonly fireResistEffects: ReadonlyArray<FireResistBattleEffect>;
  readonly iceResistEffects: ReadonlyArray<IceResistBattleEffect>;
  readonly electricResistEffects: ReadonlyArray<ElectricResistBattleEffect>;

  readonly apEffects: ReadonlyArray<ApBattleEffect>;

  readonly atkValueUpEffects: ReadonlyArray<AtkValueUpBattleEffect>;
  readonly defValueUpEffects: ReadonlyArray<DefValueUpBattleEffect>;

  readonly atkRateEffectValue: MilliValue;
  readonly defRateEffectValue: MilliValue;

  readonly def: MilliValue;
  readonly acc: MilliPercentageValue;
  readonly eva: MilliPercentageValue;
  readonly cri: MilliPercentageValue;
  readonly spd: MicroValue;
  readonly fireResist: MilliPercentageValue;
  readonly iceResist: MilliPercentageValue;
  readonly electricResist: MilliPercentageValue;

  readonly defEffectsSummary: MilliValue;
  readonly accEffectsSummary: MilliPercentageValue;
  readonly evaEffectsSummary: MilliPercentageValue;
  readonly criEffectsSummary: MilliPercentageValue;
  readonly spdEffectsSummary: MicroValue;
  readonly fireResistEffectsSummary: MilliPercentageValue;
  readonly iceResistEffectsSummary: MilliPercentageValue;
  readonly electricResistEffectsSummary: MilliPercentageValue;

  readonly #atk: MilliValue;
  #atkValueUpByUnitEffects: ReadonlyArray<AtkValueUpByUnitBattleEffectValue>;

  #ap: MicroValue;

  constructor(
    unit: UnitNumber,
    atk: MilliValue,
    def: MilliValue,
    acc: MilliPercentageValue,
    eva: MilliPercentageValue,
    cri: MilliPercentageValue,
    spd: MicroValue,
    fireResist: MilliPercentageValue,
    iceResist: MilliPercentageValue,
    electricResist: MilliPercentageValue,
    battleEffects: ReadonlyArray<BattleEffect>
  ) {
    this.unit = unit;

    const atkEffects: Array<AtkBattleEffect> = [];
    const defEffects: Array<DefBattleEffect> = [];
    const accEffects: Array<AccBattleEffect> = [];
    const evaEffects: Array<EvaBattleEffect> = [];
    const criEffects: Array<CriBattleEffect> = [];
    const spdEffects: Array<SpdBattleEffect> = [];
    const apEffects: Array<ApBattleEffect> = [];

    const atkEffectValues: Array<MilliPercentageValue> = [];
    const defEffectValues: Array<MilliPercentageValue> = [];
    const accEffectValues: Array<MilliPercentageValue> = [];
    const evaEffectValues: Array<MilliPercentageValue> = [];
    const criEffectValues: Array<MilliPercentageValue> = [];
    const spdEffectValues: Array<MilliPercentageValue> = [];
    const apEffectValues: Array<MicroValue> = [];

    const fireResistEffects: Array<FireResistBattleEffect> = [];
    const iceResistEffects: Array<IceResistBattleEffect> = [];
    const electricResistEffects: Array<ElectricResistBattleEffect> = [];

    const fireResistEffectValues: Array<MilliPercentageValue> = [];
    const iceResistEffectValues: Array<MilliPercentageValue> = [];
    const electricResistEffectValues: Array<MilliPercentageValue> = [];

    const atkValueUpEffects: Array<AtkValueUpBattleEffect> = [];
    const atkValueUpByUnitEffects: Array<AtkValueUpByUnitBattleEffect> = [];
    const defValueUpEffects: Array<DefValueUpBattleEffect> = [];

    const defValueUpEffectValues: Array<MilliValue> = [];

    this.battleEffects = battleEffects.filter((effect): effect is BattleEffectExcludeAPEffect => {
      if (isStatusBattleEffect(Effect.AtkUp, effect)) {
        atkEffects.push(effect);
        atkEffectValues.push(effect.value);
      } else if (isStatusBattleEffect(Effect.AtkDown, effect)) {
        atkEffects.push(effect);
        atkEffectValues.push(reverseMilliPercentageValueSign(effect.value));
      } else if (isStatusBattleEffect(Effect.DefUp, effect)) {
        defEffects.push(effect);
        defEffectValues.push(effect.value);
      } else if (isStatusBattleEffect(Effect.DefDown, effect)) {
        defEffects.push(effect);
        defEffectValues.push(reverseMilliPercentageValueSign(effect.value));
      } else if (isStatusBattleEffect(Effect.AccUp, effect)) {
        accEffects.push(effect);
        accEffectValues.push(effect.value);
      } else if (isStatusBattleEffect(Effect.AccDown, effect)) {
        accEffects.push(effect);
        accEffectValues.push(reverseMilliPercentageValueSign(effect.value));
      } else if (isStatusBattleEffect(Effect.EvaUp, effect)) {
        evaEffects.push(effect);
        evaEffectValues.push(effect.value);
      } else if (isStatusBattleEffect(Effect.EvaDown, effect)) {
        evaEffects.push(effect);
        evaEffectValues.push(reverseMilliPercentageValueSign(effect.value));
      } else if (isStatusBattleEffect(Effect.CriUp, effect)) {
        criEffects.push(effect);
        criEffectValues.push(effect.value);
      } else if (isStatusBattleEffect(Effect.CriDown, effect)) {
        criEffects.push(effect);
        criEffectValues.push(reverseMilliPercentageValueSign(effect.value));
      } else if (isStatusBattleEffect(Effect.SpdUp, effect)) {
        spdEffects.push(effect);
        spdEffectValues.push(effect.value);
      } else if (isStatusBattleEffect(Effect.SpdDown, effect)) {
        spdEffects.push(effect);
        spdEffectValues.push(reverseMilliPercentageValueSign(effect.value));
      } else if (isStatusBattleEffect(Effect.FireResistUp, effect)) {
        fireResistEffects.push(effect);
        fireResistEffectValues.push(effect.value);
      } else if (isStatusBattleEffect(Effect.FireResistDown, effect)) {
        fireResistEffects.push(effect);
        fireResistEffectValues.push(reverseMilliPercentageValueSign(effect.value));
      } else if (isStatusBattleEffect(Effect.IceResistUp, effect)) {
        iceResistEffects.push(effect);
        iceResistEffectValues.push(effect.value);
      } else if (isStatusBattleEffect(Effect.IceResistDown, effect)) {
        iceResistEffects.push(effect);
        iceResistEffectValues.push(reverseMilliPercentageValueSign(effect.value));
      } else if (isStatusBattleEffect(Effect.ElectricResistUp, effect)) {
        electricResistEffects.push(effect);
        electricResistEffectValues.push(effect.value);
      } else if (isStatusBattleEffect(Effect.ElectricResistDown, effect)) {
        electricResistEffects.push(effect);
        electricResistEffectValues.push(reverseMilliPercentageValueSign(effect.value));
      } else if (isStatusBattleEffect(Effect.AtkValueUp, effect)) {
        // Atk values are calculated later
        atkValueUpEffects.push(effect);
      } else if (isStatusBattleEffect(Effect.AtkValueUpByUnitValue, effect)) {
        // Atk values are calculated later
        atkValueUpByUnitEffects.push(effect);
      } else if (isStatusBattleEffect(Effect.DefValueUp, effect)) {
        defValueUpEffects.push(effect);
        defValueUpEffectValues.push(effect.value);
      }
      // Exclude Ap Effects
      else if (
        // HACK: Currently, SetAp does not exist at the start of the round.
        isStatusBattleEffect(Effect.SetAp, effect) ||
        isStatusBattleEffect(Effect.ApUp, effect)
      ) {
        apEffects.push(effect);
        apEffectValues.push(effect.value);
        return false;
      } else if (isStatusBattleEffect(Effect.ApDown, effect)) {
        apEffects.push(effect);
        apEffectValues.push(reverseMicroValueSign(effect.value));
        return false;
      }

      return true;
    });

    this.atkEffects = atkEffects;
    this.defEffects = defEffects;
    this.accEffects = accEffects;
    this.evaEffects = evaEffects;
    this.criEffects = criEffects;
    this.spdEffects = spdEffects;
    this.apEffects = apEffects;

    this.fireResistEffects = fireResistEffects;
    this.iceResistEffects = iceResistEffects;
    this.electricResistEffects = electricResistEffects;

    this.atkValueUpEffects = atkValueUpEffects;
    this.defValueUpEffects = defValueUpEffects;

    this.atkRateEffectValue = multiplyMilliValue(atk, sumMilliPercentageValues(...atkEffectValues));
    this.defRateEffectValue = multiplyMilliValue(def, sumMilliPercentageValues(...defEffectValues));

    this.defEffectsSummary = sumMilliValues(this.defRateEffectValue, ...defValueUpEffectValues);
    this.accEffectsSummary = sumMilliPercentageValues(...accEffectValues);
    this.evaEffectsSummary = sumMilliPercentageValues(...evaEffectValues);
    this.criEffectsSummary = sumMilliPercentageValues(...criEffectValues);
    this.spdEffectsSummary = multiplyMicroValue(spd, sumMilliPercentageValues(...spdEffectValues));
    this.fireResistEffectsSummary = sumMilliPercentageValues(...fireResistEffectValues);
    this.iceResistEffectsSummary = sumMilliPercentageValues(...iceResistEffectValues);
    this.electricResistEffectsSummary = sumMilliPercentageValues(...electricResistEffectValues);

    this.def = sumMilliValues(def, this.defEffectsSummary);
    this.acc = sumMilliPercentageValues(acc, this.accEffectsSummary);
    this.eva = sumMilliPercentageValues(eva, this.evaEffectsSummary);
    this.cri = sumMilliPercentageValues(cri, this.criEffectsSummary);
    this.spd = sumMicroValues(spd, this.spdEffectsSummary);
    this.fireResist     = sumMilliPercentageValues(fireResist,     this.fireResistEffectsSummary);
    this.iceResist      = sumMilliPercentageValues(iceResist,      this.iceResistEffectsSummary);
    this.electricResist = sumMilliPercentageValues(electricResist, this.electricResistEffectsSummary);

    this.#atk = atk;
    this.#atkValueUpByUnitEffects = atkValueUpByUnitEffects.map(effect => ({ effect, value: { milliValue: 0 } }));

    this.#ap = sumMicroValues(...apEffectValues);
  }

  get atk(): MilliValue {
    return sumMilliValues(this.#atk, this.atkEffectsSummary);
  }

  get atkEffectsSummary(): MilliValue {
    return sumMilliValues(
      this.atkRateEffectValue,
      ...this.atkValueUpEffects.map(({ value }) => value),
      ...this.#atkValueUpByUnitEffects.map(({ value }) => value)
    );
  }

  get atkValueUpByUnitEffects(): ReadonlyArray<AtkValueUpByUnitBattleEffectValue> {
    return this.#atkValueUpByUnitEffects;
  }

  get ap(): MicroValue {
    return this.#ap;
  }

  calculateAtkUpValueByUnit(repository: (unit: UnitNumber) => MilliValue): void {
    this.#atkValueUpByUnitEffects = this.#atkValueUpByUnitEffects.map(({ effect }) => ({
      effect,
      value: repository(effect.value.unit)
    }));
  }

  tickApAdding(): ReadyToAction {
    this.#ap = sumMicroValues(this.#ap, this.spd);
    return readyToAction(this.#ap);
  }
}

export class SquadUnitStatusCalculator {

  readonly #units: Map<UnitNumber, SquadUnitStatus> = new Map();

  addUnit(
    unit: UnitNumber,
    atk: MilliValue,
    def: MilliValue,
    acc: MilliPercentageValue,
    eva: MilliPercentageValue,
    cri: MilliPercentageValue,
    spd: MicroValue,
    fireResist: MilliPercentageValue,
    iceResist: MilliPercentageValue,
    electricResist: MilliPercentageValue,
    effects: ReadonlyArray<BattleEffect>
  ): void {
    this.#units.set(
      unit,
      new SquadUnitStatus(unit, atk, def, acc, eva, cri, spd, fireResist, iceResist, electricResist, effects)
    );
  }

  #calculateAtk(): void {
    const repository: (unit: UnitNumber) => MilliValue =
      (unit) => this.#units.get(unit)?.atkRateEffectValue ?? { milliValue: 0 };

    this.#units.forEach(unit => {
      unit.calculateAtkUpValueByUnit(repository);
    });
  }

  #calculateAp(): number {
    if (this.#units.size === 0) {
      return 0;
    }

    let tickCount = 0;
    let ready = false;

    do {
      ++tickCount;

      this.#units.forEach(unit => {
        ready = unit.tickApAdding() || ready;
      });
    } while (!ready);

    return tickCount;
  }

  run(): { apTickCount: number, units: ReadonlyArray<SquadUnitStatus> } {
    this.#calculateAtk();
    const apTickCount = this.#calculateAp();

    return {
      apTickCount,
      units: [...this.#units.values()]
    };
  }
}