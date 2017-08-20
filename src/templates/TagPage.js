import React from 'react';
import Helmet from 'react-helmet';

import PostItem from '../components/PostItem';

export default function TagPage({ pathContext }) {
  const { tag, posts } = pathContext;

  return (
    <div className="blog-post-container">
      <Helmet title={`Bloggyblog - ${tag}`} />
      <div className="blog-post">
        <h1>
          {tag}
        </h1>

        {posts.map(post => <PostItem post={post} key={post.id} />)}
      </div>
    </div>
  );
}
