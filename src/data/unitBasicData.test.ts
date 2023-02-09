import { UnitKind, UnitRank, UnitRole, UnitType } from '../domain/UnitBasicInfo';
import { unitBasicData } from './unitBasicData';

type UnitBasicDataConstraint = {
  [K in keyof typeof unitBasicData]: { no: K, kind: UnitKind, rank: UnitRank, type: UnitType, role: UnitRole }
}

describe('unitBasicData constraint', () => {

  test('unitBasicData satisfies constraint', () => {
    expect(() => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const v: UnitBasicDataConstraint = unitBasicData;
    }).not.toThrowError();
  });

});
