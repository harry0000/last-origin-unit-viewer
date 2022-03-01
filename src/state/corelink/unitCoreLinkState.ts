import {
  atomFamily,
  DefaultValue,
  GetRecoilValue,
  RecoilValueReadOnly,
  selectorFamily,
  SetRecoilState,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState
} from 'recoil';
import deepEqual from 'fast-deep-equal';

import { CoreLinkBonus, FullLinkBonus } from '../../domain/UnitCoreLinkBonusData';
import UnitCoreLink, { CoreLinkCount, CoreLinkSlotAvailableLv, CoreLinkUnit } from '../../domain/UnitCoreLink';
import { UnitBasicInfo, UnitNumber } from '../../domain/UnitBasicInfo';
import { UnitLvValue } from '../../domain/status/UnitLv';

import { unitLvState } from '../status/unitLvStatusState';
import { unitCoreLinkBonusData } from '../../data/unitCoreLinkBonusData';

import { setOnlySelector, setOnlySelectorFamily } from '../../util/recoil';

export type CoreLinkSlot = 'slot1' | 'slot2' | 'slot3' | 'slot4' | 'slot5'
type CoreLinkSlotKey = `${Capitalize<CoreLinkSlot>}`

function createSlotAvailableAtom(slotKey: CoreLinkSlotKey) {
  return atomFamily<boolean, UnitNumber>({
    key: `_unitCoreLink${slotKey}AvailableAtom`,
    default: false
  });
}

const atoms = {
  linkRate: atomFamily<number, UnitNumber>({
    key: '_unitCoreLinkRateAtom',
    default: 0
  }),
  linkCount: atomFamily<CoreLinkCount, UnitNumber>({
    key: '_unitCoreLinkCountAtom',
    default: 0
  }),
  slotAvailable: {
    slot1: createSlotAvailableAtom('Slot1'),
    slot2: createSlotAvailableAtom('Slot2'),
    slot3: createSlotAvailableAtom('Slot3'),
    slot4: createSlotAvailableAtom('Slot4'),
    slot5: createSlotAvailableAtom('Slot5')
  },
  linkBonus: atomFamily<CoreLinkBonus, UnitNumber>({
    key: '_unitCoreLinkBonusAtom',
    default: (unit) => UnitCoreLink.emptyBonus(unit)
  }),
  fullLinkAvailable: atomFamily<boolean, UnitNumber>({
    key: '_unitFullLinkBonusAvailableAtom',
    default: false
  }),
  fullLinkBonus: atomFamily<FullLinkBonus | undefined, UnitNumber>({
    key: '_unitFullLinkBonusAtom',
    default: undefined
  })
};

const _unitCoreLinkAtom = atomFamily<UnitCoreLink, UnitNumber>({
  key: '_unitCoreLinkAtom',
  default: (unit) => new UnitCoreLink(unit)
});

export const updateCoreLinkDependency = setOnlySelectorFamily<UnitLvValue, UnitNumber>({
  key: 'updateCoreLinkDependency',
  set: (unit) => ({ get, set }, lv) => {
    if (!(lv instanceof DefaultValue)) {
      const coreLink = get(_unitCoreLinkAtom(unit));
      updateInnerAtoms(get, set)(unit, coreLink, lv);
    }
  }
});

const unitCoreLinkState = selectorFamily<UnitCoreLink, UnitNumber>({
  key: 'unitCoreLinkState',
  get: (unit) => ({ get }) => get(_unitCoreLinkAtom(unit)),
  set: (unit) => ({ get, set }, newValue) => {
    if (newValue instanceof UnitCoreLink) {
      set(_unitCoreLinkAtom(unit), newValue);
      updateInnerAtoms(get, set)(unit, newValue, get(unitLvState(unit)));
    }
  }
});

function updateInnerAtoms(get: GetRecoilValue, set: SetRecoilState): (unit: UnitNumber, coreLink: UnitCoreLink, lv: UnitLvValue) => void {
  return function (unit, coreLink, lv) {
    const linkBonus = coreLink.bonusEffects(lv);
    if (!deepEqual(get(atoms.linkBonus(unit)), linkBonus)) {
      set(atoms.linkBonus(unit), linkBonus);
    }
    set(atoms.slotAvailable.slot1(unit), coreLink.isSlot1Available(lv));
    set(atoms.slotAvailable.slot2(unit), coreLink.isSlot2Available(lv));
    set(atoms.slotAvailable.slot3(unit), coreLink.isSlot3Available(lv));
    set(atoms.slotAvailable.slot4(unit), coreLink.isSlot4Available(lv));
    set(atoms.slotAvailable.slot5(unit), coreLink.isSlot5Available(lv));
    set(atoms.linkRate(unit), coreLink.linkRate(lv));
    set(atoms.linkCount(unit), coreLink.linkCount(lv));

    set(atoms.fullLinkBonus(unit), coreLink.fullLinkBonusEffect(lv));
    set(atoms.fullLinkAvailable(unit), coreLink.isFullLinkBonusAvailable(lv));
  };
}

const unitCoreLinkRestore = setOnlySelector<ReadonlyArray<UnitCoreLink>>({
  key: 'unitCoreLinkRestore',
  set: ({ set }, newValue) => {
    if (!(newValue instanceof DefaultValue)) {
      newValue.forEach(v => set(unitCoreLinkState(v.unit), v));
    }
  }
});

export const coreLinkCountState = selectorFamily<CoreLinkCount, UnitNumber>({
  key: 'coreLinkCountState',
  get: (unit) => ({ get }) => get(atoms.linkCount(unit))
});

export const coreLinkBonusEffectsState = selectorFamily<CoreLinkBonus, UnitNumber>({
  key: 'coreLinkBonusEffectsState',
  get: (unit) => ({ get }) => get(atoms.linkBonus(unit))
});

export const fullLinkBonusEffectState = selectorFamily<FullLinkBonus | undefined, UnitNumber>({
  key: 'fullLinkBonusEffectState',
  get: (unit) => ({ get }) => get(atoms.fullLinkBonus(unit))
});

export function useCoreLinkRate(unit: UnitBasicInfo): number {
  return useRecoilValue(atoms.linkRate(unit.no));
}

export function useAvailableCoreLinkUnit(unit: UnitBasicInfo): readonly [CoreLinkUnit, CoreLinkUnit, CoreLinkUnit, CoreLinkUnit] | [] {
  const coreLink = useRecoilValue(unitCoreLinkState(unit.no));
  return coreLink ? [coreLink.fitUnit, coreLink.rankSSFitUnit, coreLink.rankSFitUnit, coreLink.rankAFitUnit] : [];
}

export function useUnitCoreLink(unit: UnitBasicInfo, slot: CoreLinkSlot): [
  linkedUnit: CoreLinkUnit | undefined,
  linkSlot: (unit: CoreLinkUnit | undefined) => void,
  available: boolean,
  availableLv: CoreLinkSlotAvailableLv
] {
  const [coreLink, setCoreLink] = useRecoilState(unitCoreLinkState(unit.no));

  switch (slot) {
  case 'slot1':
    return [coreLink.slot1, (coreLinkUnit) => { setCoreLink(s => coreLinkUnit ? s.linkSlot1(coreLinkUnit) : s.unlinkSlot1()); }, useRecoilValue(atoms.slotAvailable.slot1(unit.no)), UnitCoreLink.slot1AvailableLv];
  case 'slot2':
    return [coreLink.slot2, (coreLinkUnit) => { setCoreLink(s => coreLinkUnit ? s.linkSlot2(coreLinkUnit) : s.unlinkSlot2()); }, useRecoilValue(atoms.slotAvailable.slot2(unit.no)), UnitCoreLink.slot2AvailableLv];
  case 'slot3':
    return [coreLink.slot3, (coreLinkUnit) => { setCoreLink(s => coreLinkUnit ? s.linkSlot3(coreLinkUnit) : s.unlinkSlot3()); }, useRecoilValue(atoms.slotAvailable.slot3(unit.no)), UnitCoreLink.slot3AvailableLv];
  case 'slot4':
    return [coreLink.slot4, (coreLinkUnit) => { setCoreLink(s => coreLinkUnit ? s.linkSlot4(coreLinkUnit) : s.unlinkSlot4()); }, useRecoilValue(atoms.slotAvailable.slot4(unit.no)), UnitCoreLink.slot4AvailableLv];
  case 'slot5':
    return [coreLink.slot5, (coreLinkUnit) => { setCoreLink(s => coreLinkUnit ? s.linkSlot5(coreLinkUnit) : s.unlinkSlot5()); }, useRecoilValue(atoms.slotAvailable.slot5(unit.no)), UnitCoreLink.slot5AvailableLv];
  }
}

export function useCoreLinkEffect(unit: UnitBasicInfo): CoreLinkBonus {
  return useRecoilValue(atoms.linkBonus(unit.no));
}

export function useAvailableFullLinkBonus(unit: UnitBasicInfo): ReadonlyArray<FullLinkBonus> {
  return unitCoreLinkBonusData[unit.no].full_link_bonus;
}

export function useFullLinkBonus(unit: UnitBasicInfo): [
  selectedBonus: FullLinkBonus | undefined,
  selectBonus: (bonus: FullLinkBonus | undefined) => void,
  available: boolean
] {
  const [coreLink, setCoreLink] = useRecoilState(unitCoreLinkState(unit.no));

  return [
    coreLink.fullLinkBonus,
    (bonus) => setCoreLink(s => bonus ? s.selectFullLinkBonus(bonus) : s.unselectFullLinkBonus()),
    useRecoilValue(atoms.fullLinkAvailable(unit.no))
  ];
}

export function useUnitCoreLinkResolver(): (param: UnitNumber) => RecoilValueReadOnly<UnitCoreLink> {
  return unitCoreLinkState;
}

export function useUnitCoreLinkRestore(): (param: ReadonlyArray<UnitCoreLink>) => void {
  return useSetRecoilState(unitCoreLinkRestore);
}
