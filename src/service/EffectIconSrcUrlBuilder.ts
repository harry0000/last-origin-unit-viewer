import { Effect } from '../domain/Effect';

function buildIconSrcUrl(effect: Effect): string {
  return `${process.env.PUBLIC_URL}/effect_icon/${effect}.webp`;
}

export function buildEffectIconSrcUrl(effect: Effect): string | undefined {
  switch (effect) {
  case Effect.DamageMultiplierUpByStatus:
    return buildIconSrcUrl(Effect.DamageMultiplierUp);
  case Effect.AdditionalDamageFocusing:
    return buildIconSrcUrl(Effect.AtkUp);
  case Effect.FixedDamage:
    return buildIconSrcUrl(Effect.AdditionalDamage);
  case Effect.AtkValueUp:
  case Effect.AtkValueUpByUnitValue:
    return buildIconSrcUrl(Effect.AtkUp);
  case Effect.DefValueUp:
    return buildIconSrcUrl(Effect.DefUp);
  case Effect.SpdUp:
  case Effect.SetAp:
  case Effect.RefundAp:
    return buildIconSrcUrl(Effect.ApUp);
  case Effect.SpdDown:
    return buildIconSrcUrl(Effect.ApDown);
  case Effect.RangeDownActive1:
    return buildIconSrcUrl(Effect.RangeDown);
  case Effect.RangeUpActive2:
    return buildIconSrcUrl(Effect.RangeUp);
  case Effect.MinimizeDamage:
  case Effect.MinimizeDamageLessThanValue:
    return buildIconSrcUrl(Effect.DamageReduction);
  case Effect.AreaDamageDispersion:
    return buildIconSrcUrl(Effect.DefUp);
  case Effect.BuffRemoval:
    return buildIconSrcUrl(Effect.AllBuffRemoval);
  case Effect.DebuffRemoval:
    return buildIconSrcUrl(Effect.AllDebuffRemoval);
  case Effect.AbsolutelyActivated:
    return buildIconSrcUrl(Effect.ActivationRatePercentageUp);
  case Effect.ReAttack:
    return buildIconSrcUrl(Effect.FollowUpAttack);
  case Effect.AttackHit:
    return buildIconSrcUrl(Effect.AccUp);
  case Effect.AttackCritical:
    return buildIconSrcUrl(Effect.CriUp);
  case Effect.IgnoreDef:
    return buildIconSrcUrl(Effect.DefensePenetration);
  case Effect.FormRelease:
    return buildIconSrcUrl(Effect.FormChange);
  case Effect.HpUp:
  case Effect.HpDown:
  case Effect.TagStack:
  case Effect.TagUnstack:
  case Effect.TagRelease:
  case Effect.AMG11Construction:
  case Effect.DeployRabbitDField:
  case Effect.SummonHologramTiger:
  case Effect.GoldenFactoryConstruction:
    return undefined;
  default:
    return buildIconSrcUrl(effect);
  }
}
