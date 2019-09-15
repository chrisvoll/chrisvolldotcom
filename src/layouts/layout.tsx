import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Background from '../components/svgs/BackgroundSVG';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

import './post-content.css';
import './prism-atom-dark.css';
import './reset.css';

const Content = styled.div`
  margin: 0 auto;
  max-width: 800px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
  position: relative;
  z-index: 2;
`;

const Layout: React.FC = ({ children }) => (
  <div>
    <Helmet
      title="Chris. Voll. Dot. Com."
      meta={[
        { name: 'description', content: 'Web developer at SeatGeek' },
        { name: 'keywords', content: 'code' }
      ]}
    />
    <Navbar />
    <Background />
    <Content>{children}</Content>
    <Footer />
  </div>
);

export default Layout;
