import { BattleEffect } from '../../../domain/BattleEffect';

import { useStatusParameter } from './unitStatusParameterState';
import { EnhanceableStatus } from './unitLvStatusState';
import { selectorFamily, useRecoilValue } from 'recoil';
import { UnitNumber } from '../../../domain/UnitBasicInfo';
import { useSelectedUnit } from '../../selector/unitSelectorState';

export type AffectedStatus = Exclude<EnhanceableStatus, 'hp'> | 'spd'

const selectedUnitAffectedEffectsState = selectorFamily<ReadonlyArray<BattleEffect>, UnitNumber | undefined>({
  key: 'selectedUnitAffectedEffectsState',
  get: (unit) => () => {
    return unit ?
      [{
        effect: 'atk_up',
        type: 'effects',
        value: { milliPercentage: 7250, term: { for_rounds: 2 } },
        affected_by: { type: 'ally', no: 11, skillType: 'passive3', form: 'normal' }
      }, {
        effect: 'acc_up',
        type: 'effects',
        value: { milliPercentage: 14500, term: { for_rounds: 2 } },
        affected_by: { type: 'ally', no: 11, skillType: 'passive3', form: 'normal' }
      }] :
      [];
  }
});

export function useHpValuesInSquad(): [current: string, max: string] {
  // TODO: implement
  return ['1114', '4457'];
}

export function useAffectedStatusValue(status: AffectedStatus): string {
  // TODO: implement
  return useStatusParameter(status);
}

export function useApValue(): string {
  // TODO: implement
  return '12.150';
}

export function useUnitDamagedState(): boolean | undefined {
  // TODO: implement
  return true;
}

export function useUnitAffectedEffects(): ReadonlyArray<BattleEffect> {
  const unit = useSelectedUnit()?.no;
  return useRecoilValue(selectedUnitAffectedEffectsState(unit));
}
