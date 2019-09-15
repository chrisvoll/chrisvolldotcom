import { Link } from 'gatsby';
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

export const linkColor = '#3869e5';
export const linkColorHover = '#2a4da6';
export const linkColorActive = '#1a3067';

export const link = `
  color: ${linkColor};
  text-decoration: none;
  border-bottom: 1px solid ${linkColor};
  transition: 0.2s color;

  &:hover {
    color: ${linkColorHover};
  }

  &:active {
    color: ${linkColorActive};
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
  color: #fff;
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
  line-height: 120%;
`;

export const Date = styled.h3`
  font-family: ${h3.fontFamily};
  font-size: ${h3.fontSize};
  font-weight: 500;
  color: ${linkColor};
`;
