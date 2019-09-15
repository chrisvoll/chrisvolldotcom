import React from 'react';
import Helmet from 'react-helmet';
import WithFadeTransition from '../components/WithFadeTransition';
import { StaticQuery, graphql } from 'gatsby';

import { HeaderGroup, Tag, Headline, Date } from '../util/style';

import 'prismjs/themes/prism-solarizedlight.css';

export default function BlogPost() {
  return (
    <StaticQuery
      query={graphql`
        query BlogPostByPath($path: String!) {
          markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            excerpt(pruneLength: 160)
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              path
              title
              tags
            }
          }
        }
      `}
      render={data => {
        const post = data && data.markdownRemark;
        const category = post.frontmatter.tags[0];
        const meta = [
          {
            name: 'description',
            content: post.excerpt
          },
          {
            name: 'keywords',
            content: post.frontmatter.tags.join(', ')
          }
        ];
        return (
          <WithFadeTransition>
            <Helmet title={post.frontmatter.title} meta={meta} />
            <HeaderGroup>
              <Tag to={`/tags/${category}`}>{category}</Tag>
              <Headline>{post.frontmatter.title}</Headline>
              <Date>{post.frontmatter.date}</Date>
            </HeaderGroup>
            <div
              className="post-content"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </WithFadeTransition>
        );
      }}
    />
  );
}
