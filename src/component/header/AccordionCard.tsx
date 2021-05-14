/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { ReactNode, useState } from 'react';
import { Accordion, Card, useAccordionToggle } from 'react-bootstrap';
import { CardProps } from 'react-bootstrap/Card';
import { ChevronDown, ChevronRight } from '../icon/FluentIcons';

const AccordionHeader: React.FC<{ eventKey: string, children: ReactNode }> = ({ eventKey, children }) => {
  const [collapsed, setCollapsed] = useState(true);
  const onClick = useAccordionToggle(eventKey, () => setCollapsed(prev => !prev));

  return (
    <Card.Header css={{ userSelect: 'none' }} onClick={onClick} role="button">
      <span
        css={{
          display: 'inline-block',
          height: 16,
          width: 16,
          marginRight: 5
        }}
      >
        {
          collapsed ?
            (<ChevronRight />) :
            (<ChevronDown />)
        }
      </span>
      {children}
    </Card.Header>
  );
};

const AccordionCard: React.FC<{ title: string, children: ReactNode } & CardProps> = ({ title, bg, text, border, body, children }) => {
  return (
    <Accordion>
      <Card bg={bg} text={text} border={border} body={body}>
        <AccordionHeader eventKey="0">
          {title}
        </AccordionHeader>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            {children}
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

export default AccordionCard;
