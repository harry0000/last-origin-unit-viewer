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

import { unitAffectionState } from '../status/UnitAffectionState';
import { unitCoreLinkState } from '../corelink/UnitCoreLinkState';

type PassiveSkillType = Exclude<SkillType, 'active1' | 'active2'>

const {
  coreLinkBonusEffectsState,
  fullLinkBonusEffectState
} = unitCoreLinkState;

const {
  affectionBonusEffectState
} = unitAffectionState;

class UnitSkillState {
  readonly #skill = atomFamily<UnitSkill, UnitBasicInfo>({
    key: 'unitSkillState_skill',
    default: (unit) => buildUnitSkill(unit)
  });

  readonly #skillEnabled = selectorFamily<boolean, { unit: UnitBasicInfo | undefined, type: PassiveSkillType }>({
    key: 'unitSkillState_skillEnabled',
    get: ({ unit, type }) => ({ get }) => {
      if (!unit) {
        return false;
      }

      const skill = get(this.#skill(unit));
      switch (type) {
      case SkillType.Passive1: return skill.hasPassive1Skill;
      case SkillType.Passive2: return skill.hasPassive2Skill;
      case SkillType.Passive3: return skill.hasPassive3Skill;
      }
    }
  });

  readonly #skillLv = selectorFamily<SkillLv, { unit: UnitBasicInfo, type: SkillType }>({
    key: 'unitSkillState_skillLv',
    get: ({ unit, type }) => ({ get }) => {
      const skill = get(this.#skill(unit));
      switch (type) {
      case SkillType.Active1: return skill.skillLv.active1Lv;
      case SkillType.Active2: return skill.skillLv.active2Lv;
      case SkillType.Passive1: return skill.skillLv.passive1Lv ?? 10;
      case SkillType.Passive2: return skill.skillLv.passive2Lv ?? 10;
      case SkillType.Passive3: return skill.skillLv.passive3Lv ?? 10;
      }
    }
  });

  readonly #isRankUpSkill = selectorFamily<boolean, { unit: UnitBasicInfo, type: SkillType }>({
    key:'unitSkillState_isRankUpSkill',
    get: ({ unit, type }) => ({ get }) => {
      const skill = get(this.#skill(unit));
      switch (type) {
      case SkillType.Passive1: return skill.isPassive1RankUpSkill;
      case SkillType.Passive2: return skill.isPassive2RankUpSkill;
      case SkillType.Passive3: return skill.isPassive3RankUpSkill;
      default: return false;
      }
    }
  });

  readonly #skillForm = selectorFamily<UnitForms | undefined, { unit: UnitBasicInfo, type: SkillType }>({
    key: 'unitSkillState_skillForm',
    get: ({ unit, type }) => ({ get }) => {
      const skill = get(this.#skill(unit));
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

  readonly unitActive1SkillState = selectorFamily<ActiveSkill, UnitBasicInfo>({
    key: 'unitActive1SkillState',
    get: (unit) => ({ get }) => {
      const skill = get(this.#skill(unit));
      const coreLinkBonus  = get(coreLinkBonusEffectsState(unit.no));
      const fullLinkBonus  = get(fullLinkBonusEffectState(unit.no));
      const affectionBonus = get(affectionBonusEffectState(unit));
      return skill.active1Skill(coreLinkBonus, fullLinkBonus, affectionBonus);
    }
  });

  readonly unitActive2SkillState = selectorFamily<ActiveSkill | ActiveSkillAsEquipmentEffect, UnitBasicInfo>({
    key: 'unitActive2SkillState',
    get: (unit) => ({ get }) => {
      const skill = get(this.#skill(unit));
      const coreLinkBonus  = get(coreLinkBonusEffectsState(unit.no));
      const fullLinkBonus  = get(fullLinkBonusEffectState(unit.no));
      const affectionBonus = get(affectionBonusEffectState(unit));
      return skill.active2Skill(coreLinkBonus, fullLinkBonus, affectionBonus);
    }
  });

  readonly unitPassive1SkillState = selectorFamily<PassiveSkill | PassiveSkillAsEquipmentEffect | undefined, UnitBasicInfo>({
    key: 'unitPassive1SkillState',
    get: (unit) => ({ get }) => {
      const skill = get(this.#skill(unit));
      const fullLinkBonus  = get(fullLinkBonusEffectState(unit.no));
      const affectionBonus = get(affectionBonusEffectState(unit));
      return skill.passive1Skill(fullLinkBonus, affectionBonus);
    }
  });

  readonly unitPassive2SkillState = selectorFamily<PassiveSkill | PassiveSkillAsEquipmentEffect | undefined, UnitBasicInfo>({
    key: 'unitPassive2SkillState',
    get: (unit) => ({ get }) => {
      const skill = get(this.#skill(unit));
      const fullLinkBonus  = get(fullLinkBonusEffectState(unit.no));
      const affectionBonus = get(affectionBonusEffectState(unit));
      return skill.passive2Skill(fullLinkBonus, affectionBonus);
    }
  });

  readonly unitPassive3SkillState = selectorFamily<PassiveSkill | PassiveSkillAsEquipmentEffect | undefined, UnitBasicInfo>({
    key: 'unitPassive3SkillState',
    get: (unit) => ({ get }) => {
      const skill = get(this.#skill(unit));
      const fullLinkBonus  = get(fullLinkBonusEffectState(unit.no));
      const affectionBonus = get(affectionBonusEffectState(unit));
      return skill.passive3Skill(fullLinkBonus, affectionBonus);
    }
  });

  readonly unitSkillLvState = (unit: UnitBasicInfo, type: SkillType): RecoilValueReadOnly<SkillLv> =>
    this.#skillLv({ unit, type });

  readonly selectedUnitSkillEnabledState = (unit: UnitBasicInfo | undefined, type: PassiveSkillType): RecoilValueReadOnly<boolean> =>
    this.#skillEnabled({ unit, type });

  readonly isRankUpSkillState = (unit: UnitBasicInfo, type: SkillType): RecoilValueReadOnly<boolean> =>
    this.#isRankUpSkill({ unit, type });

  readonly formChangeUnitSkillState = selectorFamily<FormChangeUnitSkill<FormChangeUnitNumbers> | undefined, UnitBasicInfo | undefined>({
    key: 'formChangeUnitSkillState',
    get: (unit) => ({ get }) => {
      const skill = unit && get(this.#skill(unit));
      return skill && isFormChangeUnitSkill(skill) ? skill : undefined;
    }
  });

  readonly skillFormState = (unit: UnitBasicInfo, type: SkillType): RecoilValueReadOnly<UnitForms | undefined> =>
    this.#skillForm({ unit, type });

  readonly changeSkillLv = (unit: UnitBasicInfo, type: SkillType) => ({ set }: CallbackInterface) => (lv: SkillLv): void => {
    set(this.#skill(unit), s => {
      switch (type) {
      case SkillType.Active1:  return s.changeActive1SkillLv(lv);
      case SkillType.Active2:  return s.changeActive2SkillLv(lv);
      case SkillType.Passive1: return s.changePassive1SkillLv(lv);
      case SkillType.Passive2: return s.changePassive2SkillLv(lv);
      case SkillType.Passive3: return s.changePassive3SkillLv(lv);
      }
    });
  };

  readonly changeForm = (unit: UnitBasicInfo | undefined) => ({ set }: CallbackInterface) => (): void => {
    if (unit) {
      set(this.#skill(unit), s => isFormChangeUnitSkill(s) ? s.changeForm() : s);
    }
  };

  readonly unitSkillResolver = (unit: UnitBasicInfo): RecoilValueReadOnly<UnitSkill> =>
    this.#skill(unit);

  readonly restoreUnitSkill = ({ set }: CallbackInterface) => (states: ReadonlyArray<UnitSkill>): void => {
    states.forEach(s => set(this.#skill(s.unit), s));
  };
}

export const unitSkillState: UnitSkillState = new UnitSkillState();
