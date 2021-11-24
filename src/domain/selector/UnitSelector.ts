import { ActiveSkillCondition, matchActiveSkillConditions } from './ActiveSkillCondition';
import {
  SkillEffectCondition,
  matchSkillConditions
} from './SkillEffectCondition';
import { UnitBasicData, UnitBasicInfo, UnitRank, UnitRole, UnitType } from '../UnitBasicInfo';
import { UnitSkillData } from '../skill/UnitSkillData';
import {
  CoreLinkBonusCondition,
  FullLinkBonusCondition,
  matchCoreLinkBonusConditions
} from './CoreLinkBonusCondition';
import { UnitCoreLinkBonusData } from '../UnitCoreLinkBonusData';
import { matchRankUpConditions, RankUpCondition } from './RankUpCondition';
import { UnitRankUpBonusData } from '../status/UnitRankUpBonusData';

function toggleSelector<T>(values: ReadonlySet<T>, value: T): ReadonlySet<T> {
  const newValues = new Set(values);
  if (values.has(value)) {
    newValues.delete(value);
    return newValues;
  } else {
    return newValues.add(value);
  }
}

class UnitSelector {

  static initialState(): UnitSelector {
    return new UnitSelector(
      new Set<UnitRank>(['ss', 's', 'a', 'b']),
      new Set<UnitType>(['light', 'heavy', 'flying']),
      new Set<UnitRole>(['attacker', 'defender', 'supporter']),
      new Set(),
      new Set(),
      undefined,
      undefined,
      undefined,
      undefined
    );
  }

  readonly #ranks: ReadonlySet<UnitRank>;
  readonly #types: ReadonlySet<UnitType>;
  readonly #roles: ReadonlySet<UnitRole>;
  readonly #activeSkills: ReadonlySet<ActiveSkillCondition>;
  readonly #skillEffects: ReadonlySet<SkillEffectCondition>;
  readonly coreLinkBonus: CoreLinkBonusCondition | undefined;
  readonly fullLinkBonus: FullLinkBonusCondition | undefined;
  readonly rankUpCondition: RankUpCondition | undefined;
  readonly selectedUnit?: UnitBasicInfo;

  private constructor(
    ranks: ReadonlySet<UnitRank>,
    types: ReadonlySet<UnitType>,
    roles: ReadonlySet<UnitRole>,
    activeSkills: ReadonlySet<ActiveSkillCondition>,
    skillEffects: ReadonlySet<SkillEffectCondition>,
    coreLinkBonus: CoreLinkBonusCondition | undefined,
    fullLinkBonus: FullLinkBonusCondition | undefined,
    rankUpCondition: RankUpCondition | undefined,
    selectedUnit?: UnitBasicInfo
  ) {
    this.#ranks = ranks;
    this.#types = types;
    this.#roles = roles;
    this.#activeSkills = activeSkills;
    this.#skillEffects = skillEffects;
    this.coreLinkBonus = coreLinkBonus;
    this.fullLinkBonus = fullLinkBonus;
    this.rankUpCondition = rankUpCondition;
    this.selectedUnit = selectedUnit;
  }

  #updateStore(values: {
    ranks?: ReadonlySet<UnitRank>,
    types?: ReadonlySet<UnitType>,
    roles?: ReadonlySet<UnitRole>,
    activeSkills?: ReadonlySet<ActiveSkillCondition>,
    skillEffects?: ReadonlySet<SkillEffectCondition>,
    coreLinkBonus?: CoreLinkBonusCondition | undefined,
    fullLinkBonus?: FullLinkBonusCondition | undefined,
    rankUpCondition?: RankUpCondition | undefined,
    selectedUnit?: UnitBasicInfo
  }): UnitSelector {
    const newValues = {
      ranks: values.ranks ?? this.#ranks,
      types: values.types ?? this.#types,
      roles: values.roles ?? this.#roles,
      activeSkills: values.activeSkills ?? this.#activeSkills,
      skillEffects: values.skillEffects ?? this.#skillEffects,
      coreLinkBonus: 'coreLinkBonus' in values ? values.coreLinkBonus : this.coreLinkBonus,
      fullLinkBonus: 'fullLinkBonus' in values ? values.fullLinkBonus : this.fullLinkBonus,
      rankUpCondition: 'rankUpCondition' in values ? values.rankUpCondition : this.rankUpCondition,
      selectedUnit: values.selectedUnit
    };

    return new UnitSelector(
      newValues.ranks,
      newValues.types,
      newValues.roles,
      newValues.activeSkills,
      newValues.skillEffects,
      newValues.coreLinkBonus,
      newValues.fullLinkBonus,
      newValues.rankUpCondition,
      newValues.selectedUnit
    );
  }

  toggleRank(rank: UnitRank): UnitSelector {
    return this.#updateStore({
      ranks: toggleSelector(this.#ranks, rank),
      selectedUnit: undefined
    });
  }

  toggleType(type: UnitType): UnitSelector {
    return this.#updateStore({
      types: toggleSelector(this.#types, type),
      selectedUnit: undefined
    });
  }

  toggleRole(role: UnitRole): UnitSelector {
    return this.#updateStore({
      roles: toggleSelector(this.#roles, role),
      selectedUnit: undefined
    });
  }

  toggleActiveSkillCondition(condition: ActiveSkillCondition): UnitSelector {
    return this.#updateStore({
      activeSkills: toggleSelector(this.#activeSkills, condition),
      selectedUnit: undefined
    });
  }

  toggleSkillEffectCondition(condition: SkillEffectCondition): UnitSelector {
    return this.#updateStore({
      skillEffects: toggleSelector(this.#skillEffects, condition),
      selectedUnit: undefined
    });
  }

  selectCoreLinkBonusCondition(coreLinkBonus: CoreLinkBonusCondition | undefined): UnitSelector {
    return this.#updateStore({
      coreLinkBonus,
      selectedUnit: undefined
    });
  }

  selectFullLinkBonusCondition(fullLinkBonus: FullLinkBonusCondition | undefined): UnitSelector {
    return this.#updateStore({
      fullLinkBonus,
      selectedUnit: undefined
    });
  }

  selectRankUpCondition(rankUpCondition: RankUpCondition | undefined): UnitSelector {
    return this.#updateStore({
      rankUpCondition,
      selectedUnit: undefined
    });
  }

  selectUnit(unit: UnitBasicInfo): UnitSelector {
    return unit.no !== this.selectedUnit?.no ?
      this.#updateStore({ selectedUnit: unit }) :
      this;
  }

  isRankSelected(rank: UnitRank): boolean {
    return this.#ranks.has(rank);
  }

  isTypeSelected(type: UnitType): boolean {
    return this.#types.has(type);
  }

  isRoleSelected(role: UnitRole): boolean {
    return this.#roles.has(role);
  }

  isActiveSkillConditionSelected(condition: ActiveSkillCondition): boolean {
    return this.#activeSkills.has(condition);
  }

  isSkillEffectSelected(effect: SkillEffectCondition): boolean {
    return this.#skillEffects.has(effect);
  }

  selectUnits(
    units: UnitBasicData,
    skills: UnitSkillData,
    coreLinkBonuses: UnitCoreLinkBonusData,
    rankUpBonuses: UnitRankUpBonusData
  ): ReadonlyArray<UnitBasicInfo> {
    return Object.values(units).filter(unit =>
      this.#matchUnit(unit) &&
      matchActiveSkillConditions(skills[unit.no], this.#activeSkills) &&
      matchSkillConditions(skills[unit.no], this.#skillEffects) &&
      matchCoreLinkBonusConditions(coreLinkBonuses[unit.no], this.coreLinkBonus, this.fullLinkBonus) &&
      matchRankUpConditions(unit.no, rankUpBonuses, this.rankUpCondition)
    );
  }

  #matchUnit(unit: UnitBasicInfo): boolean {
    return this.#ranks.has(unit.rank) && this.#types.has(unit.type) && this.#roles.has(unit.role);
  }
}

export default UnitSelector;
