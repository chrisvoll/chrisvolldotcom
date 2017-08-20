import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import { h1, link } from '../../util/style';

const Nav = styled.div`
  background: linear-gradient(to right, #fff, #e3f7ff);
  box-shadow: 0 2px 18px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  height: 70px;
`;

const Logo = styled(Link)`
  font-family: ${h1.fontFamily};
  ${link};
  border-bottom: 0;
  padding: 20px;
`;

export default function Navbar() {
  return (
    <Nav>
      <Logo to="/">chrisvoll</Logo>
    </Nav>
  );
}
