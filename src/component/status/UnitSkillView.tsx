/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import { ActiveSkillIcon, PassiveSkillIcon } from '../icon/SkillIcons';
import { Dropdown, OverlayTrigger, Tooltip } from 'react-bootstrap';
import NumberValueDropdown from '../common/NumberValueDropdown';

import {
  ActiveSkillType,
  PassiveSkillType,
  SkillType,
  isActiveSkillType,
  isPassiveSkillType
} from '../../domain/skill/SkillType';
import RoundedToggleButton from '../common/RoundedToggleButton';
import { SkillLv } from '../../domain/skill/UnitSkillLvValue';
import { UnitBasicInfo } from '../../domain/UnitBasicInfo';

import {
  usePrimaryActiveSkill,
  useNeedRankUpForPassiveSkill,
  usePassiveSkillVisibility,
  useSkillLvState
} from '../../state/skill/UnitSkillHook';
import { useSelectedUnit } from '../../state/selector/UnitSelectorHook';

import { ifTruthy } from '../../util/react';

import './UnitSkillView.css';

const skillLvItems: ReadonlyArray<SkillLv> = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

const SkillTypeIconOverlay: React.FC<{ skillType: SkillType, children: ReactElement }> = ({ skillType, children }) => {
  const { t } = useTranslation();

  const NeedRankUpAnnotation = ({ skillType }: { skillType: PassiveSkillType }) => {
    const show = useNeedRankUpForPassiveSkill(skillType);

    return ifTruthy(
      show,
      (<div className="need-rank-up">{t(`skill.need_rank_up.${skillType}`)}</div>)
    );
  };

  return (
    <OverlayTrigger
      placement="top"
      overlay={(
        <Tooltip id={`tooltip-unit-${skillType}-skill-lv-icon`}>
          {t(`skill.type.${skillType}`)}
          {isPassiveSkillType(skillType) ? <NeedRankUpAnnotation skillType={skillType} /> : null}
        </Tooltip>
      )}
    >
      {children}
    </OverlayTrigger>
  );
};

const SkillTypeIcon: React.FC<{ skillType: SkillType }> = ({ skillType, ...rest }) => {
  const isActiveSkill = isActiveSkillType(skillType);
  const NeedRankUpIcon = ({ skillType }: { skillType: PassiveSkillType }) => {
    const show = useNeedRankUpForPassiveSkill(skillType);

    return ifTruthy(show, (<div className="need-rank-up">{'⚠️'}</div>));
  };

  return (
    <div className="skill-type-icon" {...rest}>
      {
        isActiveSkill ?
          (<ActiveSkillIcon skillType={skillType} />) :
          (<PassiveSkillIcon skillType={skillType} />)
      }
      {!isActiveSkill ? <NeedRankUpIcon skillType={skillType} /> : null}
    </div>
  );
};

const SkillLvDropdownPlaceholder: React.FC = React.memo(() => {
  return (<Dropdown className="numeric"><span>&nbsp;</span></Dropdown>);
});

const SkillLvDropdown: React.FC<{ skillType: SkillType }> = ({ skillType }) => {
  const { t } = useTranslation();
  const selected = useSelectedUnit();

  const DropDown = ({ unit }: { unit: UnitBasicInfo }) => {
    const [skillLv, setSkillLv] = useSkillLvState(skillType, unit);

    return (
      <NumberValueDropdown
        id={`unit-status-${skillType}-skill-lv`}
        items={skillLvItems}
        value={skillLv}
        onChange={setSkillLv}
      />
    );
  };

  return (
    <div className="skill-level-form">
      <SkillTypeIconOverlay skillType={skillType}>
        <SkillTypeIcon skillType={skillType} />
      </SkillTypeIconOverlay>
      <div className="skill-lv-label">{t('lv')}</div>
      {
        selected ?
          (<DropDown unit={selected} />) :
          (<SkillLvDropdownPlaceholder />)
      }
    </div>
  );
};

const ActiveSkillPriority: React.FC<{ skillType: ActiveSkillType }> = ({ skillType }) => {
  const { t } = useTranslation();
  const selected = useSelectedUnit();

  const Button = ({ unit }: { unit: UnitBasicInfo }) => {
    const [isPrimary, setPrimary] = usePrimaryActiveSkill(skillType, unit);

    return (
      <RoundedToggleButton selected={isPrimary} onChange={setPrimary}>{t('form.active_skill_priority')}</RoundedToggleButton>
    );
  };
  const DisabledButton = React.memo(() => {
    return (
      <RoundedToggleButton selected={false} disabled={true}>{t('form.active_skill_priority')}</RoundedToggleButton>
    );
  });

  return selected ?
    (<Button unit={selected} />) :
    (<DisabledButton />);
};

const ActiveSkillSetting: React.FC<{ skillType: ActiveSkillType }> = ({ skillType }) => {
  return (
    <div className="skill-setting active-skill">
      <SkillLvDropdown skillType={skillType} />
      <div className="active-skill-priority">
        <ActiveSkillPriority skillType={skillType} />
      </div>
    </div>
  );
};

const PassiveSkillSetting: React.FC<{ skillType: PassiveSkillType }> = ({ skillType }) => {
  const visible = usePassiveSkillVisibility(skillType);

  return ifTruthy(
    visible,
    (
      <div className="skill-setting">
        <SkillLvDropdown skillType={skillType} />
      </div>
    )
  );
};

const SkillSettingDivider: React.FC = () => {
  const visible = usePassiveSkillVisibility(SkillType.Passive1);

  return ifTruthy(visible, (<div className="divider" />));
};

const UnitSkillView: React.FC = () => {
  return (
    <div className="unit-skill-settings">
      <div className="active-skill-settings">
        <ActiveSkillSetting skillType="active1" />
        <ActiveSkillSetting skillType="active2" />
      </div>
      <SkillSettingDivider />
      <div className="passive-skill-settings">
        <PassiveSkillSetting skillType="passive1" />
        <PassiveSkillSetting skillType="passive2" />
        <PassiveSkillSetting skillType="passive3" />
      </div>
    </div>
  );
};

export default UnitSkillView;
