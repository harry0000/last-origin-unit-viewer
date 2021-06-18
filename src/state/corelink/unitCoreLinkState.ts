import { atomFamily, DefaultValue, selector, selectorFamily } from 'recoil';
import UnitCoreLink from '../../domain/UnitCoreLink';
import { UnitBasicInfo } from '../../domain/UnitBasicInfo';

import { selectedUnitBasicInfoState } from '../unit/unitSelectorStoreState';
import { unitLvState } from '../status/unitEnhancementStatusState';

import { CoreLinkBonus, FullLinkBonus } from '../../domain/UnitCoreLinkBonusData';

type CoreLinkSlot = 'slot1' | 'slot2' | 'slot3' | 'slot4' | 'slot5'

export const unitCoreLinkState = atomFamily<UnitCoreLink, UnitBasicInfo>({
  key: 'unitCoreLinkState',
  default: (unit) => new UnitCoreLink(unit)
});

export const selectedUnitCoreLinkState = selector<UnitCoreLink | undefined>({
  key: 'selectedUnitCoreLinkState',
  get: ({ get }) => {
    const selected = get(selectedUnitBasicInfoState);
    return selected && get(unitCoreLinkState(selected));
  },
  set: ({ set }, newValue) => {
    if (newValue && !(newValue instanceof DefaultValue)) {
      set(unitCoreLinkState(newValue.unit), newValue);
    }
  }
});

export const linkRateState = selectorFamily<number, CoreLinkSlot | 'summary'>({
  key: 'linkRateState',
  get: (type) => ({ get }) => {
    const coreLink = get(selectedUnitCoreLinkState);
    if (!coreLink) {
      return 0;
    }

    const unitLv = get(unitLvState(coreLink.unit));
    switch (type) {
    case 'slot1': return coreLink.slot1LinkRate(unitLv);
    case 'slot2': return coreLink.slot2LinkRate(unitLv);
    case 'slot3': return coreLink.slot3LinkRate(unitLv);
    case 'slot4': return coreLink.slot4LinkRate(unitLv);
    case 'slot5': return coreLink.slot5LinkRate(unitLv);
    case 'summary': return coreLink.linkRate(unitLv);
    }
  }
});

export const coreLinkSlotAvailable = selectorFamily<boolean, CoreLinkSlot>({
  key: 'coreLinkSlotAvailable',
  get: (slot) => ({ get }) => {
    const coreLink = get(selectedUnitCoreLinkState);
    if (!coreLink) {
      return false;
    }

    const unitLv = get(unitLvState(coreLink.unit));
    switch (slot) {
    case 'slot1': return coreLink.isSlot1Available(unitLv);
    case 'slot2': return coreLink.isSlot2Available(unitLv);
    case 'slot3': return coreLink.isSlot3Available(unitLv);
    case 'slot4': return coreLink.isSlot4Available(unitLv);
    case 'slot5': return coreLink.isSlot5Available(unitLv);
    }
  }
});

export const coreLinkBonusEffectsState = selectorFamily<CoreLinkBonus, UnitBasicInfo>({
  key: 'coreLinkBonusEffectsState',
  get: (unit) => ({ get }) => {
    const coreLink = get(unitCoreLinkState(unit));
    const unitLv = get(unitLvState(unit));
    return coreLink.bonusEffects(unitLv);
  }
});

export const selectedUnitCoreLinkBonusEffectsState = selector<CoreLinkBonus | undefined>({
  key: 'selectedUnitCoreLinkBonusEffectsState',
  get: ({ get }) => {
    const selected = get(selectedUnitBasicInfoState);
    return selected && get(coreLinkBonusEffectsState(selected));
  }
});

export const fullLinkBonusAvailableState = selector<boolean>({
  key: 'fullLinkBonusAvailableState',
  get: ({ get }) => {
    const coreLink = get(selectedUnitCoreLinkState);
    if (!coreLink) {
      return false;
    }

    const unitLv = get(unitLvState(coreLink.unit));
    return coreLink.isFullLinkBonusAvailable(unitLv);
  }
});

export const fullLinkBonusEffectState = selectorFamily<FullLinkBonus | undefined, UnitBasicInfo>({
  key: 'fullLinkBonusEffectState',
  get: (unit) => ({ get }) => {
    const coreLink = get(unitCoreLinkState(unit));
    const unitLv = get(unitLvState(coreLink.unit));
    return coreLink.fullLinkBonusEffect(unitLv);
  }
});

export const selectedUnitFullLinkBonusEffectState = selector<FullLinkBonus | undefined>({
  key: 'selectedUnitFullLinkBonusEffectState',
  get: ({ get }) => {
    const selected = get(selectedUnitBasicInfoState);
    return selected && get(fullLinkBonusEffectState(selected));
  }
});
