import React from 'react';
import Helmet from 'react-helmet';

export default function Template({
  data // omg the tutorial mentions graphql get excited
}) {
  const post = data.markdownRemark;

  return (
    <div className="blog-post-container">
      <Helmet title={`Bloggyblog - ${post.frontmatter.title}`} />
      <div className="blog-post">
        <h1>{post.frontmatter.title}</h1>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </div>
  )
}
