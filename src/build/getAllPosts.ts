module.exports = graphql =>
  graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            excerpt(pruneLength: 250)
            html
            id
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              path
              title
              tags
            }
          }
        }
      }
    }
  `);
