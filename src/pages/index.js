import React from 'react';
import Link from 'gatsby-link';
import PostItem from '../components/PostItem';

export default function IndexPage({ data }) {
  const posts = data.allMarkdownRemark.edges;

  return (
    <div>
      {posts.map(post => <PostItem post={post.node} key={post.node.id} />)}
    </div>
  );
}

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
