module.exports = {
  siteMetadata: {
    title: `Career Returnship`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
    /*{
      resolve: `gatsby-source-figma`,
      options: {
        // For files:
        fileId: `MbMj1N23bQuMvZwoptLK7N`,
        // For images:
        nodeIds: [`1%3A2`],
        // optional for nodeIds: A number between 0.01 and 4, the image scaling factor
        scale: 1,
        // optional: A string enum for the image output format, can be jpg, png, svg, or pdf
        format: 'png',
        // For projects:
        //projectId: `834958753448044552`,
        // Get an access token from Figma Account Settings.
        accessToken: `52695-b180b61c-30bf-4e98-8830-9f65c88dd071`,
      },
    },*/
  ],
}
