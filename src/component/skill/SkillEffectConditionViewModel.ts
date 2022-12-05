import { PassiveSkillEffective } from '../../domain/skill/SkillEffective';
import { SkillEffect } from '../../domain/skill/UnitSkills';
import { SkillEffectScaleFactor } from '../../domain/skill/SkillEffectScaleFactor';
import { SkillEffectTarget, SkillEffectTargetKind } from '../../domain/skill/SkillEffectTarget';
import { isTargetSkillEffectData } from '../../domain/skill/SkillEffectData';

type SkillEffectTargets =
  { self?: true } |
  { self?: true, target: true } |
  { self?: true, target: true } & SkillEffectTarget |
  { around?: true }

type EnemyTargetConditions<T extends SkillEffectTarget = SkillEffectTarget> =
  Required<Extract<T, { kind: typeof SkillEffectTargetKind.Enemy }>>

class SkillEffectConditionViewModel {

  readonly #effect: SkillEffect;

  constructor(effect: SkillEffect) {
    this.#effect = effect;
  }

  get enemyTargetConditions(): EnemyTargetConditions | undefined {
    const hasNoTargetCondition =
      !this.#effect.conditions ||
      this.#effect.conditions.every(cond => !('state' in cond) || !('target' in cond.state));
    const hasNoTargetEffect = !('target' in this.#effect.details);

    // Neither condition view nor targets of effect view shows the target condition.
    const needToShowTargetCondition = hasNoTargetCondition && hasNoTargetEffect;

    if (
      needToShowTargetCondition &&
      isTargetSkillEffectData(this.#effect) &&
      this.#effect.target.kind === SkillEffectTargetKind.Enemy
    ) {
      const { kind, conditions } = this.#effect.target;
      return conditions && { kind, conditions };
    }

    return undefined;
  }

  get hasAnyConditions(): boolean {
    return !!this.#effect.conditions || !!this.enemyTargetConditions;
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
