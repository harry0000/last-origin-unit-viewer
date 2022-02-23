import { PassiveSkillEffective } from '../../domain/skill/SkillEffective';
import { SkillEffect } from '../../domain/skill/UnitSkills';
import { SkillEffectScaleFactor } from '../../domain/skill/SkillEffectScaleFactor';
import { isTargetSkillEffectData, SkillEffectTarget, SkillEffectTargetKind } from '../../domain/skill/SkillEffectData';

type SkillEffectTargets =
  { self?: true } |
  { self?: true, target: true } |
  { self?: true, target: true } & SkillEffectTarget |
  { around?: true }

type EnemyTargetConditions<T extends SkillEffectTarget = SkillEffectTarget> =
  T extends { kind: typeof SkillEffectTargetKind.Enemy } ? Required <T> : never

class SkillEffectConditionViewModel {

  readonly #effect: SkillEffect;

  constructor(effect: SkillEffect) {
    this.#effect = effect;
  }

  get enemyTargetConditions(): EnemyTargetConditions | undefined {
    const needEnemyConditions = !this.#effect.conditions && !('target' in this.#effect.details);

    return (
      needEnemyConditions &&
      isTargetSkillEffectData(this.#effect) &&
      this.#effect.target.kind === SkillEffectTargetKind.Enemy &&
      'conditions' in this.#effect.target &&
      this.#effect.target.conditions ?
        { kind: this.#effect.target.kind, conditions: this.#effect.target.conditions } :
        undefined
    );
  }

  get onlyAdditional(): boolean {
    return !this.#effect.conditions && !this.enemyTargetConditions;
  }

  get hasMultipleConditions(): boolean {
    return (this.#effect.conditions?.length ?? 0) > 1;
  }

  get effective(): PassiveSkillEffective | undefined {
    return 'effective' in this.#effect ? this.#effect.effective : undefined;
  }

  get scaleFactor(): SkillEffectScaleFactor | undefined {
    return 'scale_factor' in this.#effect ? this.#effect.scale_factor : undefined;
  }

  get effectTargets(): SkillEffectTargets {
    const hasSelfEffect   = 'self' in this.#effect.details;
    const hasTargetEffect = 'target' in this.#effect.details;

    if (hasTargetEffect && isTargetSkillEffectData(this.#effect)) {
      // target details already shown by condition state
      const needNotDetails = this.#effect.conditions?.some(cond => 'state' in cond && 'target' in cond.state);

      return Object.assign(
        hasSelfEffect ? { self: true } as const : {},
        {
          target: true,
          ...(needNotDetails ? {} : this.#effect.target)
        }
      );
    } else {
      return hasSelfEffect ? { self: true } : { around: true };
    }
  }

}

export default SkillEffectConditionViewModel;
