/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Jorge Serras | Electrical engineer developer",
    description: "I'm Jorge Serras, an Electrical and Computers engineer from Portugal. Feel free to explore and experience some of my personal projects and do not hesitate to contact me!",
    url: "https://jorgeserras.com",
    image: "/favicon.ico",
    author: "Jorge Serras"
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-transformer-remark',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-material-ui',
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    }
  ],
}
