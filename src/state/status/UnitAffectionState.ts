import { atomFamily, CallbackInterface, selectorFamily } from 'recoil';

import UnitAffection, { AffectionBonus } from '../../domain/UnitAffection';
import { BioroidUnitNumber, UnitBasicInfo, UnitKind } from '../../domain/UnitBasicInfo';

const _unitAffection = atomFamily<UnitAffection, BioroidUnitNumber>({
  key: 'UnitAffectionState_unitAffection',
  default: unit => new UnitAffection(unit)
});

export const affectionEnabledState = selectorFamily<boolean, BioroidUnitNumber>({
  key: 'affectionEnabledState',
  get: (unit) => ({ get }) => get(_unitAffection(unit)).isAffectionBonusEnabled
});

export const affectionBonusEffectState = selectorFamily<AffectionBonus | undefined, UnitBasicInfo>({
  key: 'affectionBonusEffectState',
  get: (unit) => ({ get }) => {
    return unit.kind === UnitKind.Bioroid ?
      get(_unitAffection(unit.no)).affectionBonus :
      undefined;
  }
});

export const toggleAffectionEnabled = (unit: BioroidUnitNumber) => ({ set }: CallbackInterface) => (): void => {
  set(_unitAffection(unit), s => s.toggleAffectionBonusEnable());
};

export const unitAffectionStateResolver = selectorFamily<UnitAffection | undefined, UnitBasicInfo>({
  key: 'unitAffectionStateResolver',
  get: (unit) => ({ get }) => {
    return unit.kind === UnitKind.Bioroid ?
      get(_unitAffection(unit.no)) :
      undefined;
  }
});

export const restoreUnitAffectionState = ({ set }: CallbackInterface) => (states: ReadonlyArray<UnitAffection>): void => {
  states.forEach(s => set(_unitAffection(s.unit), s));
};
