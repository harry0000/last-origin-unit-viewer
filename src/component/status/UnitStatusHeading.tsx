/** @jsx jsx */
import { jsx } from '@emotion/react';
import { CSSPropertiesWithMultiValues } from '@emotion/serialize';
import React, { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

import { Image } from 'react-bootstrap';

const headingStyle: CSSPropertiesWithMultiValues = {
  display: 'flex',
  alignItems: 'center',
  height: 24,
  marginBottom: 4
};

const headingTextStyle: CSSPropertiesWithMultiValues = {
  color: '#ccc',
  fontSize: 16,
  lineHeight: 1,
  letterSpacing: 1,
  marginLeft: 4
};

type Props = (
  { iconSrc: string } | { icon: ReactNode }
) & {
  headingKey: string,
  children?: ReactNode
}

const UnitStatusHeading: React.FC<Props> = React.memo((props) => {
  const { headingKey, children = null } = props;
  const { t } = useTranslation();
  const text = t(headingKey);

  return (
    <div css={headingStyle}>
      {
        'icon' in props ?
          props.icon :
          (<Image
            rounded
            draggable={false}
            width={20}
            height={20}
            aria-hidden="true"
            alt={text}
            src={props.iconSrc}
          />)
      }
      <span css={headingTextStyle}>{text}</span>
      {children}
    </div>
  );
});

export default UnitStatusHeading;
