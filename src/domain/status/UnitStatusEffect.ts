import UnitParameterEnhancementLv from './UnitParameterEnhancementLv';
import { EquipmentId } from '../EquipmentData';
import { IntegerValue, MilliPercentageValue, MilliValue } from '../SkillEffectValue';

// TODO: Add full_link & rank_up
type StatusEffected = {
  effectedBy: {
    name: 'core_link' | EquipmentId,
    value: number
  }
}

type EnhancementStatusEffected = {
  effectedBy: {
    name: 'enhancement',
    value: number
  }
}

export type EnhanceableStatusEffected = StatusEffected | EnhancementStatusEffected

export type HpEffect = IntegerValue & EnhanceableStatusEffected
export type AtkEffect = MilliValue & EnhanceableStatusEffected
export type DefEffect = MilliValue & EnhanceableStatusEffected
export type AccEffect = MilliPercentageValue & EnhanceableStatusEffected
export type EvaEffect = MilliPercentageValue & EnhanceableStatusEffected
export type CriEffect = MilliPercentageValue & EnhanceableStatusEffected

function effectedBy(enhancementLv: number): EnhancementStatusEffected['effectedBy'] {
  return { name: 'enhancement', value: enhancementLv };
}

function buildEffects(
  enhancements: UnitParameterEnhancementLv
): [
  ReadonlyArray<HpEffect>,
  ReadonlyArray<AtkEffect>,
  ReadonlyArray<DefEffect>,
  ReadonlyArray<AccEffect>,
  ReadonlyArray<EvaEffect>,
  ReadonlyArray<CriEffect>
] {
  const hp: Array<HpEffect> = enhancements.hpLv > 0 ? [{ ...enhancements.hpEnhancedValue, effectedBy: effectedBy(enhancements.hpLv) }] : [];
  const atk: Array<AtkEffect> = enhancements.atkLv > 0 ? [{ ...enhancements.atkEnhancedValue, effectedBy: effectedBy(enhancements.atkLv) }] : [];
  const def: Array<DefEffect> = enhancements.defLv > 0 ? [{ ...enhancements.defEnhancedValue, effectedBy: effectedBy(enhancements.defLv) }] : [];
  const acc: Array<AccEffect> = enhancements.accLv > 0 ? [{ ...enhancements.accEnhancedValue, effectedBy: effectedBy(enhancements.accLv) }] : [];
  const eva: Array<EvaEffect> = enhancements.evaLv > 0 ? [{ ...enhancements.evaEnhancedValue, effectedBy: effectedBy(enhancements.evaLv) }] : [];
  const cri: Array<CriEffect> = enhancements.criLv > 0 ? [{ ...enhancements.criEnhancedValue, effectedBy: effectedBy(enhancements.criLv) }] : [];

  return [hp, atk, def, acc, eva, cri];
}

class UnitStatusEffect {

  readonly hpEffects: ReadonlyArray<HpEffect>;
  readonly atkEffects: ReadonlyArray<AtkEffect>;
  readonly defEffects: ReadonlyArray<DefEffect>;
  readonly accEffects: ReadonlyArray<AccEffect>;
  readonly evaEffects: ReadonlyArray<EvaEffect>;
  readonly criEffects: ReadonlyArray<CriEffect>;

  constructor(enhancements: UnitParameterEnhancementLv) {
    const [hp, atk, def, acc, eva, cri] = buildEffects(enhancements);

    this.hpEffects = hp;
    this.atkEffects = atk;
    this.defEffects = def;
    this.accEffects = acc;
    this.evaEffects = eva;
    this.criEffects = cri;
  }

  get hpValue(): IntegerValue {
    return { value: this.hpEffects.reduce((acc, e) => acc + e.value, 0) };
  }

  get atkValue(): MilliValue {
    return { milliValue: this.atkEffects.reduce((acc, e) => acc + e.milliValue, 0) };
  }

  get defValue(): MilliValue {
    return { milliValue: this.defEffects.reduce((acc, e) => acc + e.milliValue, 0) };
  }

  get accValue(): MilliPercentageValue {
    return { milliPercentage: this.accEffects.reduce((acc, e) => acc + e.milliPercentage, 0) };
  }

  get evaValue(): MilliPercentageValue {
    return { milliPercentage: this.evaEffects.reduce((acc, e) => acc + e.milliPercentage, 0) };
  }

  get criValue(): MilliPercentageValue {
    return { milliPercentage: this.criEffects.reduce((acc, e) => acc + e.milliPercentage, 0) };
  }
}

export default UnitStatusEffect;
