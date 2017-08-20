import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import WithFadeTransition from '../components/WithFadeTransition';

import { HeaderGroup, Tag, Headline, Date } from '../util/style';

import 'prismjs/themes/prism-solarizedlight.css';

export default function BlogPost({ data }) {
  const post = data && data.markdownRemark;
  const category = post.frontmatter.tags[0];

  return (
    <WithFadeTransition delay={0}>
      <div>
        <Helmet title={`Bloggyblog - ${post.frontmatter.title}`} />
        <HeaderGroup>
          <Tag to={`/tags/${category}`}>
            {category}
          </Tag>
          <Headline>
            {post.frontmatter.title}
          </Headline>
          <Date>
            {post.frontmatter.date}
          </Date>
        </HeaderGroup>
        <p>
          Tags:{' '}
          {post.frontmatter.tags.slice(1).map(tag =>
            <Link to={`/tags/${tag}`} key={tag}>
              {tag}
            </Link>
          )}
        </p>
        <div
          className="post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </WithFadeTransition>
  );
}

BlogPost.propTypes = {
  data: PropTypes.object
};

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
