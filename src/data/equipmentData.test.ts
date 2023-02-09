import { EquipmentRank, EquipmentType } from '../domain/equipment/EquipmentData';
import { equipmentData } from './equipmentData';

type EquipmentDataConstraint = {
  [K in keyof typeof equipmentData]: { id: K, type: EquipmentType, max_rank?: typeof EquipmentRank['SS' | 'SSS']  }
}

describe('equipmentData constraint', () => {

  test('equipmentData satisfies constraint', () => {
    expect(() => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const v: EquipmentDataConstraint = equipmentData;
    }).not.toThrowError();
  });

});
