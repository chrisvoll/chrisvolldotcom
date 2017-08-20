import React from 'react';
import Link from 'gatsby-link';
import PostItem from '../components/PostItem';

export default function IndexPage({ data }) {
  let posts = data.allMarkdownRemark.edges;

  posts = [...posts, ...posts, ...posts, ...posts, ...posts];

  return (
    <div>
      {posts.map((post, i) =>
        <PostItem
          post={post.node}
          key={`${i}${post.node.id}`}
          transitionDelay={i * 200}
        />
      )}
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
