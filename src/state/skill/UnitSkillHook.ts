import { useRecoilCallback, useRecoilValue } from 'recoil';
import { useTranslation } from 'react-i18next';

import { DamageDeal, SkillEffect } from '../../domain/skill/UnitSkills';
import { FormChangeUnitNumbers, UnitForms } from '../../domain/UnitFormValue';
import { FormChangeUnitSkill } from '../../domain/skill/UnitSkill';
import { SkillApCostValue, SkillRangeValue } from '../../domain/skill/UnitSkillData';
import { SkillAreaType } from '../../domain/skill/SkillAreaOfEffect';
import { SkillLv } from '../../domain/skill/UnitSkillLvValue';
import { SkillType } from '../../domain/skill/SkillType';
import { UnitBasicInfo, UnitNumber } from '../../domain/UnitBasicInfo';

import {
  changeForm,
  changeSkillLv,
  formChangeUnitSkillState,
  isRankUpSkillState,
  selectedUnitSkillEnabledState,
  skillFormState,
  unitActive1SkillState,
  unitActive2SkillState,
  unitPassive1SkillState,
  unitPassive2SkillState,
  unitPassive3SkillState,
  unitSkillLvState
} from './UnitSkillState';
import { useActiveSkillTab } from '../ui/UnitSkillTabState';
import { useSelectedUnit } from '../selector/UnitSelectorHook';

import { AreaOfEffectCell, AreaOfEffectCells } from '../../component/skill/AreaOfEffectCellType';

const {
  Active1,
  Active2,
  Passive1,
  Passive2,
  Passive3
} = SkillType;

export function useUnitForm(): [unitSkill: FormChangeUnitSkill<FormChangeUnitNumbers> | undefined, changeForm: () => void] {
  const selected = useSelectedUnit();

  return [
    useRecoilValue(formChangeUnitSkillState(selected)),
    useRecoilCallback(changeForm(selected))
  ];
}

export function useActive1SkillNav(): [eventKey: typeof Active1, active: boolean, enable: boolean] {
  const activeTab = useActiveSkillTab();
  const selected = useSelectedUnit();

  return [Active1, activeTab === Active1, !!selected];
}

export function useActive2SkillNav(): [eventKey: typeof Active2, active: boolean, enable: boolean] {
  const activeTab = useActiveSkillTab();
  const selected = useSelectedUnit();

  return [Active2, activeTab === Active2, !!selected];
}

export function usePassive1SkillNav(): [eventKey: typeof Passive1, active: boolean, enable: boolean] {
  const activeTab = useActiveSkillTab();
  const selected = useSelectedUnit();
  const enable = useRecoilValue(selectedUnitSkillEnabledState(selected, Passive1));

  return [Passive1, activeTab === Passive1, enable];
}

export function usePassive2SkillNav(): [eventKey: typeof Passive2, active: boolean, enable: boolean] {
  const activeTab = useActiveSkillTab();
  const selected = useSelectedUnit();
  const enable = useRecoilValue(selectedUnitSkillEnabledState(selected, Passive2));

  return [Passive2, activeTab === Passive2, enable];
}

export function usePassive3SkillNav(): [eventKey: typeof Passive3, active: boolean, enable: boolean] {
  const activeTab = useActiveSkillTab();
  const selected = useSelectedUnit();
  const enable = useRecoilValue(selectedUnitSkillEnabledState(selected, Passive3));

  return [Passive3, activeTab === Passive3, enable];
}

export function useSkillName(skillType: SkillType, unit: UnitBasicInfo): string | undefined {
  const { t } = useTranslation();
  const form = useRecoilValue(skillFormState(unit, skillType));
  const no = skillType.substr(-1, 1);
  const interpolation = { unit: unit.no, no, form };

  switch (skillType) {
  case Active1:
  case Active2:
    return t(form ? 'skill:form_active' : 'skill:active', interpolation);
  case Passive1:
    return useRecoilValue(selectedUnitSkillEnabledState(unit, Passive1)) ?
      t(form ?'skill:form_passive' : 'skill:passive', interpolation) :
      undefined;
  case Passive2:
    return useRecoilValue(selectedUnitSkillEnabledState(unit, Passive2)) ?
      t(form ?'skill:form_passive' : 'skill:passive', interpolation) :
      undefined;
  case Passive3:
    return useRecoilValue(selectedUnitSkillEnabledState(unit, Passive3)) ?
      t(form ?'skill:form_passive' : 'skill:passive', interpolation) :
      undefined;
  }
}

export function useDamageDeal(skillType: SkillType, unit: UnitBasicInfo):
  [damage_deal: DamageDeal, area: SkillAreaType] |
  [damage_deal: undefined, area: undefined]
{
  switch (skillType) {
  case Active1: {
    const as = useRecoilValue(unitActive1SkillState(unit));
    return as.damage_deal ?
      [as.damage_deal, as.area] :
      [undefined, undefined];
  }
  case Active2: {
    const as = useRecoilValue(unitActive2SkillState(unit));
    return 'damage_deal' in as && !!as.damage_deal ?
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
  case Active1: return useRecoilValue(unitActive1SkillState(unit)).cost;
  case Active2: return useRecoilValue(unitActive2SkillState(unit)).cost;
  default:
    return t('empty') as string;
  }
}

export function useSkillRange(skillType: SkillType, unit: UnitBasicInfo): SkillRangeValue | string {
  const { t } = useTranslation('common');

  switch (skillType) {
  case Active1: return useRecoilValue(unitActive1SkillState(unit)).range;
  case Active2: return useRecoilValue(unitActive2SkillState(unit)).range;
  default:
    return t('empty') as string;
  }
}

export function useSkillArea(skillType: SkillType, unit: UnitBasicInfo): AreaOfEffectCell | undefined {
  switch (skillType) {
  case Active1:
    return AreaOfEffectCells[useRecoilValue(unitActive1SkillState(unit)).area];
  case Active2:
    return AreaOfEffectCells[useRecoilValue(unitActive2SkillState(unit)).area];
  case Passive1: {
    const skill = useRecoilValue(unitPassive1SkillState(unit));
    return skill && AreaOfEffectCells[skill.area];
  }
  case Passive2: {
    const skill = useRecoilValue(unitPassive2SkillState(unit));
    return skill && AreaOfEffectCells[skill.area];
  }
  case Passive3: {
    const skill = useRecoilValue(unitPassive3SkillState(unit));
    return skill && AreaOfEffectCells[skill.area];
  }
  }
}

export function useRankUpSkillBadge(skillType: SkillType, unit: UnitBasicInfo): boolean {
  return useRecoilValue(isRankUpSkillState(unit, skillType));
}

export function useFormChangeSkillBadge(skillType: SkillType, unit: UnitBasicInfo): UnitForms | undefined {
  return useRecoilValue(skillFormState(unit, skillType));
}

export function useEffectsAsEquipmentDescription(skillType: SkillType, unit: UnitBasicInfo): boolean {
  switch (skillType) {
  case Active2: {
    const as2 = useRecoilValue(unitActive2SkillState(unit));
    return 'equipment_effects' in as2;
  }
  case Passive1: {
    const ps1 = useRecoilValue(unitPassive1SkillState(unit));
    return !!ps1 && 'equipment_effects' in ps1;
  }
  case Passive2: {
    const ps2 = useRecoilValue(unitPassive2SkillState(unit));
    return !!ps2 && 'equipment_effects' in ps2;
  }
  case Passive3: {
    const ps3 = useRecoilValue(unitPassive3SkillState(unit));
    return !!ps3 && 'equipment_effects' in ps3;
  }
  default:
    return false;
  }
}

export function useSkillLvState(
  skillType: SkillType,
  unit: UnitBasicInfo
): [skillLv: SkillLv, setSkillLv: (skillLv: SkillLv) => void] {
  return [
    useRecoilValue(unitSkillLvState(unit, skillType)),
    useRecoilCallback(changeSkillLv(unit, skillType))
  ];
}

export function useSkillEffects(
  skillType: SkillType,
  unit: UnitBasicInfo
): [effects: ReadonlyArray<SkillEffect>, area: SkillAreaType, unitNumber: UnitNumber] | undefined {
  switch (skillType) {
  case Active1: {
    const skill = useRecoilValue(unitActive1SkillState(unit));
    return [skill.effects, skill.area, unit.no];
  }
  case Active2: {
    const skill = useRecoilValue(unitActive2SkillState(unit));
    return 'effects' in skill ?
      [skill.effects, skill.area, unit.no] :
      [skill.equipment_effects, skill.area, unit.no];
  }
  case Passive1: {
    const skill = useRecoilValue(unitPassive1SkillState(unit));
    return skill && (
      'effects' in skill ?
        [skill.effects, skill.area, unit.no] :
        [skill.equipment_effects, skill.area, unit.no]
    );
  }
  case Passive2: {
    const skill = useRecoilValue(unitPassive2SkillState(unit));
    return skill && (
      'effects' in skill ?
        [skill.effects, skill.area, unit.no] :
        [skill.equipment_effects, skill.area, unit.no]
    );
  }
  case Passive3: {
    const skill = useRecoilValue(unitPassive3SkillState(unit));
    return skill && (
      'effects' in skill ?
        [skill.effects, skill.area, unit.no] :
        [skill.equipment_effects, skill.area, unit.no]
    );
  }
  }
}
