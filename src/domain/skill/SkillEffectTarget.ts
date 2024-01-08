import { UnitAlias } from '../UnitAlias';
import {
  UnitAliasAndRole,
  UnitAliasAndType,
  UnitNotAlias,
  UnitNotAliasAndRole,
  UnitNotAliasAndType,
  UnitTypeAndRole
} from './SkillEffectActivationCondition';
import { UnitKind, UnitNumber, UnitRole, UnitType } from '../UnitBasicInfo';
import { isTargetSkillEffect, SkillEffect, TargetSkillEffect } from './UnitSkills';

export const SkillEffectTargetKind = {
  Ally: 'ally',
  AllyExceptSelf: 'ally_except_self',
  AllyGrid: 'ally_grid', // for summon skill effects
  Enemy: 'enemy'
} as const;
export type SkillEffectTargetKind = typeof SkillEffectTargetKind[keyof typeof SkillEffectTargetKind]

export type AlliedUnitTarget = Readonly<{
  kind: typeof SkillEffectTargetKind['Ally' | 'AllyExceptSelf'],
  conditions?:
    ReadonlyArray<
      UnitNumber |
      UnitKind | UnitType | UnitRole |
      UnitTypeAndRole |
      UnitAlias | UnitAliasAndType | UnitAliasAndRole |
      UnitNotAlias | UnitNotAliasAndType | UnitNotAliasAndRole
    >,
  except?: 97 | 128 | 133 | 135 | 150 | 193 | readonly [118, 240]
}>

export type SkillEffectTarget =
  AlliedUnitTarget |
  Readonly<
    {
      kind: typeof SkillEffectTargetKind.Enemy,
      conditions?: ReadonlyArray<UnitType | UnitRole>
    } |
    {
      kind: typeof SkillEffectTargetKind.AllyGrid
    }
  >

export function isAllyUnitTargetSkillEffect(
  arg: SkillEffect
): arg is TargetSkillEffect & { target: AlliedUnitTarget } {
  if (!isTargetSkillEffect(arg)) {
    return false;
  }

  switch (arg.target.kind) {
  case SkillEffectTargetKind.Ally:
  case SkillEffectTargetKind.AllyExceptSelf:
    return true;
  default:
    return false;
  }
}
