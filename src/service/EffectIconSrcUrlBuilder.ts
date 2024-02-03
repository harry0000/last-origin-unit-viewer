import { Effect } from '../domain/Effect';

function buildIconSrcUrl(effect: Effect): string {
  return `${import.meta.env.BASE_URL}effect_icon/${effect}.webp`;
}

export function buildEffectIconSrcUrl(effect: Effect): string | undefined {
  switch (effect) {
  case Effect.DamageMultiplierUpByStatus:
  case Effect.DamageMultiplierReductionByStatus:
    return buildIconSrcUrl(Effect.DamageMultiplierUp);
  case Effect.AdditionalDamageFocusing:
    return buildIconSrcUrl(Effect.AtkUp);
  case Effect.FixedDamage:
    return buildIconSrcUrl(Effect.AdditionalDamage);
  case Effect.FixedFireDamage:
    return buildIconSrcUrl(Effect.AdditionalFireDamage);
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
  case Effect.RangeUpActive1:
  case Effect.RangeUpActive2:
    return buildIconSrcUrl(Effect.RangeUp);
  case Effect.RangeDownActive1:
    return buildIconSrcUrl(Effect.RangeDown);
  case Effect.LimitActionCount:
    return buildIconSrcUrl(Effect.ActionCountDown);
  case Effect.DamageReductionDown:
  case Effect.MinimizeDamage:
  case Effect.MinimizeDamageLessThanValue:
    return buildIconSrcUrl(Effect.DamageReductionUp);
  case Effect.AreaDamageDispersionUp:
    return buildIconSrcUrl(Effect.DefUp);
  case Effect.AreaDamageDispersionDown:
    return buildIconSrcUrl(Effect.DefDown);
  case Effect.BuffRemoval:
    return buildIconSrcUrl(Effect.AllBuffRemoval);
  case Effect.DebuffRemoval:
  case Effect.EffectRemoval:
    return buildIconSrcUrl(Effect.AllDebuffRemoval);
  case Effect.AbsolutelyActivated:
    return buildIconSrcUrl(Effect.ActivationRatePercentageUp);
  case Effect.ReAttack:
    return buildIconSrcUrl(Effect.FollowUpAttack);
  case Effect.AttackHit:
    return buildIconSrcUrl(Effect.AccUp);
  case Effect.CriReductionByStatus:
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
