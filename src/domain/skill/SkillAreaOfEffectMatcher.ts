import { FixedSkillAreaType, SkillAreaType, isFixedSkillAreaType } from './SkillAreaOfEffect';
import { TenKeyPosition } from '../squad/Squad';

import { typedEntries } from '../../util/object';

const fixedPositionTargets: Record<FixedSkillAreaType, ReadonlySet<TenKeyPosition>> = {
  [SkillAreaType.FixedFrontLine]:               new Set([3, 6, 9]),
  [SkillAreaType.FixedBackLine]:                new Set([1, 4, 7]),
  [SkillAreaType.FixedFrontAndMidLine]:         new Set([2, 3, 5, 6, 8, 9]),
  [SkillAreaType.FixedFrontAndBackLine]:        new Set([1, 3, 4, 6, 7, 9]),
  [SkillAreaType.FixedMidAndBackLine]:          new Set([1, 2, 4, 5, 7, 8]),
  [SkillAreaType.FixedMiddleRow]:               new Set([4, 5, 6]),
  [SkillAreaType.FixedCross]:                   new Set([2, 4, 5, 6, 8]),
  [SkillAreaType.FixedDiagonal]:                new Set([1, 3, 5, 7, 9]),
  [SkillAreaType.FixedFleetFormation]:          new Set([1, 3, 4, 5, 7, 9]),
  [SkillAreaType.FixedAllAdjacentWithoutFront]: new Set([1, 2, 3, 4, 7, 8, 9]),
  [SkillAreaType.FixedAll]:                     new Set([1, 2, 3, 4, 5, 6, 7, 8, 9])
};

const absoluteCoordinate = {
  7: [0, 0], 8: [1, 0], 9: [2, 0],
  4: [0, 1], 5: [1, 1], 6: [2, 1],
  1: [0, 2], 2: [1, 2], 3: [2, 2]
} as const;

type CoordinateValue = -2 | -1 | 0 | 1 | 2
type TenKeyCoordinate = readonly [dx: CoordinateValue, dy: CoordinateValue]

const relativeCoordinate: Record<Exclude<SkillAreaType, FixedSkillAreaType>, ReadonlyArray<TenKeyCoordinate>> = {
  [SkillAreaType.Self]: [[0, 0]],
  [SkillAreaType.Single]: [[0, 0]],
  [SkillAreaType.SingleAndFront]: [[0, 0], [1, 0]],
  [SkillAreaType.SingleAndBack]: [[-1, 0], [0, 0]],
  [SkillAreaType.Twin]: [[0, 0], [0, -1]],
  [SkillAreaType.TwoByTwo]: [[0, 0], [1, 0], [0, -1], [1, -1]],
  [SkillAreaType.TwoByThree]: [[0, 0], [1, 0], [2, 0], [0, -1], [1, -1], [2, -1]],
  [SkillAreaType.MercilessCat]: [[0, 0], [1, 0], [2, 0], [0, -1], [1, -1]],
  [SkillAreaType.TagTeam]: [[0, 0], [-1, 0], [0, -1], [-1, -1]],
  [SkillAreaType.FanShape]: [[0, 0], [1, -1], [1, 0], [1, 1]],
  [SkillAreaType.FanShapeWithoutFront]: [[0, 0], [1, -1], [1, 1]],
  [SkillAreaType.FanShapeForwardTargeting]: [[0, 0], [0, -1], [-1, 0], [0, 1]],
  [SkillAreaType.FanShapeTowardFront]: [[0, 0], [1, -1], [2, -1], [1, 0], [2, 0], [1, 1], [2, 1]],
  [SkillAreaType.InvertedFanShape]: [[0, 0], [-1, -1], [-1, 0], [-1, 1]],
  [SkillAreaType.InvertedFanShapeWing]: [[0, 0], [-2, -1], [-1, -1], [-2, 1], [-1, 1]],
  [SkillAreaType.Wedge]: [[0, 0], [-2, -1], [-1, -1], [-1, 0], [-2, 1], [-1, 1]],
  [SkillAreaType.Wing]: [[0, 0], [0, -1], [1, -1], [0, 1], [1, 1]],
  [SkillAreaType.Zigzag]: [[0, 0], [-1, -1], [1, -1]],
  [SkillAreaType.Line]: [[0, 0], [0, -1], [0, 1]],
  [SkillAreaType.RowTowardFront]: [[0, 0], [1, 0], [2, 0]],
  [SkillAreaType.RowTowardFrontWithFrontLine]: [[0, 0], [1, 0], [2, 0], [2, -1], [2, 1]],
  [SkillAreaType.RowTowardFrontWithShockWave]: [[0, 0], [0, -1], [1, -1], [2, -1], [1, 0], [2, 0], [0, 1], [1, 1], [2, 1]],
  [SkillAreaType.RowTowardBack]: [[0, 0], [-1, 0], [-2, 0]],
  [SkillAreaType.RowsOnBothSidesTowardFront]: [[0, -1], [1, -1], [2, -1], [0, 1], [1, 1], [2, 1]],
  [SkillAreaType.SelfAndRowAdjacent]: [[0, 0], [1, 0], [-1, 0]],
  [SkillAreaType.LineWithFront]: [[0, 0], [0, -1], [0, 1], [1, 0]],
  [SkillAreaType.LineWithFrontLine]: [[0, 0], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]],
  [SkillAreaType.LineWithBack]: [[0, 0], [0, -1], [0, 1], [-1, 0]],
  [SkillAreaType.LineWithBackLine]: [[0, 0], [0, -1], [0, 1], [-1, -1], [-1, 0], [-1, 1]],
  [SkillAreaType.LineWithForward]: [[0, 0], [0, -1], [0, 1], [1, 0], [2, 0]],
  [SkillAreaType.LineWithBackward]: [[0, 0], [0, -1], [0, 1], [-1, 0], [-2, 0]],
  [SkillAreaType.LineTowardFrontWavelets]: [[0, 0], [0, -1], [1, -1], [2, -1], [1, 0], [2, 0], [0, 1], [1, 1], [2, 1]],
  [SkillAreaType.LineTowardFrontGreatlyAttenuate]: [[0, 0], [0, -1], [1, -1], [2, -1], [1, 0], [2, 0], [0, 1], [1, 1], [2, 1]],
  [SkillAreaType.SelfAndLeftDirection]: [[0, 0], [0, -1], [0, -2]],
  [SkillAreaType.Cross]: [[0, 0], [0, -1], [-1, 0], [1, 0], [0, 1]],
  [SkillAreaType.CrossWithFrontLine]: [[0, 0], [0, -1], [1, -1], [-1, 0], [1, 0], [0, 1], [1, 1]],
  [SkillAreaType.FrontOfCross]: [[0, 0], [-1, -1], [-2, 0], [-1, 0], [-1, 1]],
  [SkillAreaType.Diagonal]: [[0, 0], [-1, -1], [1, -1], [-1, 1], [1, 1]],
  [SkillAreaType.MiddleStaircase]: [[0, 0], [-1, 1], [0, 1], [-1, 2], [0, 2]],
  [SkillAreaType.LeftSpreadForward]: [[0, 0], [2, -2], [1, -1], [2, -1], [1, 0], [2, 0]],
  [SkillAreaType.LeftSpreadBackward]: [[0, 0], [-2, -2], [-2, -1], [-1, -1], [-2, 0], [-1, 0]],
  [SkillAreaType.AllTowardBackLeft]: [[0, 0], [-2, -2], [-1, -2], [0, -2], [-2, -1], [-1, -1], [0, -1], [-2, 0], [-1, 0]],
  [SkillAreaType.AllBackwardWithSelf]: [[0, 0], [-2, -1], [-1, -1], [-2, 0], [-1, 0], [-2, 1], [-1, 1]],
  [SkillAreaType.UnderWatcherWithSelf]: [[0, 0], [-2, -1], [-1, -1], [0, -1], [-2, 0], [-1, 0], [-2, 1], [-1, 1], [0, 1]],
  [SkillAreaType.LeaveMeAlone]: [[0, 0], [1, -1], [2, -1], [2, 0], [1, 1], [2, 1]],
  [SkillAreaType.All]: [[0, 0], [-1, -1], [0, -1], [1, -1], [-1, 0], [1, 0], [-1, 1], [0, 1], [1, 1]],
  [SkillAreaType.RowGreatlyAttenuate]: [[0, 0], [1, 0], [2, 0]],
  [SkillAreaType.RowSlightlyAttenuate]: [[0, 0], [1, 0], [2, 0]],
  [SkillAreaType.SingleAndFrontMiddleExplosion]: [[0, 0], [1, 0]],
  [SkillAreaType.SingleAndFrontStrongExplosion]: [[0, 0], [1, 0]],
  [SkillAreaType.LineMiddleExplosion]: [[0, 0], [0, -1], [0, 1]],
  [SkillAreaType.LineStrongExplosion]: [[0, 0], [0, -1], [0, 1]],
  [SkillAreaType.FanShapeGreatlyAttenuate]: [[0, 0], [1, -1], [1, 0], [1, 1], [2, -1], [2, 0], [2, 1]],
  [SkillAreaType.FanShapeStrongExplosion]: [[0, 0], [1, -1], [1, 0], [1, 1]],
  [SkillAreaType.CrossSmallExplosion]: [[0, 0], [0, -1], [-1, 0], [1, 0], [0, 1]],
  [SkillAreaType.CrossStrongExplosion]: [[0, 0], [0, -1], [-1, 0], [1, 0], [0, 1]],
  [SkillAreaType.CircleTinyExplosion]: [[0, 0], [-1, -1], [0, -1], [1, -1], [-1, 0], [1, 0], [-1, 1], [0, 1], [1, 1]],
  [SkillAreaType.CircleSmallExplosion]: [[0, 0], [-1, -1], [0, -1], [1, -1], [-1, 0], [1, 0], [-1, 1], [0, 1], [1, 1]],
  [SkillAreaType.CircleMiddleExplosion]: [[0, 0], [-1, -1], [0, -1], [1, -1], [-1, 0], [1, 0], [-1, 1], [0, 1], [1, 1]],
  [SkillAreaType.CircleStrongExplosion]: [[0, 0], [-1, -1], [0, -1], [1, -1], [-1, 0], [1, 0], [-1, 1], [0, 1], [1, 1]],
  [SkillAreaType.AllStrongExplosion]: [[0, 0], [-1, -1], [0, -1], [1, -1], [-1, 0], [1, 0], [-1, 1], [0, 1], [1, 1]],
  [SkillAreaType.AllRoundFire]: [[0, 0], [-1, -1], [0, -1], [1, -1], [-1, 0], [1, 0], [-1, 1], [0, 1], [1, 1]],
  [SkillAreaType.Front]: [[1, 0]],
  [SkillAreaType.Back]: [[-1, 0]],
  [SkillAreaType.Left]: [[0, -1]],
  [SkillAreaType.Right]: [[0, 1]],
  [SkillAreaType.Forward]: [[1, 0], [2, 0]],
  [SkillAreaType.Backward]: [[-2, 0], [-1, 0]],
  [SkillAreaType.RightDirection]: [[0, 1], [0, 2]],
  [SkillAreaType.RightSpreadForwardAdjacent]: [[0, 1], [1, 1], [0, 2], [1, 2], [2, 2]],
  [SkillAreaType.LineAdjacent]: [[0, -1], [0, 1]],
  [SkillAreaType.LineAdjacentWithBackward]: [[0, -1], [-2, 0], [-1, 0], [0, 1]],
  [SkillAreaType.RowAdjacent]: [[-1, 0], [1, 0]],
  [SkillAreaType.RowAdjacentWithSelfAndLeftDirection]: [[0, 0], [0, -2], [0, -1], [-1, 0], [1, 0]],
  [SkillAreaType.FrontLineAdjacent]: [[1, -1], [1, 0], [1, 1]],
  [SkillAreaType.BackLineAdjacent]: [[-1, -1], [-1, 0], [-1, 1]],
  [SkillAreaType.CrossAdjacentWithoutFront]: [[0, -1], [-1, 0], [0, 1]],
  [SkillAreaType.CrossAdjacentWithoutBack]: [[0, -1], [1, 0], [0, 1]],
  [SkillAreaType.CrossAdjacent]: [[0, -1], [-1, 0], [1, 0], [0, 1]],
  [SkillAreaType.DiagonalAdjacent]: [[-1, -1], [1, -1], [-1, 1], [1, 1]],
  [SkillAreaType.InvertedFanShapeAdjacent]: [[-2, -1], [-2, 0], [-1, 0], [-2, 1]],
  [SkillAreaType.CatsHand]: [[0, 0], [-2, -1], [-1, -1], [-2, 0], [-2, 1], [-1, 1]],
  [SkillAreaType.UnderWatcher]: [[-2, -1], [-1, -1], [0, -1], [-2, 0], [-1, 0], [-2, 1], [-1, 1], [0, 1]],
  [SkillAreaType.AllForward]: [[1, -1], [2, -1], [1, 0], [2, 0], [1, 1], [2, 1]],
  [SkillAreaType.AllBackward]: [[-2, -1], [-1, -1], [-2, 0], [-1, 0], [-2, 1], [-1, 1]],
  [SkillAreaType.AllAdjacentWithoutFront]: [[-1, -1], [0, -1], [1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1]],
  [SkillAreaType.AllAdjacentWithoutFrontLine]: [[-1, -1], [0, -1], [-1, 0], [-1, 1], [0, 1]],
  [SkillAreaType.AllAdjacentWithoutBackLine]: [[0, -1], [1, -1], [1, 0], [0, 1], [1, 1]],
  [SkillAreaType.AllAdjacentWithoutFrontLineWithBackward]: [[-1, -1], [0, -1], [-2, 0], [-1, 0], [-1, 1], [0, 1]],
  [SkillAreaType.AllAdjacent]: [[-1, -1], [0, -1], [1, -1], [-1, 0], [1, 0], [-1, 1], [0, 1], [1, 1]]
};

const coordinateKey = (x: number, y: number): string => `${x}${y}`;

const tenKeyPositions: ReadonlyMap<string, TenKeyPosition> =
  new Map(
    typedEntries(absoluteCoordinate)
      .map(([p, [x, y]]) => [coordinateKey(x, y), +p as TenKeyPosition])
  );

export function calcTargetPositions(area: SkillAreaType, current: TenKeyPosition): ReadonlySet<TenKeyPosition> {
  if (isFixedSkillAreaType(area)) {
    return fixedPositionTargets[area];
  }

  const [x, y] = absoluteCoordinate[current];
  return new Set(
    relativeCoordinate[area]
      .flatMap(([dx, dy]) => tenKeyPositions.get(coordinateKey(x + dx, y + dy)) ?? [])
  );
}
