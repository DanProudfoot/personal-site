/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

const React = require('react');
const { AnimatePresence } = require('framer-motion');
const { CloudinaryContext } = require('cloudinary-react');

const { Header } = require('./src/components/organisms');
const { Page, Links } = require('./src/components/molecules');
const Providers = require('./src/providers').default;

exports.wrapPageElement = ({ element, props }) => {
	// props provide same data to Layout as Page element will get
	// including location, data, etc - you don't need to pass it
	return (
		<CloudinaryContext
			cloudName={process.env.GATSBY_CLOUDINARY_CLOUD_NAME}
			apiKey={process.env.GATSBY_CLOUDINARY_API_KEY}
			apiSecret={process.env.GATSBY_CLOUDINARY_API_SECRET}
		>
			<Providers location={props.location}>
				<Page>
					<Links></Links>
					<Header {...props}></Header>
					<AnimatePresence exitBeforeEnter>{element}</AnimatePresence>
				</Page>
			</Providers>
		</CloudinaryContext>
	);
};
