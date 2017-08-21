import React from 'react';
import PropTypes from 'prop-types';
import PostList from '../components/PostList';
import { HeaderGroup, Headline, Date } from '../util/style';

export default function IndexPage({ data }) {
  const posts = data.allMarkdownRemark.edges;

  return (
    <div>
      <HeaderGroup>
        <Headline>chrisvoll</Headline>
        <Date>web developer @ seatgeek</Date>
      </HeaderGroup>
      <PostList posts={posts} />
    </div>
  );
}

IndexPage.propTypes = {
  data: PropTypes.object
};

export const pageQuery = graphql`
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
`;
