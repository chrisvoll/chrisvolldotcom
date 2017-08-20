module.exports = {
  siteMetadata: {
    title: 'Chris. Voll. Dot. Com.'
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/posts`,
        name: 'posts'
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-prismjs',
          {
            resolve: 'gatsby-remark-images',
            options: {
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Chris Voll',
        short_name: 'chrisvoll',
        start_url: '/',
        background_color: '#f7f0eb',
        theme_color: '#a2466c'
      }
    },
    'gatsby-plugin-offline'
  ]
};
