import React from 'react';
import Link from 'gatsby-link';
import PostItem from '../components/PostItem';

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <div>
      <h1>ohai</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>

      {posts.map(post => <PostItem post={post.node} key={post.node.id} />)}
    </div>
  );
};

export default IndexPage;

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
