import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';

import 'prismjs/themes/prism-solarizedlight.css';

export default function BlogPost({ data }) {
  const post = data && data.markdownRemark;

  return (
    <div className="blog-post-container">
      <Helmet title={`Bloggyblog - ${post.frontmatter.title}`} />
      <div className="blog-post">
        <h1>
          {post.frontmatter.title}
        </h1>
        <h2>
          {post.frontmatter.date}
        </h2>
        <p>
          Tags:{' '}
          {post.frontmatter.tags.map(tag =>
            <Link to={`/tags/${tag}`} key={tag}>
              {tag}
            </Link>
          )}
        </p>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        tags
      }
    }
  }
`;
