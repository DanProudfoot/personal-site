/**

 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

const React = require('react');
const { AnimateSharedLayout, AnimatePresence } = require('framer-motion');

const { Header } = require('./src/components/organisms');
const { Page, Links } = require('./src/components/molecules');
const Providers = require('./src/providers').default;

exports.wrapPageElement = ({ element, props }) => {
	// props provide same data to Layout as Page element will get
	// including location, data, etc - you don't need to pass it
	return (
		<Providers>
			{/* <AnimateSharedLayout type="crossfade"> */}
			<Page>
				<Links></Links>
				<Header {...props}></Header>
				<AnimatePresence>{element}</AnimatePresence>
			</Page>
			{/* </AnimateSharedLayout> */}
		</Providers>
	);
};
