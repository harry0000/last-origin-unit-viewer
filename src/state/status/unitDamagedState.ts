import { atomFamily, DefaultValue, RecoilValueReadOnly, useRecoilState, useSetRecoilState } from 'recoil';

import { UnitBasicInfo, UnitNumber } from '../../domain/UnitBasicInfo';
import UnitDamagedState from '../../domain/UnitDamagedState';

import { setOnlySelector } from '../../util/recoil';

const unitDamagedState = atomFamily<UnitDamagedState, UnitNumber>({
  key: 'unitDamagedState',
  default: (unit) => new UnitDamagedState(unit)
});

const unitDamagedStateRestore = setOnlySelector<ReadonlyArray<UnitDamagedState>>({
  key: 'unitDamagedStateRestore',
  set: ({ set }, newValue) => {
    if (!(newValue instanceof DefaultValue)) {
      newValue.forEach(v => set(unitDamagedState(v.unit), v));
    }
  }
});

export function useUnitDamagedState(unit: UnitBasicInfo): [damaged: boolean, toggleDamagedState: () => void] {
  const [damagedState, setDamaged] = useRecoilState(unitDamagedState(unit.no));

  return [damagedState.isDamaged, () => { setDamaged(s => s.toggleDamagedState()); }];
}

export function useUnitDamagedStateResolver(): (param: UnitNumber) => RecoilValueReadOnly<UnitDamagedState> {
  return unitDamagedState;
}

export function useUnitDamagedStateRestore(): (param: ReadonlyArray<UnitDamagedState>) => void {
  return useSetRecoilState(unitDamagedStateRestore);
}
