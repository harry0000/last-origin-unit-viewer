import { atomFamily, DefaultValue, RecoilValueReadOnly, selector, useRecoilState, useSetRecoilState } from 'recoil';
import { UnitBasicInfo, UnitNumber } from '../../domain/UnitBasicInfo';
import UnitDamagedState from '../../domain/UnitDamagedState';

const unitDamagedState = atomFamily<UnitDamagedState, UnitNumber>({
  key: 'unitDamagedState',
  default: (unit) => new UnitDamagedState(unit)
});

const unitDamagedStateRestore = selector<ReadonlyArray<UnitDamagedState>>({
  key: 'unitDamagedStateRestore',
  get: () => [],
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
