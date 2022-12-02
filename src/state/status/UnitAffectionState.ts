import { atomFamily, CallbackInterface, selectorFamily } from 'recoil';

import UnitAffection, { AffectionBonus } from '../../domain/UnitAffection';
import { BioroidUnitNumber, UnitBasicInfo, UnitKind } from '../../domain/UnitBasicInfo';

import { updateUnitAffectionDependency } from '../transaction';

import { getFromSnapshot } from '../../util/recoil';

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

export const toggleAffectionEnabled = (unit: BioroidUnitNumber) => (cbi: CallbackInterface) => (): void => {
  const { set, snapshot } = cbi;
  const nextValue = getFromSnapshot(snapshot)(_unitAffection(unit)).toggleAffectionBonusEnable();

  set(_unitAffection(unit), nextValue);
  updateUnitAffectionDependency(nextValue)(cbi);
};

export const unitAffectionStateResolver = selectorFamily<UnitAffection | undefined, UnitBasicInfo>({
  key: 'unitAffectionStateResolver',
  get: (unit) => ({ get }) => {
    return unit.kind === UnitKind.Bioroid ?
      get(_unitAffection(unit.no)) :
      undefined;
  }
});

export const restoreUnitAffectionState = (cbi: CallbackInterface) => (states: ReadonlyArray<UnitAffection>): void => {
  const { set } = cbi;
  states.forEach(s => {
    set(_unitAffection(s.unit), s);
    updateUnitAffectionDependency(s)(cbi);
  });
};
