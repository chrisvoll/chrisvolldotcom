import React from 'react';
import styled from 'styled-components';

const FooterBody = styled.div`
  text-align: center;
  padding: 40px 0;
  margin: 40px 20px 0;
  border-top: 1px solid #ddd;
`;

export default function Footer() {
  return (
    <FooterBody>
      <span role="img" aria-label="Wave emoji">
        👋
      </span>
    </FooterBody>
  );
}
