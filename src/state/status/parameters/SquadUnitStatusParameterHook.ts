import { useRecoilValue } from 'recoil';

import { DamageAttribute } from '../../../domain/skill/UnitSkillData';

import { EnhanceableStatus } from './UnitLvStatusState';
import {
  battleEffectsState,
  selectedUnitHpState,
  squadApTickCountState,
  squadUnitAccEffectsState,
  squadUnitAccState,
  squadUnitApEffectsState,
  squadUnitApState,
  squadUnitAtkEffectsState,
  squadUnitAtkRateEffectValueState,
  squadUnitAtkState,
  squadUnitAtkValueUpByUnitEffectsState,
  squadUnitAtkValueUpEffectsState,
  squadUnitCriEffectsState,
  squadUnitCriState,
  selectedUnitCurrentHpState,
  selectedUnitDamagedState,
  squadUnitDefEffectsState,
  squadUnitDefRateEffectValueState,
  squadUnitDefState,
  squadUnitDefValueUpEffectsState,
  squadUnitElectricResistEffectsState,
  squadUnitElectricResistState,
  squadUnitEvaEffectsState,
  squadUnitEvaState,
  squadUnitFireResistEffectsState,
  squadUnitFireResistState,
  squadUnitIceResistEffectsState,
  squadUnitIceResistState,
  squadUnitSpdEffectsState,
  squadUnitSpdEffectValueState,
  squadUnitSpdState,
  squadUnitStatusEffectsSummary
} from './UnitStatusParameterState';
import { useSelectedUnit } from '../../selector/UnitSelectorHook';

import { AffectableStatus } from '../../../component/status/parameters/StatusEffectsView';
import {
  SquadUnitApEffectsViewModel,
  SquadUnitApplyingEffectViewModel,
  SquadUnitStatusEffectsViewModel
} from '../../../component/status/parameters/SquadUnitStatusEffectsViewModel';
import {
  UnitStatusEffectValue,
  buildSquadUnitStatusEffectsSummaryViewModel
} from '../../../component/status/parameters/StatusEffectsSummaryViewModel';
import {
  appendPercentage,
  formatApValue,
  formatMilliPercentage,
  formatMilliValue,
  formatResistPercentage,
  formatSquadUnitSpdValue
} from '../../../component/status/parameters/UnitStatusParameterFormatter';

export function useSquadUnitHpValues(): [current: number, max: number] {
  const selected = useSelectedUnit()?.no;
  const cur = useRecoilValue(selectedUnitCurrentHpState(selected));
  const max = useRecoilValue(selectedUnitHpState(selected));

  return [
    cur?.value ?? 0,
    max?.value ?? 0
  ];
}

export function useSquadUnitStatusValue(status: Exclude<EnhanceableStatus, 'hp'> | 'spd'): string {
  switch (status) {
  case 'atk': return formatMilliValue(useRecoilValue(squadUnitAtkState));
  case 'def': return formatMilliValue(useRecoilValue(squadUnitDefState));
  case 'acc': return formatMilliPercentage(useRecoilValue(squadUnitAccState));
  case 'eva': return formatMilliPercentage(useRecoilValue(squadUnitEvaState));
  case 'cri': return formatMilliPercentage(useRecoilValue(squadUnitCriState));
  case 'spd': return formatSquadUnitSpdValue(useRecoilValue(squadUnitSpdState));
  }
}

export function useSquadUnitAttributeResistParameter(attribute: DamageAttribute): string {
  const value = (() => {
    switch (attribute) {
    case DamageAttribute.Fire:     return useRecoilValue(squadUnitFireResistState);
    case DamageAttribute.Ice:      return useRecoilValue(squadUnitIceResistState);
    case DamageAttribute.Electric: return useRecoilValue(squadUnitElectricResistState);
    }
  })();

  return appendPercentage(formatResistPercentage(value));
}

export function useSquadUnitStatusEffectsSummary(
  status: Exclude<AffectableStatus, 'hp'>
): UnitStatusEffectValue {
  const selected = useSelectedUnit()?.no;
  const value = useRecoilValue(squadUnitStatusEffectsSummary(status, selected));

  return buildSquadUnitStatusEffectsSummaryViewModel(status, value ?? 0);
}

export function useSquadUnitStatusEffects(
  status: Exclude<AffectableStatus, 'hp'>
): SquadUnitStatusEffectsViewModel {
  switch (status) {
  case 'atk':
    return SquadUnitStatusEffectsViewModel.build(
      status,
      useRecoilValue(squadUnitAtkEffectsState),
      useRecoilValue(squadUnitAtkRateEffectValueState),
      useRecoilValue(squadUnitAtkValueUpEffectsState),
      useRecoilValue(squadUnitAtkValueUpByUnitEffectsState)
    );
  case 'def':
    return SquadUnitStatusEffectsViewModel.build(
      status,
      useRecoilValue(squadUnitDefEffectsState),
      useRecoilValue(squadUnitDefRateEffectValueState),
      useRecoilValue(squadUnitDefValueUpEffectsState)
    );
  case 'acc': return SquadUnitStatusEffectsViewModel.build(status, useRecoilValue(squadUnitAccEffectsState));
  case 'eva': return SquadUnitStatusEffectsViewModel.build(status, useRecoilValue(squadUnitEvaEffectsState));
  case 'cri': return SquadUnitStatusEffectsViewModel.build(status, useRecoilValue(squadUnitCriEffectsState));
  case 'spd':
    return SquadUnitStatusEffectsViewModel.build(
      status,
      useRecoilValue(squadUnitSpdEffectsState),
      useRecoilValue(squadUnitSpdEffectValueState)
    );
  case 'fireResist':     return SquadUnitStatusEffectsViewModel.build(status, useRecoilValue(squadUnitFireResistEffectsState));
  case 'iceResist':      return SquadUnitStatusEffectsViewModel.build(status, useRecoilValue(squadUnitIceResistEffectsState));
  case 'electricResist': return SquadUnitStatusEffectsViewModel.build(status, useRecoilValue(squadUnitElectricResistEffectsState));
  }
}

export function useSquadUnitApEffects(): SquadUnitApEffectsViewModel | undefined {
  const ap = useRecoilValue(squadUnitApState);
  const apEffects = useRecoilValue(squadUnitApEffectsState);
  const apTickCount = useRecoilValue(squadApTickCountState);
  const spd = useRecoilValue(squadUnitSpdState);

  return ap && spd && new SquadUnitApEffectsViewModel(apEffects, apTickCount, spd);
}

export function useSquadUnitApValue(): string {
  return formatApValue(useRecoilValue(squadUnitApState));
}

export function useSquadUnitDamagedState(): boolean | undefined {
  const selected = useSelectedUnit()?.no;
  return useRecoilValue(selectedUnitDamagedState(selected));
}

export function useSquadUnitApplyingEffects(): ReadonlyArray<SquadUnitApplyingEffectViewModel> {
  return useRecoilValue(battleEffectsState).map(e => new SquadUnitApplyingEffectViewModel(e));
}
