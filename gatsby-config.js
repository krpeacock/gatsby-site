module.exports = {
  siteMetadata: {
    title: "Gatsby Default Starter"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/favicon.png",
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false
        }
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `0hholmgktv6h`,
        accessToken: `b39dd2a09cddaa75ff36ccbc51e1d53c8c85c4287413a4db4c9983a874dd1329`
      }
    }
  ]
};
