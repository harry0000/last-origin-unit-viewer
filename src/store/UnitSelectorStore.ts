import { UnitBasicData, UnitBasicInfo, UnitRank, UnitRole, UnitType } from '../domain/UnitBasicInfo';
import { UnitSkillData } from '../domain/UnitSkillData';
import {
  SkillEffectSelectorCondition,
  matchSkillConditions
} from './SkillEffectSelectorCondition';

class UnitSelectorStore {

  static initialState(): UnitSelectorStore {
    return new UnitSelectorStore(
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

  private updateStore(values: {
    ranks?: ReadonlySet<UnitRank>,
    types?: ReadonlySet<UnitType>,
    roles?: ReadonlySet<UnitRole>,
    skillEffects?: ReadonlySet<SkillEffectSelectorCondition>,
    selectedUnit?: UnitBasicInfo
  }): UnitSelectorStore {
    const newValues = {
      ranks: values.ranks ?? this.#ranks,
      types: values.types ?? this.#types,
      roles: values.roles ?? this.#roles,
      skillEffects: values.skillEffects ?? this.#skillEffects,
      selectedUnit: values.selectedUnit
    };

    return new UnitSelectorStore(
      newValues.ranks,
      newValues.types,
      newValues.roles,
      newValues.skillEffects,
      newValues.selectedUnit
    );
  }

  private toggleSelector<T>(values: ReadonlySet<T>, value: T): ReadonlySet<T> {
    const newValues = new Set(values);
    if (values.has(value)) {
      newValues.delete(value);
      return newValues;
    } else {
      return newValues.add(value);
    }
  }

  toggleRank(rank: UnitRank): UnitSelectorStore {
    return this.updateStore({
      ranks: this.toggleSelector(this.#ranks, rank),
      selectedUnit: undefined
    });
  }

  toggleType(type: UnitType): UnitSelectorStore {
    return this.updateStore({
      types: this.toggleSelector(this.#types, type),
      selectedUnit: undefined
    });
  }

  toggleRole(role: UnitRole): UnitSelectorStore {
    return this.updateStore({
      roles: this.toggleSelector(this.#roles, role),
      selectedUnit: undefined
    });
  }

  toggleSkillEffect(effect: SkillEffectSelectorCondition): UnitSelectorStore {
    return this.updateStore({
      skillEffects: this.toggleSelector(this.#skillEffects, effect),
      selectedUnit: undefined
    });
  }

  selectUnit(unit: UnitBasicInfo): UnitSelectorStore {
    if (unit.no !== this.selectedUnit?.no) {
      return this.updateStore({ selectedUnit: unit });
    }
    return this;
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
      this.matchUnit(unit) && matchSkillConditions(skills[unit.no], this.#skillEffects)
    );
  }

  private matchUnit(unit: UnitBasicInfo): boolean {
    return this.#ranks.has(unit.rank) && this.#types.has(unit.type) && this.#roles.has(unit.role);
  }
}

export default UnitSelectorStore;
