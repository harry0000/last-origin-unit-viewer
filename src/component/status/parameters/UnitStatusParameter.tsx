/** @jsxRuntime classic */
/** @jsx jsx */
import { CSSObject, jsx } from '@emotion/react';
import React from 'react';

import {
  AccParameterRow,
  AtkParameterRow,
  CriParameterRow,
  DefParameterRow,
  EvaParameterRow,
  HpParameterRow,
  SpdParameterRow
} from './UnitStatusParameterRow';
import { Col, Container, Row } from 'react-bootstrap';
import { ElectricResist, FireResist, IceResist } from './AttributeResist';
import UnitLvView from './UnitLvView';

const divider: CSSObject = {
  borderTop: '2px dashed #444'
};

const bottomDivider: CSSObject = {
  borderBottom: '2px dashed #444'
};

const rowPadding: CSSObject = {
  padding: '10px 0'
};

const rowPaddingWithDivider = {
  ...divider,
  ...rowPadding
};

const UnitStatusParameter: React.FC = () => {
  return (
    <div css={{ color: '#ccc' }}>
      <UnitLvView />
      <Container fluid css={{ marginTop: 10 }}>
        <HpParameterRow css={rowPadding} />
        <AtkParameterRow css={rowPaddingWithDivider} />
        <DefParameterRow css={rowPaddingWithDivider} />
        <AccParameterRow css={rowPaddingWithDivider} />
        <EvaParameterRow css={rowPaddingWithDivider} />
        <CriParameterRow css={rowPaddingWithDivider} />
        <SpdParameterRow css={rowPaddingWithDivider} />
        <Row css={{ ...rowPaddingWithDivider, ...bottomDivider, justifyContent: 'space-around' }}>
          <Col xs="auto" css={{ padding: 0 }}><FireResist /></Col>
          <Col xs="auto" css={{ padding: 0 }}><IceResist /></Col>
          <Col xs="auto" css={{ padding: 0 }}><ElectricResist /></Col>
        </Row>
      </Container>
    </div>
  );
};

export default UnitStatusParameter;
