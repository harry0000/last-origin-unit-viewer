import { calcTargetPositions } from './SkillAreaOfEffectMatcher';
import { SkillAreaType } from './SkillAreaOfEffect';

describe('calcTargetPositions()', () => {

  describe('fixed area types', () => {

    test('FixedFrontLine', () => {
      expect(calcTargetPositions(SkillAreaType.FixedFrontLine, 5)).toEqual(new Set([9, 6, 3]));
    });

    test('FixedBackLine', () => {
      expect(calcTargetPositions(SkillAreaType.FixedBackLine, 5)).toEqual(new Set([7, 4, 1]));
    });

    test('FixedMiddleRow', () => {
      expect(calcTargetPositions(SkillAreaType.FixedMiddleRow, 5)).toEqual(new Set([4, 5, 6]));
    });

    test('FixedCross', () => {
      expect(calcTargetPositions(SkillAreaType.FixedCross, 5)).toEqual(new Set([8, 4, 5, 6, 2]));
    });

    test('FixedDiagonal', () => {
      expect(calcTargetPositions(SkillAreaType.FixedDiagonal, 5)).toEqual(new Set([7, 9, 5, 1, 3]));
    });

    test('FixedAllAdjacentWithoutFront', () => {
      expect(calcTargetPositions(SkillAreaType.FixedAllAdjacentWithoutFront, 5)).toEqual(new Set([7, 8, 9, 4, 1, 2, 3]));
    });

    test('FixedAll', () => {
      expect(calcTargetPositions(SkillAreaType.FixedAll, 5)).toEqual(new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]));
    });

  });

  describe('relative area types', () => {

    test('Self', () => {
      expect(calcTargetPositions(SkillAreaType.Self, 5)).toEqual(new Set([5]));
    });

    test('Single', () => {
      expect(calcTargetPositions(SkillAreaType.Single, 5)).toEqual(new Set([5]));
    });

    test('SingleAndFront', () => {
      expect(calcTargetPositions(SkillAreaType.SingleAndFront, 5)).toEqual(new Set([5, 6]));
    });

    test('SingleAndBack', () => {
      expect(calcTargetPositions(SkillAreaType.SingleAndBack, 5)).toEqual(new Set([4, 5]));
    });

    test('Twin', () => {
      expect(calcTargetPositions(SkillAreaType.Twin, 5)).toEqual(new Set([5, 8]));
    });

    test('TwoByTwo', () => {
      expect(calcTargetPositions(SkillAreaType.TwoByTwo, 5)).toEqual(new Set([8, 9, 5, 6]));
    });

    test('TwoByThree', () => {
      expect(calcTargetPositions(SkillAreaType.TwoByThree, 4)).toEqual(new Set([7, 8, 9, 4, 5, 6]));
    });

    test('MercilessCat', () => {
      expect(calcTargetPositions(SkillAreaType.MercilessCat, 4)).toEqual(new Set([7, 8, 4, 5, 6]));
    });

    test('TagTeam', () => {
      expect(calcTargetPositions(SkillAreaType.TagTeam, 5)).toEqual(new Set([7, 8, 4, 5]));
    });

    test('FanShape', () => {
      expect(calcTargetPositions(SkillAreaType.FanShape, 5)).toEqual(new Set([9, 5, 6, 3]));
    });

    test('FanShapeWithoutFront', () => {
      expect(calcTargetPositions(SkillAreaType.FanShapeWithoutFront, 5)).toEqual(new Set([9, 5, 3]));
    });

    test('FanShapeForwardTargeting', () => {
      expect(calcTargetPositions(SkillAreaType.FanShapeForwardTargeting, 5)).toEqual(new Set([8, 4, 5, 2]));
    });

    test('InvertedFanShape', () => {
      expect(calcTargetPositions(SkillAreaType.InvertedFanShape, 5)).toEqual(new Set([7, 4, 5, 1]));
    });

    test('InvertedFanShapeWing', () => {
      expect(calcTargetPositions(SkillAreaType.InvertedFanShapeWing, 6)).toEqual(new Set([7, 8, 6, 1, 2]));
    });

    test('Wedge', () => {
      expect(calcTargetPositions(SkillAreaType.Wedge, 6)).toEqual(new Set([7, 8, 5, 6, 1, 2]));
    });

    test('Wing', () => {
      expect(calcTargetPositions(SkillAreaType.Wing, 5)).toEqual(new Set([8, 9, 5, 2, 3]));
    });

    test('Zigzag', () => {
      expect(calcTargetPositions(SkillAreaType.Zigzag, 5)).toEqual(new Set([7, 9, 5]));
    });

    test('Line', () => {
      expect(calcTargetPositions(SkillAreaType.Line, 5)).toEqual(new Set([8, 5, 2]));
    });

    test('RowTowardFront', () => {
      expect(calcTargetPositions(SkillAreaType.RowTowardFront, 4)).toEqual(new Set([4, 5, 6]));
    });

    test('RowTowardFrontWithFrontLine', () => {
      expect(calcTargetPositions(SkillAreaType.RowTowardFrontWithFrontLine, 4)).toEqual(new Set([9, 4, 5, 6, 3]));
    });

    test('RowTowardFrontWithShockWave', () => {
      expect(calcTargetPositions(SkillAreaType.RowTowardFrontWithShockWave, 4)).toEqual(new Set([7, 8, 9, 4, 5, 6, 1, 2, 3]));
    });

    test('RowTowardBack', () => {
      expect(calcTargetPositions(SkillAreaType.RowTowardBack, 6)).toEqual(new Set([6, 5, 4]));
    });

    test('SelfAndRowAdjacent', () => {
      expect(calcTargetPositions(SkillAreaType.SelfAndRowAdjacent, 5)).toEqual(new Set([4, 5, 6]));
    });

    test('LineWithFront', () => {
      expect(calcTargetPositions(SkillAreaType.LineWithFront, 5)).toEqual(new Set([8, 5, 6, 2]));
    });

    test('LineWithFrontLine', () => {
      expect(calcTargetPositions(SkillAreaType.LineWithFrontLine, 5)).toEqual(new Set([8, 9, 5, 6, 2, 3]));
    });

    test('LineWithBack', () => {
      expect(calcTargetPositions(SkillAreaType.LineWithBack, 5)).toEqual(new Set([8, 4, 5, 2]));
    });

    test('LineWithBackLine', () => {
      expect(calcTargetPositions(SkillAreaType.LineWithBackLine, 5)).toEqual(new Set([7, 8, 4, 5, 1, 2]));
    });

    test('LineWithForward', () => {
      expect(calcTargetPositions(SkillAreaType.LineWithForward, 4)).toEqual(new Set([7, 4, 5, 6, 1]));
    });

    test('LineWithBackward', () => {
      expect(calcTargetPositions(SkillAreaType.LineWithBackward, 6)).toEqual(new Set([9, 4, 5, 6, 3]));
    });

    test('LineTowardFrontGreatlyAttenuate', () => {
      expect(calcTargetPositions(SkillAreaType.LineTowardFrontGreatlyAttenuate, 4)).toEqual(new Set([7, 8, 9, 4, 5, 6, 1, 2, 3]));
    });

    test('SelfAndLeftDirection', () => {
      expect(calcTargetPositions(SkillAreaType.SelfAndLeftDirection, 2)).toEqual(new Set([8, 5, 2]));
    });

    test('Cross', () => {
      expect(calcTargetPositions(SkillAreaType.Cross, 5)).toEqual(new Set([8, 4, 5, 6, 2]));
    });

    test('CrossWithFrontLine', () => {
      expect(calcTargetPositions(SkillAreaType.CrossWithFrontLine, 5)).toEqual(new Set([8, 9, 4, 5, 6, 2, 3]));
    });

    test('FrontOfCross', () => {
      expect(calcTargetPositions(SkillAreaType.FrontOfCross, 6)).toEqual(new Set([8, 4, 5, 6, 2]));
    });

    test('Diagonal', () => {
      expect(calcTargetPositions(SkillAreaType.Diagonal, 5)).toEqual(new Set([7, 9, 5, 1, 3]));
    });

    test('MiddleStaircase', () => {
      expect(calcTargetPositions(SkillAreaType.MiddleStaircase, 8)).toEqual(new Set([8, 4, 5, 1, 2]));
    });

    test('LeftSpreadBackward', () => {
      expect(calcTargetPositions(SkillAreaType.LeftSpreadBackward, 3)).toEqual(new Set([7, 4, 5, 1, 2, 3]));
    });

    test('UnderWatcherWithSelf', () => {
      expect(calcTargetPositions(SkillAreaType.UnderWatcherWithSelf, 6)).toEqual(new Set([7, 8, 9, 4, 5, 6, 1, 2, 3]));
    });

    test('LeaveMeAlone', () => {
      expect(calcTargetPositions(SkillAreaType.LeaveMeAlone, 4)).toEqual(new Set([8, 9, 4, 6, 2, 3]));
    });

    test('All', () => {
      expect(calcTargetPositions(SkillAreaType.All, 5)).toEqual(new Set([7, 8, 9, 4, 5, 6, 1, 2, 3]));
    });

    test('RowGreatlyAttenuate', () => {
      expect(calcTargetPositions(SkillAreaType.RowGreatlyAttenuate, 4)).toEqual(new Set([4, 5, 6]));
    });

    test('RowSlightlyAttenuate', () => {
      expect(calcTargetPositions(SkillAreaType.RowSlightlyAttenuate, 4)).toEqual(new Set([4, 5, 6]));
    });

    test('SingleAndFrontMiddleExplosion', () => {
      expect(calcTargetPositions(SkillAreaType.SingleAndFrontMiddleExplosion, 5)).toEqual(new Set([5, 6]));
    });

    test('SingleAndFrontStrongExplosion', () => {
      expect(calcTargetPositions(SkillAreaType.SingleAndFrontStrongExplosion, 5)).toEqual(new Set([5, 6]));
    });

    test('LineMiddleExplosion', () => {
      expect(calcTargetPositions(SkillAreaType.LineMiddleExplosion, 5)).toEqual(new Set([8, 5, 2]));
    });

    test('LineStrongExplosion', () => {
      expect(calcTargetPositions(SkillAreaType.LineStrongExplosion, 5)).toEqual(new Set([8, 5, 2]));
    });

    test('FanShapeGreatlyAttenuate', () => {
      expect(calcTargetPositions(SkillAreaType.FanShapeGreatlyAttenuate, 5)).toEqual(new Set([9, 5, 6, 3]));
    });

    test('FanShapeSlightlyAttenuate', () => {
      expect(calcTargetPositions(SkillAreaType.FanShapeSlightlyAttenuate, 5)).toEqual(new Set([9, 5, 6, 3]));
    });

    test('FanShapeStrongExplosion', () => {
      expect(calcTargetPositions(SkillAreaType.FanShapeStrongExplosion, 5)).toEqual(new Set([9, 5, 6, 3]));
    });

    test('CrossSmallExplosion', () => {
      expect(calcTargetPositions(SkillAreaType.CrossSmallExplosion, 5)).toEqual(new Set([8, 4, 5, 6, 2]));
    });

    test('CrossStrongExplosion', () => {
      expect(calcTargetPositions(SkillAreaType.CrossStrongExplosion, 5)).toEqual(new Set([8, 4, 5, 6, 2]));
    });

    test('CircleSmallExplosion', () => {
      expect(calcTargetPositions(SkillAreaType.CircleSmallExplosion, 5)).toEqual(new Set([7, 8, 9, 4, 5, 6, 1, 2, 3]));
    });

    test('CircleStrongExplosion', () => {
      expect(calcTargetPositions(SkillAreaType.CircleStrongExplosion, 5)).toEqual(new Set([7, 8, 9, 4, 5, 6, 1, 2, 3]));
    });

    test('AllStrongExplosion', () => {
      expect(calcTargetPositions(SkillAreaType.AllStrongExplosion, 5)).toEqual(new Set([7, 8, 9, 4, 5, 6, 1, 2, 3]));
    });

    test('Front', () => {
      expect(calcTargetPositions(SkillAreaType.Front, 5)).toEqual(new Set([6]));
    });

    test('Back', () => {
      expect(calcTargetPositions(SkillAreaType.Back, 5)).toEqual(new Set([4]));
    });

    test('Left', () => {
      expect(calcTargetPositions(SkillAreaType.Left, 5)).toEqual(new Set([8]));
    });

    test('Right', () => {
      expect(calcTargetPositions(SkillAreaType.Right, 5)).toEqual(new Set([2]));
    });

    test('Forward', () => {
      expect(calcTargetPositions(SkillAreaType.Forward, 4)).toEqual(new Set([5, 6]));
    });

    test('Backward', () => {
      expect(calcTargetPositions(SkillAreaType.Backward, 6)).toEqual(new Set([4, 5]));
    });

    test('RightDirection', () => {
      expect(calcTargetPositions(SkillAreaType.RightDirection, 8)).toEqual(new Set([5, 2]));
    });

    test('RightSpreadForwardAdjacent', () => {
      expect(calcTargetPositions(SkillAreaType.RightSpreadForwardAdjacent, 7)).toEqual(new Set([4, 5, 1, 2, 3]));
    });

    test('LineAdjacent', () => {
      expect(calcTargetPositions(SkillAreaType.LineAdjacent, 5)).toEqual(new Set([8, 2]));
    });

    test('LineAdjacentWithBackward', () => {
      expect(calcTargetPositions(SkillAreaType.LineAdjacentWithBackward, 6)).toEqual(new Set([9, 4, 5, 3]));
    });

    test('RowAdjacent', () => {
      expect(calcTargetPositions(SkillAreaType.RowAdjacent, 5)).toEqual(new Set([4, 6]));
    });

    test('RowAdjacentWithSelfAndLeftDirection', () => {
      expect(calcTargetPositions(SkillAreaType.RowAdjacentWithSelfAndLeftDirection, 2)).toEqual(new Set([8, 5, 1, 2, 3]));
    });

    test('FrontLineAdjacent', () => {
      expect(calcTargetPositions(SkillAreaType.FrontLineAdjacent, 5)).toEqual(new Set([9, 6, 3]));
    });

    test('BackLineAdjacent', () => {
      expect(calcTargetPositions(SkillAreaType.BackLineAdjacent, 5)).toEqual(new Set([7, 4, 1]));
    });

    test('CrossAdjacentWithoutFront', () => {
      expect(calcTargetPositions(SkillAreaType.CrossAdjacentWithoutFront, 5)).toEqual(new Set([8, 4, 2]));
    });

    test('CrossAdjacentWithoutBack', () => {
      expect(calcTargetPositions(SkillAreaType.CrossAdjacentWithoutBack, 5)).toEqual(new Set([8, 6, 2]));
    });

    test('CrossAdjacent', () => {
      expect(calcTargetPositions(SkillAreaType.CrossAdjacent, 5)).toEqual(new Set([8, 4, 6, 2]));
    });

    test('DiagonalAdjacent', () => {
      expect(calcTargetPositions(SkillAreaType.DiagonalAdjacent, 5)).toEqual(new Set([7, 9, 1, 3]));
    });

    test('InvertedFanShapeAdjacent', () => {
      expect(calcTargetPositions(SkillAreaType.InvertedFanShapeAdjacent, 6)).toEqual(new Set([7, 4, 5, 1]));
    });

    test('CatsHand', () => {
      expect(calcTargetPositions(SkillAreaType.CatsHand, 6)).toEqual(new Set([8, 4, 2]));
    });

    test('UnderWatcher', () => {
      expect(calcTargetPositions(SkillAreaType.UnderWatcher, 6)).toEqual(new Set([7, 8, 9, 4, 5, 1, 2, 3]));
    });

    test('AllForward', () => {
      expect(calcTargetPositions(SkillAreaType.AllForward, 4)).toEqual(new Set([8, 9, 5, 6, 2, 3]));
    });

    test('AllBackward', () => {
      expect(calcTargetPositions(SkillAreaType.AllBackward, 6)).toEqual(new Set([7, 8, 4, 5, 1, 2]));
    });

    test('AllAdjacentWithoutFront', () => {
      expect(calcTargetPositions(SkillAreaType.AllAdjacentWithoutFront, 5)).toEqual(new Set([7, 8, 9, 4, 1, 2, 3]));
    });

    test('AllAdjacentWithoutFrontLine', () => {
      expect(calcTargetPositions(SkillAreaType.AllAdjacentWithoutFrontLine, 5)).toEqual(new Set([7, 8, 4, 1, 2]));
    });

    test('AllAdjacentWithoutBackLine', () => {
      expect(calcTargetPositions(SkillAreaType.AllAdjacentWithoutBackLine, 5)).toEqual(new Set([8, 9, 6, 2, 3]));
    });

    test('AllAdjacentWithoutFrontLineWithBackward', () => {
      expect(calcTargetPositions(SkillAreaType.AllAdjacentWithoutFrontLineWithBackward, 6)).toEqual(new Set([8, 9, 4, 5, 2, 3]));
    });

    test('AllAdjacent', () => {
      expect(calcTargetPositions(SkillAreaType.AllAdjacent, 5)).toEqual(new Set([7, 8, 9, 4, 6, 1, 2, 3]));
    });

  });

});
