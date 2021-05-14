/** @jsxRuntime classic */
/** @jsx jsx */
import { CSSObject, Theme, jsx } from '@emotion/react';
import React from 'react';
import { Interpolation } from '@emotion/serialize';
import { useTranslation } from 'react-i18next';

import { OverlayTrigger, Tooltip } from 'react-bootstrap';

import { AreaOfEffectCells, AreaOfEffectCellType } from './AreaOfEffectCellType';
import { SkillAreaType } from '../../domain/SkillAreaOfEffect';

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

const AreaOfEffectCell: React.FC<{ selected: boolean, type: AreaOfEffectCellType }> = ({ selected, type, ...others }) => {
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
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: selected ? '#16d4d4' : cellColorStyle[AreaOfEffectCellType.None]
        }}
      />
      {
        type === AreaOfEffectCellType.High ||
        type === AreaOfEffectCellType.Middle ||
        type === AreaOfEffectCellType.Weak ?
          (<OverlayTrigger
            {...others}
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

const AreaOfEffectGrid: React.FC<{ css?: Interpolation<Theme>, area: SkillAreaType }> = (props) => {
  const { t } = useTranslation();
  const { area, ...others } = props;
  const cellTypes = AreaOfEffectCells[area];

  return (
    <div {...others}>
      <table
        css={{
          borderCollapse: 'collapse',
          width: '100%',
          transform: 'skewX(-9deg)'
        }}>
        <tbody>
          <tr>
            <AreaOfEffectCell selected={cellTypes.select === 7} type={cellTypes.area[0]} />
            <AreaOfEffectCell selected={cellTypes.select === 8} type={cellTypes.area[1]} />
            <AreaOfEffectCell selected={cellTypes.select === 9} type={cellTypes.area[2]} />
          </tr>
          <tr>
            <AreaOfEffectCell selected={cellTypes.select === 4} type={cellTypes.area[3]} />
            <AreaOfEffectCell selected={cellTypes.select === 5} type={cellTypes.area[4]} />
            <AreaOfEffectCell selected={cellTypes.select === 6} type={cellTypes.area[5]} />
          </tr>
          <tr>
            <AreaOfEffectCell selected={cellTypes.select === 1} type={cellTypes.area[6]} />
            <AreaOfEffectCell selected={cellTypes.select === 2} type={cellTypes.area[7]} />
            <AreaOfEffectCell selected={cellTypes.select === 3} type={cellTypes.area[8]} />
          </tr>
        </tbody>
      </table>
      {(<span css={{ color: '#16d4d4' }}>{!cellTypes.select ? t('skill.fixed_area') : '\u00A0'}</span>)}
    </div>
  );
};

export default AreaOfEffectGrid;
