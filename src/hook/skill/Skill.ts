import { useRecoilState, useRecoilValue } from 'recoil';
import { useTranslation } from 'react-i18next';

import { selectedUnitSkillState } from '../../state/skill/unitSkillState';

import { SkillApCostValue, SkillRangeValue } from '../../domain/UnitSkillData';
import { SkillLv } from '../../domain/UnitSkillLvValue';
import { SkillType } from '../../component/skill/UnitSkillList';
import { UnitForms } from '../../domain/UnitFormValue';

export function useSkillName(skillType: SkillType): string | undefined {
  const { t } = useTranslation();
  const skill = useRecoilValue(selectedUnitSkillState);
  if (!skill) {
    return undefined;
  }

  const unit = skill.unit.no;
  switch (skillType) {
  case 'active1':
    return 'form' in skill.active1Skill ?
      t('skill:form_active', { unit, no: 1, form: skill.active1Skill.form }) :
      t('skill:active', { unit, no: 1 });
  case 'active2':
    return 'form' in skill.active2Skill ?
      t('skill:form_active', { unit, no: 2, form: skill.active2Skill.form }) :
      t('skill:active', { unit, no: 2 });
  case 'passive1':
    return skill.passive1Skill ?
      'form' in skill.passive1Skill ?
        t('skill:form_passive', { unit, no: 1, form: skill.passive1Skill.form }) :
        t('skill:passive', { unit, no: 1 }) :
      undefined;
  case 'passive2':
    return skill.passive2Skill ?
      'form' in skill.passive2Skill ?
        t('skill:form_passive', { unit, no: 2, form: skill.passive2Skill.form }) :
        t('skill:passive', { unit, no: 2 }) :
      undefined;
  case 'passive3':
    return skill.passive3Skill ?
      'form' in skill.passive3Skill ?
        t('skill:form_passive', { unit, no: 3, form: skill.passive3Skill.form }) :
        t('skill:passive', { unit, no: 3 }) :
      undefined;
  }
}

export function useSkillCost(skillType: SkillType): SkillApCostValue | string {
  const { t } = useTranslation('common');
  const skill = useRecoilValue(selectedUnitSkillState);

  switch (skillType) {
  case 'active1':
    return skill?.active1Skill?.cost ?? t('empty') as string;
  case 'active2':
    return skill?.active2Skill?.cost ?? t('empty') as string;
  case 'passive1':
  case 'passive2':
  case 'passive3':
    return t('empty') as string;
  }
}

export function useSkillRange(skillType: SkillType): SkillRangeValue | string {
  const { t } = useTranslation('common');
  const skill = useRecoilValue(selectedUnitSkillState);

  switch (skillType) {
  case 'active1':
    return skill?.active1Skill?.range ?? t('empty') as string;
  case 'active2':
    return skill?.active2Skill?.range ?? t('empty') as string;
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
    return skill?.passive1Skill?.rank_up ?? false;
  case 'passive2':
    return skill?.passive2Skill?.rank_up ?? false;
  case 'passive3':
    return skill?.passive3Skill?.rank_up ?? false;
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
    return 'form' in skill.active1Skill ? skill.active1Skill.form : undefined;
  case 'active2':
    return 'form' in skill.active2Skill ? skill.active2Skill.form : undefined;
  case 'passive1':
    return skill.passive1Skill && 'form' in skill.passive1Skill ? skill.passive1Skill.form : undefined;
  case 'passive2':
    return skill.passive2Skill && 'form' in skill.passive2Skill ? skill.passive2Skill.form : undefined;
  case 'passive3':
    return skill.passive3Skill && 'form' in skill.passive3Skill ? skill.passive3Skill.form : undefined;
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
