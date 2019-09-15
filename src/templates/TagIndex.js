import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';
import styled from 'styled-components';

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
    <div>
      <Helmet title="Tags" />

      <HeaderGroup>
        <Headline>Tags</Headline>
      </HeaderGroup>

      {tags.map(tag => (
        <Tag key={tag} to={`/tags/${tag}`}>
          {tag}
        </Tag>
      ))}
    </div>
  );
}

TagIndex.propTypes = {
  pageContext: PropTypes.object
};
