import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

const FooterBody = styled.div`
  text-align: center;
  padding: 40px 0;
  margin: 40px 20px 0;
  border-top: 1px solid #ddd;
`;

const EmojiLink = styled(Link)`
  text-decoration: none;
`;

export default function Footer() {
  return (
    <FooterBody>
      <EmojiLink to="/">
        <span role="img" aria-label="Wave emoji. Click to go to the homepage">
          👋
        </span>
      </EmojiLink>
    </FooterBody>
  );
}
