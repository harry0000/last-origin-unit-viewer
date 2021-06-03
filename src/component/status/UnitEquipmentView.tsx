/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useTranslation } from 'react-i18next';

import EquipmentSelector from './EquipmentSelector';

import { Chip, EquipmentType, Gear, Os } from '../../domain/EquipmentData';

import {
  selectedUnitAvailableChipEquipment,
  selectedUnitAvailableGearEquipment,
  selectedUnitAvailableOsEquipment
} from '../../state/unit/availableEquipment';
import { selectedUnitStatusState } from '../../state/status/selectedUnitStatusState';

import { ifNonNullable } from '../../util/react';

import './UnitStatusSlot.css';

const Chip1Selector: React.FC = () => {
  const chips = useRecoilValue(selectedUnitAvailableChipEquipment);
  const [status, setStatus] = useRecoilState(selectedUnitStatusState);

  return (
    ifNonNullable(
      status,
      s => (
        <EquipmentSelector
          id="chip1-equipment-dropdown"
          value={s.chip1}
          type={EquipmentType.Chip}
          items={chips}
          onSelect={(chip: Chip | undefined) => {
            setStatus(s => chip ? s?.equipChip1(chip) : s?.removeChip1());
          }}
          available={s.isChip1Available}
          availableLv={s.chip1AvailableLv}
        />
      )
    )
  );
};

const Chip2Selector: React.FC = () => {
  const chips = useRecoilValue(selectedUnitAvailableChipEquipment);
  const [status, setStatus] = useRecoilState(selectedUnitStatusState);

  return (
    ifNonNullable(
      status,
      s => (
        <EquipmentSelector
          id="chip2-equipment-dropdown"
          value={s.chip2}
          type={EquipmentType.Chip}
          items={chips}
          onSelect={(chip: Chip | undefined) => {
            setStatus(s => chip ? s?.equipChip2(chip) : s?.removeChip2());
          }}
          available={s.isChip2Available}
          availableLv={s.chip2AvailableLv}
        />
      )
    )
  );
};

const OsSelector: React.FC = () => {
  const oses = useRecoilValue(selectedUnitAvailableOsEquipment);
  const [status, setStatus] = useRecoilState(selectedUnitStatusState);

  return (
    ifNonNullable(
      status,
      s => (
        <EquipmentSelector
          id="os-equipment-dropdown"
          value={s.os}
          type={EquipmentType.Os}
          items={oses}
          onSelect={(os: Os | undefined) => {
            setStatus(s => os ? s?.equipOs(os) : s?.removeOs());
          }}
          available={s.isOsAvailable}
          availableLv={s.osAvailableLv}
        />
      )
    )
  );
};

const GearSelector: React.FC = () => {
  const gears = useRecoilValue(selectedUnitAvailableGearEquipment);
  const [status, setStatus] = useRecoilState(selectedUnitStatusState);

  return (
    ifNonNullable(
      status,
      s => (
        <EquipmentSelector
          id="gear-equipment-dropdown"
          value={s.gear}
          type={EquipmentType.Gear}
          items={gears}
          onSelect={(gear: Gear | undefined) => {
            setStatus(s => gear ? s?.equipGear(gear) : s?.removeGear());
          }}
          available={s.isGearAvailable}
          availableLv={s.gearAvailableLv}
        />
      )
    )
  );
};

const UnitEquipmentView: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="slot-container">
      <div className="label"><span>{t('status.equipment')}</span></div>
      <div className="slot-row">
        <div className="slot-cell"><Chip1Selector /></div>
        <div className="slot-cell"><Chip2Selector /></div>
        <div className="slot-cell"><OsSelector /></div>
        <div className="slot-cell"><GearSelector /></div>
      </div>
    </div>
  );
};

export default UnitEquipmentView;
