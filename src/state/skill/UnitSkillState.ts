import { atomFamily, CallbackInterface, RecoilValueReadOnly, selectorFamily } from 'recoil';

import {
  ActiveSkill,
  ActiveSkillAsEquipmentEffect,
  PassiveSkill,
  PassiveSkillAsEquipmentEffect
} from '../../domain/skill/UnitSkills';
import { FormChangeUnitNumbers, UnitForms } from '../../domain/UnitFormValue';
import {
  FormChangeUnitSkill,
  UnitSkill,
  buildUnitSkill,
  isFormChangeUnitSkill
} from '../../domain/skill/UnitSkill';
import { SkillLv } from '../../domain/skill/UnitSkillLvValue';
import { SkillType } from '../../domain/skill/SkillType';
import { UnitBasicInfo } from '../../domain/UnitBasicInfo';

import { affectionBonusEffectState } from '../status/UnitAffectionState';
import { coreLinkBonusEffectsState, fullLinkBonusEffectState } from '../corelink/UnitCoreLinkState';

type PassiveSkillType = Exclude<SkillType, 'active1' | 'active2'>

const _skill = atomFamily<UnitSkill, UnitBasicInfo>({
  key: 'UnitSkillState_skill',
  default: (unit) => buildUnitSkill(unit)
});

const _skillEnabled = selectorFamily<boolean, { unit: UnitBasicInfo | undefined, type: PassiveSkillType }>({
  key: 'UnitSkillState_skillEnabled',
  get: ({ unit, type }) => ({ get }) => {
    if (!unit) {
      return false;
    }

    const skill = get(_skill(unit));
    switch (type) {
    case SkillType.Passive1: return skill.hasPassive1Skill;
    case SkillType.Passive2: return skill.hasPassive2Skill;
    case SkillType.Passive3: return skill.hasPassive3Skill;
    }
  }
});

const _skillLv = selectorFamily<SkillLv, { unit: UnitBasicInfo, type: SkillType }>({
  key: 'UnitSkillState_skillLv',
  get: ({ unit, type }) => ({ get }) => {
    const skill = get(_skill(unit));
    switch (type) {
    case SkillType.Active1: return skill.skillLv.active1Lv;
    case SkillType.Active2: return skill.skillLv.active2Lv;
    case SkillType.Passive1: return skill.skillLv.passive1Lv ?? 10;
    case SkillType.Passive2: return skill.skillLv.passive2Lv ?? 10;
    case SkillType.Passive3: return skill.skillLv.passive3Lv ?? 10;
    }
  }
});

const _isRankUpSkill = selectorFamily<boolean, { unit: UnitBasicInfo, type: SkillType }>({
  key:'UnitSkillState_isRankUpSkill',
  get: ({ unit, type }) => ({ get }) => {
    const skill = get(_skill(unit));
    switch (type) {
    case SkillType.Passive1: return skill.isPassive1RankUpSkill;
    case SkillType.Passive2: return skill.isPassive2RankUpSkill;
    case SkillType.Passive3: return skill.isPassive3RankUpSkill;
    default: return false;
    }
  }
});

const _skillForm = selectorFamily<UnitForms | undefined, { unit: UnitBasicInfo, type: SkillType }>({
  key: 'UnitSkillState_skillForm',
  get: ({ unit, type }) => ({ get }) => {
    const skill = get(_skill(unit));
    if (!isFormChangeUnitSkill(skill)) {
      return undefined;
    }

    switch (type) {
    case SkillType.Active1:  return skill.hasFormActive1Skill()  ? skill.unitForm() : undefined;
    case SkillType.Active2:  return skill.hasFormActive2Skill()  ? skill.unitForm() : undefined;
    case SkillType.Passive1: return skill.hasFormPassive1Skill() ? skill.unitForm() : undefined;
    case SkillType.Passive2: return skill.hasFormPassive2Skill() ? skill.unitForm() : undefined;
    case SkillType.Passive3: return skill.hasFormPassive3Skill() ? skill.unitForm() : undefined;
    }
  }
});

export const unitActive1SkillState = selectorFamily<ActiveSkill, UnitBasicInfo>({
  key: 'unitActive1SkillState',
  get: (unit) => ({ get }) => {
    const skill = get(_skill(unit));
    const coreLinkBonus  = get(coreLinkBonusEffectsState(unit.no));
    const fullLinkBonus  = get(fullLinkBonusEffectState(unit.no));
    const affectionBonus = get(affectionBonusEffectState(unit));
    return skill.active1Skill(coreLinkBonus, fullLinkBonus, affectionBonus);
  }
});

export const unitActive2SkillState = selectorFamily<ActiveSkill | ActiveSkillAsEquipmentEffect, UnitBasicInfo>({
  key: 'unitActive2SkillState',
  get: (unit) => ({ get }) => {
    const skill = get(_skill(unit));
    const coreLinkBonus  = get(coreLinkBonusEffectsState(unit.no));
    const fullLinkBonus  = get(fullLinkBonusEffectState(unit.no));
    const affectionBonus = get(affectionBonusEffectState(unit));
    return skill.active2Skill(coreLinkBonus, fullLinkBonus, affectionBonus);
  }
});

export const unitPassive1SkillState = selectorFamily<PassiveSkill | PassiveSkillAsEquipmentEffect | undefined, UnitBasicInfo>({
  key: 'unitPassive1SkillState',
  get: (unit) => ({ get }) => {
    const skill = get(_skill(unit));
    const fullLinkBonus  = get(fullLinkBonusEffectState(unit.no));
    const affectionBonus = get(affectionBonusEffectState(unit));
    return skill.passive1Skill(fullLinkBonus, affectionBonus);
  }
});

export const unitPassive2SkillState = selectorFamily<PassiveSkill | PassiveSkillAsEquipmentEffect | undefined, UnitBasicInfo>({
  key: 'unitPassive2SkillState',
  get: (unit) => ({ get }) => {
    const skill = get(_skill(unit));
    const fullLinkBonus  = get(fullLinkBonusEffectState(unit.no));
    const affectionBonus = get(affectionBonusEffectState(unit));
    return skill.passive2Skill(fullLinkBonus, affectionBonus);
  }
});

export const unitPassive3SkillState = selectorFamily<PassiveSkill | PassiveSkillAsEquipmentEffect | undefined, UnitBasicInfo>({
  key: 'unitPassive3SkillState',
  get: (unit) => ({ get }) => {
    const skill = get(_skill(unit));
    const fullLinkBonus  = get(fullLinkBonusEffectState(unit.no));
    const affectionBonus = get(affectionBonusEffectState(unit));
    return skill.passive3Skill(fullLinkBonus, affectionBonus);
  }
});

export const unitSkillLvState = (unit: UnitBasicInfo, type: SkillType): RecoilValueReadOnly<SkillLv> =>
  _skillLv({ unit, type });

export const selectedUnitSkillEnabledState = (unit: UnitBasicInfo | undefined, type: PassiveSkillType): RecoilValueReadOnly<boolean> =>
  _skillEnabled({ unit, type });

export const isRankUpSkillState = (unit: UnitBasicInfo, type: SkillType): RecoilValueReadOnly<boolean> =>
  _isRankUpSkill({ unit, type });

export const formChangeUnitSkillState = selectorFamily<FormChangeUnitSkill<FormChangeUnitNumbers> | undefined, UnitBasicInfo | undefined>({
  key: 'formChangeUnitSkillState',
  get: (unit) => ({ get }) => {
    const skill = unit && get(_skill(unit));
    return skill && isFormChangeUnitSkill(skill) ? skill : undefined;
  }
});

export const skillFormState = (unit: UnitBasicInfo, type: SkillType): RecoilValueReadOnly<UnitForms | undefined> =>
  _skillForm({ unit, type });

export const changeSkillLv = (unit: UnitBasicInfo, type: SkillType) => ({ set }: CallbackInterface) => (lv: SkillLv): void => {
  set(_skill(unit), s => {
    switch (type) {
    case SkillType.Active1:  return s.changeActive1SkillLv(lv);
    case SkillType.Active2:  return s.changeActive2SkillLv(lv);
    case SkillType.Passive1: return s.changePassive1SkillLv(lv);
    case SkillType.Passive2: return s.changePassive2SkillLv(lv);
    case SkillType.Passive3: return s.changePassive3SkillLv(lv);
    }
  });
};

export const changeForm = (unit: UnitBasicInfo | undefined) => ({ set }: CallbackInterface) => (): void => {
  if (unit) {
    set(_skill(unit), s => isFormChangeUnitSkill(s) ? s.changeForm() : s);
  }
};

export const unitSkillResolver = (unit: UnitBasicInfo): RecoilValueReadOnly<UnitSkill> =>
  _skill(unit);

export const restoreUnitSkill = ({ set }: CallbackInterface) => (states: ReadonlyArray<UnitSkill>): void => {
  states.forEach(s => set(_skill(s.unit), s));
};
