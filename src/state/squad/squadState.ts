import { atom, useRecoilCallback, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { CSSProperties, RefObject, useEffect, useRef, useState } from 'react';
import { ConnectDragSource, ConnectDropTarget, useDrag, useDrop } from 'react-dnd';
import { usePreview } from 'react-dnd-preview';
import { getEmptyImage } from 'react-dnd-html5-backend';
import { useHistory, useLocation } from 'react-router-dom';

import { Squad, TenKeyPosition } from '../../domain/squad/Squad';
import { UnitBasicInfo, UnitType } from '../../domain/UnitBasicInfo';

import { SquadJsonStructure } from '../../service/SquadJsonStructure';
import { convertToJsonObject } from '../../service/SquadJsonConverter';
import { generateShareUrl, generateTwitterShareUrl, squadUrlParamName } from '../../service/ShareUrlGenerator';
import { restore, UrlSafeBase64String } from '../../service/UrlParamConverter';
import { restoreFromJsonObject } from '../../service/SquadJsonRestore';

import { useUnitAffectionStateResolver, useUnitAffectionStateRestore } from '../status/unitAffectionBonus';
import { useUnitDamagedStateResolver, useUnitDamagedStateRestore } from '../status/unitDamagedState';
import { useUnitSelector } from '../selector/UnitSelectorHook';
import { useUnitSkillResolver, useUnitSkillRestore } from '../skill/unitSkillState';
import { unitCoreLinkState } from '../corelink/UnitCoreLinkState';
import { unitEquipmentState } from '../equipment/UnitEquipmentState';
import { unitLvStatusState } from '../status/parameters/UnitLvStatusState';

import { useNotificationResister } from '../ui/notificationState';

export const ItemType = {
  UnitCard: 'unit_card',
  SquadUnit: 'squad_unit'
} as const;
export type ItemType = typeof ItemType[keyof typeof ItemType]

const squadAtom = atom<Squad>({
  key: 'squadAtom',
  default: new Squad()
});

const squadShareModalShowAtom = atom<boolean>({
  key: 'squadShareModalShowAtom',
  default: false
});

export function useSquadUnitTypeCount(): Readonly<Record<UnitType, number>> {
  const squad = useRecoilValue(squadAtom);
  return squad.unitTypeCount;
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


export function useSquad(): Squad {
  return useRecoilValue(squadAtom);
}

export function useSquadGrid(position: TenKeyPosition): [
  assignedUnit: UnitBasicInfo | undefined,
  canAssignUnit: boolean,
  isHoveringUnit: boolean,
  dropRef: ConnectDropTarget
] {
  const [squad, setSquad] = useRecoilState(squadAtom);
  const [props, dropRef] = useDrop(
    () => ({
      accept: [ItemType.UnitCard, ItemType.SquadUnit],
      drop: (unit: UnitBasicInfo) => setSquad(s => s.assignUnit(unit, position)),
      canDrop: (unit: UnitBasicInfo) => squad.canAssignUnit(unit, position),
      collect: monitor => ({
        canAssignUnit: monitor.canDrop(),
        isHoveringUnit: monitor.isOver()
      })
    }),
    [squad]
  );

  return [squad.unit(position), props.canAssignUnit, props.isHoveringUnit, dropRef];
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
  const setSquad = useSetRecoilState(squadAtom);
  const [, dropRef] = useDrop(
    () => ({
      accept: [ItemType.SquadUnit],
      drop: (unit: UnitBasicInfo, monitor) => {
        if (monitor.didDrop()) {
          return;
        }
        setSquad(s => s.removeUnit(unit));
      }
    })
  );

  return dropRef;
}

function useSquadJson(): () => SquadJsonStructure | undefined {
  const lvStatusResolver = unitLvStatusState.lvStateResolver;
  const chip1EquipmentResolver = unitEquipmentState.unitEquipmentResolver('chip1');
  const chip2EquipmentResolver = unitEquipmentState.unitEquipmentResolver('chip2');
  const osEquipmentResolver    = unitEquipmentState.unitEquipmentResolver('os');
  const gearEquipmentResolver  = unitEquipmentState.unitEquipmentResolver('gear');
  const coreLinkResolver = unitCoreLinkState.unitCoreLinkResolver;
  const skillResolver = useUnitSkillResolver();
  const affectionResolver = useUnitAffectionStateResolver();
  const damagedResolver = useUnitDamagedStateResolver();

  return useRecoilCallback(({ snapshot }) => () => {
    const squad = snapshot.getLoadable(squadAtom).getValue();
    return convertToJsonObject(
      squad,
      (unit) => snapshot.getLoadable(lvStatusResolver(unit)).getValue(),
      (unit) => snapshot.getLoadable(chip1EquipmentResolver(unit)).getValue(),
      (unit) => snapshot.getLoadable(chip2EquipmentResolver(unit)).getValue(),
      (unit) => snapshot.getLoadable(osEquipmentResolver(unit)).getValue(),
      (unit) => snapshot.getLoadable(gearEquipmentResolver(unit)).getValue(),
      (unit) => snapshot.getLoadable(coreLinkResolver(unit)).getValue(),
      (unit) => snapshot.getLoadable(skillResolver(unit)).getValue(),
      (unit) => snapshot.getLoadable(affectionResolver(unit)).getValue(),
      (unit) => snapshot.getLoadable(damagedResolver(unit)).getValue()
    );
  });
}

export function useSquadShareModalOpener(): () => void {
  const setModalShow = useSetRecoilState(squadShareModalShowAtom);
  const notify = useNotificationResister();

  return useRecoilCallback(({ snapshot }) => () => {
    const squad = snapshot.getLoadable(squadAtom).getValue();
    if (squad.unitCount !== 0) {
      setModalShow(true);
    } else {
      notify('squad_is_empty');
    }
  });
}

export function useSquadShareModal(): [modalShow: boolean, hideModal: () => void, url: string | undefined] {
  const notify = useNotificationResister();
  const getSquadJson = useSquadJson();
  const [modalShow, setModalShow] = useRecoilState(squadShareModalShowAtom);

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
  const squadRestore = useSetRecoilState(squadAtom);
  const lvStateRestore = useRecoilCallback(unitLvStatusState.restoreLvStatusState);
  const chip1Restore = useRecoilCallback(unitEquipmentState.restoreUnitEquipmentState('chip1'));
  const chip2Restore = useRecoilCallback(unitEquipmentState.restoreUnitEquipmentState('chip2'));
  const osRestore = useRecoilCallback(unitEquipmentState.restoreUnitEquipmentState('os'));
  const gearRestore = useRecoilCallback(unitEquipmentState.restoreUnitEquipmentState('gear'));
  const coreLinkRestore = useRecoilCallback(unitCoreLinkState.restoreUnitCoreLink);
  const skillRestore = useUnitSkillRestore();
  const affectionRestore = useUnitAffectionStateRestore();
  const damagedRestore = useUnitDamagedStateRestore();

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
