import { atomFamily, CallbackInterface, RecoilValueReadOnly } from 'recoil';
import deepEqual from 'fast-deep-equal';

import { CoreLinkBonus, FullLinkBonus } from '../../domain/UnitCoreLinkBonusData';
import UnitCoreLink, { CoreLinkCount, CoreLinkUnit } from '../../domain/UnitCoreLink';
import { UnitLvValue } from '../../domain/status/UnitLv';
import { UnitNumber } from '../../domain/UnitBasicInfo';

import { unitLvStatusState } from '../status/parameters/UnitLvStatusState';

import { isUpdater, ValueOrUpdater } from '../../util/recoil';

export type CoreLinkSlot = 'slot1' | 'slot2' | 'slot3' | 'slot4' | 'slot5'

function createLinkedUnit(slot: CoreLinkSlot) {
  return atomFamily<CoreLinkUnit | undefined, UnitNumber>({
    key: `unitCoreLinkState_linkedUnit_${slot}`,
    default: undefined
  });
}

function createSlotAvailable(slot: CoreLinkSlot) {
  return atomFamily<boolean, UnitNumber>({
    key: `unitCoreLinkState_slotAvailable_${slot}`,
    default: false
  });
}

class UnitCoreLinkState {
  readonly #unitCoreLink = atomFamily<UnitCoreLink, UnitNumber>({
    key: 'unitCoreLinkState_unitCoreLink',
    default: (unit) => new UnitCoreLink(unit)
  });

  readonly #linkRate = atomFamily<number, UnitNumber>({ key: 'unitCoreLinkState_linkRate', default: 0 });
  readonly #linkCount = atomFamily<CoreLinkCount, UnitNumber>({ key: 'unitCoreLinkState_linkCount', default: 0 });
  readonly #linkedUnit = {
    slot1: createLinkedUnit('slot1'),
    slot2: createLinkedUnit('slot2'),
    slot3: createLinkedUnit('slot3'),
    slot4: createLinkedUnit('slot4'),
    slot5: createLinkedUnit('slot5')
  };
  readonly #slotAvailable = {
    slot1: createSlotAvailable('slot1'),
    slot2: createSlotAvailable('slot2'),
    slot3: createSlotAvailable('slot3'),
    slot4: createSlotAvailable('slot4'),
    slot5: createSlotAvailable('slot5')
  };
  readonly #linkBonus = atomFamily<CoreLinkBonus, UnitNumber>({
    key: 'unitCoreLinkState_linkBonus',
    default: (unit) => UnitCoreLink.emptyBonus(unit)
  });
  readonly #fullLinkAvailable = atomFamily<boolean, UnitNumber>({
    key: 'unitCoreLinkState_fullLinkAvailable',
    default: false
  });
  readonly #selectedFullLinkBonus = atomFamily<FullLinkBonus | undefined, UnitNumber>({
    key: 'unitCoreLinkState_selectedFullLinkBonus',
    default: undefined
  });
  readonly #fullLinkBonus = atomFamily<FullLinkBonus | undefined, UnitNumber>({
    key: 'unitCoreLinkState_fullLinkBonus',
    default: undefined
  });

  #update(unit: UnitNumber, lv: UnitLvValue, valueOrUpdater: ValueOrUpdater<UnitCoreLink>): (cbi: CallbackInterface) => void {
    return ({ snapshot, set }) => {
      const newValue =
        isUpdater(valueOrUpdater) ?
          valueOrUpdater(snapshot.getLoadable(this.#unitCoreLink(unit)).getValue()) :
          valueOrUpdater;

      const prevBonus = snapshot.getLoadable(this.#linkBonus(unit)).getValue();
      const linkBonus = newValue.bonusEffects(lv);
      if (!deepEqual(prevBonus, linkBonus)) {
        set(this.#linkBonus(unit), linkBonus);
      }

      const updateLinkedUnit = (slot: CoreLinkSlot): void => {
        const prevLinkedUnit = snapshot.getLoadable(this.#linkedUnit[slot](unit)).getValue();
        const newLinkedUnit  = newValue[slot];

        if (!deepEqual(prevLinkedUnit, newLinkedUnit)) {
          set(this.#linkedUnit[slot](unit), newLinkedUnit);
        }
      };

      updateLinkedUnit('slot1');
      updateLinkedUnit('slot2');
      updateLinkedUnit('slot3');
      updateLinkedUnit('slot4');
      updateLinkedUnit('slot5');

      set(this.#slotAvailable.slot1(unit), newValue.isSlot1Available(lv));
      set(this.#slotAvailable.slot2(unit), newValue.isSlot2Available(lv));
      set(this.#slotAvailable.slot3(unit), newValue.isSlot3Available(lv));
      set(this.#slotAvailable.slot4(unit), newValue.isSlot4Available(lv));
      set(this.#slotAvailable.slot5(unit), newValue.isSlot5Available(lv));
      set(this.#linkRate(unit), newValue.linkRate(lv));
      set(this.#linkCount(unit), newValue.linkCount(lv));

      set(this.#selectedFullLinkBonus(unit), newValue.fullLinkBonus);
      set(this.#fullLinkBonus(unit), newValue.fullLinkBonusEffect(lv));
      set(this.#fullLinkAvailable(unit), newValue.isFullLinkBonusAvailable(lv));

      set(this.#unitCoreLink(unit), newValue);
    };
  }

  readonly linkedUnitState = (unit: UnitNumber, slot: CoreLinkSlot): RecoilValueReadOnly<CoreLinkUnit | undefined> => this.#linkedUnit[slot](unit);
  readonly coreLinkSlotAvailableState = (unit: UnitNumber, slot: CoreLinkSlot): RecoilValueReadOnly<boolean> => this.#slotAvailable[slot](unit);
  readonly coreLinkRateState = (unit: UnitNumber): RecoilValueReadOnly<number> => this.#linkRate(unit);
  readonly coreLinkCountState = (unit: UnitNumber): RecoilValueReadOnly<CoreLinkCount> => this.#linkCount(unit);

  readonly selectedFullLinkBonus = (unit: UnitNumber): RecoilValueReadOnly<FullLinkBonus | undefined> => this.#selectedFullLinkBonus(unit);
  readonly fullLinkAvailableState = (unit: UnitNumber): RecoilValueReadOnly<boolean> => this.#fullLinkAvailable(unit);

  readonly coreLinkBonusEffectsState = (unit: UnitNumber): RecoilValueReadOnly<CoreLinkBonus> => this.#linkBonus(unit);
  readonly fullLinkBonusEffectState = (unit: UnitNumber): RecoilValueReadOnly<FullLinkBonus | undefined> => this.#fullLinkBonus(unit);

  readonly linkSlot = (unit: UnitNumber, slot: CoreLinkSlot) => (cbi: CallbackInterface) => (linkUnit: CoreLinkUnit | undefined): void => {
    const lv = cbi.snapshot.getLoadable(unitLvStatusState.lvValueState(unit)).getValue();
    this.#update(
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

  readonly selectFullLinkBonus = (unit: UnitNumber) => (cbi: CallbackInterface) => (bonus: FullLinkBonus | undefined): void => {
    const lv = cbi.snapshot.getLoadable(unitLvStatusState.lvValueState(unit)).getValue();
    this.#update(
      unit,
      lv,
      s => bonus ? s.selectFullLinkBonus(bonus) : s.unselectFullLinkBonus()
    )(cbi);
  };

  readonly unitCoreLinkResolver = (unit: UnitNumber): RecoilValueReadOnly<UnitCoreLink> => this.#unitCoreLink(unit);

  readonly restoreUnitCoreLink = (cbi: CallbackInterface) => (states: ReadonlyArray<UnitCoreLink>): void => {
    const { snapshot } = cbi;
    states.forEach(s => {
      const lv = snapshot.getLoadable(unitLvStatusState.lvValueState(s.unit)).getValue();
      this.#update(s.unit, lv, s)(cbi);
    });
  };

  readonly updateUnitLvValue = (unit: UnitNumber, lv: UnitLvValue) => (cbi: CallbackInterface): void => {
    const coreLink = cbi.snapshot.getLoadable(this.#unitCoreLink(unit)).getValue();
    this.#update(unit, lv, coreLink)(cbi);
  };
}

export const unitCoreLinkState: UnitCoreLinkState = new UnitCoreLinkState();
