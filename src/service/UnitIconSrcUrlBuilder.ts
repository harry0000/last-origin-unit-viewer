import { UnitNumber, UnitRank } from '../domain/UnitBasicInfo';

function hasSSRankSkin(unit: UnitNumber): boolean {
  switch (unit) {
  case 17:
  case 73:
  case 83:
  case 119:
    return true;
  default:
    return false;
  }
}

export function buildUnitTileIconSrcUrl(unit: UnitNumber, rank: UnitRank): string {
  const suffix = rank === UnitRank.SS && hasSSRankSkin(unit) ? '_ss' : '';

  return `${import.meta.env.BASE_URL}unit_icon/${unit}${suffix}.webp`;
}
