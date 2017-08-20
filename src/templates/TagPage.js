import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import PostList from '../components/PostList';
import { HeaderGroup, Headline, Tag } from '../util/style';

export default function TagPage({ pathContext }) {
  const { tag, posts } = pathContext;

  return (
    <div>
      <Helmet title={`Bloggyblog - ${tag}`} />

      <HeaderGroup>
        <Tag to="/tags">Tags</Tag>
        <Headline>
          {tag}
        </Headline>
      </HeaderGroup>

      <PostList posts={posts} />
    </div>
  );
}

TagPage.propTypes = {
  pathContext: PropTypes.object
};
