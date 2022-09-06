import { atomFamily, CallbackInterface, selectorFamily } from 'recoil';

import UnitAffection, { AffectionBonus } from '../../domain/UnitAffection';
import { BioroidUnitNumber, UnitBasicInfo, UnitKind } from '../../domain/UnitBasicInfo';

class UnitAffectionState {
  readonly #unitAffection = atomFamily<UnitAffection, BioroidUnitNumber>({
    key: 'unitAffectionState_unitAffection',
    default: unit => new UnitAffection(unit)
  });

  readonly affectionEnabledState = selectorFamily<boolean, BioroidUnitNumber>({
    key: 'affectionEnabledState',
    get: (unit) => ({ get }) => get(this.#unitAffection(unit)).isAffectionBonusEnabled
  });

  readonly affectionBonusEffectState = selectorFamily<AffectionBonus | undefined, UnitBasicInfo>({
    key: 'affectionBonusEffectState',
    get: (unit) => ({ get }) => {
      return unit.kind === UnitKind.Bioroid ?
        get(this.#unitAffection(unit.no)).affectionBonus :
        undefined;
    }
  });

  readonly toggleAffectionEnabled = (unit: BioroidUnitNumber) => ({ set }: CallbackInterface) => (): void => {
    set(this.#unitAffection(unit), s => s.toggleAffectionBonusEnable());
  };

  readonly unitAffectionStateResolver = selectorFamily<UnitAffection | undefined, UnitBasicInfo>({
    key: 'unitAffectionStateResolver',
    get: (unit) => ({ get }) => {
      return unit.kind === UnitKind.Bioroid ?
        get(this.#unitAffection(unit.no)) :
        undefined;
    }
  });

  readonly unitAffectionStateRestore = ({ set }: CallbackInterface) => (states: ReadonlyArray<UnitAffection>): void => {
    states.forEach(s => set(this.#unitAffection(s.unit), s));
  };
}

export const unitAffectionState: UnitAffectionState = new UnitAffectionState();
