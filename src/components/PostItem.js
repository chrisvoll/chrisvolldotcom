import React from 'react';
import Link from 'gatsby-link';

export default function PostItem({ post }) {
  return (
    <div className="blog-post-preview">
      <h2>
        <Link to={post.frontmatter.path}>
          {post.frontmatter.title}
        </Link>
      </h2>
      <h3>
        {post.frontmatter.date}
      </h3>
      <p>
        {post.excerpt}
      </p>
    </div>
  );
}
