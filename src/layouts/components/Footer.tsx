import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const FooterBody = styled.div`
  text-align: center;
  padding: 40px 0;
  margin: 40px 20px 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 1;
`;

const EmojiLink = styled(Link)`
  text-decoration: none;
`;

const Footer: React.FC = () => {
  return (
    <FooterBody>
      <EmojiLink to="/">
        <span role="img" aria-label="Wave emoji. Click to go to the homepage">
          👋
        </span>
      </EmojiLink>
    </FooterBody>
  );
};

export default Footer;
