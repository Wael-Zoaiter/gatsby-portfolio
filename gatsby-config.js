module.exports = {
  siteMetadata: {
    description: "Wael Zoaiter Portfolio",
    locale: "en",
    showThemeLogo: false,
    title: "Wael Zoaiter",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require("tailwindcss")(require("./tailwind.config")("warm-red")),
          require("postcss-input-range"),
          require("autoprefixer"),
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: "./content",
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
