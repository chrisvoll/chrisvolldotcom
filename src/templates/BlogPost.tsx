import { graphql } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import WithFadeTransition from '../components/WithFadeTransition';
import Layout from '../layouts/layout';
import { IPost } from '../types';
import { Date, HeaderGroup, Headline, Tag } from '../util/style';

import 'prismjs/themes/prism-solarizedlight.css';

interface IProps {
  data: {
    markdownRemark: IPost;
  };
}

const BlogPost: React.FC<IProps> = ({ data }) => {
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
    <Layout>
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
    </Layout>
  );
};

export default BlogPost;

export const pageQuery = graphql`
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
`;
