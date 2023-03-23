import { SkillAreaType } from '../skill/SkillAreaOfEffect';
import { UnitNumber } from '../UnitBasicInfo';
import { UnitSkillData } from '../skill/UnitSkillData';
import { extractAllActiveSkills, extractSkillAreaOfEffect } from './SkillDataExtractor';

const {
  TwoByTwo,
  TagTeam,
  FanShape,
  FanShapeForwardTargeting,
  FanShapeGreatlyAttenuate,
  FanShapeSlightlyAttenuate,
  FanShapeStrongExplosion,
  FanShapeWithoutFront,
  Zigzag,
  Diagonal,
  LeftSpreadForward,
  Cross,
  CrossWithFrontLine,
  CrossSmallExplosion,
  CrossStrongExplosion,
  LineWithFront,
  LineWithBack,
  InvertedFanShape,
  RowTowardFront,
  RowTowardBack,
  RowGreatlyAttenuate,
  RowSlightlyAttenuate,
  RowsOnBothSidesTowardFront,
  RowTowardFrontWithFrontLine,
  TwoByThree,
  MercilessCat,
  Line,
  LineMiddleExplosion,
  LineStrongExplosion,
  LineWithFrontLine,
  LineWithBackLine,
  LineWithForward,
  LineWithBackward,
  Wing,
  All,
  AllStrongExplosion,
  CircleTinyExplosion,
  CircleSmallExplosion,
  CircleMiddleExplosion,
  CircleStrongExplosion,
  RowTowardFrontWithShockWave,
  LineTowardFrontGreatlyAttenuate,
  LineTowardFrontWavelets,
  AllRoundFire,
  FixedAll
} = SkillAreaType;

export const ActiveSkillAreaOfEffectCondition = {
  TwoByTwo: '2_x_2',
  FanShape: 'fan_shape',
  Diagonal: 'diagonal',
  Cross: 'cross',
  Row: 'row',
  Column: 'column',
  All: 'all'
} as const;
export type ActiveSkillAreaOfEffectCondition = typeof ActiveSkillAreaOfEffectCondition[keyof typeof ActiveSkillAreaOfEffectCondition]

const targetArea: Record<ActiveSkillAreaOfEffectCondition, ReadonlySet<SkillAreaType>> = {
  [ActiveSkillAreaOfEffectCondition.TwoByTwo]: new Set([
    TwoByTwo,
    MercilessCat,
    TagTeam
  ]),
  [ActiveSkillAreaOfEffectCondition.FanShape]: new Set([
    FanShape,
    FanShapeForwardTargeting,
    FanShapeGreatlyAttenuate,
    FanShapeSlightlyAttenuate,
    FanShapeStrongExplosion,
    FanShapeWithoutFront,
    LeftSpreadForward,
    LineWithFront,
    LineWithBack,
    InvertedFanShape
  ]),
  [ActiveSkillAreaOfEffectCondition.Diagonal]: new Set([
    Diagonal,
    Zigzag,
    FanShapeWithoutFront,
    FanShape,
    FanShapeGreatlyAttenuate,
    FanShapeSlightlyAttenuate,
    FanShapeStrongExplosion,
    LeftSpreadForward
  ]),
  [ActiveSkillAreaOfEffectCondition.Cross]: new Set([
    Cross,
    CrossWithFrontLine,
    CrossSmallExplosion,
    CrossStrongExplosion
  ]),
  [ActiveSkillAreaOfEffectCondition.Row]: new Set([
    RowTowardFront,
    RowTowardBack,
    RowGreatlyAttenuate,
    RowSlightlyAttenuate,
    RowsOnBothSidesTowardFront,
    RowTowardFrontWithFrontLine,
    TwoByThree,
    MercilessCat,
    LeftSpreadForward
  ]),
  [ActiveSkillAreaOfEffectCondition.Column]: new Set([
    Line,
    LineMiddleExplosion,
    LineStrongExplosion,
    LineWithFrontLine,
    LineWithBackLine,
    LineWithForward,
    LineWithBackward,
    Wing,
    FanShapeForwardTargeting // line_with_back
  ]),
  [ActiveSkillAreaOfEffectCondition.All]: new Set([
    All,
    AllStrongExplosion,
    CircleTinyExplosion,
    CircleSmallExplosion,
    CircleMiddleExplosion,
    CircleStrongExplosion,
    RowTowardFrontWithShockWave,
    LineTowardFrontGreatlyAttenuate,
    LineTowardFrontWavelets,
    AllRoundFire,
    FixedAll
  ])
};

export function matchActiveSkillAreaOfEffectConditions(
  skill: UnitSkillData[UnitNumber],
  condition: ActiveSkillAreaOfEffectCondition | undefined
): boolean {
  if (!condition) {
    return true;
  }

  const areas = extractAllActiveSkills(skill).flatMap(as => 'damage_deal' in as ? extractSkillAreaOfEffect(as) : []);

  return areas.some(area => targetArea[condition].has(area));
}
