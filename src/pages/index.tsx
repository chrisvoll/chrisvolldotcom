import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import PostList from '../components/PostList';
import Layout from '../layouts/layout';
import { Date, HeaderGroup, Headline } from '../util/style';

const IndexPage: React.FC = () => {
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
};

export default IndexPage;
