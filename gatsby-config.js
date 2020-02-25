const config = ({ basePath = `/`, mdx = true }) => ({
  siteMetadata: {
    siteTitle: `rogojeni`,
    siteTitleAlt: `rogojeni`,
    siteHeadline: `Alianta Rogojeni`,
    siteUrl: `https://rogojeni.ro`,
    siteDescription: `Home Page for Rogojeni Alliance`,
    siteLanguage: `ro`,
    siteImage: `/banner.jpg`,
    author: `Tiberiu Tofan`,
    basePath,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `sections`,
        path: `${__dirname}/src/sections`,
      },
    },
    mdx && {
      resolve: `gatsby-plugin-mdx`,
      options: {},
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-theme-ui`,
  ],
});

module.exports = config({ basePath: `/`, mdx: true });
