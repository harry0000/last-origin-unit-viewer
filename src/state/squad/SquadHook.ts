import { atom, useRecoilCallback, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { CSSProperties, RefObject, useEffect, useRef, useState } from 'react';
import { ConnectDragSource, ConnectDropTarget, useDrag, useDrop } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';
import { usePreview } from 'react-dnd-preview';
import { useHistory, useLocation } from 'react-router-dom';

import { Squad, TenKeyPosition } from '../../domain/squad/Squad';
import { UnitBasicInfo, UnitType } from '../../domain/UnitBasicInfo';

import { SquadJsonStructure } from '../../service/SquadJsonStructure';
import { convertToJsonObject } from '../../service/SquadJsonConverter';
import { generateShareUrl, generateTwitterShareUrl, squadUrlParamName } from '../../service/ShareUrlGenerator';
import { restore, UrlSafeBase64String } from '../../service/UrlParamConverter';
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
import { restoreUnitSkill, unitSkillResolver } from '../skill/UnitSkillState';
import { useNotificationResister } from '../ui/NotificationState';
import { useUnitSelector } from '../selector/UnitSelectorHook';

import { getFromSnapshot } from '../../util/recoil';

export const ItemType = {
  UnitCard: 'unit_card',
  SquadUnit: 'squad_unit'
} as const;
export type ItemType = typeof ItemType[keyof typeof ItemType]

const squadShareModalShowState = atom<boolean>({
  key: 'squadShareModalShowState',
  default: false
});

export function useSquadUnitTypeCount(): Readonly<Record<UnitType, number>> {
  return useRecoilValue(squadUnitTypeCountState);
}

export function useUnitDrag(unit: UnitBasicInfo): ConnectDragSource {
  const [, dragRef, previewRef] = useDrag(
    () => ({
      type: ItemType.UnitCard,
      item: unit
    }),
    [unit]
  );

  // HACK: disable default preview
  // https://github.com/react-dnd/react-dnd/issues/2612#issuecomment-646756506
  useEffect(() => {
    previewRef(getEmptyImage(), { captureDraggingState: true });
  }, []);

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
  }, []);

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
      (unit) => get(unitAffectionStateResolver(unit)),
      (unit) => get(unitDamagedStateResolver(unit))
    );
  });
}

export function useSquadShareModalOpener(): () => void {
  const setModalShow = useSetRecoilState(squadShareModalShowState);
  const notify = useNotificationResister();

  return useRecoilCallback((cbi) => () => {
    const squadUnitCount = getSquadUnitCount(cbi)();
    if (squadUnitCount !== 0) {
      setModalShow(true);
    } else {
      notify('squad_is_empty');
    }
  });
}

export function useSquadShareModal(): [modalShow: boolean, hideModal: () => void, url: string | undefined] {
  const notify = useNotificationResister();
  const getSquadJson = useSquadJson();
  const [modalShow, setModalShow] = useRecoilState(squadShareModalShowState);

  const [shareUrl, setShareUrl] = useState<string>('');

  useEffect(() => {
    if (modalShow) {
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
      setShareUrl('');
    }
  }, [modalShow]);

  return [
    modalShow,
    () => { setModalShow(false); },
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
  const affectionRestore = useRecoilCallback(restoreUnitAffectionState);
  const damagedRestore = useRecoilCallback(restoreUnitDamagedState);

  const history = useHistory();
  const squadParam = new URLSearchParams(useLocation().search).get(squadUrlParamName);

  useEffect(() => {
    if (squadParam) {
      setRestoring(true);

      try {
        const json = restore(squadParam as UrlSafeBase64String);
        const restored = restoreFromJsonObject(json);
        if (restored) {
          squadRestore(restored.squad);
          lvStateRestore(restored.lvStatus);
          chip1Restore(restored.chip1Equipment);
          chip2Restore(restored.chip2Equipment);
          osRestore(restored.osEquipment);
          gearRestore(restored.gearEquipment);
          coreLinkRestore(restored.coreLink);
          skillRestore(restored.skill);
          affectionRestore(restored.affection);
          damagedRestore(restored.damaged);

          selectUnit(restored.squad.units[0]?.unit);

          notify('restore_squad_units');
        }
      } catch (e) {
        console.error(e);
        notify('error_while_restoring_squad_url');
      }

      setRestoring(false);
      history.replace(`${process.env.PUBLIC_URL}/`);
    }
  }, [history, squadParam]);

  return restoring;
}
