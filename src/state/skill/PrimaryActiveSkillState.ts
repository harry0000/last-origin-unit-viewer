import { atomFamily, CallbackInterface, RecoilValueReadOnly } from 'recoil';

import { ActiveSkillType, SkillType } from '../../domain/skill/SkillType';
import PrimaryActiveSkill from '../../domain/skill/PrimaryActiveSkill';
import { UnitNumber } from '../../domain/UnitBasicInfo';

import { getFromSnapshot, getValue, ValueOrUpdater } from '../../util/recoil';

const _primary = atomFamily<PrimaryActiveSkill, UnitNumber>({
  key: 'ActiveSkillPriorityState_primary',
  default: (unit) => new PrimaryActiveSkill(unit)
});

const _primarySkill = atomFamily<ActiveSkillType, UnitNumber>({
  key: 'ActiveSkillPriorityState_primarySkill',
  default: SkillType.Active1
});

function _update(unit: UnitNumber, valueOrUpdater: ValueOrUpdater<PrimaryActiveSkill>): (cbi: CallbackInterface) => void {
  return ({ snapshot, set }) => {
    const get = getFromSnapshot(snapshot);
    const next = getValue(valueOrUpdater, () => get(_primary(unit)));

    set(_primary(unit), next);
    set(_primarySkill(unit), next.primary);
  };
}

export const unitPrimaryActiveSkillState: (unit: UnitNumber) => RecoilValueReadOnly<ActiveSkillType> = _primarySkill;

export const setPrimaryActiveSkill = (unit: UnitNumber, skill: ActiveSkillType) => (cbi: CallbackInterface) => (): void => {
  _update(unit, s => s.setPrimary(skill))(cbi);
};

export const unitPrimaryActiveSkillResolver = (unit: UnitNumber): RecoilValueReadOnly<PrimaryActiveSkill> => _primary(unit);

export const restoreUnitPrimaryActiveSkill = (cbi: CallbackInterface) => (states: ReadonlyArray<PrimaryActiveSkill>): void => {
  states.forEach(s => _update(s.unit, s)(cbi));
};
