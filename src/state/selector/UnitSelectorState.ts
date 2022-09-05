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

import { isUpdater, ValueOrUpdater } from '../../util/recoil';

class UnitSelectorState {
  readonly #unitSelector = atom<UnitSelector>({ key: 'unitSelectorState_unitSelector', default: UnitSelector.initialState() });
  readonly #selectedUnit = atom<UnitBasicInfo | undefined>({ key: 'unitSelectorState_selectedUnit', default: undefined });

  readonly #unitSelected = atomFamily<boolean, UnitNumber>({ key: 'unitSelectorState_unitSelected', default: false });

  readonly #conditionSelected = {
    basicInfo: atomFamily<boolean, UnitRank | UnitType | UnitRole>({ key: 'unitSelectorState_conditionSelected_basicInfo', default: true }),
    skill:     atomFamily<boolean, ActiveSkillCondition | SkillEffectCondition>({ key: 'unitSelectorState_selectedCondition_skill', default: false }),
    coreLink:  atomFamily<boolean, CoreLinkBonusCondition | undefined>({ key: 'unitSelectorState_selectedCondition_coreLink', default: (cond) => !cond }),
    fullLink:  atomFamily<boolean, FullLinkBonusCondition | undefined>({ key: 'unitSelectorState_selectedCondition_fullLink', default: (cond) => !cond }),
    rankUp:    atomFamily<boolean, RankUpCondition | undefined>({ key: 'unitSelectorState_selectedCondition_rankUp', default: (cond) => !cond })
  };

  #update(
    valueOrUpdater: ValueOrUpdater<UnitSelector>
  ): (cbi: CallbackInterface) => void {
    return (cbi) => {
      const { snapshot, set } = cbi;
      const prevValue = snapshot.getLoadable(this.#unitSelector).getValue();
      const nextValue = isUpdater(valueOrUpdater) ? valueOrUpdater(prevValue) : valueOrUpdater;

      const prevUnit = prevValue.selectedUnit;
      const nextUnit = nextValue.selectedUnit;
      if (prevUnit !== nextUnit) {
        if (prevUnit) { set(this.#unitSelected(prevUnit.no), false); }
        if (nextUnit) { set(this.#unitSelected(nextUnit.no), true); }
      }
      set(this.#selectedUnit, nextUnit);

      Object.values(UnitRank).forEach(rank => {
        set(this.#conditionSelected.basicInfo(rank), nextValue.isRankSelected(rank));
      });
      Object.values(UnitType).forEach(type => {
        set(this.#conditionSelected.basicInfo(type), nextValue.isTypeSelected(type));
      });
      Object.values(UnitRole).forEach(role => {
        set(this.#conditionSelected.basicInfo(role), nextValue.isRoleSelected(role));
      });
      Object.values(ActiveSkillCondition).forEach(condition => {
        set(this.#conditionSelected.skill(condition), nextValue.isActiveSkillConditionSelected(condition));
      });
      Object.values(StatusSkillEffectCondition).forEach(condition => {
        set(this.#conditionSelected.skill(condition), nextValue.isSkillEffectSelected(condition));
      });
      Object.values(OffensiveSkillEffectCondition).forEach(condition => {
        set(this.#conditionSelected.skill(condition), nextValue.isSkillEffectSelected(condition));
      });
      Object.values(DefensiveSkillEffectCondition).forEach(condition => {
        set(this.#conditionSelected.skill(condition), nextValue.isSkillEffectSelected(condition));
      });
      Object.values(OtherSkillEffectCondition).forEach(condition => {
        set(this.#conditionSelected.skill(condition), nextValue.isSkillEffectSelected(condition));
      });

      [undefined, ...Object.values(CoreLinkBonusCondition)].forEach(condition => {
        set(this.#conditionSelected.coreLink(condition), nextValue.coreLinkBonus === condition);
      });
      [undefined, ...Object.values(FullLinkBonusCondition)].forEach(condition => {
        set(this.#conditionSelected.fullLink(condition), nextValue.fullLinkBonus === condition);
      });
      [undefined, ...Object.values(RankUpCondition)].forEach(condition => {
        set(this.#conditionSelected.rankUp(condition), nextValue.rankUpCondition === condition);
      });

      set(this.#unitSelector, nextValue);

      updateSelectedUnitDependency(nextValue.selectedUnit)(cbi);
    };
  }

  readonly selectedUnitState: RecoilValueReadOnly<UnitBasicInfo | undefined> = this.#selectedUnit;

  readonly unitSelectedState = ({ no }: UnitBasicInfo): RecoilValueReadOnly<boolean> => this.#unitSelected(no);

  readonly rankSelectedState = (rank: UnitRank): RecoilValueReadOnly<boolean> => this.#conditionSelected.basicInfo(rank);
  readonly typeSelectedState = (type: UnitType): RecoilValueReadOnly<boolean> => this.#conditionSelected.basicInfo(type);
  readonly roleSelectedState = (role: UnitRole): RecoilValueReadOnly<boolean> => this.#conditionSelected.basicInfo(role);

  readonly activeSkillSelectedState = (cond: ActiveSkillCondition): RecoilValueReadOnly<boolean> => this.#conditionSelected.skill(cond);
  readonly skillEffectSelectedState = (cond: SkillEffectCondition): RecoilValueReadOnly<boolean> => this.#conditionSelected.skill(cond);
  readonly coreLinkSelectedState = (cond: CoreLinkBonusCondition | undefined): RecoilValueReadOnly<boolean> => this.#conditionSelected.coreLink(cond);
  readonly fullLinkSelectedState = (cond: FullLinkBonusCondition | undefined): RecoilValueReadOnly<boolean> => this.#conditionSelected.fullLink(cond);
  readonly rankUpSelectedState = (cond: RankUpCondition | undefined): RecoilValueReadOnly<boolean> => this.#conditionSelected.rankUp(cond);

  readonly filteredUnitListState = selector<ReadonlyArray<UnitBasicInfo>>({
    key: 'filteredUnitListState',
    get: ({ get }) => get(this.#unitSelector).selectUnits(unitBasicData, unitSkillData, unitCoreLinkBonusData, unitRankUpBonusData)
  });

  readonly toggleUnitRank = (rank: UnitRank) => (cbi: CallbackInterface) => (): void => {
    this.#update(s => s.toggleRank(rank))(cbi);
  };

  readonly toggleUnitType = (type: UnitType) => (cbi: CallbackInterface) => (): void => {
    this.#update(s => s.toggleType(type))(cbi);
  };

  readonly toggleUnitRole = (role: UnitRole) => (cbi: CallbackInterface) => (): void => {
    this.#update(s => s.toggleRole(role))(cbi);
  };

  readonly toggleActiveSkillCondition = (cond: ActiveSkillCondition) => (cbi: CallbackInterface) => (): void => {
    this.#update(s => s.toggleActiveSkillCondition(cond))(cbi);
  };

  readonly toggleSkillEffectCondition = (cond: SkillEffectCondition) => (cbi: CallbackInterface) => (): void => {
    this.#update(s => s.toggleSkillEffectCondition(cond))(cbi);
  };

  readonly selectCoreLinkBonusCondition = (cond: CoreLinkBonusCondition | undefined) => (cbi: CallbackInterface) => (): void => {
    this.#update(s => s.selectCoreLinkBonusCondition(cond))(cbi);
  };

  readonly selectFullLinkBonusCondition = (cond: FullLinkBonusCondition | undefined) => (cbi: CallbackInterface) => (): void => {
    this.#update(s => s.selectFullLinkBonusCondition(cond))(cbi);
  };

  readonly selectRankUpCondition = (cond: RankUpCondition | undefined) => (cbi: CallbackInterface) => (): void => {
    this.#update(s => s.selectRankUpCondition(cond))(cbi);
  };

  readonly selectUnit = (unit: UnitBasicInfo) => (cbi: CallbackInterface) => (): void => {
    this.#update(s => s.selectUnit(unit))(cbi);
  };

  readonly setSelectedUnit = (cbi: CallbackInterface) => (unit: UnitBasicInfo): void => {
    this.#update(s => s.selectUnit(unit))(cbi);
  };
}

export const unitSelectorState: UnitSelectorState = new UnitSelectorState();
