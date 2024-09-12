import deepEqual from 'fast-deep-equal';

import { ActiveSkillType, PassiveSkillType, SkillType, availablePassiveSkill } from '../../skill/SkillType';
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
  EffectDetails,
  EffectDetailsAsSkill,
  EquipmentEffect,
  EquipmentEffectActivationCondition,
  EquipmentEffectActivationState,
  EquipmentEffectAsSkillSelfActivationCondition,
  EquipmentEffectAsSkillTargetActivationCondition,
  EquipmentEffectValue
} from '../../equipment/EquipmentEffect';
import { EquipmentSlot } from '../../../state/equipment/UnitEquipmentState';
import { FormChangeUnitNumbers } from '../../UnitFormValue';
import { FormChangeUnitSkill, UnitSkill, buildUnitSkill, isFormChangeUnitSkill } from '../../skill/UnitSkill';
import * as Matcher from './ConditionMatcher';
import { MicroValue, MilliPercentageValue, MilliValue } from '../../ValueUnit';
import {
  PassiveSkill,
  PassiveSkillAsEquipmentEffect,
  SkillEffect,
  SkillEffectDetails,
  hasSelfSkillEffect,
  hasTargetSkillEffect
} from '../../skill/UnitSkills';
import { SkillEffectActivationCondition } from '../../skill/SkillEffectActivationCondition';
import { SkillEffectType } from '../../skill/SkillEffectType';
import { SourceOfEffect } from './SourceOfEffect';
import { Squad, TenKeyPosition } from '../Squad';
import { UnitBasicInfo, UnitNumber, UnitRank, UnitRole, UnitType } from '../../UnitBasicInfo';
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

  // readonly #wave = 1;
  readonly #round = 1;

  readonly #units: ReadonlyArray<UnitOriginState>;
  readonly #enemies: EnemySquadState = { 4: { type: UnitType.Light, role: UnitRole.Attacker } };

  private constructor(units: ReadonlyArray<UnitOriginState>) {
    this.#units = units;
  }

  run(): ReadonlyArray<[UnitNumber, ReadonlyArray<BattleEffect>]> {
    const effectsPerUnit = this.#pickApplicableEffects(this.#units);

    const hasDependencyStateEffects = this.#applyStaticStateEffects(effectsPerUnit);

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
                Matcher.matchStaticSquadState(cond.state, unit, squadUnits, this.#enemies) &&
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
              ...this.#pickPassiveSkillEffects('passive1', changedUnit).filter(dropFormChangeEffect),
              ...this.#pickPassiveSkillEffects('passive2', changedUnit).filter(dropFormChangeEffect),
              ...this.#pickPassiveSkillEffects('passive3', changedUnit).filter(dropFormChangeEffect)
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
    const pickEffects = (slot: EquipmentSlot): ReadonlyArray<ApplicableAllEquipmentEffect> => {
      const [effect, affected_by] = extractEquipmentEffect(slot, unit);
      if (!affected_by) {
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

    const pickChipEffects = (): ReadonlyArray<ApplicableAllEquipmentEffect> => {
      const c1 = unit.chip1.chip1;
      const c2 = unit.chip2.chip2;

      if (c1?.id === c2?.id) {
        // remove duplicate effect.
        if (c1?.enhanceLv === c2?.enhanceLv) {
          return [...pickEffects('chip1')];
        } else {
          const c1Effects = pickEffects('chip1');
          const c2Effects = pickEffects('chip2');

          return [
            ...c1Effects,
            ...c2Effects.filter(({ effect: { details } }, i) => !deepEqual(details, c1Effects[i]?.effect?.details))
          ];
        }
      } else {
        return [...pickEffects('chip1'), ...pickEffects('chip2')];
      }
    };

    return [
      ...pickChipEffects(),
      ...pickEffects('os'),
      ...pickEffects('gear')
    ];
  }

  #applyStaticStateEffects(squadUnits: ReadonlyArray<UnitEffectsState>): ReadonlyArray<UnitStateFullEffectsState> {
    return squadUnits.map<UnitStateFullEffectsState>(unit => {
      const pickRestSkillEffect = (arg: ApplicableAllSkillEffect): arg is ApplicableStateFullSkillEffect => {
        const scaled = this.#calculateScaled(arg.effect, unit.unit, unit.position);
        if (scaled && scaled.value === 0) {
          return false;
        }

        if (isStateFullConditionEffect(arg)) {
          const { effect, targets, type, affected_by } = arg;

          let hasDependency = false;
          let appliedEffect = false;
          effect.conditions.forEach(({ state }) => {
            const hasNoDependency =
              (!('self'   in state) || state.self.every(Matcher.hasNoDependencyState)) &&
              (!('target' in state) || state.target.every(Matcher.hasNoDependencyState)) &&
              (!('squad'  in state) || Matcher.hasNoDependencySquadState(state.squad));
            if (!hasNoDependency) {
              hasDependency = true;
              return;
            }

            if (
              !appliedEffect &&
              Matcher.matchStaticSelfState(state, unit, targets) &&
              Matcher.matchStaticSquadState(state, unit, this.#units, this.#enemies) &&
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
                  appliedEffect = true;
                  applyEffects(effect.details, unit, targetUnits, type, affected_by, scaled);
                }
              } else {
                appliedEffect = true;
                applyEffects(effect.details, unit, [], type, affected_by, scaled);
              }
            }
          });

          return hasDependency && !appliedEffect;
        } else {
          const { effect, targets, type, affected_by } = arg;
          const targetUnits = isAllyUnitTargetSkillEffect(effect) ?
            squadUnits.filter(target => targets.has(target.position) && Matcher.matchTarget(target.unit, unit.unit, effect.target)) :
            [];

          applyEffects(effect.details, unit, targetUnits, type, affected_by, scaled);

          return false;
        }
      };

      const pickRestEquipmentEffect = (arg: ApplicableAllEquipmentEffect): arg is ApplicableStateFullEquipmentEffect => {
        const { effect, type, affected_by } = arg;
        const state = extractActivationState(effect.condition.state);
        const hasNoDependency = !state || Matcher.hasNoDependencyState(state);
        if (!hasNoDependency) {
          return true;
        }

        const selfEffect = extractSelfEquipmentEffect(effect);
        if (
          selfEffect &&
          (!state || Matcher.matchStaticEquipmentState(state, unit))
        ) {
          // HACK: Currently, equipment has only effects on self at start_wave & start_round. (ignore effects on 'target')
          unit.appliedEffects.applyEquipmentEffects(
            selfEffect,
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
          Matcher.matchStaticSquadState(state, unit, squadUnits, this.#enemies) &&
          Matcher.matchAffectedSquadUnitState(state, unit, squadUnits) &&
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
              const hasSelfEffect = 'self' in effect.details && effect.details.self;
              const targetUnits =
                squadUnits
                  .filter(target =>
                    targets.has(target.position) &&
                    Matcher.matchStaticTargetState(state, unit, target) &&
                    Matcher.matchTarget(target.unit, unit.unit, effect.target)
                  );
              const matchedAnyUnit =
                targetUnits.some(target => target.appliedEffects.matchTargetAffectedState(state));

              if (
                hasNoTargetState ||
                !hasSelfEffect ||
                matchedAnyUnit // Effects on self must meet target conditions.
              ) {
                if (hasSelfEffect) {
                  unit.appliedEffects.applySkillEffects(effect.details.self, type, affected_by, scaled);
                }

                targetUnits.forEach(target => {
                  if (effect.details.target) {
                    target.appliedEffects.tryApplyingTargetSkillEffects(
                      state,
                      effect.details.target,
                      type,
                      affected_by,
                      scaled
                    );
                  }
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
        const selfEffect = extractSelfEquipmentEffect(effect);
        const state = extractActivationState(effect.condition.state);
        if (
          selfEffect &&
          state &&
          Matcher.matchStaticEquipmentState(state, unit) &&
          unit.appliedEffects.matchAffectedEquipmentState(state)
        ) {
          // HACK: Currently, equipment has only effects on self at start_wave & start_round. (ignore effects on 'target')
          unit.appliedEffects.applyEquipmentEffects(
            selfEffect,
            type,
            affected_by
          );
        }
      });

      // clean up
      unit.applicableEquipmentEffects.splice(0);
    });
  }

  #matchRoundTrigger(
    cond:
      SkillEffectActivationCondition |
      EquipmentEffectActivationCondition |
      EquipmentEffectAsSkillSelfActivationCondition |
      EquipmentEffectAsSkillTargetActivationCondition
  ): boolean {
    if (!('trigger' in cond)) {
      return false;
    }

    switch (cond.trigger) {
    case EffectTrigger.StartWave:
      return true; // this.#round === 1;
    case EffectTrigger.StartRound:
      return !cond.round || (
        typeof cond.round === 'string' ?
          this.#round % 2 === (cond.round === 'odd' ? 1 : 0) :
          'at'    in cond.round && cond.round.at    === this.#round ||
          'from'  in cond.round && cond.round.from  <=  this.#round ||
          'until' in cond.round && cond.round.until >=  this.#round
      );
    default:
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

function dropFormChangeEffect(
  { effect: { details } }: ApplicableAllSkillEffect
): boolean {
  const hasFormChangeEffect = 'self' in details && !!details.self?.form_change;
  return !hasFormChangeEffect;
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
      return { ...e, effect } as unknown as ApplicableAllSkillEffect;
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
  case SkillType.Active1: {
    const skill = unit.skill.active1Skill(unit.coreLinkBonus, unit.fullLinkBonus, unit.affectionBonus);
    return extract(skill);
  }
  case SkillType.Active2: {
    const skill = unit.skill.active2Skill(unit.coreLinkBonus, unit.fullLinkBonus, unit.affectionBonus);
    return extract(skill);
  }
  case SkillType.Passive1: {
    const skill = unit.skill.passive1Skill(unit.fullLinkBonus, unit.affectionBonus);
    return skill && availablePassiveSkill(skillType, unit.rank) ? extract(skill) : [];
  }
  case SkillType.Passive2: {
    const skill = unit.skill.passive2Skill(unit.fullLinkBonus, unit.affectionBonus);
    return skill && availablePassiveSkill(skillType, unit.rank) ? extract(skill) : [];
  }
  case SkillType.Passive3: {
    const skill = unit.skill.passive3Skill(unit.fullLinkBonus, unit.affectionBonus);
    return skill && availablePassiveSkill(skillType, unit.rank) ? extract(skill) : [];
  }
  }
}

function extractEquipmentEffect(
  slot: EquipmentSlot,
  unit: UnitOriginState
): [EquipmentEffect, ApplicableAllEquipmentEffect['affected_by'] | undefined] {
  switch (slot) {
  case 'chip1': return [unit[slot].chip1Effects(unit.lv), buildAffectedBy('chip1', unit[slot].chip1)];
  case 'chip2': return [unit[slot].chip2Effects(unit.lv), buildAffectedBy('chip2', unit[slot].chip2)];
  case 'os':    return [unit[slot].osEffects(unit.lv),    buildAffectedBy('os', unit[slot].os)];
  case 'gear':  return [unit[slot].gearEffects(unit.lv),  buildAffectedBy('gear', unit[slot].gear)];
  }
}

function extractActivationState(
  state:
    EquipmentEffectActivationCondition['state'] |
    EquipmentEffectAsSkillSelfActivationCondition['state'] |
    EquipmentEffectAsSkillTargetActivationCondition['state']
): EquipmentEffectActivationState | undefined {
  return state && (
    // HACK: Currently, there is no target state at start_wave & start_round.
    'self' in state ? state.self : 'target' in state ? state.target : state
  );
}

function extractSelfEquipmentEffect(effect: EffectDetails | EffectDetailsAsSkill): EquipmentEffectValue | undefined {
  return (
    'self' in effect.details ?
      effect.details.self :
      !('target' in effect.details) ?
        effect.details :
        undefined
  );
}

function applyEffects(
  details: SkillEffectDetails,
  source: UnitEffectsState,
  targets: ReadonlyArray<UnitEffectsState>,
  type: SkillEffectType,
  affected_by: SourceOfEffect,
  scaled: BattleEffect['scaled']
): void {
  if (hasSelfSkillEffect(details)) {
    source.appliedEffects.applySkillEffects(details.self, type, affected_by, scaled);
  }

  if (hasTargetSkillEffect(details)) {
    targets.forEach(target => {
      target.appliedEffects.applySkillEffects(details.target, type, affected_by, scaled);
    });
  }
}

export default BattleEffectSimulator;
