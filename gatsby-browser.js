/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

const React = require('react');
const { AnimatePresence } = require('framer-motion');

const { Header, BackgroundBlock } = require('./src/components/organisms');
const { Page, Links } = require('./src/components/molecules');
const Providers = require('./src/providers').default;

exports.wrapPageElement = ({ element, props }) => {
	// props provide same data to Layout as Page element will get
	// including location, data, etc - you don't need to pass it
	return (
		<Providers location={props.location}>
			<>
				<Page>
					<Links></Links>
					<Header {...props}></Header>
					<AnimatePresence exitBeforeEnter>{element}</AnimatePresence>
				</Page>
				<BackgroundBlock></BackgroundBlock>
			</>
		</Providers>
	);
};
