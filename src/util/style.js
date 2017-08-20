export const headlineFont = 'Source Code Pro';
export const bodyFont = 'Source Sans Pro';

export const h2 = {
  size: '24px',
  fontFamily: headlineFont
};
export const h3 = {
  size: '16px',
  fontFamily: headlineFont
};
export const p = {
  size: '15px',
  fontFamily: bodyFont
};

export const linkColor = '#477aaa';

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
