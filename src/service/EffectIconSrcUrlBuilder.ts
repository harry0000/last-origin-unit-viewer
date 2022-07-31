import { Effect } from '../domain/Effect';

export function buildEffectIconSrcUrl(effect: Effect): string | undefined {
  switch (effect) {
  case Effect.FixedDamage:
    return `${process.env.PUBLIC_URL}/effect_icon/additional_damage.webp`;
  case Effect.SpdUp:
  case Effect.SetAp:
  case Effect.RefundAp:
    return `${process.env.PUBLIC_URL}/effect_icon/ap_up.webp`;
  case Effect.SpdDown:
    return `${process.env.PUBLIC_URL}/effect_icon/ap_down.webp`;
  case Effect.MinimizeDamage:
    return `${process.env.PUBLIC_URL}/effect_icon/damage_reduction.webp`;
  case Effect.BattleContinuationWithHpRate:
    return `${process.env.PUBLIC_URL}/effect_icon/battle_continuation.webp`;
  case Effect.AllBuffRemoval:
  case Effect.EffectRemoval:
    return `${process.env.PUBLIC_URL}/effect_icon/buff_removal.webp`;
  case Effect.AllDebuffRemoval:
    return `${process.env.PUBLIC_URL}/effect_icon/debuff_removal.webp`;
  case Effect.ReAttack:
    return `${process.env.PUBLIC_URL}/effect_icon/follow_up_attack.webp`;
  case Effect.AttackCritical:
  case Effect.CounterattackCritical:
    return `${process.env.PUBLIC_URL}/effect_icon/charged.webp`;
  case Effect.FormRelease:
    return `${process.env.PUBLIC_URL}/effect_icon/form_change.webp`;
  case Effect.IgnoreProtect:
  case Effect.TagStack:
  case Effect.TagUnstack:
  case Effect.TagRelease:
  case Effect.DeployDefensiveWall:
  case Effect.AMG11Construction:
  case Effect.DeployRabbitDField:
  case Effect.SummonHologramTiger:
  case Effect.GoldenFactoryConstruction:
    return undefined;
  default:
    return `${process.env.PUBLIC_URL}/effect_icon/${effect}.webp`;
  }
}
