require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `test`,
    description: `We are a healthcare solutions company that enables global healthcare organizations address complex challenges to improve health and business outcomes`,
    author: `@gatsbyjs`,
    keywords: `Pharma Content. Medical Writing, HCPs, Healthcare Professionals, Product Commercialization, Product Commercialization Solutions, Pharma Product Commercialization, MCM, MLR, Data hub, Campaign Services, Pharma Campaigns, Product Launch, Pharma Product launch, Pharma Content Services, Virtual Engagement Manager, Virtual Marketing Operations, Campendium, Pharma Content Migration, DAMS operations, MCM Mix `,
    info: `Hi Indegene`,
    shows: {
      names: [
        {
          title: "abc",
        },
        {
          title: "def",
        },
        {
          title: "ghi",
        }
      ]
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.SPACE_ID,
        accessToken: process.env.ACCESS_TOKEN,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}