import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Layout from '../layouts/layout';

import PostList from '../components/PostList';
import { HeaderGroup, Headline, Tag } from '../util/style';

export default function TagPage({ pageContext }) {
  const { tag, posts } = pageContext;

  return (
    <Layout>
      <Helmet title={tag} />

      <HeaderGroup>
        <Tag to="/tags">Tags</Tag>
        <Headline>{tag}</Headline>
      </HeaderGroup>

      <PostList posts={posts} />
    </Layout>
  );
}

TagPage.propTypes = {
  pageContext: PropTypes.object
};
