/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useTranslation } from 'react-i18next';

import EquipmentSelector from './EquipmentSelector';

import { Chip, EquipmentType, Gear, Os } from '../../domain/EquipmentData';

import {
  chip1SlotAvailableState,
  chip2SlotAvailableState,
  gearSlotAvailableState, osSlotAvailableState, selectedUnitChip1EquipmentState, selectedUnitChip2EquipmentState,
  selectedUnitGearEquipmentState,
  selectedUnitOsEquipmentState
} from '../../state/equipment/unitEquipmentState';
import {
  selectedUnitAvailableChipEquipment,
  selectedUnitAvailableGearEquipment,
  selectedUnitAvailableOsEquipment
} from '../../state/equipment/availableEquipment';

import { ifNonNullable } from '../../util/react';

import './UnitStatusSlot.css';

const Chip1Selector: React.FC = () => {
  const [chip1, setChip1] = useRecoilState(selectedUnitChip1EquipmentState);
  const chips = useRecoilValue(selectedUnitAvailableChipEquipment);
  const available = useRecoilValue(chip1SlotAvailableState);

  return (
    ifNonNullable(
      chip1,
      c => (
        <EquipmentSelector
          id="chip1-equipment-dropdown"
          value={c.chip1}
          type={EquipmentType.Chip}
          items={chips}
          onSelect={(chip: Chip | undefined) => {
            setChip1(s => chip ? s?.equipChip1(chip) : s?.removeChip1());
          }}
          available={available}
          availableLv={c.chip1AvailableLv}
        />
      )
    )
  );
};

const Chip2Selector: React.FC = () => {
  const [chip2, setChip2] = useRecoilState(selectedUnitChip2EquipmentState);
  const chips = useRecoilValue(selectedUnitAvailableChipEquipment);
  const available = useRecoilValue(chip2SlotAvailableState);

  return (
    ifNonNullable(
      chip2,
      c => (
        <EquipmentSelector
          id="chip2-equipment-dropdown"
          value={c.chip2}
          type={EquipmentType.Chip}
          items={chips}
          onSelect={(chip: Chip | undefined) => {
            setChip2(s => chip ? s?.equipChip2(chip) : s?.removeChip2());
          }}
          available={available}
          availableLv={c.chip2AvailableLv}
        />
      )
    )
  );
};

const OsSelector: React.FC = () => {
  const [os, setOs] = useRecoilState(selectedUnitOsEquipmentState);
  const oses = useRecoilValue(selectedUnitAvailableOsEquipment);
  const available = useRecoilValue(osSlotAvailableState);

  return (
    ifNonNullable(
      os,
      o => (
        <EquipmentSelector
          id="os-equipment-dropdown"
          value={o.os}
          type={EquipmentType.Os}
          items={oses}
          onSelect={(os: Os | undefined) => {
            setOs(s => os ? s?.equipOs(os) : s?.removeOs());
          }}
          available={available}
          availableLv={o.osAvailableLv}
        />
      )
    )
  );
};

const GearSelector: React.FC = () => {
  const [gear, setGear] = useRecoilState(selectedUnitGearEquipmentState);
  const gears = useRecoilValue(selectedUnitAvailableGearEquipment);
  const available = useRecoilValue(gearSlotAvailableState);

  return (
    ifNonNullable(
      gear,
      g => (
        <EquipmentSelector
          id="gear-equipment-dropdown"
          value={g.gear}
          type={EquipmentType.Gear}
          items={gears}
          onSelect={(gear: Gear | undefined) => {
            setGear(s => gear ? s?.equipGear(gear) : s?.removeGear());
          }}
          available={available}
          availableLv={g.gearAvailableLv}
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
