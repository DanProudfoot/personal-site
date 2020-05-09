module.exports = {
	siteMetadata: {
		title: `Dan Proudfoot`,
		description: `The portfolio of Dan Proudfoot, Front End Developer in Bath`,
		author: `@danproudfeet`
	},
	plugins: [
		`gatsby-plugin-postcss`,
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
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
				icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `markdown-pages`,
				path: `${__dirname}/src/markdown`
			}
		},
		`gatsby-transformer-remark`,

		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [
					`josefin sans\:400,600,700` // you can also specify font weights and styles
				],
				display: 'swap'
			}
		}
	]
};
