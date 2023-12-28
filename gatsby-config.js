/**
 * @type {import('gatsby').GatsbyConfig}
 */

const adapter = require("gatsby-adapter-netlify")

module.exports = {

  adapter: adapter({
    excludeDatastoreFromEngineFunction: false,
  }),

  siteMetadata: {
    title: `kursgewinn`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-postcss", "gatsby-plugin-image", "gatsby-plugin-sitemap", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};