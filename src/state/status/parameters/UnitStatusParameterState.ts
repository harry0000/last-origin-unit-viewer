import { atom, atomFamily, CallbackInterface, RecoilValueReadOnly, selector, selectorFamily } from 'recoil';

import {
  AccBattleEffect,
  ApBattleEffect,
  AtkBattleEffect,
  AtkValueUpBattleEffect,
  AtkValueUpByUnitBattleEffect,
  BattleEffect,
  CriBattleEffect,
  DefBattleEffect,
  DefValueUpBattleEffect,
  ElectricResistBattleEffect,
  EvaBattleEffect,
  FireResistBattleEffect,
  IceResistBattleEffect,
  MinimumElectricResistUpBattleEffect,
  MinimumFireResistUpBattleEffect,
  MinimumIceResistUpBattleEffect,
  SpdBattleEffect
} from '../../../domain/squad/simulator/BattleEffect';
import UnitAffection, { AffectionBonus } from '../../../domain/UnitAffection';
import BattleEffectSimulator from '../../../domain/squad/simulator/BattleEffectSimulator';
import { CoreLinkBonus, FullLinkBonus } from '../../../domain/UnitCoreLinkBonusData';
import {
  IntegerValue,
  MicroValue,
  MilliPercentageValue,
  MilliValue,
  equalIntegerValue,
  equalMicroValue,
  equalMilliPercentageValue,
  equalMilliValue,
  calcMilliValue,
  calcMilliPercentageValue,
  calcMicroValue
} from '../../../domain/ValueUnit';
import { Squad } from '../../../domain/squad/Squad';
import { SquadUnitActionOrder } from '../../../domain/squad/SquadUnitActionOrder';
import { SquadUnitStatusCalculator } from '../../../domain/status/SquadUnitStatusParameter';
import {
  UnitAccStatusParameter,
  UnitAtkStatusParameter,
  UnitCriStatusParameter,
  UnitDefStatusParameter,
  UnitElectricResistStatusParameter,
  UnitEvaStatusParameter,
  UnitFireResistStatusParameter,
  UnitHpStatusParameter,
  UnitIceResistStatusParameter,
  UnitSpdStatusParameter,
  calculateUnitBaseAtk,
  calculateUnitBaseDef,
  calculateUnitBaseHp
} from '../../../domain/status/UnitStatusParameter';
import {
  UnitChip1Equipment,
  UnitChip2Equipment,
  UnitGearEquipment,
  UnitOsEquipment
} from '../../../domain/equipment/UnitEquipment';
import UnitCoreLink from '../../../domain/UnitCoreLink';
import UnitDamagedState, { DamagedState } from '../../../domain/UnitDamagedState';
import UnitLvStatus from '../../../domain/status/UnitLvStatus';
import { UnitLvValue } from '../../../domain/status/UnitLv';
import { UnitNumber, UnitRank } from '../../../domain/UnitBasicInfo';
import { UnitSkill } from '../../../domain/skill/UnitSkill';

import { unitBasicData } from '../../../data/unitBasicData';
import { unitStatusData } from '../../../data/unitStatusData';

import { affectionBonusEffectState } from '../UnitAffectionState';
import { currentRankState, lvStateResolver, lvValueState } from './UnitLvStatusState';
import {
  coreLinkBonusEffectsState,
  fullLinkBonusEffectState,
  unitCoreLinkResolver
} from '../../corelink/UnitCoreLinkState';
import { damagedState, unitDamagedStateResolver } from '../UnitDamagedState';
import { squadResolver } from '../../squad/SquadState';
import { selectedUnitState } from '../../selector/UnitSelectorState';
import { unitEquipmentResolver } from '../../equipment/UnitEquipmentState';
import { unitSkillResolver } from '../../skill/UnitSkillState';

import { AffectableStatus } from '../../../component/status/parameters/StatusEffectsView';

import { getFromSnapshot, setIfNotDeepEqual } from '../../../util/recoil';

export type AtkValueUpByUnitBattleEffectValue = { effect: AtkValueUpByUnitBattleEffect, value: MilliValue }
export type BattleEffectExcludeAPEffect = Exclude<BattleEffect, ApBattleEffect>

type UnitDataValues = {
  rank: UnitRank,
  lvValue: UnitLvValue,
  atk: MilliValue,
  def: MilliValue,
  acc: MilliPercentageValue,
  eva: MilliPercentageValue,
  cri: MilliPercentageValue,
  spd: MicroValue,
  fireResist: MilliPercentageValue,
  iceResist: MilliPercentageValue,
  electricResist: MilliPercentageValue,
  skill: UnitSkill,
  chip1: UnitChip1Equipment,
  chip2: UnitChip2Equipment,
  os: UnitOsEquipment,
  gear: UnitGearEquipment,
  coreLinkBonus: CoreLinkBonus,
  fullLinkBonus: FullLinkBonus | undefined,
  affectionBonus: AffectionBonus | undefined,
  damaged: UnitDamagedState
}

type UpdatedUnitDataValue = { unit: UnitNumber } & Partial<UnitDataValues>

type Repository<T> = (unit: UnitNumber) => T

type UnitDataRepositories = {
  [K in keyof UnitDataValues]: Repository<UnitDataValues[K]>
}

function buildRepository<T extends keyof UnitDataValues>(
  key: T,
  newValues: UpdatedUnitDataValue,
  origin: UnitDataRepositories
): UnitDataRepositories[T];
function buildRepository(
  key: keyof UnitDataValues,
  newValues: UpdatedUnitDataValue,
  origin: UnitDataRepositories
): Repository<UnitDataValues[keyof UnitDataValues]> {
  return (unit) => (unit === newValues.unit && key in newValues) ? newValues[key] : origin[key](unit);
}

function buildDefaultRepositories({ snapshot }: CallbackInterface): UnitDataRepositories {
  const get = getFromSnapshot(snapshot);

  return {
    rank: (unit) => get(currentRankState(unit)),
    lvValue: (unit) => get(lvValueState(unit)),
    atk: (unit) => get(_atk(unit)),
    def: (unit) => get(_def(unit)),
    acc: (unit) => get(_acc(unit)),
    eva: (unit) => get(_eva(unit)),
    cri: (unit) => get(_cri(unit)),
    spd: (unit) => get(_spd(unit)),
    fireResist: (unit) => get(_fireResist(unit)),
    iceResist: (unit) => get(_iceResist(unit)),
    electricResist: (unit) => get(_electricResist(unit)),
    skill: (unit) => get(unitSkillResolver(unitBasicData[unit])),
    chip1: (unit) => get(unitEquipmentResolver('chip1')(unit)),
    chip2: (unit) => get(unitEquipmentResolver('chip2')(unit)),
    os:    (unit) => get(unitEquipmentResolver('os')(unit)),
    gear:  (unit) => get(unitEquipmentResolver('gear')(unit)),
    coreLinkBonus: (unit) => get(coreLinkBonusEffectsState(unit)),
    fullLinkBonus: (unit) => get(fullLinkBonusEffectState(unit)),
    affectionBonus: (unit) => get(affectionBonusEffectState(unitBasicData[unit])),
    damaged: (unit) => get(unitDamagedStateResolver(unit))
  };
}

function buildRepositories(
  cbi: CallbackInterface,
  newValues: UpdatedUnitDataValue
): UnitDataRepositories {
  const defaultRepos = buildDefaultRepositories(cbi);

  return {
    rank: buildRepository('rank', newValues, defaultRepos),
    lvValue: buildRepository('lvValue', newValues, defaultRepos),
    atk: buildRepository('atk', newValues, defaultRepos),
    def: buildRepository('def', newValues, defaultRepos),
    acc: buildRepository('acc', newValues, defaultRepos),
    eva: buildRepository('eva', newValues, defaultRepos),
    cri: buildRepository('cri', newValues, defaultRepos),
    spd: buildRepository('spd', newValues, defaultRepos),
    fireResist: buildRepository('fireResist', newValues, defaultRepos),
    iceResist: buildRepository('iceResist', newValues, defaultRepos),
    electricResist: buildRepository('electricResist', newValues, defaultRepos),
    skill: buildRepository('skill', newValues, defaultRepos),
    chip1: buildRepository('chip1', newValues, defaultRepos),
    chip2: buildRepository('chip2', newValues, defaultRepos),
    os:    buildRepository('os', newValues, defaultRepos),
    gear:  buildRepository('gear', newValues, defaultRepos),
    coreLinkBonus: buildRepository('coreLinkBonus', newValues, defaultRepos),
    fullLinkBonus: buildRepository('fullLinkBonus', newValues, defaultRepos),
    affectionBonus: buildRepository('affectionBonus', newValues, defaultRepos),
    damaged: buildRepository('damaged', newValues, defaultRepos)
  };
}

function getRemovedUnits(prev: Squad, next: Squad): ReadonlySet<UnitNumber> {
  const prevUnits = new Set(prev.units.map(({ unit }) => unit.no));

  next.units.forEach(({ unit }) => { prevUnits.delete(unit.no); });

  return prevUnits;
}

const ZeroIntegerValue: IntegerValue = { value: 0 };
const ZeroMilliValue: MilliValue = { milliValue: 0 };
const ZeroMicroValue: MicroValue = { microValue: 0 };
const ZeroMilliPercentageValue: MilliPercentageValue = { milliPercentage: 0 };

const _hp = atomFamily<IntegerValue, UnitNumber>({ key: 'UnitStatusParameterState_hp', default: (unit) => calculateUnitBaseHp(unit, 1) });
const _atk = atomFamily<MilliValue, UnitNumber>({ key: 'UnitStatusParameterState_atk', default: (unit) => calculateUnitBaseAtk(unit, 1) });
const _def = atomFamily<MilliValue, UnitNumber>({ key: 'UnitStatusParameterState_def', default: (unit) => calculateUnitBaseDef(unit, 1) });
const _acc = atomFamily<MilliPercentageValue, UnitNumber>({ key: 'UnitStatusParameterState_acc', default: (unit) => unitStatusData[unit].acc });
const _eva = atomFamily<MilliPercentageValue, UnitNumber>({ key: 'UnitStatusParameterState_eva', default: (unit) => unitStatusData[unit].eva });
const _cri = atomFamily<MilliPercentageValue, UnitNumber>({ key: 'UnitStatusParameterState_cri', default: (unit) => unitStatusData[unit].cri });
const _spd = atomFamily<MicroValue, UnitNumber>({ key: 'UnitStatusParameterState_spd', default: (unit) => unitStatusData[unit].spd });
const _fireResist = atomFamily<MilliPercentageValue, UnitNumber>({ key: 'UnitStatusParameterState_fireResist', default: (unit) => unitStatusData[unit].fireResist });
const _iceResist = atomFamily<MilliPercentageValue, UnitNumber>({ key: 'UnitStatusParameterState_iceResist', default: (unit) => unitStatusData[unit].iceResist });
const _electricResist = atomFamily<MilliPercentageValue, UnitNumber>({ key: 'UnitStatusParameterState_electricResist', default: (unit) => unitStatusData[unit].electricResist });

const _hpEffectValue = atomFamily<IntegerValue, UnitNumber>({ key: 'UnitStatusParameterState_hpEffectValue', default: ZeroIntegerValue });
const _atkEffectValue = atomFamily<MilliValue, UnitNumber>({ key: 'UnitStatusParameterState_atkEffectValue', default: ZeroMilliValue });
const _defEffectValue = atomFamily<MilliValue, UnitNumber>({ key: 'UnitStatusParameterState_defEffectValue', default: ZeroMilliValue });
const _accEffectValue = atomFamily<MilliPercentageValue, UnitNumber>({ key: 'UnitStatusParameterState_accEffectValue', default: ZeroMilliPercentageValue });
const _evaEffectValue = atomFamily<MilliPercentageValue, UnitNumber>({ key: 'UnitStatusParameterState_evaEffectValue', default: ZeroMilliPercentageValue });
const _criEffectValue = atomFamily<MilliPercentageValue, UnitNumber>({ key: 'UnitStatusParameterState_criEffectValue', default: ZeroMilliPercentageValue });
const _spdEffectValue = atomFamily<MicroValue, UnitNumber>({ key: '', default: ZeroMicroValue });
const _fireResistEffectValue = atomFamily<MilliPercentageValue, UnitNumber>({ key: 'UnitStatusParameterState_fireResistEffectValue', default: ZeroMilliPercentageValue });
const _iceResistEffectValue = atomFamily<MilliPercentageValue, UnitNumber>({ key: 'UnitStatusParameterState_iceResistEffectValue', default: ZeroMilliPercentageValue });
const _electricResistEffectValue = atomFamily<MilliPercentageValue, UnitNumber>({ key: 'UnitStatusParameterState_electricResistEffectValue', default: ZeroMilliPercentageValue });

const _hpCoreLinkBonusValue = atomFamily<IntegerValue, UnitNumber>({ key: 'UnitStatusParameterState_hpCoreLinkBonusValue', default: ZeroIntegerValue });
const _hpFullLinkBonusValue = atomFamily<IntegerValue, UnitNumber>({ key: 'UnitStatusParameterState_hpFullLinkBonusValue', default: ZeroIntegerValue });

const _atkCoreLinkBonusValue = atomFamily<MilliValue, UnitNumber>({ key: 'UnitStatusParameterState_atkCoreLinkBonusValue', default: ZeroMilliValue });
const _atkFullLinkBonusValue = atomFamily<MilliValue, UnitNumber>({ key: 'UnitStatusParameterState_atkFullLinkBonusValue', default: ZeroMilliValue });
const _defCoreLinkBonusValue = atomFamily<MilliValue, UnitNumber>({ key: 'UnitStatusParameterState_defCoreLinkBonusValue', default: ZeroMilliValue });
const _defFullLinkBonusValue = atomFamily<MilliValue, UnitNumber>({ key: 'UnitStatusParameterState_defFullLinkBonusValue', default: ZeroMilliValue });

const _inSquad = {
  battleEffects: atomFamily<ReadonlyArray<BattleEffectExcludeAPEffect>, UnitNumber>({
    key: 'UnitsStatusParameterState_inSquad_battleEffects',
    default: []
  }),
  apTickCount: atom<number>({ key: 'UnitsStatusParameterState_inSquad_apTickCount', default: 0 }),

  atk: atomFamily<MilliValue | undefined, UnitNumber>({ key: 'UnitsStatusParameterState_inSquad_atk', default: undefined }),
  def: atomFamily<MilliValue | undefined, UnitNumber>({ key: 'UnitsStatusParameterState_inSquad_def', default: undefined }),
  acc: atomFamily<MilliPercentageValue | undefined, UnitNumber>({ key: 'UnitsStatusParameterState_inSquad_acc', default: undefined }),
  eva: atomFamily<MilliPercentageValue | undefined, UnitNumber>({ key: 'UnitsStatusParameterState_inSquad_eva', default: undefined }),
  cri: atomFamily<MilliPercentageValue | undefined, UnitNumber>({ key: 'UnitsStatusParameterState_inSquad_cri', default: undefined }),
  spd: atomFamily<MicroValue | undefined, UnitNumber>({ key: 'UnitsStatusParameterState_inSquad_spd', default: undefined }),
  ap: atomFamily<MicroValue | undefined, UnitNumber>({ key: 'UnitsStatusParameterState_inSquad_ap', default: undefined }),

  fireResist: atomFamily<MilliPercentageValue | undefined, UnitNumber>({ key: 'UnitsStatusParameterState_inSquad_fireResist', default: undefined }),
  iceResist: atomFamily<MilliPercentageValue | undefined, UnitNumber>({ key: 'UnitsStatusParameterState_inSquad_iceResist', default: undefined }),
  electricResist: atomFamily<MilliPercentageValue | undefined, UnitNumber>({ key: 'UnitsStatusParameterState_inSquad_electricResist', default: undefined }),

  atkEffectValue: atomFamily<MilliValue | undefined, UnitNumber>({ key: 'UnitsStatusParameterState_inSquad_atkEffectValue', default: undefined }),
  defEffectValue: atomFamily<MilliValue | undefined, UnitNumber>({ key: 'UnitsStatusParameterState_inSquad_defEffectValue', default: undefined }),
  accEffectValue: atomFamily<MilliPercentageValue | undefined, UnitNumber>({ key: 'UnitsStatusParameterState_inSquad_accEffectValue', default: undefined }),
  evaEffectValue: atomFamily<MilliPercentageValue | undefined, UnitNumber>({ key: 'UnitsStatusParameterState_inSquad_evaEffectValue', default: undefined }),
  criEffectValue: atomFamily<MilliPercentageValue | undefined, UnitNumber>({ key: 'UnitsStatusParameterState_inSquad_criEffectValue', default: undefined }),
  spdEffectValue: atomFamily<MicroValue | undefined, UnitNumber>({ key: 'UnitsStatusParameterState_inSquad_spdEffectValue', default: undefined }),

  fireResistEffectValue: atomFamily<MilliPercentageValue | undefined, UnitNumber>({ key: 'UnitsStatusParameterState_inSquad_fireResistEffectValue', default: undefined }),
  iceResistEffectValue: atomFamily<MilliPercentageValue | undefined, UnitNumber>({ key: 'UnitsStatusParameterState_inSquad_iceResistEffectValue', default: undefined }),
  electricResistEffectValue: atomFamily<MilliPercentageValue | undefined, UnitNumber>({ key: 'UnitsStatusParameterState_inSquad_electricResistEffectValue', default: undefined }),

  atkEffects: atomFamily<ReadonlyArray<AtkBattleEffect>, UnitNumber>({ key: 'UnitsStatusParameterState_inSquad_atkEffects', default: [] }),
  defEffects: atomFamily<ReadonlyArray<DefBattleEffect>, UnitNumber>({ key: 'UnitsStatusParameterState_inSquad_defEffects', default: [] }),
  accEffects: atomFamily<ReadonlyArray<AccBattleEffect>, UnitNumber>({ key: 'UnitsStatusParameterState_inSquad_accEffects', default: [] }),
  evaEffects: atomFamily<ReadonlyArray<EvaBattleEffect>, UnitNumber>({ key: 'UnitsStatusParameterState_inSquad_evaEffects', default: [] }),
  criEffects: atomFamily<ReadonlyArray<CriBattleEffect>, UnitNumber>({ key: 'UnitsStatusParameterState_inSquad_criEffects', default: [] }),
  spdEffects: atomFamily<ReadonlyArray<SpdBattleEffect>, UnitNumber>({ key: 'UnitsStatusParameterState_inSquad_spdEffects', default: [] }),
  apEffects: atomFamily<ReadonlyArray<ApBattleEffect>, UnitNumber>({ key: 'UnitsStatusParameterState_inSquad_apEffects', default: [] }),

  fireResistEffects: atomFamily<ReadonlyArray<FireResistBattleEffect>, UnitNumber>({ key: 'UnitsStatusParameterState_inSquad_fireResistEffects', default: [] }),
  iceResistEffects: atomFamily<ReadonlyArray<IceResistBattleEffect>, UnitNumber>({ key: 'UnitsStatusParameterState_inSquad_iceResistEffects', default: [] }),
  electricResistEffects: atomFamily<ReadonlyArray<ElectricResistBattleEffect>, UnitNumber>({ key: 'UnitsStatusParameterState_inSquad_electricResistEffects', default: [] }),

  minimumFireResistUpEffects: atomFamily<ReadonlyArray<MinimumFireResistUpBattleEffect>, UnitNumber>({ key: 'UnitsStatusParameterState_inSquad_minimumFireResistUpEffects', default: [] }),
  minimumIceResistUpEffects: atomFamily<ReadonlyArray<MinimumIceResistUpBattleEffect>, UnitNumber>({ key: 'UnitsStatusParameterState_inSquad_minimumIceResistUpEffects', default: [] }),
  minimumElectricResistUpEffects: atomFamily<ReadonlyArray<MinimumElectricResistUpBattleEffect>, UnitNumber>({ key: 'UnitsStatusParameterState_inSquad_minimumElectricResistUpEffects', default: [] }),

  atkRateEffectValue: atomFamily<MilliValue | undefined, UnitNumber>({ key: 'UnitsStatusParameterState_inSquad_atkRateEffectValue', default: undefined }),
  defRateEffectValue: atomFamily<MilliValue | undefined, UnitNumber>({ key: 'UnitsStatusParameterState_inSquad_defRateEffectValue', default: undefined }),

  atkValueUpEffects: atomFamily<ReadonlyArray<AtkValueUpBattleEffect>, UnitNumber>({ key: 'UnitsStatusParameterState_inSquad_atkValueUpEffects', default: [] }),
  defValueUpEffects: atomFamily<ReadonlyArray<DefValueUpBattleEffect>, UnitNumber>({ key: 'UnitsStatusParameterState_inSquad_defValueUpEffects', default: [] }),
  atkValueUpByUnitEffects: atomFamily<ReadonlyArray<AtkValueUpByUnitBattleEffectValue>, UnitNumber>({
    key: 'UnitsStatusParameterState_inSquad_atkValueUpByUnitEffects',
    default: []
  })
};

function _updateStatus(
  unit: UnitNumber,
  lvState: UnitLvStatus,
  chip1: UnitChip1Equipment,
  chip2: UnitChip2Equipment,
  os: UnitOsEquipment,
  gear: UnitGearEquipment,
  coreLink: UnitCoreLink
): (cbi: CallbackInterface) => void {
  return (cbi) => {
    const lv = lvState.lv;
    const hp = lvState.hpStatusEffect;
    const atk = lvState.atkStatusEffect;
    const def = lvState.defStatusEffect;
    const acc = lvState.accStatusEffect;
    const eva = lvState.evaStatusEffect;
    const cri = lvState.criStatusEffect;
    const rankUpBonus = lvState.rankUpBonus;

    const chip1Effect = chip1.chip1StatusEffects(lv);
    const chip2Effect = chip2.chip2StatusEffects(lv);
    const osEffect = os.osStatusEffects(lv);
    const gearEffect = gear.gearStatusEffects(lv);

    const coreLinkBonus = coreLink.bonusEffects(lv);
    const fullLinkBonus = coreLink.fullLinkBonusEffect(lv);

    const hpParam = new UnitHpStatusParameter(unit, lv, hp, chip1Effect, chip2Effect, osEffect, gearEffect, coreLinkBonus, fullLinkBonus, rankUpBonus);
    const atkParam = new UnitAtkStatusParameter(unit, lv, atk, chip1Effect, chip2Effect, osEffect, gearEffect, coreLinkBonus, fullLinkBonus, rankUpBonus);
    const defParam = new UnitDefStatusParameter(unit, lv, def, chip1Effect, chip2Effect, osEffect, gearEffect, coreLinkBonus, fullLinkBonus, rankUpBonus);
    const accParam = new UnitAccStatusParameter(unit, acc, chip1Effect, chip2Effect, osEffect, gearEffect, coreLinkBonus, fullLinkBonus, rankUpBonus);
    const evaParam = new UnitEvaStatusParameter(unit, eva, chip1Effect, chip2Effect, osEffect, gearEffect, coreLinkBonus, fullLinkBonus, rankUpBonus);
    const criParam = new UnitCriStatusParameter(unit, cri, chip1Effect, chip2Effect, osEffect, gearEffect, coreLinkBonus, fullLinkBonus, rankUpBonus);
    const spdParam = new UnitSpdStatusParameter(unit, chip1Effect, chip2Effect, osEffect, gearEffect, coreLinkBonus, fullLinkBonus, rankUpBonus);
    const fireResist     = new UnitFireResistStatusParameter(unit, chip1Effect, chip2Effect, osEffect, gearEffect, rankUpBonus);
    const iceResist      = new UnitIceResistStatusParameter(unit, chip1Effect, chip2Effect, osEffect, gearEffect, rankUpBonus);
    const electricResist = new UnitElectricResistStatusParameter(unit, chip1Effect, chip2Effect, osEffect, gearEffect, rankUpBonus);

    setIfNotDeepEqual(cbi, _hp(unit), hpParam.hp, equalIntegerValue);
    setIfNotDeepEqual(cbi, _hpEffectValue(unit), hpParam.hpEffectValue, equalIntegerValue);
    setIfNotDeepEqual(cbi, _hpCoreLinkBonusValue(unit), hpParam.hpCoreLinkBonus, equalIntegerValue);
    setIfNotDeepEqual(cbi, _hpFullLinkBonusValue(unit), hpParam.hpFullLinkBonus, equalIntegerValue);

    setIfNotDeepEqual(cbi, _atk(unit), atkParam.atk, equalMilliValue);
    setIfNotDeepEqual(cbi, _atkEffectValue(unit), atkParam.atkEffectValue, equalMilliValue);
    setIfNotDeepEqual(cbi, _atkCoreLinkBonusValue(unit), atkParam.atkCoreLinkBonus, equalMilliValue);
    setIfNotDeepEqual(cbi, _atkFullLinkBonusValue(unit), atkParam.atkFullLinkBonus, equalMilliValue);

    setIfNotDeepEqual(cbi, _def(unit), defParam.def, equalMilliValue);
    setIfNotDeepEqual(cbi, _defEffectValue(unit), defParam.defEffectValue, equalMilliValue);
    setIfNotDeepEqual(cbi, _defCoreLinkBonusValue(unit), defParam.defCoreLinkBonus, equalMilliValue);
    setIfNotDeepEqual(cbi, _defFullLinkBonusValue(unit), defParam.defFullLinkBonus, equalMilliValue);

    setIfNotDeepEqual(cbi, _acc(unit), accParam.acc, equalMilliPercentageValue);
    setIfNotDeepEqual(cbi, _accEffectValue(unit), accParam.accEffectValue, equalMilliPercentageValue);

    setIfNotDeepEqual(cbi, _eva(unit), evaParam.eva, equalMilliPercentageValue);
    setIfNotDeepEqual(cbi, _evaEffectValue(unit), evaParam.evaEffectValue, equalMilliPercentageValue);

    setIfNotDeepEqual(cbi, _cri(unit), criParam.cri, equalMilliPercentageValue);
    setIfNotDeepEqual(cbi, _criEffectValue(unit), criParam.criEffectValue, equalMilliPercentageValue);

    setIfNotDeepEqual(cbi, _spd(unit), spdParam.spd, equalMicroValue);
    setIfNotDeepEqual(cbi, _spdEffectValue(unit), spdParam.spdEffectValue, equalMicroValue);

    setIfNotDeepEqual(cbi, _fireResist(unit), fireResist.resist, equalMilliPercentageValue);
    setIfNotDeepEqual(cbi, _fireResistEffectValue(unit), fireResist.resistEffectValue, equalMilliPercentageValue);

    setIfNotDeepEqual(cbi, _iceResist(unit), iceResist.resist, equalMilliPercentageValue);
    setIfNotDeepEqual(cbi, _iceResistEffectValue(unit), iceResist.resistEffectValue, equalMilliPercentageValue);

    setIfNotDeepEqual(cbi, _electricResist(unit), electricResist.resist, equalMilliPercentageValue);
    setIfNotDeepEqual(cbi, _electricResistEffectValue(unit), electricResist.resistEffectValue, equalMilliPercentageValue);

    const squad = getFromSnapshot(cbi.snapshot)(squadResolver);
    if (squad.existsUnit(unit)) {
      _updateSquadUnitStatus(
        squad,
        {
          unit,
          rank: lvState.rank,
          atk: atkParam.atk,
          def: defParam.def,
          acc: accParam.acc,
          eva: evaParam.eva,
          cri: criParam.cri,
          spd: spdParam.spd,
          fireResist: fireResist.resist,
          iceResist: iceResist.resist,
          electricResist: electricResist.resist,
          chip1,
          chip2,
          os,
          gear,
          coreLinkBonus,
          fullLinkBonus
        }
      )(cbi);
    }
  };
}

function _updateSquadUnitStatus(
  squad: Squad,
  newValues?: UpdatedUnitDataValue
): (cbi: CallbackInterface) => void {
  return (cbi) => {
    const set = cbi.set;
    const get = getFromSnapshot(cbi.snapshot);
    const prev = get(squadResolver);

    _resetRemovedUnitsState(getRemovedUnits(prev, squad))(cbi);

    const repos = newValues ? buildRepositories(cbi, newValues) : buildDefaultRepositories(cbi);

    const simulator = BattleEffectSimulator.initialize(
      squad,
      repos.rank,
      repos.lvValue,
      repos.atk,
      repos.def,
      repos.acc,
      repos.eva,
      repos.cri,
      repos.spd,
      repos.skill,
      repos.chip1,
      repos.chip2,
      repos.os,
      repos.gear,
      repos.coreLinkBonus,
      repos.fullLinkBonus,
      repos.affectionBonus,
      repos.damaged
    );

    const nextEffects = simulator.run();
    const calculator = new SquadUnitStatusCalculator();
    nextEffects.forEach(([unit, effects]) => {
      calculator.addUnit(
        unit,
        repos.atk(unit),
        repos.def(unit),
        repos.acc(unit),
        repos.eva(unit),
        repos.cri(unit),
        repos.spd(unit),
        repos.fireResist(unit),
        repos.iceResist(unit),
        repos.electricResist(unit),
        effects
      );
    });
    const { apTickCount, units } = calculator.run();

    set(_inSquad.apTickCount, apTickCount);

    units.forEach(unitStatus => {
      const unit = unitStatus.unit;

      setIfNotDeepEqual(cbi, _inSquad.battleEffects(unit), unitStatus.battleEffects);

      setIfNotDeepEqual(cbi, _inSquad.atk(unit), unitStatus.atk);
      setIfNotDeepEqual(cbi, _inSquad.def(unit), unitStatus.def);
      setIfNotDeepEqual(cbi, _inSquad.acc(unit), unitStatus.acc);
      setIfNotDeepEqual(cbi, _inSquad.eva(unit), unitStatus.eva);
      setIfNotDeepEqual(cbi, _inSquad.cri(unit), unitStatus.cri);
      setIfNotDeepEqual(cbi, _inSquad.spd(unit), unitStatus.spd);
      setIfNotDeepEqual(cbi, _inSquad.ap(unit), unitStatus.ap);

      setIfNotDeepEqual(cbi, _inSquad.fireResist(unit), unitStatus.fireResist);
      setIfNotDeepEqual(cbi, _inSquad.iceResist(unit), unitStatus.iceResist);
      setIfNotDeepEqual(cbi, _inSquad.electricResist(unit), unitStatus.electricResist);

      setIfNotDeepEqual(cbi, _inSquad.atkEffectValue(unit), unitStatus.atkEffectsSummary);
      setIfNotDeepEqual(cbi, _inSquad.defEffectValue(unit), unitStatus.defEffectsSummary);
      setIfNotDeepEqual(cbi, _inSquad.accEffectValue(unit), unitStatus.accEffectsSummary);
      setIfNotDeepEqual(cbi, _inSquad.evaEffectValue(unit), unitStatus.evaEffectsSummary);
      setIfNotDeepEqual(cbi, _inSquad.criEffectValue(unit), unitStatus.criEffectsSummary);
      setIfNotDeepEqual(cbi, _inSquad.spdEffectValue(unit), unitStatus.spdEffectsSummary);

      setIfNotDeepEqual(cbi, _inSquad.fireResistEffectValue(unit),     unitStatus.fireResistEffectsSummary);
      setIfNotDeepEqual(cbi, _inSquad.iceResistEffectValue(unit),      unitStatus.iceResistEffectsSummary);
      setIfNotDeepEqual(cbi, _inSquad.electricResistEffectValue(unit), unitStatus.electricResistEffectsSummary);

      setIfNotDeepEqual(cbi, _inSquad.atkEffects(unit), unitStatus.atkEffects);
      setIfNotDeepEqual(cbi, _inSquad.defEffects(unit), unitStatus.defEffects);
      setIfNotDeepEqual(cbi, _inSquad.accEffects(unit), unitStatus.accEffects);
      setIfNotDeepEqual(cbi, _inSquad.evaEffects(unit), unitStatus.evaEffects);
      setIfNotDeepEqual(cbi, _inSquad.criEffects(unit), unitStatus.criEffects);
      setIfNotDeepEqual(cbi, _inSquad.spdEffects(unit), unitStatus.spdEffects);
      setIfNotDeepEqual(cbi, _inSquad.apEffects(unit), unitStatus.apEffects);

      setIfNotDeepEqual(cbi, _inSquad.fireResistEffects(unit), unitStatus.fireResistEffects);
      setIfNotDeepEqual(cbi, _inSquad.iceResistEffects(unit), unitStatus.iceResistEffects);
      setIfNotDeepEqual(cbi, _inSquad.electricResistEffects(unit), unitStatus.electricResistEffects);

      setIfNotDeepEqual(cbi, _inSquad.minimumFireResistUpEffects(unit), unitStatus.minimumFireResistEffects);
      setIfNotDeepEqual(cbi, _inSquad.minimumIceResistUpEffects(unit), unitStatus.minimumIceResistEffects);
      setIfNotDeepEqual(cbi, _inSquad.minimumElectricResistUpEffects(unit), unitStatus.minimumElectricResistEffects);

      setIfNotDeepEqual(cbi, _inSquad.atkRateEffectValue(unit), unitStatus.atkRateEffectValue);
      setIfNotDeepEqual(cbi, _inSquad.defRateEffectValue(unit), unitStatus.defRateEffectValue);

      setIfNotDeepEqual(cbi, _inSquad.atkValueUpEffects(unit), unitStatus.atkValueUpEffects);
      setIfNotDeepEqual(cbi, _inSquad.defValueUpEffects(unit), unitStatus.defValueUpEffects);
      setIfNotDeepEqual(cbi, _inSquad.atkValueUpByUnitEffects(unit), unitStatus.atkValueUpByUnitEffects);
    });
  };
}

function _resetRemovedUnitsState(removedUnits: ReadonlySet<UnitNumber>): (cbi: CallbackInterface) => void {
  return ({ reset }) => {
    removedUnits.forEach(removed => {
      reset(_inSquad.battleEffects(removed));

      reset(_inSquad.atk(removed));
      reset(_inSquad.def(removed));
      reset(_inSquad.acc(removed));
      reset(_inSquad.eva(removed));
      reset(_inSquad.cri(removed));
      reset(_inSquad.spd(removed));
      reset(_inSquad.ap(removed));

      reset(_inSquad.fireResist(removed));
      reset(_inSquad.iceResist(removed));
      reset(_inSquad.electricResist(removed));

      reset(_inSquad.atkEffectValue(removed));
      reset(_inSquad.defEffectValue(removed));
      reset(_inSquad.accEffectValue(removed));
      reset(_inSquad.evaEffectValue(removed));
      reset(_inSquad.criEffectValue(removed));
      reset(_inSquad.spdEffectValue(removed));

      reset(_inSquad.fireResistEffectValue(removed));
      reset(_inSquad.iceResistEffectValue(removed));
      reset(_inSquad.electricResistEffectValue(removed));

      reset(_inSquad.atkEffects(removed));
      reset(_inSquad.defEffects(removed));
      reset(_inSquad.accEffects(removed));
      reset(_inSquad.evaEffects(removed));
      reset(_inSquad.criEffects(removed));
      reset(_inSquad.spdEffects(removed));
      reset(_inSquad.apEffects(removed));

      reset(_inSquad.fireResistEffects(removed));
      reset(_inSquad.iceResistEffects(removed));
      reset(_inSquad.electricResistEffects(removed));

      reset(_inSquad.minimumIceResistUpEffects(removed));

      reset(_inSquad.atkRateEffectValue(removed));
      reset(_inSquad.defRateEffectValue(removed));

      reset(_inSquad.atkValueUpEffects(removed));
      reset(_inSquad.defValueUpEffects(removed));
      reset(_inSquad.atkValueUpByUnitEffects(removed));
    });
  };
}

export const selectedUnitHpState = selectorFamily<IntegerValue, UnitNumber | undefined>({
  key: 'selectedUnitHpState',
  get: (selected) => ({ get }) => selected ? get(_hp(selected)) : ZeroIntegerValue
});
export const selectedUnitAtkState = selectorFamily<MilliValue, UnitNumber | undefined>({
  key: 'selectedUnitAtkState',
  get: (selected) => ({ get }) => selected ? get(_atk(selected)) : ZeroMilliValue
});
export const selectedUnitDefState = selectorFamily<MilliValue, UnitNumber | undefined>({
  key: 'selectedUnitDefState',
  get: (selected) => ({ get }) => selected ? get(_def(selected)) : ZeroMilliValue
});
export const selectedUnitAccState = selectorFamily<MilliPercentageValue, UnitNumber | undefined>({
  key: 'selectedUnitAccState',
  get: (selected) => ({ get }) => selected ? get(_acc(selected)) : ZeroMilliPercentageValue
});
export const selectedUnitEvaState = selectorFamily<MilliPercentageValue, UnitNumber | undefined>({
  key: 'selectedUnitEvaState',
  get: (selected) => ({ get }) => selected ? get(_eva(selected)) : ZeroMilliPercentageValue
});
export const selectedUnitCriState = selectorFamily<MilliPercentageValue, UnitNumber | undefined>({
  key: 'selectedUnitCriState',
  get: (selected) => ({ get }) => selected ? get(_cri(selected)) : ZeroMilliPercentageValue
});
export const selectedUnitSpdState = selectorFamily<MicroValue, UnitNumber | undefined>({
  key: 'selectedUnitSpdState',
  get: (selected) => ({ get }) => selected ? get(_spd(selected)) : ZeroMicroValue
});
export const selectedUnitFireResistState = selectorFamily<MilliPercentageValue, UnitNumber | undefined>({
  key: 'selectedUnitFireResistState',
  get: (selected) => ({ get }) => selected ? get(_fireResist(selected)) : ZeroMilliPercentageValue
});
export const selectedUnitIceResistState = selectorFamily<MilliPercentageValue, UnitNumber | undefined>({
  key: 'selectedUnitIceResistState',
  get: (selected) => ({ get }) => selected ? get(_iceResist(selected)) : ZeroMilliPercentageValue
});
export const selectedUnitElectricResistState = selectorFamily<MilliPercentageValue, UnitNumber | undefined>({
  key: 'selectedUnitElectricResistState',
  get: (selected) => ({ get }) => selected ? get(_electricResist(selected)) : ZeroMilliPercentageValue
});

const _unitStatusEffectsSummary = selectorFamily<number | undefined, { parameter: AffectableStatus, selected: UnitNumber | undefined }>({
  key: 'UnitsStatusParameterState_unitStatusEffectsSummary',
  get: ({ parameter, selected }) => ({ get }) => {
    if (!selected) {
      return undefined;
    }

    switch (parameter) {
    case 'hp': return get(_hpEffectValue(selected)).value;
    case 'atk': return calcMilliValue(get(_atkEffectValue(selected)));
    case 'def': return calcMilliValue(get(_defEffectValue(selected)));
    case 'acc': return calcMilliPercentageValue(get(_accEffectValue(selected)));
    case 'eva': return calcMilliPercentageValue(get(_evaEffectValue(selected)));
    case 'cri': return calcMilliPercentageValue(get(_criEffectValue(selected)));
    case 'spd': return calcMicroValue(get(_spdEffectValue(selected)));
    case 'fireResist':     return calcMilliPercentageValue(get(_fireResistEffectValue(selected)));
    case 'iceResist':      return calcMilliPercentageValue(get(_iceResistEffectValue(selected)));
    case 'electricResist': return calcMilliPercentageValue(get(_electricResistEffectValue(selected)));
    }
  }
});

export const unitStatusEffectsSummary = (parameter: AffectableStatus, selected: UnitNumber | undefined): RecoilValueReadOnly<number | undefined> =>
  _unitStatusEffectsSummary({ parameter, selected });

export const hpCoreLinkBonusValueState = (unit: UnitNumber): RecoilValueReadOnly<IntegerValue> => _hpCoreLinkBonusValue(unit);
export const atkCoreLinkBonusValueState = (unit: UnitNumber): RecoilValueReadOnly<MilliValue> => _atkCoreLinkBonusValue(unit);
export const defCoreLinkBonusValueState = (unit: UnitNumber): RecoilValueReadOnly<MilliValue> => _defCoreLinkBonusValue(unit);

export const hpFullLinkBonusValueState = (unit: UnitNumber): RecoilValueReadOnly<IntegerValue> => _hpFullLinkBonusValue(unit);
export const atkFullLinkBonusValueState = (unit: UnitNumber): RecoilValueReadOnly<MilliValue> => _atkFullLinkBonusValue(unit);
export const defFullLinkBonusValueState = (unit: UnitNumber): RecoilValueReadOnly<MilliValue> => _defFullLinkBonusValue(unit);

function wrapSquadUnitSelector<T>(key: string, family: (unit: UnitNumber) => RecoilValueReadOnly<T>, fallbackValue: T): RecoilValueReadOnly<T>;
function wrapSquadUnitSelector<T>(key: string, family: (unit: UnitNumber) => RecoilValueReadOnly<T | undefined>): RecoilValueReadOnly<T | undefined>;
function wrapSquadUnitSelector<T>(key: string, family: (unit: UnitNumber) => RecoilValueReadOnly<T>, fallbackValue: T | undefined = undefined): RecoilValueReadOnly<T | undefined> {
  return selector<T | undefined>({
    key,
    get: ({ get }) => {
      const selected = get(selectedUnitState)?.no;
      return (selected && get(family(selected))) ?? fallbackValue;
    }
  });
}

function wrapSquadUnitStatusSelector<T>(
  key: string,
  family: (unit: UnitNumber) => RecoilValueReadOnly<T | undefined>,
  fallback: (unit: UnitNumber) => RecoilValueReadOnly<T>
): RecoilValueReadOnly<T | undefined> {
  return selector<T | undefined>({
    key,
    get: ({ get }) => {
      const selected = get(selectedUnitState)?.no;
      return selected && (get(family(selected)) || get(fallback(selected)));
    }
  });
}

export const squadUnitAtkState = wrapSquadUnitStatusSelector('squadUnitAtkState', _inSquad.atk, _atk);
export const squadUnitDefState = wrapSquadUnitStatusSelector('squadUnitDefState', _inSquad.def, _def);
export const squadUnitAccState = wrapSquadUnitStatusSelector('squadUnitAccState', _inSquad.acc, _acc);
export const squadUnitEvaState = wrapSquadUnitStatusSelector('squadUnitEvaState', _inSquad.eva, _eva);
export const squadUnitCriState = wrapSquadUnitStatusSelector('squadUnitCriState', _inSquad.cri, _cri);
export const squadUnitSpdState = wrapSquadUnitStatusSelector('squadUnitSpdState', _inSquad.spd, _spd);

export const squadUnitFireResistState = wrapSquadUnitStatusSelector('squadUnitFireResistState', _inSquad.fireResist, _fireResist);
export const squadUnitIceResistState = wrapSquadUnitStatusSelector('squadUnitIceResistState', _inSquad.iceResist, _iceResist);
export const squadUnitElectricResistState = wrapSquadUnitStatusSelector('squadUnitElectricResistState', _inSquad.electricResist, _electricResist);

export const squadUnitApState = wrapSquadUnitSelector('squadUnitApState', _inSquad.ap);

export const battleEffectsState = wrapSquadUnitSelector('battleEffectsState', _inSquad.battleEffects, []);

export const squadUnitAtkEffectsState = wrapSquadUnitSelector('squadUnitAtkEffectsState', _inSquad.atkEffects, []);
export const squadUnitDefEffectsState = wrapSquadUnitSelector('squadUnitDefEffectsState', _inSquad.defEffects, []);
export const squadUnitAccEffectsState = wrapSquadUnitSelector('squadUnitAccEffectsState', _inSquad.accEffects, []);
export const squadUnitEvaEffectsState = wrapSquadUnitSelector('squadUnitEvaEffectsState', _inSquad.evaEffects, []);
export const squadUnitCriEffectsState = wrapSquadUnitSelector('squadUnitCriEffectsState', _inSquad.criEffects, []);
export const squadUnitSpdEffectsState = wrapSquadUnitSelector('squadUnitSpdEffectsState', _inSquad.spdEffects, []);

export const squadUnitApEffectsState = wrapSquadUnitSelector('squadUnitApEffectsState', _inSquad.apEffects, []);

export const squadUnitAtkValueUpEffectsState = wrapSquadUnitSelector('squadUnitAtkValueUpEffectsState', _inSquad.atkValueUpEffects, []);
export const squadUnitDefValueUpEffectsState = wrapSquadUnitSelector('squadUnitDefValueUpEffectsState', _inSquad.defValueUpEffects, []);

export const squadUnitAtkValueUpByUnitEffectsState = wrapSquadUnitSelector('squadUnitAtkValueUpByUnitEffectsState', _inSquad.atkValueUpByUnitEffects, []);

export const squadUnitFireResistEffectsState = wrapSquadUnitSelector('squadUnitFireResistEffectsState', _inSquad.fireResistEffects, []);
export const squadUnitIceResistEffectsState = wrapSquadUnitSelector('squadUnitIceResistEffectsState', _inSquad.iceResistEffects, []);
export const squadUnitElectricResistEffectsState = wrapSquadUnitSelector('squadUnitElectricResistEffectsState', _inSquad.electricResistEffects, []);

export const squadUnitMinimumFireResistUpEffectsState = wrapSquadUnitSelector('squadUnitMinimumFireResistUpEffectsState', _inSquad.minimumFireResistUpEffects, []);
export const squadUnitMinimumIceResistUpEffectsState = wrapSquadUnitSelector('squadUnitMinimumIceResistUpEffectsState', _inSquad.minimumIceResistUpEffects, []);
export const squadUnitMinimumElectricResistUpEffectsState = wrapSquadUnitSelector('squadUnitMinimumElectricResistUpEffectsState', _inSquad.minimumElectricResistUpEffects, []);

export const squadUnitAtkRateEffectValueState = wrapSquadUnitSelector('squadUnitAtkRateEffectValueState', _inSquad.atkRateEffectValue);
export const squadUnitDefRateEffectValueState = wrapSquadUnitSelector('squadUnitDefRateEffectValueState', _inSquad.defRateEffectValue);

export const squadUnitAccEffectValueState = wrapSquadUnitSelector('squadUnitAccEffectValueState', _inSquad.accEffectValue);
export const squadUnitEvaEffectValueState = wrapSquadUnitSelector('squadUnitEvaEffectValueState', _inSquad.evaEffectValue);
export const squadUnitCriEffectValueState = wrapSquadUnitSelector('squadUnitCriEffectValueState', _inSquad.criEffectValue);
export const squadUnitSpdEffectValueState = wrapSquadUnitSelector('squadUnitSpdEffectValueState', _inSquad.spdEffectValue);

export const squadUnitFireResistEffectValueState = wrapSquadUnitSelector('squadUnitFireResistEffectValueState', _inSquad.fireResistEffectValue);
export const squadUnitIceResistEffectValueState = wrapSquadUnitSelector('squadUnitIceResistEffectValueState', _inSquad.iceResistEffectValue);
export const squadUnitElectricResistEffectValueState = wrapSquadUnitSelector('squadUnitElectricResistEffectValueState', _inSquad.electricResistEffectValue);

export const selectedUnitCurrentHpState = selectorFamily<IntegerValue | undefined, UnitNumber | undefined>({
  key: 'selectedUnitCurrentHpState',
  get: (unit) => ({ get }) => unit && get(unitDamagedStateResolver(unit)).currentHpValue(get(_hp(unit)))
});

export const selectedUnitDamagedState = selectorFamily<DamagedState | undefined, UnitNumber | undefined>({
  key: 'selectedUnitDamagedState',
  get: (unit) => ({ get }) => unit && get(damagedState(unit))
});

export const squadApTickCountState: RecoilValueReadOnly<number> = _inSquad.apTickCount;

export const squadUnitActionOrder = selector<SquadUnitActionOrder>({
  key: 'squadUnitActionOrder',
  get: ({ get }) =>
    new SquadUnitActionOrder(
      get(squadResolver),
      (unit) => get(_inSquad.ap(unit)),
      (unit) => get(_inSquad.spd(unit))
    )
});

function map<T, U>(value: T | undefined, f: (value: T) => U): U | undefined {
  return value && f(value);
}

const _squadUnitStatusEffectsSummary = selectorFamily<
  number | undefined,
  { parameter: Exclude<AffectableStatus, 'hp'>, selected: UnitNumber | undefined }
>({
  key: 'UnitsStatusParameterState_squadUnitStatusEffectsSummary',
  get: ({ parameter, selected }) => ({ get }) => {
    if (!selected) {
      return undefined;
    }

    switch (parameter) {
    case 'atk': return map(get(_inSquad.atkEffectValue(selected)), calcMilliValue);
    case 'def': return map(get(_inSquad.defEffectValue(selected)), calcMilliValue);
    case 'acc': return map(get(_inSquad.accEffectValue(selected)), calcMilliPercentageValue);
    case 'eva': return map(get(_inSquad.evaEffectValue(selected)), calcMilliPercentageValue);
    case 'cri': return map(get(_inSquad.criEffectValue(selected)), calcMilliPercentageValue);
    case 'spd': return map(get(_inSquad.spdEffectValue(selected)), calcMicroValue);
    case 'fireResist':     return map(get(_inSquad.fireResistEffectValue(selected)),     calcMilliPercentageValue);
    case 'iceResist':      return map(get(_inSquad.iceResistEffectValue(selected)),      calcMilliPercentageValue);
    case 'electricResist': return map(get(_inSquad.electricResistEffectValue(selected)), calcMilliPercentageValue);
    }
  }
});

export const squadUnitStatusEffectsSummary = (parameter: Exclude<AffectableStatus, 'hp'>, selected: UnitNumber | undefined): RecoilValueReadOnly<number | undefined> =>
  _squadUnitStatusEffectsSummary({ parameter, selected });

export const updateUnitLvState = (lvState: UnitLvStatus) => (cbi: CallbackInterface): void => {
  const get = getFromSnapshot(cbi.snapshot);
  const unit = lvState.unit;

  _updateStatus(
    unit,
    lvState,
    get(unitEquipmentResolver('chip1')(unit)),
    get(unitEquipmentResolver('chip2')(unit)),
    get(unitEquipmentResolver('os')(unit)),
    get(unitEquipmentResolver('gear')(unit)),
    get(unitCoreLinkResolver(unit))
  )(cbi);
};

export const updateChip1EquipmentState = (chip1: UnitChip1Equipment) => (cbi: CallbackInterface): void => {
  const get = getFromSnapshot(cbi.snapshot);
  const unit = chip1.unit;

  _updateStatus(
    unit,
    get(lvStateResolver(unit)),
    chip1,
    get(unitEquipmentResolver('chip2')(unit)),
    get(unitEquipmentResolver('os')(unit)),
    get(unitEquipmentResolver('gear')(unit)),
    get(unitCoreLinkResolver(unit))
  )(cbi);
};

export const updateChip2EquipmentState = (chip2: UnitChip2Equipment) => (cbi: CallbackInterface): void => {
  const get = getFromSnapshot(cbi.snapshot);
  const unit = chip2.unit;

  _updateStatus(
    unit,
    get(lvStateResolver(unit)),
    get(unitEquipmentResolver('chip1')(unit)),
    chip2,
    get(unitEquipmentResolver('os')(unit)),
    get(unitEquipmentResolver('gear')(unit)),
    get(unitCoreLinkResolver(unit))
  )(cbi);
};

export const updateOsEquipmentState = (os: UnitOsEquipment) => (cbi: CallbackInterface): void => {
  const get = getFromSnapshot(cbi.snapshot);
  const unit = os.unit;

  _updateStatus(
    unit,
    get(lvStateResolver(unit)),
    get(unitEquipmentResolver('chip1')(unit)),
    get(unitEquipmentResolver('chip2')(unit)),
    os,
    get(unitEquipmentResolver('gear')(unit)),
    get(unitCoreLinkResolver(unit))
  )(cbi);
};

export const updateGearEquipmentState = (gear: UnitGearEquipment) => (cbi: CallbackInterface): void => {
  const get = getFromSnapshot(cbi.snapshot);
  const unit = gear.unit;

  _updateStatus(
    unit,
    get(lvStateResolver(unit)),
    get(unitEquipmentResolver('chip1')(unit)),
    get(unitEquipmentResolver('chip2')(unit)),
    get(unitEquipmentResolver('os')(unit)),
    gear,
    get(unitCoreLinkResolver(unit))
  )(cbi);
};

export const updateUnitCoreLinkState = (coreLink: UnitCoreLink) => (cbi: CallbackInterface): void => {
  const get = getFromSnapshot(cbi.snapshot);
  const unit = coreLink.unit;

  _updateStatus(
    unit,
    get(lvStateResolver(unit)),
    get(unitEquipmentResolver('chip1')(unit)),
    get(unitEquipmentResolver('chip2')(unit)),
    get(unitEquipmentResolver('os')(unit)),
    get(unitEquipmentResolver('gear')(unit)),
    coreLink
  )(cbi);
};

export const updateSquadState = (squad: Squad) => (cbi: CallbackInterface): void => {
  _updateSquadUnitStatus(squad)(cbi);
};

export const updateUnitSkillState = (skill: UnitSkill) => (cbi: CallbackInterface): void => {
  const squad = getFromSnapshot(cbi.snapshot)(squadResolver);
  const unit = skill.unit.no;
  if (squad.existsUnit(unit)) {
    _updateSquadUnitStatus(squad, { unit, skill })(cbi);
  }
};

export const updateUnitAffectionState = (unitAffection: UnitAffection) => (cbi: CallbackInterface): void => {
  const squad = getFromSnapshot(cbi.snapshot)(squadResolver);
  const unit = unitAffection.unit;
  if (squad.existsUnit(unit)) {
    _updateSquadUnitStatus(squad, { unit, affectionBonus: unitAffection.affectionBonus })(cbi);
  }
};

export const updateUnitDamagedState = (damaged: UnitDamagedState) => (cbi: CallbackInterface): void => {
  const squad = getFromSnapshot(cbi.snapshot)(squadResolver);
  const unit = damaged.unit;
  if (squad.existsUnit(unit)) {
    _updateSquadUnitStatus(squad, { unit, damaged })(cbi);
  }
};
