import { useRecoilCallback, useRecoilValue } from 'recoil';

import { CoreLinkBonus, FullLinkBonus } from '../../domain/UnitCoreLinkBonusData';
import { UnitBasicInfo } from '../../domain/UnitBasicInfo';
import UnitCoreLink, { CoreLinkSlotAvailableLv, CoreLinkUnit } from '../../domain/UnitCoreLink';

import { CoreLinkSlot, unitCoreLinkState } from './UnitCoreLinkState';

import { unitCoreLinkBonusData } from '../../data/unitCoreLinkBonusData';

export function useCoreLinkRate({ no }: UnitBasicInfo): number {
  return useRecoilValue(unitCoreLinkState.coreLinkRateState(no));
}

export function useAvailableCoreLinkUnit({ no }: UnitBasicInfo): ReturnType<typeof UnitCoreLink.getCoreLinkUnits> {
  return UnitCoreLink.getCoreLinkUnits(no);
}

export function useUnitCoreLink({ no }: UnitBasicInfo, slot: CoreLinkSlot): [
  linkedUnit: CoreLinkUnit | undefined,
  linkSlot: (unit: CoreLinkUnit | undefined) => void,
  available: boolean,
  availableLv: CoreLinkSlotAvailableLv
] {
  const {
    linkedUnitState,
    coreLinkSlotAvailableState,
    linkSlot
  } = unitCoreLinkState;
  const linkedUnit = useRecoilValue(linkedUnitState(no, slot));
  const available = useRecoilValue(coreLinkSlotAvailableState(no, slot));
  const callback = useRecoilCallback(linkSlot(no, slot));

  switch (slot) {
  case 'slot1': return [linkedUnit, callback, available, UnitCoreLink.slot1AvailableLv];
  case 'slot2': return [linkedUnit, callback, available, UnitCoreLink.slot2AvailableLv];
  case 'slot3': return [linkedUnit, callback, available, UnitCoreLink.slot3AvailableLv];
  case 'slot4': return [linkedUnit, callback, available, UnitCoreLink.slot4AvailableLv];
  case 'slot5': return [linkedUnit, callback, available, UnitCoreLink.slot5AvailableLv];
  }
}

export function useCoreLinkEffect({ no }: UnitBasicInfo): CoreLinkBonus {
  return useRecoilValue(unitCoreLinkState.coreLinkBonusEffectsState(no));
}

export function useAvailableFullLinkBonus({ no }: UnitBasicInfo): ReadonlyArray<FullLinkBonus> {
  return unitCoreLinkBonusData[no].full_link_bonus;
}

export function useFullLinkBonus({ no }: UnitBasicInfo): [
  selectedBonus: FullLinkBonus | undefined,
  selectBonus: (bonus: FullLinkBonus | undefined) => void,
  available: boolean
] {
  return [
    useRecoilValue(unitCoreLinkState.selectedFullLinkBonus(no)),
    useRecoilCallback(unitCoreLinkState.selectFullLinkBonus(no)),
    useRecoilValue(unitCoreLinkState.fullLinkAvailableState(no))
  ];
}
