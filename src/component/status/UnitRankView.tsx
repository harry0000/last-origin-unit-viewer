/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { MouseEventHandler, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

import { Dropdown } from 'react-bootstrap';
import { LockClosed } from '../icon/FluentIcons';
import SVGIcon from '../icon/SVGIcon';
import UnitRankIcon from '../common/UnitRankIcon';

import { RankUpAvailableLv } from '../../domain/status/UnitRankState';
import { RankUpUnitNumber, isRankUpUnitNumber } from '../../domain/status/UnitRankUpBonusData';
import { UnitRank, UnitRole } from '../../domain/UnitBasicInfo';

import { useSelectedUnit } from '../../state/selector/unitSelectorState';
import { useUnitRank } from '../../state/status/parameters/UnitLvStatusHook';

import { ifNonNullable, ifTruthy } from '../../util/react';

import './UnitRankDropdown.css';

type IconSize = 'small' | 'large'

const UnitBasicInfoIcon: React.FC<{ size: IconSize, rank: UnitRank, role: UnitRole }> = ({ size, rank, role }) => {
  const [height, width] =
    size === 'large' ?
      rank === 'ss' ? [56, 64] : [48, 48] :
      rank === 'ss' ? [36, 44] : [32, 32];

  return (
    <UnitRankIcon
      css={{
        display: 'block',
        margin: '0 auto'
      }}
      height={height}
      width={width}
      rank={rank}
      role={role}
    />
  );
};

const UnavailableOverlay: React.FC<{ availableLv: RankUpAvailableLv }> = ({ availableLv }) => {
  const { t } = useTranslation();

  return (
    <span className="unavailable">
      <SVGIcon className="icon" css={{ height: 24, width: 24 }}><LockClosed /></SVGIcon>
      <span>{t('lv')}&nbsp;{availableLv}</span>
    </span>
  );
};

const RankMenuItem: React.FC<{
  rank: UnitRank,
  role: UnitRole,
  active: boolean,
  disabled: boolean,
  availableLv?: RankUpAvailableLv
}> = ({ rank, role, active, disabled, availableLv,...rest }) => {
  return (
    <Dropdown.Item
      {...rest}
      className="rank"
      eventKey={rank}
      active={active}
      disabled={disabled}
    >
      <UnitBasicInfoIcon size="small" rank={rank} role={role} />
      {ifNonNullable(
        availableLv,
        (lv) => ifTruthy(disabled, (<UnavailableOverlay availableLv={lv} />))
      )}
    </Dropdown.Item>
  );
};

const UnitRankToggle = React.forwardRef<
  HTMLAnchorElement,
  {
    onClick: MouseEventHandler<HTMLAnchorElement>,
    id: string,
    children: ReactNode
  }
>(({ onClick, id, children }, ref) => (
  <a
    href=""
    ref={ref}
    id={id}
    className="unit-rank-toggle"
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
  </a>
));

const UnitRankDropdown: React.FC<{
  unit: RankUpUnitNumber,
  role: UnitRole
}> = ({ unit, role }) => {
  const [currentRank, setRank, rankItems] = useUnitRank(unit);

  return (
    <Dropdown
      className="rank"
      onSelect={(eventKey) => { eventKey && setRank(eventKey as UnitRank); }}
    >
      <Dropdown.Toggle as={UnitRankToggle} id="unit-rank-dropdown">
        <UnitBasicInfoIcon size="large" rank={currentRank} role={role} />
      </Dropdown.Toggle>
      <Dropdown.Menu className="rank">
        {rankItems.map(({ rank, availableLv, disabled }) => (
          <RankMenuItem
            key={rank}
            rank={rank}
            role={role}
            active={currentRank === rank}
            disabled={disabled}
            availableLv={availableLv}
          />
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

const UnitRankView: React.FC = () => {
  const unit = useSelectedUnit();

  return (
    <div
      css={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 75,
        height: 65,
        userSelect: 'none'
      }}
    >
      {ifNonNullable(
        unit,
        ({ no, rank, role }) =>
          isRankUpUnitNumber(no) ?
            (<UnitRankDropdown unit={no} role={role} />) :
            (<UnitBasicInfoIcon size="large" rank={rank} role={role} />)
      )}
    </div>
  );
};

export default UnitRankView;
