module.exports = {
  siteMetadata: {
    name: `Matthew Hoth`,
    title: `JAMstack Presentation`,
    date: `Feb 21, 2019`
  },
  plugins: [
    `gatsby-plugin-layout`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `slides`,
        path: `${__dirname}/src`
      }
    }
  ]
};
