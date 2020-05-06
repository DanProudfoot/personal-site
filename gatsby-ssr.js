/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

const React = require('react');
const { AnimatePresence } = require('framer-motion');
const Header = require('./src/components/Header/Header').default;

exports.wrapPageElement = ({ element, props }) => {
	// props provide same data to Layout as Page element will get
	// including location, data, etc - you don't need to pass it
	return (
		<>
			<Header {...props}></Header>
			<AnimatePresence>{element}</AnimatePresence>
		</>
	);
};
