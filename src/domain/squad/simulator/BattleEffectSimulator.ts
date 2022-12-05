import { ActiveSkillType, PassiveSkillType, SkillType } from '../../skill/SkillType';
import { AffectionBonus } from '../../UnitAffection';
import {
  ApplicableAllEquipmentEffect,
  ApplicableAllSkillEffect,
  ApplicableStateFullEquipmentEffect,
  ApplicableStateFullSkillEffect,
  EnemySquadState,
  UnitEffectsState,
  UnitOriginState,
  UnitStateFullEffectsState,
  isStateFullConditionEffect
} from './UnitEffectsState';
import { BattleEffect, BattleEffects } from './BattleEffect';
import {
  ChipEquipment,
  GearEquipment,
  OsEquipment,
  UnitChip1Equipment,
  UnitChip2Equipment,
  UnitGearEquipment,
  UnitOsEquipment
} from '../../equipment/UnitEquipment';
import { CoreLinkBonus, FullLinkBonus } from '../../UnitCoreLinkBonusData';
import { EffectTrigger } from '../../EffectTrigger';
import {
  EquipmentEffect,
  EquipmentEffectActivationCondition
} from '../../equipment/EquipmentEffect';
import { EquipmentSlot } from '../../../state/equipment/UnitEquipmentState';
import { FormChangeUnitNumbers } from '../../UnitFormValue';
import { FormChangeUnitSkill, UnitSkill, buildUnitSkill, isFormChangeUnitSkill } from '../../skill/UnitSkill';
import * as Matcher from './ConditionMatcher';
import { MicroValue, MilliPercentageValue, MilliValue } from '../../ValueUnit';
import {
  PassiveSkill,
  PassiveSkillAsEquipmentEffect,
  SkillEffect
} from '../../skill/UnitSkills';
import { SkillEffectActivationCondition } from '../../skill/SkillEffectActivationCondition';
import { SkillEffectType } from '../../skill/SkillEffectType';
import { Squad, TenKeyPosition } from '../Squad';
import { UnitBasicInfo, UnitNumber, UnitRank, UnitRankComparator, UnitRole, UnitType } from '../../UnitBasicInfo';
import UnitDamagedState from '../../UnitDamagedState';
import { UnitLvValue } from '../../status/UnitLv';
import { calcTargetPositions } from '../../skill/SkillAreaOfEffectMatcher';
import { isAllyUnitTargetSkillEffect } from '../../skill/SkillEffectTarget';

import { dropWhile } from '../../../util/array';

function deepCopyOnlySkillLv(skill: UnitSkill): UnitSkill {
  let newSkill =
    buildUnitSkill(skill.unit)
      .changeActive1SkillLv(skill.skillLv.active1Lv)
      .changeActive2SkillLv(skill.skillLv.active2Lv);

  newSkill = skill.skillLv.passive1Lv ?
    newSkill.changePassive1SkillLv(skill.skillLv.passive1Lv) :
    newSkill;

  newSkill = skill.skillLv.passive2Lv ?
    newSkill.changePassive2SkillLv(skill.skillLv.passive2Lv) :
    newSkill;

  newSkill = skill.skillLv.passive3Lv ?
    newSkill.changePassive3SkillLv(skill.skillLv.passive3Lv) :
    newSkill;

  return newSkill;
}

class BattleEffectSimulator {

  static initialize(
    squad: Squad,
    rankRepository: (unit: UnitNumber) => UnitRank,
    lvRepository: (unit: UnitNumber) => UnitLvValue,
    atkStatusRepository: (unit: UnitNumber) => MilliValue,
    defStatusRepository: (unit: UnitNumber) => MilliValue,
    accStatusRepository: (unit: UnitNumber) => MilliPercentageValue,
    evaStatusRepository: (unit: UnitNumber) => MilliPercentageValue,
    criStatusRepository: (unit: UnitNumber) => MilliPercentageValue,
    spdStatusRepository: (unit: UnitNumber) => MicroValue,
    skillRepository: (unit: UnitNumber) => UnitSkill,
    chip1Repository: (unit: UnitNumber) => UnitChip1Equipment,
    chip2Repository: (unit: UnitNumber) => UnitChip2Equipment,
    osRepository: (unit: UnitNumber) => UnitOsEquipment,
    gearRepository: (unit: UnitNumber) => UnitGearEquipment,
    coreLinkBonusRepository: (unit: UnitNumber) => CoreLinkBonus,
    fullLinkBonusRepository: (unit: UnitNumber) => FullLinkBonus | undefined,
    affectionBonusRepository: (unit: UnitNumber) => AffectionBonus | undefined,
    damagedRepository: (unit: UnitNumber) => UnitDamagedState
  ): BattleEffectSimulator {
    const units = squad.units.map<UnitOriginState>(({ position, unit }) => {
      const no = unit.no;
      return {
        position,
        unit,
        rank: rankRepository(no),
        lv: lvRepository(no),
        skill: deepCopyOnlySkillLv(skillRepository(no)),
        status: {
          atk: atkStatusRepository(no),
          def: defStatusRepository(no),
          acc: accStatusRepository(no),
          eva: evaStatusRepository(no),
          cri: criStatusRepository(no),
          spd: spdStatusRepository(no)
        },
        chip1: chip1Repository(no),
        chip2: chip2Repository(no),
        os: osRepository(no),
        gear: gearRepository(no),
        coreLinkBonus: coreLinkBonusRepository(no),
        fullLinkBonus: fullLinkBonusRepository(no),
        affectionBonus: affectionBonusRepository(no),
        damaged: damagedRepository(no)
      };
    });

    return new BattleEffectSimulator(units);
  }

  readonly #wave = 1;
  readonly #round = 1;

  readonly #units: ReadonlyArray<UnitOriginState>;
  readonly #enemies: EnemySquadState = { 4: { type: UnitType.Light, role: UnitRole.Attacker } }

  private constructor(units: ReadonlyArray<UnitOriginState>) {
    this.#units = units;
  }

  run(): ReadonlyArray<[UnitNumber, ReadonlyArray<BattleEffect>]> {
    const effectsPerUnit = this.#pickApplicableEffects(this.#units);

    const stateFullEffects = this.#applyNoStateEffects(effectsPerUnit);

    const hasDependencyStateEffects = this.#applyStaticStateEffects(stateFullEffects);

    this.#applyHasDependencyStateEffects(hasDependencyStateEffects);

    return hasDependencyStateEffects.map(({ unit: { no }, appliedEffects }) => [no, appliedEffects.build()]);
  }

  #pickApplicableEffects(squadUnits: ReadonlyArray<UnitOriginState>): ReadonlyArray<UnitEffectsState> {
    return squadUnits
      .map<UnitEffectsState>(unit => {
        const initialState: UnitEffectsState = {
          ...unit,
          applicableSkillEffects: [
            ...this.#pickActiveSkillEffects('active1', unit),
            ...this.#pickActiveSkillEffects('active2', unit),
            ...this.#pickPassiveSkillEffects('passive1', unit),
            ...this.#pickPassiveSkillEffects('passive2', unit),
            ...this.#pickPassiveSkillEffects('passive3', unit)
          ],
          applicableEquipmentEffects: [
            ...this.#pickEquipmentEffects(unit)
          ],
          appliedEffects: new BattleEffects()
        };

        const formChangeApplied = (): boolean => {
          return initialState.applicableSkillEffects.some(({ effect, targets, type, affected_by }) => {
            if (
              'self' in effect.details &&
              effect.details.self?.form_change &&
              effect.conditions?.some(cond =>
                'state' in cond &&
                Matcher.matchStaticSelfState(cond.state, unit, targets) &&
                initialState.appliedEffects.matchSelfAffectedState(cond.state) &&
                Matcher.matchSquadState(cond.state, unit, squadUnits) &&
                Matcher.matchEnemyState(cond.state, this.#enemies)
              )
            ) {
              const scaled = this.#calculateScaled(effect, unit.unit, unit.position);

              initialState.appliedEffects.applySkillEffects(
                effect.details.self,
                type,
                affected_by,
                scaled && scaled.value === 0 ? undefined : scaled
              );

              return true;
            } else {
              return false;
            }
          });
        };

        if (hasFormChangeUnitSkill(unit) && formChangeApplied()) {
          const changedUnit = { ...unit, skill: unit.skill.changeForm() };
          return {
            ...initialState,
            skill: changedUnit.skill,
            applicableSkillEffects: [
              ...this.#pickActiveSkillEffects('active1', changedUnit),
              ...this.#pickActiveSkillEffects('active2', changedUnit),
              ...this.#pickPassiveSkillEffects('passive1', changedUnit),
              ...this.#pickPassiveSkillEffects('passive2', changedUnit),
              ...this.#pickPassiveSkillEffects('passive3', changedUnit)
            ]
          };
        } else {
          return initialState;
        }
      });
  }

  /**
   * pick skill effects which have wave/round trigger.
   *
   * @param skillType
   * @param unit
   */
  #pickActiveSkillEffects(
    skillType: ActiveSkillType,
    unit: UnitOriginState
  ): ReadonlyArray<ApplicableAllSkillEffect> {
    return pickSkillEffects(skillType, unit, cond => this.#matchRoundTrigger(cond));
  }

  /**
   * pick skill effects which do not have trigger(immediate application) or have wave/round trigger.
   *
   * @param skillType
   * @param unit
   */
  #pickPassiveSkillEffects(
    skillType: PassiveSkillType,
    unit: UnitOriginState
  ): ReadonlyArray<ApplicableAllSkillEffect> {
    return pickSkillEffects(skillType, unit, cond => !('trigger' in cond) || this.#matchRoundTrigger(cond));
  }

  #pickEquipmentEffects(unit: UnitOriginState): ReadonlyArray<ApplicableAllEquipmentEffect> {
    const extract = (
      equipment: UnitChip1Equipment | UnitChip2Equipment | UnitOsEquipment | UnitGearEquipment
    ): [EquipmentEffect, ApplicableAllEquipmentEffect['affected_by'] | undefined] => {
      if (equipment instanceof UnitChip1Equipment) {
        return [equipment.chip1Effects(unit.lv), buildAffectedBy('chip1', equipment.chip1)];
      } else if (equipment instanceof UnitChip2Equipment) {
        return [equipment.chip2Effects(unit.lv), buildAffectedBy('chip2', equipment.chip2)];
      } else if (equipment instanceof UnitOsEquipment) {
        return [equipment.osEffects(unit.lv), buildAffectedBy('os', equipment.os)];
      } else {
        return [equipment.gearEffects(unit.lv), buildAffectedBy('gear', equipment.gear)];
      }
    };

    const pickEffects = (
      equipment: UnitChip1Equipment | UnitChip2Equipment | UnitOsEquipment | UnitGearEquipment
    ): ReadonlyArray<ApplicableAllEquipmentEffect> => {
      const [effect, affected_by] = extract(equipment);
      if (!affected_by || !effect.equipment_effects?.length && !effect.effects?.length) {
        return [];
      }

      return [
        ...(effect.equipment_effects?.flatMap(effect =>
          this.#matchRoundTrigger(effect.condition) ? { effect, type: SkillEffectType.General, affected_by } : []
        ) ?? []),
        ...(effect.effects?.flatMap(effect =>
          this.#matchRoundTrigger(effect.condition) ? { effect, type: SkillEffectType.Buff, affected_by } : []
        ) ?? [])
      ];
    };

    return [
      ...pickEffects(unit.chip1),
      ...pickEffects(unit.chip2),
      ...pickEffects(unit.os),
      ...pickEffects(unit.gear)
    ];
  }

  #applyNoStateEffects(squadUnits: ReadonlyArray<UnitEffectsState>): ReadonlyArray<UnitStateFullEffectsState> {
    return squadUnits.map<UnitStateFullEffectsState>(unit => {
      const applySkillEffect = (arg: ApplicableAllSkillEffect): arg is ApplicableStateFullSkillEffect => {
        const scaled = this.#calculateScaled(arg.effect, unit.unit, unit.position);
        if (scaled && scaled.value === 0) {
          return false;
        }

        const isStateFull = isStateFullConditionEffect(arg);
        if (!isStateFull) {
          const { effect, targets, type, affected_by } = arg;
          if ('self' in effect.details && effect.details.self) {
            unit.appliedEffects.applySkillEffects(effect.details.self, type, affected_by, scaled);
          }
          if (isAllyUnitTargetSkillEffect(effect)) {
            squadUnits
              .filter(target => targets.has(target.position) && Matcher.matchTarget(target.unit, unit.unit, effect.target))
              .forEach(target => {
                effect.details.target &&
                target.appliedEffects.applySkillEffects(effect.details.target, type, affected_by, scaled);
              });
          }
        }

        return isStateFull;
      };

      const applyEquipmentEffect = (arg: ApplicableAllEquipmentEffect): arg is ApplicableStateFullEquipmentEffect => {
        const { effect, type, affected_by } = arg;
        const hasState = !!effect.condition.state;

        if (!hasState) {
          // HACK: Currently, equipment does not have effects on allied targets. (ignore effects on 'target')
          unit.appliedEffects.applyEquipmentEffects(
            'self' in effect.details ? effect.details.self : effect.details,
            type,
            affected_by
          );
        }

        return hasState;
      };

      const applicableSkillEffects = unit.applicableSkillEffects.filter(applySkillEffect);
      const applicableEquipmentEffects = unit.applicableEquipmentEffects.filter(applyEquipmentEffect);

      return { ...unit, applicableSkillEffects, applicableEquipmentEffects };
    });
  }

  #applyStaticStateEffects(squadUnits: ReadonlyArray<UnitStateFullEffectsState>): ReadonlyArray<UnitStateFullEffectsState> {
    return squadUnits.map<UnitStateFullEffectsState>(unit => {
      const pickRestSkillEffect = ({ effect, targets, type, affected_by }: ApplicableStateFullSkillEffect): boolean => {
        const scaled = this.#calculateScaled(effect, unit.unit, unit.position);
        if (scaled && scaled.value === 0) {
          return false;
        }

        let hasDependency = false;
        let appliedEffect = false;
        effect.conditions.forEach(({ state }) => {
          const hasNoDependency =
            (!('self'   in state) || state.self.every(Matcher.hasNoDependencyState)) &&
            (!('target' in state) || state.target.every(Matcher.hasNoDependencyState));
          if (!hasNoDependency) {
            hasDependency = true;
            return;
          }

          if (
            !appliedEffect &&
            Matcher.matchStaticSelfState(state, unit, targets) &&
            Matcher.matchSquadState(state, unit, this.#units) &&
            Matcher.matchEnemyState(state, this.#enemies)
          ) {
            if (isAllyUnitTargetSkillEffect(effect)) {
              const hasNoTargetState = !('target' in state);
              const targetUnits =
                squadUnits
                  .filter(target =>
                    targets.has(target.position) &&
                    Matcher.matchStaticTargetState(state, unit, target) &&
                    Matcher.matchTarget(target.unit, unit.unit, effect.target)
                  );
              const matchedAnyUnit = targetUnits.length > 0;

              if (hasNoTargetState || matchedAnyUnit) {
                if ('self' in effect.details && effect.details.self) {
                  appliedEffect = true;
                  unit.appliedEffects.applySkillEffects(effect.details.self, type, affected_by, scaled);
                }

                targetUnits.forEach(target => {
                  appliedEffect = true;

                  effect.details.target &&
                  target.appliedEffects.applySkillEffects(effect.details.target, type, affected_by, scaled);
                });
              }
            } else {
              if ('self' in effect.details && effect.details.self) {
                appliedEffect = true;
                unit.appliedEffects.applySkillEffects(effect.details.self, type, affected_by, scaled);
              }
            }
          }
        });

        return hasDependency && !appliedEffect;
      };

      const pickRestEquipmentEffect = ({ effect, type, affected_by }: ApplicableStateFullEquipmentEffect): boolean => {
        const state = effect.condition.state;
        const hasNoDependency = Matcher.hasNoDependencyState(state);
        if (!hasNoDependency) {
          return true;
        }

        if (Matcher.matchStaticEquipmentState(state, unit)) {
          // HACK: Currently, equipment does not have effects on allied targets. (ignore effects on 'target')
          unit.appliedEffects.applyEquipmentEffects(
            'self' in effect.details ? effect.details.self : effect.details,
            type,
            affected_by
          );
        }

        return false;
      };

      const applicableSkillEffects = unit.applicableSkillEffects.filter(pickRestSkillEffect);
      const applicableEquipmentEffects = unit.applicableEquipmentEffects.filter(pickRestEquipmentEffect);

      return { ...unit, applicableSkillEffects, applicableEquipmentEffects };
    });
  }

  #applyHasDependencyStateEffects(squadUnits: ReadonlyArray<UnitStateFullEffectsState>): void {
    squadUnits.forEach(unit => {
      const applyingPool: Array<() => boolean> = [];

      unit.applicableSkillEffects.forEach(({ effect, targets, type, affected_by }) => {
        // HACK: Each condition has a different trigger, so no two conditions match at the same time.
        // HACK: `effect.conditions` length is almost certainly 1.
        const state = effect.conditions[0].state;
        if (
          Matcher.matchStaticSelfState(state, unit, targets) &&
          Matcher.matchSquadState(state, unit, squadUnits) &&
          Matcher.matchEnemyState(state, this.#enemies)
        ) {
          const scaled = this.#calculateScaled(effect, unit.unit, unit.position);
          if (scaled && scaled.value === 0) {
            return;
          }

          const tryApplying = () => {
            if (!unit.appliedEffects.matchSelfAffectedState(state)) {
              return false;
            }

            if (isAllyUnitTargetSkillEffect(effect)) {
              const hasNoTargetState = !('target' in state);
              const targetUnits =
                squadUnits
                  .filter(target =>
                    targets.has(target.position) &&
                    Matcher.matchStaticTargetState(state, unit, target) &&
                    Matcher.matchTarget(target.unit, unit.unit, effect.target)
                  );
              const matchedAnyUnit =
                targetUnits.some(target => target.appliedEffects.matchTargetAffectedState(state));

              if (hasNoTargetState || matchedAnyUnit) {
                if ('self' in effect.details && effect.details.self) {
                  unit.appliedEffects.applySkillEffects(effect.details.self, type, affected_by, scaled);
                }

                targetUnits.forEach(target => {
                  effect.details.target &&
                  target.appliedEffects.tryApplyingTargetSkillEffects(
                    state,
                    effect.details.target,
                    type,
                    affected_by,
                    scaled
                  );
                });
              } else {
                return false;
              }
            } else {
              if ('self' in effect.details && effect.details.self) {
                unit.appliedEffects.applySkillEffects(effect.details.self, type, affected_by, scaled);
              }
            }

            return true;
          };

          if (tryApplying()) {
            let applied: boolean;
            do {
              applied = false;

              dropWhile(applyingPool, f => {
                const r = f();
                applied = applied || r;
                return r;
              });
            } while (applied && applyingPool.length > 0);
          } else {
            applyingPool.push(tryApplying);
          }
        }
      });

      // clean up
      unit.applicableSkillEffects.splice(0);
    });

    squadUnits.forEach(unit => {
      unit.applicableEquipmentEffects.forEach(({ effect, type, affected_by }) => {
        if (
          Matcher.matchStaticEquipmentState(effect.condition.state, unit) &&
          unit.appliedEffects.matchAffectedEquipmentState(effect.condition.state)
        ) {
          unit.appliedEffects.applyEquipmentEffects(
            'self' in effect.details ? effect.details.self : effect.details,
            type,
            affected_by
          );
        }
      });

      // clean up
      unit.applicableEquipmentEffects.splice(0);
    });
  }

  #matchRoundTrigger(cond: SkillEffectActivationCondition | EquipmentEffectActivationCondition): boolean {
    if (!('trigger' in cond)) {
      return false;
    }

    switch (cond.trigger) {
    case EffectTrigger.StartWave:
      return this.#wave === 1;
    case EffectTrigger.StartRound:
      return (
        !cond.round ||
        'at'    in cond.round && cond.round.at    === this.#round ||
        'from'  in cond.round && cond.round.from  <=  this.#round ||
        'until' in cond.round && cond.round.until >=  this.#round
      );
    default:
      // HACK: currently, ignore `round: 'odd' | 'even'`
      return false;
    }
  }

  #calculateScaled(
    effect:  SkillEffect,
    source: UnitBasicInfo,
    sourcePosition: TenKeyPosition
  ): BattleEffect['scaled'] | { value: 0 } | undefined {
    if (!('scale_factor' in effect && effect.scale_factor)) {
      return undefined;
    }

    const value = Matcher.countMatchedScaleFactor(effect.scale_factor, source, sourcePosition, this.#units, this.#enemies);
    return { by: effect.scale_factor, value };
  }
}

function hasFormChangeUnitSkill<N extends FormChangeUnitNumbers>(
  unit: UnitOriginState
): unit is UnitOriginState & { skill: FormChangeUnitSkill<N> } {
  return isFormChangeUnitSkill(unit.skill);
}

function buildAffectedBy(
  slot: EquipmentSlot,
  equipment: ChipEquipment | OsEquipment | GearEquipment | undefined
): ApplicableAllEquipmentEffect['affected_by'] | undefined {
  return equipment && { type: 'equipment', slot, id: equipment.id, rank: equipment.rank, lv: equipment.enhanceLv };
}

function pickSkillEffects(
  skillType: SkillType,
  unit: UnitOriginState,
  pick: (cond: NonNullable<SkillEffect['conditions']>[number]) => boolean
): ReadonlyArray<ApplicableAllSkillEffect> {
  return extractSkillEffects(skillType, unit)
    .flatMap(e => {
      const conditions = (e.effect.conditions ?? []).filter(cond => pick(cond));
      if (conditions.length === 0) {
        return [];
      }

      const effect = { ...e.effect, conditions };
      return { ...e, ...effect };
    });
}

function extractSkillEffects(
  skillType: SkillType,
  unit: UnitOriginState
): ReadonlyArray<ApplicableAllSkillEffect> {
  const lv = unit.skill.skillLv[`${skillType}Lv`] ?? 10;
  const affected_by: BattleEffect['affected_by'] = isFormChangeUnitSkill(unit.skill) ?
    { type: 'ally', skillType, lv, no: unit.skill.unit.no, form: unit.skill.unitForm() } :
    { type: 'ally', skillType, lv, no: unit.skill.unit.no as Exclude<UnitNumber, FormChangeUnitNumbers> };

  const extract = (
    skill: PassiveSkill | PassiveSkillAsEquipmentEffect
  ): ReturnType<typeof extractSkillEffects> => {
    const asSkillEffect = 'effects' in skill;
    const type = asSkillEffect ? SkillEffectType.Buff : SkillEffectType.General;
    const effects = asSkillEffect ? skill.effects : skill.equipment_effects;
    const targets = calcTargetPositions(skill.area, unit.position);

    return effects.map(effect => ({ effect, targets, type, affected_by }));
  };

  switch (skillType) {
  case 'active1': {
    const skill = unit.skill.active1Skill(unit.coreLinkBonus, unit.fullLinkBonus, unit.affectionBonus);
    return extract(skill);
  }
  case 'active2': {
    const skill = unit.skill.active2Skill(unit.coreLinkBonus, unit.fullLinkBonus, unit.affectionBonus);
    return extract(skill);
  }
  case 'passive1': {
    const skill = unit.skill.passive1Skill(unit.fullLinkBonus, unit.affectionBonus);
    return skill && UnitRankComparator[unit.rank].greaterThan(UnitRank.B) ? extract(skill) : [];
  }
  case 'passive2': {
    const skill = unit.skill.passive2Skill(unit.fullLinkBonus, unit.affectionBonus);
    return skill && UnitRankComparator[unit.rank].greaterThan(UnitRank.A) ? extract(skill) : [];
  }
  case 'passive3': {
    const skill = unit.skill.passive3Skill(unit.fullLinkBonus, unit.affectionBonus);
    return skill && UnitRankComparator[unit.rank].greaterThan(UnitRank.S) ? extract(skill) : [];
  }
  }
}

export default BattleEffectSimulator;
