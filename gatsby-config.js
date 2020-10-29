/**
 * Configure your Gatsby site with this file.
 *
<<<<<<< HEAD
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
=======
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
>>>>>>> 4b0868f35b9b9658a4d05113308fa73de8d25095
 */

module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    `gatsby-plugin-react-helmet`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `data`,
    //     path: `${__dirname}/src/data/`
    //   }
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/img/`,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Barlow Condensed']
        }
      }
    }
  ],
}
