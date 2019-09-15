import React from 'react';
import PostList from '../components/PostList';
import { HeaderGroup, Headline, Date } from '../util/style';
import Layout from '../layouts/layout';
import { useStaticQuery, graphql } from 'gatsby';

export default function IndexPage() {
  const data = useStaticQuery(graphql`
    query IndexQuery {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            excerpt(pruneLength: 250)
            id
            frontmatter {
              title
              date(formatString: "MMMM DD, YYYY")
              path
              tags
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <HeaderGroup>
        <Headline>chrisvoll</Headline>
        <Date>web developer @ seatgeek</Date>
      </HeaderGroup>
      <PostList posts={data.allMarkdownRemark.edges} />
    </Layout>
  );
}
