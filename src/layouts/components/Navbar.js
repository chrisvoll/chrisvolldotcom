import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import { h1, link } from '../../util/style';

import TwitterSVG from '../../components/svgs/TwitterSVG';
import GithubSVG from '../../components/svgs/GithubSVG';

const Nav = styled.div`
  background: linear-gradient(to right, #fff, #e3f7ff);
  box-shadow: 0 2px 18px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  height: 70px;
  justify-content: space-between;
`;

const Logo = styled(Link)`
  font-family: ${h1.fontFamily};
  ${link};
  border-bottom: 0;
  padding: 20px;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
`;

const Icon = styled.a`
  padding: 15px 10px;
  display: block;

  svg {
    display: block;
  }
`;

export default function Navbar() {
  return (
    <Nav>
      <Logo to="/">chrisvoll</Logo>

      <Icons>
        <Icon href="https://twitter.com/chrisvoll" title="Twitter">
          <TwitterSVG />
        </Icon>
        <Icon href="https://github.com/chrisvoll" title="GitHub">
          <GithubSVG />
        </Icon>
      </Icons>
    </Nav>
  );
}
