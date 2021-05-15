/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import { Card, Nav, Navbar } from 'react-bootstrap';

import AccordionCard from './AccordionCard';

const Header: React.FC = () => {
  return (
    <header>
      <Navbar
        expand={false}
        variant="dark"
      >
        <Navbar.Brand />
        <Navbar.Toggle aria-controls="header-navbar" />
        <Navbar.Collapse id="header-navbar">
          <Nav>
            <Nav.Item>
              <AccordionCard title={'Author'} bg="dark" text="white">
                <address>
                  harry0000 (&nbsp;<a href="https://twitter.com/harry0000jp" target="_blank" rel="noopener noreferrer">Twitter</a>&nbsp;/&nbsp;<a href="https://github.com/harry0000" target="_blank" rel="noopener noreferrer">GitHub</a>&nbsp;)
                </address>
              </AccordionCard>
            </Nav.Item>
            <Nav.Item>
              <Card bg="dark" text="white">
                <Card.Body>
                  <small>
                    著作権法第32条に基づいて画像を引用しております。<br />
                    著作権は権利者様に帰属しております。<br />
                    権利者様からの画像の削除依頼等は速やかに対処いたします。
                  </small>
                </Card.Body>
              </Card>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
