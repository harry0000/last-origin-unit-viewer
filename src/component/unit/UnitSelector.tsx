/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useTranslation } from 'react-i18next';

import SelectorButton from './SelectorButton';
import SkillEffectSelector from './SkillEffectSelector';

import { UnitRank, UnitRole, UnitType } from '../../domain/UnitBasicInfo';
import { toggleUnitSelector, unitConditionSelectorState } from '../../state/selector/unitSelectorState';

const UnitRankSelectorButton: React.FC<{ rank: UnitRank }> = ({ rank }) => {
  const { t } = useTranslation();
  const selected = useRecoilValue(unitConditionSelectorState(rank));
  const toggle = useSetRecoilState(toggleUnitSelector(rank));

  return (
    <SelectorButton
      selected={selected}
      onChange={() => toggle()}
    >
      {t(`form.unit.rank.${rank}`)}
    </SelectorButton>
  );
};

const UnitTypeSelectorButton: React.FC<{ type: UnitType }> = ({ type }) => {
  const { t } = useTranslation();
  const selected = useRecoilValue(unitConditionSelectorState(type));
  const toggle = useSetRecoilState(toggleUnitSelector(type));

  return (
    <SelectorButton
      selected={selected}
      onChange={() => toggle()}
    >
      {t(`form.unit.type.${type}`)}
    </SelectorButton>
  );
};

const UnitRoleSelectorButton: React.FC<{ role: UnitRole }> = ({ role }) => {
  const { t } = useTranslation();
  const selected = useRecoilValue(unitConditionSelectorState(role));
  const toggle = useSetRecoilState(toggleUnitSelector(role));

  return (
    <SelectorButton
      selected={selected}
      onChange={() => toggle()}
    >
      {t(`form.unit.role.${role}`)}
    </SelectorButton>
  );
};

const UnitSelector: React.FC<{ className?: string }> = (props) => {
  return (
    <div
      {...props}
      css={{
        display: 'grid',
        gridGap: 3,
        gridTemplateRows: 'repeat(3, auto)'
      }}
    >
      <div>
        <UnitRankSelectorButton rank={UnitRank.SS} />
        <UnitRankSelectorButton rank={UnitRank.S} />
        <UnitRankSelectorButton rank={UnitRank.A} />
        <UnitRankSelectorButton rank={UnitRank.B} />
      </div>
      <div>
        <UnitTypeSelectorButton type={UnitType.Light} />
        <UnitTypeSelectorButton type={UnitType.Flying} />
        <UnitTypeSelectorButton type={UnitType.Heavy} />
      </div>
      <div>
        <UnitRoleSelectorButton role={UnitRole.Attacker} />
        <UnitRoleSelectorButton role={UnitRole.Defender} />
        <UnitRoleSelectorButton role={UnitRole.Supporter} />
      </div>
      <SkillEffectSelector />
    </div>
  );
};

export default UnitSelector;
