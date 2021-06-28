import { useRecoilState, useRecoilValue } from 'recoil';
import { useTranslation } from 'react-i18next';

import { selectedUnitBasicInfoState } from '../../state/selector/unitSelectorState';
import {
  selectedUnitActive1SkillState,
  selectedUnitActive2SkillState,
  selectedUnitSkillState,
  unitPassive1SkillState,
  unitPassive2SkillState,
  unitPassive3SkillState, unitSkillState
} from '../../state/skill/unitSkillState';

import { SkillApCostValue, SkillRangeValue } from '../../domain/skill/UnitSkillData';
import { SkillLv } from '../../domain/skill/UnitSkillLvValue';
import { SkillType } from '../../component/skill/UnitSkillList';
import { UnitForms } from '../../domain/UnitFormValue';
import { isFormChangeUnitSkill } from '../../domain/skill/UnitSkill';

export function useSkillName(skillType: SkillType): string | undefined {
  const { t } = useTranslation();
  const selected = useRecoilValue(selectedUnitBasicInfoState);
  if (!selected) {
    return undefined;
  }

  const skill = useRecoilValue(unitSkillState(selected));
  const unit = selected.no;
  switch (skillType) {
  case 'active1':
    return isFormChangeUnitSkill(skill) && skill.hasFormActive1Skill() ?
      t('skill:form_active', { unit, no: 1, form: skill.unitForm() }) :
      t('skill:active', { unit, no: 1 });
  case 'active2':
    return isFormChangeUnitSkill(skill) && skill.hasFormActive2Skill() ?
      t('skill:form_active', { unit, no: 2, form: skill.unitForm() }) :
      t('skill:active', { unit, no: 2 });
  case 'passive1': {
    const ps = useRecoilValue(unitPassive1SkillState(selected));
    return ps ?
      isFormChangeUnitSkill(skill) && skill.hasFormPassive1Skill() ?
        t('skill:form_passive', { unit, no: 1, form: skill.unitForm() }) :
        t('skill:passive', { unit, no: 1 }) :
      undefined;
  }
  case 'passive2': {
    const ps = useRecoilValue(unitPassive2SkillState(selected));
    return ps ?
      isFormChangeUnitSkill(skill) && skill.hasFormPassive2Skill() ?
        t('skill:form_passive', { unit, no: 2, form: skill.unitForm() }) :
        t('skill:passive', { unit, no: 2 }) :
      undefined;
  }
  case 'passive3': {
    const ps = useRecoilValue(unitPassive3SkillState(selected));
    return ps ?
      isFormChangeUnitSkill(skill) && skill.hasFormPassive3Skill() ?
        t('skill:form_passive', { unit, no: 3, form: skill.unitForm() }) :
        t('skill:passive', { unit, no: 3 }) :
      undefined;
  }
  }
}

export function useSkillCost(skillType: SkillType): SkillApCostValue | string {
  const { t } = useTranslation('common');

  switch (skillType) {
  case 'active1':
    return useRecoilValue(selectedUnitActive1SkillState)?.cost ?? t('empty') as string;
  case 'active2':
    return useRecoilValue(selectedUnitActive2SkillState)?.cost ?? t('empty') as string;
  case 'passive1':
  case 'passive2':
  case 'passive3':
    return t('empty') as string;
  }
}

export function useSkillRange(skillType: SkillType): SkillRangeValue | string {
  const { t } = useTranslation('common');

  switch (skillType) {
  case 'active1':
    return useRecoilValue(selectedUnitActive1SkillState)?.range ?? t('empty') as string;
  case 'active2':
    return useRecoilValue(selectedUnitActive2SkillState)?.range ?? t('empty') as string;
  case 'passive1':
  case 'passive2':
  case 'passive3':
    return t('empty') as string;
  }
}

export function useRankUpSkillBadge(skillType: SkillType): boolean {
  const skill = useRecoilValue(selectedUnitSkillState);

  switch (skillType) {
  case 'passive1':
    return skill?.isPassive1RankUpSkill ?? false;
  case 'passive2':
    return skill?.isPassive2RankUpSkill ?? false;
  case 'passive3':
    return skill?.isPassive3RankUpSkill ?? false;
  case 'active1':
  case 'active2':
    return false;
  }
}

export function useFormChangeSkillBadge(skillType: SkillType): UnitForms | undefined {
  const skill = useRecoilValue(selectedUnitSkillState);
  if (!skill) {
    return undefined;
  }

  switch (skillType) {
  case 'active1':
    return isFormChangeUnitSkill(skill) && skill.hasFormActive1Skill() ? skill.unitForm() : undefined;
  case 'active2':
    return isFormChangeUnitSkill(skill) && skill.hasFormActive2Skill() ? skill.unitForm() : undefined;
  case 'passive1':
    return isFormChangeUnitSkill(skill) && skill.hasFormPassive1Skill() ? skill.unitForm() : undefined;
  case 'passive2':
    return isFormChangeUnitSkill(skill) && skill.hasFormPassive2Skill() ? skill.unitForm() : undefined;
  case 'passive3':
    return isFormChangeUnitSkill(skill) && skill.hasFormPassive3Skill() ? skill.unitForm() : undefined;
  }
}

export function useSkillLvState(skillType: SkillType): [skillLv: SkillLv, setSkillLv: (skillLv: SkillLv) => void] {
  const [skill, setSkill] = useRecoilState(selectedUnitSkillState);

  switch (skillType) {
  case 'active1': return [skill?.skillLv.active1Lv ?? 10, (lv) => setSkill(s => s?.changeActive1SkillLv(lv))];
  case 'active2': return [skill?.skillLv.active2Lv ?? 10, (lv) => setSkill(s => s?.changeActive2SkillLv(lv))];
  case 'passive1': return [skill?.skillLv.passive1Lv ?? 10, (lv) => setSkill(s => s?.changePassive1SkillLv(lv))];
  case 'passive2': return [skill?.skillLv.passive2Lv ?? 10, (lv) => setSkill(s => s?.changePassive2SkillLv(lv))];
  case 'passive3': return [skill?.skillLv.passive3Lv ?? 10, (lv) => setSkill(s => s?.changePassive3SkillLv(lv))];
  }
}
