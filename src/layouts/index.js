import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Navbar from './components/Navbar';
import Background from './components/BackgroundSVG';

import './index.css';

const Content = styled.div`
  margin: 0 auto;
  max-widrth: 960px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
  position: relative;
  z-index: 2;
`;

const TemplateWrapper = ({ children }) =>
  <div>
    <Helmet
      title="Chris. Voll. Dot. Com."
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' }
      ]}
    />
    <Navbar />
    <Background />
    <Content>
      {children()}
    </Content>
  </div>;

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
