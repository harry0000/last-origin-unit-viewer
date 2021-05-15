/** @jsxRuntime classic */
/** @jsx jsx */
import { CSSObject, jsx } from '@emotion/react';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { useTranslation } from 'react-i18next';
import { Accordion } from 'react-bootstrap';

import SkillEffectBadge from './SkillEffectBadge';
import SkillEffectSelectorButton from './SkillEffectSelectorButton';

import { unitSelectorStoreState } from '../../state/unit/unitSelectorStoreState';
import { SkillEffectSelectorCondition } from '../../store/SkillEffectSelectorCondition';
import { ifTruthy } from '../../util/react';

const collapseBackground: CSSObject = {
  background:
    [
      'linear-gradient(135deg, transparent 5.5em, #0a101e 5.5em, #0a101e 5.9em, transparent 5.9em),',
      'linear-gradient(135deg, transparent 1em, #ffcc00 1em, #ffcc00 5.5em, transparent 5.5em),',
      'linear-gradient(45deg,  transparent 4em, #e0e0e0 4em, #e0e0e0 6.5em, transparent 6.5em)',
      'no-repeat'
    ].join(' ')
};

const expandBackground: CSSObject = {
  background:
    [
      'linear-gradient(45deg,  transparent 5.5em, #0a101e 5.5em, #0a101e 5.9em, transparent 5.9em),',
      'linear-gradient(45deg,  transparent 1em, #ffcc00 1em, #ffcc00 5.5em, transparent 5.5em),',
      'linear-gradient(135deg, transparent 4em, #e0e0e0 4em, #e0e0e0 6.5em, transparent 6.5em)',
      'no-repeat'
    ].join(' ')
};

const SkillEffectSelector: React.FC = () => {
  const [collapsed, setCollapsed] = useState(true);

  const { t } = useTranslation();
  const [store, setStore] = useRecoilState(unitSelectorStoreState);

  return (
    <Accordion onSelect={() => setCollapsed(prev => !prev)}>
      <Accordion.Toggle as={'div'} eventKey="0">
        <div
          css={{
            color: 'black',
            fontSize: '0.8em',
            fontWeight: 'bold',
            paddingLeft: '1.9em',
            margin: '3px 0',
            cursor: 'pointer',
            userSelect: 'none',
            ...(collapsed ? expandBackground : collapseBackground)
          }}
        >
          {t('form.skill_effect_condition')}
        </div>
        <div
          css={{
            borderTop: '#ccc solid 2px',
            cursor: 'pointer'
          }}
        >
          {ifTruthy(
            collapsed,
            (<React.Fragment>
              {Object.values(SkillEffectSelectorCondition).map(effect =>
                ifTruthy(store.isSkillEffectSelected(effect), (<SkillEffectBadge key={effect} effect={effect} />))
              )}
            </React.Fragment>)
          )}
        </div>
      </Accordion.Toggle>
      <Accordion.Collapse eventKey="0">
        <div>
          {Object.values(SkillEffectSelectorCondition).map(effect => (
            <SkillEffectSelectorButton
              css={{
                margin: '2px'
              }}
              key={effect}
              selected={store.isSkillEffectSelected(effect)}
              onChange={() => setStore(store.toggleSkillEffect(effect))}
            >
              <span>{t(`form.skill.${effect}`)}</span>
            </SkillEffectSelectorButton>
          ))}
        </div>
      </Accordion.Collapse>
    </Accordion>
  );
};

export default SkillEffectSelector;
