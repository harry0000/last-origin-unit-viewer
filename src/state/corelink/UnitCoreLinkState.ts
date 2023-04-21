import { atomFamily, CallbackInterface, RecoilValueReadOnly } from 'recoil';
import deepEqual from 'fast-deep-equal';

import { CoreLinkBonus, FullLinkBonus } from '../../domain/UnitCoreLinkBonusData';
import UnitCoreLink, { CoreLinkCount, CoreLinkUnit } from '../../domain/UnitCoreLink';
import { UnitLvValue } from '../../domain/status/UnitLv';
import { UnitNumber } from '../../domain/UnitBasicInfo';

import { lvValueState } from '../status/parameters/UnitLvStatusState';
import { updateUnitCoreLinkDependency } from '../transaction';

import { getFromSnapshot, getValue, ValueOrUpdater } from '../../util/recoil';

export type CoreLinkSlot = 'slot1' | 'slot2' | 'slot3' | 'slot4' | 'slot5'

function createLinkedUnit(slot: CoreLinkSlot) {
  return atomFamily<CoreLinkUnit | undefined, UnitNumber>({
    key: `UnitCoreLinkState_linkedUnit_${slot}`,
    default: undefined
  });
}

function createSlotAvailable(slot: CoreLinkSlot) {
  return atomFamily<boolean, UnitNumber>({
    key: `UnitCoreLinkState_slotAvailable_${slot}`,
    default: true
  });
}

const _unitCoreLink = atomFamily<UnitCoreLink, UnitNumber>({
  key: 'UnitCoreLinkState_unitCoreLink',
  default: (unit) => new UnitCoreLink(unit)
});

const _linkRate = atomFamily<number, UnitNumber>({ key: 'UnitCoreLinkState_linkRate', default: 0 });
const _linkCount = atomFamily<CoreLinkCount, UnitNumber>({ key: 'UnitCoreLinkState_linkCount', default: 0 });
const _linkedUnit = {
  slot1: createLinkedUnit('slot1'),
  slot2: createLinkedUnit('slot2'),
  slot3: createLinkedUnit('slot3'),
  slot4: createLinkedUnit('slot4'),
  slot5: createLinkedUnit('slot5')
};
const _slotAvailable = {
  slot1: createSlotAvailable('slot1'),
  slot2: createSlotAvailable('slot2'),
  slot3: createSlotAvailable('slot3'),
  slot4: createSlotAvailable('slot4'),
  slot5: createSlotAvailable('slot5')
};
const _linkBonus = atomFamily<CoreLinkBonus, UnitNumber>({
  key: 'UnitCoreLinkState_linkBonus',
  default: (unit) => UnitCoreLink.emptyBonus(unit)
});
const _fullLinkAvailable = atomFamily<boolean, UnitNumber>({
  key: 'UnitCoreLinkState_fullLinkAvailable',
  default: false
});
const _selectedFullLinkBonus = atomFamily<FullLinkBonus | undefined, UnitNumber>({
  key: 'UnitCoreLinkState_selectedFullLinkBonus',
  default: undefined
});
const _fullLinkBonus = atomFamily<FullLinkBonus | undefined, UnitNumber>({
  key: 'UnitCoreLinkState_fullLinkBonus',
  default: undefined
});

function _update(unit: UnitNumber, lv: UnitLvValue, valueOrUpdater: ValueOrUpdater<UnitCoreLink>): (cbi: CallbackInterface) => void {
  return (cbi) => {
    const set = cbi.set;
    const get = getFromSnapshot(cbi.snapshot);
    const prevValue = get(_unitCoreLink(unit));
    const nextValue = getValue(valueOrUpdater, () => prevValue);

    const prevBonus = get(_linkBonus(unit));
    const linkBonus = nextValue.bonusEffects(lv);
    if (!deepEqual(prevBonus, linkBonus)) {
      set(_linkBonus(unit), linkBonus);
    }

    const updateLinkedUnit = (slot: CoreLinkSlot): void => {
      const prevLinkedUnit = get(_linkedUnit[slot](unit));
      const newLinkedUnit  = nextValue[slot];

      if (!deepEqual(prevLinkedUnit, newLinkedUnit)) {
        set(_linkedUnit[slot](unit), newLinkedUnit);
      }
    };

    updateLinkedUnit('slot1');
    updateLinkedUnit('slot2');
    updateLinkedUnit('slot3');
    updateLinkedUnit('slot4');
    updateLinkedUnit('slot5');

    set(_slotAvailable.slot1(unit), nextValue.isSlot1Available(lv));
    set(_slotAvailable.slot2(unit), nextValue.isSlot2Available(lv));
    set(_slotAvailable.slot3(unit), nextValue.isSlot3Available(lv));
    set(_slotAvailable.slot4(unit), nextValue.isSlot4Available(lv));
    set(_slotAvailable.slot5(unit), nextValue.isSlot5Available(lv));
    set(_linkRate(unit), nextValue.linkRate(lv));
    set(_linkCount(unit), nextValue.linkCount(lv));

    set(_selectedFullLinkBonus(unit), nextValue.fullLinkBonus);
    set(_fullLinkBonus(unit), nextValue.fullLinkBonusEffect(lv));
    set(_fullLinkAvailable(unit), nextValue.isFullLinkBonusAvailable(lv));

    set(_unitCoreLink(unit), nextValue);

    if (nextValue !== prevValue) {
      updateUnitCoreLinkDependency(nextValue)(cbi);
    }
  };
}

export const linkedUnitState = (unit: UnitNumber, slot: CoreLinkSlot): RecoilValueReadOnly<CoreLinkUnit | undefined> => _linkedUnit[slot](unit);
export const coreLinkSlotAvailableState = (unit: UnitNumber, slot: CoreLinkSlot): RecoilValueReadOnly<boolean> => _slotAvailable[slot](unit);
export const coreLinkRateState = (unit: UnitNumber): RecoilValueReadOnly<number> => _linkRate(unit);
export const coreLinkCountState = (unit: UnitNumber): RecoilValueReadOnly<CoreLinkCount> => _linkCount(unit);

export const selectedFullLinkBonus = (unit: UnitNumber): RecoilValueReadOnly<FullLinkBonus | undefined> => _selectedFullLinkBonus(unit);
export const fullLinkAvailableState = (unit: UnitNumber): RecoilValueReadOnly<boolean> => _fullLinkAvailable(unit);

export const coreLinkBonusEffectsState = (unit: UnitNumber): RecoilValueReadOnly<CoreLinkBonus> => _linkBonus(unit);
export const fullLinkBonusEffectState = (unit: UnitNumber): RecoilValueReadOnly<FullLinkBonus | undefined> => _fullLinkBonus(unit);

export const linkSlot = (unit: UnitNumber, slot: CoreLinkSlot) => (cbi: CallbackInterface) => (linkUnit: CoreLinkUnit | undefined): void => {
  const lv = cbi.snapshot.getLoadable(lvValueState(unit)).getValue();
  _update(
    unit,
    lv,
    s => {
      switch (slot) {
      case 'slot1': return linkUnit ? s.linkSlot1(linkUnit) : s.unlinkSlot1();
      case 'slot2': return linkUnit ? s.linkSlot2(linkUnit) : s.unlinkSlot2();
      case 'slot3': return linkUnit ? s.linkSlot3(linkUnit) : s.unlinkSlot3();
      case 'slot4': return linkUnit ? s.linkSlot4(linkUnit) : s.unlinkSlot4();
      case 'slot5': return linkUnit ? s.linkSlot5(linkUnit) : s.unlinkSlot5();
      }
    }
  )(cbi);
};

export const selectFullLinkBonus = (unit: UnitNumber) => (cbi: CallbackInterface) => (bonus: FullLinkBonus | undefined): void => {
  const lv = cbi.snapshot.getLoadable(lvValueState(unit)).getValue();
  _update(
    unit,
    lv,
    s => bonus ? s.selectFullLinkBonus(bonus) : s.unselectFullLinkBonus()
  )(cbi);
};

export const unitCoreLinkResolver = (unit: UnitNumber): RecoilValueReadOnly<UnitCoreLink> => _unitCoreLink(unit);

export const restoreUnitCoreLink = (cbi: CallbackInterface) => (states: ReadonlyArray<UnitCoreLink>): void => {
  const get = getFromSnapshot(cbi.snapshot);
  states.forEach(s => {
    const lv = get(lvValueState(s.unit));
    _update(s.unit, lv, s)(cbi);
  });
};

export const updateUnitLvValue = (unit: UnitNumber, lv: UnitLvValue) => (cbi: CallbackInterface): void => {
  const coreLink = cbi.snapshot.getLoadable(_unitCoreLink(unit)).getValue();
  _update(unit, lv, coreLink)(cbi);
};
