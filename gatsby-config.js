module.exports = {
  siteMetadata: {
    title: 'Waffle Studio',
    description: 'Waffle Studio',
    url: 'waffle.studio',
    author: 'Waffle Studio',
    twitter: 'Waffle Studio',
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },

    'gatsby-transformer-sharp',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: ``,
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
  ],
}
