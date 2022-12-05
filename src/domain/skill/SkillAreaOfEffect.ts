const FixedAreaPrefix = 'fixed_' as const;

export const SkillAreaType = {
  Self: 'self' ,
  Single: 'single',
  SingleAndFront: 'single_and_front',
  SingleAndBack: 'single_and_back',
  Twin: 'twin',
  TwoByTwo: '2_x_2',
  TwoByThree: '2_x_3',
  MercilessCat: 'merciless_cat',
  TagTeam: 'tag_team',
  FanShape: 'fan_shape',
  FanShapeWithoutFront: 'fan_shape_without_front',
  FanShapeForwardTargeting: 'fan_shape_forward_targeting',
  InvertedFanShape: 'inverted_fan_shape',
  InvertedFanShapeWing: 'inverted_fan_shape_wing',
  Wedge: 'wedge',
  Wing: 'wing',
  Zigzag: 'zigzag',
  Line: 'line',
  RowTowardFront: 'row_toward_front',
  RowTowardFrontWithFrontLine: 'row_toward_front_with_front_line',
  RowTowardFrontWithShockWave: 'row_toward_front_with_shock_wave',
  RowTowardBack: 'row_toward_back',
  RowsOnBothSidesTowardFront: 'rows_on_both_sides_toward_front',
  SelfAndRowAdjacent: 'self_and_row_adjacent',
  LineWithFront: 'line_with_front',
  LineWithFrontLine: 'line_with_front_line',
  LineWithBack: 'line_with_back',
  LineWithBackLine: 'line_with_back_line',
  LineWithForward: 'line_with_forward',
  LineWithBackward: 'line_with_backward',
  LineTowardFrontWavelets: 'line_toward_front_wavelets',
  LineTowardFrontGreatlyAttenuate: 'line_toward_front_greatly_attenuate',
  SelfAndLeftDirection: 'self_and_left_direction',
  Cross: 'cross',
  CrossWithFrontLine: 'cross_with_front_line',
  FrontOfCross: 'front_of_cross',
  Diagonal: 'diagonal',
  MiddleStaircase: 'middle_staircase',
  LeftSpreadBackward: 'left_spread_backward',
  UnderWatcherWithSelf: 'under_watcher_with_self',
  LeaveMeAlone: 'leave_me_alone',
  All: 'all',
  RowGreatlyAttenuate: 'row_greatly_attenuate',
  RowSlightlyAttenuate: 'row_slightly_attenuate',
  SingleAndFrontMiddleExplosion: 'single_and_front_middle_explosion',
  SingleAndFrontStrongExplosion: 'single_and_front_strong_explosion',
  LineMiddleExplosion: 'line_middle_explosion',
  LineStrongExplosion: 'line_strong_explosion',
  FanShapeGreatlyAttenuate: 'fan_shape_greatly_attenuate',
  FanShapeSlightlyAttenuate: 'fan_shape_slightly_attenuate',
  FanShapeStrongExplosion: 'fan_shape_strong_explosion',
  CrossSmallExplosion: 'cross_small_explosion',
  CrossStrongExplosion: 'cross_strong_explosion',
  CircleTinyExplosion: 'circle_tiny_explosion',
  CircleSmallExplosion: 'circle_small_explosion',
  CircleStrongExplosion: 'circle_strong_explosion',
  AllStrongExplosion: 'all_strong_explosion',
  AllRoundFire: 'all_round_fire',
  Front: 'front',
  Back: 'back',
  Left: 'left',
  Right: 'right',
  Forward: 'forward',
  Backward: 'backward',
  RightDirection: 'right_direction',
  RightSpreadForwardAdjacent: 'right_spread_forward_adjacent',
  LineAdjacent: 'line_adjacent',
  LineAdjacentWithBackward: 'line_adjacent_with_backward',
  RowAdjacent: 'row_adjacent',
  RowAdjacentWithSelfAndLeftDirection: 'row_adjacent_with_self_and_left_direction',
  FrontLineAdjacent: 'front_line_adjacent',
  BackLineAdjacent: 'back_line_adjacent',
  CrossAdjacentWithoutFront: 'cross_adjacent_without_front',
  CrossAdjacentWithoutBack: 'cross_adjacent_without_back',
  CrossAdjacent: 'cross_adjacent',
  DiagonalAdjacent: 'diagonal_adjacent',
  InvertedFanShapeAdjacent: 'inverted_fan_shape_adjacent',
  CatsHand: 'cats_hand',
  UnderWatcher: 'under_watcher',
  AllForward: 'all_forward',
  AllBackward: 'all_backward',
  AllAdjacentWithoutFront: 'all_adjacent_without_front',
  AllAdjacentWithoutFrontLine: 'all_adjacent_without_front_line',
  AllAdjacentWithoutBackLine: 'all_adjacent_without_back_line',
  AllAdjacentWithoutFrontLineWithBackward: 'all_adjacent_without_front_line_with_backward',
  AllAdjacent: 'all_adjacent',
  FixedFrontLine: `${FixedAreaPrefix}front_line`,
  FixedBackLine: `${FixedAreaPrefix}back_line`,
  FixedMiddleRow: `${FixedAreaPrefix}middle_row`,
  FixedCross: `${FixedAreaPrefix}cross`,
  FixedDiagonal: `${FixedAreaPrefix}diagonal`,
  FixedAllAdjacentWithoutFront: `${FixedAreaPrefix}all_adjacent_without_front`,
  FixedAll: `${FixedAreaPrefix}all`
} as const;
export type SkillAreaType = typeof SkillAreaType[keyof typeof SkillAreaType]

export type FixedSkillAreaType<T extends SkillAreaType = SkillAreaType> = T extends `${typeof FixedAreaPrefix}${string}` ? T : never

export function isFixedSkillAreaType(arg: SkillAreaType): arg is FixedSkillAreaType {
  return arg.startsWith(FixedAreaPrefix);
}
