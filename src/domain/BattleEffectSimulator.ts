import { ActiveSkillType, PassiveSkillType, SkillType } from './skill/SkillType';
import { AffectionBonus } from './UnitAffection';
import { BattleEffect } from './BattleEffect';
import { CoreLinkBonus, FullLinkBonus } from './UnitCoreLinkBonusData';
import { FormChangeUnitNumbers, FormPerUnit } from './UnitFormValue';
import { FormChangeUnitSkill, UnitSkill, buildUnitSkill, isFormChangeUnitSkill } from './skill/UnitSkill';
import { PassiveSkill, PassiveSkillAsEquipmentEffect, SkillEffect } from './skill/UnitSkills';
import { Squad, TenKeyPosition } from './squad/Squad';
import { UnitBasicInfo, UnitNumber, UnitRank, UnitRankComparator } from './UnitBasicInfo';
import { UnitChip1Equipment, UnitChip2Equipment, UnitGearEquipment, UnitOsEquipment } from './equipment/UnitEquipment';
import UnitDamagedState from './UnitDamagedState';
import { calcTargetPositions } from './skill/SkillAreaOfEffectMatcher';

import { typedEntries } from '../util/object';

type UnitInfo = {
  unit: UnitBasicInfo,
  rank: UnitRank,
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

type SquadUnitInfo = Partial<{ readonly [position in TenKeyPosition]: UnitInfo }>

type ExtractedSkill =
  Pick<BattleEffect, 'type' | 'affected_by'> &
  {
    effects: ReadonlyArray<SkillEffect>,
    targets: ReadonlySet<`${TenKeyPosition}`>
  }

function deepCopyOnlySkillLv(skill: UnitSkill): UnitSkill {
  let newSkill =
    buildUnitSkill(skill.unit)
      .changeActive1SkillLv(skill.skillLv.active1Lv)
      .changeActive2SkillLv(skill.skillLv.active2Lv);

  newSkill = skill.skillLv.passive1Lv ?
    newSkill.changePassive1SkillLv(skill.skillLv.passive1Lv) :
    newSkill;

  newSkill = skill.skillLv.passive2Lv ?
    newSkill.changePassive2SkillLv(skill.skillLv.passive2Lv) :
    newSkill;

  newSkill = skill.skillLv.passive3Lv ?
    newSkill.changePassive3SkillLv(skill.skillLv.passive3Lv) :
    newSkill;

  return newSkill;
}

class BattleEffectSimulator {

  static initialize(
    squad: Squad,
    rankRepository: (unit: UnitNumber) => UnitRank,
    skillRepository: (unit: UnitNumber) => UnitSkill,
    chip1Repository: (unit: UnitNumber) => UnitChip1Equipment,
    chip2Repository: (unit: UnitNumber) => UnitChip2Equipment,
    osRepository: (unit: UnitNumber) => UnitOsEquipment,
    gearRepository: (unit: UnitNumber) => UnitGearEquipment,
    coreLinkBonusRepository: (unit: UnitNumber) => CoreLinkBonus,
    fullLinkBonusRepository: (unit: UnitNumber) => FullLinkBonus | undefined,
    affectionBonusRepository: (unit: UnitNumber) => AffectionBonus | undefined,
    damagedRepository: (unit: UnitNumber) => UnitDamagedState
  ): BattleEffectSimulator {
    const units = squad.units.reduce<SquadUnitInfo>((acc, { position, unit }) => {
      const no = unit.no;
      const info: UnitInfo = {
        unit,
        rank: rankRepository(no),
        skill: deepCopyOnlySkillLv(skillRepository(no)),
        chip1: chip1Repository(no),
        chip2: chip2Repository(no),
        os: osRepository(no),
        gear: gearRepository(no),
        coreLinkBonus: coreLinkBonusRepository(no),
        fullLinkBonus: fullLinkBonusRepository(no),
        affectionBonus: affectionBonusRepository(no),
        damaged: damagedRepository(no)
      };

      return { ...acc, [position]: info };
    }, {});

    return new BattleEffectSimulator(units);
  }

  readonly #wave = 1;
  readonly #round = 1;
  readonly #enemies = 1;

  readonly #units: SquadUnitInfo;

  private constructor(units: SquadUnitInfo) {
    this.#units = units;
  }

  run(): Partial<Record<UnitNumber, ReadonlyArray<BattleEffect>>> {
    const formFixed = fixUnitForm(this.#units);

    const effects = pickPassiveConditionEffects(formFixed);

    // TODO: triggerが空のeffects of passive skill

    // TODO: wave 開始時無条件適用

    // TODO: round 開始時無条件適用

    // TODO: 装備効果として扱われるスキル適用

    // TODO: 効果をソートする？
    return {};
  }
}

function currentForm<N extends FormChangeUnitNumbers>(unit: UnitInfo & { skill: FormChangeUnitSkill<N> }): FormPerUnit<N> {
  // TODO: implement
  return unit.skill.unitForm();
}

// TODO: delete if unnecessary
function hasFormChangeUnitSkill<N extends FormChangeUnitNumbers>(unit: UnitInfo): unit is UnitInfo & { skill: FormChangeUnitSkill<N> } {
  return isFormChangeUnitSkill(unit.skill);
}

function fixUnitForm(squadUnits: SquadUnitInfo): SquadUnitInfo {
  return typedEntries(squadUnits)
    .reduce<SquadUnitInfo>((acc, [position, unit]) => {
      if (
        hasFormChangeUnitSkill(unit) &&
        currentForm(unit) !== unit.skill.unitForm()
      ) {
        unit.skill = unit.skill.changeForm();
      }
      return { ...acc, [position]: unit };
    },
    {}
    );
}

function pickPassiveConditionEffects(squadUnits: SquadUnitInfo) {
  // TODO: pick equipment effects
  return typedEntries(squadUnits)
    .flatMap(([position, unit]) => [
      pickActiveSkill('active1', unit, position),
      pickActiveSkill('active2', unit, position),
      pickPassiveSkill('passive1', unit, position),
      pickPassiveSkill('passive2', unit, position),
      pickPassiveSkill('passive3', unit, position)
    ]);
}

function pickActiveSkill(skillType: ActiveSkillType, unit: UnitInfo, currentPosition: `${TenKeyPosition}`) {
  return [];
}

function pickPassiveSkill(skillType: PassiveSkillType, unit: UnitInfo, currentPosition: `${TenKeyPosition}`) {
  return [];
}

function extractSkill(skillType: ActiveSkillType, unit: UnitInfo, currentPosition: `${TenKeyPosition}`): ExtractedSkill
function extractSkill(skillType: PassiveSkillType, unit: UnitInfo, currentPosition: `${TenKeyPosition}`): ExtractedSkill | undefined
function extractSkill(
  skillType: SkillType,
  unit: UnitInfo,
  currentPosition: `${TenKeyPosition}`
): ExtractedSkill | undefined {
  const affected_by: BattleEffect['affected_by'] = isFormChangeUnitSkill(unit.skill) ?
    { type: 'ally', skillType, no: unit.skill.unit.no, form: unit.skill.unitForm() } :
    { type: 'ally', skillType, no: unit.skill.unit.no as Exclude<UnitNumber, FormChangeUnitNumbers> };

  const extract = (
    skill: PassiveSkill | PassiveSkillAsEquipmentEffect
  ): ReturnType<typeof extractSkill> => {
    const asSkillEffect = 'effects' in skill;
    const type = asSkillEffect ? 'effects' : 'equipment_effects';
    const effects = asSkillEffect ? skill.effects : skill.equipment_effects;
    const targets = calcTargetPositions(skill.area, currentPosition);

    return { type, affected_by, effects, targets };
  };

  switch (skillType) {
  case 'active1': {
    const skill = unit.skill.active1Skill(unit.coreLinkBonus, unit.fullLinkBonus, unit.affectionBonus);
    return skill && extract(skill);
  }
  case 'active2': {
    const skill = unit.skill.active2Skill(unit.coreLinkBonus, unit.fullLinkBonus, unit.affectionBonus);
    return skill && extract(skill);
  }
  case 'passive1': {
    const skill = unit.skill.passive1Skill(unit.fullLinkBonus, unit.affectionBonus);
    return skill && UnitRankComparator[unit.rank].greaterThan(UnitRank.B) ? extract(skill) : undefined;
  }
  case 'passive2': {
    const skill = unit.skill.passive2Skill(unit.fullLinkBonus, unit.affectionBonus);
    return skill && UnitRankComparator[unit.rank].greaterThan(UnitRank.A) ? extract(skill) : undefined;
  }
  case 'passive3': {
    const skill = unit.skill.passive3Skill(unit.fullLinkBonus, unit.affectionBonus);
    return skill && UnitRankComparator[unit.rank].greaterThan(UnitRank.S) ? extract(skill) : undefined;
  }
  }
}

export default BattleEffectSimulator;
