/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import { useRecoilState } from 'recoil';
import { useTranslation } from 'react-i18next';

import { unitSelectorStoreState } from '../../state/unit/unitSelectorStoreState';

import SelectorButton from './SelectorButton';
import SkillEffectSelector from './SkillEffectSelector';

const RankSelectorRow: React.FC = () => {
  const { t } = useTranslation();
  const [store, setStore] = useRecoilState(unitSelectorStoreState);

  return (
    <div>
      <SelectorButton selected={store.isRankSelected('ss')} onChange={() => setStore(s => s.toggleRank('ss'))}>{t('form.unit.rank.ss')}</SelectorButton>
      <SelectorButton selected={store.isRankSelected('s')}  onChange={() => setStore(s => s.toggleRank('s'))}>{t('form.unit.rank.s')}</SelectorButton>
      <SelectorButton selected={store.isRankSelected('a')}  onChange={() => setStore(s => s.toggleRank('a'))}>{t('form.unit.rank.a')}</SelectorButton>
      <SelectorButton selected={store.isRankSelected('b')}  onChange={() => setStore(s => s.toggleRank('b'))}>{t('form.unit.rank.b')}</SelectorButton>
    </div>
  );
};

const TypeSelectorRow: React.FC = () => {
  const { t } = useTranslation();
  const [store, setStore] = useRecoilState(unitSelectorStoreState);

  return (
    <div>
      <SelectorButton selected={store.isTypeSelected('light')}  onChange={() => setStore(s => s.toggleType('light'))}>{t('form.unit.type.light')}</SelectorButton>
      <SelectorButton selected={store.isTypeSelected('heavy')}  onChange={() => setStore(s => s.toggleType('heavy'))}>{t('form.unit.type.heavy')}</SelectorButton>
      <SelectorButton selected={store.isTypeSelected('flying')} onChange={() => setStore(s => s.toggleType('flying'))}>{t('form.unit.type.flying')}</SelectorButton>
    </div>
  );
};

const RoleSelectorRow: React.FC = () => {
  const { t } = useTranslation();
  const [store, setStore] = useRecoilState(unitSelectorStoreState);

  return (
    <div>
      <SelectorButton selected={store.isRoleSelected('attacker')}  onChange={() => setStore(s => s.toggleRole('attacker'))}>{t('form.unit.role.attacker')}</SelectorButton>
      <SelectorButton selected={store.isRoleSelected('defender')}  onChange={() => setStore(s => s.toggleRole('defender'))}>{t('form.unit.role.defender')}</SelectorButton>
      <SelectorButton selected={store.isRoleSelected('supporter')} onChange={() => setStore(s => s.toggleRole('supporter'))}>{t('form.unit.role.supporter')}</SelectorButton>
    </div>
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
      <RankSelectorRow />
      <TypeSelectorRow />
      <RoleSelectorRow />
      <SkillEffectSelector />
    </div>
  );
};

export default UnitSelector;
