import { UnitBasicData, UnitBasicInfo, UnitRank, UnitRole, UnitType } from '../UnitBasicInfo';
import { UnitSkillData } from '../skill/UnitSkillData';
import {
  SkillEffectSelectorCondition,
  matchSkillConditions
} from './SkillEffectSelectorCondition';

class UnitSelector {

  static initialState(): UnitSelector {
    return new UnitSelector(
      new Set<UnitRank>(['ss', 's', 'a', 'b']),
      new Set<UnitType>(['light', 'heavy', 'flying']),
      new Set<UnitRole>(['attacker', 'defender', 'supporter']),
      new Set(),
      undefined
    );
  }

  readonly #ranks: ReadonlySet<UnitRank>;
  readonly #types: ReadonlySet<UnitType>;
  readonly #roles: ReadonlySet<UnitRole>;
  readonly #skillEffects: ReadonlySet<SkillEffectSelectorCondition>;
  readonly selectedUnit?: UnitBasicInfo;

  private constructor(
    ranks: ReadonlySet<UnitRank>,
    types: ReadonlySet<UnitType>,
    roles: ReadonlySet<UnitRole>,
    skillEffects: ReadonlySet<SkillEffectSelectorCondition>,
    selectedUnit?: UnitBasicInfo
  ) {
    this.#ranks = ranks;
    this.#types = types;
    this.#roles = roles;
    this.#skillEffects = skillEffects;
    this.selectedUnit = selectedUnit;
  }

  #updateStore(values: {
    ranks?: ReadonlySet<UnitRank>,
    types?: ReadonlySet<UnitType>,
    roles?: ReadonlySet<UnitRole>,
    skillEffects?: ReadonlySet<SkillEffectSelectorCondition>,
    selectedUnit?: UnitBasicInfo
  }): UnitSelector {
    const newValues = {
      ranks: values.ranks ?? this.#ranks,
      types: values.types ?? this.#types,
      roles: values.roles ?? this.#roles,
      skillEffects: values.skillEffects ?? this.#skillEffects,
      selectedUnit: values.selectedUnit
    };

    return new UnitSelector(
      newValues.ranks,
      newValues.types,
      newValues.roles,
      newValues.skillEffects,
      newValues.selectedUnit
    );
  }

  #toggleSelector<T>(values: ReadonlySet<T>, value: T): ReadonlySet<T> {
    const newValues = new Set(values);
    if (values.has(value)) {
      newValues.delete(value);
      return newValues;
    } else {
      return newValues.add(value);
    }
  }

  toggleRank(rank: UnitRank): UnitSelector {
    return this.#updateStore({
      ranks: this.#toggleSelector(this.#ranks, rank),
      selectedUnit: undefined
    });
  }

  toggleType(type: UnitType): UnitSelector {
    return this.#updateStore({
      types: this.#toggleSelector(this.#types, type),
      selectedUnit: undefined
    });
  }

  toggleRole(role: UnitRole): UnitSelector {
    return this.#updateStore({
      roles: this.#toggleSelector(this.#roles, role),
      selectedUnit: undefined
    });
  }

  toggleSkillEffect(effect: SkillEffectSelectorCondition): UnitSelector {
    return this.#updateStore({
      skillEffects: this.#toggleSelector(this.#skillEffects, effect),
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

  isSkillEffectSelected(effect: SkillEffectSelectorCondition): boolean {
    return this.#skillEffects.has(effect);
  }

  selectUnits(
    units: UnitBasicData,
    skills: UnitSkillData
  ): ReadonlyArray<UnitBasicInfo> {
    return Object.values(units).filter(unit =>
      this.#matchUnit(unit) && matchSkillConditions(skills[unit.no], this.#skillEffects)
    );
  }

  #matchUnit(unit: UnitBasicInfo): boolean {
    return this.#ranks.has(unit.rank) && this.#types.has(unit.type) && this.#roles.has(unit.role);
  }
}

export default UnitSelector;
