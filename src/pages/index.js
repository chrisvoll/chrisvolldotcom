import React from 'react';
import Link from 'gatsby-link';

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
  console.log(posts);

  return (
    <div>
      <h1>ohai</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/page-2/">Go to page 2</Link>

      {posts.map(post => {
        return (
          <div className="blog-post-preview" key={post.node.id}>
            <h1>
              <Link to={post.node.frontmatter.path}>
                {post.node.frontmatter.title}
              </Link>
            </h1>
            <h2>
              {post.node.frontmatter.date}
            </h2>
            <p>
              {post.node.excerpt}
            </p>
          </div>
        );
      })}
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
          }
        }
      }
    }
  }
`;
