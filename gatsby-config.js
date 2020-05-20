const config = ({basePath = `/`, mdx = true}) => ({
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
        `gatsby-plugin-sharp`,
        `gatsby-remark-images`,
        `gatsby-remark-responsive-iframe`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `sections`,
                path: `${__dirname}/src/sections`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        mdx && {
            resolve: `gatsby-plugin-mdx`,
            options: {
                gatsbyRemarkPlugins: [
                    `gatsby-remark-responsive-iframe`,
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            backgroundColor: `transparent`,
                            disableBgImageOnAlpha: true
                        }
                    }
                ]
            },
        },
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-typescript`,
        `gatsby-plugin-emotion`,
        `gatsby-plugin-theme-ui`,
    ],
});

module.exports = config({basePath: `/`, mdx: true});
