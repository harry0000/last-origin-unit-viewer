type ParameterPerLevel = {
  1: number,
  90: number,
  100: number
}

type GrowParameter = Readonly<{
  hp: ParameterPerLevel,
  atk: ParameterPerLevel,
  def: ParameterPerLevel
}>

type FixedParameter = Readonly<{
  accMilliPercentage: number
  avdMilliPercentage: number,
  criMilliPercentage: number,
  spdMilliValue: number,
  fireResistMilliPercentage: number,
  iceResistMilliPercentage: number,
  electricResistMilliPercentage: number
}>

export type UnitStatus = GrowParameter & FixedParameter
