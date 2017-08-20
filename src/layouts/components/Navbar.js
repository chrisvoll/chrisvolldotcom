import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const Nav = styled.div`
  background: linear-gradient(to right, #fff, #e3f7ff);
  box-shadow: 0 2px 18px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  height: 70px;
`;

export default function Navbar(props) {
  return (
    <Nav>
      <Link to="/" style={{}}>
        chrisvoll
      </Link>
    </Nav>
  );
}
