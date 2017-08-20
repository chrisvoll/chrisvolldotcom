const path = require('path');
const getAllPosts = require('./src/graphql/getAllPosts');

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  return getAllPosts(graphql).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    createTagPages(createPage, result.data.allMarkdownRemark.edges);
    createPostPages(createPage, result.data.allMarkdownRemark.edges);
  });
};

function createTagPages(createPage, edges) {
  const TagPage = path.resolve('src/templates/TagPage.js');

  let tags = {};

  edges.forEach(({ node }) => {
    if (!node.frontmatter.tags) {
      return;
    }

    node.frontmatter.tags.forEach(tag => {
      tags[tag] = [...(tags[tag] || []), node];
    });
  });

  Object.keys(tags).forEach(tag => {
    console.log('creating page for', tag);
    createPage({
      path: `/tags/${tag}`,
      component: TagPage,
      context: {
        tag,
        posts: tags[tag]
      }
    });
  });
}

function createPostPages(createPage, edges) {
  const BlogPost = path.resolve('src/templates/BlogPost.js');

  edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: BlogPost,
      context: {}
    });
  });
}
