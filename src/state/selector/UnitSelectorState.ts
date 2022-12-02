import { atom, atomFamily, CallbackInterface, RecoilValueReadOnly, selector } from 'recoil';

import { ActiveSkillCondition } from '../../domain/selector/ActiveSkillCondition';
import { CoreLinkBonusCondition, FullLinkBonusCondition } from '../../domain/selector/CoreLinkBonusCondition';
import {
  DefensiveSkillEffectCondition,
  OffensiveSkillEffectCondition,
  OtherSkillEffectCondition,
  SkillEffectCondition,
  StatusSkillEffectCondition
} from '../../domain/selector/SkillEffectCondition';
import { RankUpCondition } from '../../domain/selector/RankUpCondition';
import { UnitBasicInfo, UnitNumber, UnitRank, UnitRole, UnitType } from '../../domain/UnitBasicInfo';
import UnitSelector from '../../domain/selector/UnitSelector';

import { unitBasicData } from '../../data/unitBasicData';
import { unitCoreLinkBonusData } from '../../data/unitCoreLinkBonusData';
import { unitRankUpBonusData } from '../../data/unitRankUpBonusData';
import { unitSkillData } from '../../data/unitSkillData';

import { updateSelectedUnitDependency } from '../transaction';

import { getValue, ValueOrUpdater } from '../../util/recoil';

const _unitSelector = atom<UnitSelector>({ key: 'UnitSelectorState_unitSelector', default: UnitSelector.initialState() });
const _selectedUnit = atom<UnitBasicInfo | undefined>({ key: 'UnitSelectorState_selectedUnit', default: undefined });

const _unitSelected = atomFamily<boolean, UnitNumber>({ key: 'UnitSelectorState_unitSelected', default: false });

const _conditionSelected = {
  basicInfo: atomFamily<boolean, UnitRank | UnitType | UnitRole>({ key: 'UnitSelectorState_conditionSelected_basicInfo', default: true }),
  skill:     atomFamily<boolean, ActiveSkillCondition | SkillEffectCondition>({ key: 'UnitSelectorState_selectedCondition_skill', default: false }),
  coreLink:  atomFamily<boolean, CoreLinkBonusCondition | undefined>({ key: 'UnitSelectorState_selectedCondition_coreLink', default: (cond) => !cond }),
  fullLink:  atomFamily<boolean, FullLinkBonusCondition | undefined>({ key: 'UnitSelectorState_selectedCondition_fullLink', default: (cond) => !cond }),
  rankUp:    atomFamily<boolean, RankUpCondition | undefined>({ key: 'UnitSelectorState_selectedCondition_rankUp', default: (cond) => !cond })
};

function _update(valueOrUpdater: ValueOrUpdater<UnitSelector>): (cbi: CallbackInterface) => void {
  return (cbi) => {
    const set = cbi.set;
    const prevValue = cbi.snapshot.getLoadable(_unitSelector).getValue();
    const nextValue = getValue(valueOrUpdater, () => prevValue);

    const prevUnit = prevValue.selectedUnit;
    const nextUnit = nextValue.selectedUnit;
    if (prevUnit !== nextUnit) {
      if (prevUnit) { set(_unitSelected(prevUnit.no), false); }
      if (nextUnit) { set(_unitSelected(nextUnit.no), true); }
    }
    set(_selectedUnit, nextUnit);

    Object.values(UnitRank).forEach(rank => {
      set(_conditionSelected.basicInfo(rank), nextValue.isRankSelected(rank));
    });
    Object.values(UnitType).forEach(type => {
      set(_conditionSelected.basicInfo(type), nextValue.isTypeSelected(type));
    });
    Object.values(UnitRole).forEach(role => {
      set(_conditionSelected.basicInfo(role), nextValue.isRoleSelected(role));
    });
    Object.values(ActiveSkillCondition).forEach(condition => {
      set(_conditionSelected.skill(condition), nextValue.isActiveSkillConditionSelected(condition));
    });
    Object.values(StatusSkillEffectCondition).forEach(condition => {
      set(_conditionSelected.skill(condition), nextValue.isSkillEffectSelected(condition));
    });
    Object.values(OffensiveSkillEffectCondition).forEach(condition => {
      set(_conditionSelected.skill(condition), nextValue.isSkillEffectSelected(condition));
    });
    Object.values(DefensiveSkillEffectCondition).forEach(condition => {
      set(_conditionSelected.skill(condition), nextValue.isSkillEffectSelected(condition));
    });
    Object.values(OtherSkillEffectCondition).forEach(condition => {
      set(_conditionSelected.skill(condition), nextValue.isSkillEffectSelected(condition));
    });

    [undefined, ...Object.values(CoreLinkBonusCondition)].forEach(condition => {
      set(_conditionSelected.coreLink(condition), nextValue.coreLinkBonus === condition);
    });
    [undefined, ...Object.values(FullLinkBonusCondition)].forEach(condition => {
      set(_conditionSelected.fullLink(condition), nextValue.fullLinkBonus === condition);
    });
    [undefined, ...Object.values(RankUpCondition)].forEach(condition => {
      set(_conditionSelected.rankUp(condition), nextValue.rankUpCondition === condition);
    });

    set(_unitSelector, nextValue);

    if (nextUnit !== prevUnit) {
      updateSelectedUnitDependency(nextUnit)(cbi);
    }
  };
}

export const selectedUnitState: RecoilValueReadOnly<UnitBasicInfo | undefined> = _selectedUnit;

export const unitSelectedState = ({ no }: UnitBasicInfo): RecoilValueReadOnly<boolean> => _unitSelected(no);

export const rankSelectedState = (rank: UnitRank): RecoilValueReadOnly<boolean> => _conditionSelected.basicInfo(rank);
export const typeSelectedState = (type: UnitType): RecoilValueReadOnly<boolean> => _conditionSelected.basicInfo(type);
export const roleSelectedState = (role: UnitRole): RecoilValueReadOnly<boolean> => _conditionSelected.basicInfo(role);

export const activeSkillSelectedState = (cond: ActiveSkillCondition): RecoilValueReadOnly<boolean> => _conditionSelected.skill(cond);
export const skillEffectSelectedState = (cond: SkillEffectCondition): RecoilValueReadOnly<boolean> => _conditionSelected.skill(cond);
export const coreLinkSelectedState = (cond: CoreLinkBonusCondition | undefined): RecoilValueReadOnly<boolean> => _conditionSelected.coreLink(cond);
export const fullLinkSelectedState = (cond: FullLinkBonusCondition | undefined): RecoilValueReadOnly<boolean> => _conditionSelected.fullLink(cond);
export const rankUpSelectedState = (cond: RankUpCondition | undefined): RecoilValueReadOnly<boolean> => _conditionSelected.rankUp(cond);

export const filteredUnitListState = selector<ReadonlyArray<UnitBasicInfo>>({
  key: 'filteredUnitListState',
  get: ({ get }) => get(_unitSelector).selectUnits(unitBasicData, unitSkillData, unitCoreLinkBonusData, unitRankUpBonusData)
});

export const toggleUnitRank = (rank: UnitRank) => (cbi: CallbackInterface) => (): void => {
  _update(s => s.toggleRank(rank))(cbi);
};

export const toggleUnitType = (type: UnitType) => (cbi: CallbackInterface) => (): void => {
  _update(s => s.toggleType(type))(cbi);
};

export const toggleUnitRole = (role: UnitRole) => (cbi: CallbackInterface) => (): void => {
  _update(s => s.toggleRole(role))(cbi);
};

export const toggleActiveSkillCondition = (cond: ActiveSkillCondition) => (cbi: CallbackInterface) => (): void => {
  _update(s => s.toggleActiveSkillCondition(cond))(cbi);
};

export const toggleSkillEffectCondition = (cond: SkillEffectCondition) => (cbi: CallbackInterface) => (): void => {
  _update(s => s.toggleSkillEffectCondition(cond))(cbi);
};

export const selectCoreLinkBonusCondition = (cond: CoreLinkBonusCondition | undefined) => (cbi: CallbackInterface) => (): void => {
  _update(s => s.selectCoreLinkBonusCondition(cond))(cbi);
};

export const selectFullLinkBonusCondition = (cond: FullLinkBonusCondition | undefined) => (cbi: CallbackInterface) => (): void => {
  _update(s => s.selectFullLinkBonusCondition(cond))(cbi);
};

export const selectRankUpCondition = (cond: RankUpCondition | undefined) => (cbi: CallbackInterface) => (): void => {
  _update(s => s.selectRankUpCondition(cond))(cbi);
};

export const selectUnit = (unit: UnitBasicInfo) => (cbi: CallbackInterface) => (): void => {
  _update(s => s.selectUnit(unit))(cbi);
};

export const setSelectedUnit = (cbi: CallbackInterface) => (unit: UnitBasicInfo): void => {
  _update(s => s.selectUnit(unit))(cbi);
};
