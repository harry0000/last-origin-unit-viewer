import { atomFamily, DefaultValue, selector, selectorFamily } from 'recoil';
import {
  ActiveSkill,
  Passive1Skill,
  Passive2Skill,
  Passive3Skill
} from '../../domain/skill/UnitSkills';
import { UnitBasicInfo } from '../../domain/UnitBasicInfo';
import { UnitSkill, buildUnit } from '../../domain/skill/UnitSkill';

import { coreLinkBonusEffectsState, fullLinkBonusEffectState } from '../corelink/unitCoreLinkState';
import { selectedUnitBasicInfoState } from '../selector/unitSelectorState';

export const unitSkillState = atomFamily<UnitSkill, UnitBasicInfo>({
  key: 'unitSkillState',
  default: (unit) => buildUnit(unit)
});

export const selectedUnitSkillState = selector<UnitSkill | undefined>({
  key: 'selectedUnitSkillState',
  get: ({ get }) => {
    const selected = get(selectedUnitBasicInfoState);
    return selected && get(unitSkillState(selected));
  },
  set: ({ set }, newValue) => {
    if (newValue && !(newValue instanceof DefaultValue)) {
      set(unitSkillState(newValue.unit), newValue);
    }
  }
});

export const unitActive1SkillState = selectorFamily<ActiveSkill, UnitBasicInfo>({
  key: 'unitActive1SkillState',
  get: (unit) => ({ get }) => {
    const skill = get(unitSkillState(unit));
    const coreLinkBonus = get(coreLinkBonusEffectsState(unit.no));
    const fullLinkBonus = get(fullLinkBonusEffectState(unit.no));
    return skill.active1Skill(coreLinkBonus, fullLinkBonus);
  }
});

export const unitActive2SkillState = selectorFamily<ActiveSkill, UnitBasicInfo>({
  key: 'unitActive2SkillState',
  get: (unit) => ({ get }) => {
    const skill = get(unitSkillState(unit));
    const coreLinkBonus = get(coreLinkBonusEffectsState(unit.no));
    const fullLinkBonus = get(fullLinkBonusEffectState(unit.no));
    return skill.active2Skill(coreLinkBonus, fullLinkBonus);
  }
});

export const unitPassive1SkillState = selectorFamily<Passive1Skill | undefined, UnitBasicInfo>({
  key: 'unitPassive1SkillState',
  get: (unit) => ({ get }) => {
    const skill = get(unitSkillState(unit));
    const bonus = get(fullLinkBonusEffectState(unit.no));
    return skill.passive1Skill(bonus);
  }
});

export const unitPassive2SkillState = selectorFamily<Passive2Skill | undefined, UnitBasicInfo>({
  key: 'unitPassive2SkillState',
  get: (unit) => ({ get }) => {
    const skill = get(unitSkillState(unit));
    const bonus = get(fullLinkBonusEffectState(unit.no));
    return skill.passive2Skill(bonus);
  }
});

export const unitPassive3SkillState = selectorFamily<Passive3Skill | undefined, UnitBasicInfo>({
  key: 'unitPassive3SkillState',
  get: (unit) => ({ get }) => {
    const skill = get(unitSkillState(unit));
    const bonus = get(fullLinkBonusEffectState(unit.no));
    return skill.passive3Skill(bonus);
  }
});

export const selectedUnitActive1SkillState = selector<ActiveSkill | undefined>({
  key: 'selectedUnitActive1SkillState',
  get: ({ get }) => {
    const selected = get(selectedUnitBasicInfoState);
    return selected && get(unitActive1SkillState(selected));
  }
});

export const selectedUnitActive2SkillState = selector<ActiveSkill | undefined>({
  key: 'selectedUnitActive2SkillState',
  get: ({ get }) => {
    const selected = get(selectedUnitBasicInfoState);
    return selected && get(unitActive2SkillState(selected));
  }
});

export const selectedUnitPassive1SkillState = selector<Passive1Skill | undefined>({
  key: 'selectedUnitPassive1SkillState',
  get: ({ get }) => {
    const selected = get(selectedUnitBasicInfoState);
    return selected && get(unitPassive1SkillState(selected));
  }
});

export const selectedUnitPassive2SkillState = selector<Passive2Skill | undefined>({
  key: 'selectedUnitPassive2SkillState',
  get: ({ get }) => {
    const selected = get(selectedUnitBasicInfoState);
    return selected && get(unitPassive2SkillState(selected));
  }
});

export const selectedUnitPassive3SkillState = selector<Passive3Skill | undefined>({
  key: 'selectedUnitPassive3SkillState',
  get: ({ get }) => {
    const selected = get(selectedUnitBasicInfoState);
    return selected && get(unitPassive3SkillState(selected));
  }
});
