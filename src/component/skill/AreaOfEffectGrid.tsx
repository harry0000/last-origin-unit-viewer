/** @jsxRuntime classic */
/** @jsx jsx */
import { CSSObject, Theme, jsx } from '@emotion/react';
import React from 'react';
import { Interpolation } from '@emotion/serialize';
import { useTranslation } from 'react-i18next';

import { AreaOfEffectCellType } from './AreaOfEffectCellType';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

import { SkillType } from '../../domain/skill/SkillType';
import { UnitBasicInfo } from '../../domain/UnitBasicInfo';
import { useSkillArea } from '../../state/skill/unitSkillState';

import { ifNonNullable } from '../../util/react';

const cellColorStyle: { [key in AreaOfEffectCellType]: string } = {
  [AreaOfEffectCellType.Effective]: '#d0191d',
  [AreaOfEffectCellType.High]:      '#ff8f03',
  [AreaOfEffectCellType.Middle]:    '#ba5a03',
  [AreaOfEffectCellType.Weak]:      '#763316',
  [AreaOfEffectCellType.None]:      '#4b4b4d'
} as const;

const overlayStyle: (type: AreaOfEffectCellType) => CSSObject = (type) =>
  type !== AreaOfEffectCellType.None ?
    {
      borderRadius: 2,
      position: 'absolute',
      top: -3,
      bottom: 4,
      left: -3,
      right: 4,
      opacity: 0.8,
      backgroundColor: cellColorStyle[type]
    } :
    {};

const AreaOfEffectCell: React.FC<{ selected: boolean, type: AreaOfEffectCellType }> = ({ selected, type, ...rest }) => {
  const { t } = useTranslation();

  return (
    <td
      css={{
        border: '5px solid transparent',
        width: '33%',
        position: 'relative',
        '&::after': {
          content: '" "',
          display: 'block',
          marginTop: '100%'
        }
      }}
    >
      <div
        css={{
          borderRadius: 2,
          position: 'absolute',
          inset: 0,
          backgroundColor: selected ? '#16d4d4' : cellColorStyle[AreaOfEffectCellType.None]
        }}
      />
      {
        type === AreaOfEffectCellType.High ||
        type === AreaOfEffectCellType.Middle ||
        type === AreaOfEffectCellType.Weak ?
          (<OverlayTrigger
            {...rest}
            placement='auto'
            overlay={<Tooltip id='tooltip-aoe-cell'>{t(`skill.effective_rate.${type}`)}</Tooltip>}
          >
            <div css={overlayStyle(type)} />
          </OverlayTrigger>) :
          <div css={overlayStyle(type)} />
      }
    </td>
  );
};

const AreaOfEffectGrid: React.FC<{
  css?: Interpolation<Theme>,
  skillType: SkillType,
  unit: UnitBasicInfo
}> = ({ skillType, unit, ...rest }) => {
  const { t } = useTranslation();
  const cellType = useSkillArea(skillType, unit);

  return (
    ifNonNullable(
      cellType,
      cell => (
        <div {...rest}>
          <table
            css={{
              borderCollapse: 'collapse',
              width: '100%',
              transform: 'skewX(-9deg)'
            }}>
            <tbody>
              <tr>
                <AreaOfEffectCell selected={cell.select === 7} type={cell.area[0]} />
                <AreaOfEffectCell selected={cell.select === 8} type={cell.area[1]} />
                <AreaOfEffectCell selected={cell.select === 9} type={cell.area[2]} />
              </tr>
              <tr>
                <AreaOfEffectCell selected={cell.select === 4} type={cell.area[3]} />
                <AreaOfEffectCell selected={cell.select === 5} type={cell.area[4]} />
                <AreaOfEffectCell selected={cell.select === 6} type={cell.area[5]} />
              </tr>
              <tr>
                <AreaOfEffectCell selected={cell.select === 1} type={cell.area[6]} />
                <AreaOfEffectCell selected={cell.select === 2} type={cell.area[7]} />
                <AreaOfEffectCell selected={cell.select === 3} type={cell.area[8]} />
              </tr>
            </tbody>
          </table>
          {(<span css={{ color: '#16d4d4' }}>{!cell.select ? t('skill.fixed_area') : '\u00A0'}</span>)}
        </div>
      )
    )
  );
};

export default AreaOfEffectGrid;
