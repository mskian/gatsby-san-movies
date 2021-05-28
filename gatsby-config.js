/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Movies and Web Series`,
    description: `My Currently Watching and Favourite Movies and Web Series.`,
    siteUrl: "https://sanmovies.netlify.app",
  },
  flags: {
    DEV_SSR: false,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 900,
              loading: `lazy`,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `San Movies`,
        short_name: `San Movies`,
        description: `My Currently Watching and Favourite Movies and Web Series.`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `standalone`,
        icon: `static/favicon.png`,
        icon_options: {
          purpose: `any maskable`,
        },
        legacy: true,
      },
    },
    {
      resolve: `gatsby-plugin-html-attributes`,
      options: {
        lang: `en`,
      },
    },
    {
      resolve: `gatsby-plugin-preconnect`,
      options: {
        domains: [
          `https://fonts.googleapis.com`,
          `https://fonts.gstatic.com`,
          `https://www.googletagmanager.com`,
          `https://analytics.google.com`,
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet-async`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
  ],
}
