module.exports = {
  siteMetadata: {
    title: 'Marco McNulty',
    description:
      'A place to write something interesting to me...and maybe to you.',
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.jsx'),
        },
      },
    },
  ],
};
