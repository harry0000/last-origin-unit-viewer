import {
  atomFamily,
  DefaultValue,
  RecoilValueReadOnly,
  selectorFamily,
  useRecoilState,
  useSetRecoilState
} from 'recoil';

import UnitAffection, { AffectionBonus } from '../../domain/UnitAffection';
import { BioroidUnitNumber, UnitBasicInfo, UnitKind } from '../../domain/UnitBasicInfo';

import { setOnlySelector } from '../../util/recoil';

const unitAffectionState = atomFamily<UnitAffection, BioroidUnitNumber>({
  key: 'unitAffectionState',
  default: unit => new UnitAffection(unit)
});

const unitAffectionStateResolver = selectorFamily<UnitAffection | undefined, UnitBasicInfo>({
  key: 'unitAffectionStateResolver',
  get: (unit) => ({ get }) => {
    return unit.kind === UnitKind.Bioroid ?
      get(unitAffectionState(unit.no)) :
      undefined;
  }
});

const unitAffectionStateRestore = setOnlySelector<ReadonlyArray<UnitAffection>>({
  key: 'unitAffectionStateRestore',
  set: ({ set }, newValue) => {
    if (!(newValue instanceof DefaultValue)) {
      newValue.forEach(v => set(unitAffectionState(v.unit), v));
    }
  }
});

export const affectionBonusEffectState = selectorFamily<AffectionBonus | undefined, UnitBasicInfo>({
  key: 'affectionBonusEffectState',
  get: (unit) => ({ get }) => {
    return unit.kind === UnitKind.Bioroid ?
      get(unitAffectionState(unit.no)).affectionBonus :
      undefined;
  }
});

export function useAffectionBonus(bioroid: BioroidUnitNumber): [bonusEnabled: boolean, toggleEnableBonus: () => void] {
  const [affection, setAffection] = useRecoilState(unitAffectionState(bioroid));

  return [
    affection.isAffectionBonusEnabled,
    () => setAffection(s => s.toggleAffectionBonusEnable())
  ];
}

export function useUnitAffectionStateResolver(): (param: UnitBasicInfo) => RecoilValueReadOnly<UnitAffection | undefined> {
  return unitAffectionStateResolver;
}

export function useUnitAffectionStateRestore(): (param: ReadonlyArray<UnitAffection>) => void {
  return useSetRecoilState(unitAffectionStateRestore);
}
