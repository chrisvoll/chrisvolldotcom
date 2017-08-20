import React from 'react';
import PropTypes from 'prop-types';
import PostList from '../components/PostList';

export default function IndexPage({ data }) {
  let posts = data.allMarkdownRemark.edges;

  posts = [...posts, ...posts, ...posts, ...posts, ...posts];

  return (
    <div>
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
