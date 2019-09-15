import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../layouts/layout';

import PostList from '../components/PostList';
import { IPost } from '../types';
import { HeaderGroup, Headline, Tag } from '../util/style';

interface IProps {
  pageContext: {
    tag: string;
    posts: IPost[];
  };
}

const TagPage: React.FC<IProps> = ({ pageContext }) => {
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
};

export default TagPage;
