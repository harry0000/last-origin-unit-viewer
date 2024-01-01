import { atom, useRecoilCallback, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { CSSProperties, RefObject, useEffect, useRef, useState } from 'react';
import { ConnectDragSource, ConnectDropTarget, useDrag, useDrop } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';
import { usePreview } from 'react-dnd-preview';
import { useLocation, useNavigate } from 'react-router-dom';

import { Squad, TenKeyPosition } from '../../domain/squad/Squad';
import { UnitBasicInfo, UnitType } from '../../domain/UnitBasicInfo';

import { SquadJsonStructure } from '../../service/SquadJsonStructure';
import { convertToJsonObject } from '../../service/SquadJsonConverter';
import { generateShareUrl, generateTwitterShareUrl, getSquadParam } from '../../service/ShareUrlGenerator';
import { restore } from '../../service/UrlParamConverter';
import { restoreFromJsonObject } from '../../service/SquadJsonRestore';

import {
  assignUnit,
  assignedUnitState,
  canAssignUnit,
  getSquadUnitCount,
  removeUnit,
  restoreSquad,
  squadResolver,
  squadUnitTypeCountState,
  squadUnitsState
} from './SquadState';
import { lvStateResolver, restoreLvStatusState } from '../status/parameters/UnitLvStatusState';
import { restoreUnitAffectionState, unitAffectionStateResolver } from '../status/UnitAffectionState';
import { restoreUnitCoreLink, unitCoreLinkResolver } from '../corelink/UnitCoreLinkState';
import { restoreUnitDamagedState, unitDamagedStateResolver } from '../status/UnitDamagedState';
import { restoreUnitEquipmentState, unitEquipmentResolver } from '../equipment/UnitEquipmentState';
import { restoreUnitPrimaryActiveSkill, unitPrimaryActiveSkillResolver } from '../skill/PrimaryActiveSkillState';
import { restoreUnitSkill, unitSkillResolver } from '../skill/UnitSkillState';
import { selectUnit } from '../selector/UnitSelectorState';
import { useNotificationResister } from '../ui/NotificationState';
import { useUnitSelector } from '../selector/UnitSelectorHook';

import { getFromSnapshot } from '../../util/recoil';

export const ItemType = {
  UnitCard: 'unit_card',
  SquadUnit: 'squad_unit'
} as const;
export type ItemType = typeof ItemType[keyof typeof ItemType]

const squadShareModalShowState = atom<boolean>({
  key: 'SquadHook_squadShareModalShowState',
  default: false
});

const squadShareUrlState = atom<string>({
  key: 'SquadHook_squadShareUrlState',
  default: ''
});

export function useSquadUnitTypeCount(type: UnitType): number {
  return useRecoilValue(squadUnitTypeCountState(type));
}

export function useUnitDrag(unit: UnitBasicInfo): ConnectDragSource {
  const select = useRecoilCallback(selectUnit(unit));
  const [, dragRef, previewRef] = useDrag(
    () => ({
      type: ItemType.UnitCard,
      item: () => {
        // HACK: for VirtuosoGrid. When run synchronously, unit card cannot be dragged & dropped.
        setTimeout(select, 1);
        return unit;
      }
    }),
    [unit]
  );

  // HACK: disable default preview
  // https://github.com/react-dnd/react-dnd/issues/2612#issuecomment-646756506
  useEffect(() => {
    previewRef(getEmptyImage(), { captureDraggingState: true });
  }, [previewRef]);

  return dragRef;
}

export function useSquadUnitDrag(unit: UnitBasicInfo): ConnectDragSource {
  const [, dragRef, previewRef] = useDrag(
    () => ({
      type: ItemType.SquadUnit,
      item: unit
    }),
    [unit]
  );

  // HACK: disable default preview
  // https://github.com/react-dnd/react-dnd/issues/2612#issuecomment-646756506
  useEffect(() => {
    previewRef(getEmptyImage(), { captureDraggingState: true });
  }, [previewRef]);

  return dragRef;
}

export function useUnitDragPreview():
  { display: false } |
  { display: true, itemType: ItemType, item: UnitBasicInfo, style: CSSProperties }
{
  const props = usePreview<UnitBasicInfo>();

  if (!props.display) {
    return props;
  }

  const { display, itemType, item, style } = props;
  if (itemType !== ItemType.UnitCard && itemType !== ItemType.SquadUnit) {
    return { display: false };
  }

  style.top = -20;
  style.left = -20;
  style.opacity = 0.9;

  return {
    display,
    itemType,
    item,
    style
  };
}

export function useSquadUnits(): Squad['units'] {
  return useRecoilValue(squadUnitsState);
}

export function useSquadGrid(position: TenKeyPosition): [
  assignedUnit: UnitBasicInfo | undefined,
  canAssignUnit: boolean,
  isHoveringUnit: boolean,
  dropRef: ConnectDropTarget
] {
  const assignedUnit = useRecoilValue(assignedUnitState(position));
  const drop = useRecoilCallback(assignUnit(position));
  const canDrop = useRecoilCallback(canAssignUnit(position));
  const [props, dropRef] = useDrop(
    () => ({
      accept: [ItemType.UnitCard, ItemType.SquadUnit],
      drop,
      canDrop,
      collect: monitor => ({
        canAssignUnit: monitor.canDrop(),
        isHoveringUnit: monitor.isOver()
      })
    })
  );

  return [assignedUnit, props.canAssignUnit, props.isHoveringUnit, dropRef];
}

export function useIgnoreSquadUnitDrop(): ConnectDropTarget {
  const [, dropRef] = useDrop(
    () => ({
      accept: [ItemType.SquadUnit]
    })
  );

  return dropRef;
}

export function useRemoveSquadUnitDrop(): ConnectDropTarget {
  const callback = useRecoilCallback(removeUnit);
  const [, dropRef] = useDrop(
    () => ({
      accept: [ItemType.SquadUnit],
      drop: (unit: UnitBasicInfo, monitor) => {
        if (monitor.didDrop()) {
          return;
        }
        callback(unit);
      }
    })
  );

  return dropRef;
}

function useSquadJson(): () => SquadJsonStructure | undefined {
  return useRecoilCallback(({ snapshot }) => () => {
    const get = getFromSnapshot(snapshot);
    return convertToJsonObject(
      get(squadResolver),
      (unit) => get(lvStateResolver(unit)),
      (unit) => get(unitEquipmentResolver('chip1')(unit)),
      (unit) => get(unitEquipmentResolver('chip2')(unit)),
      (unit) => get(unitEquipmentResolver('os')(unit)),
      (unit) => get(unitEquipmentResolver('gear')(unit)),
      (unit) => get(unitCoreLinkResolver(unit)),
      (unit) => get(unitSkillResolver(unit)),
      (unit) => get(unitPrimaryActiveSkillResolver(unit)),
      (unit) => get(unitAffectionStateResolver(unit)),
      (unit) => get(unitDamagedStateResolver(unit))
    );
  });
}

export function useSquadShareModalOpener(): () => void {
  const getSquadJson = useSquadJson();
  const notify = useNotificationResister();

  const setModalShow = useSetRecoilState(squadShareModalShowState);
  const setShareUrl = useSetRecoilState(squadShareUrlState);

  return useRecoilCallback((cbi) => () => {
    const squadUnitCount = getSquadUnitCount(cbi)();
    if (squadUnitCount !== 0) {
      setModalShow(true);

      const squadJson = getSquadJson();
      if (squadJson) {
        generateShareUrl(squadJson)
          .then(url => {
            setShareUrl(url);
          })
          .catch(e => {
            console.error(e);
            setShareUrl('');
            notify('error_while_generating_squad_url');
          });
      }
    } else {
      notify('squad_is_empty');
    }
  });
}

export function useSquadShareModal(): [modalShow: boolean, hideModal: () => void, url: string | undefined] {
  const [modalShow, setModalShow] = useRecoilState(squadShareModalShowState);
  const [shareUrl, setShareUrl] = useRecoilState(squadShareUrlState);

  return [
    modalShow,
    () => {
      setModalShow(false);
      setShareUrl('');
    },
    shareUrl
  ];
}

export function useSquadShare(): [copyToClipboard: () => void, inputRef: RefObject<HTMLInputElement>] {
  const inputRef = useRef<HTMLInputElement>(null);
  const notify = useNotificationResister();

  return [
    () => {
      try {
        /* eslint-disable @typescript-eslint/no-non-null-assertion */
        inputRef.current!.select();
        document.execCommand('copy');
        notify('copied_squad_url');

        // Remove selection.
        inputRef.current!.focus();
        inputRef.current!.blur();
        /* eslint-enable @typescript-eslint/no-non-null-assertion */
        window.getSelection()?.removeAllRanges();
      } catch (e) {
        console.error(e);
        notify('error_while_generating_squad_url');
      }
    },
    inputRef
  ];
}

export function useSquadShareToTwitter(url?: string): () => void {
  return () => { url && window.open(generateTwitterShareUrl(url)); };
}

export function useSquadRestoreFromUrl(): boolean {
  const selectUnit = useUnitSelector();
  const [restoring, setRestoring] = useState(false);

  const notify = useNotificationResister();
  const squadRestore = useRecoilCallback(restoreSquad);
  const lvStateRestore = useRecoilCallback(restoreLvStatusState);
  const chip1Restore = useRecoilCallback(restoreUnitEquipmentState('chip1'));
  const chip2Restore = useRecoilCallback(restoreUnitEquipmentState('chip2'));
  const osRestore = useRecoilCallback(restoreUnitEquipmentState('os'));
  const gearRestore = useRecoilCallback(restoreUnitEquipmentState('gear'));
  const coreLinkRestore = useRecoilCallback(restoreUnitCoreLink);
  const skillRestore = useRecoilCallback(restoreUnitSkill);
  const primaryRestore = useRecoilCallback(restoreUnitPrimaryActiveSkill);
  const affectionRestore = useRecoilCallback(restoreUnitAffectionState);
  const damagedRestore = useRecoilCallback(restoreUnitDamagedState);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const squadParam = getSquadParam(location);
    if (squadParam) {
      setRestoring(true);

      try {
        const json = restore(squadParam);
        const restored = restoreFromJsonObject(json);
        if (restored) {
          lvStateRestore(restored.lvStatus);
          chip1Restore(restored.chip1Equipment);
          chip2Restore(restored.chip2Equipment);
          osRestore(restored.osEquipment);
          gearRestore(restored.gearEquipment);
          coreLinkRestore(restored.coreLink);
          skillRestore(restored.skill);
          primaryRestore(restored.primary);
          affectionRestore(restored.affection);
          damagedRestore(restored.damaged);

          squadRestore(restored.squad);
          selectUnit(restored.squad.units[0]?.unit);

          notify('restore_squad_units');
        }
      } catch (e) {
        console.error(e);
        notify('error_while_restoring_squad_url');
      }

      setRestoring(false);
      navigate(`${process.env.PUBLIC_URL}/`, { replace: true });
    }
  }, [
    navigate,
    location,
    notify,
    selectUnit,
    squadRestore,
    lvStateRestore,
    chip1Restore,
    chip2Restore,
    osRestore,
    gearRestore,
    coreLinkRestore,
    skillRestore,
    primaryRestore,
    affectionRestore,
    damagedRestore
  ]);

  return restoring;
}
