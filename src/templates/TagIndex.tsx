import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Layout from '../layouts/layout';

import { HeaderGroup, Headline, link } from '../util/style';

const Tag = styled(Link)`
  text-align: center;
  display: block;
  ${link};
  border: 0;
  padding: 10px;
`;

export default function TagIndex({ pageContext }) {
  const { tags } = pageContext;

  return (
    <Layout>
      <Helmet title="Tags" />

      <HeaderGroup>
        <Headline>Tags</Headline>
      </HeaderGroup>

      {tags.map(tag => (
        <Tag key={tag} to={`/tags/${tag}`}>
          {tag}
        </Tag>
      ))}
    </Layout>
  );
}

TagIndex.propTypes = {
  pageContext: PropTypes.object
};
