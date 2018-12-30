module.exports = {
  siteMetadata: {
    title: "Jeremy's Blog",
    description: 'Awesome new blog to make my first Gatsby project',
    author: 'Jeremy London',
    siteUrl: `https://progatsby2london.netlify.com`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: `Jeremy's Level Up Blog`,
        short_name: `J's Blog`,
        start_url: '/',
        background_color: '#524763',
        theme_color: '#524763',
        display: 'minimal-ui',
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/posts`,
        name: 'posts',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images`,
        name: 'images',
      },
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-styled-components',
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-netlify`, // make sure to put last in the array
  ],
}
