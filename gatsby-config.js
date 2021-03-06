module.exports = {
	siteMetadata: {
		title: `Dan Proudfoot`,
		description: `The portfolio of Dan Proudfoot, Front End Developer in Bath`,
		author: `@danproudfeet`
	},
	plugins: [
		'gatsby-plugin-root-import',
		`gatsby-plugin-postcss`,
		`gatsby-plugin-react-helmet`,

		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Dan Proudfoot`,
				short_name: `Dan Proudfoot`,
				start_url: `/`,
				background_color: `#fff`,
				theme_color: `#7e56f2`,
				display: `minimal-ui`,
				icon: `src/media/images/icon.png` // This path is relative to the root of the site.
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/media/images`
			}
		},
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `markdown-pages`,
				path: `${__dirname}/src/content/live`
			}
		},
		{
			resolve: `gatsby-plugin-mdx`,
			options: {
				extensions: [`.mdx`, `.md`]
			}
		},

		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [
					`josefin sans:300,400,600,700`, // you can also specify font weights and styles
					`lato:300,400,600,700` // you can also specify font weights and styles
				],
				display: 'swap'
			}
		},
		{
			resolve: 'gatsby-plugin-react-svg',
			options: {
				rule: {
					include: /images/
				}
			}
		}
	]
};
