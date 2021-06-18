import { selector } from 'recoil';
import { CoreLinkUnit } from '../../domain/UnitCoreLink';
import { selectedUnitCoreLinkState } from './unitCoreLinkState';

export const availableCoreLinkUnit = selector<ReadonlyArray<CoreLinkUnit>>({
  key: 'availableCoreLinkUnit',
  get: ({ get }) => {
    const coreLink = get(selectedUnitCoreLinkState);
    return coreLink ? [coreLink.fitUnit, coreLink.rankSSFitUnit, coreLink.rankSFitUnit, coreLink.rankAFitUnit] : [];
  }
});
