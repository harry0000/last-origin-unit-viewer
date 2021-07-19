import {
  atomFamily,
  DefaultValue,
  RecoilValueReadOnly,
  selector,
  selectorFamily, useRecoilState,
  useRecoilValue,
  useSetRecoilState
} from 'recoil';
import { useTranslation } from 'react-i18next';

import {
  ActiveSkill,
  DamageDeal,
  Passive1Skill,
  Passive2Skill,
  Passive3Skill, SkillEffect
} from '../../domain/skill/UnitSkills';
import { FormChangeUnitNumbers, UnitForms } from '../../domain/UnitFormValue';
import { SkillApCostValue, SkillRangeValue } from '../../domain/skill/UnitSkillData';
import { SkillAreaType } from '../../domain/skill/SkillAreaOfEffect';
import { SkillLv } from '../../domain/skill/UnitSkillLvValue';
import { UnitBasicInfo, UnitNumber } from '../../domain/UnitBasicInfo';
import { UnitSkill, buildUnitSkill, isFormChangeUnitSkill, FormChangeUnitSkill } from '../../domain/skill/UnitSkill';

import { AreaOfEffectCell, AreaOfEffectCells } from '../../component/skill/AreaOfEffectCellType';

import { coreLinkBonusEffectsState, fullLinkBonusEffectState } from '../corelink/unitCoreLinkState';
import { unitSkillTabState } from '../ui/unitSkillTabState';
import { useSelectedUnit } from '../selector/unitSelectorState';
import { affectionBonusEffectState } from '../status/unitAffectionBonus';

export const SkillType = {
  Active1: 'active1',
  Active2: 'active2',
  Passive1: 'passive1',
  Passive2: 'passive2',
  Passive3: 'passive3'
} as const;
export type SkillType = typeof SkillType[keyof typeof SkillType]

const unitSkillState = atomFamily<UnitSkill, UnitBasicInfo>({
  key: 'unitSkillState',
  default: (unit) => buildUnitSkill(unit)
});

const unitSkillRestore = selector<ReadonlyArray<UnitSkill>>({
  key: 'unitSkillRestore',
  get: () => [],
  set: ({ set }, newValue) => {
    if (!(newValue instanceof DefaultValue)) {
      newValue.forEach(v => set(unitSkillState(v.unit), v));
    }
  }
});

const selectedUnitSkillState = selectorFamily<UnitSkill | undefined, UnitBasicInfo | undefined>({
  key: 'selectedUnitSkillState',
  get: (unit) => ({ get }) => {
    return unit && get(unitSkillState(unit));
  },
  set: (unit) => ({ set }, newValue) => {
    unit && newValue && !(newValue instanceof DefaultValue) && set(unitSkillState(unit), newValue);
  }
});

const unitActive1SkillState = selectorFamily<ActiveSkill, UnitBasicInfo>({
  key: 'unitActive1SkillState',
  get: (unit) => ({ get }) => {
    const skill = get(unitSkillState(unit));
    const coreLinkBonus  = get(coreLinkBonusEffectsState(unit.no));
    const fullLinkBonus  = get(fullLinkBonusEffectState(unit.no));
    const affectionBonus = get(affectionBonusEffectState(unit));
    return skill.active1Skill(coreLinkBonus, fullLinkBonus, affectionBonus);
  }
});

const unitActive2SkillState = selectorFamily<ActiveSkill, UnitBasicInfo>({
  key: 'unitActive2SkillState',
  get: (unit) => ({ get }) => {
    const skill = get(unitSkillState(unit));
    const coreLinkBonus  = get(coreLinkBonusEffectsState(unit.no));
    const fullLinkBonus  = get(fullLinkBonusEffectState(unit.no));
    const affectionBonus = get(affectionBonusEffectState(unit));
    return skill.active2Skill(coreLinkBonus, fullLinkBonus, affectionBonus);
  }
});

const unitPassive1SkillState = selectorFamily<Passive1Skill | undefined, UnitBasicInfo>({
  key: 'unitPassive1SkillState',
  get: (unit) => ({ get }) => {
    const skill = get(unitSkillState(unit));
    const fullLinkBonus  = get(fullLinkBonusEffectState(unit.no));
    const affectionBonus = get(affectionBonusEffectState(unit));
    return skill.passive1Skill(fullLinkBonus, affectionBonus);
  }
});

const unitPassive2SkillState = selectorFamily<Passive2Skill | undefined, UnitBasicInfo>({
  key: 'unitPassive2SkillState',
  get: (unit) => ({ get }) => {
    const skill = get(unitSkillState(unit));
    const fullLinkBonus  = get(fullLinkBonusEffectState(unit.no));
    const affectionBonus = get(affectionBonusEffectState(unit));
    return skill.passive2Skill(fullLinkBonus, affectionBonus);
  }
});

const unitPassive3SkillState = selectorFamily<Passive3Skill | undefined, UnitBasicInfo>({
  key: 'unitPassive3SkillState',
  get: (unit) => ({ get }) => {
    const skill = get(unitSkillState(unit));
    const fullLinkBonus  = get(fullLinkBonusEffectState(unit.no));
    const affectionBonus = get(affectionBonusEffectState(unit));
    return skill.passive3Skill(fullLinkBonus, affectionBonus);
  }
});

export function useUnitForm(): [unitSkill: FormChangeUnitSkill<FormChangeUnitNumbers> | undefined, changeForm: () => void] {
  const selected = useSelectedUnit();
  const [skill, setSkill] = useRecoilState(selectedUnitSkillState(selected));

  return skill && isFormChangeUnitSkill(skill) ?
    [skill, () => { setSkill(s => s && isFormChangeUnitSkill(s) ? s.changeForm() : s); }] :
    [undefined, () => { return; }];
}

export function useActive1SkillNav(): [eventKey: typeof SkillType.Active1, active: boolean, enable: boolean] {
  const activeTab = useRecoilValue(unitSkillTabState);
  const selected = useSelectedUnit();

  return [SkillType.Active1, activeTab === SkillType.Active1, !!selected];
}

export function useActive2SkillNav(): [eventKey: typeof SkillType.Active2, active: boolean, enable: boolean] {
  const activeTab = useRecoilValue(unitSkillTabState);
  const selected = useSelectedUnit();

  return [SkillType.Active2, activeTab === SkillType.Active2, !!selected];
}

export function usePassive1SkillNav(): [eventKey: typeof SkillType.Passive1, active: boolean, enable: boolean] {
  const activeTab = useRecoilValue(unitSkillTabState);
  const selected = useSelectedUnit();
  const skill = useRecoilValue(selectedUnitSkillState(selected));

  return [SkillType.Passive1, activeTab === SkillType.Passive1, !!skill && skill.hasPassive1Skill];
}

export function usePassive2SkillNav(): [eventKey: typeof SkillType.Passive2, active: boolean, enable: boolean] {
  const activeTab = useRecoilValue(unitSkillTabState);
  const selected = useSelectedUnit();
  const skill = useRecoilValue(selectedUnitSkillState(selected));

  return [SkillType.Passive2, activeTab === SkillType.Passive2, !!skill && skill.hasPassive2Skill];
}

export function usePassive3SkillNav(): [eventKey: typeof SkillType.Passive3, active: boolean, enable: boolean] {
  const activeTab = useRecoilValue(unitSkillTabState);
  const selected = useSelectedUnit();
  const skill = useRecoilValue(selectedUnitSkillState(selected));

  return [SkillType.Passive3, activeTab === SkillType.Passive3, !!skill && skill.hasPassive3Skill];
}

export function useSkillName(skillType: SkillType, unit: UnitBasicInfo): string | undefined {
  const { t } = useTranslation();

  const skill = useRecoilValue(unitSkillState(unit));
  switch (skillType) {
  case 'active1':
    return isFormChangeUnitSkill(skill) && skill.hasFormActive1Skill() ?
      t('skill:form_active', { unit: unit.no, no: 1, form: skill.unitForm() }) :
      t('skill:active', { unit: unit.no, no: 1 });
  case 'active2':
    return isFormChangeUnitSkill(skill) && skill.hasFormActive2Skill() ?
      t('skill:form_active', { unit: unit.no, no: 2, form: skill.unitForm() }) :
      t('skill:active', { unit: unit.no, no: 2 });
  case 'passive1': {
    const ps = useRecoilValue(unitPassive1SkillState(unit));
    return ps ?
      isFormChangeUnitSkill(skill) && skill.hasFormPassive1Skill() ?
        t('skill:form_passive', { unit: unit.no, no: 1, form: skill.unitForm() }) :
        t('skill:passive', { unit: unit.no, no: 1 }) :
      undefined;
  }
  case 'passive2': {
    const ps = useRecoilValue(unitPassive2SkillState(unit));
    return ps ?
      isFormChangeUnitSkill(skill) && skill.hasFormPassive2Skill() ?
        t('skill:form_passive', { unit: unit.no, no: 2, form: skill.unitForm() }) :
        t('skill:passive', { unit: unit.no, no: 2 }) :
      undefined;
  }
  case 'passive3': {
    const ps = useRecoilValue(unitPassive3SkillState(unit));
    return ps ?
      isFormChangeUnitSkill(skill) && skill.hasFormPassive3Skill() ?
        t('skill:form_passive', { unit: unit.no, no: 3, form: skill.unitForm() }) :
        t('skill:passive', { unit: unit.no, no: 3 }) :
      undefined;
  }
  }
}

export function useDamageDeal(skillType: SkillType, unit: UnitBasicInfo):
  [damage_deal: DamageDeal, area: SkillAreaType] |
  [damage_deal: undefined, area: undefined]
{
  switch (skillType) {
  case 'active1': {
    const as = useRecoilValue(unitActive1SkillState(unit));
    return as.damage_deal ?
      [as.damage_deal, as.area] :
      [undefined, undefined];
  }
  case 'active2': {
    const as = useRecoilValue(unitActive1SkillState(unit));
    return as.damage_deal ?
      [as.damage_deal, as.area] :
      [undefined, undefined];
  }
  default:
    return [undefined, undefined];
  }
}

export function useSkillCost(skillType: SkillType, unit: UnitBasicInfo): SkillApCostValue | string {
  const { t } = useTranslation('common');

  switch (skillType) {
  case 'active1': return useRecoilValue(unitActive1SkillState(unit)).cost;
  case 'active2': return useRecoilValue(unitActive2SkillState(unit)).cost;
  default:
    return t('empty') as string;
  }
}

export function useSkillRange(skillType: SkillType, unit: UnitBasicInfo): SkillRangeValue | string {
  const { t } = useTranslation('common');

  switch (skillType) {
  case 'active1': return useRecoilValue(unitActive1SkillState(unit)).range;
  case 'active2': return useRecoilValue(unitActive2SkillState(unit)).range;
  default:
    return t('empty') as string;
  }
}

export function useSkillArea(skillType: SkillType, unit: UnitBasicInfo): AreaOfEffectCell | undefined {
  switch (skillType) {
  case 'active1':
    return AreaOfEffectCells[useRecoilValue(unitActive1SkillState(unit)).area];
  case 'active2':
    return AreaOfEffectCells[useRecoilValue(unitActive2SkillState(unit)).area];
  case 'passive1': {
    const skill = useRecoilValue(unitPassive1SkillState(unit));
    return skill && AreaOfEffectCells[skill.area];
  }
  case 'passive2': {
    const skill = useRecoilValue(unitPassive2SkillState(unit));
    return skill && AreaOfEffectCells[skill.area];
  }
  case 'passive3': {
    const skill = useRecoilValue(unitPassive3SkillState(unit));
    return skill && AreaOfEffectCells[skill.area];
  }
  }
}

export function useRankUpSkillBadge(skillType: SkillType, unit: UnitBasicInfo): boolean {
  const skill = useRecoilValue(unitSkillState(unit));

  switch (skillType) {
  case 'passive1': return skill.isPassive1RankUpSkill;
  case 'passive2': return skill.isPassive2RankUpSkill;
  case 'passive3': return skill.isPassive3RankUpSkill;
  default:
    return false;
  }
}

export function useFormChangeSkillBadge(skillType: SkillType, unit: UnitBasicInfo): UnitForms | undefined {
  const skill = useRecoilValue(unitSkillState(unit));
  if (!isFormChangeUnitSkill(skill)) {
    return undefined;
  }

  switch (skillType) {
  case 'active1':  return skill.hasFormActive1Skill() ? skill.unitForm() : undefined;
  case 'active2':  return skill.hasFormActive2Skill() ? skill.unitForm() : undefined;
  case 'passive1': return skill.hasFormPassive1Skill() ? skill.unitForm() : undefined;
  case 'passive2': return skill.hasFormPassive2Skill() ? skill.unitForm() : undefined;
  case 'passive3': return skill.hasFormPassive3Skill() ? skill.unitForm() : undefined;
  }
}

export function useEffectsAsEquipmentDescription(skillType: SkillType, unit: UnitBasicInfo): boolean {
  if (skillType === 'passive1') {
    const ps1 = useRecoilValue(unitPassive1SkillState(unit));
    return !!ps1 && 'equipment_effects' in ps1;
  } else {
    return false;
  }
}

export function useSkillLvState(skillType: SkillType, unit: UnitBasicInfo): [skillLv: SkillLv, setSkillLv: (skillLv: SkillLv) => void] {
  const [skill, setSkill] = useRecoilState(unitSkillState(unit));

  switch (skillType) {
  case 'active1': return [skill.skillLv.active1Lv, (lv) => setSkill(s => s?.changeActive1SkillLv(lv))];
  case 'active2': return [skill.skillLv.active2Lv, (lv) => setSkill(s => s?.changeActive2SkillLv(lv))];
  case 'passive1': return [skill.skillLv.passive1Lv ?? 10, (lv) => setSkill(s => s?.changePassive1SkillLv(lv))];
  case 'passive2': return [skill.skillLv.passive2Lv ?? 10, (lv) => setSkill(s => s?.changePassive2SkillLv(lv))];
  case 'passive3': return [skill.skillLv.passive3Lv ?? 10, (lv) => setSkill(s => s?.changePassive3SkillLv(lv))];
  }
}

export function useSkillEffects(skillType: SkillType, unit: UnitBasicInfo): [effects: ReadonlyArray<SkillEffect>, area: SkillAreaType, unitNumber: UnitNumber] | undefined {
  switch (skillType) {
  case 'active1': {
    const skill = useRecoilValue(unitActive1SkillState(unit));
    return [skill.effects, skill.area, unit.no];
  }
  case 'active2': {
    const skill = useRecoilValue(unitActive2SkillState(unit));
    return [skill.effects, skill.area, unit.no];
  }
  case 'passive1': {
    const skill = useRecoilValue(unitPassive1SkillState(unit));
    return skill && (
      'effects' in skill ?
        [skill.effects, skill.area, unit.no] :
        [skill.equipment_effects, skill.area, unit.no]
    );
  }
  case 'passive2': {
    const skill = useRecoilValue(unitPassive2SkillState(unit));
    return skill && [skill.effects, skill.area, unit.no];
  }
  case 'passive3': {
    const skill = useRecoilValue(unitPassive3SkillState(unit));
    return skill && [skill.effects, skill.area, unit.no];
  }
  }
}

export function useUnitSkillResolver(): (param: UnitBasicInfo) => RecoilValueReadOnly<UnitSkill> {
  return unitSkillState;
}

export function useUnitSkillRestore(): (param: ReadonlyArray<UnitSkill>) => void {
  return useSetRecoilState(unitSkillRestore);
}
