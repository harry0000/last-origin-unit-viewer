import { SkillAreaType } from '../../domain/skill/SkillAreaOfEffect';
import { Sequence } from '../../util/type';

export const AreaOfEffectCellType = {
  Effective: 'effective',
  High: 'high',
  Middle: 'middle',
  Weak: 'weak',
  None: 'none'
} as const;
export type AreaOfEffectCellType = typeof AreaOfEffectCellType[keyof typeof AreaOfEffectCellType];

type TenKeyPosition = Sequence<9>

export type AreaOfEffectCell = Readonly<{
  select?: TenKeyPosition,
  area: readonly [
    AreaOfEffectCellType, AreaOfEffectCellType, AreaOfEffectCellType,
    AreaOfEffectCellType, AreaOfEffectCellType, AreaOfEffectCellType,
    AreaOfEffectCellType, AreaOfEffectCellType, AreaOfEffectCellType
  ]
}>

export const AreaOfEffectCells: Readonly<{ [key in SkillAreaType]: AreaOfEffectCell }> = {
  [SkillAreaType.Self]: {
    select: 5,
    area: ['none', 'none', 'none', 'none', 'effective', 'none', 'none', 'none', 'none']
  },
  [SkillAreaType.Single]: {
    select: 5,
    area: ['none', 'none', 'none', 'none', 'effective', 'none', 'none', 'none', 'none']
  },
  [SkillAreaType.SingleAndFront]: {
    select: 5,
    area: ['none', 'none', 'none', 'none', 'effective', 'effective', 'none', 'none', 'none']
  },
  [SkillAreaType.SingleAndBack]: {
    select: 5,
    area: ['none', 'none', 'none', 'effective', 'effective', 'none', 'none', 'none', 'none']
  },
  [SkillAreaType.Twin]: {
    select: 5,
    area: ['none', 'effective', 'none', 'none', 'effective', 'none', 'none', 'none', 'none']
  },
  [SkillAreaType.TwoByTwo]: {
    select: 5,
    area: ['none', 'effective', 'effective', 'none', 'effective', 'effective', 'none', 'none', 'none']
  },
  [SkillAreaType.TwoByThree]: {
    select: 4,
    area: ['effective', 'effective', 'effective', 'effective', 'effective', 'effective', 'none', 'none', 'none']
  },
  [SkillAreaType.TagTeam]: {
    select: 5,
    area: ['effective', 'effective', 'none', 'effective', 'effective', 'none', 'none', 'none', 'none']
  },
  [SkillAreaType.MercilessCat]: {
    select: 4,
    area: ['effective', 'effective', 'none', 'effective', 'effective', 'effective', 'none', 'none', 'none']
  },
  [SkillAreaType.FanShape]: {
    select: 5,
    area: ['none', 'none', 'effective', 'none', 'effective', 'effective', 'none', 'none', 'effective']
  },
  [SkillAreaType.FanShapeWithoutFront]: {
    select: 5,
    area: ['none', 'none', 'effective', 'none', 'effective', 'none', 'none', 'none', 'effective']
  },
  [SkillAreaType.FanShapeForwardTargeting]: {
    select: 6,
    area: ['none', 'none', 'effective', 'none', 'effective', 'effective', 'none', 'none', 'effective']
  },
  [SkillAreaType.InvertedFanShape]: {
    select: 5,
    area: ['effective', 'none', 'none', 'effective', 'effective', 'none', 'effective', 'none', 'none']
  },
  [SkillAreaType.InvertedFanShapeWing]: {
    select: 6,
    area: ['effective', 'effective', 'none', 'none', 'none', 'effective', 'effective', 'effective', 'none']
  },
  [SkillAreaType.Wedge]: {
    select: 6,
    area: ['effective', 'effective', 'none', 'none', 'effective', 'effective', 'effective', 'effective', 'none']
  },
  [SkillAreaType.Wing]: {
    select: 5,
    area: ['none', 'effective', 'effective', 'none', 'effective', 'none', 'none', 'effective', 'effective']
  },
  [SkillAreaType.Zigzag]: {
    select: 5,
    area: ['effective', 'none', 'effective', 'none', 'effective', 'none', 'none', 'none', 'none']
  },
  [SkillAreaType.Line]: {
    select: 5,
    area: ['none', 'effective', 'none', 'none', 'effective', 'none', 'none', 'effective', 'none']
  },
  [SkillAreaType.RowTowardFront]: {
    select: 4,
    area: ['none', 'none', 'none', 'effective', 'effective', 'effective', 'none', 'none', 'none']
  },
  [SkillAreaType.RowTowardFrontWithFrontLine]: {
    select: 4,
    area: ['none', 'none', 'effective', 'effective', 'effective', 'effective', 'none', 'none', 'effective']
  },
  [SkillAreaType.RowTowardBack]: {
    select: 6,
    area: ['none', 'none', 'none', 'effective', 'effective', 'effective', 'none', 'none', 'none']
  },
  [SkillAreaType.SelfAndRowAdjacent]: {
    select: 5,
    area: ['none', 'none', 'none', 'effective', 'effective', 'effective', 'none', 'none', 'none']
  },
  [SkillAreaType.LineWithFront]: {
    select: 5,
    area: ['none', 'effective', 'none', 'none', 'effective', 'effective', 'none', 'effective', 'none']
  },
  [SkillAreaType.LineWithFrontLine]: {
    select: 5,
    area: ['none', 'effective', 'effective', 'none', 'effective', 'effective', 'none', 'effective', 'effective']
  },
  [SkillAreaType.LineWithBack]: {
    select: 5,
    area: ['none', 'effective', 'none', 'effective', 'effective', 'none', 'none', 'effective', 'none']
  },
  [SkillAreaType.LineWithBackLine]: {
    select: 5,
    area: ['effective', 'effective', 'none', 'effective', 'effective', 'none', 'effective', 'effective', 'none']
  },
  [SkillAreaType.LineWithForward]: {
    select: 4,
    area: ['effective', 'none', 'none', 'effective', 'effective', 'effective', 'effective', 'none', 'none']
  },
  [SkillAreaType.LineWithBackward]: {
    select: 6,
    area: ['none', 'none', 'effective', 'effective', 'effective', 'effective', 'none', 'none', 'effective']
  },
  [SkillAreaType.SelfAndLeftDirection]: {
    select: 2,
    area: ['none', 'effective', 'none', 'none', 'effective', 'none', 'none', 'effective', 'none']
  },
  [SkillAreaType.Cross]: {
    select: 5,
    area: ['none', 'effective', 'none', 'effective', 'effective', 'effective', 'none', 'effective', 'none']
  },
  [SkillAreaType.CrossWithFrontLine]: {
    select: 5,
    area: ['none', 'effective', 'effective', 'effective', 'effective', 'effective', 'none', 'effective', 'effective']
  },
  [SkillAreaType.FrontOfCross]: {
    select: 6,
    area: ['none', 'effective', 'none', 'effective', 'effective', 'effective', 'none', 'effective', 'none']
  },
  [SkillAreaType.Diagonal]: {
    select: 5,
    area: ['effective', 'none', 'effective', 'none', 'effective', 'none', 'effective', 'none', 'effective']
  },
  [SkillAreaType.MiddleStaircase]: {
    select: 8,
    area: ['none', 'effective', 'none', 'effective', 'effective', 'none', 'effective', 'effective', 'none']
  },
  [SkillAreaType.LeftSpreadBackward]: {
    select: 3,
    area: ['effective', 'none', 'none', 'effective', 'effective', 'none', 'effective', 'effective', 'effective']
  },
  [SkillAreaType.UnderWatcherWithSelf]: {
    select: 6,
    area: ['effective', 'effective', 'effective', 'effective', 'effective', 'effective', 'effective', 'effective', 'effective']
  },
  [SkillAreaType.All]: {
    select: 5,
    area: ['effective', 'effective', 'effective', 'effective', 'effective', 'effective', 'effective', 'effective', 'effective']
  },
  [SkillAreaType.RowGreatlyAttenuate]: {
    select: 4,
    area: ['none', 'none', 'none', 'effective', 'middle', 'weak', 'none', 'none', 'none']
  },
  [SkillAreaType.RowSlightlyAttenuate]: {
    select: 4,
    area: ['none', 'none', 'none', 'effective', 'high', 'middle', 'none', 'none', 'none']
  },
  [SkillAreaType.SingleAndFrontMiddleExplosion]: {
    select: 5,
    area: ['none', 'none', 'none', 'none', 'effective', 'middle', 'none', 'none', 'none']
  },
  [SkillAreaType.SingleAndFrontStrongExplosion]: {
    select: 5,
    area: ['none', 'none', 'none', 'none', 'effective', 'high', 'none', 'none', 'none']
  },
  [SkillAreaType.LineMiddleExplosion]: {
    select: 5,
    area: ['none', 'middle', 'none', 'none', 'effective', 'none', 'none', 'middle', 'none']
  },
  [SkillAreaType.LineStrongExplosion]: {
    select: 5,
    area: ['none', 'high', 'none', 'none', 'effective', 'none', 'none', 'high', 'none']
  },
  [SkillAreaType.FanShapeGreatlyAttenuate]: {
    select: 4,
    area: ['none', 'middle', 'weak', 'effective', 'middle', 'weak', 'none', 'middle', 'weak']
  },
  [SkillAreaType.FanShapeSlightlyAttenuate]: {
    select: 4,
    area: ['none', 'high', 'middle', 'effective', 'high', 'middle', 'none', 'high', 'middle']
  },
  [SkillAreaType.FanShapeStrongExplosion]: {
    select: 5,
    area: ['none', 'none', 'high', 'none', 'effective', 'high', 'none', 'none', 'high']
  },
  [SkillAreaType.CrossSmallExplosion]: {
    select: 5,
    area: ['none', 'weak', 'none', 'weak', 'effective', 'weak', 'none', 'weak', 'none']
  },
  [SkillAreaType.CrossStrongExplosion]: {
    select: 5,
    area: ['none', 'high', 'none', 'high', 'effective', 'high', 'none', 'high', 'none']
  },
  [SkillAreaType.CircleSmallExplosion]: {
    select: 5,
    area: ['weak', 'weak', 'weak', 'weak', 'effective', 'weak', 'weak', 'weak', 'weak']
  },
  [SkillAreaType.CircleStrongExplosion]: {
    select: 5,
    area: ['high', 'high', 'high', 'high', 'effective', 'high', 'high', 'high', 'high']
  },
  [SkillAreaType.AllStrongExplosion]: {
    select: 5,
    area: ['middle', 'high', 'middle', 'high', 'effective', 'high', 'middle', 'high', 'middle']
  },
  [SkillAreaType.Front]: {
    select: 5,
    area: ['none', 'none', 'none', 'none', 'none', 'effective', 'none', 'none', 'none']
  },
  [SkillAreaType.Back]: {
    select: 5,
    area: ['none', 'none', 'none', 'effective', 'none', 'none', 'none', 'none', 'none']
  },
  [SkillAreaType.Left]: {
    select: 5,
    area: ['none', 'effective', 'none', 'none', 'none', 'none', 'none', 'none', 'none']
  },
  [SkillAreaType.Right]: {
    select: 5,
    area: ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'effective', 'none']
  },
  [SkillAreaType.Forward]: {
    select: 4,
    area: ['none', 'none', 'none', 'none', 'effective', 'effective', 'none', 'none', 'none']
  },
  [SkillAreaType.Backward]: {
    select: 6,
    area: ['none', 'none', 'none', 'effective', 'effective', 'none', 'none', 'none', 'none']
  },
  [SkillAreaType.RightDirection]: {
    select: 8,
    area: ['none', 'none', 'none', 'none', 'effective', 'none', 'none', 'effective', 'none']
  },
  [SkillAreaType.RightSpreadForwardAdjacent]: {
    select: 7,
    area: ['none', 'none', 'none', 'effective', 'effective', 'none', 'effective', 'effective', 'effective']
  },
  [SkillAreaType.LineAdjacent]: {
    select: 5,
    area: ['none', 'effective', 'none', 'none', 'none', 'none', 'none', 'effective', 'none']
  },
  [SkillAreaType.LineAdjacentWithBackward]: {
    select: 6,
    area: ['none', 'none', 'effective', 'effective', 'effective', 'none', 'none', 'none', 'effective']
  },
  [SkillAreaType.RowAdjacent]: {
    select: 5,
    area: ['none', 'none', 'none', 'effective', 'none', 'effective', 'none', 'none', 'none']
  },
  [SkillAreaType.RowAdjacentWithSelfAndLeftDirection]: {
    select: 2,
    area: ['none', 'effective', 'none', 'none', 'effective', 'none', 'effective', 'effective', 'effective']
  },
  [SkillAreaType.FrontLineAdjacent]: {
    select: 5,
    area: ['none', 'none', 'effective', 'none', 'none', 'effective', 'none', 'none', 'effective']
  },
  [SkillAreaType.BackLineAdjacent]: {
    select: 5,
    area: ['effective', 'none', 'none', 'effective', 'none', 'none', 'effective', 'none', 'none']
  },
  [SkillAreaType.CrossAdjacentWithoutFront]: {
    select: 5,
    area: ['none', 'effective', 'none', 'effective', 'none', 'none', 'none', 'effective', 'none']
  },
  [SkillAreaType.CrossAdjacentWithoutBack]: {
    select: 5,
    area: ['none', 'effective', 'none', 'none', 'none', 'effective', 'none', 'effective', 'none']
  },
  [SkillAreaType.CrossAdjacent]: {
    select: 5,
    area: ['none', 'effective', 'none', 'effective', 'none', 'effective', 'none', 'effective', 'none']
  },
  [SkillAreaType.DiagonalAdjacent]: {
    select: 5,
    area: ['effective', 'none', 'effective', 'none', 'none', 'none', 'effective', 'none', 'effective']
  },
  [SkillAreaType.InvertedFanShapeAdjacent]: {
    select: 6,
    area: ['effective', 'none', 'none', 'effective', 'effective', 'none', 'effective', 'none', 'none']
  },
  [SkillAreaType.CatsHand]: {
    select: 6,
    area: ['effective', 'effective', 'none', 'effective', 'none', 'effective', 'effective', 'effective', 'none']
  },
  [SkillAreaType.UnderWatcher]: {
    select: 6,
    area: ['effective', 'effective', 'effective', 'effective', 'effective', 'none', 'effective', 'effective', 'effective']
  },
  [SkillAreaType.AllBackward]: {
    select: 6,
    area: ['effective', 'effective', 'none', 'effective', 'effective', 'none', 'effective', 'effective', 'none']
  },
  [SkillAreaType.AllAdjacentWithoutFront]: {
    select: 5,
    area: ['effective', 'effective', 'effective', 'effective', 'none', 'none', 'effective', 'effective', 'effective']
  },
  [SkillAreaType.AllAdjacentWithoutFrontLine]: {
    select: 5,
    area: ['effective', 'effective', 'none', 'effective', 'none', 'none', 'effective', 'effective', 'none']
  },
  [SkillAreaType.AllAdjacentWithoutBackLine]: {
    select: 5,
    area: ['none', 'effective', 'effective', 'none', 'none', 'effective', 'none', 'effective', 'effective']
  },
  [SkillAreaType.AllAdjacentWithoutFrontLineWithBackward]: {
    select: 6,
    area: ['none', 'effective', 'effective', 'effective', 'effective', 'none', 'none', 'effective', 'effective']
  },
  [SkillAreaType.AllAdjacent]: {
    select: 5,
    area: ['effective', 'effective', 'effective', 'effective', 'none', 'effective', 'effective', 'effective', 'effective']
  },
  [SkillAreaType.FixedFrontLine]: {
    area: ['none', 'none', 'effective', 'none', 'none', 'effective', 'none', 'none', 'effective']
  },
  [SkillAreaType.FixedBackLine]: {
    area: ['effective', 'none', 'none', 'effective', 'none', 'none', 'effective', 'none', 'none']
  },
  [SkillAreaType.FixedMiddleRow]: {
    area: ['none', 'none', 'none', 'effective', 'effective', 'effective', 'none', 'none', 'none']
  },
  [SkillAreaType.FixedCross]: {
    area: ['none', 'effective', 'none', 'effective', 'effective', 'effective', 'none', 'effective', 'none']
  },
  [SkillAreaType.FixedDiagonal]: {
    area: ['effective', 'none', 'effective', 'none', 'effective', 'none', 'effective', 'none', 'effective']
  },
  [SkillAreaType.FixedAllAdjacentWithoutFront]: {
    area: ['effective', 'effective', 'effective', 'effective', 'none', 'none', 'effective', 'effective', 'effective']
  },
  [SkillAreaType.FixedAll]: {
    area: ['effective', 'effective', 'effective', 'effective', 'effective', 'effective', 'effective', 'effective', 'effective']
  }
} as const;
