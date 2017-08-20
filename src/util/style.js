import Link from 'gatsby-link';
import styled from 'styled-components';

export const headlineFont = 'Source Code Pro';
export const bodyFont = 'Source Sans Pro';

export const h1 = {
  fontSize: '44px',
  fontFamily: headlineFont
};
export const h2 = {
  fontSize: '24px',
  fontFamily: headlineFont
};
export const h3 = {
  fontSize: '16px',
  fontFamily: headlineFont
};
export const p = {
  fontSize: '15px',
  fontFamily: bodyFont
};

export const linkColor = '#557ee9';

export const link = `
  color: ${linkColor};
  text-decoration: none;
  border-bottom: 1px solid ${linkColor};

  &:hover {
    color: darken(${linkColor}, 20);
  }

  &:active {

  }
`;

export const fadeIn = `
  &.post-transition-appear {
    opacity: 0.01;
    transform: translate3d(0, 20px, 0);
  }

  &.post-transition-appear.post-transition-appear-active {
    opacity: 1;
    transition-duration: 0.5s;
    transition-easing-function: ease-out;
    transform: translate3d(0, 0, 0);
  }
`;

export const HeaderGroup = styled.div`
  padding: 130px 0 80px;
  text-align: center;
`;

export const Tag = styled(Link)`
  font-family: ${h1.fontFamily};
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1px;
  background: ${linkColor};
  color: #FFF;
  padding: 5px 15px;
  border-radius: 13px;
  text-transform: uppercase;
  text-decoration: none;
  margin: 0 auto;
  transition: 0.2s;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0);

  &:hover {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }

  &:active {
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
  }
`;

export const Headline = styled.h1`
  font-family: ${h1.fontFamily};
  font-size: ${h1.fontSize};
`;

export const Date = styled.h3`
  font-family: ${h3.fontFamily};
  font-size: ${h3.fontSize};
  font-weight: 500;
  color: ${linkColor};
`;
